<template>
  <div id="profile">
    <h2 v-if="token === ''">暂未登录</h2>
    <h2>个人信息</h2>
    <div class="id">
      ID：<b>{{ userInfo.id }}</b>
    </div>
    <div class="nickName">
      昵称：<b>{{ userInfo.nickName }}</b>
    </div>
    <div class="email">
      邮箱：
      <b>{{ userInfo.email }}</b>
    </div>
    <div class="email">
      注册时间：
      <b>{{ userInfo.r_date | formatRDate }}</b>
    </div>
    <div class="email">
      登录态失效时间 - 和在配置文件配置的时间有关：
      <b>{{ userInfo.expire | formatRDate }}</b>
      当前时间
      <span style="color:red;"> {{ nowData }} </span>
    </div>
    <div class="logout">
         <button @click="clearTokenHandler"> 注销登录 </button>
    </div>
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex";

export default {
  name: "Profile",
  data() {
      return {
          nowData:new Date().toLocaleString() 
      }
  },
  mounted() {
      setInterval(() => {
       this.nowData =  new Date().toLocaleString() 
      }, 1000);
  },
  methods: {
      ...mapActions("user",["cleanToken","deleteUserInfo"]),
      clearTokenHandler(){
           if(confirm("确定注销吗？")){
                this.cleanToken();
                this.deleteUserInfo
                this.$router.push("/login")
           }
      }
  },
  computed: {
    ...mapState("user", ["userInfo", "token"]),
  },
  filters:{
      formatRDate(v){
          return new Date(v).toLocaleString()
      }
  }
};
</script>

<style lang="less" scoped>
#profile {
  width: 1000px;
  margin: 0 auto;
  text-align: center;
  div {
    margin: 5px;
    font-size:18px;
    b{
        font-size:16px;
    }
  }
}
</style>
