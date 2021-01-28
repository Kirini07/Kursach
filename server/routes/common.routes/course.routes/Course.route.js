const { Router } = require('express');
const auth = require('../../../middlewars/auth.middlewar');

const GetAllController = require('../../../controlers/common.controller/course.controllers/GetAll.controller');
const GetCategoryNames = require('../../../controlers/common.controller/course.controllers/GetCategoryNames.controller');
const GetByCategoryNames = require('../../../controlers/common.controller/course.controllers/GetByCategoryName.controller');

const GetByCategoryNamesValidate = require('../../validate.schemas/course.validate/GetByCategoryName');

const router = Router();

router.get('/all', auth, GetAllController);
router.get('/category', auth, GetCategoryNames);
router.post('/byCategory', GetByCategoryNamesValidate(), auth, GetByCategoryNames);

module.exports = router;
