CREATE DATABASE FBDB;

USE FBDB;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    place VARCHAR(100)
);

INSERT INTO users(name, email, place) VALUES 
('Deepak','deepak@gmail.com','Cuttack'),
('Krishna', 'krishna@gmail.com','Mathura'),
('Radhe','srijo@gnail.com','Vrindaban')

Desc users;

SELECT * from users;