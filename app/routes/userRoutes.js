const {Router} = require("express");
const controller = require("../controller/userController")


const router = Router();

//! get all the students
router.get("/", controller.getUser);
// router.get("/", (res,req)  => {
//     res.send("sending ")
// })

//! Add user to the database
router.post("/", controller.addUser);

//! Retrieve user by ID
router.get("/:id", controller.getUserById);

//! Delete user by ID
router.delete("/:id", controller.deleteUserById)

//! update user by id
router.put("/:id", controller.updateUser)
module.exports= router;