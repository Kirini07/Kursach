const addEmployees = 'INSERT INTO employees (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)';
const getEmployees = 'SELECT * FROM employees';
const getEmployeeByID = `${getEmployees} WHERE pk_employees_id = $1`;
const getEmployeeByEmail = `${getEmployees} WHERE email = $1`;
const getLogin = `${getEmployees} WHERE email = $1`;

module.exports = { addEmployees, getEmployees, getEmployeeByID, getEmployeeByEmail, getLogin };