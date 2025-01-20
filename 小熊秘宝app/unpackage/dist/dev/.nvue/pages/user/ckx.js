import { _ as _export_sfc, G as G_APP } from "../../ip.js";
import { openBlock, createElementBlock, Fragment, renderList, createElementVNode, toDisplayString } from "vue";
const _style_0 = { "m": { "": { "width": "750rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "paddingTop": "30rpx" } }, "cell": { "": { "width": "690rpx", "paddingBottom": "30rpx" } }, "li": { "": { "width": "690rpx", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "40rpx", "paddingLeft": "20rpx", "backgroundColor": "rgba(0,0,0,0.02)", "borderRadius": "20rpx" } }, "li_t": { "": { "width": "690rpx", "height": "120rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "flex-start", "alignItems": "center" } }, "li_t_l": { "": { "width": "120rpx", "height": "120rpx", "borderRadius": "20rpx" } }, "li_t_r": { "": { "paddingLeft": "30rpx", "width": "520rpx", "height": "120rpx" } }, "li_t_r_t": { "": { "width": "490rpx", "height": "50rpx", "lines": 1, "lineHeight": "50rpx", "fontSize": "35rpx" } }, "li_t_r_b": { "": { "width": "490rpx", "height": "50rpx", "lineHeight": "50rpx", "fontSize": "26rpx", "color": "rgba(0,0,0,0.5)" } }, "li_c": { "": { "width": "650rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "textAlign": "center", "height": "120rpx", "lineHeight": "120rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center", "color": "rgba(0,0,0,0.5)" } }, "li_b": { "": { "width": "600rpx", "paddingLeft": "30rpx", "paddingBottom": "30rpx" } }, "li_b_t": { "": { "width": "650rpx", "color": "rgba(0,0,0,0.5)", "fontSize": "26rpx" } }, "li_a": { "": { "width": "600rpx", "marginLeft": "25rpx", "height": "80rpx", "lineHeight": "80rpx", "fontSize": "30rpx", "color": "#131220", "backgroundColor": "#ffda08", "textAlign": "center", "borderRadius": "40rpx" } } };
const _sfc_main = {
  data() {
    return {
      ip: G_APP.ip,
      appsys: G_APP.appsys,
      list: [],
      pag: 0,
      zpag: 1
    };
  },
  onReady() {
    this.get(1);
  },
  methods: {
    fz(pd, i) {
      let thi = this;
      if (pd == 1) {
        uni.setClipboardData({
          data: thi.list[i].lbkey,
          success: function() {
            uni.showToast({ icon: "none", title: " 复制礼包KEY成功! ", mask: false, duration: 1500 });
          }
        });
      }
      if (pd == 2) {
        uni.setClipboardData({
          data: thi.list[i].gmurl,
          success: function() {
            uni.showToast({ icon: "none", title: " 复制下载链接成功! ", mask: false, duration: 1500 });
          }
        });
      }
    },
    get(pd) {
      let thi = this;
      let npag = thi.pag + 1;
      thi.pag = npag;
      if (npag <= thi.zpag) {
        uni.request({
          url: G_APP.ip + "appapi.php?to=user&op=user-lblist",
          method: "GET",
          dataType: "json",
          enableCache: true,
          //缓存
          defer: true,
          //控制当前请求是否延时至首屏内容渲染后发送
          data: {
            "myuslb": "go",
            "pages": npag
          },
          success: (ret) => {
            if (ret.data.data) {
              if (pd == 1) {
                thi.zpag = ret.data.pagenum;
                thi.list = ret.data.data;
              }
              if (pd == 2) {
                thi.list = thi.list.concat(ret.data.data);
              }
            }
          }
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "list",
    {
      class: "m",
      onLoadmore: _cache[0] || (_cache[0] = ($event) => $options.get(2))
    },
    [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($data.list, (item, i) => {
          return openBlock(), createElementBlock("cell", {
            class: "cell",
            key: item.id
          }, [
            createElementVNode("view", { class: "li" }, [
              createElementVNode("view", { class: "li_t" }, [
                createElementVNode("u-image", {
                  class: "li_t_l",
                  src: $data.ip + item.gmlogo
                }, null, 8, ["src"]),
                createElementVNode("view", { class: "li_t_r" }, [
                  createElementVNode(
                    "u-text",
                    { class: "li_t_r_t" },
                    toDisplayString(item.gmname) + " - " + toDisplayString(item.lbname),
                    1
                    /* TEXT */
                  ),
                  createElementVNode(
                    "u-text",
                    { class: "li_t_r_b" },
                    "到期时间：" + toDisplayString(item.lbtm),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              createElementVNode(
                "u-text",
                { class: "li_c" },
                "KEY: " + toDisplayString(item.lbkey),
                1
                /* TEXT */
              ),
              createElementVNode("u-text", {
                class: "li_a",
                onClick: ($event) => $options.fz(1, i)
              }, "复制KEY", 8, ["onClick"])
            ])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ],
    32
    /* HYDRATE_EVENTS */
  );
}
const ckx = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/小熊秘宝/pages/user/ckx.nvue"]]);
export {
  ckx as default
};
