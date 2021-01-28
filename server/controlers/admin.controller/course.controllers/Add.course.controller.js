const { validationResult } = require('express-validator');

const { query } = require('../../../dataBase');
const { AddNewCourse } = require('../../../dataBase/models/Courses.admin');

const AddCourse = async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array(), message: 'Некоректна інформація!'  });

        const { title, composition, cost_price, price, category_of_course, img_path } = req.body;

        query(AddNewCourse, [title, JSON.stringify(composition), cost_price, price, category_of_course, img_path ])
            .then(order => res.status(200).json({ message: 'Позицію додано!', order }));
    }catch (e) {
        res.status(400).json({ message: 'Щось пішло не так, будь-ласка спробуйте ще раз' });
    };
};
module.exports = AddCourse;