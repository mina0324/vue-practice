<template>
  <div class="swiper" v-if="bannerList.length > 0">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in bannerList" :key="item.url">
        <img :src="item.url" alt="" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
  <NoData v-else/>
</template>

<script>
import { getAllBanner } from "@/request/BannerRequest";
import Loading from "@/components/Loading/loading";
import NoData from "@/components/NoData"

export default {
  name: "Banner",
  components: { Loading , NoData},
  data: () => {
    return {
      bannerList: [],
    };
  },
  async mounted() {
    this.bannerList = (await getAllBanner(this)).data;
    this.$nextTick(() => {
      new Swiper(".swiper", {
        loop: true, // 循环模式选项
        effect : 'cards',
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    });
  },
};
</script>

<style lang="less" scoped>
.swiper {
  --swiper-pagination-color: #eee; /* 两种都可以 */
  --swiper-theme-color: #ff6600; /* 设置Swiper风格 */
  --swiper-navigation-color: #eee; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 30px; /* 设置按钮大小 */
  width: 600px;
  height: 300px;
  img {
    width: 100%;
    height: 100%;
    cursor: move;
  }
}
</style>
