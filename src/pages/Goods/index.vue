<template>
  <div>
    <h2 style="text-align:center;margin:15px">此页面只做一个展示多级列表的功能</h2>
    <div id="goods">
      <template v-if="isShow">
        <router-link
          @click.native="getGoods(item.id)"
          :to="{ name: 'goods', params: { id: item.id } }"
          v-for="item in goods"
          :key="item.id"
        >
          {{ item.name }}
        </router-link>
      </template>
      <NoData :msg="msg" v-else />
      <router-link class="back" @click.native="getGoods(0)" to="/goods">
        ← 回到顶级菜单
      </router-link>
      <Loading v-show="isLoading" />
    </div>
  </div>
</template>

<script>
// 引入 Goods 相关的业务逻辑封装
import { getGoodsList } from "@/hooks/GoodHook";
import NoData from "@/components/NoData";
import Loading from "@/components/Loading/loading";

export default {
  name: "Goods",
  components: {
    NoData,
    Loading,
  },
  data() {
    return {
      allGood: undefined,
      goods: [],
      isShow: true,
      isLoading: true,
      msg: "没有数据",
    };
  },
  mounted() {
    // 获取商品数据
    this.getGoods(this.$route.params.id || 0);
  },
  methods: {
    // 获取商品数据
    getGoods(id) {
      getGoodsList(this, this.$route.params.id || 0);
    },
  },
};
</script>

<style lang="less" scoped>
#goods {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .back {
    text-decoration: none;
  }
  a {
    transition: 0.5s;
    padding: 5px;
    margin: 0 10px;
    color: #333;
    &:hover:not(.back) {
      color: white;
      background-color: #333;
    }
  }
}
</style>
