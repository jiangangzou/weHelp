// pages/home/carpooling/carpooling.js
var isChecked = getApp().globalData.isChecked;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    express_start_time: '时间',
    express_start_date: '日期',
    express_end_time: '时间',
    express_end_date: '日期',
    textareaAValue: '',
    index1: null,
    express_count_picker: ['1件', '2件', '3件', '4件', '5件'],  //ID从0开始
    index2: null,
    express_weight_picker: ['1kg以下', '1-3kg', '3kg-5kg', '5kg以上', '超大件'],
    imgList: [],
    express_dong_picker: ['1栋', '2栋', '3栋', '4栋', '5栋', '6栋', '7栋', '8栋', '13栋', '14栋', '15栋', '16栋'
      , '17栋', '18栋', '19栋', '20栋', '23栋'],
    index3: null,
    isChecked: 'true'


  },

  express_end_TimeChange(e) {
    this.setData({
      express_end_time: e.detail.value
    })
  },
  express_end_DateChange(e) {
    this.setData({
      express_end_date: e.detail.value
    })
  },
  express_start_TimeChange(e) {
    this.setData({
      express_start_time: e.detail.value
    })
  },
  express_start_DateChange(e) {
    this.setData({
      express_start_date: e.detail.value
    })
  },
  express_count_PickerChange(e) {
    console.log(e);
    this.setData({
      index1: e.detail.value
    })
  },
  express_weight_PickerChange(e) {
    console.log(e);
    this.setData({
      index2: e.detail.value
    })
  },
  express_dong_PickerChange(e) {
    console.log(e);
    this.setData({
      index3: e.detail.value
    })
  },
  express_content_textareaAInput(e) {
    this.setData({
      textareaAValue: e.detail.value
    })
  },

  exprees_formSubmit: function (e) {
    if (e.detail.value.express_name == '') {
      wx.showToast({
        title: '收件人不能为空',
        icon: 'none',
        duration: 1500
      })

      return false
    }


    if (e.detail.value.express_phone_end == '') {
      wx.showToast({
        title: '手机尾号不能为空',
        icon: 'none',
        duration: 1500
      })

      return false
    }

    console.log(e.detail.value.express_weight)
    if (e.detail.value.express_count == null) {
      wx.showToast({
        title: '快递件数不能为空',
        icon: 'none',
        duration: 1500
      })

      return false
    }


    if (e.detail.value.express_weight == null) {
      wx.showToast({
        title: '快递重量不能为空',
        icon: 'none',
        duration: 1500
      })

      return false
    }


    if (e.detail.value.express_point == '') {
      wx.showToast({
        title: '快递点不能为空',
        icon: 'none',
        duration: 1500
      })

      return false
    }


    if (e.detail.value.express_price == '') {
      wx.showToast({
        title: '酬金不能为空',
        icon: 'none',
        duration: 1500
      })

      return false
    }


    if (e.detail.value.express_content == '') {
      wx.showToast({
        title: '备注不能为空',
        icon: 'none',
        duration: 1500
      })

      return false
    }


    if (e.detail.value.express_dong == null) {
      wx.showToast({
        title: '栋数不能为空',
        icon: 'none',
        duration: 1500
      })

      return false
    }


    if (e.detail.value.express_room == '') {
      wx.showToast({
        title: '楼层号不能为空',
        icon: 'none',
        duration: 1500
      })

      return false
    }


    if (e.detail.value.express_start_date == '日期') {
      wx.showToast({
        title: '配送时间未填写完整',
        icon: 'none',
        duration: 1500
      })

      return false
    }


    if (e.detail.value.express_start_time == '时间') {
      wx.showToast({
        title: '配送时间未填写完整',
        icon: 'none',
        duration: 1500
      })

      return false
    }


    if (e.detail.value.express_end_date == '日期') {
      wx.showToast({
        title: '截至时间未填写完整',
        icon: 'none',
        duration: 1500
      })

      return false
    }


    if (e.detail.value.express_end_time == '时间') {
      wx.showToast({
        title: '截至时间未填写完整',
        icon: 'none',
        duration: 1500
      })

      return false
    }


    if (e.detail.value.express_wechat == '') {
      wx.showToast({
        title: '微信号不能为空',
        icon: 'none',
        duration: 1500
      })

      return false
    }
















    var mobile = e.detail.value.express_phone;
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
          'express_name': e.detail.value.express_name,
          'express_phone_end': e.detail.value.express_phone_end,
          'express_count': e.detail.value.express_count,
          'express_weight': e.detail.value.express_weight,
          'express_point': e.detail.value.express_point,
          'express_price': e.detail.value.express_price,
          'express_content': e.detail.value.express_content,
          'express_dong': e.detail.value.express_dong,
          'express_room': e.detail.value.express_room,
          'express_start_date': e.detail.value.express_start_date,
          'express_start_time': e.detail.value.express_start_time,
          'express_end_date': e.detail.value.express_end_date,
          'express_end_time': e.detail.value.express_end_time,
          'express_wechat': e.detail.value.express_wechat,
          'express_phone': e.detail.value.express_phone,
          'express_checkbox': isChecked

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

  //   ChooseImage() {
  //     var that = this;
  //     var imgList = that.data.imgList;
  //     wx.chooseImage({
  //       count: 4, //默认9
  //       sizeType: ['original'], //可以指定是原图还是压缩图，默认二者都有
  //       imgListType: ['album'], //从相册选择
  //       success: (res) => {
  //         if (this.data.imgList.length != 0) {
  //           this.setData({
  //             imgList: this.data.imgList.concat(res.tempFilePaths)
  //           })
  //         } else {
  //           this.setData({
  //             imgList: res.tempFilePaths
  //           })
  //         }

  // var imgurllist = that.data.imgurllist;
  // // console.log(tempFilePaths.length)
  // var count = 0;
  // wx.uploadFile({
  //       url: '',
  //       filePath:tempFilePaths[i],
  //       name: 'uploadfile_ant',
  //       header: {
  //         "content-type": "application/json",
  //         "Cookie": "PLAY_SESSION=" + getApp().data.cookied
  //       },
  //       success: function (res) {
  //         count++;
  //         var imgmessage = JSON.parse(res.data)
  //         //  console.log(imgmessage.imgurl)
  //         if (imgmessage.state == "success") {
  //           that.setData({
  //             acjson: imgmessage.imgurl,
  //             imgurllist: imgmessage.imgurl,
  //           })
  //           imgurllist.push(imgmessage.imgurl);
  //           that.setData({
  //             imgurllist: imgurllist
  //           });
  //           //  console.log(that.data.imgurllist)
  //         } else {
  //           wx.hideLoading();
  //         }
  //         //如果是最后一张,则隐藏等待中  
  //         if (count == that.data.imgList.length) {
  //           wx.hideToast();
  //         }
  //       },
  //       fail: function (res) {
  //           wx.hideToast();
  //           wx.hideLoading();
  //           wx.showModal({
  //             title: '错误提示',
  //             content: '上传图片失败',
  //             showCancel: false,
  //             success: function (res) {}
  //           })
  //         },
  //       });
  //     }
  //   });
  // },




  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
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
  express_checkboxChange: function (e) {
    if (e.detail.value == '') {

      isChecked = false

    } else {

      isChecked = true

    }


    console.log('携带isChecked 值为：', isChecked)
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
  //选择图片与上传
  uploadimg: function () {
    var that = this;
    var imgList = that.data.imgList;
    wx.chooseImage({ //从本地相册选择图片或使用相机拍照
      count: 5, // 默认9
      sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有
      imgListType: ['album'], // 可以指定来源是相册还是相机，默认二者都有

      success: function (res) {
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
              success: function (res) {
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
              fail: function (res) {
                wx.hideToast();
                wx.hideLoading();
                wx.showModal({
                  title: '错误提示',
                  content: '上传图片失败',
                  showCancel: false,
                  success: function (res) { }
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

  //删除图片功能
  deleteImg: function (e) {
    var imgList = this.data.imgList;
    var index = e.currentTarget.dataset.index;
    imgList.splice(index, 1);
    var imgurllist = this.data.imgurllist;
    imgurllist.splice(index, 1);
    this.setData({
      imgList: imgList,
      imgurllist: imgurllist
    });
  },
  //获取图片索引
  previewImg: function (e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    //所有图片
    var imgList = this.data.imgList;
    wx.previewImage({
      //当前显示图片
      current: imgList[index],
      //所有图片
      urls: imgList
    })
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