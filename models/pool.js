require('dotenv').config();

const { connectionString } = require('../settings');
const { Pool } = require('pg');

const pool = new Pool({ connectionString });
pool.connect();

module.exports = { pool };
