// pages/stories/stories.js
let app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    stories : []
    // content: "FMC!!!",
    // name: "Yinghui",
    // tagline: "Bugs everywhere!"
  },

  clickMe: function() {
    this.setData({ text: "Share my first FMC story" })
    wx.navigateTo({
      url: '/pages/post/post',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  
  // switchToPost: function() {
  // wx.switchTab({
  //   url: '/pages/post/post',
  //   success: function(res) {},
  //   fail: function(res) {},
  //   complete: function(res) {},
  // })

  // },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
  this.setData({
    stories: app.globalData.stories
  })  
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    // let stories = wx.getStorageSync("stories") || []
    // console.log(stories)

    // this.setData({
    //   stories: stories
    // })
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})