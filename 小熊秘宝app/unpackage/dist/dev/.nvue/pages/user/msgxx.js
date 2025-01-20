import { _ as _export_sfc, G as G_APP } from "../../ip.js";
import { openBlock, createElementBlock, createElementVNode, toDisplayString } from "vue";
const _style_0 = { "m": { "": { "width": "750rpx" } }, "tit": { "": { "width": "750rpx", "lineHeight": "30rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "lines": 2, "fontSize": "30rpx", "textAlign": "center", "paddingTop": "30rpx" } }, "tm": { "": { "color": "rgba(0,0,0,0.3)", "width": "750rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "lines": 1, "height": "80rpx", "lineHeight": "80rpx", "fontSize": "26rpx", "textAlign": "center", "borderBottomWidth": "0.5rpx", "borderBottomStyle": "solid", "borderBottomColor": "rgba(0,0,0,0.05)" } }, "nr": { "": { "paddingLeft": "30rpx", "paddingRight": "30rpx", "fontSize": "30rpx", "lineHeight": "40rpx", "paddingTop": "30rpx", "backgroundColor": "#ffffff" } } };
const _sfc_main = {
  data() {
    return {
      id: "0",
      tit: "",
      tm: "",
      nr: ""
    };
  },
  onLoad(obj) {
    this.id = obj.id;
  },
  onReady() {
    this.get();
  },
  methods: {
    get() {
      let thi = this;
      uni.request({
        url: G_APP.ip + "appapi.php?to=sys",
        method: "GET",
        dataType: "json",
        enableCache: true,
        //缓存
        defer: true,
        //控制当前请求是否延时至首屏内容渲染后发送
        data: {
          op: "sys_gg_xx",
          id: thi.id
        },
        success: (ret) => {
          if (ret.data) {
            thi.tit = ret.data.name;
            thi.tm = ret.data.times;
            thi.nr = ret.data.nr;
          }
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
  return openBlock(), createElementBlock("list", { class: "m" }, [
    createElementVNode("cell", { style: { "background-color": "#f9f9f9" } }, [
      createElementVNode(
        "u-text",
        { class: "tit" },
        toDisplayString($data.tit),
        1
        /* TEXT */
      ),
      createElementVNode(
        "u-text",
        { class: "tm" },
        "发布于: " + toDisplayString($data.tm),
        1
        /* TEXT */
      )
    ]),
    createElementVNode("cell", null, [
      createElementVNode(
        "u-text",
        { class: "nr" },
        toDisplayString($data.nr),
        1
        /* TEXT */
      )
    ])
  ]);
}
const msgxx = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/小熊秘宝/pages/user/msgxx.nvue"]]);
export {
  msgxx as default
};
