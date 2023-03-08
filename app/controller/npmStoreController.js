const db = require("../models/index");

// Model
const NpmStore = db.npmStores;

// Main Work

//! add package
const addPackage = async (req,res) => {
    try{
        const {favourites, comments} = req.body;
        const id = req.params.id;
        const info = {
            user_id: id,
            favourites,
            comments
        }
        const data = await NpmStore.create(info);
        res.status(200).send(data);
        console.log("Package Added successfully");
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

module.exports = {
    getPackage,
    addPackage
}
