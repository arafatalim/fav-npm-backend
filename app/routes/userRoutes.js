// const {Router} = require("express");
// const controller = require("../controller/userController")

// const router = Router();

// //! get all the students
// router.get("/", controller.getUser);
// // router.get("/", (res,req)  => {
// //     res.send("sending ")
// // })

// //! Add user to the database
// router.post("/", controller.addUser);

// //! Retrieve user by ID
// router.get("/:id", controller.getUserById);

// //! Delete user by ID
// router.delete("/:id", controller.deleteUserById)

// //! update user by id
// router.put("/:id", controller.updateUser)
// module.exports= router;


//! New Starts
// import controller 
const userController = require("../controller/userController.js")
// const npmStoreController = require("../controller/npmStoreController.js")

//! router
const router = require("express").Router();

//! use Router 

//! Registration - add user
router.post("/register", userController.addUser);

//! get all user 
router.get("/users", userController.getAllUser);

//! Login -  get user by username
router.get("/login", userController.getUserByUsername);

//! update user
router.put("/users/:id", userController.updateUser);

//! Delete user by id
router.delete("/users/:id", userController.deleteUser);

//! One to many routes
router.get("/getFavPackages/:id", userController.getFavPackages)


// //! favourite Router and controller
// //! Add Favourite
// router.post("/addfav", npmStoreController.addPackage);

// //! Get all favourite
// router.get("/getAllFav", npmStoreController.getPackage)


module.exports = router;