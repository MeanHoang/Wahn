const express = require('express')
const { getHomepage, getTest, getTestEjs, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser } = require('../controllers/homeController');
const router = express.Router()

//router.Method('/route', handler)
//Mthed: get, set

router.get('/', getHomepage)

router.get('/test', getTest)

router.get('/test-ejs', getTestEjs)

router.get('/create', getCreatePage);

router.get('/update/:user_id', getUpdatePage);

router.post('/create-user', postCreateUser);

router.post('/update-user', postUpdateUser);

module.exports = router  //export deafaul