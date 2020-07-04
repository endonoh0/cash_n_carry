const dropTable = `
    DROP TABLE IF EXISTS users CASCADE;
    DROP TABLE IF EXISTS products CASCADE;
    DROP TABLE IF EXISTS favorites CASCADE;
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
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    created_at NOT NULL DEFAULT NOW(),
    price BIGINT NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(255) NOT NULL,
    active BOOLEAN NOT NULL DEFAULT TRUE,
    cover_photo_url VARCHAR(255) DEFAULT https://images.craigslist.org/00505_lEAVJNgFcBf_0dy0dy_600x450.jpg,
    product_photo_url VARCHAR(255) DEFAULT https://images.craigslist.org/00505_lEAVJNgFcBf_0dy0dy_600x450.jpg
  )
`;

const insertProducts = `
  INSERT INTO products(user_id, title, price, description, location)
  VALUES (1, 'Gucci Belt', 20202, 'description', 'Surrey'),
  (2, 'Baller Sneakers', 30203, 'description', 'Vancouver'),
  (3, 'Crimps Hoodie', 2929, 'description', 'Vancouver')
`;

const createFavorites = `
  CREATE TABLE IF NOT EXISTS favorites(
    id SERIAL PRIMARY KEY NOT NULL,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE
  )
`;

const insertFavorites = `
  INSERT INTO favorites(product_id)
  VALUES (1),
`;

const createMessage = `
  CREATE TABLE IF NOT EXISTS messages(
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    body TEXT NOT NULL,
    created_at DATE DEFAULT NOW(),
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE
  )
`;

const insertMessages = `
INSERT INTO messages (user_id, body, product_id)
VALUES (1, 'hey I like what youre selling?', 1)
`;
