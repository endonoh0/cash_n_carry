const { pool } = require('../models/pool');
const {
    dropTable,
    insertUsers,
    insertProducts,
    insertFavorites,
    createUsers,
    createProducts,
    createFavorites
} = require('./queries');

const executeQueryArray = async (arr) =>
    new Promise((resolve) => {
        const stop = arr.length;
        arr.forEach(async (q, index) => {
            await pool.query(q);
            if (index + 1 === stop) resolve();
        });
    });

const dropAllTables = () => {
    executeQueryArray([dropTable]);
};

const createUsersTables = () => {
    executeQueryArray([createUsers]);
};

const insertIntoUsers = () => {
    executeQueryArray([insertUsers]);
};

const createProductsTable = () => {
    executeQueryArray([createProducts]);
};

const insertIntoProducts = () => {
    executeQueryArray([insertProducts]);
};

const createFavoritesTable = () => {
    executeQueryArray([createFavorites]);
};

const insertIntoFavorites = () => {
    executeQueryArray([insertFavorites]);
};

module.exports = {
    dropAllTables,
    createUsersTables,
    createProductsTable,
    createFavoritesTable,
    insertIntoUsers,
    insertIntoProducts,
    insertIntoFavorites
};
