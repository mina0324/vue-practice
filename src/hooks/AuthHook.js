import { jwtRequest } from "@/api/request";
import { AUTH } from "@/api/api_constant"

export const authHook = async (token) => {
     if(!token){
         return {
             errMsg:"token 缺失",
             code:-1
         }
     }
     return  await jwtRequest.post(AUTH,{},{
        headers:{
            token
        }
    });;
}