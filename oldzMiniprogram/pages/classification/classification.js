  // pages/classification/classification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      array: [
        {id:"大类",name:["小类","参数搜商品",1111]},
        {id:2,name:[22,222,2222]},
        {id:3,name:[33,333,3333]}
      ],
      cate:""
  },
  //跳到该类别商品列表
  navigate:function(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/classification/good_list/good_list?id='+id,
    })
  },
  /**
   * colourUi css开关 
   */
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target,
      currentId: e.currentTarget.dataset.id
    });
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
//获取分类列表
    wx.request({
      url: 'http://127.0.0.1:8080/cate',
      success(res) {
        that.setData({
          cate: res.data
        })
      }  
    })
    console.log(this.data.cate)
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