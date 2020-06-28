const dropTables = `
  DROP TABLE IF EXISTS users CASCADE;
  DROP TABLE IF EXISTS products CASCADE;
`;

const createUsers = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(255),
    date_of_birth DATE,
    city VARCHAR(255),
    password VARCHAR(255)
    )
`;

const insertUsers = `
  INSERT INTO users(name, city)
  VALUES ('Robert', 'Surrey'),
  ('Cindy', 'Vancouver'),
  ('Eric', 'Vancouver')
`;

const createProducts = `
  CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) NOT NULL,
    title VARCHAR(255) NOT NULL,
    price BIGINT NOT NULL,
    description TEXT NOT NULL,
    quantity BIGINT NOT NULL,
    location VARCHAR(255) NOT NULL,
    active BOOLEAN NOT NULL DEFAULT FALSE,
    cover_photo_url VARCHAR(255),
    product_photo_url VARCHAR(255)
  )
`;

const insertProducts = `
  INSERT INTO products(user_id, title, price, description, quantity, location)
  VALUES (1, 'Gucci Belt', 20202, 'description', 2, 'Surrey'),
  (2, 'Baller Sneakers', 30203, 'description', 1, 'Vancouver'),
  (3, 'Crimps Hoodie', 2929, 'description', 2, 'Vancouver')
`;

module.exports = {
    createUsers,
    createProducts,
    insertUsers,
    insertProducts,
    dropTables,
};
