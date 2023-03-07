
const express = require("express");
const cors = require("cors")

const bodyParser = require("body-parser")
// const userRouting = require("./app/routes/userRoutes")

const app = express();

const corsOrigin = {
    origin : "http://localhost:8000"
}


//! set up middlewares
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors(corsOrigin));

//! Routers
const userRouting = require("./app/routes/userRoutes.js");
const packageRouting = require("./app/routes/npmStoreRoutes.js")

app.use("/member", userRouting);
app.use("/pack", packageRouting)

const port =  process.env.PORT || 3000;
app.use(express.json());

//! Routers
const userRouter = require("./app/routes/userRoutes.js");
app.use("/api", userRouter);

//! get request
app.get("/", (req,res) =>{
    console.log("Hello Bhaiya")
    res.send("Welcome home")
})

// app.use("/api", userRouting)
//! checking the connection
app.listen(port, () => console.log(`App is listening on port ${port}` ))