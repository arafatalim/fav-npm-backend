# fav-npm-backend

# login system
- Login 
    - User enter details - Username and password
        - if user's name is match with existing database then return the user to user's homepage. 
        - if user's name is present in the database then return the user an error message. No such user exixts.
- Sign Up
    - User enter details - Username and password and hit Signup
        - check if user's name is present in the data then return an error message, user already exists.
        - Otherwise return user details saved into the database and save the user'name into the localStorage and move the user to their homepage.

## Creating users table

    - id (serial) // auto_incr
    - name varchar(30) NOT NULL // sole identifier
    - fav_package (varchar50) NOT NULL
    - comments (varchar100) NOT NULL
    - PRIMARY KEY (id)

## saving the user name in the local storage
localStorage.setItem("key", value)

## checking the user is present or not (authenticating the user)
if(localStorage.getItem("key", value)){}

## When user click on signout then remove the user value from the localstorage
localStorage.removeItem("key");

## When user want to login then search the user's name from the database 
 - if found then save the user's name into the localstorage 
    - select name from user where name="joe" 
 - If not found ask user to fill the form, say new user.

## if user found then go user's data and display the data
select * from user where name="joe";


## Inserting data into the user table

INSERT into users(name, fav_package, comments)
VALUES('Joe', "react", 'What is the butterfly effect?');

## Retrieving All Data by name

SELECT * from user where name="joe";

# Api creation
## Get all favorite by 
https://localhost:5000/api/myfav 
