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

  // F:/360MoveData/Users/abc/Desktop/小熊秘宝/unpackage/dist/dev/.nvue/pages/open/index.js
  var import_vue = __toESM(require_vue());
  var _style_0 = { "m": { "": { "width": "750rpx", "flex": 1, "position": "relative" } }, "tm": { "": { "position": "absolute", "right": "20rpx", "top": "100rpx", "width": "150rpx", "height": "60rpx", "lineHeight": "60rpx", "color": "#ffffff", "fontSize": "26rpx", "backgroundColor": "rgba(0,0,0,0.5)", "textAlign": "center", "borderRadius": "30rpx", "zIndex": 9999 } }, "img": { "": { "position": "absolute", "zIndex": 1, "flex": 1 } } };
  var _sfc_main = {
    data() {
      return {
        img: "",
        imgtp: "",
        url: "",
        num: 5,
        timer: ""
      };
    },
    onReady() {
      this.get();
      let optmdeltm = setTimeout(() => {
        uni.navigateBack();
        clearTimeout(optmdeltm);
      }, 8e3);
    },
    methods: {
      clwin() {
        clearInterval(this.timer);
        uni.navigateBack();
      },
      gototm() {
        let thi = this;
        thi.timer = setInterval(() => {
          if (thi.num > 0) {
            thi.num = thi.num - 1;
          } else {
            uni.navigateBack();
            clearInterval(this.timer);
          }
        }, 1e3);
      },
      opurl() {
        uni.navigateTo({
          url: "../../pages/gm/gmxx?id=" + this.url
        });
      },
      get() {
        let thi = this;
        uni.request({
          url: G_APP.ip + "appapi.php?to=appqd",
          method: "GET",
          dataType: "json",
          enableCache: true,
          //缓存
          defer: true,
          //控制当前请求是否延时至首屏内容渲染后发送
          data: {
            "syspt": "go"
          },
          success: (ret) => {
            if (ret.data) {
              thi.img = G_APP.ip + ret.data.imgurl;
              thi.url = ret.data.urls;
              thi.imgtp = ret.data.imgtp;
              const qdtshowtm = setTimeout(() => {
                thi.gototm();
                plus.navigator.closeSplashscreen();
                clearTimeout(qdtshowtm);
              }, 500);
            }
          }
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("list", null, [
      (0, import_vue.createElementVNode)("cell", { class: "m" }, [
        (0, import_vue.createElementVNode)("u-image", {
          class: "img",
          src: $data.img,
          onClick: _cache[0] || (_cache[0] = (...args) => $options.opurl && $options.opurl(...args)),
          mode: "aspectFill"
        }, null, 8, ["src"]),
        (0, import_vue.createElementVNode)(
          "u-text",
          {
            class: "tm",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.clwin && $options.clwin(...args))
          },
          (0, import_vue.toDisplayString)($data.num) + " \u8DF3\u8FC7",
          1
          /* TEXT */
        )
      ])
    ]);
  }
  var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/\u5C0F\u718A\u79D8\u5B9D/pages/open/index.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/open/index";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    index.mpType = "page";
    const app = Vue.createPageApp(index, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...index.styles || []]));
    app.mount("#root");
  }
})();
