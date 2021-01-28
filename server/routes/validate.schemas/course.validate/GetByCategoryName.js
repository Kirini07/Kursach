const {check} = require('express-validator')
const GetByCategoryName = () => ([
    check('categoryName', 'Вкажіть назву позиції!').exists().isString()
]);
module.exports = GetByCategoryName