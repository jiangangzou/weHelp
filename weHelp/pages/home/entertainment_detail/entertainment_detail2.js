// pages/home/entertainment_detail/entertainment_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [{
      id: 0,
      type: 'image',
      url: '图10.gif'
    }, {
      id: 1,
      type: 'image',
      url: '图6.gif',
    }, {
      id: 2,
      type: 'image',
      url: '图18.gif'
    }, {
      id: 3,
      type: 'image',
      url: '图14.gif'
    }],
    List: [{
      target: "miniProgram",
      opentype: "navigate",
      appid: "wx5e431673dff5255d",
      path: "pages/map/details?tid=3&bid=1",
      version: "release"

    }],
    imgCDN: 'https://light-year-1258515630.file.myqcloud.com/xhsysu_bb/shangjia/zhuduji/',
    img0: ['图9.JPG'],
    img1: ['图3.gif'],
    img2: ['图4.jpg'],
    img3: ['图5.jpg'],
    img4: ['图13.gif'],
    img5: ['图7.jpg'],
    img6: ['图8.JPG'],
    img7: ['图2.JPG'],
    img8: ['图10.gif'],
    img9: ['图11.JPG'],
    img10: ['图12.jpg'],
    img11: ['图17.JPG'],
    img12: ['图15.JPG'],
    img13: ['图16.JPG'],
    img14: ['图14.gif'],
    img15: ['图18.gif'],
    img16: ['图19.jpg'],
    img17: ['图20.JPG'],
    img18: ['图21.gif'],
    img19: ['图22.gif'],
    img20: ['https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/shangjia/img/0.jpg?sign=2854512b05386962dff727839b7827a6&t=1568120687'],
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
      title: '美食推荐 | 广东正宗猪肚鸡开学特惠邀请函',
      imageUrl: 'https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/shangjia/img/0.jpg?sign=2854512b05386962dff727839b7827a6&t=1568120687',
      path: '/pages/home/entertainment_detail/entertainment_detail2'
    }
  }
})