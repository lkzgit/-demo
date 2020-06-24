//app.js
//app.js
App({
    //onLaunch,onShow: options(path,query,scene,shareTicket,referrerInfo(appId,extraData))
    onLaunch: function(options) {
         // 登录
    wx.login({
        success: res => {
            console.log("登录成功信息："+res)
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
        }
      })
    },
    onShow: function(options) {

    },
    onHide: function() {

    },
    onError: function(msg) {

    },
    //options(path,query,isEntryPage)
    onPageNotFound: function(options) {

    },
    globalData: {
        
    }
});
  