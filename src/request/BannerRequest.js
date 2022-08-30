import request from "@/api/request";
import { BANNERS } from "@/api/api_constant";

// 获取所有商品列表

export const getAllBanner = async () => {
    try{
        return await request.get(BANNERS);
    }catch(error){
        return {errMsg:error}
    }
}
