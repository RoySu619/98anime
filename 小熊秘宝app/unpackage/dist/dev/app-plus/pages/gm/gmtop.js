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

  // F:/360MoveData/Users/abc/Desktop/小熊秘宝/unpackage/dist/dev/.nvue/pages/gm/gmtop.js
  var import_vue = __toESM(require_vue());
  var _style_0 = { "nodata": { "": { "width": "750rpx", "height": "600rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "center" } }, "nodata_i": { "": { "width": "400rpx", "height": "300rpx" } }, "m": { "": { "width": "750rpx" } }, "list": { "": { "width": "750rpx", "paddingTop": "30rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "paddingBottom": "30rpx" } }, "list_b": { "": { "width": "750rpx", "height": "30rpx" } }, "gm": { "": { "width": "690rpx", "height": "130rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center" } }, "gm_i": { "": { "width": "130rpx", "height": "130rpx", "borderRadius": "20rpx" } }, "gm_c": { "": { "width": "450rpx", "paddingLeft": "20rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "flex-start" } }, "gm_c_t": { "": { "width": "330rpx", "height": "43rpx", "lines": 1, "lineHeight": "43rpx", "fontSize": "30rpx", "fontWeight": "bold", "paddingRight": "20rpx", "color": "rgba(0,0,0,0.8)" } }, "gm_c_c": { "": { "height": "43rpx", "lineHeight": "50rpx", "fontSize": "24rpx", "color": "rgba(0,0,0,0.5)" } }, "gm_c_b": { "": { "lines": 1, "height": "43rpx", "lineHeight": "43rpx", "fontSize": "24rpx", "color": "rgba(0,0,0,0.5)" } }, "gm_r": { "": { "marginTop": "30rpx", "width": "100rpx", "borderRadius": "15rpx", "height": "60rpx", "lineHeight": "60rpx", "textAlign": "center", "fontSize": "24rpx", "backgroundImage": "linear-gradient(to top,#ffc30c,#ffda08)" } } };
  var _sfc_main = {
    data() {
      return {
        ip: G_APP.ip,
        appb: G_APP.appb,
        gmlist: [],
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
      opgm(id) {
        uni.navigateTo({
          url: "../../pages/gm/gmxx?id=" + id
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
            url: G_APP.ip + "appapi.php?to=gm-ph",
            method: "GET",
            dataType: "json",
            enableCache: true,
            //缓存
            defer: true,
            //控制当前请求是否延时至首屏内容渲染后发送
            data: {
              "phlist": "go",
              "pages": npag
            },
            success: (ret) => {
              if (ret.data.data) {
                uni.hideLoading();
                if (pd == 1) {
                  thi.gmlist = ret.data.data;
                  thi.zpag = ret.data.pagenum;
                  uni.stopPullDownRefresh();
                }
                if (pd == 2) {
                  thi.gmlist = thi.gmlist.concat(ret.data.data);
                }
              } else {
                thi.gmlist = [];
                uni.hideLoading();
              }
            }
          });
        }
      }
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
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "list",
      {
        class: "m",
        onLoadmore: _cache[0] || (_cache[0] = (...args) => $options.moerdata && $options.moerdata(...args))
      },
      [
        $data.gmlist ? ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
          import_vue.Fragment,
          { key: 0 },
          (0, import_vue.renderList)($data.gmlist, (item, index) => {
            return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cell", {
              class: "list",
              key: item.id,
              onClick: ($event) => $options.opgm(item.id)
            }, [
              (0, import_vue.createElementVNode)("view", {
                class: "gm",
                renderWhole: true
              }, [
                (0, import_vue.createElementVNode)("u-image", {
                  class: "gm_i",
                  src: $data.ip + item.gmlogo
                }, null, 8, ["src"]),
                (0, import_vue.createElementVNode)("view", {
                  renderWhole: true,
                  class: "gm_c"
                }, [
                  (0, import_vue.createElementVNode)(
                    "u-text",
                    { class: "gm_c_t" },
                    (0, import_vue.toDisplayString)(item.gmname),
                    1
                    /* TEXT */
                  ),
                  (0, import_vue.createElementVNode)(
                    "u-text",
                    { class: "gm_c_c" },
                    "\u7C7B\u578B\uFF1A " + (0, import_vue.toDisplayString)(item.gmbq),
                    1
                    /* TEXT */
                  ),
                  (0, import_vue.createElementVNode)(
                    "u-text",
                    { class: "gm_c_b" },
                    (0, import_vue.toDisplayString)(item.gmjj),
                    1
                    /* TEXT */
                  )
                ]),
                (0, import_vue.createElementVNode)("u-text", { class: "gm_r" }, "\u4E0B\u8F7D")
              ])
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        )) : (0, import_vue.createCommentVNode)("v-if", true),
        $data.gmlist == "" ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cell", {
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
  var gmtop = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/\u5C0F\u718A\u79D8\u5B9D/pages/gm/gmtop.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/gm/gmtop";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    gmtop.mpType = "page";
    const app = Vue.createPageApp(gmtop, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...gmtop.styles || []]));
    app.mount("#root");
  }
})();
