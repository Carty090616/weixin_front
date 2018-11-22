//index.js
//获取应用实例
var app = getApp()

Page({
  onShow() {
    wx.reportAnalytics('enter_home_programmatically', {})
  },
  // 开启分享页面
  onShareAppMessage() {
    return {
      title: 'carty的小程序',
      path: 'pages/index/index'
    }
  },

  data: {
    list: [
      {
        id: 'view',
        name: '视图容器',
        open: false,
        pages: ['view', 'scroll-view', 'swiper', 'movable-view', 'cover-view']
      }, {
        id: 'content',
        name: '基础内容',
        open: false,
        pages: ['text', 'icon', 'progress', 'rich-text']
      }
    ]
  },

  kindToggle(e) {
    console.log(e.currentTarget.id)
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
    wx.reportAnalytics('click_view_programmatically', {})
  }
})
