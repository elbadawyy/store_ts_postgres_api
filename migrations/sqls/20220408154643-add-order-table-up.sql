CREATE TABLE orders (
  id serial PRIMARY KEY,
  user_id integer NOT NULL REFERENCES users(id),
);