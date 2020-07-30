// pages/home/showexpress/showexpress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showexpressList: [{
      express_dong: '13栋',
      express_room: '1013',
      express_price: '15',
      express_count: '1',
      express_point:'18栋菜鸟',
      express_start_date:'2020-06-02',
      express_start_time:'07:00',
      express_content:'放宿舍门口',
      express_end_date: '2020-06-20',
      express_end_time:'23:00',
    },
    {
      express_dong: '20栋',
      express_room: '1013',
      express_price: '15',
      express_count: '1',
      express_point: '18栋菜鸟',
      express_start_date: '2020-06-02',
      express_start_time: '07:00',
      express_content: '放宿舍门口',
      express_end_date: '2020-06-20',
      express_end_time: '23:00',
    },
    {
      express_dong: '4栋',
      express_room: '南701',
      express_price: '15',
      express_count: '1',
      express_point: '18栋菜鸟',
      express_start_date: '2020-06-02',
      express_start_time: '07:00',
      express_content: '放宿舍门口',
      express_end_date: '2020-06-20',
      express_end_time: '23:00',
    }
    
  ]//前端测试用数据

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this; //=====注意此处，要用that 指代this=====
    wx.request({
      url: '', //服务器地址
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      data: {
        express_id: options.express_id,
      },
      header: { // 设置请求的 header
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        that.setData({ //======不能直接写this.setDate======
          showexpressList: res.data, //在相应的wxml页面显示接收到的数据
        });
      },
      fail: function (res) {
        console.log('request fail');
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