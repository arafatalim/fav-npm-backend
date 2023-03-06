// const Sequelize = require("sequelize");
// const config = require("./config");

// const sequelize = new Sequelize(config.dbName,config.dbUser,config.dbPassword, {
//     host: config.dbHost,
//     dialect: 'postgres',
// })

// module.exports = sequelize; 

const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "secret",
    database: "fav_npm",
    port: 5432
})

module.exports = pool