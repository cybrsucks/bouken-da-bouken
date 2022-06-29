const jwt = require("jsonwebtoken");

const config = process.env;

// const verifyToken = (req, res, next) => {
//     const token =
//         req.body.token || req.query.token || req.headers["x-access-token"];

//     if (!token) {
//         return res.status(403).send("A token is required for authentication");
//     }
//     try {
//         const decoded = jwt.verify(token, config.TOKEN_KEY);
//         req.user = decoded;
//     } catch (err) {
//         console.log(token);
//         return res.status(401).send("Invalid Token");
//     }
//     return next();
// };

// remove this file, not in use
// generates token upon login
exports.sendToken = (user, statusCode, res) => {

    user.getJwtToken = function () {
        return jwt.sign({
            username: user.username
        }, "hello", {
            expiresIn: "2h"
        })
    }

    //create jwt token 
    const token = user.getJwtToken();

    // cookie options
    const options = {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        httpOnly: true
    };

    res.status(statusCode)
        .cookie('token', token, options)
        .json({
            success: true,
            token,
            username
        })
}

// check current user
const checkUser = (req, res, next) => {
    const token = req.cookies.JWT;
    if (token) {
        jwt.verify(token, 'hello', async (err, decodedToken) => {
            if (err) {
                res.locals.user = null;
                next();
            } else {
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
};


module.exports = {

};