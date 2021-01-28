const {check} = require('express-validator');
const GetByCategoryName = () => ([
    check('categoryName', 'Enter name of position!').exists().isString()
]);
module.exports = GetByCategoryName;