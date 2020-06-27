require('dotenv').config();

const connectionString = process.env.DATABASE_URL;

module.exports = { connectionString };
