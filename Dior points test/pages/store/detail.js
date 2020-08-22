// pages/restaurant/detail.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    currentUser: {},
    store: {},
    reviews: [],
    ratings: [1, 2, 3, 4, 5],
    rating: 'None',
    newReviews: [], 
    products: [],
    newOrder: [],
    points: [],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
  this.setData({
    currentUser: app.globalData.userInfo,
  });
  console.log('options', options);

  const id = options.id;
  const Store = new wx.BaaS.TableObject('anadiorstores');
  const Comments = new wx.BaaS.TableObject('anareviews');
  const Products = new wx.BaaS.TableObject('ana_product');
  
  Store.get(id).then((res) => {
  console.log('review res', res);
  this.setData({
    store: res.data
  })  
  });

  let query = new wx.BaaS.Query();
  query.compare('store_id', '=', id);

  Comments.setQuery(query).find().then((res) => {
  console.log('comments res', res);
  this.setData({
    reviews: res.data.objects,
  })
  });


  Products.setQuery(query).find().then((res) => {
    console.log('products res', res);
    this.setData({
      products: res.data.objects,
    })
  })
 },
 
 createOrder: function(e){
  const productId = e.currentTarget.dataset.id;
  let Orders = new wx.BaaS.TableObject('orders');
  let newOrder = Orders.create();
  const orderData = {
  quantity: 1,
  product_id: productId,
  user_id: this.data.currentUser.id,
  
  };

  newOrder.set(orderData);

  newOrder.save().then((res) => {
    wx.showToast({
      title: 'Order Sent!',
      icon: 'success',
      duration: 2000,
      mask: true,
    });
  })
  },
 
  createReview: function (e) {
  console.log('create review', e);
  const content = e.detail.value.content;
  const Reviews = new wx.BaaS.TableObject('anareviews');
  const newReview = Reviews.create();
  const data = {
    store_id: this.data.diorstore.id,
    rating: this.data.rating,
    content: content,
    user_id: this.data.currentUser.id,
    
  }
  newReview.set(data);
  newReview.save().then((res) => {
    console.log('save res', res);

    // since you can't push to an array in the page data, 
    // we have to save the array and then push the new item
    // and re-set the data.
    const newReviews = this.data.reviews;

    newReviews.push(res.data);
    this.setData({
      reviews: newReviews,
    })
  })
  },
  
  onRate: function (e){
  console.log('change rating', e);
  const index = e.detail.value;
  this.setData({
    rating : this.data.ratings[index],
  });
  },
 
  userInfoHandler(data) {
    wx.BaaS.auth.loginWithWechat(data).then(user => {
      app.globalData.userInfo = user;
      this.setData({
        currentUser: user,
      })
    }, err => {
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