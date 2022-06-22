// tutorial.routes.js
module.exports = app => {

    const express = require('express');
    const router = express.Router();

    var userController = require('../controllers/userController');
    router.get("/user/:id", userController.user_list);
    router.post("/user/create", userController.user_creation);
    router.post("/user/updateEmail", userController.update_email);
    

    // module.exports = router;
    app.use('/api/user', router);
}