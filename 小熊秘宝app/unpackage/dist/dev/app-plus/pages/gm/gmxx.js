"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // F:/360MoveData/Users/abc/Desktop/小熊秘宝/unpackage/dist/dev/.nvue/ip.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  var ip = "http://xxmbao.bacms.cn/";
  var appxx = uni.getWindowInfo();
  var appsys = uni.getDeviceInfo().deviceBrand;
  var appdvid = uni.getDeviceInfo().deviceId;
  var appname = uni.getAppBaseInfo().appName;
  var appV = uni.getAppBaseInfo().appVersionCode;
  var appVs = uni.getAppBaseInfo().appVersion;
  var issoso_zt = 0;
  var isgggd_zt = 0;
  var appw = Number(appxx.screenWidth);
  var appt = Number(appxx.statusBarHeight);
  var apph = Number(appxx.screenHeight);
  if (appxx.safeAreaInsets.bottom > 0) {
    uni.setStorageSync("appb", appxx.safeAreaInsets.bottom);
  }
  var appb = Number(uni.getStorageSync("appb")) ? Number(uni.getStorageSync("appb")) : 0;
  var appmain_h = apph - appt - appb;
  var G_APP = {
    ip,
    appsys,
    appdvid,
    appV,
    appVs,
    appname,
    appt,
    appb,
    appw,
    apph,
    appmain_h,
    issoso_zt,
    isgggd_zt
  };

  // F:/360MoveData/Users/abc/Desktop/小熊秘宝/unpackage/dist/dev/.nvue/pages/gm/gmxx.js
  var import_vue = __toESM(require_vue());
  var _style_0 = { "m": { "": { "width": "750rpx" } }, "m_t": { "": { "width": "750rpx", "paddingTop": "50rpx", "paddingRight": "30rpx", "paddingBottom": "50rpx", "paddingLeft": "30rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "flex-start", "alignItems": "center", "backgroundColor": "rgba(0,0,0,0.02)" } }, "m_t_l": { "": { "width": "120rpx", "height": "120rpx", "borderRadius": "20rpx" } }, "m_t_c": { "": { "paddingLeft": "20rpx", "width": "400rpx", "height": "120rpx" } }, "m_t_c_t1": { "": { "width": "400rpx", "height": "40rpx", "lineHeight": "40rpx", "lines": 1, "fontSize": "30rpx", "color": "rgba(0,0,0,1)", "fontWeight": "bold", "fontFamily": "iconfont" } }, "m_t_c_t2": { "": { "width": "400rpx", "lines": 1, "height": "40rpx", "lineHeight": "48rpx", "fontSize": "24rpx", "color": "rgba(0,0,0,0.5)", "fontFamily": "iconfont" } }, "m_t_c_t3": { "": { "width": "400rpx", "lines": 1, "height": "40rpx", "lineHeight": "40rpx", "fontSize": "24rpx", "color": "rgba(255,0,0,1)", "fontFamily": "iconfont" } }, "m_t_r": { "": { "width": "170rpx", "textAlign": "right", "height": "120rpx", "lineHeight": "200rpx", "fontSize": "24rpx", "color": "rgba(0,0,0,0.5)" } }, "cell": { "": { "width": "750rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx" } }, "cell_tp": { "": { "width": "750rpx", "paddingTop": "30rpx", "paddingBottom": "30rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center" } }, "cell_tps": { "": { "width": "230rpx", "height": "60rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "flex-start", "alignItems": "center" } }, "cell_tp_t": { "": { "width": "230rpx", "height": "50rpx", "lineHeight": "50rpx", "fontSize": "32rpx", "textAlign": "center" } }, "cell_tp_b": { "": { "width": "50rpx", "height": "10rpx", "backgroundColor": "#ffda08", "borderRadius": "5rpx" } }, "tit": { "": { "width": "690rpx", "height": "120rpx", "lineHeight": "120rpx", "fontSize": "30rpx", "textAlign": "center", "fontWeight": "bold" } }, "jj": { "": { "width": "690rpx", "lineHeight": "35rpx", "fontSize": "26rpx", "borderRadius": "10rpx", "color": "rgba(0,0,0,0.8)", "paddingBottom": "20rpx" } }, "cells": { "": { "width": "750rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "paddingTop": "50rpx" } }, "gmimg": { "": { "width": "690rpx", "height": "520rpx", "flexWrap": "wrap", "justifyContent": "flex-start", "alignItems": "flex-start" } }, "gmimg_i": { "": { "width": "300rpx", "height": "480rpx", "marginRight": "20rpx", "marginBottom": "20rpx", "borderRadius": "10rpx" } }, "lbli": { "": { "width": "690rpx", "marginBottom": "20rpx", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx", "borderRadius": "10rpx", "backgroundColor": "rgba(0,0,0,0.02)", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center" } }, "lbli_l": { "": { "width": "520rpx", "height": "120rpx" } }, "lbli_l_t1": { "": { "width": "520rpx", "height": "40rpx", "lineHeight": "40rpx", "fontSize": "30rpx" } }, "lbli_l_t2": { "": { "width": "520rpx", "height": "40rpx", "lineHeight": "40rpx", "fontSize": "24rpx", "lines": 1, "color": "rgba(0,0,0,0.6)" } }, "lbli_l_t3": { "": { "width": "520rpx", "height": "40rpx", "lineHeight": "40rpx", "fontSize": "24rpx", "color": "rgba(0,0,0,0.6)" } }, "lbli_r": { "": { "width": "100rpx", "height": "60rpx", "lineHeight": "60rpx", "fontSize": "26rpx", "textAlign": "center", "backgroundColor": "#ffda08", "borderRadius": "5rpx" } }, "neli": { "": { "width": "690rpx", "marginBottom": "20rpx", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx", "borderRadius": "10rpx", "backgroundColor": "rgba(0,0,0,0.02)" } }, "neli_t1": { "": { "width": "650rpx", "height": "50rpx", "lineHeight": "50rpx", "fontSize": "32rpx", "textAlign": "center" } }, "neli_t2": { "": { "width": "650rpx", "lines": 2, "fontSize": "26rpx", "color": "rgba(0,0,0,0.6)" } }, "neli_t3": { "": { "width": "650rpx", "height": "40rpx", "lineHeight": "40rpx", "textAlign": "center", "fontSize": "26rpx", "color": "rgba(0,0,0,0.6)" } }, "dow": { "": { "width": "750rpx", "height": 60, "backgroundColor": "#ffffff", "justifyContent": "center", "alignItems": "center", "position": "relative" } }, "dow_an": { "": { "width": "690rpx", "height": "80rpx", "lineHeight": "80rpx", "color": "#000000", "textAlign": "center", "fontSize": "30rpx", "position": "absolute", "left": "30rpx", "top": "20rpx", "zIndex": 2, "backgroundColor": "rgba(0,0,0,0.02)", "borderRadius": "40rpx" } }, "dow_bg": { "": { "backgroundColor": "rgba(255,218,8,1)", "borderRadius": "40rpx", "position": "absolute", "left": "30rpx", "top": "20rpx", "width": "0rpx", "height": "80rpx", "zIndex": 1 } }, "cell_qun": { "": { "width": "750rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "paddingTop": "30rpx", "height": "130rpx" } }, "cell_quns": { "": { "width": "690rpx", "height": "100rpx", "borderWidth": "0.5rpx", "borderStyle": "solid", "borderColor": "#ffda08", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "center", "borderRadius": "10rpx", "backgroundColor": "rgba(255,218,8,0.1)" } }, "cell_qun_l": { "": { "width": "500rpx", "height": "100rpx" } }, "cell_qun_l_t": { "": { "fontSize": "30rpx", "width": "520rpx", "height": "55rpx", "lineHeight": "60rpx" } }, "cell_qun_l_b": { "": { "fontSize": "24rpx", "width": "520rpx", "height": "35rpx", "lineHeight": "35rpx", "fontFamily": "iconfont", "color": "rgba(0,0,0,0.5)" } }, "cell_qun_r": { "": { "width": "140rpx", "textAlign": "center", "height": "60rpx", "lineHeight": "60rpx", "fontSize": "24rpx", "color": "#000000", "backgroundColor": "#ffda08", "borderRadius": "10rpx" } }, "nodata": { "": { "width": "750rpx", "height": "600rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "center" } }, "nodata_i": { "": { "width": "400rpx", "height": "300rpx" } } };
  var _sfc_main = {
    data() {
      return {
        ip: G_APP.ip,
        appb: G_APP.appb,
        id: "",
        tabid: 1,
        gmlogo: "",
        gmname: "",
        gmdow: 0,
        gmpf: 3,
        gmbq: "",
        gmmb: "",
        gmqun: "",
        gmimg: [],
        gmjj: "",
        gmjs: "",
        gmurl: "",
        lblist: [],
        nelist: [],
        nepag: 0,
        nezpag: 1,
        aurl: "",
        iurl: "",
        urlpd: 0,
        //---------//
        gmfd: "",
        dowtm: 0,
        dowjd: 0,
        dowbg: 690,
        dowzttis: "\u4E0B\u8F7D\u6E38\u620F",
        dowzt: 0
        //0未下载 1准备下载 2 正在下载 99下载失败 98暂停下载 97继续下载 66 下载完成
      };
    },
    onLoad(option) {
      this.id = option.id;
    },
    onReady() {
      this.get();
    },
    methods: {
      oplbxx(id) {
        uni.navigateTo({
          url: "../libao/lb?id=" + id
        });
      },
      opzxxx(id) {
        uni.navigateTo({
          url: "../../pages/gm/newsxx?id=" + id
        });
      },
      opqun() {
        if (this.gmqun) {
          let url = "mqqapi://card/show_pslcard?src_type=internal&version=1&uin=" + this.gmqun + "&card_type=group&source=qrcode";
          plus.runtime.openURL(url, function(res) {
          });
        } else {
          uni.showToast({
            icon: "none",
            title: " \u6E38\u620F\u7FA4\u8FD8\u672A\u521B\u5EFA\uFF0C\u8BF7\u8054\u7CFB\u5BA2\u670D ",
            duration: 2e3
          });
        }
      },
      gotodow() {
        let thi = this;
        if (thi.appsys == "apple") {
          if (thi.iurl) {
            plus.runtime.openURL(thi.iurl, function(res) {
            });
          } else {
            uni.showToast({
              icon: "none",
              title: " \u4E0B\u8F7D\u94FE\u63A5\u5931\u6548\u4E86 ",
              duration: 2e3
            });
          }
        } else {
          if (thi.aurl) {
            if (thi.urlpd == 0) {
              if (thi.dowzt == 66) {
                plus.runtime.install(thi.gmfd, { force: true }, {}, function(error) {
                  uni.showToast({ icon: "none", title: "\u5B89\u88C5\u5931\u8D25", mask: false, duration: 1500 });
                });
              }
              if (thi.dowzt == 0) {
                plus.sqlite.executeSql({
                  name: "dowlist",
                  sql: 'create table if not exists dowgmlist("dow_id" INT(11),"dow_zt" INT(1),"dow_name" VARCHAR(30),"dow_jd" INT(11),"dow_mb" VARCHAR(20),"dow_fd" VARCHAR(100),"dow_url" VARCHAR(300))',
                  success: function(e) {
                    plus.sqlite.executeSql({
                      name: "dowlist",
                      sql: "insert into dowgmlist values('" + thi.id + "','0','" + thi.gmname + "','0','0','0','" + thi.aurl + "')",
                      //状态1是正在下载 0未下载，66完成
                      success: function(e2) {
                        thi.dowzttis = "\u83B7\u53D6\u4E0B\u8F7D\u4E2D....";
                        thi.dowzt = 1;
                        thi.dowbg = 0;
                        thi.gotodowtm();
                      }
                    });
                  }
                });
              }
              if (thi.dowzt == 1 || thi.dowzt == 2) {
                plus.sqlite.executeSql({
                  name: "dowlist",
                  sql: "UPDATE dowgmlist set dow_zt='98' where dow_id='" + thi.id + "'",
                  success: function(e) {
                    clearInterval(thi.dowtm);
                    thi.dowzttis = "\u5DF2\u6682\u505C\u4E0B\u8F7D";
                    thi.dowzt = 4;
                    uni.$emit("updowzt", { msg: "\u6682\u505C\u6E38\u620FID" + thi.id });
                  }
                });
              }
              if (thi.dowzt == 98) {
                clearInterval(thi.dowtm);
                plus.sqlite.executeSql({
                  name: "dowlist",
                  sql: "UPDATE dowgmlist set dow_zt='97' where dow_id='" + thi.id + "'",
                  success: function(e) {
                    thi.dowzt = 1;
                    thi.dowzttis = "\u6B63\u5728\u6062\u590D\u4E0B\u8F7D";
                    thi.gotodowtm();
                  }
                });
              }
            } else {
              plus.runtime.openURL(thi.aurl, function(res) {
              });
            }
          } else {
            uni.showToast({
              icon: "none",
              title: " \u4E0B\u8F7D\u94FE\u63A5\u5931\u6548\u4E86 ",
              duration: 2e3
            });
          }
        }
      },
      gotodowtm() {
        let thi = this;
        thi.dowtm = setInterval(() => {
          plus.sqlite.selectSql({
            name: "dowlist",
            sql: "select dow_jd,dow_zt from dowgmlist where dow_id=" + thi.id,
            success: function(data) {
              if (data[0].dow_jd == 100) {
                thi.dowjd = 690;
                thi.dowbg = 690;
                thi.dowzt = 66;
                thi.dowzttis = "\u5B89\u88C5\u6E38\u620F";
                clearInterval(thi.dowtm);
              } else {
                if (data[0].dow_jd == 0) {
                  thi.dowzttis = "\u5DF2\u52A0\u5165\u4E0B\u8F7D\u961F\u5217\uFF0C\u8BF7\u7A0D\u540E....";
                } else {
                  thi.dowjd = data[0].dow_jd;
                  thi.dowzttis = data[0].dow_jd + "%";
                  thi.dowbg = data[0].dow_jd * 6.9;
                }
              }
            }
          });
        }, 1e3);
      },
      settab(id) {
        if (this.tabid != id) {
          this.tabid = id;
        }
        if (this.lblist.length == 0 && id == 2) {
          this.getlb();
        }
        if (this.nelist.length == 0 && id == 3) {
          this.getne(1);
        }
      },
      moerdata() {
        this.getne(2);
      },
      getne(pd) {
        let thi = this;
        let npag = Number(thi.nepag) + 1;
        thi.nepag = npag;
        if (npag <= thi.nezpag) {
          uni.request({
            url: G_APP.ip + "appapi.php?to=gmxx&op=gmxx_zx",
            method: "GET",
            dataType: "json",
            enableCache: true,
            //缓存
            defer: true,
            //控制当前请求是否延时至首屏内容渲染后发送
            data: {
              id: thi.id,
              pages: npag
            },
            success: (ret) => {
              thi.nezpag = ret.data.pagenum;
              if (ret.data.nelist) {
                if (pd == 1) {
                  thi.nelist = ret.data.nelist;
                }
                if (pd == 2) {
                  thi.nelist = thi.nelist.concat(ret.data.nelist);
                }
              }
            }
          });
        }
      },
      getlb() {
        let thi = this;
        uni.request({
          url: G_APP.ip + "appapi.php?to=gmxx&op=gmxx_lb",
          method: "GET",
          dataType: "json",
          enableCache: true,
          //缓存
          defer: true,
          //控制当前请求是否延时至首屏内容渲染后发送
          data: {
            id: thi.id
          },
          success: (ret) => {
            if (ret.data.lblist) {
              thi.lblist = ret.data.lblist;
            }
          }
        });
      },
      get() {
        let thi = this;
        uni.request({
          url: G_APP.ip + "appapi.php?to=gmxx",
          method: "GET",
          dataType: "json",
          enableCache: true,
          //缓存
          defer: true,
          //控制当前请求是否延时至首屏内容渲染后发送
          data: {
            id: thi.id
          },
          success: (ret) => {
            if (ret.data.gm[0]) {
              thi.gmlogo = thi.ip + ret.data.gm[0].gmlogo;
              thi.gmname = ret.data.gm[0].gmname;
              thi.gmjj = ret.data.gm[0].gmjj;
              thi.gmjs = ret.data.gm[0].gmjs;
              thi.gmbq = ret.data.gm[0].gmbq;
              thi.gmqun = ret.data.gm[0].qun;
              let downum = Number(ret.data.gm[0].gmdow);
              if (downum > 9999) {
                let num1 = downum / 1e4;
                let num2 = num1.toFixed(2);
                thi.gmdow = num2 + "\u4E07";
              } else {
                thi.gmdow = downum;
              }
              let mgnum = Number(ret.data.gm[0].gmmb);
              if (mgnum > 1024) {
                let num1 = mgnum / 1024;
                let num2 = num1.toFixed(2);
                thi.gmmb = num2 + "G";
              } else {
                thi.gmmb = mgnum + "M";
              }
              if (ret.data.gm[0].gmpf < 1.99) {
                thi.gmpf = "1";
              }
              if (ret.data.gm[0].gmpf < 2.99 && ret.data.gm[0].gmpf > 1.99) {
                thi.gmpf = "2";
              }
              if (ret.data.gm[0].gmpf < 3.99 && ret.data.gm[0].gmpf > 2.99) {
                thi.gmpf = "3";
              }
              if (ret.data.gm[0].gmpf < 4.5 && ret.data.gm[0].gmpf > 3.99) {
                thi.gmpf = "4";
              }
              if (ret.data.gm[0].gmpf > 4.5) {
                thi.gmpf = "5";
              }
              thi.gmimg = ret.data.img;
              thi.aurl = ret.data.gm[0].Android;
              thi.iurl = ret.data.gm[0].ios;
              thi.urlpd = ret.data.gm[0].urlpd;
            }
          }
        });
      }
    },
    onShow() {
      let thi = this;
      plus.sqlite.selectSql({
        name: "dowlist",
        sql: "select dow_jd,dow_zt,dow_fd from dowgmlist where dow_id=" + thi.id,
        success: function(data) {
          if (data.length > 0) {
            if (data[0].dow_zt == 66) {
              thi.gmfd = data[0].dow_fd;
              thi.dowzt = 66;
              thi.dowzttis = "\u5B89\u88C5\u6E38\u620F";
            } else {
              if (data[0].dow_zt == 0) {
                if (data[0].dow_jd == 0) {
                  thi.dowzttis = "\u5DF2\u52A0\u5165\u4E0B\u8F7D\u961F\u5217\uFF0C\u8BF7\u7A0D\u540E....";
                  thi.gotodowtm(2);
                } else {
                  thi.dowjd = data[0].dow_jd;
                  thi.dowzttis = data[0].dow_jd + "%";
                  thi.dowzt = 1;
                  thi.dowbg = data[0].dow_jd * 6.9;
                  thi.gotodowtm(2);
                }
              }
              if (data[0].dow_zt == 98) {
                thi.dowzttis = "\u7EE7\u7EED\u4E0B\u8F7D";
                thi.dowzt = 98;
                thi.dowjd = data[0].dow_jd;
                thi.dowbg = data[0].dow_jd * 6.9;
              }
            }
          }
        }
      });
    },
    onHide() {
      clearInterval(this.dowtm);
    },
    onNavigationBarButtonTap(e) {
      if (e.index == 0) {
        uni.navigateTo({
          url: "../../pages/user/dow"
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", null, [
      (0, import_vue.createElementVNode)(
        "list",
        {
          class: "m",
          onLoadmore: _cache[4] || (_cache[4] = (...args) => $options.moerdata && $options.moerdata(...args))
        },
        [
          (0, import_vue.createElementVNode)("cell", { class: "m_t" }, [
            (0, import_vue.createElementVNode)("u-image", {
              class: "m_t_l",
              src: $data.gmlogo
            }, null, 8, ["src"]),
            (0, import_vue.createElementVNode)("view", {
              class: "m_t_c",
              renderWhole: true
            }, [
              (0, import_vue.createElementVNode)(
                "u-text",
                { class: "m_t_c_t1" },
                (0, import_vue.toDisplayString)($data.gmname),
                1
                /* TEXT */
              ),
              (0, import_vue.createElementVNode)(
                "u-text",
                { class: "m_t_c_t2" },
                (0, import_vue.toDisplayString)($data.gmbq) + " . " + (0, import_vue.toDisplayString)($data.gmmb),
                1
                /* TEXT */
              ),
              $data.gmpf == "1" ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                "u-text",
                {
                  key: 0,
                  class: "m_t_c_t3"
                },
                "\uE86A " + (0, import_vue.toDisplayString)($data.gmpf) + "\u5206",
                1
                /* TEXT */
              )) : (0, import_vue.createCommentVNode)("v-if", true),
              $data.gmpf == "2" ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                "u-text",
                {
                  key: 1,
                  class: "m_t_c_t3"
                },
                "\uE86A \uE86A " + (0, import_vue.toDisplayString)($data.gmpf) + "\u5206",
                1
                /* TEXT */
              )) : (0, import_vue.createCommentVNode)("v-if", true),
              $data.gmpf == "3" ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                "u-text",
                {
                  key: 2,
                  class: "m_t_c_t3"
                },
                "\uE86A \uE86A \uE86A " + (0, import_vue.toDisplayString)($data.gmpf) + "\u5206",
                1
                /* TEXT */
              )) : (0, import_vue.createCommentVNode)("v-if", true),
              $data.gmpf == "4" ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                "u-text",
                {
                  key: 3,
                  class: "m_t_c_t3"
                },
                "\uE86A \uE86A \uE86A \uE86A " + (0, import_vue.toDisplayString)($data.gmpf) + "\u5206",
                1
                /* TEXT */
              )) : (0, import_vue.createCommentVNode)("v-if", true),
              $data.gmpf == "5" ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                "u-text",
                {
                  key: 4,
                  class: "m_t_c_t3"
                },
                "\uE86A \uE86A \uE86A \uE86A \uE86A " + (0, import_vue.toDisplayString)($data.gmpf) + "\u5206",
                1
                /* TEXT */
              )) : (0, import_vue.createCommentVNode)("v-if", true)
            ]),
            (0, import_vue.createElementVNode)(
              "u-text",
              { class: "m_t_r" },
              (0, import_vue.toDisplayString)($data.gmdow) + "\u6B21\u4E0B\u8F7D",
              1
              /* TEXT */
            )
          ]),
          $data.gmqun ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cell", {
            key: 0,
            class: "cell_qun",
            renderWhole: true
          }, [
            (0, import_vue.createElementVNode)("view", {
              class: "cell_quns",
              renderWhole: true
            }, [
              (0, import_vue.createElementVNode)("view", {
                class: "cell_qun_l",
                renderWhole: true
              }, [
                (0, import_vue.createElementVNode)(
                  "u-text",
                  { class: "cell_qun_l_t" },
                  "\u5DF2\u6709" + (0, import_vue.toDisplayString)($data.gmdow) + "\u4EBA\u5728\u73A9",
                  1
                  /* TEXT */
                ),
                (0, import_vue.createElementVNode)("u-text", { class: "cell_qun_l_b" }, "\uE7AE \u52A0\u5165\u73A9\u5BB6\u4EA4\u6D41\u7FA4,\u627E\u5230\u66F4\u591A\u5FD7\u540C\u9053\u5408\u7684\u597D\u53CB.")
              ]),
              (0, import_vue.createElementVNode)("u-text", {
                class: "cell_qun_r",
                onClick: _cache[0] || (_cache[0] = (...args) => $options.opqun && $options.opqun(...args))
              }, "\u4E00\u952E\u52A0\u7FA4")
            ])
          ])) : (0, import_vue.createCommentVNode)("v-if", true),
          (0, import_vue.createElementVNode)("cell", { class: "cell_tp" }, [
            (0, import_vue.createElementVNode)("view", {
              class: "cell_tps",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.settab(1)),
              renderWhole: true
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "cell_tp_t" }, "\u8BE6\u7EC6"),
              $data.tabid == 1 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-text", {
                key: 0,
                class: "cell_tp_b"
              })) : (0, import_vue.createCommentVNode)("v-if", true)
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "cell_tps",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.settab(2)),
              renderWhole: true
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "cell_tp_t" }, "\u793C\u5305"),
              $data.tabid == 2 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-text", {
                key: 0,
                class: "cell_tp_b"
              })) : (0, import_vue.createCommentVNode)("v-if", true)
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "cell_tps",
              onClick: _cache[3] || (_cache[3] = ($event) => $options.settab(3)),
              renderWhole: true
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "cell_tp_t" }, "\u653B\u7565"),
              $data.tabid == 3 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-text", {
                key: 0,
                class: "cell_tp_b"
              })) : (0, import_vue.createCommentVNode)("v-if", true)
            ])
          ]),
          $data.tabid == 1 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cell", {
            key: 1,
            class: "cell"
          }, [
            (0, import_vue.createElementVNode)("scroll-view", {
              renderWhole: true,
              class: "gmimg",
              scrollX: "true",
              showScrollbar: "false"
            }, [
              ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                import_vue.Fragment,
                null,
                (0, import_vue.renderList)($data.gmimg, (item, index) => {
                  return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-image", {
                    class: "gmimg_i",
                    mode: "heightFix",
                    key: index,
                    src: $data.ip + item.imgs
                  }, null, 8, ["src"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            (0, import_vue.createElementVNode)(
              "u-text",
              { class: "jj" },
              (0, import_vue.toDisplayString)($data.gmjj),
              1
              /* TEXT */
            ),
            (0, import_vue.createElementVNode)("u-text", { class: "tit" }, "-- \u6E38\u620F\u4ECB\u7ECD --"),
            (0, import_vue.createElementVNode)(
              "u-text",
              { class: "jj" },
              (0, import_vue.toDisplayString)($data.gmjs),
              1
              /* TEXT */
            )
          ])) : (0, import_vue.createCommentVNode)("v-if", true),
          $data.tabid == 2 && $data.lblist ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cell", {
            key: 2,
            class: "cell"
          }, [
            ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
              import_vue.Fragment,
              null,
              (0, import_vue.renderList)($data.lblist, (item, index) => {
                return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                  class: "lbli",
                  onClick: ($event) => $options.oplbxx(item.id),
                  key: item.id,
                  renderWhole: true
                }, [
                  (0, import_vue.createElementVNode)("view", {
                    class: "lbli_l",
                    renderWhole: true
                  }, [
                    (0, import_vue.createElementVNode)(
                      "u-text",
                      { class: "lbli_l_t1" },
                      (0, import_vue.toDisplayString)(item.lbname),
                      1
                      /* TEXT */
                    ),
                    (0, import_vue.createElementVNode)(
                      "u-text",
                      { class: "lbli_l_t2" },
                      (0, import_vue.toDisplayString)(item.lbjj),
                      1
                      /* TEXT */
                    ),
                    (0, import_vue.createElementVNode)(
                      "u-text",
                      { class: "lbli_l_t3" },
                      "\u5269\u4F59\uFF1A" + (0, import_vue.toDisplayString)(item.lbsy) + "\u679A",
                      1
                      /* TEXT */
                    )
                  ]),
                  (0, import_vue.createElementVNode)("u-text", { class: "lbli_r" }, "\u9886\u53D6")
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : (0, import_vue.createCommentVNode)("v-if", true),
          $data.tabid == 2 && $data.lblist == "" ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cell", {
            key: 3,
            class: "nodata",
            renderWhole: true
          }, [
            (0, import_vue.createElementVNode)("u-image", {
              class: "nodata_i",
              src: "/static/nodata.png"
            })
          ])) : (0, import_vue.createCommentVNode)("v-if", true),
          $data.tabid == 3 && $data.nelist ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cell", {
            key: 4,
            class: "cell"
          }, [
            ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
              import_vue.Fragment,
              null,
              (0, import_vue.renderList)($data.nelist, (item, index) => {
                return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                  class: "neli",
                  onClick: ($event) => $options.opzxxx(item.id),
                  key: item.id,
                  renderWhole: true
                }, [
                  (0, import_vue.createElementVNode)(
                    "u-text",
                    { class: "neli_t1" },
                    (0, import_vue.toDisplayString)(item.zxname),
                    1
                    /* TEXT */
                  ),
                  (0, import_vue.createElementVNode)(
                    "u-text",
                    { class: "neli_t2" },
                    (0, import_vue.toDisplayString)(item.zxjj),
                    1
                    /* TEXT */
                  ),
                  (0, import_vue.createElementVNode)(
                    "u-text",
                    { class: "neli_t3" },
                    (0, import_vue.toDisplayString)(item.times),
                    1
                    /* TEXT */
                  )
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : (0, import_vue.createCommentVNode)("v-if", true),
          $data.tabid == 3 && $data.nelist == "" ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cell", {
            key: 5,
            class: "nodata"
          }, [
            (0, import_vue.createElementVNode)("u-image", {
              class: "nodata_i",
              src: "/static/nodata.png"
            })
          ])) : (0, import_vue.createCommentVNode)("v-if", true)
        ],
        32
        /* HYDRATE_EVENTS */
      ),
      (0, import_vue.createElementVNode)(
        "view",
        {
          class: "dow",
          style: (0, import_vue.normalizeStyle)("height:" + ($data.appb + 60) + "px"),
          onClick: _cache[5] || (_cache[5] = (...args) => $options.gotodow && $options.gotodow(...args)),
          renderWhole: true
        },
        [
          (0, import_vue.createElementVNode)(
            "u-text",
            {
              class: "dow_bg",
              style: (0, import_vue.normalizeStyle)("width:" + $data.dowbg + "rpx;")
            },
            null,
            4
            /* STYLE */
          ),
          (0, import_vue.createElementVNode)(
            "u-text",
            { class: "dow_an" },
            (0, import_vue.toDisplayString)($data.dowzttis),
            1
            /* TEXT */
          )
        ],
        4
        /* STYLE */
      )
    ]);
  }
  var gmxx = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/\u5C0F\u718A\u79D8\u5B9D/pages/gm/gmxx.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/gm/gmxx";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    gmxx.mpType = "page";
    const app = Vue.createPageApp(gmxx, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...gmxx.styles || []]));
    app.mount("#root");
  }
})();
