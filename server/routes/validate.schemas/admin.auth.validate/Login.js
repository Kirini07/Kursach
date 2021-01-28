const {check} = require('express-validator')
const LoginValidate = () => ([
    check('email', 'Некорректний email').isEmail(),
    check('password', 'Мінімальна довжина пароля 10 символів')
        .isLength({ min: 10 })
]);

module.exports = LoginValidate