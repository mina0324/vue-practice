import request from "@/api/request";
import { GOODS_CATEGORY_API } from "@/api/api_constant";

// 获取所有商品列表

export const getAllCateGory = async () => {
    try{
        return await request.get(GOODS_CATEGORY_API);
    }catch(error){
        return {errMsg:error}        
    }
}
