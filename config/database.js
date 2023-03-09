const Sequelize = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize("postgres://root:LCV5PkEYRvAAupMPlhVpi0KVfVzioJxE@dpg-cg4ra6g2qv287cqs1440-a/fav_npm?ssl=true")

module.exports = sequelize; 

// const Pool = require("pg").Pool

// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     password: "secret",
//     database: "fav_npm",
//     port: 5432
// })

// module.exports = pool

// module.exports = {
//     HOST: process.env.HOST,
//     USER: process.env.DB_USER,
//     PASSWORD : process.env.PASSWORD,
//     DB : process.env.DB,
//     dialect: "postgres",

//     pool : {
//         min:0,
//         max: 5,
//         acquire: 30000,
//         idle: 10000
 
//     }
// }