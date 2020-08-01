// pages/home/xianzhi/xianzhi.js
var isChecked = getApp().globalData.isChecked;
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [],
    index: null,
    xianzhi_picker: ['电子产品', '衣服鞋子', '化妆品', '书籍资料', '代步工具', '其他'], //id从0开始
    isChecked: 'true',
    time: '12:01',
    date: '2018-12-25',
    index: -1,
		picker: ['0.5天', '1天', '2天', '3天'],
  },
  //选择图片与上传
  xianzhi_uploadimg: function() {
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
          duration: 1000
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
                  title: '提示',
                  content: '上传图片成功',
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

  xianzhi_ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  xianzhi_DelImg(e) {
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
  xianzhi_textareaAInput(e) {
    this.setData({
      textareaAValue: e.detail.value
    })
  },
  xianzhi_PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },
  xianzhi_checkboxChange: function(e) {
    if (e.detail.value == '') {

      isChecked = false

    } else {

      isChecked = true

    }


    console.log('携带isChecked 值为：', isChecked)
  },
  xianzhi_formSubmit: function(e) {
    var value = wx.getStorageSync('key')
    
    if (e.detail.value.xianzhi_text == '') {
      wx.showToast({
        title: '标题不能为空',
        icon: 'none',
        duration: 1500
      })

      return false
    }

    // if (e.detail.value.xianzhi_type == null) {
    //   wx.showToast({
    //     title: '物品类型不能为空',
    //     icon: 'none',
    //     duration: 1500
    //   })

    //   return false
    // }


    if (e.detail.value.xianzhi_price == '') {
      wx.showToast({
        title: '价格不能为空',
        icon: 'none',
        duration: 1500
      })

      return false
    }

    if (e.detail.value.xianzhi_content == '') {
      wx.showToast({
        title: '描述情况不能为空',
        icon: 'none',
        duration: 1500
      })

      return false
    }

    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    // if (!myreg.test(mobile)) {
    //   wx.showToast({
    //     title: '手机号有误,请修改后再提交',
    //     icon: 'none',
    //     duration: 1500
    //   })
    //   return false;
    // }
    if (false) {
      wx.showToast({
        title: '手机号长度有误,请修改后再提交',
        icon: 'none',
        duration: 1500
      })
      return false;
    } else {
      console.log('form发生了submit事件，携带数据为：', e.detail.value,
        '是否勾选用户协议:', isChecked)
      
      if (e.detail.value) {
        // console.log(e.detail.value,'e.detail.value')
        let formData = {}
        formData.taskTitle = e.detail.value.xianzhi_text  //任务标题
        formData.taskPrice = e.detail.value.xianzhi_price  //任务价格
        formData.taskContent = e.detail.value.xianzhi_content //任务内容
        formData.taskTime = this.data.time  //任务开始时间
        formData.taskDate = this.data.date  //任务开始日期
        formData.taskDuration = this.data.picker[this.data.index]
        app.globalData.formData = formData
        console.log(app.globalData.formData, 'app.globalData.formData')
        wx.request({
          url: '',
          data: {
            'xianzhi_text': e.detail.value.xianzhi_text,
            // 'xianzhi_type': e.detail.value.xianzhi_type,
            'xianzhi_price': e.detail.value.xianzhi_price,
            'xianzhi_content': e.detail.value.xianzhi_content,
            'xianzhi_wechat': e.detail.value.xianzhi_wechat,
            'xianzhi_phone': e.detail.value.xianzhi_phone,
            'xianzhi_checkbox': isChecked
          },
          method: 'POST',
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
            wx.showToast({
              title: '发布成功',
              icon: 'none',
              duration: 1500
            })
            console.log(res.data)

            wx.redirectTo({
              url: '/pages/home/entertainment/entertainment'
            })
          },
          fail: function (res) {
            console.log('submit fail');
            wx.showToast({
              title: '发布成功',
              icon: 'none',
              duration: 1500
            })
            console.log(res.data)
            setTimeout(() => {
              wx.redirectTo({
                url: '/pages/home/entertainment/entertainment'
              })
            }, 1500)
           
          }
        })}
      else{

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
    }
    
  },
  PickerChange(e) {
    console.log(e.detail.value,'e')
    this.setData({
      index: e.detail.value
    })
  },
  // getPhoneNumber: function (e) {
  //     console.log(e.detail.errMsg)
  //     console.log(e.detail.iv)
  //     console.log(e.detail.encryptedData)
  //     console.log(e.detail.PhoneNumber)
  //   },



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

  },
    TimeChange(e) {
      this.setData({
        time: e.detail.value
      })
      // this.time = e.detail.value
    },
    DateChange(e) {
      this.setData({
        date: e.detail.value
      })
      // this.date = e.detail.value
    },

})