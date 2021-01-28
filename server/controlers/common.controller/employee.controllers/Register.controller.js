const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');

const { query } = require('../../../dataBase');

const { addEmployees, getEmployeeByEmail } = require('../../../dataBase/models/Employees');

const EmployeeRegisterController = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty())  return res.status(400).json({ errors: errors.array(), message: 'Некоректна інформація!'  });

        const { firstName, lastName,  password, email } = req.body;

        const candidate = await query(getEmployeeByEmail, [email]);

        if (candidate.rows.length !== 0) return res.status(400).json({ message: 'Такий користувач вже існує!' });

        const hashPass =  await bcrypt.hash(password, 5);

        query(addEmployees, [firstName, lastName, email, hashPass]);

        res.status(200).json({ message: 'Користувача створено!' });

    }catch (e) {
        res.status(400).json({ message: 'Щось пішло не так, будь-ласка спробуйте ще раз' });
    };
};

module.exports = EmployeeRegisterController;