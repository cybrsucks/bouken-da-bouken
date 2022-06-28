const express = require("express");
const db = require("./database.js")
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/userRouting");
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');

const auth = require("./auth");

const corsOptions = {
    //To allow requests from client
    origin: [
        "http://localhost:3000",
        "http://localhost:3001",
    ],
    credentials: true,
    exposedHeaders: ["set-cookie"],
};


// Add headers before the routes are defined
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors(corsOptions));

app.use(cookieParser())

app.use("/", router);

app.listen(3001, () => {
    console.log(`\n\n
    ╭───────────────────────────────────────╮
    │                                       │
    │           ᴀᴘᴘ.ᴊs ɪs ʀᴜɴɴɪɴɢ           │
    │                                       │
    ╰───────────────────────────────────────╯
    `);

})