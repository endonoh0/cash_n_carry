const {
    dropAllTables,
    createUsersTables,
    createProductsTable,
    createFavoritesTable,
    insertIntoUsers,
    insertIntoProducts,
    insertIntoFavorites
} = require('./queryFunctions');

(async () => {
    // await dropAllTables();
    // await createUsersTables();
    // await createProductsTable();
    // await createFavoritesTable();
    // await insertIntoUsers();
    await insertIntoProducts();
    // await insertIntoFavorites();
})();
