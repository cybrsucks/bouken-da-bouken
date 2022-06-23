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

// called by exports.user_list in userController
User.findById = (id, result) => {
    sql.query(`SELECT * FROM user where id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log(`INFO: found user by the id of *${res[0].id}*, with username *${res[0].username}*`)
            result(null, res[0]); //returns null err and result object

            // {
            //     "id": 1,
            //     "username": "admin",
            //     "age": 20,
            //     "email": "admin@min.com",
            //     "password": "wz",
            //     "active": 1
            // }

            return;
        }
    });
};

//  called by exports.user_creation in userController  
User.create = (newUser, res) => {
    sql.query(`INSERT INTO user SET ?`, newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log(`INFO: user created successfully with: `, {id: res.insertId, ...newUser});
    });
};

//  called by exports.user_All in userController  
User.selectAll = (result) => {
    sql.query(`SELECT * FROM user`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log(`INFO: listing all users`)
            result(null, res); //returns null err and result object
            return;
        }
    });
};

User.authentication = (uname, pwd, result) => {
    sql.query(`SELECT * FROM user where username = "${uname}" and password = "${pwd}"`, (err, res) => { 
        if (err) {
            console.log("error: ", err);
            result(err, null); 
            return;
        }
        if (res.length){
            console.log("INFO: Login details are correct")
            result(null, res); //returns null err and result object
            // result.redirect('/home');
            return;
        }else{
            // console.log("INFO: Username/Password is incorrect")
            err = "INFO: Username/Password is incorrect"
            result(err, null); 
            return;
            // result("")
        }
    })
}

module.exports = User;