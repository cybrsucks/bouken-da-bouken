
  const express = require("express");
  const router = express.Router();
  const User = require('../model/userModel.js')
  const userController = require("../controllers/userController");
  

  router.get("/user_list", userController.user_list); //working
  router.post("/user/create", userController.user_creation); //working
  router.get("/getUsers", userController.user_All); //working
  router.post("/user/updateEmail", userController.update_email);


module.exports = router;