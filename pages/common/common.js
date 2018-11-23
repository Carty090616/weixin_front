//用户登陆
function userLogin() {
  wx.checkSession({
    success: function () {
      //存在登陆态
    },
    fail: function () {
      //不存在登陆态
      onLogin()
    }
  })
}