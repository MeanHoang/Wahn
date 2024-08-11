const connection = require('../config/database');
const { getAllUser } = require('../services/CRUDService');

const getHomepage = async (req, res) => {
    let results = await getAllUser();
    return res.render('home.ejs', { listUsers: results })
}

const getTest = (req, res) => {
    res.send('Test check routes');
}

const getTestEjs = (req, res) => {
    res.render('sample.ejs')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const postCreateUser = async (req, res) => {
    console.log("check req.body: ", req.body);
    //using attrute name 
    let username = req.body.username;
    let password = req.body.password;
    let firstName = req.body.firstName;
    let surName = req.body.surName;
    let email = req.body.email;
    let address = req.body.address;

    //let { user_username, user_password, user_firstname, user_surname, user_email, user_address } = req.body;

    //Using placeholders
    // connection.query(
    //     `INSERT INTO users (user_username, user_password, user_firstname, user_surname, user_email, user_address) 
    //     VALUES 
    //     ('?', '?', '?', '?', '?', '?')`,
    //     [username, password, firstName, surName, email, address],
    //     function (err, results) {
    //         console.log(results);

    //         res.send('Created user succeed !')
    //     }
    // );

    let [results, fields] = await connection.query(
        `INSERT INTO users (user_username, user_password, user_firstname, user_surname, user_email, user_address) 
        VALUES (?, ?, ?, ?, ?, ?)`,
        [username, password, firstName, surName, email, address]
    );

    res.send('Created user succeed !');
}

const getUpdatePage = async (req, res) => {
    const userID = req.params.user_id;

    let [results, fields] = await connection.query('SELECT * FROM users where user_id = ?', [userID]);

    let user = results && results.length > 0 ? results[0] : {};
    res.render('update.ejs', { user: user });
}

const postUpdateUser = async (req, res) => {
    console.log("check req.body: ", req.body);
    //using attrute name 
    let username = req.body.username;
    let password = req.body.password;
    let firstName = req.body.firstName;
    let surName = req.body.surName;
    let email = req.body.email;
    let address = req.body.address;
    let id = req.body.id;
    let [results, fields] = await connection.query(
        `UPDATE INTO users (user_username, user_password, user_firstname, user_surname, user_email, user_address) 
        VALUES (?, ?, ?, ?, ?, ?)`,
        [username, password, firstName, surName, email, address]
    );

    res.send('Created user succeed !');
}


module.exports = {
    getHomepage,
    getTest,
    getTestEjs,
    getCreatePage,
    postCreateUser,
    getUpdatePage,
    postUpdateUser
}