// 引入 Goods 相关的网络请求业务
import { getAllCateGory } from "@/request/GoodRequest";

import nprogress from "nprogress"

export const filterCateGory = (id,list) => {
    return list.filter(item => item.pid === +id);
}

/**
 * Goods 列表相关逻辑
 */

export const getGoodsList = async (goods,id) => {
    nprogress.start();
    goods.isLoading = true;
    // 获取 Goods 的所有类别
    if(!goods.allData){
      const res = await getAllCateGory();
      goods.allData = res.data;
    }
    if (goods.allData) {
      const data = goods.allData;
      // 根据 ID 获取 Goods 的不同类别
      const renderGoodList = filterCateGory(id, data);
      // 修改 Loading
      goods.isLoading = false;
      nprogress.done();
      // 判断是否有数据
      if (renderGoodList.length > 0) {
        return (goods.isShow = true) && (goods.goods = renderGoodList);
      }
    } else {
      goods.msg = "网络错误,请确保JSON-SERVER服务开启";
      goods.isLoading = false;
    }
    // 切换组件的展示
    goods.isShow = false;
    nprogress.done();
}