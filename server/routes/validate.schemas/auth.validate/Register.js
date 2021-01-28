const {check} = require('express-validator');
const RegisterValidate = () => ([
    check('firstName', 'Incorrect first name, this field is require').exists(),
    check('lastName', 'Incorrect last name, this field is require').exists(),
    check('email', 'Incorrect email').isEmail(),
    check('password', 'The minimum password length is 10 characters')
        .isLength({ min: 10 })
])

module.exports = RegisterValidate;