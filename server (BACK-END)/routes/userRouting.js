
  const express = require("express");
  const router = express.Router();
  const User = require('../model/userModel.js')
  const userController = require("../controllers/userController");
  

  router.get("/user_list", userController.user_list);
  router.post("/user/create", userController.user_creation);
  router.post("/user/updateEmail", userController.update_email);


  // router.post("/controller", userController.user_list);


module.exports = router;