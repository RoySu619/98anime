import { f as formatAppLog, a as resolveEasycom } from "../../uni-app.es.js";
import { openBlock, createElementBlock, createElementVNode, normalizeClass, toDisplayString, renderSlot, resolveDynamicComponent, createVNode, withCtx, createBlock, createCommentVNode } from "vue";
import { _ as _export_sfc, G as G_APP } from "../../ip.js";
import { _ as __easycom_1 } from "../../uni-popup.js";
const popup = {
  data() {
    return {};
  },
  created() {
    this.popup = this.getParent();
  },
  methods: {
    /**
     * 获取父元素实例
     */
    getParent(name = "uniPopup") {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent)
          return false;
        parentName = parent.$options.name;
      }
      return parent;
    }
  }
};
const isObject = (val) => val !== null && typeof val === "object";
const defaultDelimiters = ["{", "}"];
class BaseFormatter {
  constructor() {
    this._caches = /* @__PURE__ */ Object.create(null);
  }
  interpolate(message, values, delimiters = defaultDelimiters) {
    if (!values) {
      return [message];
    }
    let tokens = this._caches[message];
    if (!tokens) {
      tokens = parse(message, delimiters);
      this._caches[message] = tokens;
    }
    return compile(tokens, values);
  }
}
const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, [startDelimiter, endDelimiter]) {
  const tokens = [];
  let position = 0;
  let text = "";
  while (position < format.length) {
    let char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: "text", value: text });
      }
      text = "";
      let sub = "";
      char = format[position++];
      while (char !== void 0 && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      const isClosed = char === endDelimiter;
      const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
      tokens.push({ value: sub, type });
    } else {
      text += char;
    }
  }
  text && tokens.push({ type: "text", value: text });
  return tokens;
}
function compile(tokens, values) {
  const compiled = [];
  let index = 0;
  const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
  if (mode === "unknown") {
    return compiled;
  }
  while (index < tokens.length) {
    const token = tokens[index];
    switch (token.type) {
      case "text":
        compiled.push(token.value);
        break;
      case "list":
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case "named":
        if (mode === "named") {
          compiled.push(values[token.value]);
        }
        break;
    }
    index++;
  }
  return compiled;
}
const LOCALE_ZH_HANS = "zh-Hans";
const LOCALE_ZH_HANT = "zh-Hant";
const LOCALE_EN = "en";
const LOCALE_FR = "fr";
const LOCALE_ES = "es";
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find((part) => str.indexOf(part) !== -1);
}
function startsWith(str, parts) {
  return parts.find((part) => str.indexOf(part) === 0);
}
function normalizeLocale(locale, messages2) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, "-");
  if (messages2 && messages2[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === "chinese") {
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf("zh") === 0) {
    if (locale.indexOf("-hans") > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("-hant") > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  if (messages2 && Object.keys(messages2).length > 0) {
    locales = Object.keys(messages2);
  }
  const lang = startsWith(locale, locales);
  if (lang) {
    return lang;
  }
}
class I18n {
  constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages2 || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  setLocale(locale) {
    const oldLocale = this.locale;
    this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
    if (!this.messages[this.locale]) {
      this.messages[this.locale] = {};
    }
    this.message = this.messages[this.locale];
    if (oldLocale !== this.locale) {
      this.watchers.forEach((watcher) => {
        watcher(this.locale, oldLocale);
      });
    }
  }
  getLocale() {
    return this.locale;
  }
  watchLocale(fn) {
    const index = this.watchers.push(fn) - 1;
    return () => {
      this.watchers.splice(index, 1);
    };
  }
  add(locale, message, override = true) {
    const curMessages = this.messages[locale];
    if (curMessages) {
      if (override) {
        Object.assign(curMessages, message);
      } else {
        Object.keys(message).forEach((key) => {
          if (!hasOwn(curMessages, key)) {
            curMessages[key] = message[key];
          }
        });
      }
    } else {
      this.messages[locale] = message;
    }
  }
  f(message, values, delimiters) {
    return this.formater.interpolate(message, values, delimiters).join("");
  }
  t(key, locale, values) {
    let message = this.message;
    if (typeof locale === "string") {
      locale = normalizeLocale(locale, this.messages);
      locale && (message = this.messages[locale]);
    } else {
      values = locale;
    }
    if (!hasOwn(message, key)) {
      console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
      return key;
    }
    return this.formater.interpolate(message[key], values).join("");
  }
}
function watchAppLocale(appVm, i18n) {
  if (appVm.$watchLocale) {
    appVm.$watchLocale((newLocale) => {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(() => appVm.$locale, (newLocale) => {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== "undefined" && uni.getLocale) {
    return uni.getLocale();
  }
  if (typeof global !== "undefined" && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
  if (typeof locale !== "string") {
    [locale, messages2] = [
      messages2,
      locale
    ];
  }
  if (typeof locale !== "string") {
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== "string") {
    fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  const i18n = new I18n({
    locale,
    fallbackLocale,
    messages: messages2,
    watcher
  });
  let t2 = (key, values) => {
    if (typeof getApp !== "function") {
      t2 = function(key2, values2) {
        return i18n.t(key2, values2);
      };
    } else {
      let isWatchedAppLocale = false;
      t2 = function(key2, values2) {
        const appVm = getApp().$vm;
        if (appVm) {
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key2, values2);
      };
    }
    return t2(key, values);
  };
  return {
    i18n,
    f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t(key, values) {
      return t2(key, values);
    },
    add(locale2, message, override = true) {
      return i18n.add(locale2, message, override);
    },
    watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale() {
      return i18n.getLocale();
    },
    setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
const en = {
  "uni-popup.cancel": "cancel",
  "uni-popup.ok": "ok",
  "uni-popup.placeholder": "pleace enter",
  "uni-popup.title": "Hint",
  "uni-popup.shareTitle": "Share to"
};
const zhHans = {
  "uni-popup.cancel": "取消",
  "uni-popup.ok": "确定",
  "uni-popup.placeholder": "请输入",
  "uni-popup.title": "提示",
  "uni-popup.shareTitle": "分享到"
};
const zhHant = {
  "uni-popup.cancel": "取消",
  "uni-popup.ok": "確定",
  "uni-popup.placeholder": "請輸入",
  "uni-popup.title": "提示",
  "uni-popup.shareTitle": "分享到"
};
const messages = {
  en,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant
};
const _style_0$1 = { "uni-popup-dialog": { "": { "width": 300, "borderRadius": 11, "backgroundColor": "#ffffff" } }, "uni-dialog-title": { "": { "flexDirection": "row", "justifyContent": "center", "paddingTop": 25 } }, "uni-dialog-title-text": { "": { "fontSize": 16, "fontWeight": "500" } }, "uni-dialog-content": { "": { "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "paddingTop": 20, "paddingRight": 20, "paddingBottom": 20, "paddingLeft": 20 } }, "uni-dialog-content-text": { "": { "fontSize": 14, "color": "#6C6C6C" } }, "uni-dialog-button-group": { "": { "flexDirection": "row", "borderTopColor": "rgba(0,0,0,0.1)", "borderTopStyle": "solid", "borderTopWidth": 0.5 } }, "uni-dialog-button": { "": { "flex": 1, "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "height": 45 } }, "uni-border-left": { "": { "borderLeftColor": "rgba(0,0,0,0.1)", "borderLeftStyle": "solid", "borderLeftWidth": 0.5 } }, "uni-dialog-button-text": { "": { "fontSize": 13, "color": "rgba(0,0,0,0.5)" } }, "uni-button-color": { "": { "fontSize": 13, "color": "#ffda08" } }, "uni-dialog-input": { "": { "flex": 1, "fontSize": 14, "borderWidth": 0.5, "borderStyle": "solid", "borderColor": "rgba(0,0,0,0.1)", "height": 40, "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10, "borderRadius": 5, "color": "#000000" } }, "uni-popup__success": { "": { "color": "#ffda08" } }, "uni-popup__warn": { "": { "color": "#f0ad4e" } }, "uni-popup__error": { "": { "color": "#dd524d" } }, "uni-popup__info": { "": { "color": "#909399" } } };
const { t } = initVueI18n(messages);
const _sfc_main$1 = {
  name: "uniPopupDialog",
  mixins: [popup],
  emits: ["confirm", "close"],
  props: {
    inputType: {
      type: String,
      default: "text"
    },
    value: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "error"
    },
    mode: {
      type: String,
      default: "base"
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    beforeClose: {
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String,
      default: ""
    },
    confirmText: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      dialogType: "error",
      focus: false,
      val: ""
    };
  },
  computed: {
    okText() {
      return this.confirmText || t("uni-popup.ok");
    },
    closeText() {
      return this.cancelText || t("uni-popup.cancel");
    },
    placeholderText() {
      return this.placeholder || t("uni-popup.placeholder");
    },
    titleText() {
      return this.title || t("uni-popup.title");
    }
  },
  watch: {
    type(val) {
      this.dialogType = val;
    },
    mode(val) {
      if (val === "input") {
        this.dialogType = "info";
      }
    },
    value(val) {
      this.val = val;
    }
  },
  created() {
    this.popup.disableMask();
    if (this.mode === "input") {
      this.dialogType = "info";
      this.val = this.value;
    } else {
      this.dialogType = this.type;
    }
  },
  mounted() {
    this.focus = true;
  },
  methods: {
    /**
     * 点击确认按钮
     */
    onOk() {
      if (this.mode === "input") {
        this.$emit("confirm", this.val);
      } else {
        this.$emit("confirm");
      }
      if (this.beforeClose)
        return;
      this.popup.close();
    },
    /**
     * 点击取消按钮
     */
    closeDialog() {
      this.$emit("close");
      if (this.beforeClose)
        return;
      this.popup.close();
    },
    close() {
      this.popup.close();
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "uni-popup-dialog",
    renderWhole: true
  }, [
    createElementVNode("view", { class: "uni-dialog-title" }, [
      createElementVNode("u-text", {
        class: normalizeClass(["uni-dialog-title-text", ["uni-popup__" + $data.dialogType]])
      }, toDisplayString($options.titleText), 3)
    ]),
    $props.mode === "base" ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "uni-dialog-content"
    }, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createElementVNode("u-text", { class: "uni-dialog-content-text" }, toDisplayString($props.content), 1)
      ])
    ])) : (openBlock(), createElementBlock("view", {
      key: 1,
      class: "uni-dialog-content"
    }, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createElementVNode("u-input", {
          class: "uni-dialog-input",
          modelValue: $data.val,
          onInput: _cache[0] || (_cache[0] = ($event) => $data.val = $event.detail.value),
          type: $props.inputType,
          placeholder: $options.placeholderText,
          focus: $data.focus
        }, null, 40, ["modelValue", "type", "placeholder", "focus"])
      ])
    ])),
    createElementVNode("view", { class: "uni-dialog-button-group" }, [
      createElementVNode("view", {
        class: "uni-dialog-button",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.closeDialog && $options.closeDialog(...args))
      }, [
        createElementVNode("u-text", { class: "uni-dialog-button-text" }, toDisplayString($options.closeText), 1)
      ]),
      createElementVNode("view", {
        class: "uni-dialog-button uni-border-left",
        onClick: _cache[2] || (_cache[2] = (...args) => $options.onOk && $options.onOk(...args))
      }, [
        createElementVNode("u-text", { class: "uni-dialog-button-text uni-button-color" }, toDisplayString($options.okText), 1)
      ])
    ])
  ]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]]]);
const _style_0 = { "out": { "": { "paddingLeft": "30rpx", "paddingRight": "30rpx" } }, "out_t": { "": { "height": "100rpx", "lineHeight": "100rpx", "textAlign": "center", "fontSize": "32rpx", "borderRadius": "50rpx", "marginTop": "50rpx", "backgroundColor": "#ffda08", "color": "#131220" } }, "li": { "": { "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center", "height": "100rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "borderTopWidth": "0.5rpx", "borderTopStyle": "solid", "borderTopColor": "rgba(0,0,0,0.05)" } }, "lis": { "": { "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center", "height": "100rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "borderTopWidth": "0.5rpx", "borderTopStyle": "solid", "borderTopColor": "rgba(0,0,0,0.05)", "borderBottomWidth": "0.5rpx", "borderBottomStyle": "solid", "borderBottomColor": "rgba(0,0,0,0.05)" } }, "li_l": { "": { "fontSize": "32rpx" } }, "li_r": { "": { "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "flex-end", "alignItems": "center" } }, "li_r_t": { "": { "fontSize": "24rpx", "color": "rgba(0,0,0,0.5)" } }, "li_r_img": { "": { "width": "60rpx", "height": "60rpx", "borderRadius": "30rpx" } }, "li_r_i": { "": { "width": "40rpx", "height": "40rpx", "lineHeight": "40rpx", "fontSize": "35rpx", "fontFamily": "iconfont", "color": "rgba(0,0,0,0.5)" } } };
const _sfc_main = {
  data() {
    return {
      ip: G_APP.ip,
      ulogo: "../../static/uslogo.png",
      nick: "",
      pass1: "",
      pass2: ""
    };
  },
  onLoad() {
  },
  onReady() {
    this.get();
  },
  methods: {
    delus() {
      let thi = this;
      uni.showModal({
        title: "温馨提示！",
        content: "你确定要注销该账号吗？\n注销后账号后\n1.不可再次登陆\n2.账号资料全部清除\n3.APP登陆记录全部清除\n点击确定注销立即生效，生效后无法找回，谨慎操作！",
        confirmText: "确定注销",
        confirmColor: "#33ffb4",
        placeholderText: this.nick,
        success: function(res) {
          if (res.confirm) {
            uni.request({
              url: G_APP.ip + "appapi.php?to=user&op=uszxdll",
              method: "POST",
              header: {
                "content-type": "application/x-www-form-urlencoded"
              },
              dataType: "json",
              enableCache: false,
              defer: false,
              data: {
                "ddel": "go"
              },
              success: (ret) => {
                formatAppLog("log", "at pages/user/set.nvue:92", ret);
                if (ret.data.msg == 66) {
                  thi.out();
                  uni.showToast({ icon: "none", title: " 已为您注销成功！ ", mask: false, duration: 1500 });
                }
              }
            });
          }
        }
      });
    },
    openpasset() {
      this.$refs.passmain.open();
    },
    clospass() {
      this.$refs.passmain.close();
      this.pass1 = "";
      this.pass2 = "";
    },
    setpass1(e) {
      if (e.length >= 6) {
        this.pass1 = e;
      } else {
        this.pass1 = "";
        uni.showToast({ icon: "none", title: " 密码最小6位！ ", duration: 2e3 });
      }
    },
    setpass2(e) {
      let thi = this;
      if (e.length >= 6) {
        if (thi.pass1 != e) {
          uni.request({
            url: G_APP.ip + "appapi.php?to=user&op=user_xpas",
            method: "POST",
            header: {
              "content-type": "application/x-www-form-urlencoded"
            },
            dataType: "json",
            enableCache: false,
            defer: false,
            data: {
              "xpass": "go",
              "mypass1": thi.pass1,
              "mypass2": e
            },
            success: (ret) => {
              let db = JSON.parse(ret.data);
              if (db == 4) {
                thi.pass1 = "";
                thi.pass2 = "";
                uni.showToast({ icon: "none", title: " 原密码错误！ ", mask: false, duration: 1500 });
              }
              if (db != 4 && db != 66) {
                thi.pass1 = "";
                thi.pass2 = "";
                uni.showToast({ icon: "none", title: " 修改失败 ", mask: false, duration: 1500 });
              }
              if (db == 66) {
                thi.pass1 = "";
                thi.pass2 = "";
                thi.out();
                uni.showToast({ icon: "none", title: " 密码修改成,请重新登录！ ", mask: false, duration: 1500 });
              }
            }
          });
        } else {
          thi.pass1 = "";
          thi.pass2 = "";
          uni.showToast({ icon: "none", title: " 旧密码和新密码相同！ ", duration: 2e3 });
        }
      } else {
        thi.pass2 = "";
        uni.showToast({ icon: "none", title: " 新密码最小6位！ ", duration: 2e3 });
      }
    },
    opennickset() {
      this.$refs.nickmain.open();
    },
    setnick(e) {
      let thi = this;
      if (e.length > 1 && e.length < 9) {
        uni.request({
          url: G_APP.ip + "appapi.php?to=user&op=user_nick",
          method: "POST",
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          dataType: "json",
          enableCache: false,
          defer: false,
          data: {
            "xnick": "go",
            "mynick": e
          },
          success: (ret) => {
            let db = JSON.parse(ret.data);
            if (db == 1) {
              uni.showToast({ icon: "none", title: " 请先登录 ", mask: false, duration: 1500 });
            }
            if (db == 2) {
              uni.showToast({ icon: "none", title: " 昵称不能为空 ", mask: false, duration: 1500 });
            }
            if (db == 66) {
              uni.$emit("login", { msg: "yes" });
              thi.nick = e;
              uni.showToast({ icon: "none", title: " 修改昵称成功！ ", mask: false, duration: 1500 });
            }
          }
        });
      }
    },
    openlogoset() {
      let thi = this;
      uni.chooseImage({
        count: 1,
        crop: {
          quality: 80,
          width: 200,
          height: 200
        },
        sizeType: ["original", "compressed"],
        success: function(res) {
          if (res.tempFilePaths) {
            uni.showLoading({
              title: "正在上传中"
              //mask:true,
            });
            uni.uploadFile({
              url: G_APP.ip + "appapi.php?to=user&op=user_logo",
              filePath: res.tempFilePaths[0],
              name: "upfile",
              formData: {
                "xlogo": "go"
              },
              success: (uploadFileRes) => {
                if (uploadFileRes.data) {
                  let db = JSON.parse(uploadFileRes.data);
                  if (db[0] == 66) {
                    uni.$emit("login", { msg: "yes" });
                    thi.ulogo = res.tempFilePaths[0];
                    uni.showToast({
                      icon: "none",
                      title: " 修改成功 ",
                      duration: 2e3
                    });
                    uni.hideLoading();
                  }
                  if (db[0] == 2) {
                    uni.showToast({
                      icon: "none",
                      title: " 上传失败了。 ",
                      duration: 2e3
                    });
                    uni.hideLoading();
                  }
                  if (db[0] == 1) {
                    uni.showToast({
                      icon: "none",
                      title: " 上传失败！ ",
                      duration: 2e3
                    });
                    uni.hideLoading();
                  }
                } else {
                  uni.showToast({ icon: "none", title: " 上传失败，请稍后再试！ ", duration: 2e3 });
                }
              }
            });
          }
        }
      });
    },
    get() {
      let thi = this;
      uni.request({
        url: G_APP.ip + "appapi.php?to=user",
        method: "GET",
        dataType: "json",
        enableCache: true,
        //缓存
        defer: true,
        //控制当前请求是否延时至首屏内容渲染后发送
        data: {
          "myusapp": "go"
        },
        success: (ret) => {
          if (ret.data.msg == "yes") {
            if (ret.data.ulogo) {
              thi.ulogo = thi.ip + ret.data.ulogo;
            }
            if (ret.data.unick) {
              thi.nick = ret.data.unick;
            }
          }
        }
      });
    },
    out() {
      let thi = this;
      uni.showLoading({
        title: "正在登录退出"
      });
      uni.request({
        url: thi.ip + "appapi.php?to=out",
        method: "POST",
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        dataType: "json",
        enableCache: false,
        defer: false,
        data: {
          "login": "out"
        },
        success: (res) => {
          if (res.data == "ok") {
            uni.$emit("login", { msg: "yes" });
            setTimeout(function() {
              uni.hideLoading();
              uni.showToast({
                icon: "none",
                title: " 退出成功。 ",
                duration: 2e3
              });
              uni.navigateBack();
            }, 1e3);
          }
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_popup_dialog = resolveEasycom(resolveDynamicComponent("uni-popup-dialog"), __easycom_0);
  const _component_uni_popup = resolveEasycom(resolveDynamicComponent("uni-popup"), __easycom_1);
  return openBlock(), createElementBlock("view", null, [
    createElementVNode("list", null, [
      createElementVNode("cell", { class: "li" }, [
        createElementVNode("u-text", { class: "li_l" }, "资料设置"),
        createElementVNode("view", {
          class: "li_r",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.openlogoset && $options.openlogoset(...args))
        }, [
          createElementVNode("u-image", {
            class: "li_r_img",
            src: $data.ulogo
          }, null, 8, ["src"]),
          createElementVNode("u-text", { class: "li_r_i" }, "")
        ])
      ]),
      createElementVNode("cell", { class: "li" }, [
        createElementVNode("u-text", { class: "li_l" }, "昵称"),
        createElementVNode("view", {
          class: "li_r",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.opennickset && $options.opennickset(...args))
        }, [
          createElementVNode("u-text", { class: "li_r_t" }, toDisplayString($data.nick), 1),
          createElementVNode("u-text", { class: "li_r_i" }, "")
        ])
      ]),
      createElementVNode("cell", { class: "li" }, [
        createElementVNode("u-text", { class: "li_l" }, "修改密码"),
        createElementVNode("view", {
          class: "li_r",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.openpasset && $options.openpasset(...args))
        }, [
          createElementVNode("u-text", { class: "li_r_t" }, "修改APP登录密码"),
          createElementVNode("u-text", { class: "li_r_i" }, "")
        ])
      ]),
      createElementVNode("cell", {
        class: "lis",
        onClick: _cache[3] || (_cache[3] = (...args) => $options.delus && $options.delus(...args))
      }, [
        createElementVNode("u-text", { class: "li_l" }, "注销账号"),
        createElementVNode("view", { class: "li_r" }, [
          createElementVNode("u-text", { class: "li_r_t" }, "注销后将彻底清除"),
          createElementVNode("u-text", { class: "li_r_i" }, "")
        ])
      ]),
      createElementVNode("cell", { style: { "height": "150rpx" } }),
      createElementVNode("cell", {
        class: "lis",
        onClick: _cache[4] || (_cache[4] = (...args) => $options.out && $options.out(...args))
      }, [
        createElementVNode("u-text", { class: "li_l" }, "退出登录"),
        createElementVNode("view", { class: "li_r" }, [
          createElementVNode("u-text", { class: "li_r_t" }),
          createElementVNode("u-text", { class: "li_r_i" }, "")
        ])
      ])
    ]),
    createVNode(_component_uni_popup, {
      type: "dialog",
      ref: "nickmain",
      "is-mask-click": false,
      "render-whole": true
    }, {
      default: withCtx(() => [
        createVNode(_component_uni_popup_dialog, {
          mode: "input",
          confirmText: "确定修改",
          title: "修改昵称",
          placeholder: "请输入您的个性昵称,最多8个字",
          onConfirm: $options.setnick
        }, null, 8, ["onConfirm"])
      ]),
      _: 1
    }, 512),
    createVNode(_component_uni_popup, {
      type: "dialog",
      ref: "passmain",
      "is-mask-click": false,
      "render-whole": true
    }, {
      default: withCtx(() => [
        $data.pass1 == "" ? (openBlock(), createBlock(_component_uni_popup_dialog, {
          key: 0,
          "before-close": "",
          mode: "input",
          confirmText: "下一步",
          title: "修改登录密码",
          placeholder: "请输入原密码",
          onConfirm: $options.setpass1,
          onClose: $options.clospass
        }, null, 8, ["onConfirm", "onClose"])) : createCommentVNode("", true),
        $data.pass1 && $data.pass2 == "" ? (openBlock(), createBlock(_component_uni_popup_dialog, {
          key: 1,
          mode: "input",
          confirmText: "确定修改",
          title: "修改登录密码",
          placeholder: "请输入新密码",
          onConfirm: $options.setpass2,
          onClose: $options.clospass
        }, null, 8, ["onConfirm", "onClose"])) : createCommentVNode("", true)
      ]),
      _: 1
    }, 512)
  ]);
}
const set = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  set as default
};
