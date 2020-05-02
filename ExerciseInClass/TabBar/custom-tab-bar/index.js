Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/index/index",
      iconPath: "/image/home.png",
      selectedIconPath: "/image/home.png",
      text: "首页"
    }, {
      pagePath: "/index/index2",
      iconPath: "/image/video.png",
      selectedIconPath: "/image/video.png",
      text: "视频"
    }, {
        pagePath: "/index/index3",
        iconPath: "/image/follow.png",
        selectedIconPath: "/image/follow.png",
        text: "关注"
      }, {
        pagePath: "/index/index4",
        iconPath: "/image/my.png",
        selectedIconPath: "/image/my.png",
        text: "我的"
      }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})