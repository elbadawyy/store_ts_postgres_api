CREATE TABLE product (
  id serial PRIMARY KEY,
  name varchar(255) NOT NULL,
  price numeric(10,2) NOT NULL,
  description varchar(255) NOT NULL,
);