// pages/users/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  exit: function (e) {
    wx.navigateTo({
      url: '/pages/users/home/home',
    })
  },
  getUserInfo(e) {
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo: function (e) {
    var that = this;
    wx.getUserInfo({
      success: function (res) {

        console.log(res);
        that.data.userInfo = res.userInfo;

        that.setData({
          userInfo: that.data.userInfo
        })
      }
    })






    //----------------------------------
    wx.login({
      success(res) {
        if (res.code) {
          console.log('code:' + res.code)
          that.setData({
            code: res.code
          })
          var code = res.code
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            method: "get",
            data: {
              appid: 'wxadcef31df2e96e12',
              secret: 'a96b60bbff3fa3deaf3e3897c7d5a1c2',
              js_code: code,
              grant_type: 'authorization_code'
            },
            success: function (res) {
              // console.log(res)
              console.log('openid:' + res.data.openid);
              console.log('session_key:' + res.data.session_key);
              // that.setData(res.data);
              that.setData({
                session_key: res.data.session_key
              })
            }
          })

        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    wx.request({
      url: '',
      data: {
        session_key: that.session_key,
        code: that.data.code,
        openid: that.data.openid,
      },
      success: function (res) {
        console.log(res)
        wx.setStorage({
          key: 'token',
          data: res.token,
        })
        that.setData({
          token: res.token
        })
      }

    })
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
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  }
})