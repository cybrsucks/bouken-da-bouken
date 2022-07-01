const sql = require("../database.js");
// const bcrypt = require("bcryptjs");
const crypto = require('crypto');
const jwt = require("jsonwebtoken");
const secret = 'secret';

// constructor
const User = function (user) {
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.token = user.token;
};

//  called by exports.user_creation in userController
//  used to create a new user in db
User.create = async (newUser, result) => {
    const { username, email, password } = newUser;
    encryptedPassword = crypto.createHmac('sha256', secret).update(password).digest('hex');
    // console.log(encryptedPassword); 
    sql.query(
        `INSERT INTO user SET ?`, [username, email, encryptedPassword], (err, res) => {
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
//  used to auth user and create user's JWT token upon login and access protected routes
User.authentication = (email, pwd, result) => {
    hashedPwd = crypto.createHmac('sha256', secret).update(pwd).digest('hex');
    sql.query(`SELECT * FROM user where email = "${email}"`, (err, res) => {
        const User = res[0];
        if ((res.length && hashedPwd === User.encryptedPassword) && (User.active == 1)){
            console.log("INFO: Login details are correct");
            console.log("INFO: Username of current logged in user: ", User.username)
            // creates JWT token
            const token = jwt.sign({ username: User.username }, "hello", {expiresIn: "2h"})
            // save user token
            User.token = token
            console.log("INFO: JWT token of " + User.username + ": " + token);
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



//  called by exports.user_details in userController
//  used to take in UQ username and return user object
User.selectOne = (username, result) => {
    sql.query(`SELECT * FROM user where username = ?`, [username], (err, res) => {
        // console.log(">>>>>>>>>>>")
        // console.log(res[0])
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log(`INFO: listing user details`);
            result(null, res[0]); //returns null err and result object
            return;
        }
    });
};



//  called by exports.update_email in userController
//  used to update email of user
User.updateEmail = (username, newEmail, result) => {
    console.log(newEmail);
    sql.query("UPDATE user SET email = ? WHERE username = ?", [newEmail, username], (err, res) => {
        if (err) {
            console.log(err)
        }
        else{
            result(null, res[0]); //returns null err and result object
            return;
        }
    })
}



//  called by exports.change_password in userController
//  used to change password of user
User.changePwd = (username, newPwd, result) => {
    console.log(newPwd);
    encryptedPassword = crypto.createHmac('sha256', secret).update(newPwd).digest('hex');
    sql.query("UPDATE user SET encryptedPassword = ? WHERE username = ?", [encryptedPassword, username], (err, res) => {
        if (err) {
            console.log(err)
        }
        else{
            result(null, res[0]); //returns null err and result object
            return;
        }
    })
}


//  called by exports.user_activate_list in userController
//  used to list all users 
User.displayUserStatus = (result) => {
    sql.query(`SELECT username, email, active FROM user`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            // console.log(`INFO: listing user details`);
            result(null, res); //returns null err and result object
            return;
        }
    });
}


//  called by exports.user_activate_list in userController
//  used to list users details to active/deactivate
User.status = (username, status, result) => {
    sql.query(`SELECT * FROM user where username = ?`, [username], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            if (status == 1){
                sql.query("UPDATE user SET active = ? WHERE username = ?", [0, username], (err, res) => {
                    if (err) {
                        console.log(err)
                    }
                    else{
                        // console.log('changed status', status)
                        // console.log('succesfully updated active user to deactivated state')
                        result(null, res[0]); //returns null err and result object
                        return;
                    }
                })
            }
            if (status == 0){
                sql.query("UPDATE user SET active = ? WHERE username = ?", [1, username], (err, res) => {
                    if (err) {
                        console.log(err)
                    }
                    else{
                        // console.log('changed status', status)
                        // console.log('succesfully updated deactivated user to active state')
                        result(null, res[0]); //returns null err and result object
                        return;
                    }
                })
            }
            // console.log(`INFO: listing user details`);
            // console.log('changed status', status)
            // result(null, res[0]); //returns null err and result object
            return;
        }
    });
}


module.exports = User;