# fav-npm-backend

# login system
- Login 
    - User enter details - Username and password
        - if user's name is match with existing database then return the user to user's homepage. 
        - if user's name is not present in the database then return the user an error message. No such user exixts.
- Sign Up
    - User enter details - Username and password and hit Signup
        - check if user's name is present in the data then return an error message, user already exists.
        - Otherwise saved the data into the database and save the user's id and name into the localStorage and move the user to their homepage.


## Creating users table for storing user password and username

    - id (serial) PK // auto_incr
    - name varchar(30) NOT NULL // sole identifier
    - password int NOT NULL 

## Creating npmStore for storing the user's data 
    - id (serial) PK //auto_incr
    - uid INT NOT NULL
    - fav_package (varchar50) NOT NULL
    - comments (varchar100) NOT NULL

## Prerequistic
 - sequelize
 - pg
 - pg-hstore
 - postgresql
 - expressJS
 - bcrypt



## saving the user id in the local storage when user saving into the database
`localStorage.setItem("key", value)`

## checking the user od is present in local storage or not (authenticating the user)
`if(localStorage.getItem("key", value)){}`
`else{error}`

## When the user click on signout button then remove the user id from the localstorage
`localStorage.removeItem("key");`

## When user want to login then search the user's name from the database 
 - if found then save the user's name and id into the localstorage 
    - `select name from user where name="joe"` 
 - If not found ask user to fill the form, say new user.

## if user found then go user's data and display the data
`select * from user where id="1";`


## Inserting data into the user table

`INSERT into users(name, fav_package, comments) VALUES('Joe', "react", 'What is the butterfly effect?');`

## Retrieving All Data by name

`SELECT * from user where id="1";`

# Api creation
## API Login
    - https://localhost:5000/login

## API Register
    - https://localhost:5000/register

## API 

## Get all favorite by user
`if(userId) {`
    `https://localhost:5000/npm/1`
`}else{}`

