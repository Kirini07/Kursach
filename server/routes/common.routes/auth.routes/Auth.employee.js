const {Router} = require('express');

const EmployeeRegisterController = require('../../../controlers/common.controller/employee.controllers/Register.controller');
const EmployeeLoginController = require('../../../controlers/common.controller/employee.controllers/Login.controller');

const RegisterValidate = require('../../validate.schemas/auth.validate/Register');
const LoginValidate = require('../../validate.schemas/auth.validate/Login');

const router = Router();

router.post('/register',
    RegisterValidate(),
    EmployeeRegisterController
);
router.post('/login',
    LoginValidate(),
    EmployeeLoginController
);


module.exports = router;