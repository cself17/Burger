DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;


USE burger_db;


CREATE TABLE burgers(
  id INTEGER AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(20),
  devoured BOOLEAN,
  PRIMARY KEY(id)
);



INSERT INTO burgers (burger_name, devoured) VALUES ('best burger', false);

INSERT INTO burgers (burger_name, devoured) VALUES ('worst burger', false);