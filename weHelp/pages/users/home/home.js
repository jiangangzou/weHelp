const app = getApp()



Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    gridCol: 3,

    iconList: [{
      icon: 'present',
      badge: 0,
      name: '待接收',
      Url: '/pages/users/my_release/my_release'
    }, {
        icon: 'time',
      badge: 0,
      name: '进行中',
      Url: '/pages/users/verified/verified'
    }, {
        icon: 'roundclose',
      badge: 0,
      name: '已取消',
      Url: '/pages/users/my_order/my_order'
    },{
      icon: 'roundcheck',
      badge: 0,
      name: '待确认',
      Url: '/pages/users/my_release/my_release'
    },{
      icon: 'comment',
      badge: 0,
      name: '待评价',
      Url: '/pages/users/my_release/my_release'
    }],
    checkislogin: 0,
    loginbutton: '请点击登录',
    datachange: ''
  },

  //事件处理函数
  showQrcode() {
    wx.previewImage({
      urls: ['https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/赞赏码.png?sign=b401a54be949b6ebf2100b83707b5aba&t=1564570995'],
      current: 'https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/赞赏码.png?sign=b401a54be949b6ebf2100b83707b5aba&t=1564570995' // 当前显示图片的http链接      
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


  getPhoneNumber: function(e) { //点击获取手机号码按钮

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


  checklogin: function(e) {
    if (this.checkislogin = 1) {
      this.setData({
        loginbutton: datachange
      })
    }
  },
  onGotUserInfo: function(e) {
    console.log("nickname=" + e.detail.userInfo.nickName);
    this.setData({
      datachange: e.detail.userInfo.nickName
    })
  }

})