CREATE TABLE users (
  id serial PRIMARY KEY,
  username varchar(255) NOT NULL UNIQUE,
  password varchar(255) NOT NULL ,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL
  
);