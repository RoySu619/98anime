import { _ as _export_sfc, G as G_APP } from "../../ip.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createCommentVNode, createVNode, withCtx } from "vue";
const _style_0 = { "top": { "": { "width": "750rpx", "paddingTop": "200rpx", "height": "400rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "center" } }, "top_i": { "": { "width": "200rpx", "height": "200rpx" } }, "top_b_t": { "": { "width": "450rpx", "height": "120rpx" } }, "li": { "": { "width": "750rpx", "paddingTop": "80rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "flex-start", "alignItems": "center" } }, "lis": { "": { "width": "690rpx", "paddingTop": 0, "paddingRight": "30rpx", "paddingBottom": 0, "paddingLeft": "30rpx" } }, "li_tell": { "": { "width": "630rpx", "height": "100rpx", "marginBottom": "30rpx", "backgroundColor": "rgba(0,0,0,0.05)", "borderRadius": "50rpx", "justifyContent": "flex-start", "alignItems": "center", "flexDirection": "row", "flexWrap": "nowrap", "position": "relative" } }, "li_tell_l": { "": { "width": "100rpx", "height": "100rpx", "lineHeight": "100rpx", "textAlign": "center", "fontSize": "40rpx", "fontFamily": "iconfont" } }, "li_tell_gd": { "": { "width": "80rpx", "height": "100rpx" } }, "li_input": { "": { "width": "500rpx", "height": "50rpx", "fontSize": "28rpx", "lineHeight": "50rpx" } }, "li_tell_x": { "": { "position": "absolute", "right": "20rpx", "width": "50rpx", "height": "50rpx", "lineHeight": "50rpx", "textAlign": "center", "borderRadius": "30rpx", "fontFamily": "iconfont", "fontSize": "26rpx", "backgroundColor": "rgba(0,0,0,0.1)" } }, "li_tell_yzm": { "": { "width": "120rpx", "height": "50rpx", "lineHeight": "50rpx", "fontSize": "26rpx", "textAlign": "center", "color": "#ff008a" } }, "pas_ys": { "": { "paddingLeft": "60rpx", "paddingRight": "60rpx", "height": "100rpx", "justifyContent": "flex-start", "alignItems": "center", "flexDirection": "row", "flexWrap": "nowrap" } }, "txt_url": { "": { "color": "#ffda08", "height": "100rpx", "lineHeight": "100rpx", "fontSize": "26rpx", "paddingLeft": "10rpx", "paddingRight": "10rpx" } }, "txt_txt": { "": { "height": "100rpx", "lineHeight": "100rpx", "fontSize": "26rpx" } }, "op": { "": { "width": "750rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "center" } }, "op_t1": { "": { "width": "300rpx", "textAlign": "center", "height": "100rpx", "lineHeight": "100rpx", "fontSize": "28rpx" } }, "op_t2": { "": { "width": "300rpx", "textAlign": "center", "height": "100rpx", "lineHeight": "100rpx", "fontSize": "28rpx" } }, "an": { "": { "width": "750rpx", "paddingTop": "30rpx", "paddingLeft": "50rpx", "paddingRight": "50rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center" } }, "pot": { "": { "width": "650rpx", "height": "100rpx", "lineHeight": "100rpx", "borderRadius": "50rpx", "backgroundColor": "#ffda08", "textAlign": "center", "color": "#131220", "fontSize": "32rpx" } }, "oppas": { "": { "width": "300rpx", "color": "#ffffff", "fontSize": "28rpx", "paddingLeft": "20rpx", "height": "80rpx", "lineHeight": "80rpx", "borderRadius": "10rpx", "textAlign": "left" } }, "addzh": { "": { "width": "750rpx", "height": "100rpx" } }, "addzhs": { "": { "position": "fixed", "bottom": 20, "left": 0, "width": "750rpx", "height": "100rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "center" } }, "addzh_t1": { "": { "height": "50rpx", "lineHeight": "30rpx", "fontSize": "30rpx", "color": "rgba(255,255,255,0.5)" } }, "addzh_t2": { "": { "height": "50rpx", "lineHeight": "30rpx", "fontSize": "30rpx", "color": "#33ffb4" } } };
const _sfc_main = {
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
          url: "../../pages/llq/index?url=yszc&tit=隐私政策&pd=1"
        });
      }
      if (pd == 2) {
        uni.navigateTo({
          url: "../../pages/llq/index?url=fwxy&tit=服务协议&pd=1"
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
            title: "登录中",
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
                uni.showToast({ icon: "none", title: " 登录信息不完整，请重试！ ", duration: 2e3 });
              }
              if (res.data[0] == "1") {
                uni.showToast({ icon: "none", title: " 登录账号不存在 ", duration: 2e3 });
              }
              if (res.data[0] == "2") {
                uni.showToast({ icon: "none", title: " 登录密码错误 ", duration: 2e3 });
              }
              if (res.data[0] == "66") {
                uni.$emit("login", { msg: "yes" });
                setTimeout(() => {
                  uni.navigateBack();
                }, 1e3);
                uni.showToast({ icon: "none", title: " 登录成功 ", duration: 2e3 });
              }
              if (res.data[0] == "99") {
                uni.showToast({ icon: "none", title: " 该账号因违规已经封禁，如有疑问请联系客服 ", duration: 2e3 });
              }
            }
          });
        } else {
          if (thi.tell == "") {
            uni.showToast({ icon: "none", title: " 请输入登录手机号 ", duration: 2e3 });
          } else if (thi.pass == "") {
            uni.showToast({ icon: "none", title: " 请输入登录密码 ", duration: 2e3 });
          }
        }
      } else {
        uni.showToast({ icon: "none", title: " 您未同意用户协议,服务协议,请认真阅读并勾选同意全部协议 ", duration: 2e3 });
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
  const _component_radio = resolveComponent("radio");
  const _component_label = resolveComponent("label");
  return openBlock(), createElementBlock("list", null, [
    createElementVNode("cell", { class: "top" }, [
      createElementVNode("u-image", {
        class: "top_i",
        src: "/static/uslogo.png"
      })
    ]),
    createElementVNode("cell", { class: "li" }, [
      createElementVNode("view", { class: "lis" }, [
        createElementVNode("view", { class: "li_tell" }, [
          createElementVNode("u-text", { class: "li_tell_l" }, ""),
          createElementVNode("u-input", {
            class: "li_input",
            value: $data.tell,
            onInput: _cache[0] || (_cache[0] = (...args) => $options.telljt && $options.telljt(...args)),
            onFocus: _cache[1] || (_cache[1] = (...args) => $options.settellqcshow && $options.settellqcshow(...args)),
            onBlur: _cache[2] || (_cache[2] = (...args) => $options.settellqchide && $options.settellqchide(...args)),
            type: "number",
            maxlength: "11",
            placeholder: "请输入手机号",
            confirmType: "next",
            controlled: "true",
            autoBlur: "true",
            holdKeyboard: "true"
          }, null, 40, ["value"]),
          $data.qctellshow ? (openBlock(), createElementBlock("u-text", {
            key: 0,
            class: "li_tell_x",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.qctell && $options.qctell(...args))
          }, "")) : createCommentVNode("v-if", true)
        ]),
        createElementVNode("view", { class: "li_tell" }, [
          createElementVNode("u-text", { class: "li_tell_l" }, ""),
          createElementVNode("u-input", {
            class: "li_input",
            value: $data.pass,
            onInput: _cache[4] || (_cache[4] = (...args) => $options.passjt && $options.passjt(...args)),
            onFocus: _cache[5] || (_cache[5] = (...args) => $options.setpassqcshow && $options.setpassqcshow(...args)),
            onBlur: _cache[6] || (_cache[6] = (...args) => $options.setpassqchide && $options.setpassqchide(...args)),
            type: "password",
            maxlength: "18",
            placeholder: "请输入密码",
            confirmType: "next",
            controlled: "true",
            autoBlur: "true",
            holdKeyboard: "true"
          }, null, 40, ["value"]),
          $data.qcpassshow ? (openBlock(), createElementBlock("u-text", {
            key: 0,
            class: "li_tell_x",
            onClick: _cache[7] || (_cache[7] = (...args) => $options.qcpass && $options.qcpass(...args))
          }, "")) : createCommentVNode("v-if", true)
        ])
      ])
    ]),
    createElementVNode("cell", { class: "pas_ys" }, [
      createVNode(_component_label, {
        class: "label",
        onClick: $options.setxyzt
      }, {
        default: withCtx(() => [
          createVNode(_component_radio, {
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
      createElementVNode("u-text", {
        class: "txt_txt",
        onClick: _cache[8] || (_cache[8] = (...args) => $options.setxyzt && $options.setxyzt(...args))
      }, "已阅读并同意"),
      createElementVNode("u-text", {
        class: "txt_url",
        onClick: _cache[9] || (_cache[9] = ($event) => $options.opllq(2))
      }, "用户协议"),
      createElementVNode("u-text", {
        class: "txt_txt",
        onClick: _cache[10] || (_cache[10] = (...args) => $options.setxyzt && $options.setxyzt(...args))
      }, "和"),
      createElementVNode("u-text", {
        class: "txt_url",
        onClick: _cache[11] || (_cache[11] = ($event) => $options.opllq(1))
      }, "隐私政策")
    ]),
    createElementVNode("cell", { class: "op" }, [
      createElementVNode("u-text", {
        class: "op_t1",
        onClick: _cache[12] || (_cache[12] = (...args) => $options.openzhpas && $options.openzhpas(...args))
      }, "找回密码"),
      createElementVNode("u-text", {
        class: "op_t2",
        onClick: _cache[13] || (_cache[13] = (...args) => $options.opzc && $options.opzc(...args))
      }, "立即注册")
    ]),
    createElementVNode("cell", { class: "an" }, [
      createElementVNode("u-text", {
        class: "pot",
        onClick: _cache[14] || (_cache[14] = (...args) => $options.potdata && $options.potdata(...args))
      }, "立即登录")
    ])
  ]);
}
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/小熊秘宝/pages/login/login.nvue"]]);
export {
  login as default
};
