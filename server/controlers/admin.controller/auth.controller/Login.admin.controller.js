const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');

const secretKey = config.get('jwtSecret');
const { query } = require('../../../dataBase');
const { getLogin } = require('../../../dataBase/models/Administrators');

const adminLogin = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array(), message: 'Некоректна інформація!' });

    const { email, password } = req.body;

    const candidate = await query(getLogin, [email]);

    if (!candidate.rows[0])
      return res.status(400).json({ message: 'Такого користувача не існує!' });

    const passExpect = password === candidate.rows[0].password;

    if (!passExpect) return res.status(400).json({ message: 'Некоректна інформація!' });

    const token = jwt.sign({ userId: candidate.rows[0].pk_admin_id, role: 'admin' }, secretKey, {
      expiresIn: '1h',
    });

    res.json({ token, role: 'admin', id: candidate.rows[0].pk_admin_id });
  } catch (e) {
    res.status(400).json({ message: 'Щось пішло не так, будь-ласка спробуйте ще раз' });
  }
};
module.exports = adminLogin;
