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

  // F:/360MoveData/Users/abc/Desktop/小熊秘宝/unpackage/dist/dev/.nvue/uni-popup.js
  var import_vue2 = __toESM(require_vue());

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

  // F:/360MoveData/Users/abc/Desktop/小熊秘宝/unpackage/dist/dev/.nvue/pages/index/tab1.js
  var import_vue3 = __toESM(require_vue());
  var _style_02 = { "list": { "": { "flex": 1, "width": "750rpx" } }, "hed": { "": { "width": "750rpx", "height": 55, "position": "sticky" } }, "heds": { "": { "width": "750rpx", "height": 55, "paddingLeft": "30rpx", "paddingRight": "30rpx", "paddingBottom": "20rpx", "backgroundColor": "#ffda08", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "flex-end" } }, "hed_l": { "": { "width": "125rpx", "height": "75rpx", "lineHeight": "75rpx", "fontSize": "60rpx", "textAlign": "center", "fontWeight": "bold", "color": "rgba(0,0,0,0.8)", "fontFamily": "iconfont" } }, "hed_c": { "": { "width": "580rpx", "paddingLeft": "30rpx", "borderRadius": "37.5rpx", "textAlign": "left", "fontSize": "30rpx", "height": "75rpx", "color": "rgba(0,0,0,0.8)", "lineHeight": "75rpx", "fontFamily": "iconfont", "backgroundColor": "rgba(0,0,0,0.05)" } }, "hed_r": { "": { "width": "70rpx", "fontSize": "45rpx", "textAlign": "center", "height": "70rpx", "lineHeight": "70rpx", "color": "rgba(0,0,0,0.7)", "fontFamily": "iconfont", "backgroundColor": "rgba(0,0,0,0.05)", "borderRadius": "35rpx" } }, "lbt": { "": { "width": "750rpx", "height": "390rpx", "paddingTop": "30rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "borderRadius": "20rpx" } }, "lbtm": { "": { "width": "690rpx", "height": "360rpx" } }, "lbtm_i": { "": { "width": "690rpx", "height": "360rpx", "position": "relative", "backgroundColor": "#666666", "borderRadius": "20rpx" } }, "lbtm_img": { "": { "width": "690rpx", "height": "360rpx", "borderRadius": "20rpx", "opacity": 0.9 } }, "mue": { "": { "width": "750rpx", "height": "230rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "flex-start", "alignItems": "center" } }, "mue_li": { "": { "width": "187.5rpx", "height": "230rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "center" } }, "mue_li_i": { "": { "width": "90rpx", "height": "90rpx" } }, "mue_li_t": { "": { "width": "138rpx", "height": "50rpx", "lineHeight": "60rpx", "textAlign": "center", "fontSize": "24rpx", "fontWeight": "bold", "color": "rgba(0,0,0,0.8)" } }, "tit": { "": { "width": "750rpx", "height": "140rpx", "borderTopWidth": "16rpx", "borderTopStyle": "solid", "borderTopColor": "rgba(0,0,0,0.05)" } }, "tit_t": { "": { "width": "750rpx", "paddingLeft": "30rpx", "height": "100rpx", "lineHeight": "100rpx", "fontWeight": "bold", "borderBottomWidth": "0.5rpx", "borderBottomStyle": "solid", "borderBottomColor": "rgba(0,0,0,0.05)", "textAlign": "left", "fontSize": "30rpx", "color": "rgba(0,0,0,1)" } }, "cell": { "": { "width": "750rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx" } }, "gm": { "": { "width": "690rpx", "height": "160rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "flex-start" } }, "gm_i": { "": { "width": "130rpx", "height": "130rpx", "borderRadius": "20rpx" } }, "gm_c": { "": { "width": "450rpx", "paddingLeft": "20rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "flex-start" } }, "gm_c_t": { "": { "width": "330rpx", "height": "43rpx", "lines": 1, "lineHeight": "43rpx", "fontSize": "30rpx", "fontWeight": "bold", "paddingRight": "20rpx", "color": "rgba(0,0,0,0.8)" } }, "gm_c_c": { "": { "height": "43rpx", "lineHeight": "50rpx", "fontSize": "24rpx", "color": "rgba(0,0,0,0.5)" } }, "gm_c_b": { "": { "height": "43rpx", "lineHeight": "43rpx", "fontSize": "24rpx", "lines": 1, "color": "rgba(0,0,0,0.5)" } }, "gm_r": { "": { "marginTop": "30rpx", "width": "100rpx", "borderRadius": "15rpx", "height": "60rpx", "lineHeight": "60rpx", "textAlign": "center", "fontSize": "24rpx", "backgroundImage": "linear-gradient(to top,#ffc30c,#ffda08)" } }, "tkmain": { "": { "backgroundColor": "#1f2531", "width": "600rpx", "height": "520rpx", "borderRadius": "20rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "flex-start", "alignItems": "center" } }, "tkmain_t": { "": { "width": "600rpx", "height": "120rpx", "lineHeight": "120rpx", "color": "rgba(255,255,255,0.8)", "textAlign": "center", "fontSize": "30rpx" } }, "tkmain_c": { "": { "width": "550rpx", "height": "300rpx" } }, "tkmain_c_t": { "": { "width": "550rpx", "lineHeight": "40rpx", "fontSize": "25rpx", "textAlign": "left", "color": "rgba(255,255,255,0.9)" } }, "tkmain_c_t2": { "": { "width": "550rpx", "height": "40rpx", "textAlign": "center", "lineHeight": "40rpx", "fontSize": "26rpx", "color": "#33ffb4" } }, "tkmain_b": { "": { "width": "550rpx", "height": "100rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center", "borderTopWidth": "0.5rpx", "borderTopStyle": "solid", "borderTopColor": "rgba(255,255,255,0.1)" } }, "tkmain_b_l": { "": { "width": "275rpx", "height": "100rpx", "lineHeight": "100rpx", "fontSize": "30rpx", "color": "rgba(255,255,255,0.8)", "textAlign": "center", "borderRightWidth": "0.5rpx", "borderRightStyle": "solid", "borderRightColor": "rgba(225,255,255,0.1)" } }, "tkmain_b_r": { "": { "width": "275rpx", "height": "100rpx", "lineHeight": "100rpx", "fontSize": "30rpx", "color": "#33ffb4", "textAlign": "center" } }, "appupmain": { "": { "backgroundColor": "#1f2531", "width": "750rpx", "borderRadius": "20rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "flex-start", "alignItems": "center" } }, "appupmain_t": { "": { "width": "690rpx", "height": "120rpx", "lineHeight": "120rpx", "color": "rgba(255,255,255,0.8)", "textAlign": "center", "fontSize": "30rpx" } }, "appupmain_c": { "": { "width": "690rpx", "paddingBottom": "20rpx" } }, "appupmain_c_t": { "": { "width": "690rpx", "lineHeight": "40rpx", "fontSize": "28rpx", "textAlign": "left", "color": "rgba(255,255,255,0.9)" } }, "appupmain_b": { "": { "width": "690rpx", "height": "200rpx" } }, "appupmain_bx": { "": { "width": "690rpx", "height": "100rpx" } }, "appupmain_b_l": { "": { "width": "690rpx", "height": "80rpx", "lineHeight": "80rpx", "fontSize": "30rpx", "color": "rgba(255,0,138,1)", "textAlign": "center", "backgroundColor": "rgba(255,0,138,0.2)" } }, "appupmain_b_r": { "": { "width": "690rpx", "height": "100rpx", "lineHeight": "100rpx", "fontSize": "30rpx", "color": "rgba(255,255,255,0.5)", "textAlign": "center" } }, "appupmain_progress": { "": { "width": "690rpx", "height": "80rpx" } } };
  var domModule = requireNativePlugin("dom");
  var _sfc_main2 = {
    data() {
      return {
        ip: G_APP.ip,
        appsys: G_APP.appsys,
        appt: G_APP.appt,
        appb: G_APP.appb,
        apph: G_APP.apph,
        hedbg: "rgba(255,255,255,0)",
        tk_main: 0,
        //条款
        appup_main: 0,
        //APP 弹窗
        appup_tit: "\u6709\u66F4\u65B0\u5566\uFF01",
        appup_zt: 0,
        appup_url: "",
        appdow_jd: 0,
        //下载进度
        appdow_fd: "",
        //下载的APP包
        lbt: [],
        hotlist: [],
        jplist: [],
        hylist: [],
        nelist: [],
        peg: 0,
        zpeg: 1
      };
    },
    onLoad() {
      domModule.addRule("fontFace", {
        "fontFamily": "iconfont",
        "src": "url('" + this.ip + "/ttf/iconfont.ttf')"
      });
    },
    onReady() {
      this.get();
    },
    methods: {
      opxf() {
        uni.navigateTo({
          url: "../../pages/gm/gmxf"
        });
      },
      ophd() {
        uni.navigateTo({
          url: "../../pages/gm/hd"
        });
      },
      opnews() {
        uni.navigateTo({
          url: "../../pages/gm/news"
        });
      },
      optopgm() {
        uni.navigateTo({
          url: "../../pages/gm/gmtop"
        });
      },
      opdow() {
        uni.navigateTo({
          url: "../../pages/user/dow"
        });
      },
      opgm(id) {
        uni.navigateTo({
          url: "../../pages/gm/gmxx?id=" + id
        });
      },
      opsoso() {
        uni.navigateTo({
          url: "../../pages/soso/soso"
        });
      },
      get() {
        let thi = this;
        uni.request({
          url: G_APP.ip + "appapi.php?topgm=go",
          method: "GET",
          dataType: "json",
          enableCache: true,
          //缓存
          defer: true,
          //控制当前请求是否延时至首屏内容渲染后发送
          data: {
            sylbt: "go"
          },
          success: (ret) => {
            uni.stopPullDownRefresh();
            if (ret.data.lbt) {
              thi.lbt = ret.data.lbt;
            }
            if (ret.data.hotgm) {
              thi.hotlist = ret.data.hotgm;
            }
            if (ret.data.jp) {
              thi.jplist = ret.data.jp;
            }
            if (ret.data.hy) {
              thi.hylist = ret.data.hy;
            }
            if (ret.data.ne) {
              thi.nelist = ret.data.ne;
            }
          }
        });
      },
      appup_get() {
        let appupshow = uni.getStorageSync("appup");
        if (appupshow) {
          if (appupshow[0].upzt == "1") {
            this.appup_main = 1;
            this.appup_url = appupshow[0].url;
            setTimeout(() => {
              this.$refs.appupmain.open();
            }, 2e3);
          }
        }
      },
      appup_goapp() {
        plus.runtime.install(this.appdow_fd, { force: true }, {}, function(error) {
          uni.showToast({ icon: "none", title: "\u5B89\u88C5\u5931\u8D25", mask: false, duration: 1500 });
        });
      },
      appup_yes() {
        let thi = this;
        thi.appup_tit = "\u65B0\u7248\u672C\u6B63\u5728\u4E0B\u8F7D";
        thi.appup_zt = 1;
        const downloadTask = uni.downloadFile({
          url: thi.appup_url,
          filePath: "appup",
          success: (res) => {
            if (res.statusCode === 200) {
              thi.appdow_fd = res.tempFilePath;
              plus.runtime.install(res.tempFilePath, { force: true }, {}, function(error) {
                uni.showToast({ icon: "none", title: "\u5B89\u88C5\u5931\u8D25", mask: false, duration: 1500 });
              });
            }
          }
        });
        downloadTask.onProgressUpdate((ress) => {
          if (ress.progress > 0) {
            thi.appdow_jd = ress.progress;
          }
        });
      },
      appup_no() {
        this.$refs.appupmain.close();
        uni.showTabBar();
      },
      tk_open() {
        this.$refs.tkmain.open();
      },
      tk_yes() {
        this.$refs.tkmain.close();
        uni.setStorage({
          key: "tkyes",
          data: "1"
        });
        uni.showTabBar();
        this.appup_get();
      },
      tk_no() {
        uni.setStorage({
          key: "tkyes",
          data: "0"
        });
        if (G_APP.appsys == "apple") {
          plus.ios.import("UIApplication").sharedApplication().performSelector("exit");
        } else {
          plus.runtime.quit();
        }
      }
    },
    onPullDownRefresh() {
      this.get();
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_swiper_item = (0, import_vue3.resolveComponent)("swiper-item");
    const _component_swiper = (0, import_vue3.resolveComponent)("swiper");
    const _component_uni_popup = resolveEasycom((0, import_vue3.resolveDynamicComponent)("uni-popup"), __easycom_1);
    const _component_progress = (0, import_vue3.resolveComponent)("progress");
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", null, [
      (0, import_vue3.createElementVNode)("list", {
        class: "list",
        renderWhole: true,
        showScrollbar: "false",
        bounce: "false"
      }, [
        (0, import_vue3.createElementVNode)(
          "header",
          {
            class: "hed",
            style: (0, import_vue3.normalizeStyle)("height: " + ($data.appt + 55) + "px;"),
            renderWhole: true
          },
          [
            (0, import_vue3.createElementVNode)(
              "view",
              {
                renderWhole: true,
                class: "heds",
                style: (0, import_vue3.normalizeStyle)("height: " + ($data.appt + 55) + "px;")
              },
              [
                (0, import_vue3.createElementVNode)("u-text", {
                  class: "hed_c",
                  onClick: _cache[0] || (_cache[0] = (...args) => $options.opsoso && $options.opsoso(...args))
                }, "\uE8EF \u641C\u7D22\u4F60\u60F3\u73A9\u7684\u6E38\u620F"),
                (0, import_vue3.createElementVNode)("u-text", {
                  class: "hed_r",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.opdow && $options.opdow(...args))
                }, "\uE7EF")
              ],
              4
              /* STYLE */
            )
          ],
          4
          /* STYLE */
        ),
        (0, import_vue3.createElementVNode)("cell", { class: "lbt" }, [
          (0, import_vue3.createVNode)(_component_swiper, {
            class: "lbtm",
            circular: "true",
            "render-whole": true,
            "indicator-active-color": "#ffda08",
            "indicator-color": "rgba(255,255,255,0.5)",
            "indicator-dots": "true",
            autoplay: "true"
          }, {
            default: (0, import_vue3.withCtx)(() => [
              ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
                import_vue3.Fragment,
                null,
                (0, import_vue3.renderList)($data.lbt, (item, index) => {
                  return (0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(_component_swiper_item, {
                    key: item.id,
                    onClick: ($event) => $options.opgm(item.id),
                    "render-whole": true,
                    class: "lbtm_i"
                  }, {
                    default: (0, import_vue3.withCtx)(() => [
                      (0, import_vue3.createElementVNode)("u-image", {
                        mode: "aspectFill",
                        class: "lbtm_img",
                        src: $data.ip + item.gmapplbt
                      }, null, 8, ["src"])
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        (0, import_vue3.createElementVNode)("cell", { class: "mue" }, [
          (0, import_vue3.createElementVNode)("view", {
            renderWhole: true,
            class: "mue_li",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.optopgm && $options.optopgm(...args))
          }, [
            (0, import_vue3.createElementVNode)("u-image", {
              class: "mue_li_i",
              src: "/static/01.png"
            }),
            (0, import_vue3.createElementVNode)("u-text", { class: "mue_li_t" }, "\u6E38\u620F\u699C\u5355")
          ]),
          (0, import_vue3.createElementVNode)("view", {
            renderWhole: true,
            class: "mue_li",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.opnews && $options.opnews(...args))
          }, [
            (0, import_vue3.createElementVNode)("u-image", {
              class: "mue_li_i",
              src: "/static/02.png"
            }),
            (0, import_vue3.createElementVNode)("u-text", { class: "mue_li_t" }, "\u6E38\u620F\u8D44\u8BAF")
          ]),
          (0, import_vue3.createElementVNode)("view", {
            renderWhole: true,
            class: "mue_li",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.opxf && $options.opxf(...args))
          }, [
            (0, import_vue3.createElementVNode)("u-image", {
              class: "mue_li_i",
              src: "/static/03.png"
            }),
            (0, import_vue3.createElementVNode)("u-text", { class: "mue_li_t" }, "\u7AD9\u957F\u63A8\u8350")
          ]),
          (0, import_vue3.createElementVNode)("view", {
            renderWhole: true,
            class: "mue_li",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.ophd && $options.ophd(...args))
          }, [
            (0, import_vue3.createElementVNode)("u-image", {
              class: "mue_li_i",
              src: "/static/04.png"
            }),
            (0, import_vue3.createElementVNode)("u-text", { class: "mue_li_t" }, "\u6E38\u620F\u6D3B\u52A8")
          ])
        ]),
        (0, import_vue3.createElementVNode)("cell", { class: "tit" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "tit_t" }, "\u70ED\u95E8\u6E38\u620F\u63A8\u8350")
        ]),
        ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
          import_vue3.Fragment,
          null,
          (0, import_vue3.renderList)($data.hotlist, (item, index) => {
            return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("cell", {
              class: "cell",
              key: item.id,
              onClick: ($event) => $options.opgm(item.id)
            }, [
              (0, import_vue3.createElementVNode)("view", {
                class: "gm",
                renderWhole: true
              }, [
                (0, import_vue3.createElementVNode)("u-image", {
                  class: "gm_i",
                  src: $data.ip + item.gmlogo
                }, null, 8, ["src"]),
                (0, import_vue3.createElementVNode)("view", {
                  renderWhole: true,
                  class: "gm_c"
                }, [
                  (0, import_vue3.createElementVNode)(
                    "u-text",
                    { class: "gm_c_t" },
                    (0, import_vue3.toDisplayString)(item.gmname),
                    1
                    /* TEXT */
                  ),
                  (0, import_vue3.createElementVNode)(
                    "u-text",
                    { class: "gm_c_c" },
                    "\u7C7B\u578B\uFF1A" + (0, import_vue3.toDisplayString)(item.gmbq),
                    1
                    /* TEXT */
                  ),
                  (0, import_vue3.createElementVNode)(
                    "u-text",
                    { class: "gm_c_b" },
                    (0, import_vue3.toDisplayString)(item.gmjj),
                    1
                    /* TEXT */
                  )
                ]),
                (0, import_vue3.createElementVNode)("u-text", { class: "gm_r" }, "\u4E0B\u8F7D")
              ])
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        )),
        (0, import_vue3.createElementVNode)("cell", { class: "tit" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "tit_t" }, "\u7CBE\u54C1\u6E38\u620F\u63A8\u8350")
        ]),
        ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
          import_vue3.Fragment,
          null,
          (0, import_vue3.renderList)($data.jplist, (item, index) => {
            return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("cell", {
              class: "cell",
              key: item.id,
              onClick: ($event) => $options.opgm(item.id)
            }, [
              (0, import_vue3.createElementVNode)("view", {
                class: "gm",
                renderWhole: true
              }, [
                (0, import_vue3.createElementVNode)("u-image", {
                  class: "gm_i",
                  src: $data.ip + item.gmlogo
                }, null, 8, ["src"]),
                (0, import_vue3.createElementVNode)("view", {
                  renderWhole: true,
                  class: "gm_c"
                }, [
                  (0, import_vue3.createElementVNode)(
                    "u-text",
                    { class: "gm_c_t" },
                    (0, import_vue3.toDisplayString)(item.gmname),
                    1
                    /* TEXT */
                  ),
                  (0, import_vue3.createElementVNode)(
                    "u-text",
                    { class: "gm_c_c" },
                    "\u7C7B\u578B\uFF1A" + (0, import_vue3.toDisplayString)(item.gmbq),
                    1
                    /* TEXT */
                  ),
                  (0, import_vue3.createElementVNode)(
                    "u-text",
                    { class: "gm_c_b" },
                    (0, import_vue3.toDisplayString)(item.gmjj),
                    1
                    /* TEXT */
                  )
                ]),
                (0, import_vue3.createElementVNode)("u-text", { class: "gm_r" }, "\u4E0B\u8F7D")
              ])
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        )),
        (0, import_vue3.createElementVNode)("cell", { class: "tit" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "tit_t" }, "\u6700\u53D7\u6B22\u8FCE\u6E38\u620F")
        ]),
        ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
          import_vue3.Fragment,
          null,
          (0, import_vue3.renderList)($data.hylist, (item, index) => {
            return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("cell", {
              class: "cell",
              key: item.id,
              onClick: ($event) => $options.opgm(item.id)
            }, [
              (0, import_vue3.createElementVNode)("view", {
                class: "gm",
                renderWhole: true
              }, [
                (0, import_vue3.createElementVNode)("u-image", {
                  class: "gm_i",
                  src: $data.ip + item.gmlogo
                }, null, 8, ["src"]),
                (0, import_vue3.createElementVNode)("view", {
                  renderWhole: true,
                  class: "gm_c"
                }, [
                  (0, import_vue3.createElementVNode)(
                    "u-text",
                    { class: "gm_c_t" },
                    (0, import_vue3.toDisplayString)(item.gmname),
                    1
                    /* TEXT */
                  ),
                  (0, import_vue3.createElementVNode)(
                    "u-text",
                    { class: "gm_c_c" },
                    "\u7C7B\u578B\uFF1A" + (0, import_vue3.toDisplayString)(item.gmbq),
                    1
                    /* TEXT */
                  ),
                  (0, import_vue3.createElementVNode)(
                    "u-text",
                    { class: "gm_c_b" },
                    (0, import_vue3.toDisplayString)(item.gmjj),
                    1
                    /* TEXT */
                  )
                ]),
                (0, import_vue3.createElementVNode)("u-text", { class: "gm_r" }, "\u4E0B\u8F7D")
              ])
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        )),
        (0, import_vue3.createElementVNode)("cell", { class: "tit" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "tit_t" }, "\u6700\u65B0\u4E0A\u67B6\u6E38\u620F")
        ]),
        ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
          import_vue3.Fragment,
          null,
          (0, import_vue3.renderList)($data.nelist, (item, index) => {
            return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("cell", {
              class: "cell",
              key: item.id,
              onClick: ($event) => $options.opgm(item.id)
            }, [
              (0, import_vue3.createElementVNode)("view", {
                class: "gm",
                renderWhole: true
              }, [
                (0, import_vue3.createElementVNode)("u-image", {
                  class: "gm_i",
                  src: $data.ip + item.gmlogo
                }, null, 8, ["src"]),
                (0, import_vue3.createElementVNode)("view", {
                  renderWhole: true,
                  class: "gm_c"
                }, [
                  (0, import_vue3.createElementVNode)(
                    "u-text",
                    { class: "gm_c_t" },
                    (0, import_vue3.toDisplayString)(item.gmname),
                    1
                    /* TEXT */
                  ),
                  (0, import_vue3.createElementVNode)(
                    "u-text",
                    { class: "gm_c_c" },
                    "\u7C7B\u578B\uFF1A" + (0, import_vue3.toDisplayString)(item.gmbq),
                    1
                    /* TEXT */
                  ),
                  (0, import_vue3.createElementVNode)(
                    "u-text",
                    { class: "gm_c_b" },
                    (0, import_vue3.toDisplayString)(item.gmjj),
                    1
                    /* TEXT */
                  )
                ]),
                (0, import_vue3.createElementVNode)("u-text", { class: "gm_r" }, "\u4E0B\u8F7D")
              ])
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      $data.tk_main == 1 ? ((0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(
        _component_uni_popup,
        {
          key: 0,
          type: "center",
          ref: "tkmain",
          "is-mask-click": false,
          "mask-click": false,
          "render-whole": true
        },
        {
          default: (0, import_vue3.withCtx)(() => [
            (0, import_vue3.createElementVNode)("view", {
              renderWhole: true,
              class: "tkmain"
            }, [
              (0, import_vue3.createElementVNode)("u-text", { class: "tkmain_t" }, "\u670D\u52A1\u534F\u8BAE\u548C\u9690\u79C1\u653F\u7B56"),
              (0, import_vue3.createElementVNode)("view", {
                class: "tkmain_c",
                renderWhole: true
              }, [
                (0, import_vue3.createElementVNode)("u-text", { class: "tkmain_c_t" }, "\u8BF7\u4F60\u52A1\u5FC5\u5BA1\u614E\u9605\u8BFB\u3001\u5145\u5206\u7406\u89E3\u201C\u670D\u52A1\u534F\u8BAE\u201D\u548C\u201C\u9690\u79C1\u653F\u7B56\u201D\u5404\u6761\u6B3E\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A\u4E3A\u4E86\u66F4\u597D\u7684\u5411\u4F60\u63D0\u4F9B\u670D\u52A1\uFF0C\u6211\u4EEC\u9700\u8981\u6536\u96C6\u4F60\u7684\u8BBE\u5907\u6807\u8BC6\u3001\u64CD\u4F5C\u65E5\u5FD7\u7B49\u4FE1\u606F\u7528\u4E8E\u5206\u6790\u3001\u4F18\u5316\u5E94\u7528\u6027\u80FD\u3002"),
                (0, import_vue3.createElementVNode)("u-text", {
                  class: "tkmain_c_t2",
                  onClick: _cache[6] || (_cache[6] = ($event) => _ctx.opllq(1))
                }, "\u300A \u70B9\u51FB\u9605\u8BFB\u670D\u52A1\u534F\u8BAE\u8BE6\u7EC6\u4FE1\u606F \u300B"),
                (0, import_vue3.createElementVNode)("u-text", {
                  class: "tkmain_c_t2",
                  onClick: _cache[7] || (_cache[7] = ($event) => _ctx.opllq(2))
                }, "\u300A \u70B9\u51FB\u9605\u8BFB\u9690\u79C1\u653F\u7B56\u8BE6\u7EC6\u4FE1\u606F \u300B"),
                (0, import_vue3.createElementVNode)("u-text", { class: "tkmain_c_t" }, "\u5982\u679C\u4F60\u540C\u610F\uFF0C\u8BF7\u70B9\u51FB\u4E0B\u9762\u6309\u94AE\u63A5\u53D7\u6211\u4EEC\u7684\u670D\u52A1\u3002")
              ]),
              (0, import_vue3.createElementVNode)("view", {
                class: "tkmain_b",
                renderWhole: true
              }, [
                (0, import_vue3.createElementVNode)("u-text", {
                  class: "tkmain_b_l",
                  onClick: _cache[8] || (_cache[8] = (...args) => $options.tk_no && $options.tk_no(...args))
                }, "\u4E0D\u63A5\u53D7"),
                (0, import_vue3.createElementVNode)("u-text", {
                  class: "tkmain_b_r",
                  onClick: _cache[9] || (_cache[9] = (...args) => $options.tk_yes && $options.tk_yes(...args))
                }, "\u540C\u610F\u5E76\u63A5\u53D7")
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      )) : (0, import_vue3.createCommentVNode)("v-if", true),
      $data.appup_main == 1 ? ((0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(
        _component_uni_popup,
        {
          key: 1,
          type: "bottom",
          ref: "appupmain",
          "is-mask-click": false,
          "mask-click": false,
          "render-whole": true
        },
        {
          default: (0, import_vue3.withCtx)(() => [
            (0, import_vue3.createElementVNode)(
              "view",
              {
                renderWhole: true,
                class: "appupmain",
                style: (0, import_vue3.normalizeStyle)("padding-bottom:" + $data.appb + "px;")
              },
              [
                (0, import_vue3.createElementVNode)(
                  "u-text",
                  { class: "appupmain_t" },
                  (0, import_vue3.toDisplayString)($data.appup_tit),
                  1
                  /* TEXT */
                ),
                $data.appup_zt == 0 ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                  key: 0,
                  class: "appupmain_c",
                  renderWhole: true
                }, [
                  (0, import_vue3.createElementVNode)("u-text", { class: "appupmain_c_t" }, "\u4F18\u5316\u4F53\u9A8C\uFF0C\u4FEE\u590D\u5DF2\u77E5\u95EE\u9898\uFF0C\u8D76\u5FEB\u70B9\u51FB\u4E0B\u8F7D\u5427\uFF01"),
                  (0, import_vue3.createElementVNode)("u-text", { class: "appupmain_c_t" }, "\u6E29\u99A8\u63D0\u793A\uFF01\u8BF7\u4FDD\u6301\u65B0\u7248\u672C\uFF0C\u65E7\u7248\u672C\u53EF\u80FD\u4F1A\u5F71\u54CD\u60A8\u7684\u4F53\u9A8C\u548C\u90E8\u5206\u529F\u80FD\u65E0\u6CD5\u4F7F\u7528\u7684\u95EE\u9898\u3002")
                ])) : (0, import_vue3.createCommentVNode)("v-if", true),
                $data.appup_zt == 1 ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("u-text", {
                  key: 1,
                  class: "appupmain_t"
                }, "\u5DF2\u4E0B\u8F7D")) : (0, import_vue3.createCommentVNode)("v-if", true),
                $data.appup_zt == 1 ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                  key: 2,
                  class: "appupmain_progress"
                }, [
                  (0, import_vue3.createVNode)(_component_progress, {
                    percent: $data.appdow_jd,
                    "stroke-width": "20",
                    "active-mode": "forwards",
                    activeColor: "#ff008a",
                    backgroundColor: "#2d3648"
                  }, null, 8, ["percent"])
                ])) : (0, import_vue3.createCommentVNode)("v-if", true),
                $data.appup_zt == 1 && $data.appdow_fd != "" ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                  key: 3,
                  class: "appupmain_bx",
                  renderWhole: true
                }, [
                  (0, import_vue3.createElementVNode)("u-text", {
                    class: "appupmain_b_l",
                    onClick: _cache[10] || (_cache[10] = (...args) => $options.appup_goapp && $options.appup_goapp(...args))
                  }, "\u91CD\u65B0\u5B89\u88C5")
                ])) : (0, import_vue3.createCommentVNode)("v-if", true),
                $data.appup_zt == 0 ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                  key: 4,
                  class: "appupmain_b",
                  renderWhole: true
                }, [
                  (0, import_vue3.createElementVNode)("u-text", {
                    class: "appupmain_b_l",
                    onClick: _cache[11] || (_cache[11] = (...args) => $options.appup_yes && $options.appup_yes(...args))
                  }, "\u7ACB\u5373\u5347\u7EA7"),
                  (0, import_vue3.createElementVNode)("u-text", {
                    class: "appupmain_b_r",
                    onClick: _cache[12] || (_cache[12] = (...args) => $options.appup_no && $options.appup_no(...args))
                  }, "\u7B49\u5F85\u4E0B\u6B21\u518D\u5347\u7EA7")
                ])) : (0, import_vue3.createCommentVNode)("v-if", true)
              ],
              4
              /* STYLE */
            )
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      )) : (0, import_vue3.createCommentVNode)("v-if", true)
    ]);
  }
  var tab1 = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "F:/360MoveData/Users/abc/Desktop/\u5C0F\u718A\u79D8\u5B9D/pages/index/tab1.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/index/tab1";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    tab1.mpType = "page";
    const app = Vue.createPageApp(tab1, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...tab1.styles || []]));
    app.mount("#root");
  }
})();
