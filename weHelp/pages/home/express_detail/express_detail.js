// pages/home/express_detail/express_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    express_detailList: [{
      express_dong: '13栋',
      express_room: '1013',
      express_price: '15',
      express_count: '1',
      express_weight: '1kg以下',
      express_point: '18栋菜鸟',
      express_start_date: '2019-07-28',
      express_start_time: '07:00',
      express_content: '放门口放门口放门口放宿舍门口放宿舍门口放宿舍门口放宿舍门口放宿舍门口放宿舍门口放宿舍门口放宿舍门口放宿舍门口放宿舍门口放宿舍门口放宿舍门口放宿舍门口放宿舍门口放宿舍门口放宿舍门口放宿舍门口放宿舍门口放宿舍门口',
      express_end_date: '2019-07-30',
      express_end_time: '23:00',
      express_phone_end: '7948',
      express_name: 'Emoji',
      express_wechat: 'HRJ47508',
      express_phone: '13035717948'
    }
    ],//前端测试用数据
    imgList: [{
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'
    },
    {
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'
    }

    ],
    index: null,


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this; //=====注意此处，要用that 指代this=====
    wx.request({
      url: '', //服务器地址
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      data: {},
      header: { // 设置请求的 header
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        that.setData({ //======不能直接写this.setDate======
          express_detail: res.data, //在相应的wxml页面显示接收到的数据
        });
      },
      fail: function (res) {
        console.log('request fail');
      }
    })
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
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
  calling: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone,
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
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