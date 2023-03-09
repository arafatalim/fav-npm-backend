// const Sequelize = require("sequelize");
// const config = require("./config");

// const sequelize = new Sequelize(config.dbName,config.dbUser,config.dbPassword, {
//     host: config.dbHost,
//     dialect: 'postgres',
// })

// module.exports = sequelize; 

// const Pool = require("pg").Pool

// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     password: "secret",
//     database: "fav_npm",
//     port: 5432
// })

// module.exports = pool

module.exports = {
    HOST: process.env.HOST,
    USER: process.env.DB_USER,
    PASSWORD : process.env.PASSWORD,
    DB : process.env.DB,
    dialect: process.env.DIALECT,
    operatorsAliases: 0, // change this to zero

    pool : {
        min:0,
        max: 5,
        acquire: 30000,
        idle: 10000
 
    }
}