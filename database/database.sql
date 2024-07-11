CREATE DATABASE IF NOT EXISTS spainUniversityDb;

USE spainUniversityDb;

CREATE TABLE Student(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(60),
    email VARCHAR(255),
    address VARCHAR(255),
    country VARCHAR(100),
    PRIMARY KEY(id)
);

INSERT INTO Student (name, email, address, country) VALUES 
('John Doe', 'johndoe@example.com', '123 Main St', 'USA');

CREATE TABLE Program (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    total_credits INT(11) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO Program (name, total_credits) VALUES ('FullStack Developer', 9);

CREATE TABLE Subject (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    credits INT(11) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO Subject (name, credits) VALUES 
('Mathematics', 3),
('Physics', 3),
('Chemistry', 3),
('Biology', 3),
('History', 3),
('Literature', 3),
('Philosophy', 3),
('Art', 3),
('Music', 3),
('Computer Science', 3);

CREATE TABLE Professor (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    subject_id INT(11) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (subject_id) REFERENCES Subject(id)
);

INSERT INTO Professor (name, subject_id) VALUES 
('Prof. John Smith', 1),
('Prof. John Smith', 2),
('Prof. Jane Doe', 3),
('Prof. Jane Doe', 4),
('Prof. Robert Brown', 5),
('Prof. Robert Brown', 6),
('Prof. Emily White', 7),
('Prof. Emily White', 8),
('Prof. Michael Green', 9),
('Prof. Michael Green', 10);

CREATE TABLE Enrollment (
    id INT(11) NOT NULL AUTO_INCREMENT,
    student_id INT(11) NOT NULL,
    subject_id INT(11) NOT NULL,
    professor_id INT(11) NOT NULL,
    program_id INT(11) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (student_id) REFERENCES Student(id),
    FOREIGN KEY (subject_id) REFERENCES Subject(id),
    FOREIGN KEY (professor_id) REFERENCES Professor(id),
    FOREIGN KEY (program_id) REFERENCES Program(id)
);

INSERT INTO Enrollment (student_id, subject_id, professor_id, program_id) VALUES 
(1, 1, 1, 1),  -- Matemáticas con Prof. John Smith en el programa "FullStack Developer"
(1, 2, 2, 1),  -- Física con Prof. Jane Doe en el programa "FullStack Developer"
(1, 3, 3, 1);  -- Química con Prof. Robert Brown en el programa "FullStack Developer"