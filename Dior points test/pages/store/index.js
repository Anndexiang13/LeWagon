// pages/restaurant/index.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
  diorstores: [],
  },

  getRequestData: function (res) { 
    console.log(res);
    this.setData({ 
      diorstore: res.data.objects
    });
   },

  goToDetail: function(e){
    console.log('e', e);
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url:'detail?id=' + id,
    }) 
    },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function() {
  const Store = new wx.BaaS.TableObject('anadiorstores');
  Store.find().then((res) => {
    console.log('res', res);
    this.setData({
      diorstores: res.data.objects,
    })
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