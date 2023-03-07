
const express = require("express");
const cors = require("cors")

const bodyParser = require("body-parser")
const userRouting = require("./app/routes/userRoutes")

const app = express();

const corsOrigin = {
    origin : "https://localhost:8000"
}

//! set up middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOrigin));

const port =  process.env.PORT || 3000;
app.use(express.json());


//! get request
app.get("/", (req,res) =>{
    console.log("Hello Bhaiya")
    res.json("Welcome home")
})

app.use("/api", userRouting)
//! checking the connection
app.listen(port, () => console.log(`App is listening on port ${port}` ))