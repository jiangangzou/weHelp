Page({
  data: {
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/swiper0.jpg',
      linkUrl: '/pages/index/webview/swiper0/swiper0'
    }, {
      id: 1,
      type: 'image',
      url: 'https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/swiper0.jpg',
      linkUrl: '/pages/index/webview/swiper1/swiper1'
    }, {
      id: 2,
      type: 'image',
      url: 'https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/swiper1.jpg',
      linkUrl: '/pages/index /webview/swiper2/swiper2'
    }, {
      id: 3,
      type: 'image',
      url: 'https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/swiper2.jpg',
      linkUrl: '/pages/index/webview/swiper3/swiper3'
    }, {
      id: 4,
      type: 'image',
      url: 'https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/swiper1.jpg',
      linkUrl: '/pages/index/webview/swiper4/swiper4'
    }, {
      id: 5,
      type: 'image',
      url: 'https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/swiper1.jpg',
      linkUrl: '/pages/index/webview/swiper5/swiper5'
    }, {
      id: 6,
      type: 'image',
      url: 'https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/swiper0.jpg',
      linkUrl: '/pages/index/webview/swiper6/swiper6'
    }],
    iconList: [{
      icon: 'locationfill',
      color: 'green',
      badge: 0,
      // name: '校园导览',
      name: '闲置转让',
      target: "miniProgram",
      opentype: "navigate",
      appid: "wx5e431673dff5255d",
      path: "/pages/map/index",
      version: "release" //develop（开发版），trial（体验版），release（正式版）
    }, {
      icon: 'taxi',
      color: 'blue',
      badge: 0,
      // name: '组队拼车',
      // name: '发布兼职',
      name: '生活帮',
      Url: '/pages/home/entertainment/entertainment'
    }, {
      icon: 'send',
      color: 'red',
      badge: 0,
      name: '家政',
      Url: '/pages/home/maintenance/maintenance'
    }, {
      icon: 'repairfill',
      color: 'grey',
      badge: 0,
      name: '跑腿',
      Url: '/pages/home/showexpress/showexpress'
    }, {
      icon: 'shopfill',
      color: 'yellow',
      badge: 0,
      name: '宠物帮',
      Url: '/pages/home/entertainment/entertainment'
    }, {
      icon: 'cascades',
      color: 'orange',
      badge: 0,
      name: '其他',
      Url: '/pages/home/resources/resources'
    }],
    curIconList: {
      cuIcon: 'noticefill',
      color: 'olive',
      badge: 22,
      name: '通知'
    },


    gridCol: 3,
    skin: false


  },
  onShow() {
    this.hideModal()
  },
  // onLoad() {
  //   this.towerSwiper('swiperList');
  //   // 初始化towerSwiper 传已有的数组名即可
  // },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
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
  gridchange: function(e) {
    this.setData({
      gridCol: e.detail.value
    });
  },
  gridswitch: function(e) {
    this.setData({
      gridBorder: e.detail.value
    });
  },
  menuBorder: function(e) {
    this.setData({
      menuBorder: e.detail.value
    });
  },
  menuArrow: function(e) {
    this.setData({
      menuArrow: e.detail.value
    });
  },
  menuCard: function(e) {
    this.setData({
      menuCard: e.detail.value
    });
  },
  switchSex: function(e) {
    this.setData({
      skin: e.detail.value
    });
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  onLoad: function(options) {
    this.setData({
      title: options.title
    })
  },
  check_session(res) {
    wx.checkSession({
      success: function(res) {
        console.log(res, '登录未过期')
        // wx.showToast({
        //   title: '登录未过期',
        // })
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
  wxlogin: function() { //获取用户的openID和sessionKey

    var that = this;


    wx.login({

      //获取code 使用wx.login得到的登陆凭证，用于换取openid

      success: (res) => {
        console.log(res.code);

        wx.request({

          method: "GET",

          url: 'http://127.0.0.1/app/app.php', //服务器获取session_key

          data: {

            code: res.code,

            appId: "appIdSbcx",

            appKey: "appKeySbcx"

          },

          header: {

            'content-type': 'application/json' // 默认值

          },

          success: (res) => {

            console.log(res);

            that.setData({

              sessionKey: res.data.session_key

            });

          }

        });

      }

    });

  },
  moreList() {
    wx.redirectTo({
      url: '/pages/home/entertainment/entertainment'
    })
  }
})