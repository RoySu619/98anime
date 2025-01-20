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

  // F:/360MoveData/Users/abc/Desktop/小熊秘宝/unpackage/dist/dev/.nvue/pages/user/kf.js
  var import_vue = __toESM(require_vue());
  var _style_0 = { "li": { "": { "width": "750rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "height": "120rpx", "borderBottomWidth": "0.5rpx", "borderBottomStyle": "solid", "borderBottomColor": "rgba(0,0,0,0.05)", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center" } }, "li_l": { "": { "width": "60rpx", "height": "140rpx", "lineHeight": "140rpx", "fontSize": "50rpx", "fontFamily": "iconfont", "color": "rgba(0,0,0,0.3)" } }, "li_c": { "": { "width": "450rpx", "height": "140rpx", "lineHeight": "140rpx", "textAlign": "left" } }, "li_r": { "": { "width": "150rpx", "height": "60rpx", "lineHeight": "60rpx", "fontSize": "26rpx", "textAlign": "center", "borderRadius": "10rpx", "backgroundColor": "rgba(255,170,0,0.05)", "borderWidth": "0.5rpx", "borderStyle": "solid", "borderColor": "#ffda08", "color": "#000000" } } };
  var _sfc_main = {
    name: "pl_list",
    data() {
      return {
        appsys: G_APP.appsys,
        apph: G_APP.apph,
        kf1: "",
        kf2: "",
        kf3: "",
        hz: "",
        qh1: "",
        qh2: ""
      };
    },
    onReady() {
      this.getlist();
    },
    methods: {
      fz(pd, qq) {
        let thi = this;
        if (pd == 1) {
          if (thi.appsys == "apple") {
            let url = "mqq://im/chat?chat_type=wpa&uin=" + qq + "&version=1&src_type=web";
            plus.runtime.openURL(url, function(res) {
            });
          } else {
            let url = "mqqwpa://im/chat?chat_type=wpa&uin=" + qq;
            plus.runtime.openURL(url, function(res) {
            });
          }
        }
        if (pd == 2) {
          uni.setClipboardData({
            data: this.kf3,
            success: function() {
              uni.showToast({ icon: "none", title: " \u590D\u5236\u5FAE\u4FE1\u5BA2\u670D\u6210\u529F! ", mask: false, duration: 1500 });
            }
          });
        }
        if (pd == 3) {
          let url = "mqqapi://card/show_pslcard?src_type=internal&version=1&uin=" + qq + "&card_type=group&source=qrcode";
          plus.runtime.openURL(url, function(res) {
          });
        }
      },
      getlist() {
        let thi = this;
        uni.request({
          url: G_APP.ip + "appapi.php?to=user&op=user_kf",
          method: "GET",
          dataType: "json",
          enableCache: true,
          //缓存
          defer: true,
          //控制当前请求是否延时至首屏内容渲染后发送
          data: {
            "myuskf": "go"
          },
          success: (ret) => {
            if (ret.data) {
              thi.kf1 = ret.data.kf1;
              thi.kf2 = ret.data.kf2;
              thi.kf3 = ret.data.kf3;
              thi.hz = ret.data.hz;
              thi.qh1 = ret.data.qh1;
              thi.qh2 = ret.data.qh2;
            }
          }
        });
      },
      kf_close() {
        uni.navigateBack({
          animationType: "zoom-fade-in",
          animationDuration: 300
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("list", null, [
      $data.kf1 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cell", {
        key: 0,
        class: "li"
      }, [
        (0, import_vue.createElementVNode)("u-text", { class: "li_l" }, "\uE883"),
        (0, import_vue.createElementVNode)(
          "u-text",
          { class: "li_c" },
          "QQ: " + (0, import_vue.toDisplayString)($data.kf1),
          1
          /* TEXT */
        ),
        (0, import_vue.createElementVNode)("u-text", {
          class: "li_r",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.fz(1, $data.kf1))
        }, "\u4F1A\u8BDD")
      ])) : (0, import_vue.createCommentVNode)("v-if", true),
      $data.kf2 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cell", {
        key: 1,
        class: "li"
      }, [
        (0, import_vue.createElementVNode)("u-text", { class: "li_l" }, "\uE883"),
        (0, import_vue.createElementVNode)(
          "u-text",
          { class: "li_c" },
          "QQ: " + (0, import_vue.toDisplayString)($data.kf2),
          1
          /* TEXT */
        ),
        (0, import_vue.createElementVNode)("u-text", {
          class: "li_r",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.fz(1, $data.kf2))
        }, "\u4F1A\u8BDD")
      ])) : (0, import_vue.createCommentVNode)("v-if", true),
      $data.kf3 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cell", {
        key: 2,
        class: "li"
      }, [
        (0, import_vue.createElementVNode)("u-text", { class: "li_l" }, "\uE884"),
        (0, import_vue.createElementVNode)(
          "u-text",
          { class: "li_c" },
          "\u5FAE\u4FE1\u53F7: " + (0, import_vue.toDisplayString)($data.kf3),
          1
          /* TEXT */
        ),
        (0, import_vue.createElementVNode)("u-text", {
          class: "li_r",
          onClick: _cache[2] || (_cache[2] = ($event) => $options.fz(2))
        }, "\u590D\u5236\u5FAE\u4FE1")
      ])) : (0, import_vue.createCommentVNode)("v-if", true),
      $data.hz ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cell", {
        key: 3,
        class: "li"
      }, [
        (0, import_vue.createElementVNode)("u-text", { class: "li_l" }, "\uE887"),
        (0, import_vue.createElementVNode)(
          "u-text",
          { class: "li_c" },
          "\u5546\u52A1\u5408\u4F5C: " + (0, import_vue.toDisplayString)($data.hz),
          1
          /* TEXT */
        ),
        (0, import_vue.createElementVNode)("u-text", {
          class: "li_r",
          onClick: _cache[3] || (_cache[3] = ($event) => $options.fz(1, $data.hz))
        }, "\u4F1A\u8BDD")
      ])) : (0, import_vue.createCommentVNode)("v-if", true),
      $data.qh1 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cell", {
        key: 4,
        class: "li"
      }, [
        (0, import_vue.createElementVNode)("u-text", { class: "li_l" }, "\uE7AE"),
        (0, import_vue.createElementVNode)(
          "u-text",
          { class: "li_c" },
          "\u5B98\u65B9\u2460\u7FA4: " + (0, import_vue.toDisplayString)($data.qh1),
          1
          /* TEXT */
        ),
        (0, import_vue.createElementVNode)("u-text", {
          class: "li_r",
          onClick: _cache[4] || (_cache[4] = ($event) => $options.fz(3, $data.qh1))
        }, "\u8FDB\u7FA4")
      ])) : (0, import_vue.createCommentVNode)("v-if", true),
      $data.qh2 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cell", {
        key: 5,
        class: "li"
      }, [
        (0, import_vue.createElementVNode)("u-text", { class: "li_l" }, "\uE7AE"),
        (0, import_vue.createElementVNode)(
          "u-text",
          { class: "li_c" },
          "\u5B98\u65B9\u2461\u7FA4: " + (0, import_vue.toDisplayString)($data.qh2),
          1
          /* TEXT */
        ),
        (0, import_vue.createElementVNode)("u-text", {
          class: "li_r",
          onClick: _cache[5] || (_cache[5] = ($event) => $options.fz(3, $data.qh2))
        }, "\u8FDB\u7FA4")
      ])) : (0, import_vue.createCommentVNode)("v-if", true)
    ]);
  }
  var kf = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/\u5C0F\u718A\u79D8\u5B9D/pages/user/kf.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/user/kf";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    kf.mpType = "page";
    const app = Vue.createPageApp(kf, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...kf.styles || []]));
    app.mount("#root");
  }
})();
