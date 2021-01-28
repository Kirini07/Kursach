const {check} = require('express-validator')
const PayOrderValidate = () => ([
    check('orderId', 'Вкажіть номер замовлення!').exists(),
]);

module.exports = PayOrderValidate