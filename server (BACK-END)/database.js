const mysql = require('mysql');
const dbConfig = require("./config/db.config.js"); 

const dotenv = require('dotenv')
dotenv.config({ path: "./config/config.env" });

const connectDatabase = mysql.createConnection({
        user:  process.env.USER,
        password:  process.env.PASSWORD,
        host:  process.env.HOST,
        database:  process.env.DB
    });

connectDatabase.connect(function(err){
    if (err) throw err;
    console.log(`(ﾉಠдಠ)ﾉ︵┻━┻  𝕕𝕓.𝕛𝕤\n`);
});

module.exports = connectDatabase;






// `
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
// `