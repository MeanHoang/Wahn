const express = require('express')
const { getHomepage, getTest, getTestEjs, postCreateUser } = require('../controllers/homeController');
const router = express.Router()

//router.Method('/route', handler)
//Mthed: get, set

router.get('/', getHomepage)

router.get('/test', getTest)

router.get('/test-ejs', getTestEjs)

router.post('/create-user', postCreateUser);

module.exports = router  //export deafaul