const { validationResult} = require('express-validator');

const { query } = require('../../../dataBase');
const { PayOrderById } = require('../../../dataBase/models/Orders');

const payOrder = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array(), message: 'Некоректна інформація!'  });

        const { orderId } = req.body;

        query(PayOrderById, [orderId])
            .then(order => res.status(200).json({ message: 'Замовлення оплачене!', order }));
    }catch (e) {
        res.status(400).json({ message: 'Щось пішло не так, будь-ласка спробуйте ще раз' });
    }
};
module.exports = payOrder;