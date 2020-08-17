//app.js
App({
  onLaunch: function () {
    // require('./sdk-wechat.3.12.0');
    // let clientID='a0cae729d2cc3f2f52e1';  
    // wx.BaaS.init(clientID);
    // console.log('App loaded.');

    wx.BaaS = requirePlugin('sdkPlugin')
    // enables login, payment, and other features
    wx.BaaS.wxExtend(wx.login,
     wx.getUserInfo,
     wx.requestPayment)

    const clientID = 'a0cae729d2cc3f2f52e1' // The ClientID received by the backend
    wx.BaaS.init(clientID);

    wx.BaaS.auth.loginWithWechat().then(user => {
    this.globalData.userInfo = user.toJSON();
    wx.setStorageSync('userInfo', user.toJSON());
    console.log('logged in from app.js', user);
    }, err => {
      console.log('fail login');
    })
  },

  globalData: {
  userInfo: wx.getStorageSync('userInfo') || null,      
  }
})

// 2cd5fc1d1fdbdbc94036     a0cae729d2cc3f2f52e1




