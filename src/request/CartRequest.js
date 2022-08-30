import {ADD_CART} from "@/api/api_constant"
import request from "@/api/request"

// ADD_CART 这里的 ADD_CART 是使用的 JSONSERVER 的api 遵循 restful 风格 所以使用不同的请求方法即可达成不同的效果

export const addCart = async (cart) => {
    try{
        return await request.post(ADD_CART,cart);
    }catch(error){
        return {errMsg:error}
    }
}


export const getCarts = async (uid) => {
    try{
        return await request.get(ADD_CART+"?uid="+uid);
    }catch(error){
        return {errMsg:error}        
    }
}

export const deleteCart = async (id) => {
    try{
        // JSONSERVER 要求删除必须要ID 所以这里数据库的删除所有就不做了 只是在内存中删除
       if(id){
        return await request.delete(ADD_CART+"/" + id);
       } 
    }catch(error){
        return {errMsg:error}        
    }
}

export const updateCartNumber = async (cart) => {
    try{
        await deleteCart(cart.id); 
        // JSONSERVER 要求删除必须要ID 所以这里数据库的删除所有就不做了 只是在内存中删除
        await addCart(cart);
    }catch(error){
        return {errMsg:error}        
    }
}