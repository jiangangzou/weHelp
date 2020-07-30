// pages/home/carpooling/carpooling.js
var isChecked = getApp().globalData.isChecked;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start_time: '时间',
    start_date: '日期',
    end_time: '时间',
    end_date: '日期',
    textareaAValue: '',
    inputValue: '',
    isChecked: 'true'

  },

  start_TimeChange(e) {
    this.setData({
      start_time: e.detail.value
    })
  },
  start_DateChange(e) {
    this.setData({
      start_date: e.detail.value
    })
  },
  end_TimeChange(e) {
    this.setData({
      end_time: e.detail.value
    })
  },
  end_DateChange(e) {
    this.setData({
      end_date: e.detail.value
    })
  },
  carpooling_textareaAInput(e) {
    this.setData({
      textareaAValue: e.detail.value
    })
  },
  carpooling_checkboxChange: function (e) {

    if (e.detail.value == '') {

      isChecked = false

    }
    else {

      isChecked = true

    }


    console.log('携带isChecked 值为：', isChecked)
  },
  carpooling_bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
  },
  carpooling_formSubmit: function (e) {
    if (e.detail.value.carpooling_place == '') {
      wx.showToast({
        title: '出发地不能为空',
        icon: 'none',
        duration: 1500
      })

      return false
    }

    if (e.detail.value.carpooling_toplace == '') {
      wx.showToast({
        title: '目的地不能为空',
        icon: 'none',
        duration: 1500
      })

      return false
    }

    console.log(e.detail.value.carpooling_start_date)
    if (e.detail.value.carpooling_start_date == '日期') {
      wx.showToast({
        title: '出发时间未填写完毕',
        icon: 'none',
        duration: 1500
      })

      return false
    }

    if (e.detail.value.carpooling_start_time == '时间') {
      wx.showToast({
        title: '出发时间未填写完毕',
        icon: 'none',
        duration: 1500
      })

      return false
    }

    if (e.detail.value.carpooling_end_date == '日期') {
      wx.showToast({
        title: '截至时间未填写完毕',
        icon: 'none',
        duration: 1500
      })

      return false
    }

    if (e.detail.value.carpooling_end_time == '时间') {
      wx.showToast({
        title: '截至时间未填写完毕',
        icon: 'none',
        duration: 1500
      })

      return false
    }


    if (e.detail.value.carpooling_content == '') {
      wx.showToast({
        title: '信息详细说明不能为空',
        icon: 'none',
        duration: 1500
      })

      return false
    }

    if (e.detail.value.carpooling_wechat == '') {
      wx.showToast({
        title: '微信号不能为空',
        icon: 'none',
        duration: 1500
      })

      return false
    }










    var mobile = e.detail.value.carpooling_phone;
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
    }
    console.log('form发生了submit事件，携带数据为：', e.detail.value,
      '是否勾选用户协议:', isChecked)
    wx.request({
      url: '',
      data: {
        'carpooling_place': e.detail.value.carpooling_place,
        'carpooling_toplace': e.detail.value.carpooling_toplace,
        'carpooling_start_date': e.detail.value.carpooling_start_date,
        'carpooling_start_time': e.detail.value.carpooling_start_time,
        'carpooling_end_date': e.detail.value.carpooling_end_date,
        'carpooling_end_time': e.detail.value.carpooling_end_time,
        'carpooling_content': e.detail.value.carpooling_content,
        'carpooling_wechat': e.detail.value.carpooling_wechat,
        'carpooling_phone': e.detail.value.carpooling_phone,
        'carpooling_checkbox': isChecked
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

})