const {Router} = require("express");
const controller = require("../controller/userController")


const router = Router();

router.get("/", controller.getUser)
// router.get("/", (res,req)  => {
//     res.send("sending ")
// })

module.exports= router;