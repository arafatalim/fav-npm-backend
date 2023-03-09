//! importing controller
const npmStoreController = require("../controller/npmStoreController.js");

// Router
const router = require("express").Router();

// use Router - localhost:3000/pack
//! Adding npm package 
router.post("/addPackage/:id", npmStoreController.addPackage);

router.delete("/deletePackage/:id", npmStoreController.deletePackage)

//! Get all packages
router.get("/allPackage", npmStoreController.getPackage)


module.exports = router;
