const app = getApp()
Page({
  data: {
    PageCur: 'home',
    elements: [{
        // title: '发布闲置',
        title: '闲置转让',
        color: 'purple',
        // url: '/pages/home/xianzhi/xianzhi'
        url: '/pages/home/showcarpooling/showcarpooling'
      },
      {
        // title: '发布兼职',
        title: '生活帮',
        color: 'mauve',
        url: '/pages/home/xianzhi/xianzhi'
      },
      {
        // title: '组队拼车',
        title: '家政',
        color: 'blue',
        url: '/pages/home/part-time job/part_time_job'
      },
      {
        title: '跑腿',
        color: 'orange',
        url: '/pages/home/express/express'
      },
      {
        // title: '失物寻物',
        title: '宠物帮',
        color: 'yellow',
        url: '/pages/home/lost_found/lost_found'
      },
      {
        // title: '发布求助',
        title: '其他',
        color: 'brown',
        url: '/pages/home/help/help'
      }
    ],
    canIUse: true

  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
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
  check_session(res) {
    wx.checkSession({
      success: function(res) {
        console.log(res, '登录未过期')
        wx.showToast({
          title: '登录未过期',
        })
      },
      fail: function(res) {
        //点击获取手机号码按钮

        var that = this;

        wx.checkSession({

          success: function() {

            console.log(e.detail.errMsg)

            console.log(e.detail.iv)

            console.log(e.detail.encryptedData)



            var ency = e.detail.encryptedData;

            var iv = e.detail.iv;

            var sessionk = that.data.sessionKey;



            if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {

              that.setData({

                modalstatus: true

              });

            } else { //同意授权

              wx.request({

                method: "GET",

                url: 'https://xxx/wx/deciphering.do', //发往服务器解密

                data: {

                  encrypdata: ency,

                  ivdata: iv,

                  sessionkey: sessionk

                },

                header: {

                  'content-type': 'application/json' // 默认值

                },

                success: (res) => {

                  console.log("解密成功~~~~~~~将解密的号码保存到本地~~~~~~~~");

                  console.log(res);

                  var phone = res.data.phoneNumber;

                  console.log(phone);

                  wx.showToast({
                    title: '登录成功',
                    icon: 'success',
                    mask: true,
                    duration: 1000
                  });
                  this.setData({
                    modalName: null,
                    checkislogin: 1
                  })



                },
                fail: function(res) {

                  console.log("解密失败~~~~~~~~~~~~~");

                  console.log(res);

                  wx.showToast({
                    title: '登录失败',
                    icon: 'none',
                    mask: true,
                    duration: 1000
                  });


                }

              });

            }

          },

          fail: function() {

            console.log("session_key 已经失效，需要重新执行登录流程");

            that.wxlogin(); //重新登录

          }

        });

      },

      complete: function(res) {

      },
    })
  },
  onShow(){
    this.getUserLocation()
  },
  getUserLocation: function () {
    let vm = this
    wx.getSetting({
        success: (res) => {
            // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
            // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
            // res.authSetting['scope.userLocation'] == true    表示 地理位置授权
            // 拒绝授权后再次进入重新授权
            if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
                // console.log('authSetting:status:拒绝授权后再次进入重新授权', res.authSetting['scope.userLocation'])
                wx.showModal({
                    title: '',
                    content: '【邻里帮】需要获取你的地理位置，请确认授权',
                    success: function (res) {
                        if (res.cancel) {
                            wx.showToast({
                                title: '拒绝授权',
                                icon: 'none'
                            })
                            setTimeout(() => {
                                wx.navigateBack()
                            }, 1500)
                        } else if (res.confirm) {
                            wx.openSetting({
                                success: function (dataAu) {
                                    // console.log('dataAu:success', dataAu)
                                    if (dataAu.authSetting["scope.userLocation"] == true) {
                                        //再次授权，调用wx.getLocation的API
                                        vm.getLocation(dataAu)
                                    } else {
                                        wx.showToast({
                                            title: '授权失败',
                                            icon: 'none'
                                        })
                                        setTimeout(() => {
                                            wx.navigateBack()
                                        }, 1500)
                                    }
                                }
                            })
                        }
                    }
                })
            }
            // 初始化进入，未授权
            else if (res.authSetting['scope.userLocation'] == undefined) {
                // console.log('authSetting:status:初始化进入，未授权', res.authSetting['scope.userLocation'])
                //调用wx.getLocation的API
                vm.getLocation(res)
            }
            // 已授权
            else if (res.authSetting['scope.userLocation']) {
                // console.log('authSetting:status:已授权', res.authSetting['scope.userLocation'])
                //调用wx.getLocation的API
                vm.getLocation(res)
            }
        }
    })
},
// 微信获得经纬度
getLocation: function (userLocation) {
    let vm = this
    wx.getLocation({
        type: "wgs84",
        success: function (res) {
            // console.log('getLocation:success', res)
            var latitude = res.latitude
            var longitude = res.longitude
            console.log(res,'授权信息')
            // vm.getDaiShu(latitude, longitude)
        },
        fail: function (res) {
            // console.log('getLocation:fail', res)
            if (res.errMsg === 'getLocation:fail:auth denied') {
                wx.showToast({
                    title: '拒绝授权',
                    icon: 'none'
                })
                setTimeout(() => {
                    wx.navigateBack()
                }, 1500)
                return
            }
            if (!userLocation || !userLocation.authSetting['scope.userLocation']) {
                vm.getUserLocation()
            } else if (userLocation.authSetting['scope.userLocation']) {
                wx.showModal({
                    title: '',
                    content: '请在系统设置中打开定位服务',
                    showCancel: false,
                    success: result => {
                        if (result.confirm) {
                            wx.navigateBack()
                        }
                    }
                })
            } else {
                wx.showToast({
                    title: '授权失败',
                    icon: 'none'
                })
                setTimeout(() => {
                    wx.navigateBack()
                }, 1500)
            }
        }
    })
},

bindGetUserInfo: function(res) {

      if (res.detail.userInfo) {
  
        //用户按了允许授权按钮
  
        var that = this;
  
        // 获取到用户的信息了，打印到控制台上看下
  
        console.log("用户的信息如下：");
  
        console.log(res);
  
        //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
        app.globalData.isLogin = true
        // app.globalData.userInfo.personName = res.detail.userInfo.nickName
        that.setData({
  
          isHide: false,
          canIUse: false
  
        });

  
      } else {
  
        //用户按了拒绝按钮
  
        wx.showModal({
  
          title: '警告',
  
          content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
  
          showCancel: false,
  
          confirmText: '返回授权',
  
          success: function(res) {
  
            // 用户没有授权成功，不需要改变 isHide 的值
  
            if (res.confirm) {
  
              console.log('用户点击了“返回授权”');
  
            }
  
          }
  
        });
  
      }
  
   }
})