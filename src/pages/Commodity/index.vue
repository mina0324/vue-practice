<template>
  <div id="commdity">
    <Toast :msg="msg" show :fade="isFade" />
    <div class="commdity-type">
      <button
        @click="
          (toggleId = 1)
            ? loadCommdityList(
                pageIndex,
                pageSize,
                searchType,
                searchText,
                orderField,
                orderType
              )
            : 1
        "
      >
        商品列表面板
      </button>
      <button @click="toggleId = 2">添加商品面板</button>
      <button @click="toggleId = 3">删除商品面板</button>
    </div>
    <div class="other-func">
      <div class="search">
        搜索：
        <select v-model="searchType">
          <option value="default">暂无</option>
          <option
            v-for="(item, index) in search"
            :key="index"
            :value="item.value"
          >
            {{ item.text }}
          </option>
        </select>
        &nbsp;
        <input
          type="text"
          v-model.lazy="searchText"
          :placeholder="
            searchType !== 'default'
              ? '请根据' + formatSearchType + '进行搜索'
              : '请选择搜索类型'
          "
        />
      </div>
      <div class="sort">
        排序：
        <select v-model="orderField">
          <option value="default">暂无</option>
          <option value="price">价格</option>
          <option value="payCount">付款人数</option>
        </select>
        &nbsp;
        <select v-model="orderType">
          <option value="asc">升序</option>
          <option value="desc">降序</option>
        </select>
      </div>
    </div>
    <div v-show="toggleId === 1">
      <div class="pagination">
        第 {{ pageIndex }} 页 | 每页显示 {{ pageSize }} 条 | 当前页显示
        {{ commdityList.length }} 条 |
        <a
          href="javascript:void(0)"
          @click="
            loadCommdityList(
              --pageIndex <= 1 ? (pageIndex = 1) && 1 : pageIndex,
              pageSize,
              searchType,
              searchText,
              orderField,
              orderType
            )
          "
        >
          上一页
        </a>
        |
        <a
          href="javascript:void(0)"
          @click="
            loadCommdityList(
              commdityList.length !== 0 ? ++pageIndex : pageIndex,
              pageSize,
              searchType,
              searchText,
              orderField,
              orderType
            )
          "
        >
          下一页
        </a>
        <!-- | 去第&nbsp;<input
          style="width: 30px"
          @blur="
            loadCommdityList(
              pageIndex,
              pageSize,
              searchType,
              searchText,
              sortType,
              orderType
            )
          "
          v-model="pageIndex"
          type="text"
        />&nbsp;页 -->
      </div>
      <div class="commdity-list">
        <h2 v-show="commdityList.length === 0">暂无数据</h2>
        <div
          class="commdity-list-wrapper"
          v-for="item in commdityList"
          :key="item.id"
        >
          <div class="commdity-list-wrapper-content">
            <div class="img">
              <img v-lazy="item.url" alt="" />
            </div>
            <p class="price">
              <big>{{ item.price | formatPrice }}</big>
            </p>
            <p class="title">
              <router-link
                :to="{ path: '/magnifer', query: { id: item.id } }"
                >{{ item.title }}</router-link
              >
            </p>
            <p class="trade">{{ item.trade }}</p>
            <p class="address">{{ item.address }}</p>
            <small class="payCount" style="color: #ccc">{{
              (item.payCount + "+") | formatPayCount
            }}</small>
            <div class="add-cart">
              <button @click="addCart(item)">加入购物车</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="commdity-main" v-show="toggleId === 2">
      <div class="commdity-main-list"></div>
      <div class="commdity-main-add">
        <div class="form-control">
          <label for=""> 商品ID </label>
          <input
            type="text"
            v-model="formData.id"
            readonly
            placeholder="请输入商品ID"
          />
          &nbsp; <span style="color: red">* 只读</span>
        </div>
        <div class="form-control">
          <label for=""> 商品标题 </label>
          <input
            type="text"
            v-model="formData.title"
            placeholder="请输入商品标题"
          />
        </div>
        <div class="form-control">
          <label for=""> 商品价格 </label>
          <input
            type="text"
            v-model.number="formData.price"
            placeholder="请输入商品价格"
          />
        </div>
        <div class="form-control">
          <label for=""> 发货地址 </label>
          <input
            type="text"
            v-model="formData.address"
            placeholder="请输入发货地址"
          />
        </div>
        <div class="form-control">
          <label for=""> 品牌 </label>
          <input
            type="text"
            v-model="formData.trade"
            placeholder="请输入品牌"
          />
        </div>
        <div class="form-control">
          <label for=""> 付款人数 </label>
          <input
            type="text"
            v-model.number="formData.payCount"
            placeholder="请输入付款人数"
          />
        </div>
        <div class="form-control">
          <label for=""> 商品图片 </label>
          <input
            type="text"
            v-model="formData.url"
            placeholder="请输入商品图片"
          />
        </div>
        <div class="form-control">
          <label></label>
          <input type="button" @click="submitForm" value="添加商品" />
        </div>
      </div>
    </div>
    <div v-show="toggleId === 3">
      <h2 style="margin: 20px 0">
        点击对应的ID就会删除对应的商品 -
        <span style="color: red">和商品列表一一对应</span>
      </h2>
      <div>
        <p v-for="item in ids" :key="item.id">
          {{ item.title }} &nbsp;&nbsp;&nbsp;
          <a href="javascript:void(0)" @click="deleteCommdity(item.id)">
            {{ item.id }}
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  addCommdityHook,
  getCommdityListHook,
  getCommdityIds,
  deleteCommdityHook,
} from "@/hooks/CommdityHook";
import { mapState, mapActions } from "vuex";
import { nanoid } from "nanoid";

import addCardMixin from "@/mixins/add_cart"

export default {
  name: "Commodity",
  data() {
    return {
      search: [
        { text: "标题", value: "title" },
        { text: "品牌", value: "trade" },
        { text: "发货地", value: "address" },
      ],
      searchType: "default",
      searchText: "",
      orderField: "default",
      orderType: "asc",
      commdityList: [],
      isFade: false,
      msg: "表单项不能为空",
      ids: [],
      pageIndex: 1,
      pageSize: 12,
      formData: {
        id: nanoid(),
        title: "",
        price: "",
        address: "",
        trade: "",
        payCount: "",
        url: "",
      },
      isSubmit: true,
      toggleId: 1,
      userInfo:this.$store.state.user.userInfo,
      token:this.$store.state.user.token
    };
  },
  mounted() {
    this.loadCommdityList(this.pageIndex, this.pageSize);
  },
  computed: {
    ...mapState("cart", ["carts"])
  },
  // 添加购物车
  mixins:[addCardMixin],
  methods: {
    ...mapActions("cart", ["add_cart", "delete_cart", "updateCartNumber"]),
    loadCommdityList(
      pageIndex,
      pageSize,
      searchType,
      searchText,
      sortType,
      orderType
    ) {
      // 获取列表数据
      getCommdityListHook(
        pageIndex,
        pageSize,
        searchType,
        searchText,
        sortType,
        orderType
      ).then((res) => {
        if (res.errMsg) {
          if (res.errMsg) {
            this.isFade = true;
            this.msg = "获取失败";
          }
        }
        this.commdityList = res.data || [];
        this.ids = getCommdityIds(this.commdityList);
      });
    },
    submitForm() {
      for (let formItem in this.formData) {
        if (!/[\w\d\p{L}]+/gu.test(this.formData[formItem])) {
          this.isSubmit = false;
          this.msg = "不符合格式规范要求";
        } else {
          if (formItem === "price" || formItem === "payCount") {
            if (!/\d+/g.test(this.formData[formItem])) {
              this.isSubmit = false;
              this.msg = "ID,价格,付款人数必须是数字";
            } else {
              this.isSubmit = true;
            }
          }
        }
      }
      if (this.isSubmit) {
        this.msg = "填写完毕 可以提交";
        //  添加商品
        addCommdityHook(this.formData)
          .then((res) => {
            this.msg = "添加成功，请转到商品列表面板查看";
            if (res.errMsg) {
              this.msg = "添加失败，ID 不能重复";
            }
            // 重新生成ID
            this.formData.id = nanoid();
          })
          .catch((err) => {
            this.msg = "添加失败，请检查网络或者JSON-SERVER是否开启";
          });
      }
      this.isFade = true;
      //  关闭Toast
      setTimeout(() => {
        this.isFade = false;
      }, 1000);
    },
    async deleteCommdity(id) {
      if (confirm("确定删除吗？")) {
        try {
          await deleteCommdityHook(id);
          this.isFade = true;
          this.msg = "删除成功";
          this.toggleId = 1;
          this.loadCommdityList(this.pageIndex, this.pageSize);
        } catch (error) {
          this.msg = "删除失败，未知错误";
        }
        setTimeout(() => {
          this.isFade = false;
        }, 1000);
      }
    },
    searchCommdity() {
      loadCommdityList(
        this.pageIndex,
        this.pageSize,
        this.orderField,
        this.orderType
      );
    },
    solveRepeat(field, msg) {
      this.pageIndex = 1;
      if (field === "default") {
        this.isFade = true;
        this.msg = msg;
        setTimeout(() => {
          this.isFade = false;
        }, 1000);
        return false;
      }
      return true;
    },
  },
  computed: {
    ...mapState("cart", ["carts"]),
    formatSearchType() {
      for (const item in this.search) {
        if (this.searchType === this.search[item].value) {
          return this.search[item].text;
        }
      }
    },
  },
  watch: {
    orderField() {
      if (this.solveRepeat(this.orderField, "请选择排序字段"))
        this.loadCommdityList(
          this.pageIndex,
          this.pageSize,
          this.searchType,
          this.searchText,
          this.orderField,
          this.orderType
        );
    },
    orderType() {
      if (this.solveRepeat(this.orderField, "请选择排序字段"))
        this.loadCommdityList(
          this.pageIndex,
          this.pageSize,
          this.searchType,
          this.searchText,
          this.orderField,
          this.orderType
        );
    },
    searchText() {
      if (this.solveRepeat(this.searchType, "请选择搜索类型"))
        this.loadCommdityList(
          this.pageIndex,
          this.pageSize,
          this.searchType,
          this.searchText
        );
    },
    searchType() {
      this.loadCommdityList(
        this.pageIndex,
        this.pageSize,
        this.searchType,
        this.searchText
      );
    },
  },
  filters: {
    formatPrice(value) {
      return "¥ " + value;
    },
    formatPayCount(value) {
      return value + " 人付款";
    },
  },
};
</script>

<style lang="less" scoped>
#commdity {
  .other-func {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    div {
      margin: 0 15px;
    }
  }
  .pagination {
    text-align: right;
  }
  .commdity-list {
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    h2 {
      margin: 20px 0;
    }

    &-wrapper {
      width: 200px;
      padding: 10px;
      &-content {
        width: 150px;
        height: auto;
        border: 1px solid #ddd;
        padding: 5px;
        .add-cart {
          display: flex;
          button {
            margin: 5px 0;
            color: #eee;
            border: none;
            outline: none;
            font-size: 12px;
            width: 80px;
            margin-left: auto;
            height: 20px;
            background: #f53b57;
            cursor: pointer;
          }
        }

        .title {
          a {
            color: #333;
          }
        }
        .price {
          color: red;
          font-size: 14px;
        }
        .trade {
          color: #999;
          text-decoration: underline;
        }
        img {
          width: 100%;
          height: 120px;
        }
      }
    }
  }
  display: flex;
  align-items: center;
  flex-direction: column;
  .commdity-type {
    button {
      width: 100px;
      background-color: #333;
      color: #eee;
      height: 30px;
      margin: 0 10px;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .commdity-main {
    &-list,
    &-add {
      display: flex;
      margin-top: 10px;
      flex-direction: column;
      .form-control {
        display: flex;
        height: 30px;
        margin: 5px 0;
        text-align: right;
        label {
          width: 60px;
          line-height: 30px;
        }
        input {
          margin-left: 10px;
          flex: 1;
          border: 1px solid #333;
          padding-left: 1em;
          outline: none;
        }

        input[type="button"] {
          background-color: #333;
          color: white;
          font-size: 12px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
