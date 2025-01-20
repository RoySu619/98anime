import { _ as _export_sfc, G as G_APP } from "../../ip.js";
import { openBlock, createElementBlock, createElementVNode, toDisplayString, createCommentVNode } from "vue";
const _style_0 = { "lb_m": { "": { "width": "750rpx" } }, "lb_m_t": { "": { "width": "750rpx", "paddingTop": "50rpx", "paddingRight": "30rpx", "paddingBottom": "50rpx", "paddingLeft": "30rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "flex-start", "alignItems": "center", "backgroundColor": "rgba(0,0,0,0.02)" } }, "lb_m_t_l": { "": { "width": "120rpx", "height": "120rpx", "borderRadius": "20rpx" } }, "lb_m_t_r": { "": { "paddingLeft": "20rpx", "width": "570rpx", "height": "120rpx" } }, "lb_m_t_r_t1": { "": { "width": "500rpx", "height": "40rpx", "lineHeight": "40rpx", "lines": 1, "fontSize": "30rpx", "color": "rgba(0,0,0,1)", "fontWeight": "bold" } }, "lb_m_t_r_t2": { "": { "width": "500rpx", "lines": 1, "height": "40rpx", "lineHeight": "48rpx", "fontSize": "24rpx", "color": "rgba(0,0,0,0.5)" } }, "lb_m_t_r_t3": { "": { "width": "500rpx", "lines": 1, "height": "40rpx", "lineHeight": "40rpx", "fontSize": "24rpx", "color": "rgba(255,0,0,1)" } }, "lb_cell": { "": { "width": "750rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx" } }, "lb_tit": { "": { "width": "690rpx", "height": "120rpx", "lineHeight": "120rpx", "fontSize": "30rpx" } }, "lb_jj": { "": { "width": "690rpx", "lineHeight": "35rpx", "fontSize": "26rpx", "borderRadius": "10rpx", "color": "rgba(0,0,0,0.8)" } }, "lb_cells": { "": { "width": "750rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "paddingTop": "50rpx" } }, "lb_m_an": { "": { "width": "690rpx", "height": "80rpx", "lineHeight": "80rpx", "backgroundColor": "#ffda08", "textAlign": "center", "fontSize": "30rpx", "borderRadius": "40rpx" } }, "lb_m_an2": { "": { "width": "690rpx", "height": "80rpx", "lineHeight": "80rpx", "marginBottom": "20rpx", "backgroundColor": "rgba(255,218,8,0.1)", "color": "#ffda08", "textAlign": "center", "fontSize": "30rpx", "borderRadius": "40rpx" } } };
const _sfc_main = {
  data() {
    return {
      ip: G_APP.ip,
      apph: G_APP.apph,
      lb_logo: "",
      lb_name: "",
      lb_jj: "",
      lb_sm: "",
      lb_lbsy: "",
      lb_key: "",
      keyid: "",
      lb_txt: "",
      gmjj: ""
    };
  },
  onLoad(option) {
    this.id = option.id;
  },
  onReady() {
    this.getzt();
  },
  methods: {
    getzt() {
      let thi = this;
      uni.request({
        url: G_APP.ip + "appapi.php?to=libaoxx",
        method: "GET",
        dataType: "json",
        enableCache: true,
        //缓存
        defer: true,
        //控制当前请求是否延时至首屏内容渲染后发送
        data: {
          id: thi.id
        },
        success: (ret) => {
          if (ret.data.lbxx[0]) {
            thi.lb_logo = thi.ip + ret.data.lbxx[0].lblogo;
            thi.lb_name = ret.data.lbxx[0].gmname + " - " + ret.data.lbxx[0].lbname;
            thi.lb_jj = ret.data.lbxx[0].lbjj;
            thi.lb_sm = ret.data.lbxx[0].lbsm;
            thi.lb_key = ret.data.lbkey;
            thi.lb_lbsy = ret.data.lbxx[0].lbsy;
            thi.gmjj = ret.data.gmjj;
            thi.keyid = ret.data.lbxx[0].keyid;
          }
        }
      });
    },
    potlq() {
      let thi = this;
      uni.showLoading({
        title: "请稍后...."
      });
      uni.request({
        url: G_APP.ip + "appapi.php?to=gmxx&op=gmxx_getlb",
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
          golq: "go",
          lbkey: thi.keyid,
          lbid: thi.id
        },
        success: (ret) => {
          if (ret.data == 0) {
            uni.showToast({ icon: "none", title: " 请先登录 ", mask: false, duration: 1500 });
          }
          if (ret.data.msg == 1) {
            thi.lb_key = ret.data.keys;
          }
          if (ret.data == 2) {
            uni.showToast({ icon: "none", title: " 无卡了！", mask: false, duration: 1500 });
          }
          if (ret.data == 3) {
            uni.showToast({ icon: "none", title: " 无领取条件! ", mask: false, duration: 1500 });
          }
          if (ret.data.msg == 66) {
            thi.lb_key = ret.data.keys;
            uni.showToast({ icon: "none", title: " 领取成功! ", mask: false, duration: 1500 });
          }
          uni.hideLoading();
        }
      });
    },
    fz() {
      uni.setClipboardData({
        data: this.lb_key,
        success: function() {
          uni.showToast({ icon: "none", title: " 复制成功! ", mask: false, duration: 1500 });
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("list", { class: "lb_m" }, [
    createElementVNode("cell", { class: "lb_m_t" }, [
      createElementVNode("u-image", {
        class: "lb_m_t_l",
        src: $data.lb_logo
      }, null, 8, ["src"]),
      createElementVNode("view", { class: "lb_m_t_r" }, [
        createElementVNode("u-text", { class: "lb_m_t_r_t1" }, toDisplayString($data.lb_name), 1),
        createElementVNode("u-text", { class: "lb_m_t_r_t2" }, toDisplayString($data.lb_jj), 1),
        createElementVNode("u-text", { class: "lb_m_t_r_t3" }, "剩余：" + toDisplayString($data.lb_lbsy) + "枚", 1)
      ])
    ]),
    createElementVNode("cell", { class: "lb_cell" }, [
      createElementVNode("u-text", { class: "lb_tit" }, "礼包简介"),
      createElementVNode("u-text", { class: "lb_jj" }, toDisplayString($data.lb_jj), 1)
    ]),
    createElementVNode("cell", { class: "lb_cell" }, [
      createElementVNode("u-text", { class: "lb_tit" }, "使用方式"),
      createElementVNode("u-text", { class: "lb_jj" }, toDisplayString($data.lb_sm), 1)
    ]),
    $data.gmjj ? (openBlock(), createElementBlock("cell", {
      key: 0,
      class: "lb_cell"
    }, [
      createElementVNode("u-text", { class: "lb_tit" }, "游戏简介"),
      createElementVNode("u-text", { class: "lb_jj" }, toDisplayString($data.gmjj), 1)
    ])) : createCommentVNode("", true),
    createElementVNode("cell", { class: "lb_cells" }, [
      !$data.lb_key ? (openBlock(), createElementBlock("u-text", {
        key: 0,
        class: "lb_m_an",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.potlq && $options.potlq(...args))
      }, "领取礼包")) : createCommentVNode("", true),
      $data.lb_key ? (openBlock(), createElementBlock("u-text", {
        key: 1,
        class: "lb_m_an2",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.fz && $options.fz(...args))
      }, "复制礼包KEY")) : createCommentVNode("", true)
    ])
  ]);
}
const lb = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  lb as default
};
