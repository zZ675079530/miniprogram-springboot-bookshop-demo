// pages/index/index.js
const app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    serverUrl:app.globalData.serverUrl,
    list: ["http://oldzzy.cn/images/1.gif",
          "http://oldzzy.cn/images/1.gif",
          "http://oldzzy.cn/images/1.gif",
          "http://oldzzy.cn/images/1.gif",
          "http://oldzzy.cn/images/1.gif",
          "http://oldzzy.cn/images/1.gif"
          ],
    shopList:[],

    curIndex: 0,
    text:["九折优惠", "八折优惠"]
  },
  /**
   * 轮播索引
   */
  curChange(res){
    this.setData({
      curIndex:res.detail.current
    })
  },
  /**
   * 去详情页吧，传对象要json,那边接的时候json回来
   */
  toDetail: function (e) {
    console.log(e.currentTarget.dataset.product.price)
    var product = JSON.stringify(e.currentTarget.dataset.product)

    wx.navigateTo({
      url: '/pages/good_detail/good_detail?product=' + product,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;  
    wx.request({
      url: 'http://127.0.0.1:8080/cateList/10',
      success(res) {
        that.setData({
          shopList: res.data
        })
      }
    })
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