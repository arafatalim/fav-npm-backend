//! importing controller
const npmStoreController = require("../controller/npmStoreController.js");

// Router
const router = require("express").Router();

// use Router
//! Adding npm package 
router.post("/addPackage", npmStoreController.addPackage);

//! Get all packages
router.get("/allPackage", npmStoreController.getPackage)


module.exports = router;
