const express = require("express");
const app = express();
const cors = require("cors");
const router = express.Router();
const { response, request } = require("express");
var bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config({path: './config/config.env'});

app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }))

//POST /login gets urlencoded bodies
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.route('/user')
    .get(function (req, res, next) {
        console.log("GET request called");
        res.end();
    })
router.route('/user/:id')
    .get(function (req, res, next) {
        console.log("GET request called");
        res.end();
    })
router.route('/user/create')
    .post(function (req, res, next) {
        console.log("POST request called");
        res.end();
    })

app.use(router);

app.listen(3001, () => {
    console.log("is live \nnoot noot noot noot noot noot noot noot noot noot");
})



// app.post('/createUser', (req, res) => {
//     const name = req.body.name;
//     const age = req.body.age;
//     const email = req.body.email;
//     const password = req.body.password;

//     db.query('INSERT INTO user (username, age, email, password) VALUES (?, ?, ?, ?)', [name, age, email, password], (err, result) => {
//         if (err) {
//             console.log(err)
//         }
//         else{
//             res.send("Values inserted successfully")
//         }
//     })
// })

// app.get('/getUsers', (req, res) => {
//     db.query('SELECT * FROM user', (err, result) => {
//         if (err) {
//             console.log(err)
//         }
//         else{
//             res.send(result)
//         }
//     })
// })



