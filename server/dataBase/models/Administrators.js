const getAdmin = 'SELECT * FROM administrators';
const getLogin = `${getAdmin} WHERE email = $1`;

module.exports = { getLogin };