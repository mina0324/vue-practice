export const BASE_URL = "http://localhost:3001";
export const JWT_VALIDATE_URL = "http://localhost:3001";
export const TIMEOUT = 5000;

// 商品GOODS列表API地址 GET
export const GOODS_CATEGORY_API = "/goods";
// 动漫图像数据
export const HOME_CARTOON_LIST = "/cartoon"
// 轮播图数据
export const BANNERS = "/banner"
// 商品添加 POST
export const ADD_COMMDITY = "/commdity"
// 获取COMMDITY商品列表 GET
export const GET_COMMDITY_LIST = "/commdity"
// 删除商品 DELETE
export const DELETE_COMMDITY  = "/commdity"
// 根据ID找到某一个商品 GET
export const COMMDITY_BY_ID = "/commdity"
// 添加购物车数据到数据库 POST
export const ADD_CART = "/cart"
// 添加到收藏夹 POST
export const ADD_FAVORITE = "/favorites"
// 注册用户 POST
export const REGISTER_USER = "/users"
// 登录 GET
export const LOGIN = "/users"

// 生成JWT
export const GEN_TOKEN = "/generateToken"
// 校验 JWT
export const AUTH = "/auth"