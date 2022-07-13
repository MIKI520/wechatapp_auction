// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:'',
    code:''
  },
  //获取输入的手机号
  bindPhone:function(event){
    // console.log(event.detail.value)
    this.setData({number:event.detail.value})
  },
  //获取输入的验证码
  bindCode:function(event){
    // console.log(event.detail.value)
    this.setData({code:event.detail.value})
    wx.request({
      url: 'url',
    })
  },
  login:function(){
    console.log(this.data.number,this.data.code)
    wx.request({
      url:'http://localhost:8000/api/phone_num',
      data:{phone:this.data.number,code:this.data.code},
      method:'POST',
      success:function(res){
        console.log(res)
      }
    })
  },
  getCode:function(){
    var phone_num = this.data.number
    var arg = /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
    if(phone_num.length==11&&arg.test(phone_num)){
      console.log(phone_num)
      wx.request({
        url:'http://localhost:8000/api/phone_code',
        data:{phone:this.data.number},
        method:'POST',
        success:function(res){
          console.log(res)
        }
      })
    }else{
      wx.showToast({
        title: '手机号不符',
        icon:"error"
      })
    }
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

  }
})