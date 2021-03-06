import fetch from '@/utils/fetch.js'
//获取seeion
const code2session= query=>{
    return fetch({
        url:`/api/wechat/mp/code2session`,
        method:'POST',
        data: query
    })
}
//获取基础域名配置信息
const getOptions= query=>{
    return fetch({
        url:`/api/option`,
        method:'POST',
        data: query
    })
}
//用户登录
const decryptUserInfo= query=>{
    return fetch({
        url:`/api/wechat/mp/decryptUserInfo`,
        method:'POST',
        data: query
    })
}
//广告列表
const getAdvertise= query=>{
    return fetch({
        url:`/api/advertise`,
        method:'POST',
        data: query
    })
}

//获取省市区 
const doDistrict= query=>{
    return fetch({
        url:`/api/district`,
        method:'POST',
        data: query
    })
}
//查询我的地址 
const addressUserReceive= query=>{
    return fetch({
        url:`/api/addressUserReceive`,
        method:'POST',
        data: query
    })
}
//查询我的默认地址 
const getDefaultAddress= query=>{
    return fetch({
        url:`/api/addressUserReceive/getDefaultAddress`,
        method:'POST',
        data: query
    })
}

//新增或修改收货地址 
const doAddAdr= query=>{
    return fetch({
        url:`/api/addressUserReceive/doAdd`,
        method:'POST',
        data: query
    })
}
//根据id查询地址 
const findById= query=>{
    return fetch({
        url:`/api/addressUserReceive/findById`,
        method:'POST',
        data: query
    })
}
//设置为默认地址 /api/addressUserReceive/doDel
const doDefaultStatus= query=>{
    return fetch({
        url:`/api/addressUserReceive/doDefaultStatus`,
        method:'POST',
        data: query
    })
}
//删除默认地址 
const doDelAdr= query=>{
    return fetch({
        url:`/api/addressUserReceive/doDel`,
        method:'POST',
        data: query
    })
}

//===========首页商品===========
//获取商品列表
const shopProduct= query=>{
    return fetch({
        url:`/api/shopProduct`,
        method:'POST',
        data: query
    })
}
//通过ID获取商品规格
const findByProductId= query=>{
    return fetch({
        url:`/api/shopSkuStock/findByProductId`,
        method:'POST',
        data: query
    })
}
//通过ID获取商品详情 不含规格
const findByIdDetail= query=>{
    return fetch({
        url:`/api/shopProduct/findById`,
        method:'POST',
        data: query
    })
}
//商品分类 
const shopProductCategory= query=>{
    return fetch({
        url:`/api/shopProductCategory`,
        method:'POST',
        data: query
    })
}

//============购物车=============
//添加购物车
const doAddShopCart= query=>{
    return fetch({
        url:`/api/shopCartItem/doAdd`,
        method:'POST',
        data: query
    })
}
//查询购物车
const shopCartItem= query=>{
    return fetch({
        url:`/api/shopCartItem`,
        method:'POST',
        data: query
    })
}
//删除购物车
const doDelShopCart= query=>{
    return fetch({
        url:`/api/shopCartItem/doDel`,
        method:'POST',
        data: query
    })
}
//计算购物车价格
const doPrice= query=>{
    return fetch({
        url:`/api/shopCartItem/doPrice`,
        method:'POST',
        data: query
    })
}
//下单 
const shopOrder= query=>{
    return fetch({
        url:`/api/shopOrder`,
        method:'POST',
        data: query
    })
}
//微信支付
const weChatUnifiedorder= query=>{
    return fetch({
        url:`/api/pay/weChatUnifiedorder`,
        method:'POST',
        data: query
    })
}
//上传formid
const doAddFormIds= query=>{
    return fetch({
        url:`/api/wechat/mp/doAddFormIds`,
        method:'POST',
        data: query
    })
}
//商品订单列表
const findOrderItem= query=>{
    return fetch({
        url:`/api/shopOrder/findOrderItem`,
        method:'POST',
        data: query
    })
}
//订单详情
const findOrder= query=>{
    return fetch({
        url:`/api/shopOrder/findOrder`,
        method:'POST',
        data: query
    })
}
//=============孕育信息========
//查询孕育信息
const gestation= query=>{
    return fetch({
        url:`/api/gestation`,
        method:'POST',
        data: query
    })
}


//添加孕育信息
const doAddStation= query=>{
    return fetch({
        url:`/api/gestation/doAdd`,
        method:'POST', 
        data: query
    })
}
//根据id查询孕育信息
const stationfindById= query=>{
    return fetch({
        url:`/api/gestation/findById`,
        method:'POST', 
        data: query
    })
}
//删除孕育信息
const dostationDel= query=>{
    return fetch({
        url:`/api/gestation/doDel`,
        method:'POST', 
        data: query
    })
}
//==========物流==========
//确认收货 
const doReceive= query=>{
    return fetch({
        url:`/api/shopOrder/doReceive`,
        method:'POST', 
        data: query
    })
}
//==============返佣===========
//查询我的返佣
const pyramidUserHistory= query=>{
    return fetch({
        url:`/api/pyramidUserHistory`,
        method:'POST', 
        data: query
    })
}
//全部提现
const bonusApply= query=>{
    return fetch({
        url:`/api/pyramidUserHistory/bonusApply`,
        method:'POST', 
        data: query
    })
}
//提现记录 
const pyramidUserOrder= query=>{
    return fetch({
        url:`/api/pyramidUserOrder`,
        method:'POST', 
        data: query
    })
}
//收益明细 
const findByUser= query=>{
    return fetch({
        url:`/api/pyramidUserHistory/findByUser`,
        method:'POST', 
        data: query
    })
}

const user={
    getAdvertise,//获取轮播图
    code2session,//获取session
    decryptUserInfo,//换取token
    getOptions,//获取基础域名配置
    doDistrict,//获取三级联动
    addressUserReceive,//查询我的地址
    findById,//根据id查询地址 
    doAddAdr,//新增或修改收货地址 
    doDefaultStatus,//设置默认地址
    doDelAdr,//删除默认地址
    getDefaultAddress,//查询我的默认地址
    shopProduct,//获取商品列表
    shopProductCategory,//商品分类
    findByProductId,//通过ID获取商品规格
    findByIdDetail,//通过ID获取商品详情 不含规格
    doAddShopCart,//添加到购物车
    doDelShopCart,//删除数据库
    shopOrder,//商品下单
    weChatUnifiedorder,//微信支付
    doAddFormIds,//上传formid
    shopCartItem,//查询购物车
    doPrice,//计算购物车价格
    findOrder,//商品订单列表
    findOrderItem,//订单详情
    gestation,//查询孕育信息
    doAddStation,//添加孕育信息
    stationfindById,//根据id查询孕育信息
    dostationDel,//删除孕育信息
    doReceive,//确认收货
    pyramidUserHistory,//我的返佣
    bonusApply,//申请提现
    pyramidUserOrder,//提现记录
    findByUser//收益明细


}
export default user;