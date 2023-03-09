const { validate } = require("validate.js");
const db = require("../models/index");

// Model
const NpmStore = db.npmStores;

// Main Work

//! add package
const addPackage = async (req,res) => {
    const {favourites, comments} = req.body;
    const constraints = {
        favourites: {
            presence: true,
            length: {
                min: 1,
                message: "Favorite must be 2 Character long"
            }
        },
        comments: {
            presence: true,
            length: {
                min: 6,
                message: "Comments must be 6 Characters long!"
            }
        }
    }
    const invalid = validate({favourites, comments}, constraints)
    try{
        if(invalid){
            return res.status(400).json(invalid);
        }else{
            const id = req.params.id;
            const info = {
                user_id: id,
                favourites,
                comments
            }
            const data = await NpmStore.create(info);
            res.status(200).send(data);
            console.log("Package Added successfully");
        }
    }catch(err){
        res.status(401).json({message: err.message});
    }
}

//! Get All package
const getPackage = async (req,res) => {
 try{
    const allpack = await NpmStore.findAll();
    res.status(200).send(allpack);
 }  catch(err){
    res.status(401).json({message: err.message})
 } 
}

//! delete package using by package's id
const deletePackage = async (req, res) => {
    try{
        const id = req.params.id;
        const findPack = await NpmStore.findByPk(id);
        const data = findPack.destroy();
        res.status(201).send("Package Removed!")
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

//! Update the package comments
const updateComments = async (req,res) => {
    const {comments} = req.body;
    const id = req.params.id;
    const constraints = {
        comments: {
            presence: true,
            length: {
                min: 3,
                message: "Comments must be 3 Characters long!"
            }
        }
    }
    const invalid = validate({comments}, constraints)
    
    try{
        if(invalid){
            return res.status(400).json(invalid);
        }else{
            const findPack = await NpmStore.findByPk(id);
            const data = findPack.update({
                comments
            })
            
           return res.status(200).send("Updated Successfully!")
        }
                
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

module.exports = {
    getPackage,
    addPackage,
    deletePackage,
    updateComments
}
