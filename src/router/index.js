import Vue from "vue";
import vueRouter from "vue-router";

// 一级路由 Home
import Home from "@/pages/Home";

// 一级路由 Search
import Search from "@/pages/Search";

// 一级路由 Login
import Login from "@/pages/Login";

// 一级路由 Register
import Register from "@/pages/Register";

// 一级路由
import Goods from "@/pages/Goods";

// 一级路由
import Banner from "@/pages/Banner";

// 一级路由
import Cart from "@/pages/Cart";

// 一级路由
import Commdity from "@/pages/Commodity";

// 一级路由
import Magnifer from "@/pages/Magnifier";

// 一级路由
import Favorites from "@/pages/Favorites";

// 一级路由
import Profile from "@/pages/Profile"

// 一级路由 404
import NotFound from "@/pages/NotFound";

Vue.use(vueRouter);

const router = new vueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home/:keyword?",
      name: "home",
      component: Home,
      meta: { isShowFooter: true },
    },
    {
      path: "/search",
      name: "search",
      component: Search,
      meta: { isShowFooter: true },
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/goods/:id?",
      name: "goods",
      component: Goods,
      meta: { isShowFooter: true },
    },
    {
      path: "/banner",
      name: "banner",
      component: Banner,
      meta: { isShowFooter: true },
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
      meta: { isShowFooter: true ,isAuth:true },
    },
    {
      path: "/commdity",
      name: "commdity",
      component: Commdity,
      meta: { isShowFooter: true },
    },
    {
      path: "/magnifer",
      name: "magnifer",
      component: Magnifer,
      meta: { isShowFooter: true },
    },
    {
      path:"/favorites",
      name:"favorites",
      component:Favorites,
      meta: { isShowFooter: true ,isAuth:true}
    },
    {
      path:"/profile",
      name:"profile",
      component:Profile,
      meta: { isShowFooter: true ,isAuth:true }
    },
    {
      path: "*",
      name: "notFound",
      component: NotFound,
      meta: { isShowFooter: true },
    },
  ],
});

export default router;
