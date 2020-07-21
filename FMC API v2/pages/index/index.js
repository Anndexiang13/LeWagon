//index.js
//获取应用实例
const app = getApp()

Page({
  // Esto es con el API
    // binded to clicking on a story
    showStory(event) {
      let data = event.currentTarget.dataset;
      let id = data.id;
  
      wx.navigateTo({
        url: `/pages/show/show?id=${id}`
      });
    },
  // lo de abajo es cuando tengo globalData
   data: {
     stories: []
   },
   //事件处理函数
   bindViewTap: function() {
     wx.navigateTo({
       url: '../logs/logs'
     })
   },
  getRequestData: function (res) { 
    console.log(res);
    this.setData({ 
      stories: res.data.objects
    });
  },
  onLoad: function () {
    let page = this;
    const request = {
      url: `https://cloud.minapp.com/oserve/v1/table/84988/record/`, 
      method: 'GET',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'}, // API token from Above
      success: page.getRequestData
    }
    wx.request(request);
  },
})
