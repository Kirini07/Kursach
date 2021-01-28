const {Router} = require('express');

const AddCourse = require('../../../controlers/admin.controller/course.controllers/Add.course.controller');
const DeleteCourse = require('../../../controlers/admin.controller/course.controllers/Delete.course.controller');

const AddCourseValidate = require('../../validate.schemas/course.validate/AddCourse');
const DeleteCourseValidate = require('../../validate.schemas/course.validate/DeleteCourse');

const router = Router();

router.post('/add', AddCourseValidate(), AddCourse);
router.post('/delete', DeleteCourseValidate(), DeleteCourse);

module.exports = router;