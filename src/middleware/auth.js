const config = require("../config/config");
const jwt = require('jsonwebtoken')

exports.verifyUserToken = (req, res, next) => {
    var bearerToken = req.headers.authorization;
    if (!bearerToken) return res.status(401).send("Access Denied / Unauthorized request");

    try {
        var token = bearerToken.split(' ')[1] // Remove Bearer from string
        if (token === 'null' || !token) return res.status(401).send('Unauthorized request');
        

        let verifiedUser = jwt.verify(token, config.TOKEN_SECRET);   // config.TOKEN_SECRET => 'secretKey'
        console.log("---\n",token,config.TOKEN_SECRET,verifiedUser,"\n---")
        if (!verifiedUser) return res.status(401).send('Unauthorized request')

        req.user = verifiedUser; // user_id & user_type_id
        return next();

    } catch (error) {
        res.status(400).send("Invalid Token");
    }

}
exports.IsUser = async (req, res, next) => {
    if (req.user.user_type_id === 0) {
        return next();
    }
    return res.status(401).send("Unauthorized!");   
}
exports.IsAdmin = async (req, res, next) => {
    console.log(req.user.user_type_id,'...')

    if (req.user.user_type_id === 1) {
        return next();
    }
    return res.status(401).send("Unauthorized!");

}