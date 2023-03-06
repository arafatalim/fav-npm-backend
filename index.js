
const express = require("express");
const cors = require("cors")

const bodyParser = require("body-parser")
const userRouting = require("./app/routes/userRoutes")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port =  3000;


// app.use(cors());
app.use(express.json());


//! get request
app.get("/", (req,res) =>{
    console.log("Hello Bhaiya")
    res.json("Welcome home")
})

app.use("/api", userRouting)

// Handling Registration
app.get("/register", (req,res) => (
    res.send("Registration Page")
))
app.get("/login", (req,res) => (
        res.json("Login Here!")
        ))
    app.get("")
        
        
//! checking the connection
app.listen(port, () => console.log(`App is listening on port ${port}` ))