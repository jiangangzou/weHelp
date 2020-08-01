// pages/home/entertainment_detail/entertainment_detail.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgColor: 'bg-red',
    formData: app.globalData.formDat,
    userInfo: app.globalData.userInfo,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/swiper0.jpg?sign=4a602c9fff4904b89f1353c13f1a066a&t=1563380770'
    }, {
      id: 1,
      type: 'image',
      url: 'https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/bg.png?sign=a197cd09693de82eb9f15634b29fa4d2&t=1563621115',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/bg.png?sign=a197cd09693de82eb9f15634b29fa4d2&t=1563621115'
    }],
    img1: ['https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/shangjia/img/%E6%96%B0%E5%8D%8E%E5%B0%8F%E5%B8%AE%E6%89%8B.png?sign=0f68b2769aaa4379d25ca7b97ca2dd1f&t=1564495997']

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
    this.setData({
      formData: app.globalData.formData,
      userInfo: app.globalData.userInfo
    })

  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.img1 // 需要预览的图片http链接列表  
    })
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

  },
  orderNow() {
    this.setData({
      bgColor: 'bg-gray'
    })
    wx.showToast({
      title: '接单成功',
      icon: 'none',
      duration: 1500
    })
    setTimeout(() =>  {
      wx.redirectTo({
        url: '/pages/home/entertainment_detail/entertainment_detail1'
      })
    },2000)

  
  }
})