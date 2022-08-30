const express = require("express");
const router = express.Router();
const {validateToken} = require("../middleware/auth")
const {generateToken} =  require("../controller/userControll")

data = {
     "goods": [
       {
         "id": 1,
         "name": "外套",
         "pid": 0
       },
       {
         "id": 2,
         "name": "内衣",
         "pid": 0
       },
       {
         "id": 3,
         "name": "家居",
         "pid": 0
       },
       {
         "id": 4,
         "name": "箱包",
         "pid": 0
       },
       {
         "id": 5,
         "name": "玩具",
         "pid": 0
       },
       {
         "id": 6,
         "name": "运动户外",
         "pid": 0
       },
       {
         "id": 7,
         "name": "个护",
         "pid": 0
       },
       {
         "id": 8,
         "name": "生活电器",
         "pid": 0
       },
       {
         "id": 9,
         "name": "茶酒",
         "pid": 0
       },
       {
         "id": 10,
         "name": "清洁",
         "pid": 0
       },
       {
         "id": 11,
         "name": "鲜花",
         "pid": 0
       },
       {
         "id": 12,
         "name": "文具",
         "pid": 0
       },
       {
         "id": 13,
         "name": "夹克",
         "pid": 1
       },
       {
         "id": 14,
         "name": "衬衫",
         "pid": 1
       },
       {
         "id": 15,
         "name": "牛仔衣",
         "pid": 1
       },
       {
         "id": 16,
         "name": "女士内衣",
         "pid": 2
       },
       {
         "id": 17,
         "name": "男士内衣",
         "pid": 2
       },
       {
         "id": 18,
         "name": "女士内裤",
         "pid": 2
       },
       {
         "id": 53,
         "name": "蕾丝内裤",
         "pid": 18
       },
       {
         "id": 19,
         "name": "衣柜",
         "pid": 3
       },
       {
         "id": 20,
         "name": "储物柜",
         "pid": 3
       },
       {
         "id": 21,
         "name": "鞋柜",
         "pid": 3
       },
       {
         "id": 22,
         "name": "手提箱",
         "pid": 4
       },
       {
         "id": 23,
         "name": "行李箱",
         "pid": 4
       },
       {
         "id": 24,
         "name": "玩具飞机",
         "pid": 5
       },
       {
         "id": 25,
         "name": "玩具汽车",
         "pid": 5
       },
       {
         "id": 26,
         "name": "芭比娃娃",
         "pid": 5
       },
       {
         "id": 27,
         "name": "哑铃",
         "pid": 6
       },
       {
         "id": 28,
         "name": "滑板",
         "pid": 6
       },
       {
         "id": 29,
         "name": "护膝",
         "pid": 6
       },
       {
         "id": 30,
         "name": "自行车",
         "pid": 6
       },
       {
         "id": 31,
         "name": "洗手液",
         "pid": 7
       },
       {
         "id": 32,
         "name": "洗面奶",
         "pid": 8
       },
       {
         "id": 33,
         "name": "爽肤水",
         "pid": 8
       },
       {
         "id": 34,
         "name": "粉底",
         "pid": 8
       },
       {
         "id": 35,
         "name": "防晒霜",
         "pid": 8
       },
       {
         "id": 36,
         "name": "发胶",
         "pid": 8
       },
       {
         "id": 37,
         "name": "沐浴露",
         "pid": 8
       },
       {
         "id": 38,
         "name": "洗头膏",
         "pid": 8
       },
       {
         "id": 39,
         "name": "唇釉",
         "pid": 8
       },
       {
         "id": 40,
         "name": "润唇膏",
         "pid": 8
       },
       {
         "id": 41,
         "name": "护肤霜",
         "pid": 8
       },
       {
         "id": 42,
         "name": "龙井",
         "pid": 9
       },
       {
         "id": 43,
         "name": "二锅头",
         "pid": 9
       },
       {
         "id": 44,
         "name": "郎酒",
         "pid": 9
       },
       {
         "id": 45,
         "name": "茅台",
         "pid": 9
       },
       {
         "id": 46,
         "name": "酒品1",
         "pid": 9
       },
       {
         "id": 47,
         "name": "酒品2",
         "pid": 9
       },
       {
         "id": 48,
         "name": "酒品3",
         "pid": 9
       },
       {
         "id": 49,
         "name": "酒品4",
         "pid": 9
       },
       {
         "id": 50,
         "name": "测试数据",
         "pid": 9
       },
       {
         "id": 51,
         "name": "测试数据",
         "pid": 9
       },
       {
         "id": 52,
         "name": "测试数据",
         "pid": 10
       }
     ],
     "cartoon": [
       {
         "id": "001",
         "title": "猫耳朵 动漫 游戏机 动漫卡通",
         "url": "http://p2.qhimg.com/bdm/768_474_0/t018d5f40ba406b298c.jpg"
       },
       {
         "id": "002",
         "title": "老虎面具 小老虎 新年 ",
         "url": "http://p8.qhimg.com/bdm/768_474_0/t01e5f605262fb61fb4.jpg"
       },
       {
         "id": "003",
         "title": "海盗船 魔法 帆船",
         "url": "http://p1.qhimg.com/bdm/768_474_0/t01a7e20297ee92fdd5.jpg"
       },
       {
         "id": "004",
         "title": "上学 清晨 书包 动漫卡通",
         "url": "http://p1.qhimg.com/bdm/768_474_0/t011917e5b14e3cd8e8.jpg"
       },
       {
         "id": "005",
         "title": "大眼睛女孩 蝴蝶结 列车 动漫卡通",
         "url": "http://p9.qhimg.com/bdm/768_474_0/t0153df2c1ccb1f5c1a.jpg"
       },
       {
         "id": "006",
         "title": "下雨天 屋檐下 精灵 台阶",
         "url": "http://p5.qhimg.com/bdm/768_474_0/t01c04a7dd1f7c808ec.jpg"
       },
       {
         "id": "007",
         "title": "猫咪 温馨小屋 可爱女孩 玩偶",
         "url": "http://p4.qhimg.com/bdm/768_474_0/t01654ebd1596257961.jpg"
       }
     ],
     "banner": [
       {
         "url": "http://p0.qhimg.com/bdm/768_474_0/t01e8bc75647c7de4ef.jpg"
       },
       {
         "url": "http://p1.qhimg.com/bdm/768_474_0/t0199e880a2367c935e.jpg"
       },
       {
         "url": "http://p9.qhimg.com/bdm/768_474_0/t01d68378c682a5fd65.jpg"
       },
       {
         "url": "http://p5.qhimg.com/bdm/768_474_0/t01971c5d0031697c53.jpg"
       },
       {
         "url": "http://p3.qhimg.com/bdm/768_474_0/t011184ae13b2d7f21c.jpg"
       }
     ],
     "commdity": [
       {
         "id": "yOHpI_5_7JY66xJTvtTvh",
         "title": "全新小忍者摩托车跑车国四电喷400c双缸趴赛r3地平线V6整车可上牌",
         "price": 30000,
         "address": "江苏 无锡",
         "trade": "摩托车批发6",
         "payCount": 200,
         "url": "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/34428509/O1CN01qmej6K2CjAnfdEPM0_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp"
       },
       {
         "id": "evABDKoDi9rRzikZ6FUh5",
         "title": "二手国四R35摩托车川崎h2小忍者双缸400跑车地平线重机车V6公路赛",
         "price": 20000,
         "address": "江苏 连云港",
         "trade": "tb052926510",
         "payCount": 2000,
         "url": "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/919270160/O1CN01zjQemb1D3JzLh5rIR_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp"
       },
       {
         "id": "E3dkfAAQ0TO6ytAhar63X",
         "title": "全新国四电喷125cc珠峰华鹰牌CG王150cc男装男式摩托车整车可上牌",
         "price": 9000,
         "address": "广东 广州",
         "trade": "帝阳车行",
         "payCount": 200569,
         "url": "https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2411205032/O1CN01FCJ4yE1n2hk46ycED_!!0-item_pic.jpg_580x580Q90.jpg_.webp"
       },
       {
         "id": "3IaS1tMmms2og7fG5yE5U",
         "title": "二手进口川崎小忍者跑车h2雅马哈r35v6双缸400重机地平线趴赛摩托",
         "price": 12000,
         "address": "广东 广州",
         "trade": "帝阳车行",
         "payCount": 200569,
         "url": "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2207583273753/O1CN016Z65uG1dav9OhB8kw_!!0-item_pic.jpg_580x580Q90.jpg_.webp"
       },
       {
         "id": "vvivlGrlpBrmsWVkPFaty",
         "title": "二手摩托车跑车机车小忍者地平线北极光趴赛重型公路赛街车双r3款",
         "price": 120000,
         "address": "江苏 连云港",
         "trade": "cuichao3383",
         "payCount": 20056,
         "url": "https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/353269902/O1CN01uNubVn2N1ATDmNwxG_!!353269902.jpg_580x580Q90.jpg_.webp"
       },
       {
         "id": "v1kZ_-ngK5c_KZdUwYXMW",
         "title": "BWS路虎摩托车125CC国四电喷踏板车女装燃油助力150越野复古跑车",
         "price": 65478,
         "address": "河南",
         "trade": "无锡艾泽",
         "payCount": 1569,
         "url": "https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/545935764/O1CN01i4lZfU1sRxVv530hu_!!545935764.jpg_580x580Q90.jpg_.webp"
       },
       {
         "id": "qi5BhQiGvuc1LhK8oh3XZ",
         "title": "二手地平线250跑车摩托车原装正品350四缸街车大趴赛公路赛整车",
         "price": 65478,
         "address": "河南",
         "trade": "无锡艾泽",
         "payCount": 1569,
         "url": "https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/3302163320/O1CN01iekKZn1aObZIY3zVM_!!3302163320.jpg_580x580Q90.jpg_.webp"
       },
       {
         "id": "T1tXsHuxc9Bvx6DdHcYkd",
         "title": "燃油助力车30cc四冲程摩托车70钓鱼车新款厂家直销灵狐建设发动机",
         "price": 6548,
         "address": "河南",
         "trade": "无锡艾泽",
         "payCount": 156,
         "url": "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/223761283/O1CN01rW29b01LLelfcBs9t_!!223761283.jpg_580x580Q90.jpg_.webp"
       },
       {
         "id": "6ZzY3YHoQ8mScpP494uj7",
         "title": "FY250GR25街车R15赛车春风NK250水冷雅马哈",
         "price": 65468,
         "address": "河南",
         "trade": "无锡艾泽",
         "payCount": 156123,
         "url": "https://img.alicdn.com/imgextra/i2/385300017/O1CN01f5WVsm1BzpLOmwU8S_!!0-saturn_solar.jpg_250x250.jpg"
       },
       {
         "id": "1CvX-jLBUp6KDOXL4Jal9",
         "title": "厂家直销2022新款儿童电动投币摇摇车超市门口商用音乐遥遥车特价",
         "price": 1.9,
         "address": "河南",
         "trade": "ajun19851012",
         "payCount": 10000,
         "url": "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/27104578/O1CN01p9u5Yv1jglo0gzLqu_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp"
       },
       {
         "id": "39aVD-RwaJ4RG6i7UIrwa",
         "title": "摇摇马小木马 儿童摇马婴儿宝宝两用溜溜车二合一周岁生日礼物女",
         "price": 1.9,
         "address": "浙江 温州",
         "trade": "coburn旗舰店",
         "payCount": 100,
         "url": "https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2207359553275/O1CN01Z45kia1a3zkF13bDk_!!0-item_pic.jpg_580x580Q90.jpg_.webp"
       },
       {
         "id": "pTkILvLdVwJ267KExfOfz",
         "title": "相思木全单吉他美西奥吉他全单相思木旅行吉他全单38寸41寸",
         "price": 6300,
         "address": "广东 广州",
         "trade": "小伟753545393",
         "payCount": 100,
         "url": "https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/2255433527/O1CN01w8LOoo1bvPf1NUx1n_!!2255433527-0-picasso.jpg_580x580Q90.jpg_.webp"
       },
       {
         "id": "bvrn-dHIEj70Vz3_9S_Gq",
         "title": "官方旗舰布鲁克S25吉他男生女生专用十大品牌初学者41寸单板民谣",
         "price": 6300,
         "address": "广东 广州",
         "trade": "Lucson",
         "payCount": 100,
         "url": "https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/3680832510/O1CN011z2opN1UPcrThUOXQ_!!0-item_pic.jpg_580x580Q90.jpg_.webp"
       },
       {
         "id": "OTkT5fU9veorBXlrEsHIR",
         "title": "测试",
         "price": 100,
         "address": "河南",
         "trade": "测试",
         "payCount": 100,
         "url": "https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2207359553275/O1CN01Z45kia1a3zkF13bDk_!!0-item_pic.jpg_580x580Q90.jpg_.webp"
       },
       {
         "id": "2dNg7clW_VB5xKtw9BGkH",
         "title": "123",
         "price": 123,
         "address": "123",
         "trade": "123",
         "payCount": 123,
         "url": "123"
       },
       {
         "id": "G1dTBEf2zORPIwtt8S1SR",
         "title": "123",
         "price": 123,
         "address": "123",
         "trade": "123",
         "payCount": 123,
         "url": "123"
       },
       {
         "id": "_mJBiZo7fTDCf5n2AhYiZ",
         "title": "123",
         "price": 123,
         "address": "123",
         "trade": "123",
         "payCount": 123,
         "url": "123"
       }
     ],
     "cart": [
       {
         "id": "bFOTr1s2iVIi3eadpqx3A",
         "cid": "OpzANPo6Wa-ZreKHIptgl",
         "number": 7,
         "uid": "yYvd6QcpTcw1tK4MFUNFz",
         "isChecked": false,
         "commdity": {
           "id": "OpzANPo6Wa-ZreKHIptgl",
           "title": "性感蕾丝纯欲低腰内裤内衣无痕白色薄款全透明透视三角裤内衣女性",
           "price": 100,
           "address": "广东",
           "trade": "子墨艺品",
           "payCount": 200,
           "url": "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2023700168/O1CN019VIbxH1D6zH3Zvo1v_!!0-item_pic.jpg_580x580Q90.jpg_.webp"
         }
       },
       {
         "id": "dn-q2-Eou-DJhDcMW27F8",
         "cid": "OpzANPo6Wa-ZreKHIptgl",
         "number": 1,
         "uid": "638zW9gQXBkD1u_kR2EdM",
         "isChecked": false,
         "commdity": {
           "id": "OpzANPo6Wa-ZreKHIptgl",
           "title": "性感蕾丝纯欲低腰内裤内衣无痕白色薄款全透明透视三角裤内衣女性",
           "price": 100,
           "address": "广东",
           "trade": "子墨艺品",
           "payCount": 200,
           "url": "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2023700168/O1CN019VIbxH1D6zH3Zvo1v_!!0-item_pic.jpg_580x580Q90.jpg_.webp"
         }
       },
       {
         "id": "Gc4qGohVcZ5v0iqCkejxw",
         "cid": "03",
         "number": 5,
         "uid": "638zW9gQXBkD1u_kR2EdM",
         "isChecked": false,
         "commdity": {
           "id": "03",
           "title": "无钢圈文胸大胸显小胸聚拢薄款少女学生春秋莫代尔夏季宽肩带内衣",
           "price": 129,
           "trade": "子墨艺品",
           "address": "上海",
           "payCount": 300,
           "url": "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/32217875/O1CN01mx6yO1282njFAZHQs_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp"
         }
       },
       {
         "id": "JYJMzP1udnEhxTvUmFVyA",
         "cid": "01",
         "number": 1,
         "uid": "638zW9gQXBkD1u_kR2EdM",
         "isChecked": false,
         "commdity": {
           "id": "01",
           "title": "无钢圈内衣女三角杯文胸罩日系棉质小胸聚拢少女光面无痕学生薄款",
           "price": 59,
           "trade": "歌瑞尔",
           "address": "广东 佛山",
           "payCount": 800,
           "url": "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/11563585/O1CN01wjolC21cLydqLIhrI_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp"
         }
       },
       {
         "id": "mJhnF8zgaS4RGeO2Wo9XR",
         "cid": "01",
         "number": 1,
         "uid": "CGGOnqA7QTSPtVsF-zuiL",
         "isChecked": false,
         "commdity": {
           "id": "01",
           "title": "无钢圈内衣女三角杯文胸罩日系棉质小胸聚拢少女光面无痕学生薄款",
           "price": 59,
           "trade": "歌瑞尔",
           "address": "广东 佛山",
           "payCount": 800,
           "url": "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/11563585/O1CN01wjolC21cLydqLIhrI_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp"
         }
       },
       {
         "id": "dYMEsIPFAB2jh7QlCJUQ8",
         "cid": "OpzANPo6Wa-ZreKHIptgl",
         "number": 15,
         "uid": "XsOpfzQQLFXIVa2A8UvFy",
         "isChecked": false,
         "commdity": {
           "id": "OpzANPo6Wa-ZreKHIptgl",
           "title": "性感蕾丝纯欲低腰内裤内衣无痕白色薄款全透明透视三角裤内衣女性",
           "price": 100,
           "address": "广东",
           "trade": "子墨艺品",
           "payCount": 200,
           "url": "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2023700168/O1CN019VIbxH1D6zH3Zvo1v_!!0-item_pic.jpg_580x580Q90.jpg_.webp"
         }
       },
       {
         "id": "DIT3q4ZCI2G_XClLPEyP3",
         "cid": "3IaS1tMmms2og7fG5yE5U",
         "number": 11,
         "uid": "AzHZPhSAxR4P8mwoGJgTm",
         "isChecked": true,
         "commdity": {
           "id": "3IaS1tMmms2og7fG5yE5U",
           "title": "二手进口川崎小忍者跑车h2雅马哈r35v6双缸400重机地平线趴赛摩托",
           "price": 12000,
           "address": "广东 广州",
           "trade": "帝阳车行",
           "payCount": 200569,
           "url": "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2207583273753/O1CN016Z65uG1dav9OhB8kw_!!0-item_pic.jpg_580x580Q90.jpg_.webp"
         }
       },
       {
         "id": "d1Ejxhqm7qYZ3Xd3F4cSM",
         "cid": "E3dkfAAQ0TO6ytAhar63X",
         "number": 14,
         "uid": "AzHZPhSAxR4P8mwoGJgTm",
         "isChecked": true,
         "commdity": {
           "id": "E3dkfAAQ0TO6ytAhar63X",
           "title": "全新国四电喷125cc珠峰华鹰牌CG王150cc男装男式摩托车整车可上牌",
           "price": 9000,
           "address": "广东 广州",
           "trade": "帝阳车行",
           "payCount": 200569,
           "url": "https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2411205032/O1CN01FCJ4yE1n2hk46ycED_!!0-item_pic.jpg_580x580Q90.jpg_.webp"
         }
       },
       {
         "id": "zRypUcbix0Ne3FZasz62U",
         "cid": "v1kZ_-ngK5c_KZdUwYXMW",
         "number": 21,
         "uid": "AzHZPhSAxR4P8mwoGJgTm",
         "isChecked": true,
         "commdity": {
           "id": "v1kZ_-ngK5c_KZdUwYXMW",
           "title": "BWS路虎摩托车125CC国四电喷踏板车女装燃油助力150越野复古跑车",
           "price": 65478,
           "address": "河南",
           "trade": "无锡艾泽",
           "payCount": 1569,
           "url": "https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/545935764/O1CN01i4lZfU1sRxVv530hu_!!545935764.jpg_580x580Q90.jpg_.webp"
         }
       },
       {
         "id": "Y39iWMRiqa4jMvKfDhJVR",
         "cid": "pTkILvLdVwJ267KExfOfz",
         "number": 1,
         "uid": "b25PShn9xfCV3u2FcGDj3",
         "isChecked": false,
         "commdity": {
           "id": "pTkILvLdVwJ267KExfOfz",
           "title": "相思木全单吉他美西奥吉他全单相思木旅行吉他全单38寸41寸",
           "price": 6300,
           "address": "广东 广州",
           "trade": "小伟753545393",
           "payCount": 100,
           "url": "https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/2255433527/O1CN01w8LOoo1bvPf1NUx1n_!!2255433527-0-picasso.jpg_580x580Q90.jpg_.webp"
         }
       },
       {
         "id": "10w7HyuC4GxdJLJEIxp7c",
         "cid": "E3dkfAAQ0TO6ytAhar63X",
         "number": 1,
         "uid": "tkQ71_qss5ENq4Hr0mp1B",
         "isChecked": false,
         "commdity": {
           "id": "E3dkfAAQ0TO6ytAhar63X",
           "title": "全新国四电喷125cc珠峰华鹰牌CG王150cc男装男式摩托车整车可上牌",
           "price": 9000,
           "address": "广东 广州",
           "trade": "帝阳车行",
           "payCount": 200569,
           "url": "https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2411205032/O1CN01FCJ4yE1n2hk46ycED_!!0-item_pic.jpg_580x580Q90.jpg_.webp"
         }
       }
     ],
     "favorites": [
       {
         "cid": "OpzANPo6Wa-ZreKHIptgl",
         "commdity": {
           "id": "OpzANPo6Wa-ZreKHIptgl",
           "title": "性感蕾丝纯欲低腰内裤内衣无痕白色薄款全透明透视三角裤内衣女性",
           "price": 100,
           "address": "广东",
           "trade": "子墨艺品",
           "payCount": 200,
           "url": "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2023700168/O1CN019VIbxH1D6zH3Zvo1v_!!0-item_pic.jpg_580x580Q90.jpg_.webp"
         },
         "id": "dnaaOUKsZoUeLsJbEwH7Z",
         "uid": "yYvd6QcpTcw1tK4MFUNFz"
       },
       {
         "cid": "OpzANPo6Wa-ZreKHIptgl",
         "commdity": {
           "id": "OpzANPo6Wa-ZreKHIptgl",
           "title": "性感蕾丝纯欲低腰内裤内衣无痕白色薄款全透明透视三角裤内衣女性",
           "price": 100,
           "address": "广东",
           "trade": "子墨艺品",
           "payCount": 200,
           "url": "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2023700168/O1CN019VIbxH1D6zH3Zvo1v_!!0-item_pic.jpg_580x580Q90.jpg_.webp"
         },
         "id": "bKRUSe5uHFKLpbjqwxZAp",
         "uid": "638zW9gQXBkD1u_kR2EdM"
       },
       {
         "cid": "OpzANPo6Wa-ZreKHIptgl",
         "commdity": {
           "id": "OpzANPo6Wa-ZreKHIptgl",
           "title": "性感蕾丝纯欲低腰内裤内衣无痕白色薄款全透明透视三角裤内衣女性",
           "price": 100,
           "address": "广东",
           "trade": "子墨艺品",
           "payCount": 200,
           "url": "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2023700168/O1CN019VIbxH1D6zH3Zvo1v_!!0-item_pic.jpg_580x580Q90.jpg_.webp"
         },
         "id": "URUJi7_zXhVf0Zzp7OjzX",
         "uid": "XsOpfzQQLFXIVa2A8UvFy"
       },
       {
         "cid": "3IaS1tMmms2og7fG5yE5U",
         "commdity": {
           "id": "3IaS1tMmms2og7fG5yE5U",
           "title": "二手进口川崎小忍者跑车h2雅马哈r35v6双缸400重机地平线趴赛摩托",
           "price": 12000,
           "address": "广东 广州",
           "trade": "帝阳车行",
           "payCount": 200569,
           "url": "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2207583273753/O1CN016Z65uG1dav9OhB8kw_!!0-item_pic.jpg_580x580Q90.jpg_.webp"
         },
         "id": "aWIV9e9b_y1wK_H3hVJjL",
         "uid": "AzHZPhSAxR4P8mwoGJgTm"
       },
       {
         "cid": "pTkILvLdVwJ267KExfOfz",
         "commdity": {
           "id": "pTkILvLdVwJ267KExfOfz",
           "title": "相思木全单吉他美西奥吉他全单相思木旅行吉他全单38寸41寸",
           "price": 6300,
           "address": "广东 广州",
           "trade": "小伟753545393",
           "payCount": 100,
           "url": "https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/2255433527/O1CN01w8LOoo1bvPf1NUx1n_!!2255433527-0-picasso.jpg_580x580Q90.jpg_.webp"
         },
         "id": "B58065wDiviU-ChAKIrGR",
         "uid": "b25PShn9xfCV3u2FcGDj3"
       },
       {
         "cid": "E3dkfAAQ0TO6ytAhar63X",
         "commdity": {
           "id": "E3dkfAAQ0TO6ytAhar63X",
           "title": "全新国四电喷125cc珠峰华鹰牌CG王150cc男装男式摩托车整车可上牌",
           "price": 9000,
           "address": "广东 广州",
           "trade": "帝阳车行",
           "payCount": 200569,
           "url": "https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2411205032/O1CN01FCJ4yE1n2hk46ycED_!!0-item_pic.jpg_580x580Q90.jpg_.webp"
         },
         "id": "X6OE6GJS8JTsz-UJqpWmi",
         "uid": "tkQ71_qss5ENq4Hr0mp1B"
       }
     ],
     "users": [
       {
         "id": "AzHZPhSAxR4P8mwoGJgTm",
         "email": "2857734156@qq.com",
         "nickName": "Lucson",
         "pwd": "7c4a8d09ca3762af61e59520943dc26494f8941b",
         "r_date": 1649096393616
       },
       {
         "id": "b25PShn9xfCV3u2FcGDj3",
         "email": "123456789@qq.com",
         "nickName": "Test",
         "pwd": "7c4a8d09ca3762af61e59520943dc26494f8941b",
         "r_date": 1649097818494
       }
     ]
}

router.get("/banner", (req, res) => {
     let str = JSON.stringify(data.banner)
     res.send(str)
})

router.get("/cartoon", (req, res) => {
     let str = JSON.stringify(data.cartoon)
     res.send(str)
})
// 返回token的路由
router.post("/generateToken",generateToken); 

// 测试token校验
router.post("/auth",validateToken,(req,res)=>{
     res.send({
          code:2,
          expire:"token 正常",
          userInfo:res.userInfo
     })     
});

module.exports = router;

