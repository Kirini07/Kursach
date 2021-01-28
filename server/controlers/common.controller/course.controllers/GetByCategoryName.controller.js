const { validationResult} = require('express-validator');

const { query } = require('../../../dataBase');
const { GetAllCoursesByCategory } = require('../../../dataBase/models/Courses.client');

const GetByCategory = (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty())  return res.status(400).json({ errors: errors.array(), message: 'Некоректна інформація!'  });

        const { categoryName } = req.body;

        query(GetAllCoursesByCategory, [categoryName])
            .then(courses => res.status(200).json(courses.rows));
    }catch (e) {
        res.status(400).json({ message: 'Щось пішло не так, будь-ласка спробуйте ще раз' });
    };
};
module.exports = GetByCategory;