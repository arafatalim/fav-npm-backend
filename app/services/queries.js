const getUserQ = "SELECT * from users";
const getUserByIdQ = `SELECT * from users WHERE id=$1`;
const checkUserExistsQ = "SELECT * from users where users.username = $1";
const addUserQ = "INSERT INTO users (username, password) VALUES ($1, $2)";
const deleteUserByIdQ = "DELETE from users WHERE id=$1";
const checkUserExistsByIdQ = "SELECT * from users WHERE users.id = $1"

module.exports = {
    getUserQ,
    getUserByIdQ,
    checkUserExistsQ,
    addUserQ,
    checkUserExistsByIdQ,
    deleteUserByIdQ
}