create database companydb;
use companydb;
drop database companydb;
CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY AUTO_INCREMENT,
    DepartmentName VARCHAR(100)
);
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT,
    HireDate DATE,
    FOREIGN KEY (DepartmentID)
        REFERENCES Departments (DepartmentID)
);
CREATE TABLE Salaries (
    SalaryID INT PRIMARY KEY AUTO_INCREMENT,
    EmployeeID INT,
    SalaryAmount DECIMAL(10 , 2 ),
    SalaryDate DATE,
    FOREIGN KEY (EmployeeID)
        REFERENCES Employees (EmployeeID)
);
INSERT INTO Departments (DepartmentName) VALUES
('Human Resources'),
('Engineering'),
('Sales'),
('Marketing'),
('Finance');

INSERT INTO Employees (FirstName, LastName, DepartmentID, HireDate) VALUES
('John', 'Doe', 1, '2018-01-15'),
('Jane', 'Smith', 2, '2017-03-22'),
('Emily', 'Johnson', 3, '2019-06-05'),
('Michael', 'Brown', 4, '2020-11-01'),
('Alice', 'Williams', 5, '2021-07-30');

INSERT INTO Salaries (EmployeeID, SalaryAmount, SalaryDate) VALUES
(1, 60000.00, '2024-01-01'),
(2, 80000.00, '2024-01-01'),
(3, 75000.00, '2024-01-01'),
(4, 72000.00, '2024-01-01'),
(5, 65000.00, '2024-01-01');

UPDATE Departments 
SET 
    DepartmentName = 'Customer Support'
WHERE
    DepartmentID = 3;
SELECT 
    E.FirstName, E.LastName, D.DepartmentName
FROM
    Employees E
        JOIN
    Departments D ON E.DepartmentID = D.DepartmentID;
SELECT 
    D.DepartmentName, AVG(S.SalaryAmount) AS AverageSalary
FROM
    Salaries S
        JOIN
    Employees E ON S.EmployeeID = E.EmployeeID
        JOIN
    Departments D ON E.DepartmentID = D.DepartmentID
GROUP BY D.DepartmentName;
SELECT 
    E.FirstName, E.LastName
FROM
    Employees E
        JOIN
    Salaries S ON E.EmployeeID = S.EmployeeID
WHERE
    S.SalaryAmount > (SELECT 
            AVG(SalaryAmount)
        FROM
            Salaries);
ALTER TABLE Employees ADD COLUMN LeaveDate DATE;

DELETE FROM Salaries 
WHERE
    EmployeeID IN (SELECT 
        EmployeeID
    FROM
        Employees
    
    WHERE
        LeaveDate IS NOT NULL);
SELECT 
    E.FirstName, E.LastName, D.DepartmentName, S.SalaryAmount
FROM
    Employees E
        JOIN
    Departments D ON E.DepartmentID = D.DepartmentID
        JOIN
    Salaries S ON E.EmployeeID = S.EmployeeID
WHERE
    E.HireDate <= CURDATE() - INTERVAL 5 YEAR
        AND S.SalaryAmount > (SELECT 
            AVG(SalaryAmount)
        FROM
            Salaries S2
                JOIN
            Employees E2 ON S2.EmployeeID = E2.EmployeeID
        WHERE
            E2.DepartmentID = E.DepartmentID);
START TRANSACTION;

INSERT INTO Departments (DepartmentName) VALUES ('Legal');

SET @newDepartmentID = LAST_INSERT_ID();

INSERT INTO Employees (FirstName, LastName, DepartmentID, HireDate) VALUES
('Robert', 'Davis', @newDepartmentID, '2024-08-01'),
('Linda', 'Wilson', @newDepartmentID, '2024-08-01');

COMMIT;
CREATE VIEW EmployeeOverview AS
    SELECT 
        E.FirstName,
        E.LastName,
        D.DepartmentName,
        S.SalaryAmount AS MostRecentSalary
    FROM
        Employees E
            JOIN
        Departments D ON E.DepartmentID = D.DepartmentID
            JOIN
        (SELECT 
            EmployeeID, MAX(SalaryDate) AS MostRecentDate
        FROM
            Salaries
        GROUP BY EmployeeID) MR ON E.EmployeeID = MR.EmployeeID
            JOIN
        Salaries S ON MR.EmployeeID = S.EmployeeID
            AND MR.MostRecentDate = S.SalaryDate;

SELECT *FROM EmployeeOverview;
