const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'Salamon077',
    host: 'localhost',
    port: 5432,
    database: 'pg_first_db'
})

module.exports = pool
