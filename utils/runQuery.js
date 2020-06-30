const {
    dropAllTables,
    createUsersTables,
    createProductsTable,
    createFavoritesTable,
    createMessagesTable,
    insertIntoUsers,
    insertIntoProducts,
    insertIntoFavorites,
    insertIntoMessages,
} = require('./queryFunctions');

(async () => {
    // await dropAllTables();
    // await createUsersTables();
    // await createProductsTable();
    // await createFavoritesTable();
    // await createMessagesTable();
    // await insertIntoUsers();
    // await insertIntoProducts();
    // await insertIntoFavorites();
    await insertIntoMessages();
})();
