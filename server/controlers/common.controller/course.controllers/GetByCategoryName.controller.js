const { validationResult } = require("express-validator");

const { query } = require("../../../dataBase");
const {
  GetAllCoursesByCategory,
} = require("../../../dataBase/models/Courses.client");

const GetByCategory = (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res
        .status(400)
        .json({ errors: errors.array(), message: "Incorrect information!" });

    const { categoryName } = req.body;

    query(GetAllCoursesByCategory, [categoryName]).then((courses) =>
      res.status(200).json(courses.rows)
    );
  } catch (e) {
    res.status(400).json({ message: "Something went wrong, try again" });
  }
};
module.exports = GetByCategory;
