// 按照店铺进行分组过滤 - 项目开发的时候没考虑设计 店铺相关的表
// 所以这里没有店铺ID 用店铺名字当KEY了
export const mapCartToTradeHook = (cartRcords) => {
  const o = {};
  cartRcords.map((cur) => {
    if (!o[cur.commdity.trade]) {
      o[cur.commdity.trade] = [cur];
    } else {
      o[cur.commdity.trade].push(cur);
    }
  });
  return o;
};

let timer = null;

// 添加到购物车
export const addCartHook = async (commdity, cartRecord) => {
  clearTimeout(timer);
  let isSuc = {};
  if (commdity.carts.length <= 0) {
    isSuc = await commdity.add_cart(cartRecord);
  } else {
    const index = commdity.carts.findIndex((v) => {
      return v.cid === cartRecord.cid;
    });
    if (index < 0) {
      isSuc = await commdity.add_cart(cartRecord);
    } else {
      console.log(66666);
      // 同一件商品 修改 数量 + 1
      commdity.updateCartNumber({
        index: index,
        n: cartRecord.number || 1,
        add: true,
      });
    }
  }
  if (!isSuc.errMsg) {
    commdity.msg = "添加成功";
  } else {
    commdity.msg = "添加失败";
  }
  commdity.isFade = true;
  timer = setTimeout(() => {
    commdity.isFade = false;
  }, 1000);
};

// 计算选中商品的总价格
export const checkedCommdityTotalPrice = (carts) => {
  return carts.reduce((prev, cur) => {
    if (cur.isChecked) {
      prev += cur.number * cur.commdity.price;
    }
    return prev;
  }, 0);
};
