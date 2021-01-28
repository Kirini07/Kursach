const {check} = require('express-validator');
const AddOrderValidate = () => ([
    check('id', 'Вкажіть id замовлення').exists(),
    check('placeN', 'Вкажіть номер столу!').exists().isNumeric(),
    check('list', 'Некоректне замовлення!').exists().isArray(),
    check('price', 'Некоректна ціна!').exists().isNumeric(),
    check('status', 'Некоректний статус!').exists().isString(),
    check('waiter', 'Вкажіть офіціанта!').exists().isNumeric()
]);

 module.exports = AddOrderValidate;