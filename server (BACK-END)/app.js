const express = require("express");
const db  = require("./database.js")
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/userRouting");
const app = express();


// Add headers before the routes are defined
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", router);

// router.post('/login',(req,res) => {
//     var user_name = req.body.user;
//     var password = req.body.password;
//     console.log("User name = "+user_name+", password is "+password);
//     res.end("yes");
// })

app.listen(3001, () => {
    console.log("\n\nᴀᴘᴘ.ᴊs ɪs ʀᴜɴɴɪɴɢ ʅ（´◔౪◔）ʃ \n");

})



