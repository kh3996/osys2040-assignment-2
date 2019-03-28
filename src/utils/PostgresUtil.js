const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // ssl: true,
  user: 'osys1000',
  host: '127.0.0.1',
  database: 'chat_server',
  password: '1q1q1q1q',
  port: '5432'
});

module.exports = {
  pool,
}
