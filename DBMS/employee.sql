CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100) UNIQUE,
    HireDate DATE,
    Salary DECIMAL(10, 2)
);

INSERT INTO Employees (EmployeeID, FirstName, LastName, Email, HireDate, Salary)
VALUES
    (1, 'John', 'Doe', 'john.doe@example.com', '2023-08-01', 50000.00),
    (2, 'Jane', 'Smith', 'jane.smith@example.com', '2023-08-15', 60000.00);

SELECT * FROM Employees;

SELECT FirstName, LastName, Salary FROM Employees WHERE Salary > 55000.00;

UPDATE Employees SET Salary = 55000.00 WHERE EmployeeID = 1;

UPDATE Employees SET LastName = 'Doe' WHERE Email = 'jane.smith@example.com';

DELETE FROM Employees WHERE EmployeeID = 2;

DELETE FROM Employees WHERE Salary < 50000.00;

ALTER TABLE Employees ADD COLUMN Department VARCHAR(50);