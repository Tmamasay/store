const getters = {
    baseurl: state => state.user.baseurl,
    token: state => state.user.token,
    session: state => state.user.sessionId,
    options: state => state.user.options,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    userinfo:state => state.user.userinfo,


}
export default getters