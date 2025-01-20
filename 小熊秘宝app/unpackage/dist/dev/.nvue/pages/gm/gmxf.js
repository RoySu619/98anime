import { _ as _export_sfc, G as G_APP } from "../../ip.js";
import { openBlock, createElementBlock, createElementVNode, createCommentVNode, Fragment, renderList, toDisplayString } from "vue";
const _style_0 = { "nodata": { "": { "width": "750rpx", "height": "600rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "center" } }, "nodata_i": { "": { "width": "400rpx", "height": "300rpx" } }, "tp": { "": { "width": "750rpx", "height": "100rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "center", "backgroundColor": "#ffda08" } }, "tpli": { "": { "width": "200rpx", "height": "100rpx", "textAlign": "center", "fontSize": "30rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "flex-start", "alignItems": "center" } }, "tpli_t": { "": { "width": "200rpx", "height": "80rpx", "lineHeight": "100rpx", "textAlign": "center", "fontSize": "30rpx" } }, "tpli_b": { "": { "width": "50rpx", "height": "10rpx", "backgroundColor": "#ffffff", "borderRadius": "5rpx" } }, "m": { "": { "width": "750rpx" } }, "list": { "": { "width": "750rpx", "paddingTop": "30rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "paddingBottom": "30rpx" } }, "list_b": { "": { "width": "750rpx", "height": "30rpx" } }, "gm": { "": { "width": "690rpx", "height": "130rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center" } }, "gm_i": { "": { "width": "130rpx", "height": "130rpx", "borderRadius": "20rpx" } }, "gm_c": { "": { "width": "450rpx", "paddingLeft": "20rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "flex-start" } }, "gm_c_t": { "": { "width": "330rpx", "height": "43rpx", "lines": 1, "lineHeight": "43rpx", "fontSize": "30rpx", "fontWeight": "bold", "paddingRight": "20rpx", "color": "rgba(0,0,0,0.8)" } }, "gm_c_c": { "": { "height": "43rpx", "lineHeight": "50rpx", "fontSize": "24rpx", "color": "rgba(0,0,0,0.5)" } }, "gm_c_b": { "": { "lines": 1, "height": "43rpx", "lineHeight": "43rpx", "fontSize": "24rpx", "color": "rgba(0,0,0,0.5)" } }, "gm_r": { "": { "marginTop": "30rpx", "width": "100rpx", "borderRadius": "15rpx", "height": "60rpx", "lineHeight": "60rpx", "textAlign": "center", "fontSize": "24rpx", "backgroundImage": "linear-gradient(to top,#ffc30c,#ffda08)" } } };
const _sfc_main = {
  data() {
    return {
      ip: G_APP.ip,
      appb: G_APP.appb,
      gmlist: [],
      pag: 0,
      zpag: 1,
      tabid: 1
    };
  },
  onLoad() {
  },
  onReady() {
    this.get(1);
  },
  methods: {
    opgm(id) {
      uni.navigateTo({
        url: "../../pages/gm/gmxx?id=" + id
      });
    },
    settab(id) {
      if (this.tabid != id) {
        this.tabid = id;
        this.pag = 0;
        this.zpag = 1;
        this.get(1);
      }
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
          url: G_APP.ip + "appapi.php?to=kaifu",
          method: "GET",
          dataType: "json",
          enableCache: true,
          //缓存
          defer: true,
          //控制当前请求是否延时至首屏内容渲染后发送
          data: {
            "op": "kaifu" + thi.tabid,
            "pages": npag
          },
          success: (ret) => {
            if (ret.data.data) {
              uni.hideLoading();
              if (pd == 1) {
                thi.gmlist = ret.data.data;
                thi.zpag = ret.data.pagenum;
                uni.stopPullDownRefresh();
              }
              if (pd == 2) {
                thi.gmlist = thi.gmlist.concat(ret.data.data);
              }
            } else {
              thi.gmlist = [];
              uni.hideLoading();
            }
          }
        });
      }
    }
  },
  onNavigationBarButtonTap(e) {
    if (e.index == 0) {
      uni.navigateTo({
        url: "../../pages/user/dow"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", null, [
    createElementVNode("view", { class: "tp" }, [
      createElementVNode("view", {
        class: "tpli",
        onClick: _cache[0] || (_cache[0] = ($event) => $options.settab(1))
      }, [
        createElementVNode("u-text", { class: "tpli_t" }, "今日推荐"),
        $data.tabid == 1 ? (openBlock(), createElementBlock("u-text", {
          key: 0,
          class: "tpli_b"
        })) : createCommentVNode("v-if", true)
      ]),
      createElementVNode("view", {
        class: "tpli",
        onClick: _cache[1] || (_cache[1] = ($event) => $options.settab(2))
      }, [
        createElementVNode("u-text", { class: "tpli_t" }, "明日推荐"),
        $data.tabid == 2 ? (openBlock(), createElementBlock("u-text", {
          key: 0,
          class: "tpli_b"
        })) : createCommentVNode("v-if", true)
      ]),
      createElementVNode("view", {
        class: "tpli",
        onClick: _cache[2] || (_cache[2] = ($event) => $options.settab(3))
      }, [
        createElementVNode("u-text", { class: "tpli_t" }, "历史记录"),
        $data.tabid == 3 ? (openBlock(), createElementBlock("u-text", {
          key: 0,
          class: "tpli_b"
        })) : createCommentVNode("v-if", true)
      ])
    ]),
    createElementVNode(
      "list",
      {
        class: "m",
        onLoadmore: _cache[3] || (_cache[3] = (...args) => $options.moerdata && $options.moerdata(...args))
      },
      [
        $data.gmlist ? (openBlock(true), createElementBlock(
          Fragment,
          { key: 0 },
          renderList($data.gmlist, (item, index) => {
            return openBlock(), createElementBlock("cell", {
              class: "list",
              key: item.id,
              onClick: ($event) => $options.opgm(item.gid)
            }, [
              createElementVNode("view", {
                class: "gm",
                renderWhole: true
              }, [
                createElementVNode("u-image", {
                  class: "gm_i",
                  src: $data.ip + item.gmlogo
                }, null, 8, ["src"]),
                createElementVNode("view", {
                  renderWhole: true,
                  class: "gm_c"
                }, [
                  createElementVNode(
                    "u-text",
                    { class: "gm_c_t" },
                    toDisplayString(item.gmname),
                    1
                    /* TEXT */
                  ),
                  createElementVNode(
                    "u-text",
                    { class: "gm_c_c" },
                    "新服： " + toDisplayString(item.xfname),
                    1
                    /* TEXT */
                  ),
                  createElementVNode(
                    "u-text",
                    { class: "gm_c_b" },
                    "开服时间：" + toDisplayString(item.kftimes),
                    1
                    /* TEXT */
                  )
                ]),
                createElementVNode("u-text", { class: "gm_r" }, "下载")
              ])
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        )) : createCommentVNode("v-if", true),
        $data.gmlist == "" ? (openBlock(), createElementBlock("cell", {
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
    )
  ]);
}
const gmxf = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/小熊秘宝/pages/gm/gmxf.nvue"]]);
export {
  gmxf as default
};
