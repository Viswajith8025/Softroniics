create database TEST1;
use TEST1;
drop database TEST1;
CREATE TABLE STD (
    ID INT,
    NAME VARCHAR(50),
    AGE INT,
    CLASS VARCHAR(50) NOT NULL
);
CREATE TABLE STAFF (
    ID INT,
    NAME VARCHAR(50),
    AGE INT,
    DOB INT NOT NULL
);
SHOW tables;
describe std;
insert into std values( '100','milan',19,'UG');
insert into std values( '101','milan',19,'UG');
insert into std values( '102','milan',19,'UG');
insert into std values( '103','milan',19,'UG');