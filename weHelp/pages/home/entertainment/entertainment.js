// pages/home/entertainment/entertainment.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/swiper0.jpg?sign=4a602c9fff4904b89f1353c13f1a066a&t=1563380770'
    }, {
      id: 1,
      type: 'image',
        url: 'https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/bg.png?sign=a197cd09693de82eb9f15634b29fa4d2&t=1563621115',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
        url: 'https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/bg.png?sign=a197cd09693de82eb9f15634b29fa4d2&t=1563621115'
    }],
    entertainment_List:[
      {
        title:'邻里帮',
        imglink: 'https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/shangjia/img/logo.jpg?sign=ac38cd09be1f8a47b232fa63558c6e99&t=1568121229',
        content: '一个有温度、有态度的最具影响力的自媒体。致力于校园信息化生活服务平台，实时推送校园动态、学校信息发布、学习资源分享，以及周边吃喝玩乐优惠推介。关注邻里帮，玩出大不同！',
        tag0:'自媒体',
        tag1:'校园服务',
        urlLink: '/pages/home/entertainment_detail/entertainment_detail0'
      },
      {
        title:'啊一柠檬茶',
        imglink:'https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/shangjia/img/2.jpg?sign=a0366758ab3d54f76f75b26d7abc6e4e&t=1568120502',
        content:'饮品推荐 | 啊一柠檬茶强势入驻麻涌，这1杯我请你喝',
        tag0:'美食',
        tag1:'茶点',
        urlLink: '/pages/home/entertainment_detail/entertainment_detail1'
      },
      {
        title:'淼福猪肚鸡',
        imglink:'https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/shangjia/img/0.jpg?sign=2854512b05386962dff727839b7827a6&t=1568120687',
        content:'美食推荐 | 广东正宗猪肚鸡开学特惠邀请函',
        tag0:'美食',
        tag1:'正餐',
        urlLink: '/pages/home/entertainment_detail/entertainment_detail2'
      },
      {
        title:'光年科技',
        imglink:'https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/Logo.png?sign=ce3c5c76efa471f6d16717a512ddd0a7&t=1564459086',
        content:'科技即服务，探索与创新，Think Diffrent',
        tag0:'科技集市',
        tag1:'电脑维修',
        tag2:'软件开发'
      }
    ],
    cooperation_img: ['https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/shangjia/img/wechat.jpg?sign=c51081bc98b38bda055120c28a6ad3b1&t=1564498610']

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
    let entertainment = {}
    entertainment.title = app.globalData.formData.taskTitle
    entertainment.imglink = 'https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/shangjia/img/logo.jpg?sign=ac38cd09be1f8a47b232fa63558c6e99&t=1568121229'
    entertainment.content = app.globalData.formData.taskContent
    entertainment.taskTime = app.globalData.formData.taskTime
    entertainment.taskDate = app.globalData.formData.taskDate
    entertainment.taskDuration = app.globalData.formData.taskDuration
    entertainment.taskPrice = app.globalData.formData.taskPrice
    entertainment.urlLink= '/pages/home/entertainment_detail/entertainment_detail0'
    entertainment.tag0 = '生活帮'
    let entertainmentResult = this.data.entertainment_List
    entertainmentResult.unshift(entertainment)
    console.log(entertainmentResult,'entertainmentResult')
    this.setData({
      entertainment_List: entertainmentResult
    })
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.cooperation_img // 需要预览的图片http链接列表  
    })
  },
    showQrcode() {
      wx.previewImage({
        urls: ['https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/shangjia/img/wechat.jpg?sign=c51081bc98b38bda055120c28a6ad3b1&t=1564498610'],
        current: 'https://7868-xhsysubb-zdxh-1259645612.tcb.qcloud.la/shangjia/img/wechat.jpg?sign=c51081bc98b38bda055120c28a6ad3b1&t=1564498610' // 当前显示图片的http链接      
      })
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

  }
})