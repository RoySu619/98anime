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

  // F:/360MoveData/Users/abc/Desktop/小熊秘宝/unpackage/dist/dev/.nvue/pages/login/login.js
  var import_vue = __toESM(require_vue());
  var _style_0 = { "top": { "": { "width": "750rpx", "paddingTop": "200rpx", "height": "400rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "center" } }, "top_i": { "": { "width": "200rpx", "height": "200rpx" } }, "top_b_t": { "": { "width": "450rpx", "height": "120rpx" } }, "li": { "": { "width": "750rpx", "paddingTop": "80rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "flex-start", "alignItems": "center" } }, "lis": { "": { "width": "690rpx", "paddingTop": 0, "paddingRight": "30rpx", "paddingBottom": 0, "paddingLeft": "30rpx" } }, "li_tell": { "": { "width": "630rpx", "height": "100rpx", "marginBottom": "30rpx", "backgroundColor": "rgba(0,0,0,0.05)", "borderRadius": "50rpx", "justifyContent": "flex-start", "alignItems": "center", "flexDirection": "row", "flexWrap": "nowrap", "position": "relative" } }, "li_tell_l": { "": { "width": "100rpx", "height": "100rpx", "lineHeight": "100rpx", "textAlign": "center", "fontSize": "40rpx", "fontFamily": "iconfont" } }, "li_tell_gd": { "": { "width": "80rpx", "height": "100rpx" } }, "li_input": { "": { "width": "500rpx", "height": "50rpx", "fontSize": "28rpx", "lineHeight": "50rpx" } }, "li_tell_x": { "": { "position": "absolute", "right": "20rpx", "width": "50rpx", "height": "50rpx", "lineHeight": "50rpx", "textAlign": "center", "borderRadius": "30rpx", "fontFamily": "iconfont", "fontSize": "26rpx", "backgroundColor": "rgba(0,0,0,0.1)" } }, "li_tell_yzm": { "": { "width": "120rpx", "height": "50rpx", "lineHeight": "50rpx", "fontSize": "26rpx", "textAlign": "center", "color": "#ff008a" } }, "pas_ys": { "": { "paddingLeft": "60rpx", "paddingRight": "60rpx", "height": "100rpx", "justifyContent": "flex-start", "alignItems": "center", "flexDirection": "row", "flexWrap": "nowrap" } }, "txt_url": { "": { "color": "#ffda08", "height": "100rpx", "lineHeight": "100rpx", "fontSize": "26rpx", "paddingLeft": "10rpx", "paddingRight": "10rpx" } }, "txt_txt": { "": { "height": "100rpx", "lineHeight": "100rpx", "fontSize": "26rpx" } }, "op": { "": { "width": "750rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "center" } }, "op_t1": { "": { "width": "300rpx", "textAlign": "center", "height": "100rpx", "lineHeight": "100rpx", "fontSize": "28rpx" } }, "op_t2": { "": { "width": "300rpx", "textAlign": "center", "height": "100rpx", "lineHeight": "100rpx", "fontSize": "28rpx" } }, "an": { "": { "width": "750rpx", "paddingTop": "30rpx", "paddingLeft": "50rpx", "paddingRight": "50rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center" } }, "pot": { "": { "width": "650rpx", "height": "100rpx", "lineHeight": "100rpx", "borderRadius": "50rpx", "backgroundColor": "#ffda08", "textAlign": "center", "color": "#131220", "fontSize": "32rpx" } }, "oppas": { "": { "width": "300rpx", "color": "#ffffff", "fontSize": "28rpx", "paddingLeft": "20rpx", "height": "80rpx", "lineHeight": "80rpx", "borderRadius": "10rpx", "textAlign": "left" } }, "addzh": { "": { "width": "750rpx", "height": "100rpx" } }, "addzhs": { "": { "position": "fixed", "bottom": 20, "left": 0, "width": "750rpx", "height": "100rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "center" } }, "addzh_t1": { "": { "height": "50rpx", "lineHeight": "30rpx", "fontSize": "30rpx", "color": "rgba(255,255,255,0.5)" } }, "addzh_t2": { "": { "height": "50rpx", "lineHeight": "30rpx", "fontSize": "30rpx", "color": "#33ffb4" } } };
  var _sfc_main = {
    name: "login_pas",
    data() {
      return {
        tell: "",
        pass: "",
        qctellshow: false,
        qcpassshow: false,
        isxtpt: 1,
        isxyzt: false
      };
    },
    methods: {
      setxyzt() {
        uni.hideKeyboard();
        if (this.isxyzt == false) {
          this.isxyzt = true;
        } else {
          this.isxyzt = false;
        }
      },
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
      opzc() {
        uni.navigateTo({
          url: "../../pages/login/login_zc"
        });
      },
      openzhpas() {
        uni.navigateTo({
          url: "../../pages/login/login_zpas"
        });
      },
      potdata() {
        let thi = this;
        if (thi.isxyzt) {
          if (thi.tell && thi.pass) {
            uni.showLoading({
              title: "\u767B\u5F55\u4E2D",
              mask: true
            });
            uni.hideKeyboard();
            uni.request({
              url: G_APP.ip + "appapi.php?to=login",
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
                logins: "go",
                uname: thi.tell,
                upass: thi.pass
              },
              success: (res) => {
                uni.hideLoading();
                if (res.data[0] == "0") {
                  uni.showToast({ icon: "none", title: " \u767B\u5F55\u4FE1\u606F\u4E0D\u5B8C\u6574\uFF0C\u8BF7\u91CD\u8BD5\uFF01 ", duration: 2e3 });
                }
                if (res.data[0] == "1") {
                  uni.showToast({ icon: "none", title: " \u767B\u5F55\u8D26\u53F7\u4E0D\u5B58\u5728 ", duration: 2e3 });
                }
                if (res.data[0] == "2") {
                  uni.showToast({ icon: "none", title: " \u767B\u5F55\u5BC6\u7801\u9519\u8BEF ", duration: 2e3 });
                }
                if (res.data[0] == "66") {
                  uni.$emit("login", { msg: "yes" });
                  setTimeout(() => {
                    uni.navigateBack();
                  }, 1e3);
                  uni.showToast({ icon: "none", title: " \u767B\u5F55\u6210\u529F ", duration: 2e3 });
                }
                if (res.data[0] == "99") {
                  uni.showToast({ icon: "none", title: " \u8BE5\u8D26\u53F7\u56E0\u8FDD\u89C4\u5DF2\u7ECF\u5C01\u7981\uFF0C\u5982\u6709\u7591\u95EE\u8BF7\u8054\u7CFB\u5BA2\u670D ", duration: 2e3 });
                }
              }
            });
          } else {
            if (thi.tell == "") {
              uni.showToast({ icon: "none", title: " \u8BF7\u8F93\u5165\u767B\u5F55\u624B\u673A\u53F7 ", duration: 2e3 });
            } else if (thi.pass == "") {
              uni.showToast({ icon: "none", title: " \u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801 ", duration: 2e3 });
            }
          }
        } else {
          uni.showToast({ icon: "none", title: " \u60A8\u672A\u540C\u610F\u7528\u6237\u534F\u8BAE,\u670D\u52A1\u534F\u8BAE,\u8BF7\u8BA4\u771F\u9605\u8BFB\u5E76\u52FE\u9009\u540C\u610F\u5168\u90E8\u534F\u8BAE ", duration: 2e3 });
        }
      },
      qctell() {
        this.qctellshow = false;
        this.tell = "";
      },
      qcpass() {
        this.qcpassshow = false;
        this.pass = "";
      },
      telljt(e) {
        this.tell = e.detail.value;
        if (e.detail.value == "") {
          this.qctellshow = false;
        }
        if (e.detail.cursor == 1) {
          this.qctellshow = true;
        }
      },
      passjt(e) {
        this.pass = e.detail.value;
        if (e.detail.value == "") {
          this.qcpassshow = false;
        }
        if (e.detail.cursor == 1) {
          this.qcpassshow = true;
        }
      },
      settellqcshow() {
        if (this.tell) {
          this.qctellshow = true;
        }
      },
      settellqchide() {
        if (this.tell) {
          this.qctellshow = false;
        }
      },
      setpassqcshow() {
        if (this.pass) {
          this.qcpassshow = true;
        }
      },
      setpassqchide() {
        if (this.pass) {
          this.qcpassshow = false;
        }
      }
    },
    onNavigationBarButtonTap(e) {
      if (e.index == 0) {
        uni.navigateBack();
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_radio = (0, import_vue.resolveComponent)("radio");
    const _component_label = (0, import_vue.resolveComponent)("label");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("list", null, [
      (0, import_vue.createElementVNode)("cell", { class: "top" }, [
        (0, import_vue.createElementVNode)("u-image", {
          class: "top_i",
          src: "/static/uslogo.png"
        })
      ]),
      (0, import_vue.createElementVNode)("cell", { class: "li" }, [
        (0, import_vue.createElementVNode)("view", { class: "lis" }, [
          (0, import_vue.createElementVNode)("view", { class: "li_tell" }, [
            (0, import_vue.createElementVNode)("u-text", { class: "li_tell_l" }, "\uE7B2"),
            (0, import_vue.createElementVNode)("u-input", {
              class: "li_input",
              value: $data.tell,
              onInput: _cache[0] || (_cache[0] = (...args) => $options.telljt && $options.telljt(...args)),
              onFocus: _cache[1] || (_cache[1] = (...args) => $options.settellqcshow && $options.settellqcshow(...args)),
              onBlur: _cache[2] || (_cache[2] = (...args) => $options.settellqchide && $options.settellqchide(...args)),
              type: "number",
              maxlength: "11",
              placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
              confirmType: "next",
              controlled: "true",
              autoBlur: "true",
              holdKeyboard: "true"
            }, null, 40, ["value"]),
            $data.qctellshow ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-text", {
              key: 0,
              class: "li_tell_x",
              onClick: _cache[3] || (_cache[3] = (...args) => $options.qctell && $options.qctell(...args))
            }, "\uE7FC")) : (0, import_vue.createCommentVNode)("v-if", true)
          ]),
          (0, import_vue.createElementVNode)("view", { class: "li_tell" }, [
            (0, import_vue.createElementVNode)("u-text", { class: "li_tell_l" }, "\uE7D0"),
            (0, import_vue.createElementVNode)("u-input", {
              class: "li_input",
              value: $data.pass,
              onInput: _cache[4] || (_cache[4] = (...args) => $options.passjt && $options.passjt(...args)),
              onFocus: _cache[5] || (_cache[5] = (...args) => $options.setpassqcshow && $options.setpassqcshow(...args)),
              onBlur: _cache[6] || (_cache[6] = (...args) => $options.setpassqchide && $options.setpassqchide(...args)),
              type: "password",
              maxlength: "18",
              placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
              confirmType: "next",
              controlled: "true",
              autoBlur: "true",
              holdKeyboard: "true"
            }, null, 40, ["value"]),
            $data.qcpassshow ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-text", {
              key: 0,
              class: "li_tell_x",
              onClick: _cache[7] || (_cache[7] = (...args) => $options.qcpass && $options.qcpass(...args))
            }, "\uE7FC")) : (0, import_vue.createCommentVNode)("v-if", true)
          ])
        ])
      ]),
      (0, import_vue.createElementVNode)("cell", { class: "pas_ys" }, [
        (0, import_vue.createVNode)(_component_label, {
          class: "label",
          onClick: $options.setxyzt
        }, {
          default: (0, import_vue.withCtx)(() => [
            (0, import_vue.createVNode)(_component_radio, {
              value: "0",
              checked: $data.isxyzt,
              style: { "transform": "scale(0.7)" },
              color: "#ff008a",
              disabled: ""
            }, null, 8, ["checked"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        (0, import_vue.createElementVNode)("u-text", {
          class: "txt_txt",
          onClick: _cache[8] || (_cache[8] = (...args) => $options.setxyzt && $options.setxyzt(...args))
        }, "\u5DF2\u9605\u8BFB\u5E76\u540C\u610F"),
        (0, import_vue.createElementVNode)("u-text", {
          class: "txt_url",
          onClick: _cache[9] || (_cache[9] = ($event) => $options.opllq(2))
        }, "\u7528\u6237\u534F\u8BAE"),
        (0, import_vue.createElementVNode)("u-text", {
          class: "txt_txt",
          onClick: _cache[10] || (_cache[10] = (...args) => $options.setxyzt && $options.setxyzt(...args))
        }, "\u548C"),
        (0, import_vue.createElementVNode)("u-text", {
          class: "txt_url",
          onClick: _cache[11] || (_cache[11] = ($event) => $options.opllq(1))
        }, "\u9690\u79C1\u653F\u7B56")
      ]),
      (0, import_vue.createElementVNode)("cell", { class: "op" }, [
        (0, import_vue.createElementVNode)("u-text", {
          class: "op_t1",
          onClick: _cache[12] || (_cache[12] = (...args) => $options.openzhpas && $options.openzhpas(...args))
        }, "\u627E\u56DE\u5BC6\u7801"),
        (0, import_vue.createElementVNode)("u-text", {
          class: "op_t2",
          onClick: _cache[13] || (_cache[13] = (...args) => $options.opzc && $options.opzc(...args))
        }, "\u7ACB\u5373\u6CE8\u518C")
      ]),
      (0, import_vue.createElementVNode)("cell", { class: "an" }, [
        (0, import_vue.createElementVNode)("u-text", {
          class: "pot",
          onClick: _cache[14] || (_cache[14] = (...args) => $options.potdata && $options.potdata(...args))
        }, "\u7ACB\u5373\u767B\u5F55")
      ])
    ]);
  }
  var login = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/\u5C0F\u718A\u79D8\u5B9D/pages/login/login.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/login/login";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    login.mpType = "page";
    const app = Vue.createPageApp(login, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...login.styles || []]));
    app.mount("#root");
  }
})();
