const { pool } = require('../models/pool');
const { insertUsers, dropTables, createUsersTable} = require('./queries');

const executeQueryArray = async arr => new Promise(resolve => {
  const stop = arr.length;
  arr.forEach(async (q, index) => {
    await pool.query(q);
    if (index + 1 === stop) resolve();
  });
});

const dropAllTables = () => {
  executeQueryArray([dropTables]);
}

const createTables = () => {
  executeQueryArray([createUsersTable]);
}

const insertIntoTables = () => {
  executeQueryArray([insertUsers]);
}

module.exports = { dropAllTables, createTables, insertIntoTables };
