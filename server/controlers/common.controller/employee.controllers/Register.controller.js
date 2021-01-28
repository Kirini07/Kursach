const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const { query } = require("../../../dataBase");

const {
  addEmployees,
  getEmployeeByEmail,
} = require("../../../dataBase/models/Employees");

const EmployeeRegisterController = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res
        .status(400)
        .json({ errors: errors.array(), message: "Incorrect information!" });

    const { firstName, lastName, password, email } = req.body;

    const candidate = await query(getEmployeeByEmail, [email]);

    if (candidate.rows.length !== 0)
      return res.status(400).json({ message: "This user is exist!" });

    const hashPass = await bcrypt.hash(password, 5);

    query(addEmployees, [firstName, lastName, email, hashPass]);

    res.status(200).json({ message: "Created user!" });
  } catch (e) {
    res.status(400).json({ message: "Something went wrong, try again" });
  }
};

module.exports = EmployeeRegisterController;
