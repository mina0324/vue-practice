<template>
  <div>
    <Preview  @close="close" :url="url" :show="previewShow"/>
    <h2 style="text-align: center; margin: 15px">
      此页面做一个动漫图像列表展示的功能 可在 Search 页进行搜索 点击图片进行简单预览
    </h2>
    <a
      class="back"
      href="javascript:void(0)"
      v-show="$route.params.keyword"
      @click="$router.back()"
      >返回搜索页面</a
    >
    <div id="home">
      <template v-if="isShow">
        <div v-for="item in listData" :key="item.id" class="home-panel">
          <div class="home-panel-wrapper">
            <img v-lazy="item.url" alt="" @click="previewImg(item.url)"/>
          </div>
          <div class="home-panel-title">
            {{ item.title }}
          </div>
        </div>
      </template>
      <NoData :msg="msg" v-else />
      <Loading v-show="isLoading" />
    </div>
  </div>
</template>

<script>
import NoData from "@/components/NoData";
import { getAllCartoonListData } from "@/hooks/HomeHook";
import Loading from "@/components/Loading/loading";

export default {
  name: "Home",
  data() {
    return {
      listData: [],
      isShow: true,
      isLoading: true,
      previewShow:false,
      url:"http://p2.qhimg.com/bdm/768_474_0/t018d5f40ba406b298c.jpg",
      msg: "没有数据 ， 请重新设定关键词",
    };
  },
  components: {
    NoData,
    Loading,
  },
  mounted() {
    // 展示 卡通列表
    getAllCartoonListData(this);
  },
  methods: {
    close(){
       this.previewShow = false;
    },
    previewImg(url){
      this.url = url;
      console.log(666);
      this.previewShow = true;
    }
  },
};
</script>

<style lang="less" scoped>
.back {
  padding-left: 15px;
  font-size: 14px;
  color: #333;
}

#home {
  display: flex;
  height: auto;
  justify-content: center;
  flex-wrap: wrap;
  .home-panel {
    width: 25%;
    margin-bottom: 15px;
    padding: 10px;
    height: 320px;
    overflow: hidden;
    &-title {
      margin: 5px 0;
    }
    &-wrapper {
      width: 100%;
      height: 270px;
      padding: 10px;
      overflow: hidden;
      border: 1px solid #ddd;
      cursor: pointer;
      img {
        transition: 0.3s;
        width: 100%;
        height: 100%;
        &:hover {
          transform: scale(1.3) skew(10deg);
        }
      }
    }
  }
}

@media screen and (max-width: 998px) {
  #home {
    .home-panel {
      width: 33.3%;
    }
  }
}

@media screen and (max-width: 760px) {
  #home {
    .home-panel {
      width: 50%;
    }
  }
}

@media screen and (max-width: 460px) {
  #home {
    .home-panel {
      width: 100%;
    }
  }
}
</style>
