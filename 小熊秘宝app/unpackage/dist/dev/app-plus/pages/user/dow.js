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

  // F:/360MoveData/Users/abc/Desktop/小熊秘宝/unpackage/dist/dev/.nvue/uni-app.es.js
  var import_vue = __toESM(require_vue());
  function requireNativePlugin(name) {
    return weex.requireModule(name);
  }

  // F:/360MoveData/Users/abc/Desktop/小熊秘宝/unpackage/dist/dev/.nvue/ip.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  var appxx = uni.getWindowInfo();
  var appsys = uni.getDeviceInfo().deviceBrand;
  var appdvid = uni.getDeviceInfo().deviceId;
  var appname = uni.getAppBaseInfo().appName;
  var appV = uni.getAppBaseInfo().appVersionCode;
  var appVs = uni.getAppBaseInfo().appVersion;
  var appw = Number(appxx.screenWidth);
  var appt = Number(appxx.statusBarHeight);
  var apph = Number(appxx.screenHeight);
  if (appxx.safeAreaInsets.bottom > 0) {
    uni.setStorageSync("appb", appxx.safeAreaInsets.bottom);
  }
  var appb = Number(uni.getStorageSync("appb")) ? Number(uni.getStorageSync("appb")) : 0;
  var appmain_h = apph - appt - appb;

  // F:/360MoveData/Users/abc/Desktop/小熊秘宝/unpackage/dist/dev/.nvue/pages/user/dow.js
  var import_vue2 = __toESM(require_vue());
  var _style_0 = { "m": { "": { "width": "750rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx" } }, "li": { "": { "width": "690rpx", "paddingTop": "30rpx" } }, "lis": { "": { "width": "690rpx", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx", "backgroundColor": "rgba(255,255,255,1)", "borderRadius": "20rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "flex-start", "alignItems": "center" } }, "li_l": { "": { "width": "120rpx", "height": "120rpx", "lineHeight": "120rpx", "fontSize": "100rpx", "fontFamily": "iconfont", "color": "#41c500" } }, "li_c": { "": { "width": "400rpx", "height": "120rpx" } }, "li_c_t": { "": { "width": "350rpx", "height": "70rpx", "lineHeight": "70rpx", "lines": 1, "textAlign": "left", "fontSize": "30rpx" } }, "li_c_b": { "": { "width": "450rpx", "height": "50rpx", "lineHeight": "50rpx", "textAlign": "left", "fontSize": "26rpx", "color": "rgba(0,0,0,0.6)" } }, "li_r": { "": { "width": "120rpx", "height": "120rpx", "justifyContent": "space-between", "position": "relative" } }, "li_r_jd": { "": { "position": "absolute", "right": 0, "top": "15rpx", "width": "120rpx", "height": "40rpx", "lineHeight": "40rpx", "textAlign": "center", "fontSize": "26rpx" } }, "li_r_t": { "": { "width": "120rpx", "height": "50rpx", "lineHeight": "50rpx", "borderRadius": "25rpx", "textAlign": "center", "fontSize": "22rpx", "color": "#1f2531", "backgroundColor": "#ffda08" } }, "li_r_t98": { "": { "width": "120rpx", "height": "50rpx", "lineHeight": "50rpx", "borderRadius": "25rpx", "textAlign": "center", "fontSize": "22rpx", "color": "rgba(0,0,0,0.6)", "backgroundColor": "rgba(0,0,0,0.1)" } }, "li_r_b": { "": { "width": "120rpx", "height": "50rpx", "lineHeight": "50rpx", "borderRadius": "25rpx", "textAlign": "center", "fontSize": "26rpx", "backgroundColor": "rgba(0,0,0,0.1)" } } };
  var domModule = requireNativePlugin("dom");
  var _sfc_main = {
    data() {
      return {
        list: [],
        isdowtm: "",
        //计时器
        jcnum: 0,
        //进程ID
        isdowtms: "",
        dow_a_index: []
        //重要
      };
    },
    onLoad() {
      domModule.addRule("fontFace", {
        "fontFamily": "iconfont",
        "src": "url('http://www.268yx.cn/ttf/iconfontd.ttf')"
      });
    },
    onShow() {
      this.sql_c();
    },
    onHide() {
      this.list = [];
      clearInterval(this.isdowtms);
      this.jcnum = 0;
    },
    methods: {
      gototm() {
        let thi = this;
        thi.isdowtms = setInterval(() => {
          thi.getjd();
        }, 1e3);
      },
      getjd() {
        let thi = this;
        plus.sqlite.selectSql({
          name: "dowlist",
          sql: 'select dow_id,dow_jd,dow_mb from dowgmlist where dow_zt="0" limit 1',
          success: function(data) {
            if (data.length > 0) {
              let nums = thi.dow_a_index.lastIndexOf("" + data[0].dow_id);
              thi.list[nums].dow_jd = data[0].dow_jd;
              thi.list[nums].dow_mb = data[0].dow_mb;
            }
          }
        });
      },
      sql_c() {
        let thi = this;
        plus.sqlite.selectSql({
          name: "dowlist",
          sql: "select * from dowgmlist limit 50",
          success: function(data) {
            if (data.length > 0) {
              for (let i = 0; i < data.length; i++) {
                thi.list = thi.list.concat(data[i]);
                thi.dow_a_index.push("" + data[i].dow_id);
              }
              thi.gototm();
            }
          }
        });
      },
      openazb(i) {
        plus.runtime.install(this.list[i].dow_fd, { force: true }, {}, function(error) {
          uni.showToast({ icon: "none", title: "\u5B89\u88C5\u5931\u8D25", mask: false, duration: 1500 });
        });
      },
      jxdow(gmid) {
        let thi = this;
        plus.sqlite.executeSql({
          name: "dowlist",
          sql: "UPDATE dowgmlist set dow_zt='97' where dow_id='" + gmid + "'",
          success: function(e) {
            let nums = thi.dow_a_index.lastIndexOf("" + gmid);
            thi.list[nums].dow_jd = 0;
            thi.list[nums].dow_zt = 0;
          }
        });
      },
      ztdow(gmid, index) {
        let thi = this;
        plus.sqlite.executeSql({
          name: "dowlist",
          sql: "UPDATE dowgmlist set dow_zt='98' where dow_id='" + gmid + "'",
          success: function(e) {
            thi.list[index].dow_zt = 98;
            uni.$emit("updowzt", { msg: "\u6682\u505C\u6E38\u620FID" + gmid });
          }
        });
      },
      delazb(index, id) {
        let thi = this;
        plus.sqlite.executeSql({
          name: "dowlist",
          sql: "DELETE FROM dowgmlist where dow_id='" + id + "'",
          success: function(e) {
            uni.removeSavedFile({
              filePath: thi.list[index].dow_fd,
              complete: function(res) {
                thi.list.splice(index, 1);
              }
            });
            uni.showToast({ icon: "none", title: " \u5220\u9664\u6210\u529F ", mask: false, duration: 1500 });
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
    const _component_progress = (0, import_vue2.resolveComponent)("progress");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("list", { class: "m" }, [
      ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
        import_vue2.Fragment,
        null,
        (0, import_vue2.renderList)($data.list, (item, index) => {
          return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("cell", {
            class: "li",
            key: index
          }, [
            (0, import_vue2.createElementVNode)("view", {
              class: "lis",
              renderWhole: true
            }, [
              (0, import_vue2.createElementVNode)("u-text", { class: "li_l" }, "\uE881"),
              (0, import_vue2.createElementVNode)("view", {
                class: "li_c",
                renderWhole: true
              }, [
                (0, import_vue2.createElementVNode)(
                  "u-text",
                  { class: "li_c_t" },
                  (0, import_vue2.toDisplayString)(item.dow_name),
                  1
                  /* TEXT */
                ),
                (0, import_vue2.createElementVNode)(
                  "u-text",
                  { class: "li_c_b" },
                  (0, import_vue2.toDisplayString)((item.dow_mb / 1024 / 1024).toFixed(2)) + "M",
                  1
                  /* TEXT */
                )
              ]),
              (0, import_vue2.createElementVNode)("view", {
                class: "li_r",
                renderWhole: true
              }, [
                item.dow_zt == 0 ? ((0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(_component_progress, {
                  key: 0,
                  percent: item.dow_jd,
                  "stroke-width": "20",
                  "border-radius": "10",
                  activeColor: "#ffda08",
                  backgroundColor: "#ddd"
                }, null, 8, ["percent"])) : (0, import_vue2.createCommentVNode)("v-if", true),
                item.dow_zt == 0 ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
                  "u-text",
                  {
                    key: 1,
                    class: "li_r_jd"
                  },
                  (0, import_vue2.toDisplayString)(item.dow_jd) + "%",
                  1
                  /* TEXT */
                )) : (0, import_vue2.createCommentVNode)("v-if", true),
                item.dow_zt == 0 ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-text", {
                  key: 2,
                  class: "li_r_t98",
                  onClick: ($event) => $options.ztdow(item.dow_id, index)
                }, "\u6682\u505C\u4E0B\u8F7D", 8, ["onClick"])) : (0, import_vue2.createCommentVNode)("v-if", true),
                item.dow_zt == 98 ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-text", {
                  key: 3,
                  class: "li_r_t",
                  onClick: ($event) => $options.jxdow(item.dow_id, index)
                }, "\u7EE7\u7EED\u4E0B\u8F7D", 8, ["onClick"])) : (0, import_vue2.createCommentVNode)("v-if", true),
                item.dow_zt == 66 ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-text", {
                  key: 4,
                  class: "li_r_t",
                  onClick: ($event) => $options.openazb(index)
                }, "\u5B89\u88C5", 8, ["onClick"])) : (0, import_vue2.createCommentVNode)("v-if", true),
                item.dow_zt == 99 ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-text", {
                  key: 5,
                  class: "li_r_t"
                }, "\u4E0B\u8F7D\u5931\u8D25")) : (0, import_vue2.createCommentVNode)("v-if", true),
                item.dow_zt == 99 || item.dow_zt == 98 || item.dow_zt == 66 ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-text", {
                  key: 6,
                  class: "li_r_b",
                  onClick: ($event) => $options.delazb(index, item.dow_id)
                }, "\u5220\u9664", 8, ["onClick"])) : (0, import_vue2.createCommentVNode)("v-if", true)
              ])
            ])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]);
  }
  var dow = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/\u5C0F\u718A\u79D8\u5B9D/pages/user/dow.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/user/dow";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    dow.mpType = "page";
    const app = Vue.createPageApp(dow, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...dow.styles || []]));
    app.mount("#root");
  }
})();
