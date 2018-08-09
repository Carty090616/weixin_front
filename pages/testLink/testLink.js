var app = getApp();

Page({
  // 跳转至表单提交页面
  goToTestForm: function(operation){
      console.log(operation),
      wx.navigateTo({
        url: '../testForm/testForm',
      })
  },

  //跳转至按钮样式测试页面
  goToTest: function (operation) {
    console.log(operation),
      wx.navigateTo({
        url: '../test/test',
      })
  },

  //跳转解析接口返回数据页面
  goToShowData: function (operation) {
    console.log(operation),
      wx.navigateTo({
      url: '../showData/showData',
      })
  },

  //跳转图片页面
  goToShowPicture: function (operation) {
    console.log(operation),
      wx.navigateTo({
      url: '../showPicture/showPicture',
      })
  }
})