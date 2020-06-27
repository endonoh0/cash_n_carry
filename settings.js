require('dotenv').config();

const connectionString = process.env.DB_URL;

module.exports = { connectionString };
