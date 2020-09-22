//start.js
//获取应用实例
const app = getApp();

Page({
  data: {
    serverUrl: app.globalData.serverUrl,
    textNum:1
  },

  //进入书铺
  toIndex:function(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  },

  onLoad: function () {
    
   
  },
  
})
