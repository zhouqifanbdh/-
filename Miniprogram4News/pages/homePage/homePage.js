// pages/homePage/homePage.js
let ApiUrl = "http://localhost:8888"
//新闻类型接口
let tyepUrl = ApiUrl + "news/type"
//新闻列表接口
let newsUrl = ApiUrl + "news/list"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tArray: [],//新闻类型数组
    loading: true, //是否显示加载
    ishidden: true,
    curpage: 0,//新闻列表坐标
    listpage: 0,//列表当前页码
    detaildata: [],//新闻列表
    category: "all",//当前分类
    viewHeight: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //导航栏显示加载状态
    wx.showNavigationBarLoading();
    //定义this代理，处理网络返回数据，不能直接使用this
    var that = this;
    //请求网络，获取type
    wx.request({
      url: tyepUrl,
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        //获取返回的数组
        let dataArr = [];
        // dataArr = res.data.data.data;
        dataArr = res.data;
        //打印输出
        console.log(dataArr);
        //变量赋值
        that.setData({
          tArray: dataArr
        });
      },
      fail: function (res) { },
      complete: function (res) {
        //取消导航栏加载
        wx.hideNavigationBarLoading();
        var dataArr = [
          { category: 'all', name: '热点' },
          { category: '1', name: '社会' },
          { category: '2', name: '娱乐' },
          { category: '3', name: '科技' },
          { category: '4', name: '汽车' },
          { category: '5', name: '财经' }
        ]
        that.setData({
          tArray: dataArr
        });
      }
    })
    this.setData({
      listpage: 0
    });
    this.readList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  //初次渲染完成后创建了动画实例，根据屏幕高度设置了新的scroll-view高度
  onReady: function () {
    this.animation = wx.createAnimation({
      duration: 2000,
      timingFunction: "ease",
    });
    //读取屏幕高度
    var res = wx.getSystemInfoSync();
    var width = res.screenHeight - 40 - 50;
    //设置scroll-view高度
    this.setData({
      viewHeight: width
    })
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

  },
  typeClick(e) {
    var idx = e.currentTarget.dataset.idx;
    console.log(idx);
    var that = this;
    that.setData({
      curpage: e.target.id
    });
    //初始化页码从0开始
    this.setData({
      listpage: 0
    });
    console.log("curpage=", this.data.curpage);
    console.log("listpage==", this.data.listpage);
    //设臵分类
    this.setData({
      category: idx
    });
    //获取新闻
    this.readList()
  },
  //加载更多scroll-view bindscrolltolower事件
  addMoreData(e) {
    //页码+1，继续获取新闻
    var that = this;
    var pageTemp = (this.data.listpage + 1)
    that.setData({
      listpage: pageTemp
    });
    //获取新闻
    this.readList()
  },
  readList: function () {
    ////显示加载状态
    this.setData({ loading: false });
    //请求网络，获取type
    var that = this;
    wx.request({
      url: newsUrl,
      method: "POST", //默认GET
      data: { "category": this.data.category, "page": this.data.curpage },
      header: {
        "content-type": "application/x-www-form-urlencoded"  //以表单形式提交
        //"content-type": "application/json  //以json形式提交
      },
      success: function (res) {
        //如果是第1页，坐标是0，数组先清空
        if (that.data.listpage == 0) { that.setData({ detaildata: [] }); }
        //解析数据
        // var arr = res.data.data;
        var arr = res.data;
        console.log(arr)
        var dataArr = [];
        dataArr = arr;
        that.setData({ detaildata: dataArr, });  //修改数组
      },
      fail: function (res) { },
      complete: function (res) {
        var dataArr = [{
          title: 'title1',
          has_image: false,
          comment_count: 5,
          publish_time: '2020-03-09 9:25'
        }, {
          title: 'title2',
          has_image: false,
          comment_count: 15,
          publish_time: '2020-03-09 7:34'
        }, {
          title: 'title3',
          has_image: true,
          image_list: [
            { url: '../../images/cam.jpg' },
            { url: '../../images/cam.jpg' }
          ],
          comment_count: 25,
          publish_time: '2020-03-08 19:25'
        }, {
          title: 'title4',
          has_image: false,
          comment_count: 8,
          publish_time: '2020-03-08 19:20'
        }];
        that.setData({ detaildata: dataArr })
        that.setData({ loading: true })  //取消加载
      }
    });
  }
})
