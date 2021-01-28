const { query } = require('../../../dataBase');
const { GetAllCourses } = require('../../../dataBase/models/Courses.client');

const GetAll = async (req, res) => {
  try {
    query(GetAllCourses).then(courses => res.status(200).json(courses.rows));
  } catch (e) {
    res.status(400).json({ message: 'Something went wrong, try again' });
  }
};
module.exports = GetAll;
