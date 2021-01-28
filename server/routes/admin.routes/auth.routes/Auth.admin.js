const { Router } = require('express')

const router = new Router()

const AdminLoginController = require('../../../controlers/admin.controller/auth.controller/Login.admin.controller')
const AdminLoginValidate = require('../../validate.schemas/admin.auth.validate/Login')

router.post('/login',
    AdminLoginValidate(),
    AdminLoginController
);

module.exports = router;