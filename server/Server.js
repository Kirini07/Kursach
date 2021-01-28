const config = require('config')

const app = require('./App')
const { getClient, close} = require('./dataBase/index')

const PORT = config.get('port')
const baseUrl = config.get('baseUrl')

const start = () => {
    app.listen(PORT,
        () =>  console.log(`Server has been started on ${baseUrl}`));
}
getClient(start)






