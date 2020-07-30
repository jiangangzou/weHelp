// pages/home/help/help.js
var isChecked = getApp().globalData.isChecked;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isChecked: 'true'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  textareaAInput(e) {
    this.setData({
      textareaAValue: e.detail.value
    })
  },
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
  },
  help_checkboxChange(e) {
    if (e.detail.value == '') {

      isChecked = false

    } else {

      isChecked = true

    }


    console.log('携带isChecked 值为：', isChecked)
  },


  formSubmit: function (e) {
    if (e.detail.value.help_text == '') {
      wx.showToast({
        title: '标题不能为空',
        icon: 'none',
        duration: 1500
      })

      return false
    }


    if (e.detail.value.help_price == '') {
      wx.showToast({
        title: '酬金不能为空',
        icon: 'none',
        duration: 1500
      })

      return false
    }



    if (e.detail.value.help_content == '') {
      wx.showToast({
        title: '具体内容不能为空',
        icon: 'none',
        duration: 1500
      })

      return false
    }


    if (e.detail.value.help_wechat == '') {
      wx.showToast({
        title: '微信号不能为空',
        icon: 'none',
        duration: 1500
      })

      return false
    }







    var mobile = e.detail.value.help_phone;
    var phonetel = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (mobile == '') {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none',
        duration: 1500
      })

      return false
    }

    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (!myreg.test(mobile)) {
      wx.showToast({
        title: '手机号有误,请修改后再提交',
        icon: 'none',
        duration: 1500
      })
      return false;
    }
    if (mobile.length != 11) {
      wx.showToast({
        title: '手机号长度有误,请修改后再提交',
        icon: 'none',
        duration: 1500
      })
      return false;
    } else {
      console.log('form发生了submit事件，携带数据为：', e.detail.value,
        '是否勾选用户协议:', isChecked)
      wx.request({
        url: '',
        data: {
          'help_text': e.detail.value.help_text,
          'help_price': e.detail.value.help_price,
          'help_content': e.detail.value.help_content,
          'help_wechat': e.detail.value.help_wechat,
          'help_phone': e.detail.value.help_phone,
          'help_checkbox': isChecked

        },
        method: 'POST',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          console.log(res.data)
        },
        fail: function (res) {
          console.log('submit fail');
        }
      })
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