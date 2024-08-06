const connection = require('../config/database');

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getTest = (req, res) => {
    res.send('Test check routes');
}

const getTestEjs = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    console.log("check req.body: ", req.body);

    let username = req.body.username;
    let password = req.body.password;
    let firstName = req.body.firstName;
    let surName = req.body.surName;
    let email = req.body.email;
    let address = req.body.address;

    //let { user_username, user_password, user_firstname, user_surname, user_email, user_address } = req.body;

    // Using placeholders
    connection.query(
        `INSERT INTO users (user_username, user_password, user_firstname, user_surname, user_email, user_address) 
        VALUES 
        ('?', '?', '?', '?', '?', '?'),`,
        [username, password, firstName, surName, email, address],
        function (err, results) {
            console.log(results);

            res.send('Created user succeed !')
        }
    );

}
module.exports = {
    getHomepage,
    getTest,
    getTestEjs,
    postCreateUser
}