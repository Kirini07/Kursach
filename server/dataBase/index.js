const { Pool } = require('pg')
const config = require('config')

let pool;

if(process.env.NODE_ENV === 'test'){
    pool = new Pool(config.get('pgConfigDev'))

}else{
    pool = new Pool(config.get('pgConfigProd'))
}


module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    },
    getClient: (callback) => {
        pool.connect((err, client, done) => {
            callback(err, client, done)
        })
    },
    close: () => pool.end()
}

