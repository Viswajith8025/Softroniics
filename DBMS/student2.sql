CREATE DATABASE StudentDB2;
USE StudentDB2;
CREATE TABLE Students2 (
  StudentID INT PRIMARY KEY AUTO_INCREMENT,
  FirstName VARCHAR(50),
  LastName VARCHAR(50),
  DOB DATE,
  Gender VARCHAR(10)
);

CREATE TABLE Courses2 (
  CourseID INT PRIMARY KEY AUTO_INCREMENT,
  CourseName VARCHAR(100),
  Credits INT
);

CREATE TABLE StudentCourses (
  EnrollmentID INT PRIMARY KEY AUTO_INCREMENT,
  StudentID INT,
  CourseID INT,
  EnrollmentDate DATE,
  FOREIGN KEY (StudentID) REFERENCES Students2(StudentID),
  FOREIGN KEY (CourseID) REFERENCES Courses2(CourseID)
);
INSERT INTO Students2 (FirstName, LastName, DOB, Gender)
VALUES
  ('John', 'Doe', '1995-01-01', 'Male'),
  ('Jane', 'Smith', '1996-02-02', 'Female'),
  ('Bob', 'Johnson', '1997-03-03', 'Male'),
  ('Alice', 'Williams', '1998-04-04', 'Female'),
  ('Mike', 'Brown', '1999-05-05', 'Male');

INSERT INTO Courses2 (CourseName, Credits)
VALUES
  ('Math 101', 3),
  ('English 102', 3),
  ('Science 103', 4),
  ('History 104', 3),
  ('Computer Science 105', 4);

INSERT INTO StudentCourses (StudentID, CourseID, EnrollmentDate)
VALUES
  (1, 1, '2020-01-01'),
  (1, 2, '2020-02-01'),
  (2, 1, '2020-03-01'),
  (2, 3, '2020-04-01'),
  (3, 2, '2020-05-01'),
  (3, 4, '2020-06-01'),
  (4, 3, '2020-07-01'),
  (4, 5, '2020-08-01'),
  (5, 4, '2020-09-01'),
  (5, 5, '2020-10-01');
  UPDATE Students2 SET LastName = 'Doe Jr.'WHERE StudentID = 1;

DELETE FROM Courses2 WHERE CourseID = 2;

SELECT s.FirstName, s.LastName
FROM Students2 s
JOIN StudentCourses sc ON s.StudentID = sc.StudentID JOIN Courses2 c ON sc.CourseID = c.CourseID WHERE c.CourseName = 'Math 101';

INSERT INTO Courses2 (CourseName, Credits)
VALUES ('New Course', 3);

INSERT INTO StudentCourses (StudentID, CourseID, EnrollmentDate)
VALUES (1, (SELECT CourseID FROM Courses2 WHERE CourseName = 'New Course'), '2020-11-01');

SELECT s.FirstName, s.LastName
FROM Students2 s
JOIN (
  SELECT StudentID
  FROM StudentCourses
  GROUP BY StudentID
  HAVING COUNT(*) >= 3
) sc ON s.StudentID = sc.StudentID;

