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
    ]
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
  }
})