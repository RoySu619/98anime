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

  // F:/360MoveData/Users/abc/Desktop/小熊秘宝/unpackage/dist/dev/.nvue/pages/index/tab3.js
  var import_vue = __toESM(require_vue());
  var _style_0 = { "nodata": { "": { "width": "750rpx", "height": "600rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "center" } }, "nodata_i": { "": { "width": "400rpx", "height": "300rpx" } }, "hed": { "": { "width": "750rpx", "position": "sticky" } }, "heds": { "": { "width": "750rpx", "paddingRight": "30rpx", "backgroundColor": "#ffda08", "paddingBottom": "20rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "flex-end" } }, "hed_l": { "": { "width": "70rpx", "height": "70rpx", "lineHeight": "70rpx", "fontSize": "28rpx" } }, "hed_c": { "": { "width": "250rpx", "borderRadius": "50rpx", "textAlign": "center", "fontSize": "35rpx", "fontWeight": "bold", "height": "75rpx", "lineHeight": "75rpx" } }, "hed_r": { "": { "width": "70rpx", "fontSize": "45rpx", "textAlign": "center", "height": "70rpx", "lineHeight": "70rpx", "color": "rgba(0,0,0,0.7)", "fontFamily": "iconfont", "backgroundColor": "rgba(0,0,0,0.05)", "borderRadius": "37.5rpx" } }, "list": { "": { "width": "750rpx", "paddingTop": "30rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx" } }, "list_b": { "": { "width": "750rpx", "height": "30rpx" } }, "gm": { "": { "width": "690rpx", "height": "130rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center" } }, "gm_i": { "": { "width": "130rpx", "height": "130rpx", "borderRadius": "20rpx" } }, "gm_c": { "": { "width": "450rpx", "paddingLeft": "20rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "flex-start" } }, "gm_c_t": { "": { "width": "330rpx", "height": "43rpx", "lines": 1, "lineHeight": "43rpx", "fontSize": "30rpx", "fontWeight": "bold", "paddingRight": "20rpx", "color": "rgba(0,0,0,0.8)" } }, "gm_c_c": { "": { "height": "43rpx", "lineHeight": "50rpx", "fontSize": "24rpx", "lines": 1, "color": "rgba(0,0,0,0.5)" } }, "gm_c_b": { "": { "height": "43rpx", "lineHeight": "43rpx", "fontSize": "24rpx", "color": "rgba(0,0,0,0.5)" } }, "gm_r": { "": { "marginTop": "30rpx", "width": "100rpx", "borderRadius": "15rpx", "height": "60rpx", "lineHeight": "60rpx", "textAlign": "center", "fontSize": "24rpx", "backgroundImage": "linear-gradient(to top,#ffc30c,#ffda08)" } } };
  var _sfc_main = {
    data() {
      return {
        ip: G_APP.ip,
        appt: G_APP.appt,
        appb: G_APP.appb,
        myuid: "0",
        list: [],
        pag: 0,
        zpag: 1
      };
    },
    onReady() {
      this.getlist(1);
    },
    methods: {
      opsoso() {
        uni.navigateTo({
          url: "../../pages/soso/soso"
        });
      },
      opmylb() {
        if (this.myuid > 0) {
          uni.navigateTo({
            url: "../user/ckx"
          });
        } else {
          uni.navigateTo({
            url: "../login/login"
          });
        }
      },
      oplbxx(id) {
        uni.navigateTo({
          url: "../libao/lb?id=" + id
        });
      },
      getlist(pd) {
        let thi = this;
        let npag = Number(thi.pag) + 1;
        thi.pag = npag;
        if (npag <= thi.zpag) {
          uni.request({
            url: G_APP.ip + "appapi.php?to=libao",
            method: "GET",
            dataType: "json",
            enableCache: true,
            //缓存
            defer: true,
            //控制当前请求是否延时至首屏内容渲染后发送
            data: {
              "list": "go",
              "pages": npag
            },
            success: (ret) => {
              if (ret.data.data) {
                uni.hideLoading();
                if (pd == 1) {
                  thi.list = ret.data.data;
                  thi.zpag = ret.data.pagenum;
                  uni.stopPullDownRefresh();
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
    },
    onPullDownRefresh() {
      this.pag = 0;
      this.zpag = 1;
      this.getlist(1);
    },
    onShow() {
      let us = uni.getStorageSync("user");
      this.myuid = us.uid;
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "list",
      {
        onLoadmore: _cache[2] || (_cache[2] = ($event) => $options.getlist(2)),
        loadmoreoffset: "10"
      },
      [
        (0, import_vue.createElementVNode)("header", {
          class: "hed",
          renderWhole: true
        }, [
          (0, import_vue.createElementVNode)(
            "view",
            {
              class: "heds",
              renderWhole: true,
              style: (0, import_vue.normalizeStyle)("height: " + ($data.appt + 55) + "px;")
            },
            [
              (0, import_vue.createElementVNode)("u-text", { class: "hed_l" }),
              (0, import_vue.createElementVNode)("u-text", { class: "hed_l" }),
              (0, import_vue.createElementVNode)("u-text", { class: "hed_c" }, "\u793C\u5305\u4E2D\u5FC3"),
              (0, import_vue.createElementVNode)("u-text", {
                class: "hed_r",
                onClick: _cache[0] || (_cache[0] = (...args) => $options.opsoso && $options.opsoso(...args))
              }, "\uE8EF"),
              (0, import_vue.createElementVNode)("u-text", {
                class: "hed_r",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.opmylb && $options.opmylb(...args))
              }, "\uE7D1")
            ],
            4
            /* STYLE */
          )
        ]),
        $data.list ? ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
          import_vue.Fragment,
          { key: 0 },
          (0, import_vue.renderList)($data.list, (item, index) => {
            return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cell", {
              class: "list",
              key: item.id,
              onClick: ($event) => $options.oplbxx(item.id)
            }, [
              (0, import_vue.createElementVNode)("view", {
                class: "gm",
                renderWhole: true
              }, [
                (0, import_vue.createElementVNode)("u-image", {
                  class: "gm_i",
                  src: $data.ip + item.lblogo
                }, null, 8, ["src"]),
                (0, import_vue.createElementVNode)("view", {
                  renderWhole: true,
                  class: "gm_c"
                }, [
                  (0, import_vue.createElementVNode)(
                    "u-text",
                    { class: "gm_c_t" },
                    (0, import_vue.toDisplayString)(item.gmname) + (0, import_vue.toDisplayString)(item.lbname),
                    1
                    /* TEXT */
                  ),
                  (0, import_vue.createElementVNode)(
                    "u-text",
                    { class: "gm_c_c" },
                    (0, import_vue.toDisplayString)(item.lbjj),
                    1
                    /* TEXT */
                  ),
                  (0, import_vue.createElementVNode)(
                    "u-text",
                    { class: "gm_c_b" },
                    "\u5269\u4F59\uFF1A" + (0, import_vue.toDisplayString)(item.lbsy) + "\u679A",
                    1
                    /* TEXT */
                  )
                ]),
                (0, import_vue.createElementVNode)("u-text", { class: "gm_r" }, "\u9886\u53D6")
              ])
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        )) : (0, import_vue.createCommentVNode)("v-if", true),
        $data.list == "" ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cell", {
          key: 1,
          class: "nodata"
        }, [
          (0, import_vue.createElementVNode)("u-image", {
            class: "nodata_i",
            src: "/static/nodata.png"
          })
        ])) : (0, import_vue.createCommentVNode)("v-if", true),
        (0, import_vue.createElementVNode)("cell", { class: "list_b" })
      ],
      32
      /* HYDRATE_EVENTS */
    );
  }
  var tab3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/\u5C0F\u718A\u79D8\u5B9D/pages/index/tab3.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/index/tab3";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    tab3.mpType = "page";
    const app = Vue.createPageApp(tab3, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...tab3.styles || []]));
    app.mount("#root");
  }
})();
