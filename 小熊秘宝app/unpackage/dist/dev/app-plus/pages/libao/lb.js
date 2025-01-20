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

  // F:/360MoveData/Users/abc/Desktop/小熊秘宝/unpackage/dist/dev/.nvue/pages/libao/lb.js
  var import_vue = __toESM(require_vue());
  var _style_0 = { "lb_m": { "": { "width": "750rpx" } }, "lb_m_t": { "": { "width": "750rpx", "paddingTop": "50rpx", "paddingRight": "30rpx", "paddingBottom": "50rpx", "paddingLeft": "30rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "flex-start", "alignItems": "center", "backgroundColor": "rgba(0,0,0,0.02)" } }, "lb_m_t_l": { "": { "width": "120rpx", "height": "120rpx", "borderRadius": "20rpx" } }, "lb_m_t_r": { "": { "paddingLeft": "20rpx", "width": "570rpx", "height": "120rpx" } }, "lb_m_t_r_t1": { "": { "width": "500rpx", "height": "40rpx", "lineHeight": "40rpx", "lines": 1, "fontSize": "30rpx", "color": "rgba(0,0,0,1)", "fontWeight": "bold" } }, "lb_m_t_r_t2": { "": { "width": "500rpx", "lines": 1, "height": "40rpx", "lineHeight": "48rpx", "fontSize": "24rpx", "color": "rgba(0,0,0,0.5)" } }, "lb_m_t_r_t3": { "": { "width": "500rpx", "lines": 1, "height": "40rpx", "lineHeight": "40rpx", "fontSize": "24rpx", "color": "rgba(255,0,0,1)" } }, "lb_cell": { "": { "width": "750rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx" } }, "lb_tit": { "": { "width": "690rpx", "height": "120rpx", "lineHeight": "120rpx", "fontSize": "30rpx" } }, "lb_jj": { "": { "width": "690rpx", "lineHeight": "35rpx", "fontSize": "26rpx", "borderRadius": "10rpx", "color": "rgba(0,0,0,0.8)" } }, "lb_cells": { "": { "width": "750rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "paddingTop": "50rpx" } }, "lb_m_an": { "": { "width": "690rpx", "height": "80rpx", "lineHeight": "80rpx", "backgroundColor": "#ffda08", "textAlign": "center", "fontSize": "30rpx", "borderRadius": "40rpx" } }, "lb_m_an2": { "": { "width": "690rpx", "height": "80rpx", "lineHeight": "80rpx", "marginBottom": "20rpx", "backgroundColor": "rgba(255,218,8,0.1)", "color": "#ffda08", "textAlign": "center", "fontSize": "30rpx", "borderRadius": "40rpx" } } };
  var _sfc_main = {
    data() {
      return {
        ip: G_APP.ip,
        apph: G_APP.apph,
        lb_logo: "",
        lb_name: "",
        lb_jj: "",
        lb_sm: "",
        lb_lbsy: "",
        lb_key: "",
        keyid: "",
        lb_txt: "",
        gmjj: ""
      };
    },
    onLoad(option) {
      this.id = option.id;
    },
    onReady() {
      this.getzt();
    },
    methods: {
      getzt() {
        let thi = this;
        uni.request({
          url: G_APP.ip + "appapi.php?to=libaoxx",
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
            if (ret.data.lbxx[0]) {
              thi.lb_logo = thi.ip + ret.data.lbxx[0].lblogo;
              thi.lb_name = ret.data.lbxx[0].gmname + " - " + ret.data.lbxx[0].lbname;
              thi.lb_jj = ret.data.lbxx[0].lbjj;
              thi.lb_sm = ret.data.lbxx[0].lbsm;
              thi.lb_key = ret.data.lbkey;
              thi.lb_lbsy = ret.data.lbxx[0].lbsy;
              thi.gmjj = ret.data.gmjj;
              thi.keyid = ret.data.lbxx[0].keyid;
            }
          }
        });
      },
      potlq() {
        let thi = this;
        uni.showLoading({
          title: "\u8BF7\u7A0D\u540E...."
        });
        uni.request({
          url: G_APP.ip + "appapi.php?to=gmxx&op=gmxx_getlb",
          method: "POST",
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          dataType: "json",
          enableCache: false,
          //缓存
          defer: false,
          //控制当前请求是否延时至首屏内容渲染后发送
          data: {
            golq: "go",
            lbkey: thi.keyid,
            lbid: thi.id
          },
          success: (ret) => {
            if (ret.data == 0) {
              uni.showToast({ icon: "none", title: " \u8BF7\u5148\u767B\u5F55 ", mask: false, duration: 1500 });
            }
            if (ret.data.msg == 1) {
              thi.lb_key = ret.data.keys;
            }
            if (ret.data == 2) {
              uni.showToast({ icon: "none", title: " \u65E0\u5361\u4E86\uFF01", mask: false, duration: 1500 });
            }
            if (ret.data == 3) {
              uni.showToast({ icon: "none", title: " \u65E0\u9886\u53D6\u6761\u4EF6! ", mask: false, duration: 1500 });
            }
            if (ret.data.msg == 66) {
              thi.lb_key = ret.data.keys;
              uni.showToast({ icon: "none", title: " \u9886\u53D6\u6210\u529F! ", mask: false, duration: 1500 });
            }
            uni.hideLoading();
          }
        });
      },
      fz() {
        uni.setClipboardData({
          data: this.lb_key,
          success: function() {
            uni.showToast({ icon: "none", title: " \u590D\u5236\u6210\u529F! ", mask: false, duration: 1500 });
          }
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("list", { class: "lb_m" }, [
      (0, import_vue.createElementVNode)("cell", { class: "lb_m_t" }, [
        (0, import_vue.createElementVNode)("u-image", {
          class: "lb_m_t_l",
          src: $data.lb_logo
        }, null, 8, ["src"]),
        (0, import_vue.createElementVNode)("view", { class: "lb_m_t_r" }, [
          (0, import_vue.createElementVNode)(
            "u-text",
            { class: "lb_m_t_r_t1" },
            (0, import_vue.toDisplayString)($data.lb_name),
            1
            /* TEXT */
          ),
          (0, import_vue.createElementVNode)(
            "u-text",
            { class: "lb_m_t_r_t2" },
            (0, import_vue.toDisplayString)($data.lb_jj),
            1
            /* TEXT */
          ),
          (0, import_vue.createElementVNode)(
            "u-text",
            { class: "lb_m_t_r_t3" },
            "\u5269\u4F59\uFF1A" + (0, import_vue.toDisplayString)($data.lb_lbsy) + "\u679A",
            1
            /* TEXT */
          )
        ])
      ]),
      (0, import_vue.createElementVNode)("cell", { class: "lb_cell" }, [
        (0, import_vue.createElementVNode)("u-text", { class: "lb_tit" }, "\u793C\u5305\u7B80\u4ECB"),
        (0, import_vue.createElementVNode)(
          "u-text",
          { class: "lb_jj" },
          (0, import_vue.toDisplayString)($data.lb_jj),
          1
          /* TEXT */
        )
      ]),
      (0, import_vue.createElementVNode)("cell", { class: "lb_cell" }, [
        (0, import_vue.createElementVNode)("u-text", { class: "lb_tit" }, "\u4F7F\u7528\u65B9\u5F0F"),
        (0, import_vue.createElementVNode)(
          "u-text",
          { class: "lb_jj" },
          (0, import_vue.toDisplayString)($data.lb_sm),
          1
          /* TEXT */
        )
      ]),
      $data.gmjj ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cell", {
        key: 0,
        class: "lb_cell"
      }, [
        (0, import_vue.createElementVNode)("u-text", { class: "lb_tit" }, "\u6E38\u620F\u7B80\u4ECB"),
        (0, import_vue.createElementVNode)(
          "u-text",
          { class: "lb_jj" },
          (0, import_vue.toDisplayString)($data.gmjj),
          1
          /* TEXT */
        )
      ])) : (0, import_vue.createCommentVNode)("v-if", true),
      (0, import_vue.createElementVNode)("cell", { class: "lb_cells" }, [
        !$data.lb_key ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-text", {
          key: 0,
          class: "lb_m_an",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.potlq && $options.potlq(...args))
        }, "\u9886\u53D6\u793C\u5305")) : (0, import_vue.createCommentVNode)("v-if", true),
        $data.lb_key ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-text", {
          key: 1,
          class: "lb_m_an2",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.fz && $options.fz(...args))
        }, "\u590D\u5236\u793C\u5305KEY")) : (0, import_vue.createCommentVNode)("v-if", true)
      ])
    ]);
  }
  var lb = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/\u5C0F\u718A\u79D8\u5B9D/pages/libao/lb.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/libao/lb";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    lb.mpType = "page";
    const app = Vue.createPageApp(lb, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...lb.styles || []]));
    app.mount("#root");
  }
})();
