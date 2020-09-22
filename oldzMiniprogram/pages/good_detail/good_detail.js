// pages/good_detail/good_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product:"",
    tab:["商品","详情","评价"],
    showTab:0
  },
  /**
   * 标签切换
   */
  tabSelect(e) {
    this.setData({
      showTab: e.currentTarget.dataset.id,
    })
    console.log(this.data.showTab)
  },
  /**
  * 加入购物车
  */
  addShopCart:function(e){
    var shopCart = wx.getStorageSync("shopCart")
    shopCart.push(e.currentTarget.dataset.product)
    wx.setStorageSync("shopCart", shopCart)
    this.setData({
      loadModal: true
    })
    setTimeout(() => {
      this.setData({
        loadModal: false
      })
    }, 500)
  },
  /**
   * 去购物车
   */
  toCart(){
    wx.switchTab({
      url: '../shoppingCart/shoppingCart',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    var pro= JSON.parse(options.product)
    that.setData({
      product:pro
    })
    console.log(that.data.product.price)
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