const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require("cors");
const { response, request } = require("express");
var bodyParser = require('body-parser')

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))


const db = mysql.createConnection({
    user:"root",
    password: "",
    host: "localhost",
    database: "studydb"
});

app.post('/createUser', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const password = req.body.password;

    db.query('INSERT INTO user (username, age, email, password) VALUES (?, ?, ?, ?)', [name, age, email, password], (err, result) => {
        if (err) {
            console.log(err)
        }
        else{
            res.send("Values inserted successfully")
        }
    })
})

app.get('/getUsers', (req, res) => {
    db.query('SELECT * FROM user', (err, result) => {
        if (err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

app.post('/login', (req, res) => {
    const name = req.body.name;
    const password = req.body.password;

    db.query('SELECT * FROM user where username=? and password=?', [name, password], (err, result) => {
        if (err) {
            console.log(err)
        }
        else{
            // res.send(result)
            res.send("Credentials are correct")
        }
    })
})

app.post('/updateEmail', (req, res) => {
    const id = req.body.id;
    const email = req.body.email;
    console.log(req.body)
    db.query("UPDATE user SET email = ? WHERE id = ?", [email, id], (err, result) => {
        if (err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})


// app.delete(){

// }

app.listen(3001, () => {
    console.log("noot noot \nmysql db is live \nnoot noot noot noot noot noot noot noot noot noot");

//         ⣔⣡⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣟⢿⣿⣿⣿⣿⣿⡄⠀⠻⣿⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀      
// ⠀⠀⠀⠀⠀⠀⡴⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣌⠻⣿⣿⣿⣿⣆⠀⠈⢿⣿⠀⠀⠀⠀⠀⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    
// ⠀⠀⠀⠀⢀⡜⣴⣿⣿⡿⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡌⢿⣿⣿⣿⣷⣄⠀⠈⠻⠿⣇⣠⡆⢈⠢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀  
// ⠀⠀⠀⠀⡜⣼⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠹⣿⣿⣿⣿⣷⣦⣀⠀⠀⠀⠀⢀⣷⡌⢆⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⡘⣼⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡙⣿⣿⣿⣿⡾⣿⣿⣷⡔⢾⣿⣿⣿⣦⠣⡀⠀⠀⠀⠀⠀⠀
// ⠀⠀⢠⢡⣿⣿⣿⣿⣿⣼⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡝⣿⣿⣿⣿⢹⣿⣷⣿⣌⢿⣿⣿⣿⣷⡐⡄⠀⠀⠀⠀⠀
// ⠀⠀⡆⣼⣿⣇⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣷⣿⣿⣿⣿⣿⣿⡎⢻⣿⡘⠿⣿⣿⣿⡘⣿⣿⣿⡏⣿⣿⢹⣿⣎⢿⣿⣿⣿⣿⣜⢆⠀⠀⠀⠀
// ⡤⢊⠀⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⡼⣿⣿⣿⢹⣿⣿⣿⣿⣿⡇⣂⠹⡇⣒⣬⡛⠿⣷⡸⣿⣿⣿⢻⣿⢸⣿⣿⣎⢻⣿⣿⣿⣿⣎⢆⠀⠀⠀
// ⠀⡟⢸⣿⣿⣸⣿⣿⣿⣿⡿⣿⣿⣿⣿⡇⣿⣿⣿⠘⣿⣿⣿⣿⣿⢰⣿⣷⡁⣿⣿⣿⣷⣤⡁⢹⣿⣿⢸⣿⢸⣿⣿⣿⣆⢻⣿⣿⣯⣿⣮⠢⡀⠀
// ⢰⡇⢸⣿⣿⣿⣿⣿⣿⣿⣷⣹⣿⣿⣿⣿⢸⣿⣿⠀⢸⣿⣿⣿⢃⢞⣫⣽⣶⣿⡿⠿⣿⣛⣻⡆⢿⣿⢸⡟⢸⣿⣿⣿⣿⣎⣿⣿⣿⡸⣿⣧⠙⡄
// ⢨⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⡇⠙⢿⣿⣿⢸⣿⡏⢸⡀⣿⡿⢃⣾⣿⠟⠫⠑⠂⠉⠁⠀⣀⣀⠀⠸⣿⢸⣇⣿⣿⣿⣿⣿⣿⡘⣿⣿⣧⣿⣿⣶⡌
// ⣀⠁⢘⣿⣿⡿⣿⣿⠹⣿⣿⡇⢀⣄⠛⢿⢸⣿⢃⣿⡇⣋⣴⣿⡛⠂⠀⢀⠀⠀⠀⠀⠀⣠⡶⢠⡇⣿⣼⢸⣿⣿⣿⣿⣿⣿⣧⢹⣿⣿⣼⣿⣇⣿
// ⠀⢱⢸⣸⣿⡇⣿⣿⠀⢿⣿⢣⣿⣿⣿⡦⢸⠏⣼⣿⣿⣿⣿⣿⣤⣤⣾⣿⣧⣙⠿⠟⣉⣥⣴⣾⣇⠀⡏⣿⣿⣿⣿⣿⣿⣿⣿⣆⣿⣿⣗⣿⣿⣿
// ⠀⢸⢸⣇⢿⣷⢸⣿⢰⠸⠃⢾⣿⣿⣿⣗⣨⣬⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⢹⣿⣸
// ⠀⢸⠸⣿⡞⣿⡌⡟⣸⠄⣴⣿⣿⠿⠭⠛⠛⠚⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡎⣿⣿⢸⣿⢿
// ⠀⠸⠀⢿⣿⡽⣷⠀⣿⡿⠋⠉⠀⠀⠀⠀⢒⡀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⢹⣿⢸⣿⣮
// ⠀⠀⡄⣌⢿⣷⣽⣇⠁⠀⢀⡀⢠⣶⡤⠶⢛⣡⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣡⣾⣿⣿⢃⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⢸⣿⣻
// ⠀⠀⡇⣿⣎⢿⣿⣟⡆⢀⣼⣿⡆⣀⣴⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢟⣡⣾⣿⣿⣿⡟⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣼⣿⣾⢃⣿
// ⠀⠀⡇⣿⣿⣧⡹⣿⣾⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣫⣴⣿⣿⣿⣿⣿⣿⠇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⡇⣿⣯⣾⣿
// ⠀⠀⡇⣿⣿⣿⣿⣾⣿⣷⡈⣿⣿⣿⣿⣿⣿⡟⠿⠿⠟⣛⣛⣯⣵⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣼⣿⣿⡇⣿⣿⣿⣿
// ⠀⠀⡇⣿⣿⣿⣿⣿⣿⣿⣷⡌⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣳⣿⣿⣿⢁⣿⣿⣿⣿
// ⠀⠀⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠋⠀⢀⡄⣸⣿⣿⣿⣿⣿⣿⣿⡿⣱⣿⣿⣿⡿⢸⣿⣿⣿⣿
// ⠀⠀⢁⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡈⠛⠻⠿⠿⣿⣿⣿⣿⣿⠿⠿⠛⠛⠉⠀⠀⢀⣴⣿⡇⢿⣿⣿⣿⣿⣿⣿⢟⣾⣿⣿⣿⣿⠃⣿⣿⣿⣿⣿
// ⠀⠀⢸⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠠⡀⠀⠠⠀⠆⠂⠂⠀⠀⣀⣤⣶⣿⣿⣿⣧⢸⣿⣿⣿⣿⢟⣵⣿⣿⣿⣿⣿⠏⣼⣿⣿⣿⡿⡣
// ⠀⠀⠀⡞⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⢶⣧⠀⢰⣶⢂⠂⠀⣼⡆⢹⣿⣿⣿⣿⠟⣡⡌⣿⠿⣋⣵⣿⣿⣿⣿⣿⡿⠋⠀⠈⠛⢛⡩⠊⠀
// ⠀⠀⠀⢳⢿⣿⡟⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠻⢈⣼⠏⠀⠀⣰⣿⣿⣦⣙⠿⢋⣥⡊⠉⢤⣴⣾⣿⣿⣿⠿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠈⢢⠀
// ⠀⠀⠀⠀⢟⢿⣧⢠⡙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠈⠀⠀⠀⢠⣿⣿⣿⠏⠀⠀⡀⠙⢿⣿⣶⣶⣶⣶⣶⣶⣾⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱


})