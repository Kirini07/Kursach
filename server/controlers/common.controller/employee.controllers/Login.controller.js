const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");

const secretKey = config.get("jwtSecret");
const { query } = require("../../../dataBase");
const { getLogin } = require("../../../dataBase/models/Employees");

const login = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res
        .status(400)
        .json({ errors: errors.array(), message: "Incorrect information!" });

    const { email, password } = req.body;
    const candidate = await query(getLogin, [email]);

    if (!candidate.rows[0])
      return res.status(400).json({ message: "This user is not exist!" });

    const passExpect = await bcrypt.compare(
      password,
      candidate.rows[0].password
    );

    if (!passExpect)
      return res.status(400).json({ message: "Incorrect information!" });

    const token = jwt.sign(
      { userId: candidate.rows[0].pk_employees_id, role: "employee" },
      secretKey,
      { expiresIn: "1h" }
    );

    res.json({
      token,
      role: "employee",
      id: candidate.rows[0].pk_employees_id,
    });
  } catch (e) {
    res.status(400).json({ message: "Something went wrong, try again" });
  }
};
module.exports = login;
