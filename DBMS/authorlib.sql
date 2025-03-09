CREATE DATABASE Library;
USE Library;

CREATE TABLE Books (
    BookID INT PRIMARY KEY,
    Title VARCHAR(100),
    Author VARCHAR(100),
    PublishedYear INT,
    Genre VARCHAR(50)
);

CREATE TABLE Members (
    MemberID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DateOfBirth DATE,
    JoinDate DATE
);
INSERT INTO Books (BookID, Title, Author, PublishedYear, Genre)
VALUES (1, 'kalikudukka', 'sneha', 2000, 'comedy');

UPDATE Books SET Author = 'jithu ser' WHERE BookID = 1;

DELETE FROM Books WHERE BookID = 1;

SELECT * FROM Books WHERE Genre = 'comedy';

SELECT FirstName, LastName FROM Members WHERE JoinDate > '01-01-2020';
