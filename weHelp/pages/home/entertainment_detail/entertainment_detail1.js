// pages/home/entertainment_detail/entertainment_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'shangjia/ayiningmengcha/5.gif'
    }, {
      id: 1,
      type: 'image',
      url: 'shangjia/ayiningmengcha/10.gif',
    }, {
      id: 2,
      type: 'image',
      url: 'shangjia/ayiningmengcha/6.gif'
    }, {
      id: 3,
      type: 'image',
      url: 'shangjia/ayiningmengcha/20.gif'
    }],
    List:[{
      target: "miniProgram",
        opentype: "navigate",
        appid: "wx5e431673dff5255d",
        path: "/pages/map/polyline?latitude=23.058522&longitude=113.575024&name=啊一柠檬茶&floor=创客坊二期 古梅体育馆对面",
        version: "release"

    }],
    imgCDN: 'https://light-year-1258515630.file.myqcloud.com/xhsysu_bb/',
    img0: ['shangjia/ayiningmengcha/2.jpg'],
    img1: ['shangjia/ayiningmengcha/9.jpg'],
    img2: ['shangjia/ayiningmengcha/3.jpg'],
    img3: ['shangjia/ayiningmengcha/5.gif'],
    img4: ['shangjia/ayiningmengcha/6.gif'],
    img5: ['shangjia/ayiningmengcha/7.jpg'],
    img6: ['shangjia/ayiningmengcha/8.jpg'],
    img7: ['shangjia/ayiningmengcha/11.jpg'],
    img8: ['shangjia/ayiningmengcha/12.jpg'],
    img9: ['shangjia/ayiningmengcha/13.jpg'],
    img10: ['shangjia/ayiningmengcha/14.jpg'],
    img11: ['shangjia/ayiningmengcha/15.jpg'],
    img12: ['shangjia/ayiningmengcha/16.jpg'],
    img13: ['shangjia/ayiningmengcha/17.jpg'],
    img14: ['shangjia/ayiningmengcha/20.gif'],
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
    return {
      title: '饮品推荐 | 啊一柠檬茶强势入驻麻涌，这1杯我请你喝',
      imageUrl: 'https://light-year-1258515630.file.myqcloud.com/xhsysu_bb/shangjia/ayiningmengcha/2.jpg',
      path: '/pages/home/entertainment_detail/entertainment_detail1'
    }
  }
})