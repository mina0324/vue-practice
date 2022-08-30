## 项目功能

**注意该项目的登录态时长默认我设置的是 30  秒 也就是登录之后 超过30秒需要再次登录并且需要登录权限才能访问的界面就不能访问了 再次登录之后即可 在 server/config.js 修改登录态时长**

**购物车和收藏夹都是和用户进行关联的 不同的用户可以添加和收藏自己的商品**

### 项目启动

#### 手动启动

+ yarn install
+ yarn serve
+ npx json-server --watch db.json --middlewares ./middleware/index.js
+ node server/server.js

> 在项目根目录下运行

#### 自动启动
+ yarn install  安装依赖
+ 然后通过 CMD 运行 start.bat 即可


### 技术栈

+ Vue2 + VueRouter + Vuex + Axios + Less + Json-Server + NodeJs + express(只做了JWT生成与校验功能的后台,其他的功能都是用的JSONServer)

### 页面

/home
/search
/segister
/login
/goods
/cart
/commdity
/magnifer
/profile
/favorites
/banner
/* -- 404 页面

### 组件

Header
Footer
NoData
Toast
Preview
Loading

### 功能点 知识点

+ 页面整体布局 Flex
+ 使用 VueRouter3 设置路由
+ 添加页面过渡动画
+ 判断不同路由是否显示Footer组件 meta 元信息的使用
+ 展示多级的商品列表
+ 顶部加载进度条
+ Loading 加载动画
+ 容错提示
+ Vue2 中 Swiper 的使用
+ 放大镜 - 自己实现
+ 商品关键字搜索
+ 商品排序
+ 商品分页展示
+ 添加商品
+ 删除商品
+ 图像预览 - 自己封装组件
+ 登录业务 - 带后台核心业务
+ 注册业务
+ 购物车业务 - 精细到用户级别
+ 商品收藏  - 精细到用户级别
+ 懒加载
+ 个人中心展示信息 
+ 注销功能
+ 表单数据的校验 - Vee-validate
+ 导航守卫的应用 
+ 接口权限的判断 
+ Vuex 的应用 
+ vue-router 的练习
+ JWT 的手动生成与校验
  + code : -1 token 缺失
  + code : 0  过期
  + code : 1 不合法
  + code : 2 正常
+ 使用 JSON-SERVER 当做后台并当做一个文件数据库
+ 修改 VueConfig.js 进行全局CSS的相关配置
+ NodeJs 的练习巩固
+ ....


