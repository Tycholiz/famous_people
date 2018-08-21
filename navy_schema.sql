DROP TABLE fleet, ship, sailors, assignment, rank;

CREATE TABLE fleet (
    id INTEGER PRIMARY KEY,
    name VARCHAR(50)
);
CREATE TABLE ship (
    id INTEGER PRIMARY KEY,
    name VARCHAR(50),
    date_built SMALLINT
);
CREATE TABLE sailors (
    id INTEGER PRIMARY KEY,
    date_of_birth SMALLINT,
    name VARCHAR(50)
);
CREATE TABLE assignment (
    id INTEGER PRIMARY KEY,
    name VARCHAR(50),
    start_date SMALLINT,
    end_date SMALLINT
);
CREATE TABLE rank (
    id INTEGER PRIMARY KEY,
    name VARCHAR(50)
);
