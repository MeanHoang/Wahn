const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World! Test nodemon')
})

router.get('/test', (req, res) => {
    res.send('Test check routes')
})

router.get('/test-ejs', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router  //exprot deafaul