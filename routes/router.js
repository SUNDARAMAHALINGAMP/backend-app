const UsersController=require('../controllers/usersController');
const express = require('express');
const router= express.Router();

router.post('/register',UsersController.register);

module.exports=router;