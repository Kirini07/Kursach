const {check} = require('express-validator');
const AddCourse = () => ([
    check('title', 'Вкажіть назву позиції!').exists().isString(),
    check('composition', 'Некоректне склад!').exists().isArray(),
    check('cost_price', 'Некоректна собівартість!').exists().isNumeric(),
    check('price', 'Некоректна ціна!').exists().isNumeric(),
    check('category_of_course', 'Некоректна категорія!').exists().isString(),
    check('img_path', 'Вкажіть URL!').exists()
]);

module.exports = AddCourse;
