create database library;
use library;
CREATE TABLE authors (
    author_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    country VARCHAR(50) NOT NULL
);
CREATE TABLE books (
    book_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    author_id INT NOT NULL,
    publication_year INT NOT NULL,
    FOREIGN KEY (author_id)
        REFERENCES authors (author_id)
);
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    membership_date DATE NOT NULL
);
CREATE TABLE loans (
    loan_id INT PRIMARY KEY AUTO_INCREMENT,
    book_id INT NOT NULL,
    user_id INT NOT NULL,
    loan_date DATE NOT NULL,
    return_date DATE NULL,
    FOREIGN KEY (book_id)
        REFERENCES Books (book_id),
    FOREIGN KEY (user_id)
        REFERENCES Users (user_id)
);
show tables;
describe loans;
insert into authors (author_id,name,country) values (1,"ravi","india");
insert into authors (author_id,name,country) values (2,"john","usa");
insert into authors (author_id,name,country) values (3,"david","england");
insert into authors (author_id,name,country) values (4,"cha chu","china");
insert into authors (author_id,name,country) values (5,"dong","korea");
select * from authors;
select all authors;