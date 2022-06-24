const express = require("express");
const router = express.Router();
const User = require('../model/userModel.js')
const userController = require("../controllers/userController");

router.post("/user/create", userController.user_creation); //working
router.get("/getUsers", userController.user_All); //working
router.post("/", userController.login);
router.post("/login", userController.login);
router.get("/dashboard", userController.dashboard);

router.post("/user/updateEmail", userController.update_email);


module.exports = router;