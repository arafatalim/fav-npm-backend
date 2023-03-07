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
const userController = require("../controller/userController.js")
const router = require("express").Router();

//! login - add user
router.post("/register", userController.addUser);

//! get all user 
router.get("/users", userController.getAllUser);

//! Login -  get user by ID 
router.get("/users/:id", userController.getUserById);

//! update user
router.put("/users/:id", userController.updateUser);

//! Delete user by id
router.delete("/users/:id", userController.deleteUser);


module.exports = router;