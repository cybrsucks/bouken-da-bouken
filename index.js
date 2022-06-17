const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:"root",
    password: "",
    host: "localhost",
    database: "studydb"
});

app.post('/create', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const password = req.body.password;

    db.query('INSERT INTO user (username, age, email, password, active) VALUES (?, ?, ?, ?)', [name, age, email, password, 1], (err, result) => {
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