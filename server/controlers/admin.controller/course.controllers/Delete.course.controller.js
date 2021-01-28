const { validationResult } = require('express-validator')

const { query } = require('../../../dataBase')
const { DeleteCourseFN } = require('../../../dataBase/models/Courses.admin')

const DeleteCourse = async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array(), message: 'Некоректна інформація!'  })

        const { courseId } = req.body

        query( DeleteCourseFN, [ courseId ])
            .then(order => res.status(200).json({ message: 'Позицію видалено!', order }))
    }catch (e) {
        res.status(400).json({ message: 'Щось пішло не так, будь-ласка спробуйте ще раз' })
    }
};
module.exports = DeleteCourse;