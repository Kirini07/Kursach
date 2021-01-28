const {check} = require('express-validator')
const LoginValidate = () => ([
    check('email', 'Некорректний email').isEmail(),
    check('password', 'Мінімальна довжина пароля 6 символів')
        .isLength({ min: 6 })
]);

module.exports = LoginValidate