const {check} = require('express-validator');
const RegisterValidate = () => ([
    check('firstName', 'Некорректне імя').exists(),
    check('lastName', 'Некорректна фамілія').exists(),
    check('email', 'Некорректний email').isEmail(),
    check('password', 'Мінімальна довжина пароля 10 символів')
        .isLength({ min: 10 })
])

module.exports = RegisterValidate;