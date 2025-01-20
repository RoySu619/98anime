var AppService = function(exports, vue) {
  "use strict";
  const _style_0 = {};
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main = {
    data() {
      return {
        app_dowtm: 0,
        app_downstop: 0,
        //0开始计时 1 暂停计时器
        app_dowid: 0
        //队列中的ID
      };
    },
    onLaunch: function() {
      let thi = this;
      uni.navigateTo({
        url: "/pages/open/index",
        animationType: "zoom-fade-out",
        animationDuration: 200
      });
      uni.$on("updowzt", function(data) {
        clearInterval(thi.app_dowtm);
        thi.app_downstop = 1;
        const dowzttm = setTimeout(() => {
          thi.app_dowid = -1;
          thi.APP_dowtmgo(2);
          clearTimeout(dowzttm);
        }, 2e3);
      });
    },
    methods: {
      APP_dowtmgo(pd) {
        let thi = this;
        if (pd == 2) {
          thi.app_downstop = 0;
        }
        thi.app_dowtm = setInterval(() => {
          plus.sqlite.selectSql({
            //查询
            name: "dowlist",
            sql: 'select dow_url,dow_id from dowgmlist where dow_zt="0" limit 1',
            success: function(data) {
              if (data.length > 0) {
                thi.godow1(data[0].dow_id, data[0].dow_url);
              } else {
                plus.sqlite.executeSql({
                  name: "dowlist",
                  sql: "UPDATE dowgmlist set dow_zt='0' where dow_zt='97'",
                  success: function(e) {
                  }
                });
              }
            }
          });
        }, 4e3);
      },
      godow1(id, url) {
        let thi = this;
        if (thi.app_dowid != id) {
          thi.app_dowid = id;
          thi.godow2(id, url);
        }
      },
      godow2(gmid, gmurl) {
        let thi = this;
        var downloadTask = uni.downloadFile({
          url: gmurl,
          filePath: "gmdow",
          success: (res) => {
            if (res.statusCode === 200) {
              thi.app_dowid = 0;
              uni.saveFile({
                tempFilePath: res.tempFilePath,
                success: function(reb) {
                  var savedFilePath = reb.savedFilePath;
                  plus.sqlite.executeSql({
                    name: "dowlist",
                    sql: "UPDATE dowgmlist set dow_zt='66',dow_jd='100',dow_fd='" + savedFilePath + "' where dow_id='" + gmid + "'",
                    success: function(e) {
                    }
                  });
                  plus.runtime.install(savedFilePath, { force: true }, {}, function(error) {
                    uni.showToast({ icon: "none", title: "安装失败", mask: false, duration: 1500 });
                  });
                }
              });
            } else {
              plus.sqlite.executeSql({
                name: "dowlist",
                sql: "UPDATE dowgmlist set dow_zt='99' where dow_id='" + gmid + "'",
                success: function(e) {
                }
              });
            }
          }
        });
        downloadTask.onProgressUpdate((res) => {
          let isjd = Number(res.progress);
          let ismb = Number(res.totalBytesWritten);
          if (isjd != 100) {
            plus.sqlite.executeSql({
              name: "dowlist",
              sql: "UPDATE dowgmlist set dow_jd='" + isjd + "',dow_mb='" + ismb + "' where dow_id='" + gmid + "'",
              success: function(e) {
              }
            });
          }
          if (thi.app_downstop == 1) {
            downloadTask.abort();
          }
        });
      }
    },
    onShow: function() {
      let thi = this;
      plus.sqlite.openDatabase({
        name: "dowlist",
        path: "_doc/dowlist.db",
        success: function(e) {
          thi.APP_dowtmgo(1);
        },
        fail: function(e) {
          if (e.code == "-1402") {
            thi.APP_dowtmgo(1);
          }
        }
      });
    },
    onHide: function() {
      clearInterval(this.app_dowtm);
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/小熊秘宝/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
  exports.createApp = createApp;
  Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
  return exports;
}({}, Vue);
