const getHomepage = (req, res) => {
    res.send('Hello world');
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