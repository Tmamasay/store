import  user_api  from '@/api/user'
import { getToken, setToken, removeToken,setUserinfo,getUserinfo } from '@/utils/auth'

const user = {
  state: {
    userinfo:'',
    status: '',
    code: '',
    sessionId:'',
    options:null,
    token: getToken(),
    token:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhZG1pbiIsInN1YiI6IjI2MTQ4IiwiYXVkIjoidXNlciIsImV4cCI6MTU1MjI3MjQ4MCwibmJmIjoxNTUxNjY3NjgwLCJpYXQiOjE1NTE2Njc2ODAsImp0aSI6IjEzMWM0MzgyLTM4ZTItNDI3Zi04OGFjLWQ1OTU1ODY5MjFjNCJ9.xe4mmHs34GLC3CCUjegk_kZL29egq4xj5hwn5iHEhLw',
    baseurl:'https://leciit.mynatapp.cc',
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_SESSION: (state, sessionId) => {
      state.sessionId = sessionId
    },
    SET_OPTIONS: (state, options) => {
      state.options = options
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_USERINFO: (state, userinfo) => { //基本信息
      state.userinfo = userinfo
    },
    SET_NAME: (state, name) => { //用户名
      state.name = name
    },
    SET_AVATAR: (state, avatar) => { //用户头像
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },


  actions: {
    // 获取Options
    getOptions({ commit }){
      const param={  keys: [ "attachment_aliyunoss_bucketname",    "attachment_aliyunoss_endpoint" ]}
      user_api.getOptions(param).then((res) => {
        console.log(res);
        // const data=JSON.parse(res)
        if(res.values) {
          //保存域名信息
          commit('SET_OPTIONS', res.values);//保存域名信息
          resolve()
        }
      }).catch((error)=>{
        reject(error)
      });		

    },
    // 获取sessionId
    getSessionWX({ commit },sessionId){
      commit('SET_SESSION', sessionId);//sessionId

    },
    // 用户名登录，获取token
    LoginByWX({ commit,state},data) {
      return new Promise((resolve, reject) => {
        // {
        //   "sessionId": "string,微信登录上传code获取临时后端授权",
        //   "encryptedData": "string,包括敏感数据在内的完整用户信息的加密数据，详见 用户数据的签名验证和加解密",
        //   "signature": "string,使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，详见 用户数据的签名验证和加解密",
        //   "iv": "string,加密算法的初始向量，详见 用户数据的签名验证和加解密",
        //   "rawData": "string,用户信息（JSON字符串），不包括敏感信息的原始数据字符串，用于计算签名。\t"
        // }
        setUserinfo(data.userInfo);
							//发起网络请求
							var options = {
                sessionId: state.sessionId,
                encryptedData:data.encryptedData,
                signature:data.signature,
                iv:data.iv,
                rawData:data.rawData
              };
							user_api.decryptUserInfo(options).then((res) => {
								console.log(res.token);
								if(res.token) {
                  //保存token
                  const data = res.token
									console.log('新用户保存token和用户类型')
                  commit('SET_TOKEN', data);//保存token
                  setToken(res.token)//保存token到本地缓存
                  resolve()
								}
							}).catch((error)=>{
                reject(error)
              });		
      })
    },
 

    // 获取用户信息
    putUserInfo(data) {
      // debugger;
      console.log('存取用户信息====>到本地缓存')
      console.log(data)
      console.log('存取用户信息====>到本地缓存')
      setUserinfo(data)
      // const info=getUserinfo();
      // commit('SET_USERINFO', getUserinfo())
      // commit('SET_NAME', info.nickName)
      // commit('SET_AVATAR', info.avatarUrl)
      //假设的token
      // commit('SET_TOKEN', state.token)
      // console.log(state.avatar)
      // setToken(state.token)
      // return new Promise((resolve, reject) => {
      //   getUserInfo(state.token).then(response => {
      //     // 由于mockjs 不支持自定义状态码只能这样hack
      //     if (!response.data) {
      //       reject('Verification failed, please login again.')
      //     }
      //     const data = response.data

      //     if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
      //       commit('SET_ROLES', data.roles)
      //     } else {
      //       reject('getInfo: roles must be a non-null array!')
      //     }

         
      //     commit('SET_INTRODUCTION', data.introduction)
      //     resolve(response)
      //   }).catch(error => {
      //     reject(error)
      //   })
      // })
    },

 

    // // 登出
    // LogOut({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     logout(state.token).then(() => {
    //       commit('SET_TOKEN', '')
    //       commit('SET_ROLES', [])
    //       removeToken()
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 前端 登出
    // FedLogOut({ commit }) {
    //   return new Promise(resolve => {
    //     commit('SET_TOKEN', '')
    //     removeToken()
    //     resolve()
    //   })
    // },

    // 动态修改权限
    // ChangeRoles({ commit, dispatch }, role) {
    //   return new Promise(resolve => {
    //     commit('SET_TOKEN', role)
    //     setToken(role)
    //     getUserInfo(role).then(response => {
    //       const data = response.data
    //       commit('SET_ROLES', data.roles)
    //       commit('SET_NAME', data.name)
    //       commit('SET_AVATAR', data.avatar)
    //       commit('SET_INTRODUCTION', data.introduction)
    //       dispatch('GenerateRoutes', data) // 动态修改权限后 重绘侧边菜单
    //       resolve()
    //     })
    //   })
    // }
  }
}

export default user
