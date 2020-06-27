require('dotenv').config();

const { connectionString } = require('../settings');
const { Pool } = require('pg');

const db = new Pool({ connectionString });
db.connect();

module.exports = { db };
