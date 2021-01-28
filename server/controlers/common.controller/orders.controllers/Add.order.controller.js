const { validationResult} = require('express-validator');

const { query } = require('../../../dataBase');
const { AddActiveOrder } = require('../../../dataBase/models/Orders');

const AddOrder = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array(), message: 'Некоректна інформація!'  });

        const {id, placeN, list, price, status = 'active', waiter } = req.body;

        query(AddActiveOrder, [id, placeN, JSON.stringify(list), price, status, waiter])
            .then(order => res.status(200).json({ message: 'Замовлення додано!', order }));
    }catch (e) {
        res.status(400).json({ message: 'Щось пішло не так, будь-ласка спробуйте ще раз' });
    };
};
module.exports = AddOrder;