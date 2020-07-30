// pages/ service/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    TabCur0: 0,
    TabCur1_1: 0,
    TabCur1_2: 0,
    TabCur1_4: 0,
    scrollLeft: 0,

    /** 
     * text最多只能12个汉字
     * price最多到千位
     * content建议最多3行
     */
    new_List0: [{
        text: '最多只能十二个汉字字字字',
        content: '测试用',
        Url: '/pages/service/xianzhi_detail/xianzhi_detail',
        id: 1
      },
      {
        text: '公告',
        content: '测试用',
        Url: '/pages/service/xianzhi_detail/xianzhi_detail'
      },
      {
        text: '公告',
        content: '测试用',
      },
      {
        text: '公告',
        content: '测试用',
      },
      {
        text: '公告',
        content: '测试用',
      },
      {
        text: '公告',
        content: '测试用',
      },
      {
        text: '公告',
        content: '测试用',
      },
      {
        text: '公告',
        content: '测试用',
      }
    ],

    xianzhi_List1_0: [{
        text: '最多只能十二个汉字字字字',
        price: '5555.55',
        content: '毕业大甩卖啊',
        Url: '/pages/service/xianzhi_detail/xianzhi_detail'
      },
      {
        text: '最多只能十二个汉字字字字',
        price: 12,
        content: '测试用',
        Url: '/pages/service/xianzhi_detail/xianzhi_detail'
      }
    ],
    xianzhi_List1_1: [{
        text: '衣服',
        price: 11,
        content: '测试用',
        Url: '/pages/service/xianzhi_detail/xianzhi_detail'
      },
      {
        text: '裤子',
        price: 12,
        content: '测试用',
        Url: '/pages/service/xianzhi_detail/xianzhi_detail'
      }
    ],
    xianzhi_List1_2: [{
        text: '防晒',
        price: 11,
        content: '测试用',
        Url: '/pages/service/xianzhi_detail/xianzhi_detail'
      },
      {
        text: '化妆',
        price: 12,
        content: '测试用',
        Url: '/pages/service/xianzhi_detail/xianzhi_detail'
      }
    ],
    xianzhi_List1_3: [{
        text: '大学英语全新',
        price: 11,
        content: '测试用',
        Url: '/pages/service/xianzhi_detail/xianzhi_detail'
      },
      {
        text: '四级英语',
        price: 12,
        content: '测试用',
        Url: '/pages/service/xianzhi_detail/xianzhi_detail'
      }
    ],
    xianzhi_List1_4: [{
        text: '二手自行车50出',
        price: 11,
        content: '测试用',
        Url: '/pages/service/xianzhi_detail/xianzhi_detail'
      },
      {
        text: '其他',
        price: 12,
        content: '测试用',
        Url: '/pages/service/xianzhi_detail/xianzhi_detail'
      }
    ],
    xianzhi_List1_5: [{
        text: '其他',
        price: 11,
        content: '测试用',
        Url: '/pages/service/xianzhi_detail/xianzhi_detail'
      },
      {
        text: '二手电动',
        price: 12,
        content: '测试用',
        Url: '/pages/service/xianzhi_detail/xianzhi_detail'
      }
    ],
    part_time_job_List2_0: [{
        text: '椰林酒店周五需5人',
        price: 11,
        content: '测试用',
        Url: '/pages/service/part-time-job_detail/part-time-job_detail'
      },
      {
        text: '发传单',
        price: 12,
        content: '测试用',
        Url: '/pages/service/part-time-job_detail/part-time-job_detail'
      }
    ],
    part_time_job_List2_1: [{
        text: '有家教兼职吗',
        price: 11,
        content: '测试用',
        Url: '/pages/service/part-time-job_detail/part-time-job_detail'
      },
      {
        text: '有富婆吗',
        price: 12,
        content: '测试用',
        Url: '/pages/service/part-time-job_detail/part-time-job_detail'
      }
    ],
    help_List3: [{
        text: '代课',
        price: 11,
        content: '测试用',
        Url: '/pages/service/help_detail/help_detail'
      },
      {
        text: '帮忙',
        price: 12,
        content: '测试用',
        Url: '/pages/service/help_detail/help_detail'
      }
    ],
    lost_found_List4_0: [{
        text: '寻物0',
        content: '测试用',
        Url: '/pages/service/lost_found_detail/lost_found_detail'
      },
      {
        text: '寻物1',
        content: '测试用',
        Url: '/pages/service/lost_found_detail/lost_found_detail'
      }
    ],
    lost_found_List4_1: [{
        text: '失物0',
        content: '测试用',
        Url: '/pages/service/lost_found_detail/lost_found_detail'
      },
      {
        text: '失物1',
        content: '测试用',
        Url: '/pages/service/lost_found_detail/lost_found_detail'
      }
    ],


  },

  tabSelect0(e) {
    this.setData({
      TabCur0: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },

  tabSelect1_1(e) {
    this.setData({
      TabCur1_1: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },

  tabSelect1_2(e) {
    this.setData({
      TabCur1_2: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },

  tabSelect1_4(e) {
    this.setData({
      TabCur1_4: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this; //=====注意此处，要用that 指代this=====
    wx.request({
      url: '', //服务器地址
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      data: {
        carpooling_id: options.carpooling_id,
      },
      header: { // 设置请求的 header
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res);
        that.setData({ //======不能直接写this.setDate======
          new_List0: res.data, //在相应的wxml页面显示接收到的数据
          xianzhi_List1_0: res.data,
          xianzhi_List1_1: res.data,
          xianzhi_List1_2: res.data,
          xianzhi_List1_3: res.data,
          xianzhi_List1_4: res.data,
          xianzhi_List1_5: res.data,
          part_time_job_List2_0: res.data,
          part_time_job_List2_1: res.data,
          help_List3: res.data,
          lost_found_List4_0: res.data,
          lost_found_List4_1: res.data,
          detail_id:res.data
        });
      },
      fail: function(res) {
        console.log('request fail');
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  /**
   * 页面加载完成
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
    this.onLoad();
    setTimeout(function () {
      wx.stopPullDownRefresh();
    }, 1000);
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



})