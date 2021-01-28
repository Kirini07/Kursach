const { Router } = require('express');
const auth = require('../../../middlewars/auth.middlewar');

const AddOrder = require('../../../controlers/common.controller/orders.controllers/Add.order.controller');
const PayOrder = require('../../../controlers/common.controller/orders.controllers/Pay.order.controller');
const EditOrder = require('../../../controlers/common.controller/orders.controllers/Edit.order.controller');

const AddOrderValidate = require('../../validate.schemas/order.validate/AddOrder');
const PayOrderValidate = require('../../validate.schemas/order.validate/PayOrder');
const EditOrderValidate = require('../../validate.schemas/order.validate/EditOrder');

const router = Router();

router.post('/add', AddOrderValidate(), auth, AddOrder);

router.post('/pay', PayOrderValidate(), auth, PayOrder);
router.post('/edit', EditOrderValidate(), auth, EditOrder);

module.exports = router;
