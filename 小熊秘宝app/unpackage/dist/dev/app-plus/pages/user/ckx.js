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

  // F:/360MoveData/Users/abc/Desktop/小熊秘宝/unpackage/dist/dev/.nvue/pages/user/ckx.js
  var import_vue = __toESM(require_vue());
  var _style_0 = { "m": { "": { "width": "750rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "paddingTop": "30rpx" } }, "cell": { "": { "width": "690rpx", "paddingBottom": "30rpx" } }, "li": { "": { "width": "690rpx", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "40rpx", "paddingLeft": "20rpx", "backgroundColor": "rgba(0,0,0,0.02)", "borderRadius": "20rpx" } }, "li_t": { "": { "width": "690rpx", "height": "120rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "flex-start", "alignItems": "center" } }, "li_t_l": { "": { "width": "120rpx", "height": "120rpx", "borderRadius": "20rpx" } }, "li_t_r": { "": { "paddingLeft": "30rpx", "width": "520rpx", "height": "120rpx" } }, "li_t_r_t": { "": { "width": "490rpx", "height": "50rpx", "lines": 1, "lineHeight": "50rpx", "fontSize": "35rpx" } }, "li_t_r_b": { "": { "width": "490rpx", "height": "50rpx", "lineHeight": "50rpx", "fontSize": "26rpx", "color": "rgba(0,0,0,0.5)" } }, "li_c": { "": { "width": "650rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "textAlign": "center", "height": "120rpx", "lineHeight": "120rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center", "color": "rgba(0,0,0,0.5)" } }, "li_b": { "": { "width": "600rpx", "paddingLeft": "30rpx", "paddingBottom": "30rpx" } }, "li_b_t": { "": { "width": "650rpx", "color": "rgba(0,0,0,0.5)", "fontSize": "26rpx" } }, "li_a": { "": { "width": "600rpx", "marginLeft": "25rpx", "height": "80rpx", "lineHeight": "80rpx", "fontSize": "30rpx", "color": "#131220", "backgroundColor": "#ffda08", "textAlign": "center", "borderRadius": "40rpx" } } };
  var _sfc_main = {
    data() {
      return {
        ip: G_APP.ip,
        appsys: G_APP.appsys,
        list: [],
        pag: 0,
        zpag: 1
      };
    },
    onReady() {
      this.get(1);
    },
    methods: {
      fz(pd, i) {
        let thi = this;
        if (pd == 1) {
          uni.setClipboardData({
            data: thi.list[i].lbkey,
            success: function() {
              uni.showToast({ icon: "none", title: " \u590D\u5236\u793C\u5305KEY\u6210\u529F! ", mask: false, duration: 1500 });
            }
          });
        }
        if (pd == 2) {
          uni.setClipboardData({
            data: thi.list[i].gmurl,
            success: function() {
              uni.showToast({ icon: "none", title: " \u590D\u5236\u4E0B\u8F7D\u94FE\u63A5\u6210\u529F! ", mask: false, duration: 1500 });
            }
          });
        }
      },
      get(pd) {
        let thi = this;
        let npag = thi.pag + 1;
        thi.pag = npag;
        if (npag <= thi.zpag) {
          uni.request({
            url: G_APP.ip + "appapi.php?to=user&op=user-lblist",
            method: "GET",
            dataType: "json",
            enableCache: true,
            //缓存
            defer: true,
            //控制当前请求是否延时至首屏内容渲染后发送
            data: {
              "myuslb": "go",
              "pages": npag
            },
            success: (ret) => {
              if (ret.data.data) {
                if (pd == 1) {
                  thi.zpag = ret.data.pagenum;
                  thi.list = ret.data.data;
                }
                if (pd == 2) {
                  thi.list = thi.list.concat(ret.data.data);
                }
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
        onLoadmore: _cache[0] || (_cache[0] = ($event) => $options.get(2))
      },
      [
        ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
          import_vue.Fragment,
          null,
          (0, import_vue.renderList)($data.list, (item, i) => {
            return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cell", {
              class: "cell",
              key: item.id
            }, [
              (0, import_vue.createElementVNode)("view", { class: "li" }, [
                (0, import_vue.createElementVNode)("view", { class: "li_t" }, [
                  (0, import_vue.createElementVNode)("u-image", {
                    class: "li_t_l",
                    src: $data.ip + item.gmlogo
                  }, null, 8, ["src"]),
                  (0, import_vue.createElementVNode)("view", { class: "li_t_r" }, [
                    (0, import_vue.createElementVNode)(
                      "u-text",
                      { class: "li_t_r_t" },
                      (0, import_vue.toDisplayString)(item.gmname) + " - " + (0, import_vue.toDisplayString)(item.lbname),
                      1
                      /* TEXT */
                    ),
                    (0, import_vue.createElementVNode)(
                      "u-text",
                      { class: "li_t_r_b" },
                      "\u5230\u671F\u65F6\u95F4\uFF1A" + (0, import_vue.toDisplayString)(item.lbtm),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                (0, import_vue.createElementVNode)(
                  "u-text",
                  { class: "li_c" },
                  "KEY: " + (0, import_vue.toDisplayString)(item.lbkey),
                  1
                  /* TEXT */
                ),
                (0, import_vue.createElementVNode)("u-text", {
                  class: "li_a",
                  onClick: ($event) => $options.fz(1, i)
                }, "\u590D\u5236KEY", 8, ["onClick"])
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      32
      /* HYDRATE_EVENTS */
    );
  }
  var ckx = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/\u5C0F\u718A\u79D8\u5B9D/pages/user/ckx.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/user/ckx";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    ckx.mpType = "page";
    const app = Vue.createPageApp(ckx, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...ckx.styles || []]));
    app.mount("#root");
  }
})();
