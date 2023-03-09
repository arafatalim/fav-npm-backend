# Implement Backend System for npm_favourite_package

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
    - username varchar(30) NOT NULL // sole identifier
    - password int NOT NULL 

## Creating npmStore for storing the user's data 
    - id (serial) PK //auto_incr
    - user_id INT NOT NULL
    - fav_package (varchar50) NOT NULL
    - comments (varchar100) NOT NULL

## Prerequistic
 - sequelize
 - pg
 - pg-hstore
 - postgresql (Database)
 - NodeJS
 - expressJS 
 - bcrypt (it is used for encryption)
 - validatejs (it is used for validate the fields)

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

# Validation using "validatejs"
## Environment Setup
- Installation - `npm install --save validatejs`
- Require - `const validate = require("validate.js")`
- Usage 
    - Create a constraints - Validating the username and password on Registration page
        ```const constraints = {
            username: {
                presence: true,
                length: {
                    minimum : 3,
                    message : "must be 3 Characters Long!" 
                }
            },
            password: {
                presence: true,
                length:{
                    minimum: 3,
                    message : "must be 3 Characters Long!"
                }
            }
        }```
    - Call the validate function to validate the given fields
        `const invalid = validate({username, password}, constraints)`
        - If all the fields are correct, it will show the `undefined`


# Api creation
##  Login 
    - https://localhost:3000/member/login

##  Register
    - https://localhost:3000/member/register

## Fetch User's Package
    - https://localhost:3000/member/getFavPackages/:id
    id = Users's ID

## Adding Package
    - https://localhost:3000/pack/addPackage/:id
    id = User's ID

## Updating the User's Package 
    - https://localhost:3000/pack/updatePackage/:id
    - id = Selected Package ID

## Deleting the User's Package
    - https://localhost:3000/pack/deletePackage/:id
    - id = Selected Package ID

## Retreiving All Users - (Admin Role)
    - https://localhost:3000/member/users

