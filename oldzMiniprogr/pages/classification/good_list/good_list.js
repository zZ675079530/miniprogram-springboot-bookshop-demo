// pages/classification/good_list/good_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    option1: [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 }
    ],
    option2: [
      { text: '默认排序', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' }
    ],
    value1: 0,
    value2: 'a',
    cateId:"",
    list:""
  },
  /**
   * 去详情页吧，传对象要json,那边接的时候json回来
   */
  toDetail:function(e){
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
      this.setData({
        cateId: options.id
      }),
      wx.request({
        url: 'http://127.0.0.1:8080/cateList/'+that.data.cateId,
        success(res){
          that.setData({
            list: res.data
          })
          console.log(res.data)
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