import { _ as _export_sfc, G as G_APP } from "../../ip.js";
import { openBlock, createElementBlock, Fragment, renderList, createElementVNode, toDisplayString } from "vue";
const _style_0 = { "m": { "": { "width": "750rpx" } }, "ml": { "": { "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center", "width": "750rpx", "borderRadius": "20rpx", "height": "120rpx" } }, "li": { "": { "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center", "width": "750rpx", "height": "120rpx", "borderBottomWidth": "0.5rpx", "borderBottomStyle": "solid", "borderBottomColor": "rgba(0,0,0,0.05)" } }, "li_l": { "": { "width": "490rpx", "height": "50rpx", "lineHeight": "50rpx", "lines": 1, "fontSize": "26rpx", "paddingLeft": "30rpx", "color": "rgba(0,0,0,0.5)" } }, "li_r": { "": { "width": "150rpx", "height": "50rpx", "lineHeight": "50rpx", "fontSize": "26rpx", "fontFamily": "iconfont", "textAlign": "center" } } };
const _sfc_main = {
  data() {
    return {
      ip: G_APP.ip,
      appt: G_APP.appt,
      appb: G_APP.appb,
      list: [],
      pag: 0,
      zpag: 1
    };
  },
  onReady() {
    this.get(1);
  },
  methods: {
    openxx(id) {
      uni.navigateTo({
        url: "../user/msgxx?id=" + id
      });
    },
    get(pd) {
      let thi = this;
      let npag = Number(thi.pag) + 1;
      thi.pag = npag;
      if (npag <= thi.zpag) {
        uni.request({
          url: G_APP.ip + "appapi.php?to=sys",
          method: "GET",
          dataType: "json",
          enableCache: true,
          //缓存
          defer: true,
          //控制当前请求是否延时至首屏内容渲染后发送
          data: {
            "pages": npag
          },
          success: (ret) => {
            if (ret.data.data) {
              if (pd == 1) {
                thi.list = ret.data.data;
                thi.zpag = ret.data.pagenum;
              }
              if (pd == 2) {
                thi.list = thi.list.concat(ret.data.data);
              }
            } else {
              thi.list = [];
              uni.hideLoading();
            }
          }
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("list", { class: "m" }, [
    (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList($data.list, (item, index) => {
        return openBlock(), createElementBlock("cell", {
          class: "ml",
          key: item.id,
          onClick: ($event) => $options.openxx(item.id)
        }, [
          createElementVNode("view", { class: "li" }, [
            createElementVNode(
              "u-text",
              { class: "li_l" },
              toDisplayString(item.ggtp),
              1
              /* TEXT */
            ),
            createElementVNode("u-text", { class: "li_r" }, "查看详细 ")
          ])
        ], 8, ["onClick"]);
      }),
      128
      /* KEYED_FRAGMENT */
    ))
  ]);
}
const msg = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/小熊秘宝/pages/user/msg.nvue"]]);
export {
  msg as default
};
