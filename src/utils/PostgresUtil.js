const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
//  user: 'osys1000',
//	user: 'postgres',
//  host: '127.0.0.1',
//  host: 'localhost',
//  database: 'chatserver',
//  password: '1q1q1q1q',
//  port: '5432',
})

module.exports = {
  pool,
}
