//! importing controller
const npmStoreController = require("../controller/npmStoreController.js");

// Router
const router = require("express").Router();

// use Router - localhost:3000/pack
//! Adding npm package 
router.post("/addPackage/:id", npmStoreController.addPackage);
//! Deleting the package
router.delete("/deletePackage/:id", npmStoreController.deletePackage)
//! Update the package 
router.put("/updatePackage/:id", npmStoreController.updateComments)

//! Get all packages
router.get("/allPackage", npmStoreController.getPackage)


module.exports = router;
