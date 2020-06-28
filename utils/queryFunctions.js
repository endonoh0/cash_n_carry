const { pool } = require('../models/pool');
const {dropTables, insertUsers, insertProducts, createUsers, createProducts} = require('./queries');

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

const createUsersTables = () => {
  executeQueryArray([createUsers]);
}

const insertIntoUsers = () => {
  executeQueryArray([insertUsers]);
}

const createProductsTable = () => {
  executeQueryArray([createProducts]);
}

const insertIntoProducts = () => {
  executeQueryArray([insertProducts]);
}

module.exports = { dropAllTables, createUsersTables, createProductsTable, insertIntoUsers, insertIntoProducts };
