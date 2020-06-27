const createUsersTable = `
  DROP TABLE IF EXISTS users CASCADE;
  CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone SMALLINT,
    date_of_birth DATE,
    city VARCHAR(255),
    password VARCHAR(255)
    )
`;

const insertUsers = `
  INSERT INTO users(name)
  VALUES ('Robert'),
  ('Cindy', 'Vancouver'),
  ('Eric', 'Vancouver')
`;

// const createProductsTable = `
//   DROP TABLE IF EXISTS products CASCADE;
//   CREATE TABLE products (
//     id SERIAL PRIMARY KEY NOT NULL,
//     user_id INTEGER REFERENCES users(id) NOT NULL,
//     title VARCHAR(255) NOT NULL,
//     price BIGINT NOT NULL,
//     description TEXT NOT NULL,
//     quantity BIGINT NOT NULL,
//     location VARCHAR(255) NOT NULL,
//     active BOOLEAN NOT NULL DEFAULT FALSE,
//     cover_photo_url VARCHAR(255),
//     product_photo_url VARCHAR(255)
//   )
// `;

// const insertProducts = `
//   INSERT INTO users()
//   VALUES ('Robert'),
//   ('Cindy', 'Vancouver'),
//   ('Eric', 'Vancouver')
// `;

module.exports = {
  createUsersTable,
  insertUsers
 };
