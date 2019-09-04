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
    findByProductId,//通过ID获取商品规格
    findByIdDetail//通过ID获取商品详情 不含规格
}
export default user;