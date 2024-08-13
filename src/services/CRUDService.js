const connection = require("../config/database");

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


module.exports = {
    getAllUser,
    updateUserByID
}