const {check} = require('express-validator');
const LoginValidate = () => ([
    check('email', 'Incorrect email').isEmail(),
    check('password', 'The minimum password length is 10 characters')
        .isLength({ min: 10 })
]);

module.exports = LoginValidate;