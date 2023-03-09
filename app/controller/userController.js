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
const bcrypt = require('bcrypt')
const validate = require("validate.js");


const db = require("../models/index");

const User = db.users;
const NpmStore = db.npmStores;



//! Main Work

//! Registration Create User
const addUser = async (req,res) => {
    const {username, password} = req.body;
    //! creating a constraint 
    const constraints = {
        username: {
            presence: true,
            length: {
                minimum: 3,
                message: "must be at least 3 characters"
            }
          },
        password: {
            presence: true,
            length: {
                minimum: 6,
                message: "must be at least 6 characters"
            }
        }
    }
    const invalid = validate({username, password}, constraints)
   try{
        if(invalid){
        return res.status(400).json(invalid)
    }else{
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    let info = {
        username,
        password: hashedPassword
    }
    console.log(info.username)
        const user = await User.create(info);
        res.status(200).send(user)
        console.log("Registration Successfully");
    }
   }catch(err){
        res.status(401).json({message: err.message})
        console.log("Already Exists")
   }

}

//! Get all user
const getAllUser = async (req,res) => {
    try{
        let users = await User.findAll({
            attributes:[
                'id',
                'username',
                'createdAt',
                'updatedAt'
            ]
        })
        res.status(200).send(users);
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

//! get single User
const getUserById = async (req,res) => {
    try{
        let id = req.params.id;
        let user = await User.findOne({attributes: ['id','username','createdAt', 'updatedAt'], where: {id: id}});
        res.status(200).send(user);
    }catch(err){
        res.status(401).json({message: err.message})
    }
}

//! Delete User by id
const deleteUser = async (req, res) => {
   try{
    let id = req.params.id
    await User.destroy({where: {id: id}})
    res.status(200).send("Delete Successfully!")
   }catch(err){
    res.status(401).json({message: err.message})
   }
}


//! Update User 
const updateUser = async (req,res) => {
    try{
        let id = req.params.id;
        let update = await User.update(req.body, {where: {id: id}});
        res.status(200).send("Updated Successfully" + update)
    }catch(err){
        res.status(401).json({message: err.message})
    }
}

//! one to many relation users and npmStores
// const getFavPackages = async (req,res) => {
//     try{
//         const data = await User.findAll({
//             include: [{
//                 model: NpmStore,
//                 as: "npmStore"
//             }],
//             where: {id: 1}
//         })
//     }catch(err){
//         res.status(401).json({message: err.message})
//     }
// } 
//! one to many relation users and npmStores
const getFavPackages = async (req,res) => {
    try{
        const id = req.params.id;
        const data = await User.findOne({
            include: [{
                model: NpmStore,
                as: 'npmStore'
            }],
            where: {id: id}
        })
        res.status(200).json(data);
    }catch(err){
        res.status(401).json({message: err.message})
    }
} 


module.exports = {
    addUser,
    getAllUser,
    updateUser,
    deleteUser,
    getUserById,
    getFavPackages,
}