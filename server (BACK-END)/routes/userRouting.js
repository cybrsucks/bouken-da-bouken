const express = require("express");
const router = express.Router();
const User = require('../model/userModel.js')
const userController = require("../controllers/userController");
const auth = require("../auth");
const verifyToken = require("../auth");

router.post("/user/create", userController.user_creation); //working
router.get("/getUsers", userController.user_All); //working
router.post("/", userController.login); // working
router.post("/login", userController.login); // working
router.get("/dashboard", verifyToken, userController.dashboard);
router.get("/user/manage")
router.get("/userDetails", userController.user_details);

router.post("/user/updateEmail", userController.update_email);


module.exports = router;