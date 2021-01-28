const { check } = require('express-validator');
const PayOrderValidate = () => [check('orderId', 'Enter the place number!').exists()];

module.exports = PayOrderValidate;
