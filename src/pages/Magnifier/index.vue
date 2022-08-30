<template>
  <div id="magnifer">
    <h2>
      这里面主要做一个放大镜的功能 和 点击将此商品加入购物车功能 以及 Commdity
      的预览
    </h2>
    <div class="magnifer-wrapper" v-if="commdityInfo !== '' && JSON.stringify(commdityInfo) !== '{}' ">
      <div class="magnifer-wrapper-img">
        <div class="big-bg-img" :style="bigBgImg"></div>
        <div class="bigImg" @mouseout="maskStopMove('over')">
          <div
            class="mask-borad"
            :style="{ left: moveX + 'px', top: moveY + 'px' }"
            @mouseup="maskStopMove"
            @mousedown="maskMoveStart"
            @mousemove="maskMove"
          ></div>
          <img
            v-lazy="commdityInfo.url"
            alt=""
          />
        </div>
        <div class="smallImg">
          <div class="smallImg-container">
            <img
              :src="commdityInfo.url"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="magnifer-wrapper-info">
        <h3>{{ commdityInfo.title }}</h3>
        <div class="price">
          <p>价格：<span class="p"> {{ commdityInfo.price * payNumber }} </span></p>
          <p>交易成功： <span class="paySuc"> {{ commdityInfo.payCount }} +</span></p>
          <p>品牌：<span> {{ commdityInfo.trade }} </span></p>
        </div>
        <p>配送：<span> {{ commdityInfo.address }} </span></p>
        <p>数量：<input type="number" v-model="payNumber"/></p>
        <p><button @click="nowShoping">立即购买</button> <button @click="addCart(commdityInfo,payNumber)">加入购物车</button></p>
      </div>
    </div>
    <div v-else-if="JSON.stringify(commdityInfo) === '{}'">
            <h2 style="color: red">请在 Commdity 界面 点击对应商品进行查阅</h2>
    </div>
    <Toast :fade="isFade" show :msg="msg"/>  
  </div>
</template>

<script>
import { commdityByIdHook } from "@/hooks/MagniferHook";
import { mapActions,mapState } from "vuex"
import addCardMixin from "@/mixins/add_cart"

export default {
  name: "Magnifier",
  data() {
    return {
      startX: 0,
      startY: 0,
      moveX: 0,
      moveY: 0,
      isMove: false,
      isFade:false,
      msg:"",
      bigBgImg: {
        left: 25 + "px",
        zIndex: -999,
        backgroundImage:
          "url(https://gd4.alicdn.com/imgextra/i4/2411433188/O1CN01TDGjwK1ZQ9H6des7P_!!2411433188.jpg_400x400.jpg)",
        backgroundPosition: "0 0",
      },
      commdityInfo: "",
      payNumber:1
    };
  },
  mounted() {
    commdityByIdHook(this.$route.query.id)
      .then((res) => {
          if(res.data?.length > 0){
           this.commdityInfo = res.data[0];
           this.bigBgImg.backgroundImage = "url("+this.commdityInfo.url+")"
          }else{
           this.commdityInfo = {};
          }
      })
  },
  computed: {
    ...mapState("cart",["carts"]),
    ...mapState("user",["userInfo","token"])
  },
  // 添加购物车
  mixins:[addCardMixin],
  methods: {
    ...mapActions("cart",["add_cart","updateCartNumber"]),
    maskMoveStart(e) {
      this.bigBgImg.left = 430 + "px";
      this.bigBgImg.zIndex = 999;
      this.isMove = true;
      this.startX = e.clientX - e.target.offsetLeft;
      this.startY = e.clientY - e.target.offsetTop;
    },
    maskMove(e) {
      if (this.isMove) {
        this.moveX = e.clientX - this.startX;
        this.moveY = e.clientY - this.startY;
        if (this.moveX <= 0) this.moveX = 0;
        if (this.moveY <= 0) this.moveY = 0;
        if (this.moveX > 400 - 200) this.moveX = 200;
        if (this.moveY > 400 - 200) this.moveY = 200;
        this.bigBgImg.backgroundPosition = `-${this.moveX * 2}px -${
          this.moveY * 2
        }px`;
      }
    },
    maskStopMove(over) {
      if (over === "over") {
        this.bigBgImg.left = "25px";
        this.bigBgImg.zIndex = -999;
      }
      this.isMove = false;
    },
    nowShoping(){
        alert("goumai")
    },
  },
  watch: {
      payNumber(newV){
          if(newV <= 1) {
              this.payNumber = 1;
          }
      }
  },
};
</script>

<style lang="less" scoped>
#magnifer {
  display: flex;
  flex-direction: column;
  align-items: center;
  .magnifer-wrapper {
    padding: 10px 0;
    display: flex;
    width: 1000px;
    height: auto;
    border: 1px solid #333;
    justify-content: space-between;
    &-img {
      width: 450px;
      height: auto;
      display: flex;
      text-align: center;
      flex-direction: column;
      position: relative;
      user-select: none;
      .mask-borad {
        width: 200px;
        height: 200px;
        left: 0;
        margin-left: 25px;
        background: blue;
        opacity: 0.2;
        cursor: move;
        position: absolute;
      }
      .big-bg-img {
        position: absolute;
        width: 400px;
        height: 400px;
        left: 440px;
        background-repeat: no-repeat;
        background-size: 200%;
      }
      .bigImg {
        flex: 1;
        img{
            width: 400px;
            height: 400px;
        }
      }
      .smallImg {
        height: 60px;
        display: flex;
        &-container {
          margin-left: 25px;
          img{
              width:50px;
              height: 50px;
          }  
        }
      }
    }
    &-info {
      flex: 1;
      height: auto;
      display: flex;
      flex-direction: column;
      .price {
        background-color: #fff2e8;
        padding: 10px;
        .p {
          color: red;
          font-size: 25px;
        }
        .paySuc {
          color: #666;
          font-size: 20px;
        }
      }
      p {
        padding: 5px 0;
        button {
          width: 100px;
          height: 40px;
          border: 1px solid #333;
          background-color: crimson;
          color: #eee;
          cursor: pointer;
        }
        input{
            height: 30px;
        }
      }
    }
  }
  h2 {
    margin: 20px 0;
  }
}
</style>
