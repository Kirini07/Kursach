const {check} = require('express-validator')
const EditOrderValidate = () => ([
    check('orderId', 'Вкажіть номер замовлення!').exists().isNumeric(),
    check('list', 'Некоректне замовлення!').exists().isArray(),
    check('price', 'Некоректна ціна!').exists().isNumeric(),
]);

module.exports = EditOrderValidate