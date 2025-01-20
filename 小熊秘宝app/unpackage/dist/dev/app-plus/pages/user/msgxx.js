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

  // F:/360MoveData/Users/abc/Desktop/小熊秘宝/unpackage/dist/dev/.nvue/pages/user/msgxx.js
  var import_vue = __toESM(require_vue());
  var _style_0 = { "m": { "": { "width": "750rpx" } }, "tit": { "": { "width": "750rpx", "lineHeight": "30rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "lines": 2, "fontSize": "30rpx", "textAlign": "center", "paddingTop": "30rpx" } }, "tm": { "": { "color": "rgba(0,0,0,0.3)", "width": "750rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "lines": 1, "height": "80rpx", "lineHeight": "80rpx", "fontSize": "26rpx", "textAlign": "center", "borderBottomWidth": "0.5rpx", "borderBottomStyle": "solid", "borderBottomColor": "rgba(0,0,0,0.05)" } }, "nr": { "": { "paddingLeft": "30rpx", "paddingRight": "30rpx", "fontSize": "30rpx", "lineHeight": "40rpx", "paddingTop": "30rpx", "backgroundColor": "#ffffff" } } };
  var _sfc_main = {
    data() {
      return {
        id: "0",
        tit: "",
        tm: "",
        nr: ""
      };
    },
    onLoad(obj) {
      this.id = obj.id;
    },
    onReady() {
      this.get();
    },
    methods: {
      get() {
        let thi = this;
        uni.request({
          url: G_APP.ip + "appapi.php?to=sys",
          method: "GET",
          dataType: "json",
          enableCache: true,
          //缓存
          defer: true,
          //控制当前请求是否延时至首屏内容渲染后发送
          data: {
            op: "sys_gg_xx",
            id: thi.id
          },
          success: (ret) => {
            if (ret.data) {
              thi.tit = ret.data.name;
              thi.tm = ret.data.times;
              thi.nr = ret.data.nr;
            }
          }
        });
      }
    },
    onNavigationBarButtonTap(e) {
      if (e.index == "0") {
        uni.navigateBack();
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("list", { class: "m" }, [
      (0, import_vue.createElementVNode)("cell", { style: { "background-color": "#f9f9f9" } }, [
        (0, import_vue.createElementVNode)(
          "u-text",
          { class: "tit" },
          (0, import_vue.toDisplayString)($data.tit),
          1
          /* TEXT */
        ),
        (0, import_vue.createElementVNode)(
          "u-text",
          { class: "tm" },
          "\u53D1\u5E03\u4E8E: " + (0, import_vue.toDisplayString)($data.tm),
          1
          /* TEXT */
        )
      ]),
      (0, import_vue.createElementVNode)("cell", null, [
        (0, import_vue.createElementVNode)(
          "u-text",
          { class: "nr" },
          (0, import_vue.toDisplayString)($data.nr),
          1
          /* TEXT */
        )
      ])
    ]);
  }
  var msgxx = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/\u5C0F\u718A\u79D8\u5B9D/pages/user/msgxx.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/user/msgxx";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    msgxx.mpType = "page";
    const app = Vue.createPageApp(msgxx, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...msgxx.styles || []]));
    app.mount("#root");
  }
})();
