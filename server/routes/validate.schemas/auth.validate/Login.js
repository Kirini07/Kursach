const {check} = require('express-validator');
const LoginValidate = () => ([
    check('email', 'Incorrect email').isEmail(),
    check('password', 'The minimum password length is 6 characters')
        .isLength({ min: 6 })
]);

module.exports = LoginValidate;