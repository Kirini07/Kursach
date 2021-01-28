const AddNewCourse = 'SELECT add_new_course($1, $2, $3, $4, $5, $6);'
const DeleteCourseFN = 'SELECT delete_course_by_id ($1);'
module.exports = { AddNewCourse, DeleteCourseFN }