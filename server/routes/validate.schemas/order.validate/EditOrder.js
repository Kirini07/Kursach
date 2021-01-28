const { check } = require('express-validator');
const EditOrderValidate = () => [
  check('orderId', 'Enter number of order!').exists().isNumeric(),
  check('list', 'Incorrect order list!').exists().isArray(),
  check('price', 'Incorrect order price!').exists().isNumeric(),
];

module.exports = EditOrderValidate;
