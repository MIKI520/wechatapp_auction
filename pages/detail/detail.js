// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img : '',
    id : '',
    data : ['text1','text2','text3'],
    goods : {
      name : 'tutu',
      age : 4,
      kinds : 'animal'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(options)
    // this.data.img = options.img,
    // this.data.id = options.id
    this.setData({
      img : options.img,
      id : options.id
    })
    console.log(this.data.img)
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

  }
})