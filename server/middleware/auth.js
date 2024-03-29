const jwt = require("../utils/jwt");
const config = require("../config/config")

// 校验 JWT
exports.validateToken = function(req,res,next){
    if(req.headers.token){
        if(req.headers.token.split(".").length !== 3){
            res.send({code:-1,expire:"token 不合法"})
        }
        const jwtInfo = jwt.verify(req.headers.token, config.secret);
        console.log(jwtInfo);
        if(jwtInfo.code !== 2){
            res.status(201);
            res.send(jwtInfo);
        }else{
            delete jwtInfo.data.pwd
            res.userInfo = jwtInfo.data;
            next();
        }
    }else{
        res.status(201);
        res.send({code:-1,expire:"token 缺失"})
    }
}