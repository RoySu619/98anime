import { _ as _export_sfc, G as G_APP } from "../../ip.js";
import { openBlock, createElementBlock, Fragment, renderList, createElementVNode, toDisplayString, createCommentVNode } from "vue";
const _style_0 = { "nodata": { "": { "width": "750rpx", "height": "600rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "center" } }, "nodata_i": { "": { "width": "400rpx", "height": "300rpx" } }, "m": { "": { "width": "750rpx" } }, "list": { "": { "width": "750rpx", "paddingLeft": "30rpx", "paddingTop": "30rpx" } }, "list_b": { "": { "width": "750rpx", "height": "30rpx" } }, "news": { "": { "width": "690rpx", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx", "backgroundColor": "#ffffff", "borderRadius": "10rpx" } }, "news_t": { "": { "width": "650rpx", "height": "80rpx", "lineHeight": "70rpx", "lines": 1, "textAlign": "center", "fontSize": "30rpx", "fontWeight": "bold", "color": "rgba(0,0,0,0.8)" } }, "news_c": { "": { "width": "650rpx", "lines": 3, "textOverflow": "ellipsis", "fontSize": "24rpx", "color": "rgba(0,0,0,0.5)", "paddingBottom": "20rpx" } }, "news_b": { "": { "width": "650rpx", "height": "43rpx", "lineHeight": "43rpx", "fontSize": "24rpx", "textAlign": "center", "color": "rgba(0,0,0,0.5)" } } };
const _sfc_main = {
  data() {
    return {
      ip: G_APP.ip,
      appb: G_APP.appb,
      list: [],
      pag: 0,
      zpag: 1
    };
  },
  onLoad() {
  },
  onReady() {
    this.get(1);
  },
  methods: {
    opzxxx(id) {
      uni.navigateTo({
        url: "../../pages/gm/newsxx?id=" + id
      });
    },
    moerdata() {
      this.get(2);
    },
    get(pd) {
      let thi = this;
      let npag = Number(thi.pag) + 1;
      thi.pag = npag;
      if (npag <= thi.zpag) {
        uni.request({
          url: G_APP.ip + "appapi.php?to=news",
          method: "GET",
          dataType: "json",
          enableCache: true,
          //缓存
          defer: true,
          //控制当前请求是否延时至首屏内容渲染后发送
          data: {
            "nelist": "go",
            "pages": npag
          },
          success: (ret) => {
            if (ret.data.data) {
              uni.hideLoading();
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
  return openBlock(), createElementBlock(
    "list",
    {
      class: "m",
      onLoadmore: _cache[0] || (_cache[0] = (...args) => $options.moerdata && $options.moerdata(...args))
    },
    [
      $data.list ? (openBlock(true), createElementBlock(
        Fragment,
        { key: 0 },
        renderList($data.list, (item, index) => {
          return openBlock(), createElementBlock("cell", {
            class: "list",
            key: item.id,
            onClick: ($event) => $options.opzxxx(item.id)
          }, [
            createElementVNode("view", {
              class: "news",
              renderWhole: true
            }, [
              createElementVNode(
                "u-text",
                { class: "news_t" },
                toDisplayString(item.zxname),
                1
                /* TEXT */
              ),
              createElementVNode(
                "u-text",
                { class: "news_c" },
                toDisplayString(item.zxjj),
                1
                /* TEXT */
              ),
              createElementVNode(
                "u-text",
                { class: "news_b" },
                toDisplayString(item.times),
                1
                /* TEXT */
              )
            ])
          ], 8, ["onClick"]);
        }),
        128
        /* KEYED_FRAGMENT */
      )) : createCommentVNode("v-if", true),
      createElementVNode("cell", { class: "list_b" }),
      $data.list == "" ? (openBlock(), createElementBlock("cell", {
        key: 1,
        class: "nodata"
      }, [
        createElementVNode("u-image", {
          class: "nodata_i",
          src: "/static/nodata.png"
        })
      ])) : createCommentVNode("v-if", true)
    ],
    32
    /* HYDRATE_EVENTS */
  );
}
const news = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/小熊秘宝/pages/gm/news.nvue"]]);
export {
  news as default
};
