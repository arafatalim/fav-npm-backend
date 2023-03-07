// // bussiness logic

// //! importing database connection file
// const pool = require("../../config/database")
// //! Queries coming from the  query file
// const queries = require("../services/queries")

// const getUser =  (req,res) => {
//     // res.send("Sending the student details")
//     pool.query(queries.getUserQ, (error, results) => {
//         if(error) throw error;
//         res.status(200).json(results.rows) 
//     })
// }

// const getUserById = (req,res) =>{
//     const id = parseInt(req.params.id)
//     pool.query(queries.getUserByIdQ,[id], (error, results) => {
//         if(error) throw error;
//         res.status(200).json(results.rows);
//     })
// }

// const addUser = (req,res) => {
//     const {username, password} = req.body;
//     // check user exists
//     pool.query(queries.checkUserExistsQ, [username] ,(error, results) => {
//         if(results.rows.length){
//             return res.send("Username Already Exists");
//         }
//         // Add user
//         pool.query(queries.addUserQ, [username, password], (error, results) => {
//             if(error) throw error;
//             res.status(201).send("User Registration Successfully!")
//         })
//     })
// } 

// //! Delete user by ID
// const deleteUserById = (req,res) => {
//     const id = parseInt(req.params.id);
//     //! check whether the user is present in the database or not
//     pool.query(queries.checkUserExistsByIdQ,[id], (error, results) => {
//         const noUser = !results.rows.length;
//         // console.log(noUser)
//         if(noUser){
//             return res.send("User cannot found!");
//         }
//         //! if user found
//         pool.query(queries.deleteUserByIdQ, [id], (error, results) => {
//             if(error) throw error;
//             res.status(200).send("User Deleted Successfully!")
//         })
//     })
    
// }

// ///! update the table
// const updateUser = (req,res) => {
//     const id= parseInt(req.params.id);
//     const {username} = req.body;
//     //! check user exists
//     pool.query(queries.checkUserExistsByIdQ, [id], (error, results) => {
//         if(!results.rows.length){
//             return res.send("User cannot find")
//         }
//         //! user exists
//         pool.query(queries.updateUserQ, [username, id],(error, results) => {
//             if(error) throw error;
//             res.status(200).send("User Updated Successfully");
//         })
//     })
// }

// module.exports =  {
//     getUser,
//     getUserById,
//     addUser,
//     deleteUserById,
//     updateUser
// };

//! starting from here

const db = require("../models/index");

const User = db.users;
const NpmStore = db.npmStores;

//! Main Work

//! Create User
const addUser = async (req,res) => {
    let info = {
        username: req.body.username,
        password: req.body.password
    }

    const user = await User.create(info);
    res.status(200).send("Login Successfully", user)
}

//! Get all user
const getAllUser = async (req,res) => {
    let users = await User.findAll({
        attribute:[
            'username'
        ]
    })
    res.status(200).send(users);
}

//! get single User
const getUserById = async (req,res) => {
    let id = parseInt(req.params.id);

    let user = await User.findOne({ where: {id: id}});
    res.status(200).send(user);
}

//! Delete User by id
const deleteUser = async (req, res) => {
    let id = parseInt(req.params.id)
    await User.destroy({where: {id: id}})
    res.status(200).send("Delete Successfully!")
}


//! Update User 
const updateUser = async (req,res) => {
    let id = parseInt(req.params.id);
    let update = await User.update(req.body, {where: {id: id}});
    res.status(200).send("Updated Successfully" + update)
}

module.exports = {
    addUser,
    getAllUser,
    updateUser,
    deleteUser,
    getUserById
}