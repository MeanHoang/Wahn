const connection = require("../config/database");

const getUserById = async (userID) => {
    let [results, fields] = await connection.query('SELECT * FROM users WHERE user_id = ?', [userID]);
    return results && results.length > 0 ? results[0] : null;
};

const getAllUser = async () => {
    let [results, fields] = await connection.query('SELECT * FROM users')
    return results;
}

const updateUserByID = async (username, password, firstName, surName, email, address, id) => {
    let [results, fields] = await connection.query(
        `UPDATE users
        SET user_username = ?, user_password = ?, user_firstname= ?, user_surname=?, user_email= ?, user_address=? WHERE user_id=?;`,
        [username, password, firstName, surName, email, address, id]
    );
}

const deleteUserByID = async (userID) => {
    let [results, fields] = await connection.query(
        `DELETE FROM users WHERE user_id = ?`,
        [userID]
    );
}

module.exports = {
    getUserById,
    getAllUser,
    updateUserByID,
    deleteUserByID
}