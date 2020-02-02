CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id INT AUTO_INCREMENT NOT NULL,
	burger_name varchar(30) NOT NULL,
	consumed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
