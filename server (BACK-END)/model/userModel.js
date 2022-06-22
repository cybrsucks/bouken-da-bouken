//  tutorial.model.js
const sql = require("../database");

// constructor
// const User = function(user) {
//     this.id = user.id;
//     this.username = user.username;
//     this.email = user.email;
//     this.password = user.password;
//     this.active = user.active;
// };

const User = function(user) {
    this.username = user.username;
    this.age = user.age;
    this.email = user.email;
    this.password = user.password;
};

User.create = (user, res) => {
    username = user.username;
    age = user.age;
    email = user.email;
    password = user.password;

    sql.query('INSERT INTO user (username, age, email, password) VALUES (?, ?, ?, ?)', [username, age, email, password], (err, result) => {
        if (err) {
            console.log(err)
        }
        else{
            res.send("Values inserted successfully")
        }
    })
}

User.findById = (id, res) => {
    sql.query('SELECT * FROM user where id = ?', [id], (err, data) => {
        if (err) {
            console.log(err)
        }else {
            res.send(data)
        }
    })
}


module.exports = User;