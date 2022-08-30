// 引入 Goods 相关的网络请求业务
import { getAllCartoonList } from "@/request/HomeRequest";

// 获取所有动漫 + 搜索过滤 - 此处还可以优化 因为每一次搜索都会重新请求 可以用一个数据保存完整数据 但是图懒就不做了 
export const getAllCartoonListData = async (home)=>{
     const res = await getAllCartoonList();
     home.isLoading = false;
     if(!res.errMsg){
        home.listData = res.data;
        const keyword = home.$route.params.keyword;
        if (!keyword) return;
        const newDataList = home.listData.filter((item) => {
          return item.title.indexOf(keyword) !== -1;
        });
        if (newDataList.length > 0) {
          return (home.listData = newDataList);
        }
     }else{
        home.msg = "网络错误,请确保JSON-SERVER服务开启"
     }
     home.isShow = false;
     home.isLoading = false;
}