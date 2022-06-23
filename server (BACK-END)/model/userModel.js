const sql = require("../database.js");

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

User.findById = (id, result) => {
    sql.query(`SELECT * FROM user where id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found tutorial: ", res[0]);
            result(null, res[0]);
            return;
        }
          // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        });
    };


module.exports = User;