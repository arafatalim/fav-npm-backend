# Exercise 1: Implement Backend for Favorite NPM packages

## Pre-Requisite
 ### Packages Requirement
 - sequelize
 - pg
 - pg-hstore
 - postgresql (Database)
 - NodeJS
 - expressJS 
 - bcrypt (it is used for encryption)
 - validatejs (it is used for validate the fields)

# login system
- Login 
    - User enter details - Username and Password
        - if user's name is match with existing database then return the user to user's Homepage/Dashboard. 
        - if user's name is not present in the database then return the user an error message. No such user exixts.
- Sign Up
    - User enter details - Username and Password
        - Check if user's name is present in the data then return an error message, user already exists.
        - Otherwise saved the data into the database and save the user's id and name into the localStorage and move the user to their homepage.

## Creating users table for storing user password and username

    - id (serial) PK // auto_incr
    - username varchar(30) NOT NULL // sole identifier
    - password int NOT NULL 

## Creating npmStore for storing the user's data 
    - id (serial) PK //auto_incr
    - user_id INT NOT NULL (FK)
    - fav_package (varchar50) NOT NULL
    - comments (varchar100) NOT NULL

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
        }
    - Call the validate function to validate the given fields
        `const invalid = validate({username, password}, constraints)`
        - If all the fields are correct, it will show the value of `invalid (variable)`is `undefined`


# Api creation 
### Replace the `http://localhost:3000/` with `https://fav-npm-backend-server.onrender.com/`

##  Login 
    GET http://localhost:3000/member/login

##  Register
    POST http://localhost:3000/member/register

## Fetch User's Package
    GET http://localhost:3000/member/getFavPackages/:id
    id = Users's ID

## Adding Package
    POST http://localhost:3000/pack/addPackage/:id
    id = User's ID

## Updating the User's Package 
    PUT http://localhost:3000/pack/updatePackage/:id
     id = Selected Package ID

## Deleting the User's Package
    DELETE http://localhost:3000/pack/deletePackage/:id
     id = Selected Package ID
 
# Admin Role - (Beta Task)
## Retreiving All Users 
    GET http://localhost:3000/member/users

## Admin can search any User by iD.
    GET http://localhost:3000/member/users/id
     id = User's ID 
## Admin can search by using Username
    GET - http://localhost:3000/member/users/
    const username = req.body.username

