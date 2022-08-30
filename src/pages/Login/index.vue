<template>
  <div id="login-and-register">
    <div class="panel">
      <div class="panel-title">
        <h3>登录</h3>
      </div>
      <div class="panel-body">
        <div class="panel-item">
          <label for=""> 邮箱: </label>
          <input
            type="text"
            name="email"
            v-model.trim="formData.email"
            v-validate="'required|email'"
            placeholder="请输入邮箱"
          />
        </div>
        <div class="errorMsg">
          <p>{{ errors.first("email") }}</p>
        </div>
        <div class="panel-item">
          <label for=""> 密码: </label>
          <input
            type="password"
            name="pwd"
            v-model.trim="formData.pwd"
            v-validate="'required|min:6|max:16'"
            placeholder="请输入密码"
          />
        </div>
        <div class="errorMsg">
          <p>{{ errors.first("pwd") }}</p>
        </div>
        <div class="errorMsg">
          <p>{{ errors.first("cpwd") }}</p>
        </div>
        <div class="panel-item">
          <label for=""> </label>
          <button
            @click="login"
            :disabled="isLogin"
            :style="{
              background: isLogin ? '#ddd' : '#08f',
              cursor: isLogin ? 'not-allowed' : 'pointer',
            }"
          >
            {{ loginText }}
          </button>
        </div>
      </div>
    </div>
    <Toast show :fade="isFade" :msg="msg" />
  </div>
</template>

<script>
import { loginHook } from "@/hooks/LoginHook";
import { mapActions,mapState } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      isFade: false,
      msg: "",
      formData: {
        email: "",
        pwd: "",
        cpwd: "",
      },
      isLogin: false,
      loginText: "登录",
    };
  },
  computed: {
    ...mapState("user",["token","userInfo"])
  },
  methods: {
    ...mapActions("user", ["genToken"]),
    login() {
      // 表单验证
      this.$validator.validate().then(async (valid) => {
        if (true === valid) {
          this.isLogin = true;
          this.loginText = "登录中...";
          let { data: user } = await loginHook(
            this.formData.email,
            this.formData.pwd
          );
          if (!user) {
            this.msg = "网络连接失败";
          } else {
            if (user.length > 0 && user[0].email === this.formData.email) {
              // 登录成功 由于是用的两台不同的后端服务器 NodeJs 单独做的 JWT 生成与校验 所以这里要请求我们自己写的Node服务器 不是JSONSERVER服务器
              // 这里严格来说是由后端设置的JWT存储的字段不过我们这里没有用自己的后端做登录功能就放在前端设置了
              delete user.pwd;
              let res = await this.genToken(user[0]);
              if (res?.errMsg) {
                this.msg = "网络错误";
              } else {
                this.msg = "登录成功,1秒后跳转到个人中心";
                this.isFade = true;
                setTimeout(()=>{
                    this.$router.push("/profile")
                },1000)
                return;
              }
            } else {
              this.msg = "账号或密码不对";
            }
          }
          this.isFade = true;
          setTimeout(() => {
            this.isFade = false;
            this.isLogin = false;
            this.loginText = "登录";
          }, 1000);
        }
      });
    },
  },
  mounted() {
    if(this.$code || this.$code === 0){
      if(this.$code === 0){
       this.msg = "登录态过期";
      }
      if(this.$code === 1) {
       this.msg = "登录态不合法";
      }
      if(this.$code === -1) {
       this.msg = "缺少token";
      }
      this.isFade = true;
       setTimeout(()=>{
          this.isFade = false;
          delete this.$code ;
       },1000)
    }
    this.$emit("hiddenBody", true);
  },
  beforeRouteLeave(to, from, next) {
    this.$emit("hiddenBody", false);
    next();
  },
};
</script>
