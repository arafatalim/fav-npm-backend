// bussiness logic

//! importing database connection file
const pool = require("../../config/database")
//! Queries coming from the  query file
const queries = require("../services/queries")

const getUser =  (req,res) => {
    // res.send("Sending the student details")
    pool.query(queries.getUserQ, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows) 
    })
}

const getUserById = (req,res) =>{
    const id = parseInt(req.params.id)
    pool.query(queries.getUserByIdQ,[id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const addUser = (req,res) => {
    const {username, password} = req.body;
    // check user exists
    pool.query(queries.checkUserExistsQ, [username] ,(error, results) => {
        if(results.rows.length){
            return res.send("Username Already Exists");
        }
        // Add user
        pool.query(queries.addUserQ, [username, password], (error, results) => {
            if(error) throw error;
            res.status(201).send("User Registration Successfully!")
        })
    })
} 

//! Delete user by ID
const deleteUserById = (req,res) => {
    const id = parseInt(req.params.id);
    //! check whether the user is present in the database or not
    pool.query(queries.checkUserExistsByIdQ,[id], (error, results) => {
        const noUser = !results.rows.length;
        // console.log(noUser)
        if(noUser){
            return res.send("User cannot found!");
        }
        //! if user found
        pool.query(queries.deleteUserByIdQ, [id], (error, results) => {
            if(error) throw error;
            res.status(200).send("User Deleted Successfully!")
        })
    })
    
}

///! update the table
const updateUser = (req,res) => {
    const id= parseInt(req.params.id);
    const {username} = req.body;
    //! check user exists
    pool.query(queries.checkUserExistsByIdQ, [id], (error, results) => {
        if(!results.rows.length){
            return res.send("User cannot find")
        }
        //! user exists
        pool.query(queries.updateUserQ, [username, id],(error, results) => {
            if(error) throw error;
            res.status(200).send("User Updated Successfully");
        })
    })
}

module.exports =  {
    getUser,
    getUserById,
    addUser,
    deleteUserById,
    updateUser
};