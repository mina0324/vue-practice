import { addCartHook } from "@/hooks/CartHook";
import { nanoid } from "nanoid";
// 添加购物车
export default {
    methods: {
        addCart(commdity, number = 1) {
            if(this.userInfo && this.token){
                const cartRecord = {
                  id: nanoid(),
                  cid: commdity.id,
                  number,
                  uid:this.userInfo?.id,
                  isChecked: false,
                  commdity,
                };
                // 添加到购物车
                addCartHook(this, cartRecord);
            }else{
                this.msg = "请登录";
                this.isFade = true;
                setTimeout(()=>{
                    this.isFade = false;
                },1000)
            }
          }
    }
}