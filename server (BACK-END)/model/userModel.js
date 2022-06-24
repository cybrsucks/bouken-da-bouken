const sql = require("../database.js");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

// constructor
const User = function(user) {
    this.username = user.username;
    this.age = user.age;
    this.email = user.email;
    this.password = user.password;
};

//  called by exports.user_creation in userController  
User.create = async (newUser, result) => {
    const { username, age, email, password } = newUser;
    encryptedPassword = await bcrypt.hash(password, 10);
    sql.query(`INSERT INTO user SET ?`, [{username, age, email, encryptedPassword}], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        // Create token
        const token = jwt.sign({user_id: username, email}, "hello",{expiresIn: "2h"});

        // save user token
        User.token = token;

        console.log(token);

        // return new user
        console.log(`INFO: user created successfully with: `, {id: res.insertId, ...newUser});
        result(null, res);
        return;

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
    sql.query(`SELECT * FROM user where username = "${uname}" and encryptedPassword = "${pwd}"`, (err, res) => { 
        if (err) {
            console.log("error: ", err);
            result(err, null); 
            return;
        }
        if (res.length){
            console.log("INFO: Login details are correct")
            result(null, res); //returns null err and result object
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
