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
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
  var isString = (val) => typeof val === "string";
  function requireNativePlugin(name) {
    return weex.requireModule(name);
  }
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return isString(component) ? easycom : component;
  }

  // F:/360MoveData/Users/abc/Desktop/小熊秘宝/unpackage/dist/dev/.nvue/pages/user/set.js
  var import_vue3 = __toESM(require_vue());

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

  // F:/360MoveData/Users/abc/Desktop/小熊秘宝/unpackage/dist/dev/.nvue/uni-popup.js
  var import_vue2 = __toESM(require_vue());
  var nvueAnimation = requireNativePlugin("animation");
  var MPAnimation = class {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation(options);
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, __spreadValues({
          styles
        }, config), (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.currentStepAnimates[this.next].config = Object.assign({}, this.options, config);
      this.currentStepAnimates[this.next].styles.transformOrigin = this.currentStepAnimates[this.next].config.transformOrigin;
      this.next++;
      return this;
    }
    run(fn) {
      this.isEnd = false;
      let ref = this.$.$refs["ani"] && this.$.$refs["ani"].ref;
      if (!ref)
        return;
      this._nvueNextAnimate(this.currentStepAnimates, 0, fn);
      this.next = 0;
    }
  };
  var animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  var animateTypes2 = ["opacity", "backgroundColor"];
  var animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this._nvuePushAnimates(type, args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  var _sfc_main$1 = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      // 生成样式数据
      stylesObject() {
        let styles = __spreadProps(__spreadValues({}, this.styles), {
          "transition-duration": this.duration / 1e3 + "s"
        });
        let transform = "";
        for (let i in styles) {
          let line = this.toLine(i);
          transform += line + ":" + styles[i] + ";";
        }
        return transform;
      },
      // 初始化动画条件
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      /**
       *  ref 触发 初始化动画
       */
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      /**
       * 点击组件触发回调
       */
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      /**
       * ref 触发 动画分组
       * @param {Object} obj
       */
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i in obj) {
          try {
            if (typeof obj[i] === "object") {
              this.animation[i](...obj[i]);
            } else {
              this.animation[i](obj[i]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:139", `\u65B9\u6CD5 ${i} \u4E0D\u5B58\u5728`);
          }
        }
        this.animation.step(config);
        return this;
      },
      /**
       *  ref 触发 执行动画
       */
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      // 开始过度动画
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      // 关闭过度动画
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      // 处理动画开始前的默认样式
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      // 处理内置组合动画
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      // 内置动画类型与实际动画对应字典
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      // 驼峰转中横线
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.isShow ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
      key: 0,
      ref: "ani",
      animation: $data.animationData,
      class: (0, import_vue2.normalizeClass)($props.customClass),
      style: (0, import_vue2.normalizeStyle)($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args)),
      renderWhole: true
    }, [
      (0, import_vue2.renderSlot)(_ctx.$slots, "default")
    ], 14, ["animation"])) : (0, import_vue2.createCommentVNode)("v-if", true);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "F:/360MoveData/Users/abc/Desktop/\u5C0F\u718A\u79D8\u5B9D/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  var _style_0 = { "uni-popup": { "": { "position": "fixed" }, ".top": { "top": 0 }, ".left": { "top": 0 }, ".right": { "top": 0 } }, "uni-popup__wrapper": { ".uni-popup ": { "position": "relative" }, ".uni-popup .left": { "paddingTop": 0, "flex": 1 }, ".uni-popup .right": { "paddingTop": 0, "flex": 1 } }, "fixforpc-top": { "": { "top": 0 } } };
  var _sfc_main = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      // 开启动画
      animation: {
        type: Boolean,
        default: true
      },
      // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
      // message: 消息提示 ; dialog : 对话框
      type: {
        type: String,
        default: "center"
      },
      // maskClick
      isMaskClick: {
        type: Boolean,
        default: null
      },
      // TODO 2 个版本后废弃属性 ，使用 isMaskClick
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      }
    },
    watch: {
      /**
       * 监听type类型
       */
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      /**
       * 监听遮罩是否可点击
       * @param {Object} val
       */
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      // H5 下禁止底部滚动
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: this.isDesktop ? "fixforpc-top" : "top"
      };
    },
    computed: {
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    // TODO vue3
    unmounted() {
      this.setH5Visible();
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible() {
      },
      /**
       * 公用方法，不显示遮罩层
       */
      closeMask() {
        this.maskShow = false;
      },
      /**
       * 公用方法，遮罩层禁止点击
       */
      disableMask() {
        this.mkclick = false;
      },
      // TODO nvue 取消冒泡
      clear(e) {
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          return;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at components/uni-popup/uni-popup.vue:279", "\u7F3A\u5C11\u7C7B\u578B\uFF1A", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      /**
       * 顶部弹出样式处理
       */
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      /**
       * 底部弹出样式处理
       */
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      /**
       * 中间弹出样式处理
       */
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uni-transition"), __easycom_0);
    return $data.showPopup ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        key: 0,
        class: (0, import_vue2.normalizeClass)(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]]),
        renderWhole: true
      },
      [
        (0, import_vue2.createElementVNode)(
          "view",
          {
            onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
          },
          [
            $data.maskShow ? ((0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(_component_uni_transition, {
              key: "1",
              name: "mask",
              "mode-class": "fade",
              styles: $data.maskClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, null, 8, ["styles", "duration", "show", "onClick"])) : (0, import_vue2.createCommentVNode)("v-if", true),
            (0, import_vue2.createVNode)(_component_uni_transition, {
              key: "2",
              "mode-class": $data.ani,
              name: "content",
              styles: $data.transClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, {
              default: (0, import_vue2.withCtx)(() => [
                (0, import_vue2.createElementVNode)(
                  "view",
                  {
                    class: (0, import_vue2.normalizeClass)(["uni-popup__wrapper", [$data.popupstyle]]),
                    style: (0, import_vue2.normalizeStyle)({ backgroundColor: $options.bg }),
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
                  },
                  [
                    (0, import_vue2.renderSlot)(_ctx.$slots, "default")
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
          ],
          32
          /* HYDRATE_EVENTS */
        )
      ],
      2
      /* CLASS */
    )) : (0, import_vue2.createCommentVNode)("v-if", true);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/\u5C0F\u718A\u79D8\u5B9D/components/uni-popup/uni-popup.vue"]]);

  // F:/360MoveData/Users/abc/Desktop/小熊秘宝/unpackage/dist/dev/.nvue/pages/user/set.js
  var popup = {
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
  var isObject = (val) => val !== null && typeof val === "object";
  var defaultDelimiters = ["{", "}"];
  var BaseFormatter = class {
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
  };
  var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
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
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  var LOCALE_ZH_HANS = "zh-Hans";
  var LOCALE_ZH_HANT = "zh-Hant";
  var LOCALE_EN = "en";
  var LOCALE_FR = "fr";
  var LOCALE_ES = "es";
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var defaultFormatter = new BaseFormatter();
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
  var I18n = class {
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
  };
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
  var en = {
    "uni-popup.cancel": "cancel",
    "uni-popup.ok": "ok",
    "uni-popup.placeholder": "pleace enter",
    "uni-popup.title": "Hint",
    "uni-popup.shareTitle": "Share to"
  };
  var zhHans = {
    "uni-popup.cancel": "\u53D6\u6D88",
    "uni-popup.ok": "\u786E\u5B9A",
    "uni-popup.placeholder": "\u8BF7\u8F93\u5165",
    "uni-popup.title": "\u63D0\u793A",
    "uni-popup.shareTitle": "\u5206\u4EAB\u5230"
  };
  var zhHant = {
    "uni-popup.cancel": "\u53D6\u6D88",
    "uni-popup.ok": "\u78BA\u5B9A",
    "uni-popup.placeholder": "\u8ACB\u8F38\u5165",
    "uni-popup.title": "\u63D0\u793A",
    "uni-popup.shareTitle": "\u5206\u4EAB\u5230"
  };
  var messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  var _style_0$1 = { "uni-popup-dialog": { "": { "width": 300, "borderRadius": 11, "backgroundColor": "#ffffff" } }, "uni-dialog-title": { "": { "flexDirection": "row", "justifyContent": "center", "paddingTop": 25 } }, "uni-dialog-title-text": { "": { "fontSize": 16, "fontWeight": "500" } }, "uni-dialog-content": { "": { "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "paddingTop": 20, "paddingRight": 20, "paddingBottom": 20, "paddingLeft": 20 } }, "uni-dialog-content-text": { "": { "fontSize": 14, "color": "#6C6C6C" } }, "uni-dialog-button-group": { "": { "flexDirection": "row", "borderTopColor": "rgba(0,0,0,0.1)", "borderTopStyle": "solid", "borderTopWidth": 0.5 } }, "uni-dialog-button": { "": { "flex": 1, "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "height": 45 } }, "uni-border-left": { "": { "borderLeftColor": "rgba(0,0,0,0.1)", "borderLeftStyle": "solid", "borderLeftWidth": 0.5 } }, "uni-dialog-button-text": { "": { "fontSize": 13, "color": "rgba(0,0,0,0.5)" } }, "uni-button-color": { "": { "fontSize": 13, "color": "#ffda08" } }, "uni-dialog-input": { "": { "flex": 1, "fontSize": 14, "borderWidth": 0.5, "borderStyle": "solid", "borderColor": "rgba(0,0,0,0.1)", "height": 40, "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10, "borderRadius": 5, "color": "#000000" } }, "uni-popup__success": { "": { "color": "#ffda08" } }, "uni-popup__warn": { "": { "color": "#f0ad4e" } }, "uni-popup__error": { "": { "color": "#dd524d" } }, "uni-popup__info": { "": { "color": "#909399" } } };
  var { t } = initVueI18n(messages);
  var _sfc_main$12 = {
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
  function _sfc_render$12(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
      class: "uni-popup-dialog",
      renderWhole: true
    }, [
      (0, import_vue3.createElementVNode)("view", { class: "uni-dialog-title" }, [
        (0, import_vue3.createElementVNode)(
          "u-text",
          {
            class: (0, import_vue3.normalizeClass)(["uni-dialog-title-text", ["uni-popup__" + $data.dialogType]])
          },
          (0, import_vue3.toDisplayString)($options.titleText),
          3
          /* TEXT, CLASS */
        )
      ]),
      $props.mode === "base" ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
        key: 0,
        class: "uni-dialog-content"
      }, [
        (0, import_vue3.renderSlot)(_ctx.$slots, "default", {}, () => [
          (0, import_vue3.createElementVNode)(
            "u-text",
            { class: "uni-dialog-content-text" },
            (0, import_vue3.toDisplayString)($props.content),
            1
            /* TEXT */
          )
        ])
      ])) : ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
        key: 1,
        class: "uni-dialog-content"
      }, [
        (0, import_vue3.renderSlot)(_ctx.$slots, "default", {}, () => [
          (0, import_vue3.createElementVNode)("u-input", {
            class: "uni-dialog-input",
            modelValue: $data.val,
            onInput: _cache[0] || (_cache[0] = ($event) => $data.val = $event.detail.value),
            type: $props.inputType,
            placeholder: $options.placeholderText,
            focus: $data.focus
          }, null, 40, ["modelValue", "type", "placeholder", "focus"])
        ])
      ])),
      (0, import_vue3.createElementVNode)("view", { class: "uni-dialog-button-group" }, [
        (0, import_vue3.createElementVNode)("view", {
          class: "uni-dialog-button",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.closeDialog && $options.closeDialog(...args))
        }, [
          (0, import_vue3.createElementVNode)(
            "u-text",
            { class: "uni-dialog-button-text" },
            (0, import_vue3.toDisplayString)($options.closeText),
            1
            /* TEXT */
          )
        ]),
        (0, import_vue3.createElementVNode)("view", {
          class: "uni-dialog-button uni-border-left",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.onOk && $options.onOk(...args))
        }, [
          (0, import_vue3.createElementVNode)(
            "u-text",
            { class: "uni-dialog-button-text uni-button-color" },
            (0, import_vue3.toDisplayString)($options.okText),
            1
            /* TEXT */
          )
        ])
      ])
    ]);
  }
  var __easycom_02 = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["render", _sfc_render$12], ["styles", [_style_0$1]], ["__file", "F:/360MoveData/Users/abc/Desktop/\u5C0F\u718A\u79D8\u5B9D/components/uni-popup-dialog/uni-popup-dialog.vue"]]);
  var _style_02 = { "out": { "": { "paddingLeft": "30rpx", "paddingRight": "30rpx" } }, "out_t": { "": { "height": "100rpx", "lineHeight": "100rpx", "textAlign": "center", "fontSize": "32rpx", "borderRadius": "50rpx", "marginTop": "50rpx", "backgroundColor": "#ffda08", "color": "#131220" } }, "li": { "": { "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center", "height": "100rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "borderTopWidth": "0.5rpx", "borderTopStyle": "solid", "borderTopColor": "rgba(0,0,0,0.05)" } }, "lis": { "": { "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center", "height": "100rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "borderTopWidth": "0.5rpx", "borderTopStyle": "solid", "borderTopColor": "rgba(0,0,0,0.05)", "borderBottomWidth": "0.5rpx", "borderBottomStyle": "solid", "borderBottomColor": "rgba(0,0,0,0.05)" } }, "li_l": { "": { "fontSize": "32rpx" } }, "li_r": { "": { "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "flex-end", "alignItems": "center" } }, "li_r_t": { "": { "fontSize": "24rpx", "color": "rgba(0,0,0,0.5)" } }, "li_r_img": { "": { "width": "60rpx", "height": "60rpx", "borderRadius": "30rpx" } }, "li_r_i": { "": { "width": "40rpx", "height": "40rpx", "lineHeight": "40rpx", "fontSize": "35rpx", "fontFamily": "iconfont", "color": "rgba(0,0,0,0.5)" } } };
  var _sfc_main2 = {
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
          title: "\u6E29\u99A8\u63D0\u793A\uFF01",
          content: "\u4F60\u786E\u5B9A\u8981\u6CE8\u9500\u8BE5\u8D26\u53F7\u5417\uFF1F\n\u6CE8\u9500\u540E\u8D26\u53F7\u540E\n1.\u4E0D\u53EF\u518D\u6B21\u767B\u9646\n2.\u8D26\u53F7\u8D44\u6599\u5168\u90E8\u6E05\u9664\n3.APP\u767B\u9646\u8BB0\u5F55\u5168\u90E8\u6E05\u9664\n\u70B9\u51FB\u786E\u5B9A\u6CE8\u9500\u7ACB\u5373\u751F\u6548\uFF0C\u751F\u6548\u540E\u65E0\u6CD5\u627E\u56DE\uFF0C\u8C28\u614E\u64CD\u4F5C\uFF01",
          confirmText: "\u786E\u5B9A\u6CE8\u9500",
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
                    uni.showToast({ icon: "none", title: " \u5DF2\u4E3A\u60A8\u6CE8\u9500\u6210\u529F\uFF01 ", mask: false, duration: 1500 });
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
          uni.showToast({ icon: "none", title: " \u5BC6\u7801\u6700\u5C0F6\u4F4D\uFF01 ", duration: 2e3 });
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
                  uni.showToast({ icon: "none", title: " \u539F\u5BC6\u7801\u9519\u8BEF\uFF01 ", mask: false, duration: 1500 });
                }
                if (db != 4 && db != 66) {
                  thi.pass1 = "";
                  thi.pass2 = "";
                  uni.showToast({ icon: "none", title: " \u4FEE\u6539\u5931\u8D25 ", mask: false, duration: 1500 });
                }
                if (db == 66) {
                  thi.pass1 = "";
                  thi.pass2 = "";
                  thi.out();
                  uni.showToast({ icon: "none", title: " \u5BC6\u7801\u4FEE\u6539\u6210,\u8BF7\u91CD\u65B0\u767B\u5F55\uFF01 ", mask: false, duration: 1500 });
                }
              }
            });
          } else {
            thi.pass1 = "";
            thi.pass2 = "";
            uni.showToast({ icon: "none", title: " \u65E7\u5BC6\u7801\u548C\u65B0\u5BC6\u7801\u76F8\u540C\uFF01 ", duration: 2e3 });
          }
        } else {
          thi.pass2 = "";
          uni.showToast({ icon: "none", title: " \u65B0\u5BC6\u7801\u6700\u5C0F6\u4F4D\uFF01 ", duration: 2e3 });
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
                uni.showToast({ icon: "none", title: " \u8BF7\u5148\u767B\u5F55 ", mask: false, duration: 1500 });
              }
              if (db == 2) {
                uni.showToast({ icon: "none", title: " \u6635\u79F0\u4E0D\u80FD\u4E3A\u7A7A ", mask: false, duration: 1500 });
              }
              if (db == 66) {
                uni.$emit("login", { msg: "yes" });
                thi.nick = e;
                uni.showToast({ icon: "none", title: " \u4FEE\u6539\u6635\u79F0\u6210\u529F\uFF01 ", mask: false, duration: 1500 });
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
                title: "\u6B63\u5728\u4E0A\u4F20\u4E2D"
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
                        title: " \u4FEE\u6539\u6210\u529F ",
                        duration: 2e3
                      });
                      uni.hideLoading();
                    }
                    if (db[0] == 2) {
                      uni.showToast({
                        icon: "none",
                        title: " \u4E0A\u4F20\u5931\u8D25\u4E86\u3002 ",
                        duration: 2e3
                      });
                      uni.hideLoading();
                    }
                    if (db[0] == 1) {
                      uni.showToast({
                        icon: "none",
                        title: " \u4E0A\u4F20\u5931\u8D25\uFF01 ",
                        duration: 2e3
                      });
                      uni.hideLoading();
                    }
                  } else {
                    uni.showToast({ icon: "none", title: " \u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01 ", duration: 2e3 });
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
          title: "\u6B63\u5728\u767B\u5F55\u9000\u51FA"
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
                  title: " \u9000\u51FA\u6210\u529F\u3002 ",
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
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_popup_dialog = resolveEasycom((0, import_vue3.resolveDynamicComponent)("uni-popup-dialog"), __easycom_02);
    const _component_uni_popup = resolveEasycom((0, import_vue3.resolveDynamicComponent)("uni-popup"), __easycom_1);
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", null, [
      (0, import_vue3.createElementVNode)("list", null, [
        (0, import_vue3.createElementVNode)("cell", { class: "li" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "li_l" }, "\u8D44\u6599\u8BBE\u7F6E"),
          (0, import_vue3.createElementVNode)("view", {
            class: "li_r",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.openlogoset && $options.openlogoset(...args))
          }, [
            (0, import_vue3.createElementVNode)("u-image", {
              class: "li_r_img",
              src: $data.ulogo
            }, null, 8, ["src"]),
            (0, import_vue3.createElementVNode)("u-text", { class: "li_r_i" }, "\uE630")
          ])
        ]),
        (0, import_vue3.createElementVNode)("cell", { class: "li" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "li_l" }, "\u6635\u79F0"),
          (0, import_vue3.createElementVNode)("view", {
            class: "li_r",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.opennickset && $options.opennickset(...args))
          }, [
            (0, import_vue3.createElementVNode)(
              "u-text",
              { class: "li_r_t" },
              (0, import_vue3.toDisplayString)($data.nick),
              1
              /* TEXT */
            ),
            (0, import_vue3.createElementVNode)("u-text", { class: "li_r_i" }, "\uE630")
          ])
        ]),
        (0, import_vue3.createElementVNode)("cell", { class: "li" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "li_l" }, "\u4FEE\u6539\u5BC6\u7801"),
          (0, import_vue3.createElementVNode)("view", {
            class: "li_r",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.openpasset && $options.openpasset(...args))
          }, [
            (0, import_vue3.createElementVNode)("u-text", { class: "li_r_t" }, "\u4FEE\u6539APP\u767B\u5F55\u5BC6\u7801"),
            (0, import_vue3.createElementVNode)("u-text", { class: "li_r_i" }, "\uE630")
          ])
        ]),
        (0, import_vue3.createElementVNode)("cell", {
          class: "lis",
          onClick: _cache[3] || (_cache[3] = (...args) => $options.delus && $options.delus(...args))
        }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "li_l" }, "\u6CE8\u9500\u8D26\u53F7"),
          (0, import_vue3.createElementVNode)("view", { class: "li_r" }, [
            (0, import_vue3.createElementVNode)("u-text", { class: "li_r_t" }, "\u6CE8\u9500\u540E\u5C06\u5F7B\u5E95\u6E05\u9664"),
            (0, import_vue3.createElementVNode)("u-text", { class: "li_r_i" }, "\uE630")
          ])
        ]),
        (0, import_vue3.createElementVNode)("cell", { style: { "height": "150rpx" } }),
        (0, import_vue3.createElementVNode)("cell", {
          class: "lis",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.out && $options.out(...args))
        }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "li_l" }, "\u9000\u51FA\u767B\u5F55"),
          (0, import_vue3.createElementVNode)("view", { class: "li_r" }, [
            (0, import_vue3.createElementVNode)("u-text", { class: "li_r_t" }),
            (0, import_vue3.createElementVNode)("u-text", { class: "li_r_i" }, "\uE630")
          ])
        ])
      ]),
      (0, import_vue3.createVNode)(
        _component_uni_popup,
        {
          type: "dialog",
          ref: "nickmain",
          "is-mask-click": false,
          "render-whole": true
        },
        {
          default: (0, import_vue3.withCtx)(() => [
            (0, import_vue3.createVNode)(_component_uni_popup_dialog, {
              mode: "input",
              confirmText: "\u786E\u5B9A\u4FEE\u6539",
              title: "\u4FEE\u6539\u6635\u79F0",
              placeholder: "\u8BF7\u8F93\u5165\u60A8\u7684\u4E2A\u6027\u6635\u79F0,\u6700\u591A8\u4E2A\u5B57",
              onConfirm: $options.setnick
            }, null, 8, ["onConfirm"])
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      ),
      (0, import_vue3.createVNode)(
        _component_uni_popup,
        {
          type: "dialog",
          ref: "passmain",
          "is-mask-click": false,
          "render-whole": true
        },
        {
          default: (0, import_vue3.withCtx)(() => [
            $data.pass1 == "" ? ((0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(_component_uni_popup_dialog, {
              key: 0,
              "before-close": "",
              mode: "input",
              confirmText: "\u4E0B\u4E00\u6B65",
              title: "\u4FEE\u6539\u767B\u5F55\u5BC6\u7801",
              placeholder: "\u8BF7\u8F93\u5165\u539F\u5BC6\u7801",
              onConfirm: $options.setpass1,
              onClose: $options.clospass
            }, null, 8, ["onConfirm", "onClose"])) : (0, import_vue3.createCommentVNode)("v-if", true),
            $data.pass1 && $data.pass2 == "" ? ((0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(_component_uni_popup_dialog, {
              key: 1,
              mode: "input",
              confirmText: "\u786E\u5B9A\u4FEE\u6539",
              title: "\u4FEE\u6539\u767B\u5F55\u5BC6\u7801",
              placeholder: "\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801",
              onConfirm: $options.setpass2,
              onClose: $options.clospass
            }, null, 8, ["onConfirm", "onClose"])) : (0, import_vue3.createCommentVNode)("v-if", true)
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      )
    ]);
  }
  var set = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "F:/360MoveData/Users/abc/Desktop/\u5C0F\u718A\u79D8\u5B9D/pages/user/set.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/user/set";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    set.mpType = "page";
    const app = Vue.createPageApp(set, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...set.styles || []]));
    app.mount("#root");
  }
})();
