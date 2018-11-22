// pages/testtabBar/testtabBar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //  底部导航
    curIdx: 0,
    listInfo: [
      {
        text: '首页',
        imgUrl: '/image/a.png',
        curUrl: '/image/a.png',
      },
      {
        text: '兼职入口',
        imgUrl: '/image/b.png',
        curUrl: '/image/b.png',
      },
      {
        text: '个人中心',
        imgUrl: '/image/c.png',
        curUrl: '/image/c.png',
      },
    ]
  },
  Navigation: function (event) {
    var that = this;
    app.Navigation(event, that);
  },
  // 底部导航
  chooseImg: function (e) {
    this.setData({
      curIdx: e.currentTarget.dataset.current
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})