create database ecommerce;
use ecommerce;
CREATE TABLE customers (
    customers_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    phone VARCHAR(50) NOT NULL
);
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    price DECIMAL(10 , 2 ) NOT NULL,
    stock INT NOT NULL
);
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customers_id INT NOT NULL,
    order_date DATE NOT NULL,
    total_amount DECIMAL(10 , 2 ) NOT NULL,
    FOREIGN KEY (customers_id)
        REFERENCES customers (customers_id)
);
CREATE TABLE orderdetails (
    order_details_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10 , 2 ) NOT NULL
);
show tables;
describe orderdetails;
INSERT INTO orders (order_id, customers_id, order_date, total_amount)
VALUES (1, '001', '10/07/2003',' 5000');
INSERT INTO orders (order_id, customers_id, order_date, total_amount)
VALUES (2, '002', '10/08/2003',' 400');
INSERT INTO orders (order_id, customers_id, order_date, total_amount)
VALUES (2, '002', '10/09/2003',' 3000');

SELECT * FROM orders WHERE total_amount > 1000;

UPDATE orders SET total_amount = 6000 WHERE order_id = 1;

DELETE FROM orders WHERE order_id = 2;