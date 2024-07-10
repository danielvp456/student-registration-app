CREATE DATABASE IF NOT EXISTS spainUniversityDb;

USE spainUniversityDb;

CREATE TABLE Student(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(60),
    email VARCHAR(255),
    address VARCHAR(255),
    country VARCHAR(100),
    PRIMARY KEY(id),
);

INSERT INTO Student (name, email, address, country) VALUES 
('John Doe', 'johndoe@example.com', '123 Main St', 'USA');

CREATE TABLE Program (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    total_credits INT(11) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO Program (name, total_credits) VALUES ('FullStack Developer', 0);

CREATE TABLE Subject (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    credits INT(11) NOT NULL,
    cost FLOAT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO Subject (name, credits, cost) VALUES 
('Mathematics', 3, 150.0),
('Physics', 3, 150.0),
('Chemistry', 3, 150.0),
('Biology', 3, 150.0),
('History', 3, 150.0),
('Literature', 3, 150.0),
('Philosophy', 3, 150.0),
('Art', 3, 150.0),
('Music', 3, 150.0),
('Computer Science', 3, 150.0);

CREATE TABLE Professor (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO Professor (name) VALUES 
('Prof. John Smith'),
('Prof. Jane Doe'),
('Prof. Robert Brown'),
('Prof. Emily White'),
('Prof. Michael Green');

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