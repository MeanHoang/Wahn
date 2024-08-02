const express = require('express')
const { getHomepage, getTest, getTestEjs } = require('../controllers/homeController');
const router = express.Router()

//router.Method('/route', handler)
//Mthed: get, set

router.get('/', getHomepage)

router.get('/test', getTest)

router.get('/test-ejs', getTestEjs)

module.exports = router  //export deafaul