const {
    dropAllTables,
    createUsersTables,
    createProductsTable,
    insertIntoUsers,
    insertIntoProducts,
} = require('./queryFunctions');

(async () => {
    // await dropAllTables();
    // await createUsersTables();
    // await insertIntoUsers();
    // await createProductsTable();
    await insertIntoProducts();
})();
