const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token, // 在根级的getters上 开发子模块的
  name: (state) => {
    // console.log(state.user.userInfo.staffPhoto)
    return state.user.userInfo.username
  }, // 建立用户名称的映射
  // name: state => state.user.userInfo.username, // 建立用户名称的映射
  userId: state => state.user.userInfo.userId, // 建立用户id的映射
  staffPhoto: state => state.user.userInfo.staffPhoto // 建立头像映射

}
export default getters
