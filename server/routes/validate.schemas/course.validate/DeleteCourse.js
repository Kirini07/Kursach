const {check} = require('express-validator');
const DeleteCourseValidate = () => ([
    check('courseId', 'Enter id of position!').exists().isNumeric()
]);
module.exports = DeleteCourseValidate;