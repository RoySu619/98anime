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

  // F:/360MoveData/Users/abc/Desktop/小熊秘宝/unpackage/dist/dev/.nvue/pages/login/login_zc.js
  var import_vue = __toESM(require_vue());
  var _style_0 = { "top": { "": { "height": "50rpx" } }, "li": { "": { "paddingLeft": "60rpx", "paddingRight": "60rpx", "justifyContent": "flex-start", "alignItems": "center", "flexDirection": "row", "flexWrap": "nowrap" } }, "pas": { "": { "paddingTop": "20rpx", "paddingLeft": "60rpx", "paddingRight": "60rpx", "justifyContent": "flex-start", "alignItems": "center", "flexDirection": "row", "flexWrap": "nowrap" } }, "pas_ys": { "": { "paddingLeft": "60rpx", "paddingRight": "60rpx", "height": "100rpx", "justifyContent": "flex-start", "alignItems": "center", "flexDirection": "row", "flexWrap": "nowrap" } }, "txt_url": { "": { "color": "#ffda08", "height": "100rpx", "lineHeight": "100rpx", "fontSize": "26rpx", "paddingLeft": "10rpx", "paddingRight": "10rpx" } }, "txt_txt": { "": { "height": "100rpx", "lineHeight": "100rpx", "fontSize": "26rpx" } }, "txt_txt_tis": { "": { "fontSize": "26rpx", "paddingLeft": "5rpx", "color": "#ffffff" } }, "li_tell": { "": { "width": "630rpx", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx", "borderRadius": "50rpx", "backgroundColor": "rgba(0,0,0,0.05)", "justifyContent": "flex-start", "alignItems": "center", "flexDirection": "row", "flexWrap": "nowrap" } }, "li_tell_l": { "": { "fontFamily": "iconfont", "width": "80rpx", "height": "40rpx", "lineHeight": "40rpx", "textAlign": "center", "fontSize": "40rpx" } }, "li_tell_gd": { "": { "width": "80rpx", "height": "40rpx" } }, "li_input": { "": { "paddingLeft": "10rpx", "width": "500rpx", "height": "50rpx", "fontSize": "28rpx", "lineHeight": "50rpx" } }, "li_inputs": { "": { "paddingLeft": "10rpx", "width": "360rpx", "height": "50rpx", "fontSize": "28rpx", "lineHeight": "50rpx" } }, "li_tell_x": { "": { "width": "50rpx", "height": "50rpx", "paddingTop": "5rpx", "paddingRight": "5rpx", "paddingBottom": "5rpx", "paddingLeft": "5rpx" } }, "li_tell_yzm": { "": { "width": "150rpx", "height": "50rpx", "lineHeight": "50rpx", "fontSize": "26rpx", "textAlign": "center", "color": "#d4b506" } }, "tis": { "": { "width": "630rpx", "height": "80rpx", "lineHeight": "80rpx", "fontSize": "26rpx", "color": "rgba(255,255,255,0.8)" } }, "pot": { "": { "width": "630rpx", "height": "100rpx", "lineHeight": "100rpx", "borderRadius": "50rpx", "backgroundColor": "#ffda08", "textAlign": "center", "fontSize": "30rpx" } }, "oppas": { "": { "marginTop": "20rpx", "width": "630rpx", "borderWidth": "0.5rpx", "borderStyle": "solid", "borderColor": "rgba(255,255,255,0.1)", "backgroundColor": "rgba(255,255,255,0.1)", "color": "#ffffff", "fontSize": "28rpx", "height": "80rpx", "lineHeight": "80rpx", "borderRadius": "10rpx", "textAlign": "center" } } };
  var _sfc_main = {
    data() {
      return {
        myqdid: 0,
        //推广人ID
        pas: "",
        tell: "",
        isxyzt: false,
        yzm: "",
        yzmnumtm: "",
        yzmzt: false,
        yzmnum: "\u83B7\u53D6\u9A8C\u8BC1\u7801",
        yzmnums: "60"
      };
    },
    onLoad() {
      const qdid = uni.getStorageSync("tgid");
      if (qdid) {
        this.myqdid = qdid;
      }
    },
    methods: {
      potdata() {
        uni.showLoading({
          title: "\u8BF7\u7A0D\u540E...",
          mask: true
        });
        uni.hideKeyboard();
        let thi = this;
        if (thi.isxyzt) {
          if (thi.pas && thi.tell && thi.yzm) {
            uni.request({
              url: G_APP.ip + "appapi.php?to=register",
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
                lregzc: "go",
                uname: thi.tell,
                upass: thi.pas,
                yzma: thi.yzm,
                sbname: G_APP.appdvid,
                qd: thi.myqdid
              },
              success: (res) => {
                let msg = res.data[0];
                uni.hideLoading();
                if (msg == 0) {
                  uni.showToast({ icon: "none", title: " \u8D26\u53F7\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A ", duration: 2e3 });
                }
                if (msg == 1) {
                  uni.showToast({ icon: "none", title: " \u8BF7\u8F93\u5165\u624B\u673A\u53F7\uFF01 ", duration: 2e3 });
                }
                if (msg == 3) {
                  uni.showToast({ icon: "none", title: " \u8BE5\u624B\u673A\u5DF2\u88AB\u6CE8\u518C\uFF01 ", duration: 2e3 });
                }
                if (msg == 2) {
                  uni.showToast({ icon: "none", title: " \u9A8C\u8BC1\u7801\u9519\u8BEF\u8BF7\u91CD\u8BD5\uFF01 ", duration: 2e3 });
                }
                if (msg == 66) {
                  setTimeout(() => {
                    uni.navigateBack({ delta: 1 });
                  }, 1e3);
                  uni.showToast({ icon: "none", title: " \u6CE8\u518C\u6210\u529F ", duration: 2e3 });
                }
              }
            });
          } else {
            if (thi.tell == "") {
              uni.showToast({ icon: "none", title: " \u8BF7\u8F93\u5165\u767B\u5F55\u624B\u673A\u53F7 ", duration: 2e3 });
            } else if (thi.pas == "") {
              uni.showToast({ icon: "none", title: " \u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801 ", duration: 2e3 });
            } else if (thi.yzm == "") {
              uni.showToast({ icon: "none", title: " \u8BF7\u8F93\u5165\u77ED\u606F\u9A8C\u8BC1\u7801 ", duration: 2e3 });
            }
          }
        } else {
          uni.showToast({ icon: "none", title: " \u60A8\u672A\u540C\u610F\u7528\u6237\u534F\u8BAE,\u670D\u52A1\u534F\u8BAE,\u8BF7\u8BA4\u771F\u9605\u8BFB\u5E76\u52FE\u9009\u540C\u610F\u5168\u90E8\u534F\u8BAE ", duration: 2e3 });
        }
      },
      getyzm() {
        let thi = this;
        if (thi.tell && thi.yzmzt == false) {
          uni.request({
            url: G_APP.ip + "appapi.php?to=seccode",
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
              yzma: "go",
              tell: thi.tell
            },
            success: (res) => {
              if (res.data.Message == "OK") {
                thi.yzm = res.data.code;
                thi.gotopotzt = 1;
                uni.hideLoading();
                thi.yzmzt = true;
                thi.setyzmnum();
                uni.showToast({ icon: "none", title: " \u83B7\u53D6\u9A8C\u8BC1\u7801\u6210\u529F ", duration: 2e3 });
              } else {
                uni.showToast({ icon: "none", title: " \u8BF7\u6C42\u88AB\u9650\u5236\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01 ", duration: 2e3 });
              }
            }
          });
        }
      },
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
      setyzmnum() {
        this.yzmnumtm = setInterval(() => {
          this.yzmnums = this.yzmnums - 1;
          this.yzmnum = this.yzmnums + "s\u540E\u518D\u8BD5";
          if (this.yzmnums == 1) {
            clearInterval(this.yzmnumtm);
            this.yzmzt = false;
            this.yzmnum = "\u83B7\u53D6\u9A8C\u8BC1\u7801";
            this.yzmnums = 60;
          }
        }, 1e3);
      },
      inputtel(e) {
        this.tell = e.detail.value;
      },
      inputpas(e) {
        this.pas = e.detail.value;
      },
      inputtz(e) {
        this.yzm = e.detail.value;
      }
    },
    onNavigationBarButtonTap(e) {
      if (e.index == "0") {
        uni.navigateBack();
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_radio = (0, import_vue.resolveComponent)("radio");
    const _component_label = (0, import_vue.resolveComponent)("label");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("list", null, [
      (0, import_vue.createElementVNode)("cell", { class: "top" }),
      (0, import_vue.createElementVNode)("cell", { class: "li" }, [
        (0, import_vue.createElementVNode)("u-text", { class: "tis" }, "\u624B\u673A\u53F7")
      ]),
      (0, import_vue.createElementVNode)("cell", { class: "li" }, [
        (0, import_vue.createElementVNode)("view", { class: "li_tell" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "li_tell_l" }, "\uE7B2"),
          (0, import_vue.createElementVNode)("u-input", {
            class: "li_input",
            value: $data.tell,
            onInput: _cache[0] || (_cache[0] = (...args) => $options.inputtel && $options.inputtel(...args)),
            type: "text",
            maxlength: "11",
            placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
            confirmType: "next",
            controlled: "true",
            focus: "",
            autoBlur: "",
            holdKeyboard: "true"
          }, null, 40, ["value"])
        ])
      ]),
      (0, import_vue.createElementVNode)("cell", { class: "li" }, [
        (0, import_vue.createElementVNode)("u-text", { class: "tis" }, "\u767B\u5F55\u5BC6\u7801\uFF08\u5BC6\u7801\u5141\u8BB8\u7279\u6B8A\u7B26\u53F7 .\uFF09")
      ]),
      (0, import_vue.createElementVNode)("cell", { class: "li" }, [
        (0, import_vue.createElementVNode)("view", { class: "li_tell" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "li_tell_l" }, "\uE7D0"),
          (0, import_vue.createElementVNode)("u-input", {
            class: "li_input",
            value: $data.pas,
            onInput: _cache[1] || (_cache[1] = (...args) => $options.inputpas && $options.inputpas(...args)),
            type: "text",
            password: "true",
            maxlength: "18",
            placeholder: "\u8BF7\u8BBE\u7F6E\u5BC6\u7801",
            confirmType: "next",
            controlled: "true",
            autoBlur: "",
            holdKeyboard: "true"
          }, null, 40, ["value"])
        ])
      ]),
      (0, import_vue.createElementVNode)("cell", { class: "li" }, [
        (0, import_vue.createElementVNode)("u-text", { class: "tis" }, "\u9A8C\u8BC1\u7801")
      ]),
      (0, import_vue.createElementVNode)("cell", { class: "li" }, [
        (0, import_vue.createElementVNode)("view", { class: "li_tell" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "li_tell_l" }, "\uE7EB"),
          (0, import_vue.createElementVNode)("u-input", {
            class: "li_inputs",
            value: $data.yzm,
            onInput: _cache[2] || (_cache[2] = (...args) => $options.inputtz && $options.inputtz(...args)),
            type: "number",
            maxlength: "6",
            placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
            confirmType: "next",
            controlled: "true",
            autoBlur: "",
            holdKeyboard: "true"
          }, null, 40, ["value"]),
          (0, import_vue.createElementVNode)(
            "u-text",
            {
              class: "li_tell_yzm",
              onClick: _cache[3] || (_cache[3] = ($event) => $options.getyzm())
            },
            (0, import_vue.toDisplayString)($data.yzmnum),
            1
            /* TEXT */
          )
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
          onClick: _cache[4] || (_cache[4] = (...args) => $options.setxyzt && $options.setxyzt(...args))
        }, "\u5DF2\u9605\u8BFB\u5E76\u540C\u610F"),
        (0, import_vue.createElementVNode)("u-text", {
          class: "txt_url",
          onClick: _cache[5] || (_cache[5] = ($event) => $options.opllq(2))
        }, "\u7528\u6237\u534F\u8BAE"),
        (0, import_vue.createElementVNode)("u-text", {
          class: "txt_txt",
          onClick: _cache[6] || (_cache[6] = (...args) => $options.setxyzt && $options.setxyzt(...args))
        }, "\u548C"),
        (0, import_vue.createElementVNode)("u-text", {
          class: "txt_url",
          onClick: _cache[7] || (_cache[7] = ($event) => $options.opllq(1))
        }, "\u9690\u79C1\u653F\u7B56")
      ]),
      (0, import_vue.createElementVNode)("cell", { class: "li" }, [
        (0, import_vue.createElementVNode)("u-text", { class: "tis" })
      ]),
      (0, import_vue.createElementVNode)("cell", { class: "li" }, [
        (0, import_vue.createElementVNode)("u-text", {
          class: "pot",
          onClick: _cache[8] || (_cache[8] = (...args) => $options.potdata && $options.potdata(...args))
        }, "\u786E\u5B9A\u6CE8\u518C")
      ])
    ]);
  }
  var login_zc = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/\u5C0F\u718A\u79D8\u5B9D/pages/login/login_zc.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/login/login_zc";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    login_zc.mpType = "page";
    const app = Vue.createPageApp(login_zc, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...login_zc.styles || []]));
    app.mount("#root");
  }
})();
