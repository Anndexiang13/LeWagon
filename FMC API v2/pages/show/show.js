// pages/show/show.js

Page({

  /**
   * Page initial data
   */
  data: {
  
  },

  
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let id = options.id
    let request = {
      url: `https://cloud.minapp.com/oserve/v1/table/85188/record/${id}`,
      method: 'GET',
      header: { 'Authorization': 'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e' },
    
      success(res) {
      page.setData({
      story: res.data.objects
        })
      }
    }
  }
})
  