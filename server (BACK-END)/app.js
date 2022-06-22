const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Add headers before the routes are defined
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/abc", (req,res)=>{
    console.log(req.body);
    res.send("asdf")
})




app.listen(3001, () => {
    console.log(
       "app running..."
        
);

})












 

// // const express = require('express');
// // const cors = require("cors");
// // const bodyParser = require('body-parser')

// // const app = express();

// // app.use(bodyParser.urlencoded());
// // app.use(bodyParser.json());
// // app.use(cors());
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




