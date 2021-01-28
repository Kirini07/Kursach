const { validationResult } = require('express-validator');

const { query } = require('../../../dataBase');
const { EditOrderById } = require('../../../dataBase/models/Orders');

const payOrder = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array(), message: 'Incorrect information!' });

    const { orderId, list, price } = req.body;

    query(EditOrderById, [orderId, JSON.stringify(list), price]).then(order =>
      res.status(200).json({ message: 'Order changed!', order })
    );
  } catch (e) {
    res.status(400).json({ message: 'Something went wrong, please try again' });
  }
};
module.exports = payOrder;
