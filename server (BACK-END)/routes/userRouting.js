// tutorial.routes.js
  const express = require("express");
  const router = express.Router();
  const User = require('../model/userModel.js')

//   const userController = require("../controllers/userController");

  // router.get("/user/:id", userController.user_list);
  // router.post("/user/create", userController.user_creation);
  // router.post("/user/updateEmail", userController.update_email);


  router.post("/controller", function (req, res) {
    console.log(req)
    console.log("working")
    // USERFUNCTION.create
    res.send("hello");
  });


module.exports = router;