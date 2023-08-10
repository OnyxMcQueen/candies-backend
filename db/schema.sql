DROP DATABASE IF EXISTS candies_dev;
CREATE DATABASE candies_dev;

\c candies_dev;

DROP TABLE IF EXISTS candies;

CREATE TABLE candies (
id SERIAL PRIMARY KEY,
candy_name TEXT NOT NULL,
price DECIMAL (8,2) DEFAULT 0.00,
rating INTEGER,
is_favorite BOOLEAN,
candy_image TEXT,
candy_type TEXT,
candy_description TEXT
);