CREATE DATABASE IF NOT EXISTS spainUniversityDb;

USE spainUniversityDb;

CREATE TABLE Student(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(60),
    email VARCHAR(255),
    address VARCHAR(255),
    country VARCHAR(100),
    PRIMARY KEY(id)
);