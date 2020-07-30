// pages/message/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    InputBottom: 0
    // gridCol: 3,

    // iconList: [{
    //   icon: '../img/CET.png',
    //   badge: 0,
    //   name: '四六级查询',
    //   Url: '/pages/message/home/CET'
    // }, {
    //     icon: '../img/network.png',
    //   badge: 0,
    //   name: '宽带办理',
    //   Url: '/pages/message/home/network'
    // }, {
    //     icon: '../img/TEL.png',
    //   badge: 0,
    //   name: '新华电话本',
    //     Url: '/pages/message/home/tel'
    // }, {
    //     icon: '../img/wb.png',
    //   badge: 0,
    //   name: '网络报障',
    //   Url: '/pages/message/home/wb'
    // }, {  
    //     icon: '../img/calendar.png',
    //   badge: 0,
    //   name: '校园日历',
    //     Url: '/pages/message/home/calendar'
    // }, {
    //     icon: '../img/demo.png',
    //   badge: 0,
    //   name: '校内网址',
    //   Url: '/pages/message/webview/website'
    // }],
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

  },
  methods: {
    InputFocus(e) {
      this.InputBottom = e.detail.height
    },
    InputBlur(e) {
      this.InputBottom = 0
    }
  }

})