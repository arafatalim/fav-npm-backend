const dbConfig = require("../../config/database");

const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        
        pool: {
            min:  dbConfig.pool.mini,
            max: dbConfig.pool.max,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

// authenticate 
sequelize.authenticate()
.then(() => console.log("Connected Successfully"))
.catch((error) => console.log("ERROR" + error))

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//! Adding table
db.users = require("./userModel.js")(sequelize, DataTypes);
db.npmStores = require("./npmModel.js")(sequelize, DataTypes);

//Restrict the sequelize to reset the db
db.sequelize.sync({force: false})
.then(() => console.log("Yes Re - sync done"))
.catch((err) => console.log("Failed to Sync Data" + err))


//! One to Many Relation
db.users.hasMany(db.npmStores, {
    foreignKey: 'user_id',
    as: "npmStore"
})

db.npmStores.belongsTo(db.users, {
    foreignKey: 'user_id',
    as: "user"
})

module.exports = db;




