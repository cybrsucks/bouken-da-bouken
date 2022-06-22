const db  = require("./database.js")
const express = require('express');
const cors = require("cors");
const app = express();
const router = express.Router();

//connect to db
db.connectDatabase;

app.use(express.urlencoded({ extended: true }));
app.use(cors());

router.route('/user')
    .get(function (req, res, next) {
        console.log("GET request called");
        res.end();
    })
router.route('/user/create')
    .post(function (req, res) {
        console.log("POST request called");
        console.log("here");
        res.end();
    })

app.use(router);

app.listen(3001, () => {
    console.log("app.js backend is live \nnoot noot noot noot noot noot noot noot noot noot");
})

