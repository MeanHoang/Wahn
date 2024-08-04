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
module.exports = {
    getHomepage,
    getTest,
    getTestEjs
}