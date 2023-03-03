# fav-npm-backend

## Creating users table

    - id (serial) // auto_incr
    - name varchar(30) NOT NULL // sole identifier
    - fav_package (varchar100)
    - comments
    - PRIMARY KEY (name)

## Inserting data into the user table

INSERT into users(name, fav_package, comments)
VALUES('Joe', "react", 'Chaos', 'What is the butterfly effect?', 5, '2 Market Street');
