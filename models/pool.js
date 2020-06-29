const dotenv = require('dotenv');
dotenv.config();

const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });

// pool.connect();

module.exports = { pool };
