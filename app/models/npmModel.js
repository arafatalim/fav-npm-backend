
module.exports = (sequelize, DataTypes) => {
    const NpmStore = sequelize.define("npmStore", {
      favourites :{
        type: DataTypes.STRING,
        allowNull : false,
        unique: true
      },
      comments: {
        type: DataTypes.TEXT,
        allowNull: false
      }

    })
    return NpmStore;
}