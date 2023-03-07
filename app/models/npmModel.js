
module.exports = (sequelize, DataTypes) => {
    const NpmStore = sequelize.define("NpmStore", {
      favourites :{
        type: DataTypes.STRING,
        allowNull : false
      },
      comments: {
        type: DataTypes.TEXT,
        allowNull: false
      }

    })
    return NpmStore;
}