create database employee2;
use employee2;
CREATE TABLE employees_details (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(100),
    age INT,
    salary DECIMAL(10, 2),
    address VARCHAR(255)
);

CREATE TABLE working_hours (
    emp_id INT,
    emp_name VARCHAR(100),
    working_date DATE,
    working_hours INT,
    FOREIGN KEY (emp_id) REFERENCES employees_details(emp_id)
);
show tables;
describe employees_details;
select*from  employees_details;
INSERT INTO employees_details (emp_id, emp_name, age, salary, address) VALUES
(1, 'Ajeet', 29, 75000.00, '123 Main St, Springfield'),
(2, 'Ayan', 32, 82000.00, '456 Elm St, Springfield'),
(3, 'Milan', 28, 67000.00, '789 Oak St, Springfield'),
(4, 'Ruchi', 31, 90000.00, '101 Maple St, Springfield'),
(5, 'Sneha', 27, 58000.00, '202 Pine St, Springfield');

INSERT INTO working_hours (emp_id, emp_name, working_date, working_hours) VALUES
(1, 'Ajeet', '2015-01-24', 12),
(2, 'Ayan', '2015-01-24', 10),
(3, 'Milan', '2015-01-25', 9),
(4, 'Ruchi', '2015-01-25', 6),
(5, 'Sneha', '2015-01-26', 8);
select*from working_hours;
SELECT * FROM working_hours WHERE working_date = '2015-01-25' AND working_hours > 8;
SELECT * FROM working_hours WHERE working_date = '2015-01-25' OR working_hours < 10;
SELECT * FROM working_hours WHERE (working_date = '2015-01-25' OR working_hours < 10) AND emp_id = 1;
SELECT DISTINCT emp_name  FROM working_hours WHERE working_date = '2015-01-24';
SELECT * FROM working_hours ORDER BY working_hours ASC;
SELECT *  FROM working_hours ORDER BY working_date DESC;
SELECT emp_id, emp_name, COUNT(*) AS work_count
FROM working_hours GROUP BY emp_id, emp_name ORDER BY work_count ASC;
SELECT emp_id, emp_name, MIN(working_hours) AS min_working_hours FROM working_hours GROUP BY emp_id, emp_name ORDER BY min_working_hours ASC;
SELECT emp_id, emp_name, MAX(working_hours) AS max_working_hours FROM working_hours GROUP BY emp_id, emp_name ORDER BY max_working_hours DESC;
SELECT emp_id, emp_name, AVG(working_hours) AS avg_working_hours FROM working_hours GROUP BY emp_id, emp_name ORDER BY avg_working_hours ASC;