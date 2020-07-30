// pages/home/carpooling_detail/carpooling_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carpooling_detail: [{
      carpooling_place: '文冲',
      carpooling_toplace: '中大新华',
      carpooling_start_date: '2019-10-21',
      carpooling_start_time: '18:00',
      carpooling_end_date: '2019-10-22',
      carpooling_end_time: '21:00',
      carpooling_content: '15一个马上就走',
      carpooling_wechat: 'HRJ47508',
      carpooling_phone: '13035717948'
    }], //测试用数据

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
          carpooling_detail: res.data, //在相应的wxml页面显示接收到的数据
        });
      },
      fail: function (res) {
        console.log('request fail');
      }
    })
  },


  CopyWechat(e) {
    var value = wx.getStorageSync('key')
    var that = this;
    if (value) {
      wx.setClipboardData({
        data: String(e.currentTarget.dataset.wechat),
        success: res => {
          wx.showToast({
            title: '已复制',
            duration: 1000,
          })
        }
      })
    } else {
      wx.request({
        url: '', //服务器地址
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        data: {},
        header: { // 设置请求的 header
          'content-type': 'application/json'
        },
        success: function (res) {
          that.setData({
            status: res.data //后台返回的状态  true为已实名  false为未实名
          })
        }

      })
      if (status) {
        wx.setStorage({
          key: 'status',
          data: 'ture',
        })
      } else {
        wx.showToast({
          title: '请实名',
          icon: 'none',
          duration: 1000,
          mask: true,
          success: function () {
            setTimeout(function () {
              //要延时执行的代码
              wx.navigateTo({
                url: '/pages/users/verified/verified'
              });
            }, 1000) //延迟时间
          },
        })
      }




    }

  },
  calling: function (e) {
    var value = wx.getStorageSync('key')
    var that = this;
    if (value) {
      wx.makePhoneCall({
        phoneNumber: String(e.currentTarget.dataset.phone),
        success: function () {
          console.log("拨打电话成功！")
        },
        fail: function () {
          console.log("拨打电话失败！")
        }
      })
    } else {
      wx.request({
        url: '', //服务器地址
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        data: {},
        header: { // 设置请求的 header
          'content-type': 'application/json'
        },
        success: function (res) {
          that.setData({
            status: res.data //后台返回的状态  true为已实名  false为未实名
          })
        }

      })
      if (status) {
        wx.setStorage({
          key: 'status',
          data: 'ture',
        })
      } else {
        wx.showToast({
          title: '请实名',
          icon: 'none',
          duration: 1000,
          mask: true,
          success: function () {
            setTimeout(function () {
              //要延时执行的代码
              wx.navigateTo({
                url: '/pages/users/verified/verified'
              });
            }, 1000) //延迟时间
          },
        })
      }

    }

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