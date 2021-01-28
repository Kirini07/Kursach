const {check} = require('express-validator');
const AddCourse = () => ([
    check('title', 'Enter the name of the position!').exists().isString(),
    check('composition', 'Incorrect composition!').exists().isArray(),
    check('cost_price', 'Incorrect cost-price!').exists().isNumeric(),
    check('price', 'Incorrect price!').exists().isNumeric(),
    check('category_of_course', 'Incorrect category name!').exists().isString(),
    check('img_path', 'Enter URL of image!').exists()
]);

module.exports = AddCourse;
