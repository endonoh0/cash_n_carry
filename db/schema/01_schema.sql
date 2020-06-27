DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS favourites CASCADE;
DROP TABLE IF EXISTS messages CASCADE;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone SMALLINT,
    date_of_birth DATE,
    city VARCHAR(255),
    country VARCHAR(255),
    province VARCHAR(255)
);

CREATE TABLE products
(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  title VARCHAR(255) NOT NULL,
  price BIGINT NOT NULL,
  description TEXT NOT NULL,
  quantity BIGINT NOT NULL,
  location VARCHAR(255) NOT NULL,
  active BOOLEAN NOT NULL DEFAULT FALSE,
  featured BOOLEAN NOT NULL DEFAULT FALSE,
  cover_photo_url VARCHAR(255),
  product_photo_url VARCHAR(255)
);

CREATE TABLE favourites
(
    id SERIAL PRIMARY KEY NOT NULL,
    product_id INTEGER REFERENCES products(id) NOT NULL,
    active BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE messages
(
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id),
    product_id INTEGER REFERENCES products(id),
    body TEXT NOT NULL,
    created_at DATE DEFAULT NOW()
);
