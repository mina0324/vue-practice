const jwt = require("../utils/jwt");
const config = require("../config/config")

// 生成 JWT
exports.generateToken = function (req, res) {
   if (JSON.stringify(req.body) === "{}") {
      res.send({ errMsg: "缺失请求体,payload" });
   }
   req.body.expire = Date.now() + config.expire;
   res.send(jwt.sign(config.header, req.body, config.secret))
}

