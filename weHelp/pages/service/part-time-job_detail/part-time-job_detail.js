// pages/service/part-time-job_detail/part-time-job_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    part_time_job_detail: [{
      part_time_job_text: '最多只能十二个汉字字字字',
      part_time_job_type: '找兼职',
      part_time_job_price: '15',
      part_time_job_content: '测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用',
      part_time_job_wechat: 'HRJ47508',
      part_time_job_phone: '13035717948'

    }],

    index: null


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
        id: that.data.detail_id
      },
      header: { // 设置请求的 header
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res);
        that.setData({ //======不能直接写this.setDate======
          part_time_job_detail: res.data, //在相应的wxml页面显示接收到的数据
        });
      },
      fail: function(res) {
        console.log('request fail');
      }
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