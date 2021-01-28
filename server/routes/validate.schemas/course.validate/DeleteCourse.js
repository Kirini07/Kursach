const {check} = require('express-validator');
const DeleteCourseValidate = () => ([
    check('courseId', 'Вкажіть id позиції!').exists().isNumeric()
]);
module.exports = DeleteCourseValidate;