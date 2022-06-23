const express = require("express");
const db  = require("./database.js")
const bodyParser = require("body-parser");
const cors = require("cors");
// const router = express.Router();
const router = require("./routes/userRouting");
const app = express();


// Add headers before the routes are defined
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", router);

// app.post("/abc", (req,res)=>{
//     console.log(req.body);
//     res.send("asdf")
// })

// app.get("/user_list", (req,res)=>{
//     console.log(req.body.id);
//     res.send()
// })

router.post('/login',(req,res) => {
    var user_name = req.body.user;
    var password = req.body.password;
    console.log("User name = "+user_name+", password is "+password);
    res.end("yes");
})

app.listen(3001, () => {
    console.log("app running...");

})





// // const bodyParser = require('body-parser')

// // const router = express.Router();

// // const a3Controller = require("./routes/userRouting");

// //connect to db
// // db.connectDatabase;
// // app.use(bodyParser.json());

// // app.use("/test", a3Controller)

// app.post('/hello', function (req, res){
//     console.log("hello")
//     console.log(req.body)
//     res.send("app hello 111")
// })

// // router.route('/user')
// //     .get(function (req, res, next) {
// //         console.log("GET request called");
// //         res.end();
// //     })


// // router.route('/user/create')
// //     .post(function (req, res) {
// //         console.log("POST request called");
// //         console.log("here");
// //         res.end();
// //     })




