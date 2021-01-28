const GetAllCourses = 'SELECT * FROM courses';
const GetAllCoursesByCategory = 'SELECT * FROM courses WHERE category_of_course = $1';
const GetCategoryOfCourse = 'SELECT DISTINCT category_of_course FROM courses';

module.exports = { GetAllCourses, GetAllCoursesByCategory, GetCategoryOfCourse };