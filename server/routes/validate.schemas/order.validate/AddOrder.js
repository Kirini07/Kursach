const {check} = require('express-validator');
const AddOrderValidate = () => ([
    check('id', 'Enter order id').exists(),
    check('placeN', 'Enter the place number!').exists().isNumeric(),
    check('list', 'Incorrect order!').exists().isArray(),
    check('price', 'Incorrect price!').exists().isNumeric(),
    check('status', 'Incorrect status!').exists().isString(),
    check('waiter', 'Incorrect number of waiter!').exists().isNumeric()
]);

 module.exports = AddOrderValidate;