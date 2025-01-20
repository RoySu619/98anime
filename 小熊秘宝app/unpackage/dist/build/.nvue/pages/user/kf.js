import { _ as _export_sfc, G as G_APP } from "../../ip.js";
import { openBlock, createElementBlock, createElementVNode, toDisplayString, createCommentVNode } from "vue";
const _style_0 = { "li": { "": { "width": "750rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "height": "120rpx", "borderBottomWidth": "0.5rpx", "borderBottomStyle": "solid", "borderBottomColor": "rgba(0,0,0,0.05)", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center" } }, "li_l": { "": { "width": "60rpx", "height": "140rpx", "lineHeight": "140rpx", "fontSize": "50rpx", "fontFamily": "iconfont", "color": "rgba(0,0,0,0.3)" } }, "li_c": { "": { "width": "450rpx", "height": "140rpx", "lineHeight": "140rpx", "textAlign": "left" } }, "li_r": { "": { "width": "150rpx", "height": "60rpx", "lineHeight": "60rpx", "fontSize": "26rpx", "textAlign": "center", "borderRadius": "10rpx", "backgroundColor": "rgba(255,170,0,0.05)", "borderWidth": "0.5rpx", "borderStyle": "solid", "borderColor": "#ffda08", "color": "#000000" } } };
const _sfc_main = {
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
            uni.showToast({ icon: "none", title: " 复制微信客服成功! ", mask: false, duration: 1500 });
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
  return openBlock(), createElementBlock("list", null, [
    $data.kf1 ? (openBlock(), createElementBlock("cell", {
      key: 0,
      class: "li"
    }, [
      createElementVNode("u-text", { class: "li_l" }, ""),
      createElementVNode("u-text", { class: "li_c" }, "QQ: " + toDisplayString($data.kf1), 1),
      createElementVNode("u-text", {
        class: "li_r",
        onClick: _cache[0] || (_cache[0] = ($event) => $options.fz(1, $data.kf1))
      }, "会话")
    ])) : createCommentVNode("", true),
    $data.kf2 ? (openBlock(), createElementBlock("cell", {
      key: 1,
      class: "li"
    }, [
      createElementVNode("u-text", { class: "li_l" }, ""),
      createElementVNode("u-text", { class: "li_c" }, "QQ: " + toDisplayString($data.kf2), 1),
      createElementVNode("u-text", {
        class: "li_r",
        onClick: _cache[1] || (_cache[1] = ($event) => $options.fz(1, $data.kf2))
      }, "会话")
    ])) : createCommentVNode("", true),
    $data.kf3 ? (openBlock(), createElementBlock("cell", {
      key: 2,
      class: "li"
    }, [
      createElementVNode("u-text", { class: "li_l" }, ""),
      createElementVNode("u-text", { class: "li_c" }, "微信号: " + toDisplayString($data.kf3), 1),
      createElementVNode("u-text", {
        class: "li_r",
        onClick: _cache[2] || (_cache[2] = ($event) => $options.fz(2))
      }, "复制微信")
    ])) : createCommentVNode("", true),
    $data.hz ? (openBlock(), createElementBlock("cell", {
      key: 3,
      class: "li"
    }, [
      createElementVNode("u-text", { class: "li_l" }, ""),
      createElementVNode("u-text", { class: "li_c" }, "商务合作: " + toDisplayString($data.hz), 1),
      createElementVNode("u-text", {
        class: "li_r",
        onClick: _cache[3] || (_cache[3] = ($event) => $options.fz(1, $data.hz))
      }, "会话")
    ])) : createCommentVNode("", true),
    $data.qh1 ? (openBlock(), createElementBlock("cell", {
      key: 4,
      class: "li"
    }, [
      createElementVNode("u-text", { class: "li_l" }, ""),
      createElementVNode("u-text", { class: "li_c" }, "官方①群: " + toDisplayString($data.qh1), 1),
      createElementVNode("u-text", {
        class: "li_r",
        onClick: _cache[4] || (_cache[4] = ($event) => $options.fz(3, $data.qh1))
      }, "进群")
    ])) : createCommentVNode("", true),
    $data.qh2 ? (openBlock(), createElementBlock("cell", {
      key: 5,
      class: "li"
    }, [
      createElementVNode("u-text", { class: "li_l" }, ""),
      createElementVNode("u-text", { class: "li_c" }, "官方②群: " + toDisplayString($data.qh2), 1),
      createElementVNode("u-text", {
        class: "li_r",
        onClick: _cache[5] || (_cache[5] = ($event) => $options.fz(3, $data.qh2))
      }, "进群")
    ])) : createCommentVNode("", true)
  ]);
}
const kf = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  kf as default
};
