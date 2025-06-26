create database BooksApi;
use BooksApi;

CREATE TABLE user (
    uid BIGINT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
select * from user;
CREATE TABLE book (
    isbn VARCHAR(20) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    publication_year INT NOT NULL
);

INSERT INTO book (isbn, title, author, publication_year)
VALUES ('9780544003415', 'The Lord of the Rings', 'J.R.R. Tolkien', 1954);

INSERT INTO book (isbn, title, author, publication_year)
VALUES ('9780553573404', 'A Game of Thrones', 'George R.R. Martin', 1996);

INSERT INTO book (isbn, title, author, publication_year)
VALUES ('9781617294945', 'Spring in Action', 'Craig Walls', 2018);

INSERT INTO user (username, password)
VALUES ('alice', '$2a$10$abcdefgHashedPassword1');

INSERT INTO user (username, password)
VALUES ('bob', '$2a$10$abcdefgHashedPassword2');

INSERT INTO user (username, password)
VALUES ('charlie', '$2a$10$abcdefgHashedPassword3');

UPDATE user SET password = '$2a$10$Uq33K3drTW2CYq67TykareMBIJ3T5.gTt6ah8yk7auNWe22bnWley' WHERE uid = 1; -- password1

UPDATE user SET password = '$2a$10$T8anRF1cveUxGRc0d2C3H.crJ2LhEAzWy6leRcX8alP/6rJHHsnkC' WHERE uid = 2;  -- password2

UPDATE user SET password = '$2a$10$zZSmhM7p7CnTiJa1qfo/FOoR7UxJWbYtf1meuLrOcUKhwtHuTYmzS' WHERE uid = 3;  -- password3


-- INSERT INTO user (username, password) VALUES ('alice', 'password1');
-- INSERT INTO user (username, password) VALUES ('bob', 'password2');
-- INSERT INTO user (username, password) VALUES ('charlie', 'password3');