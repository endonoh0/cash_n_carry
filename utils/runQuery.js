const {
    dropAllTables,
    createTables,
    insertIntoTables,
} = require('./queryFunctions');

(async () => {
    await dropAllTables();
    await createTables();
    await insertIntoTables();
})();
