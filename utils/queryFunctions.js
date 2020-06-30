const { pool } = require('../models/pool');
const {
    dropTable,
    insertUsers,
    insertProducts,
    insertFavorites,
    insertMessages,
    createUsers,
    createProducts,
    createFavorites,
    createMessage
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
const createMessagesTable = () => {
    executeQueryArray([createMessage]);
};

const insertIntoMessages = () => {
    executeQueryArray([insertMessages]);
};

module.exports = {
    dropAllTables,
    createUsersTables,
    createMessagesTable,
    createProductsTable,
    createFavoritesTable,
    insertIntoUsers,
    insertIntoProducts,
    insertIntoFavorites,
    insertIntoMessages
};
