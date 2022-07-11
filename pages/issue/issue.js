// pages/issue/issue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image : [],
    localpath : ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  chooseImg:function(){
    var that = this
    wx.chooseMedia({
      count: 9,
      mediaType: ['image','video'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success(res) {
        var image = []
        console.log(res.tempFiles)
        //循环遍历出图片地址
        res.tempFiles.forEach(item => {
          image.push(item.tempFilePath)
        });
        console.log(image)
        that.setData({
          image : image
        })
        // console.log(res.tempFiles.tempFilePath)
        // console.log(res.tempFiles.size)
      }
    })
  },
  chooseArea:function(){
    wx.chooseLocation({
      success:(res)=>{
        console.log('success',res.name);
        this.setData({localpath : res.name});
      },
      fail:(res)=>{
        console.log('fail',res);
      }
    })
  }
})