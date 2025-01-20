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

  // F:/360MoveData/Users/abc/Desktop/小熊秘宝/unpackage/dist/dev/.nvue/pages/index/tab4.js
  var import_vue = __toESM(require_vue());
  var _style_0 = { "nodata": { "": { "width": "750rpx", "height": "600rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "center" } }, "nodata_i": { "": { "width": "400rpx", "height": "300rpx" } }, "top": { "": { "width": "750rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "paddingTop": "180rpx", "paddingBottom": "50rpx", "backgroundColor": "#ffda08", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center" } }, "top_l": { "": { "width": "120rpx", "height": "120rpx", "backgroundColor": "#ffffff", "paddingTop": "5rpx", "paddingRight": "5rpx", "paddingBottom": "5rpx", "paddingLeft": "5rpx", "borderRadius": "70rpx" } }, "top_c": { "": { "width": "400rpx", "height": "120rpx" } }, "top_c_t": { "": { "width": "400rpx", "height": "60rpx", "lineHeight": "60rpx", "textAlign": "left", "fontSize": "30rpx" } }, "top_c_b": { "": { "width": "400rpx", "height": "60rpx", "textAlign": "left", "lineHeight": "60rpx", "fontSize": "26rpx", "color": "rgba(0,0,0,0.5)" } }, "top_r": { "": { "textAlign": "center", "fontSize": "50rpx", "width": "100rpx", "lineHeight": "100rpx", "height": "120rpx", "fontFamily": "iconfont" } }, "li": { "": { "width": "750rpx", "paddingTop": "15rpx", "height": "130rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "borderBottomWidth": "0.5rpx", "borderBottomStyle": "solid", "borderBottomColor": "rgba(0,0,0,0.05)" } }, "lis": { "": { "width": "690rpx", "height": "100rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center" } }, "lis_l": { "": { "width": "60rpx", "height": "60rpx" } }, "lis_c": { "": { "width": "380rpx", "height": "100rpx", "lineHeight": "100rpx", "textAlign": "left", "fontSize": "32rpx", "fontWeight": "bold" } }, "lis_r": { "": { "width": "220rpx", "textAlign": "right", "height": "100rpx", "lineHeight": "100rpx", "fontSize": "24rpx", "fontFamily": "iconfont", "color": "rgba(0,0,0,0.5)" } }, "tis": { "": { "width": "750rpx", "height": "150rpx" } }, "tis_t": { "": { "width": "750rpx", "paddingTop": "30rpx", "textAlign": "center", "height": "150rpx", "lineHeight": "35rpx", "fontSize": "24rpx", "color": "rgba(0,0,0,0.5)" } } };
  var _sfc_main = {
    data() {
      return {
        ip: G_APP.ip,
        appv: G_APP.appVs,
        appt: G_APP.appt,
        appb: G_APP.appb,
        ulogo: "../../static/uslogo.png",
        uid: "0000",
        unick: "\u767B\u9646\u9886\u53D6\u4E13\u5C5E\u793C\u5305"
      };
    },
    onReady() {
      this.get();
    },
    onShow() {
      uni.$off("login");
    },
    onHide() {
      let thi = this;
      uni.$on("login", function(data) {
        thi.get();
      });
    },
    methods: {
      opllq(pd) {
        if (pd == 1) {
          uni.navigateTo({
            url: "../../pages/llq/index?url=yszc&tit=\u9690\u79C1\u653F\u7B56&pd=1"
          });
        }
        if (pd == 2) {
          uni.navigateTo({
            url: "../../pages/llq/index?url=fwxy&tit=\u670D\u52A1\u534F\u8BAE&pd=1"
          });
        }
      },
      opdow() {
        uni.navigateTo({
          url: "../user/dow"
        });
      },
      opmsg() {
        if (this.uid > 0) {
          uni.navigateTo({
            url: "../user/msg"
          });
        } else {
          uni.navigateTo({
            url: "../login/login"
          });
        }
      },
      oplb() {
        if (this.uid > 0) {
          uni.navigateTo({
            url: "../user/ckx"
          });
        } else {
          uni.navigateTo({
            url: "../login/login"
          });
        }
      },
      opkf() {
        if (this.uid > 0) {
          uni.navigateTo({
            url: "../user/kf"
          });
        } else {
          uni.navigateTo({
            url: "../login/login"
          });
        }
      },
      opset() {
        if (this.uid > 0) {
          uni.navigateTo({
            url: "../user/set"
          });
        } else {
          uni.navigateTo({
            url: "../login/login"
          });
        }
      },
      get() {
        let thi = this;
        uni.request({
          url: G_APP.ip + "appapi.php?to=user",
          method: "GET",
          dataType: "json",
          enableCache: true,
          //缓存
          defer: true,
          //控制当前请求是否延时至首屏内容渲染后发送
          data: {
            "myusapp": "go"
          },
          success: (ret) => {
            uni.stopPullDownRefresh();
            if (ret.data.msg == "yes") {
              let data = {
                "uid": ret.data.id,
                "unick": ret.data.unick,
                "ulogo": thi.ip + ret.data.ulogo
              };
              uni.setStorageSync("user", data);
              if (ret.data.ulogo) {
                thi.ulogo = thi.ip + ret.data.ulogo;
              }
              if (ret.data.unick) {
                thi.unick = ret.data.unick;
              }
              if (ret.data.id) {
                thi.uid = ret.data.id;
              }
            } else {
              let data = {
                "uid": "0",
                "unick": "",
                "ulogo": "../../static/uslogo.png"
              };
              uni.setStorageSync("user", data);
              thi.ulogo = "../../static/uslogo.png";
              thi.unick = "\u767B\u9646\u9886\u53D6\u4E13\u5C5E\u793C\u5305";
              thi.uid = "0000";
            }
          }
        });
      }
    },
    onPullDownRefresh() {
      this.get();
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("list", null, [
      (0, import_vue.createElementVNode)("cell", {
        class: "top",
        renderWhole: true
      }, [
        (0, import_vue.createElementVNode)("u-image", {
          class: "top_l",
          src: $data.ulogo,
          onClick: _cache[0] || (_cache[0] = (...args) => $options.opset && $options.opset(...args))
        }, null, 8, ["src"]),
        (0, import_vue.createElementVNode)("view", {
          class: "top_c",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.opset && $options.opset(...args)),
          renderWhole: true
        }, [
          (0, import_vue.createElementVNode)(
            "u-text",
            { class: "top_c_t" },
            (0, import_vue.toDisplayString)($data.unick),
            1
            /* TEXT */
          ),
          (0, import_vue.createElementVNode)(
            "u-text",
            { class: "top_c_b" },
            "ID: " + (0, import_vue.toDisplayString)($data.uid),
            1
            /* TEXT */
          )
        ]),
        (0, import_vue.createElementVNode)("u-text", {
          class: "top_r",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.opset && $options.opset(...args))
        }, "\uE78E")
      ]),
      (0, import_vue.createElementVNode)("cell", {
        class: "li",
        onClick: _cache[3] || (_cache[3] = (...args) => $options.opmsg && $options.opmsg(...args))
      }, [
        (0, import_vue.createElementVNode)("view", {
          class: "lis",
          renderWhole: true
        }, [
          (0, import_vue.createElementVNode)("u-image", {
            class: "lis_l",
            src: "/static/us_msg.png"
          }),
          (0, import_vue.createElementVNode)("u-text", { class: "lis_c" }, "\u6211\u7684\u6D88\u606F"),
          (0, import_vue.createElementVNode)("u-text", { class: "lis_r" }, "\u5B98\u65B9\u516C\u544A\u6D3B\u52A8 \uE630")
        ])
      ]),
      (0, import_vue.createElementVNode)("cell", {
        class: "li",
        onClick: _cache[4] || (_cache[4] = (...args) => $options.oplb && $options.oplb(...args))
      }, [
        (0, import_vue.createElementVNode)("view", {
          class: "lis",
          renderWhole: true
        }, [
          (0, import_vue.createElementVNode)("u-image", {
            class: "lis_l",
            src: "/static/us_libao.png"
          }),
          (0, import_vue.createElementVNode)("u-text", { class: "lis_c" }, "\u6211\u7684\u793C\u5305"),
          (0, import_vue.createElementVNode)("u-text", { class: "lis_r" }, "\u9886\u53D6\u793C\u5305\u8BB0\u5F55 \uE630")
        ])
      ]),
      (0, import_vue.createElementVNode)("cell", {
        class: "li",
        onClick: _cache[5] || (_cache[5] = (...args) => $options.opdow && $options.opdow(...args))
      }, [
        (0, import_vue.createElementVNode)("view", {
          class: "lis",
          renderWhole: true
        }, [
          (0, import_vue.createElementVNode)("u-image", {
            class: "lis_l",
            src: "/static/us_dow.png"
          }),
          (0, import_vue.createElementVNode)("u-text", { class: "lis_c" }, "\u4E0B\u8F7D\u7BA1\u7406"),
          (0, import_vue.createElementVNode)("u-text", { class: "lis_r" }, "\u6E38\u620F\u5B89\u88C5\u5305\u7BA1\u7406 \uE630")
        ])
      ]),
      (0, import_vue.createElementVNode)("cell", {
        class: "li",
        onClick: _cache[6] || (_cache[6] = (...args) => $options.opkf && $options.opkf(...args))
      }, [
        (0, import_vue.createElementVNode)("view", {
          class: "lis",
          renderWhole: true
        }, [
          (0, import_vue.createElementVNode)("u-image", {
            class: "lis_l",
            src: "/static/us_kf.png"
          }),
          (0, import_vue.createElementVNode)("u-text", { class: "lis_c" }, "\u5BA2\u670D\u4E2D\u5FC3"),
          (0, import_vue.createElementVNode)("u-text", { class: "lis_r" }, "\u5B98\u65B9\u552F\u4E00\u5BA2\u670D \uE630")
        ])
      ]),
      (0, import_vue.createElementVNode)("cell", {
        class: "li",
        onClick: _cache[7] || (_cache[7] = ($event) => $options.opllq(1))
      }, [
        (0, import_vue.createElementVNode)("view", {
          class: "lis",
          renderWhole: true
        }, [
          (0, import_vue.createElementVNode)("u-image", {
            class: "lis_l",
            src: "/static/us_yhxy.png"
          }),
          (0, import_vue.createElementVNode)("u-text", { class: "lis_c" }, "\u9690\u79C1\u653F\u7B56"),
          (0, import_vue.createElementVNode)("u-text", { class: "lis_r" }, "\uE630")
        ])
      ]),
      (0, import_vue.createElementVNode)("cell", {
        class: "li",
        onClick: _cache[8] || (_cache[8] = ($event) => $options.opllq(2))
      }, [
        (0, import_vue.createElementVNode)("view", {
          class: "lis",
          renderWhole: true
        }, [
          (0, import_vue.createElementVNode)("u-image", {
            class: "lis_l",
            src: "/static/us_fwxy.png"
          }),
          (0, import_vue.createElementVNode)("u-text", { class: "lis_c" }, "\u670D\u52A1\u534F\u8BAE"),
          (0, import_vue.createElementVNode)("u-text", { class: "lis_r" }, "\uE630")
        ])
      ]),
      (0, import_vue.createElementVNode)("cell", { class: "tis" }, [
        (0, import_vue.createElementVNode)(
          "u-text",
          { class: "tis_t" },
          "\u6D77\u53E3\u9F99\u534E\u8302\u7EC5\u4F18\u9009\u8D38\u6613\u5546\u884C\u7248\u6743\u6240\u6709\n\u5F53\u524DAPP\u7248\u672C\uFF1Av" + (0, import_vue.toDisplayString)($data.appv),
          1
          /* TEXT */
        )
      ])
    ]);
  }
  var tab4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/\u5C0F\u718A\u79D8\u5B9D/pages/index/tab4.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/index/tab4";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    tab4.mpType = "page";
    const app = Vue.createPageApp(tab4, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...tab4.styles || []]));
    app.mount("#root");
  }
})();
