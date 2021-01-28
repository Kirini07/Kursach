const { query } = require('../../../dataBase');
const { GetCategoryOfCourse } = require('../../../dataBase/models/Courses.client');

const GetCategoryNamesController = async (req, res) => {
  try {
    query(GetCategoryOfCourse).then(courses => {
      const rows = courses.rows.map(obj => obj.category_of_course);
      res.status(200).json({ message: 'All categories!', rows });
    });
  } catch (e) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};
module.exports = GetCategoryNamesController;
