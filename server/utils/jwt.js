const base64 = require("./base64");
const sha256 = require("./sha256");

// JWT 生成
exports.sign = function (header, payload, secret) {
  const headerBase64 = base64.urlEncode(JSON.stringify(header));
  const payloadBase64 = base64.urlEncode(JSON.stringify(payload));
  const headerAndpayload = headerBase64 + "." + payloadBase64;
  const secretBase64 = sha256.sha256Encode(headerAndpayload + secret);
  return headerBase64 + "." + payloadBase64 + "." + secretBase64;
};

// JWT 校验
exports.verify = function (token, secret) {
  const resultInfo = {};
  try{
    if (token) {
      const jwtDecode = token.split(".");
      const payload = JSON.parse(base64.urlDecode(jwtDecode[1]));
      if (
        sha256.sha256Encode(jwtDecode[0] + "." + jwtDecode[1] + secret) ===
        jwtDecode[2]
      ) {
        if (payload.expire < Date.now()) {
          resultInfo.expire = "token 已过期";
          resultInfo.code = 0; // 代表 jwt 字符串 过期
        } else {
          resultInfo.code = 2; // 代表正常 也没过期
          resultInfo.data = payload;
        }
      } else {
        resultInfo.code = 1; // 代表非法 jwt 字符串
        resultInfo.expire = "token 不合法";
      }
    } else {
      resultInfo.code = -1; // 代表没传递 jwt 字符串
      resultInfo.expire = "token 缺失";
    }
  }catch(err){
     resultInfo.code = 1; // 代表没传递 jwt 字符串
     resultInfo.expire = "token 不合法";
  }
  return resultInfo;
};
