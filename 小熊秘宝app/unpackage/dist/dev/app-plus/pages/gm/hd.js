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

  // F:/360MoveData/Users/abc/Desktop/小熊秘宝/unpackage/dist/dev/.nvue/pages/gm/hd.js
  var import_vue = __toESM(require_vue());
  var _style_0 = { "nodata": { "": { "width": "750rpx", "height": "600rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "center" } }, "nodata_i": { "": { "width": "400rpx", "height": "300rpx" } }, "m": { "": { "width": "750rpx" } }, "list": { "": { "width": "750rpx", "paddingLeft": "30rpx", "paddingTop": "30rpx" } }, "list_b": { "": { "width": "750rpx", "height": "30rpx" } }, "news": { "": { "width": "690rpx", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx", "backgroundColor": "#ffffff", "borderRadius": "10rpx" } }, "news_t": { "": { "width": "650rpx", "height": "80rpx", "lineHeight": "70rpx", "lines": 1, "textAlign": "center", "fontSize": "30rpx", "fontWeight": "bold", "color": "rgba(0,0,0,0.8)" } }, "news_c": { "": { "width": "650rpx", "lines": 3, "textOverflow": "ellipsis", "fontSize": "24rpx", "color": "rgba(0,0,0,0.5)", "paddingBottom": "20rpx" } }, "news_b": { "": { "width": "650rpx", "height": "43rpx", "lineHeight": "43rpx", "fontSize": "24rpx", "textAlign": "center", "color": "rgba(0,0,0,0.5)" } } };
  var _sfc_main = {
    data() {
      return {
        ip: G_APP.ip,
        appb: G_APP.appb,
        list: [],
        pag: 0,
        zpag: 1
      };
    },
    onLoad() {
    },
    onReady() {
      this.get(1);
    },
    methods: {
      opzxxx(id) {
        uni.navigateTo({
          url: "../../pages/gm/newsxx?id=" + id
        });
      },
      moerdata() {
        this.get(2);
      },
      get(pd) {
        let thi = this;
        let npag = Number(thi.pag) + 1;
        thi.pag = npag;
        if (npag <= thi.zpag) {
          uni.request({
            url: G_APP.ip + "appapi.php?to=hotne",
            method: "GET",
            dataType: "json",
            enableCache: true,
            //缓存
            defer: true,
            //控制当前请求是否延时至首屏内容渲染后发送
            data: {
              "hotne": "go",
              "pages": npag
            },
            success: (ret) => {
              if (ret.data.data) {
                uni.hideLoading();
                if (pd == 1) {
                  thi.list = ret.data.data;
                  thi.zpag = ret.data.pagenum;
                }
                if (pd == 2) {
                  thi.list = thi.list.concat(ret.data.data);
                }
              } else {
                thi.list = [];
                uni.hideLoading();
              }
            }
          });
        }
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "list",
      {
        class: "m",
        onLoadmore: _cache[0] || (_cache[0] = (...args) => $options.moerdata && $options.moerdata(...args))
      },
      [
        $data.list ? ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
          import_vue.Fragment,
          { key: 0 },
          (0, import_vue.renderList)($data.list, (item, index) => {
            return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cell", {
              class: "list",
              key: item.id,
              onClick: ($event) => $options.opzxxx(item.id)
            }, [
              (0, import_vue.createElementVNode)("view", {
                class: "news",
                renderWhole: true
              }, [
                (0, import_vue.createElementVNode)(
                  "u-text",
                  { class: "news_t" },
                  (0, import_vue.toDisplayString)(item.zxname),
                  1
                  /* TEXT */
                ),
                (0, import_vue.createElementVNode)(
                  "u-text",
                  { class: "news_c" },
                  (0, import_vue.toDisplayString)(item.zxjj),
                  1
                  /* TEXT */
                ),
                (0, import_vue.createElementVNode)(
                  "u-text",
                  { class: "news_b" },
                  (0, import_vue.toDisplayString)(item.times),
                  1
                  /* TEXT */
                )
              ])
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        )) : (0, import_vue.createCommentVNode)("v-if", true),
        (0, import_vue.createElementVNode)("cell", { class: "list_b" }),
        $data.list == "" ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cell", {
          key: 1,
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
    );
  }
  var hd = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/\u5C0F\u718A\u79D8\u5B9D/pages/gm/hd.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/gm/hd";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    hd.mpType = "page";
    const app = Vue.createPageApp(hd, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...hd.styles || []]));
    app.mount("#root");
  }
})();
