// bussiness logic

//! importing database connection file
const pool = require("../../config/database")
//! Queries coming from the  query file
const query = require("../services/queries")

const getUser =  (req,res) => {
    // res.send("Sending the student details")
    pool.query(query.getStudents, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows) 
    })
}

module.exports =  {
    getUser
};