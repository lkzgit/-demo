// pages/indexs/indexs.js

// 0 引入用来发送请求的方法
import {request} from "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
      //轮播图数组
      swiperList:[],
      //导航数组
      catesList:[],
      //楼层数组
     // floorList:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //1.发送异步请求，请求轮播图数据
      // wx.request({
      //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      //   success:(result)=>{//表示成功
      //      this.setData({
      //        swiperList:result.data.message
      //      })
      //   }
      //   // fail:()=>{//表示你失败

      //   // },complete:()=>{//成功和失败都会调用

      //  // }
      // });

     

      this.getSwiperList();
      this.getCateList();
      this.getFloorList();

  },


    // 获取轮播图数据
  getSwiperList(){
    request({
      url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"
    }).then(result=>{
    
      this.setData({
        swiperList:result.data.message
      })
    })
  },
  // 获取 分类导航数据
  getCateList(){
    request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems" })
    .then(result => {
      this.setData({
        catesList: result.data.message
      })
    })
  },
  // 获取 楼层数据
  getFloorList(){
    request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata" })
    .then(result => {
      this.setData({
        floorList:  result.data.message
      })
    })
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