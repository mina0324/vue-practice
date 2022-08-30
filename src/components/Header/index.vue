<template>
    <div id="header">
        <ul class="nav">
            <router-link active-class="active" tag="li" to="/home"> 首页 </router-link> 
            <router-link active-class="active" tag="li" to="/search"> 搜索 </router-link> 
            <router-link active-class="active" tag="li" to="/goods"> 商品菜单 </router-link>
            <router-link active-class="active" tag="li" to="/banner"> 幻灯片 </router-link>
            <router-link active-class="active" tag="li" v-if="token !== ''" to="/cart"> 购物车 </router-link>
            <router-link active-class="active" tag="li" v-if="token !== ''" to="/favorites"> 收藏 </router-link>
            <router-link active-class="active" tag="li" to="/commdity"> 商品列表 </router-link>
            <router-link active-class="active" tag="li" to="/magnifer"> 商品信息 </router-link>
            <router-link active-class="active" tag="li" v-if="token === ''" to="/login"> 登录 </router-link> 
            <router-link active-class="active" tag="li" v-if="token === ''" to="/register"> 注册 </router-link> 
            <router-link active-class="active" tag="li" v-if="token !== ''" to="/profile"> 个人中心 </router-link> 
        </ul>
    </div>
</template>

<script>

import { mapState } from "vuex"

export default {
    name: 'Header',
    computed: {
        ...mapState("user",["token"])
    },

};
</script>

<style lang="less" scoped>
     #header{
         display: flex;
         height: 40px;
         justify-content: center;
         border-bottom:1px solid #ddd;
         .nav{
             display: flex;
             align-items: center;
             height: 100%;
             list-style-type: none;
             li{
                 width:60px;
                 text-align: center;
                 text-decoration: none;
                 color:#111;
                 &:hover{
                     text-decoration: underline;
                     cursor: pointer;
                 }
             }
         }
     }
</style>