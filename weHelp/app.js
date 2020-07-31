//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // wx.login({                              //获取code                              
    //   success: (res) => {
    //     var code = res.code; //返回code                                    
    //     this.globalData.code = code;
    //     this.globalData.appId = 'wxc72a0ed41fd1ddaa';
    //     this.globalData.secret = 'f9f1e821ac583c49ad99dfedaa1b9164';
    //     wx.request({
    //       url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + this.globalData.appId + '&secret=' + this.globalData.secret + '&js_code=' + code + '&grant_type=authorization_code',

    //       data: {}, header: { 'content-type': 'json' },

    //       success: (res) => {
    //         var openid = res.data.openid //返回openid                                                    
    //         this.globalData.openId = openid;
    //         this.globalData.session_key = res.data.session_key;
    //         wx.request({
    //           url: this.globalData.req_url + '/WechatUser/dealUserMsg',
    //           method: 'post',
    //           header: { 'content-type': 'application/x-www-form-urlencoded' },
    //           data: {
    //             openId: openid
    //           },
    //           success: res => {
    //             console.log(res);
    //           }
    //         })
    //       }
    //     })
    //   },
    //   fail: () => {
    //     console.log('登陆失败')
    //   }
    // }),

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    // 获取系统状态栏信息
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
  },


  
  globalData: {
    userInfo: null,
    isChecked:'',
    isLogin: false,
    
  }
})