-- create database amazoo if it doesn't exist
CREATE database if not exists amazoo;

USE amazoo;

-- Table: users
-- Path: users.sql
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL unique,
    password VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    city VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);