<template>
  <div id="login-and-register">
    <div class="panel">
      <div class="panel-title">
        <h3>注册</h3>
      </div>
      <div class="panel-body">
        <div class="panel-item">
          <label for=""> ID(<small>*只读</small>): </label>
          <input
            type="text"
            placeholder="自动生成"
            readonly
            v-model="formData.id"
          />
        </div>
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
          <label for=""> 昵称: </label>
          <input
            type="text"
            v-model.trim="formData.nickName"
            v-validate="'required|min:3|max:8'"
            name="nickName"
            placeholder="请输入昵称"
          />
        </div>
        <div class="errorMsg">
          <p>{{ errors.first("nickName") }}</p>
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
        <div class="panel-item">
          <label for=""> 确认密码: </label>
          <input
            type="password"
            name="cpwd"
            v-model.trim="formData.cpwd"
            v-validate="'required|min:6|max:16|confirmed:pwd'"
            placeholder="确认密码"
          />
        </div>
        <div class="errorMsg">
          <p>{{ errors.first("cpwd") }}</p>
        </div>
        <div class="panel-item">
          <label for=""> 验证码: </label>
          <input
            name="code"
            type="text"
            v-model.trim="formData.code"
            v-validate="{ required: true, regex: /(.){6}/ }"
            placeholder="请输入验证码"
          />
          <a
            href="javascript:void(0)"
            @click="
              formData.code = (Math.random() * 0xffffff)
                .toString(16)
                .split('.')[1]
                .slice(0, 6)
            "
          >
            生成验证码
          </a>
        </div>
        <div class="errorMsg">
          <p>{{ errors.first("code") }}</p>
        </div>
        <div class="panel-item">
          <label for=""> </label>
          <button :disabled="isRegSuc" :style="{background: isRegSuc ? '#eee' : '#08f',cursor:isRegSuc ? 'not-allowed' : 'pointer' }" @click="register">注册</button>
        </div>
      </div>
    </div>
    <Toast show :fade="isFade" :msg="msg" />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { registerUserHook, checkUserIsExistsHook } from "@/hooks/RegisterHook";

const message = {
  custom: {
    cpwd: {
      confirmed: () => "两次密码不一致",
    },
    code: {
      regex: () => "验证码必须是6位",
    },
  },
};

let time = 3;

export default {
  name: "Register",
  data() {
    return {
      isFade: false,
      msg: "",
      formData: {
        id: nanoid(),
        email: "",
        nickName: "",
        pwd: "",
        r_date: Date.now(),
        cpwd: "",
        code: "",
      },
      isExisis: false,
      isRegSuc:false
    };
  },
  methods: {
    register() {
      // 表单验证
      this.$validator.validate().then(async (valid) => {
        if (true === valid) {
          if (!this.isExisis) {
            if ((await checkUserIsExistsHook(this.formData.email?.trim())).data.length !== 0 ) {
              this.msg = "邮箱已注册，请登录将在"+time+"秒后跳转到登录页";
              this.isExisis = true;
             } else {
              this.$delete(this.formData, "cpwd");
              this.$delete(this.formData, "code");
              let user = await registerUserHook(this.formData);
              if (!user.data.errMsg) {
                this.msg = "注册成功,将在"+time+"秒后跳转到登录页";
                this.$set(this.formData, "cpwd", "");
                this.$set(this.formData, "code", "");
                this.formData.id = nanoid();
              }
            }
          }
          this.isRegSuc = true;
          this.isFade = true;
          setTimeout(()=>{
             this.isFade = false;
             this.$router.push("/login")
          },3000)
        }
        // else {
        // console.log(this.$validator.errors.all());
        // }
      });
    },
  },
  mounted() {
    this.$validator.localize("zh_CN", message);
    this.$emit("hiddenBody", true);
  },
  beforeRouteLeave(to, from, next) {
    this.$emit("hiddenBody", false);
    next();
  },
  watch: {
    "formData.email":function(){
       this.isExisis = false;
    }
  },
};
</script>
