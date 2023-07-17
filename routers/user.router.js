const express = require('express');
const router = express.Router();

const usercontroller = require('../controller/user.controller');

router.post('/registration',usercontroller.register);
router.post('/login',usercontroller.login);

exports.router = router;