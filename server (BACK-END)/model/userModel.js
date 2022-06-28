const sql = require("../database.js");
// const bcrypt = require("bcryptjs");
const crypto = require('crypto');
const jwt = require("jsonwebtoken");
const secret = 'secret';

// constructor
const User = function (user) {
    this.username = user.username;
    this.age = user.age;
    this.email = user.email;
    this.password = user.password;
    this.token = user.token;
};

//  called by exports.user_creation in userController
User.create = async (newUser, result) => {
    const {
        username,
        age,
        email,
        password
    } = newUser;
    // encryptedPassword = await bcrypt.hash(password, 10);
    encryptedPassword = crypto.createHmac('sha256', secret).update(password).digest('hex');
    // console.log(encryptedPassword); 
    sql.query(
        `INSERT INTO user SET ?`,
        [{
            username,
            age,
            email,
            encryptedPassword,
        }, ],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            // return new user
            console.log(`INFO: user created successfully with: `, {
                id: res.insertId,
                ...newUser,
            });
            result(null, res);
            // console.log(res)
            return;
        }
    );
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
            console.log(`INFO: listing all users`);
            result(null, res); //returns null err and result object
            return;
        }
    });
};



//  called by exports.login in userController
User.authentication = (uname, pwd, result) => {
    hashedPwd = crypto.createHmac('sha256', secret).update(pwd).digest('hex');

    sql.query(`SELECT * FROM user where username = "${uname}"`, (err, res) => {
        const User = res[0];

        // if (res.length && bcrypt.compare(pwd, User.encryptedPassword)) {
            if (res.length && hashedPwd === User.encryptedPassword){
            console.log("INFO: Login details are correct");

            console.log(uname)

            // creates JWT token
            const token = jwt.sign({ username: User.username }, "hello", {expiresIn: "2h"})

            // save user token
            User.token = token;

            console.log("Login User.token: " + User.token);

            // console.log("User object: " + User); // refers to the User object [Object object] containing * info for the user found in db
            // console.log(res);  

            result(null, res[0]); //returns null err and result object
            return;
        } else {
            // console.log("INFO: Username/Password is incorrect")
            err = "INFO: Username/Password is incorrect";
            result(err, null);
            return;
        }
    });
};

module.exports = User;