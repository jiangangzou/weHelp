// pages/users/verified/verified.js
var isChecked = getApp().globalData.isChecked;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [],
    isChecked: 'true',
    inputValue: ''

  },
  verified_uploadimg: function() {
    var that = this;
    var imgList = that.data.imgList;
    wx.chooseImage({ //从本地相册选择图片或使用相机拍照
      count: 4, // 默认9
      sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有
      imgListType: ['album'], // 可以指定来源是相册还是相机，默认二者都有

      success: function(res) {
        //console.log(res)
        //前台显示
        if (that.data.imgList.length != 0) {
          that.setData({
            imgList: that.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          that.setData({
            imgList: res.tempFilePaths
          })
        }
        wx.showToast({
          title: '正在上传...',
          icon: 'loading',
          mask: true,
          duration: 100
        })

        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        // console.log(tempFilePaths)
        for (var i = 0; i < tempFilePaths.length; i++) {
          if (imgList.length >= 4) {
            that.setData({
              imgList: imgList
            });
            return false;
          } else {

            var imgurllist = that.data.imgurllist;
            // console.log(tempFilePaths.length)
            var count = 0;
            wx.uploadFile({
              url: '',
              filePath: tempFilePaths[i],
              name: 'uploadfile_ant',
              header: {
                "content-type": "application/x-www-form-urlencoded",
                'Cookie': wx.getStorageSync("sessionid") //cookie值不清楚
              },
              success: function(res) {
                count++;
                var imgmessage = JSON.parse(res.data)
                //  console.log(imgmessage.imgurl)
                if (imgmessage.state == "success") {
                  that.setData({
                    acjson: imgmessage.imgurl,
                    imgurllist: imgmessage.imgurl,
                  })
                  imgurllist.push(imgmessage.imgurl);
                  that.setData({
                    imgurllist: imgurllist
                  });
                  //  console.log(that.data.imgurllist)
                } else {
                  wx.hideLoading();
                }
                //如果是最后一张,则隐藏等待中  
                if (count == that.data.imgList.length) {
                  wx.hideToast();
                }
              },
              fail: function(res) {
                wx.hideToast();
                wx.hideLoading();
                wx.showModal({
                  title: '错误提示',
                  content: '上传图片失败',
                  showCancel: false,
                  success: function(res) {}
                })
              }
            });

            imgList.push(tempFilePaths[i]);
          }
          that.setData({
            imgList: imgList
          });
        }



      }
    })
  },

  verified_ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  verified_DelImg(e) {
    wx.showModal({
      title: '确定删除',
      content: '确定要删除这张图片吗？',
      cancelText: 'No',
      confirmText: 'Yes',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
  verified_checkboxChange: function(e) {

    if (e.detail.value == '') {

      isChecked = false

    } else {

      isChecked = true

    }


    console.log('携带isChecked 值为：', isChecked)
  },
  verified_formSubmit: function(e) {
    var student_id = e.detail.value.verified_student_id;
    var verified_name = e.detail.value.verified_name;
    var phonetel = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (student_id == '' | verified_name == '') {
      wx.showToast({
        title: '姓名或学号不能为空',
        icon: 'none',
        duration: 1500
      })

      return false
    }
    if (student_id.length != 8) {
      wx.showToast({
        title: '学号长度有误,请修改后再提交',
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
          'verified_name': e.detail.value.verified_name,
          'verified_student_id': e.detail.value.verified_student_id,
          'verified_checkbox': isChecked
        },
        method: 'POST',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function(res) {
          console.log(res.data)
        },
        fail: function(res) {
          console.log('submit fail');
        }
      })
    }
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