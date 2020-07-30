// pages/service/xianzhi_detail/xianzhi_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xianzhi_detail: [{
      xianzhi_text: '最多只能十二个汉字字字字',
      xianzhi_type: '电子产品',
      xianzhi_price: '5000',
      xianzhi_content: '出一台二手笔记本电脑',
      xianzhi_wechat: 'HRJ47508',
      xianzhi_phone: '13035717948'
    }], //前端测试静态数据
    imgList: [{
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'
      },
      {
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'
      }

    ],
    index: null,
    detail_id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      detail_id: options.detail_id
    })
    var that = this; //=====注意此处，要用that 指代this=====
    
    wx.request({
      url: '', //服务器地址
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      data: {
        id:that.data.detail_id
      },
      header: { // 设置请求的 header
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res);
        that.setData({ //======不能直接写this.setDate======
          xianzhi_detail: res.data, //在相应的wxml页面显示接收到的数据
        });
      },
      fail: function(res) {
        console.log('request fail');
      }
    })
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  CopyWechat(e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.wechat,
      success: res => {
        wx.showToast({
          title: '已复制',
          duration: 1000,
        })
      }
    })
  },
  calling: function(e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone,
      success: function() {
        console.log("拨打电话成功！")
      },
      fail: function() {
        console.log("拨打电话失败！")
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})