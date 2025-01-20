import { _ as _export_sfc, G as G_APP } from "../../ip.js";
import { openBlock, createElementBlock, createElementVNode, toDisplayString } from "vue";
const _style_0 = { "top": { "": { "height": "50rpx" } }, "li": { "": { "paddingLeft": "60rpx", "paddingRight": "60rpx", "justifyContent": "flex-start", "alignItems": "center", "flexDirection": "row", "flexWrap": "nowrap" } }, "pas": { "": { "paddingTop": "20rpx", "paddingLeft": "60rpx", "paddingRight": "60rpx", "justifyContent": "flex-start", "alignItems": "center", "flexDirection": "row", "flexWrap": "nowrap" } }, "pas_ys": { "": { "paddingLeft": "60rpx", "paddingRight": "60rpx", "height": "100rpx", "justifyContent": "flex-start", "alignItems": "center", "flexDirection": "row", "flexWrap": "nowrap" } }, "txt_url": { "": { "color": "#ffda08", "height": "100rpx", "lineHeight": "100rpx", "fontSize": "26rpx", "paddingLeft": "10rpx", "paddingRight": "10rpx" } }, "txt_txt": { "": { "height": "100rpx", "lineHeight": "100rpx", "fontSize": "26rpx" } }, "txt_txt_tis": { "": { "fontSize": "26rpx", "paddingLeft": "5rpx", "color": "#ffffff" } }, "li_tell": { "": { "width": "630rpx", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx", "borderRadius": "50rpx", "backgroundColor": "rgba(0,0,0,0.05)", "justifyContent": "flex-start", "alignItems": "center", "flexDirection": "row", "flexWrap": "nowrap" } }, "li_tell_l": { "": { "fontFamily": "iconfont", "width": "80rpx", "height": "40rpx", "lineHeight": "40rpx", "textAlign": "center", "fontSize": "40rpx" } }, "li_tell_gd": { "": { "width": "80rpx", "height": "40rpx" } }, "li_input": { "": { "paddingLeft": "10rpx", "width": "500rpx", "height": "50rpx", "fontSize": "28rpx", "lineHeight": "50rpx" } }, "li_inputs": { "": { "paddingLeft": "10rpx", "width": "360rpx", "height": "50rpx", "fontSize": "28rpx", "lineHeight": "50rpx" } }, "li_tell_x": { "": { "width": "50rpx", "height": "50rpx", "paddingTop": "5rpx", "paddingRight": "5rpx", "paddingBottom": "5rpx", "paddingLeft": "5rpx" } }, "li_tell_yzm": { "": { "width": "150rpx", "height": "50rpx", "lineHeight": "50rpx", "fontSize": "26rpx", "textAlign": "center", "color": "#d4b506" } }, "tis": { "": { "width": "630rpx", "height": "80rpx", "lineHeight": "80rpx", "fontSize": "26rpx", "color": "rgba(255,255,255,0.8)" } }, "pot": { "": { "width": "630rpx", "height": "100rpx", "lineHeight": "100rpx", "borderRadius": "50rpx", "backgroundColor": "#ffda08", "textAlign": "center", "fontSize": "30rpx" } }, "oppas": { "": { "marginTop": "20rpx", "width": "630rpx", "borderWidth": "0.5rpx", "borderStyle": "solid", "borderColor": "rgba(255,255,255,0.1)", "backgroundColor": "rgba(255,255,255,0.1)", "color": "#ffffff", "fontSize": "28rpx", "height": "80rpx", "lineHeight": "80rpx", "borderRadius": "10rpx", "textAlign": "center" } } };
const _sfc_main = {
  name: "login_dx",
  data() {
    return {
      pas: "",
      tell: "",
      yzm: "",
      yzmnumtm: "",
      yzmzt: false,
      yzmnum: "获取验证码",
      yzmnums: "60"
    };
  },
  onLoad() {
  },
  methods: {
    potdata() {
      uni.showLoading({
        title: "请稍后...",
        mask: true
      });
      uni.hideKeyboard();
      let thi = this;
      if (thi.pas && thi.tell && thi.yzm) {
        uni.request({
          url: G_APP.ip + "appapi.php?to=pass",
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
            zhpass: "go",
            myname: thi.tell,
            mypass: thi.pas,
            yzma: thi.yzm
          },
          success: (res) => {
            let msg = res.data[0];
            uni.hideLoading();
            if (msg == "1") {
              uni.showToast({ icon: "none", title: " 验证码错误！ ", duration: 2e3 });
            }
            if (msg == "3") {
              uni.showToast({ icon: "none", title: " 账号不存在！ ", duration: 2e3 });
            }
            if (msg == "2") {
              uni.showToast({ icon: "none", title: " 新密码不能为空或密码有非法字符！ ", duration: 2e3 });
            }
            if (msg == "66") {
              uni.$emit("login", { msg: "yes" });
              setTimeout(() => {
                uni.navigateBack({ delta: 1 });
              }, 1e3);
              uni.showToast({ icon: "none", title: " 修改密码成功，请使用新密码登录 ", duration: 2e3 });
            }
            if (res.data.msg == "4") {
              uni.showToast({ icon: "none", title: " 账号不存在！ ", duration: 2e3 });
            }
          }
        });
      } else {
        if (thi.tell == "") {
          uni.showToast({ icon: "none", title: " 请输入登录手机号 ", duration: 2e3 });
        } else if (thi.pas == "") {
          uni.showToast({ icon: "none", title: " 请输入登录密码 ", duration: 2e3 });
        } else if (thi.yzm == "") {
          uni.showToast({ icon: "none", title: " 请输入短信验证码 ", duration: 2e3 });
        }
      }
    },
    getyzm() {
      let thi = this;
      if (thi.tell && thi.yzmzt == false) {
        uni.request({
          url: G_APP.ip + "appapi.php?to=seccode&op=gethui",
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
              uni.showToast({ icon: "none", title: " 获取验证码成功 ", duration: 2e3 });
            } else {
              uni.showToast({ icon: "none", title: " 请求被限制，请稍后再试！ ", duration: 2e3 });
            }
          }
        });
      }
    },
    setyzmnum() {
      this.yzmnumtm = setInterval(() => {
        this.yzmnums = this.yzmnums - 1;
        this.yzmnum = this.yzmnums + "s后再试";
        if (this.yzmnums == 1) {
          clearInterval(this.yzmnumtm);
          this.yzmzt = false;
          this.yzmnum = "获取验证码";
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
  return openBlock(), createElementBlock("list", null, [
    createElementVNode("cell", { class: "top" }),
    createElementVNode("cell", { class: "li" }, [
      createElementVNode("u-text", { class: "tis" }, "需找回账号")
    ]),
    createElementVNode("cell", { class: "li" }, [
      createElementVNode("view", { class: "li_tell" }, [
        createElementVNode("u-text", { class: "li_tell_l" }, ""),
        createElementVNode("u-input", {
          class: "li_input",
          value: $data.tell,
          onInput: _cache[0] || (_cache[0] = (...args) => $options.inputtel && $options.inputtel(...args)),
          type: "text",
          maxlength: "11",
          placeholder: "请输入要找回密码的账号",
          confirmType: "next",
          controlled: "true",
          focus: "",
          autoBlur: "",
          holdKeyboard: "true"
        }, null, 40, ["value"])
      ])
    ]),
    createElementVNode("cell", { class: "li" }, [
      createElementVNode("u-text", { class: "tis" }, "设置新密码（密码允许特殊符号 .）")
    ]),
    createElementVNode("cell", { class: "li" }, [
      createElementVNode("view", { class: "li_tell" }, [
        createElementVNode("u-text", { class: "li_tell_l" }, ""),
        createElementVNode("u-input", {
          class: "li_input",
          value: $data.pas,
          onInput: _cache[1] || (_cache[1] = (...args) => $options.inputpas && $options.inputpas(...args)),
          type: "text",
          password: "true",
          maxlength: "18",
          placeholder: "请输入新密码",
          confirmType: "next",
          controlled: "true",
          autoBlur: "",
          holdKeyboard: "true"
        }, null, 40, ["value"])
      ])
    ]),
    createElementVNode("cell", { class: "li" }, [
      createElementVNode("u-text", { class: "tis" }, "验证码")
    ]),
    createElementVNode("cell", { class: "li" }, [
      createElementVNode("view", { class: "li_tell" }, [
        createElementVNode("u-text", { class: "li_tell_l" }, ""),
        createElementVNode("u-input", {
          class: "li_inputs",
          value: $data.yzm,
          onInput: _cache[2] || (_cache[2] = (...args) => $options.inputtz && $options.inputtz(...args)),
          type: "number",
          maxlength: "6",
          placeholder: "请输入验证码",
          confirmType: "next",
          controlled: "true",
          autoBlur: "",
          holdKeyboard: "true"
        }, null, 40, ["value"]),
        createElementVNode(
          "u-text",
          {
            class: "li_tell_yzm",
            onClick: _cache[3] || (_cache[3] = ($event) => $options.getyzm())
          },
          toDisplayString($data.yzmnum),
          1
          /* TEXT */
        )
      ])
    ]),
    createElementVNode("cell", { class: "li" }, [
      createElementVNode("u-text", { class: "tis" })
    ]),
    createElementVNode("cell", { class: "li" }, [
      createElementVNode("u-text", {
        class: "pot",
        onClick: _cache[4] || (_cache[4] = (...args) => $options.potdata && $options.potdata(...args))
      }, "确定找回")
    ])
  ]);
}
const login_zpas = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/小熊秘宝/pages/login/login_zpas.nvue"]]);
export {
  login_zpas as default
};
