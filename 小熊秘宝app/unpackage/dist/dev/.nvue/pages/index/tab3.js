import { _ as _export_sfc, G as G_APP } from "../../ip.js";
import { openBlock, createElementBlock, createElementVNode, normalizeStyle, Fragment, renderList, toDisplayString, createCommentVNode } from "vue";
const _style_0 = { "nodata": { "": { "width": "750rpx", "height": "600rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "center" } }, "nodata_i": { "": { "width": "400rpx", "height": "300rpx" } }, "hed": { "": { "width": "750rpx", "position": "sticky" } }, "heds": { "": { "width": "750rpx", "paddingRight": "30rpx", "backgroundColor": "#ffda08", "paddingBottom": "20rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "flex-end" } }, "hed_l": { "": { "width": "70rpx", "height": "70rpx", "lineHeight": "70rpx", "fontSize": "28rpx" } }, "hed_c": { "": { "width": "250rpx", "borderRadius": "50rpx", "textAlign": "center", "fontSize": "35rpx", "fontWeight": "bold", "height": "75rpx", "lineHeight": "75rpx" } }, "hed_r": { "": { "width": "70rpx", "fontSize": "45rpx", "textAlign": "center", "height": "70rpx", "lineHeight": "70rpx", "color": "rgba(0,0,0,0.7)", "fontFamily": "iconfont", "backgroundColor": "rgba(0,0,0,0.05)", "borderRadius": "37.5rpx" } }, "list": { "": { "width": "750rpx", "paddingTop": "30rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx" } }, "list_b": { "": { "width": "750rpx", "height": "30rpx" } }, "gm": { "": { "width": "690rpx", "height": "130rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center" } }, "gm_i": { "": { "width": "130rpx", "height": "130rpx", "borderRadius": "20rpx" } }, "gm_c": { "": { "width": "450rpx", "paddingLeft": "20rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "flex-start" } }, "gm_c_t": { "": { "width": "330rpx", "height": "43rpx", "lines": 1, "lineHeight": "43rpx", "fontSize": "30rpx", "fontWeight": "bold", "paddingRight": "20rpx", "color": "rgba(0,0,0,0.8)" } }, "gm_c_c": { "": { "height": "43rpx", "lineHeight": "50rpx", "fontSize": "24rpx", "lines": 1, "color": "rgba(0,0,0,0.5)" } }, "gm_c_b": { "": { "height": "43rpx", "lineHeight": "43rpx", "fontSize": "24rpx", "color": "rgba(0,0,0,0.5)" } }, "gm_r": { "": { "marginTop": "30rpx", "width": "100rpx", "borderRadius": "15rpx", "height": "60rpx", "lineHeight": "60rpx", "textAlign": "center", "fontSize": "24rpx", "backgroundImage": "linear-gradient(to top,#ffc30c,#ffda08)" } } };
const _sfc_main = {
  data() {
    return {
      ip: G_APP.ip,
      appt: G_APP.appt,
      appb: G_APP.appb,
      myuid: "0",
      list: [],
      pag: 0,
      zpag: 1
    };
  },
  onReady() {
    this.getlist(1);
  },
  methods: {
    opsoso() {
      uni.navigateTo({
        url: "../../pages/soso/soso"
      });
    },
    opmylb() {
      if (this.myuid > 0) {
        uni.navigateTo({
          url: "../user/ckx"
        });
      } else {
        uni.navigateTo({
          url: "../login/login"
        });
      }
    },
    oplbxx(id) {
      uni.navigateTo({
        url: "../libao/lb?id=" + id
      });
    },
    getlist(pd) {
      let thi = this;
      let npag = Number(thi.pag) + 1;
      thi.pag = npag;
      if (npag <= thi.zpag) {
        uni.request({
          url: G_APP.ip + "appapi.php?to=libao",
          method: "GET",
          dataType: "json",
          enableCache: true,
          //缓存
          defer: true,
          //控制当前请求是否延时至首屏内容渲染后发送
          data: {
            "list": "go",
            "pages": npag
          },
          success: (ret) => {
            if (ret.data.data) {
              uni.hideLoading();
              if (pd == 1) {
                thi.list = ret.data.data;
                thi.zpag = ret.data.pagenum;
                uni.stopPullDownRefresh();
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
  },
  onPullDownRefresh() {
    this.pag = 0;
    this.zpag = 1;
    this.getlist(1);
  },
  onShow() {
    let us = uni.getStorageSync("user");
    this.myuid = us.uid;
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "list",
    {
      onLoadmore: _cache[2] || (_cache[2] = ($event) => $options.getlist(2)),
      loadmoreoffset: "10"
    },
    [
      createElementVNode("header", {
        class: "hed",
        renderWhole: true
      }, [
        createElementVNode(
          "view",
          {
            class: "heds",
            renderWhole: true,
            style: normalizeStyle("height: " + ($data.appt + 55) + "px;")
          },
          [
            createElementVNode("u-text", { class: "hed_l" }),
            createElementVNode("u-text", { class: "hed_l" }),
            createElementVNode("u-text", { class: "hed_c" }, "礼包中心"),
            createElementVNode("u-text", {
              class: "hed_r",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.opsoso && $options.opsoso(...args))
            }, ""),
            createElementVNode("u-text", {
              class: "hed_r",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.opmylb && $options.opmylb(...args))
            }, "")
          ],
          4
          /* STYLE */
        )
      ]),
      $data.list ? (openBlock(true), createElementBlock(
        Fragment,
        { key: 0 },
        renderList($data.list, (item, index) => {
          return openBlock(), createElementBlock("cell", {
            class: "list",
            key: item.id,
            onClick: ($event) => $options.oplbxx(item.id)
          }, [
            createElementVNode("view", {
              class: "gm",
              renderWhole: true
            }, [
              createElementVNode("u-image", {
                class: "gm_i",
                src: $data.ip + item.lblogo
              }, null, 8, ["src"]),
              createElementVNode("view", {
                renderWhole: true,
                class: "gm_c"
              }, [
                createElementVNode(
                  "u-text",
                  { class: "gm_c_t" },
                  toDisplayString(item.gmname) + toDisplayString(item.lbname),
                  1
                  /* TEXT */
                ),
                createElementVNode(
                  "u-text",
                  { class: "gm_c_c" },
                  toDisplayString(item.lbjj),
                  1
                  /* TEXT */
                ),
                createElementVNode(
                  "u-text",
                  { class: "gm_c_b" },
                  "剩余：" + toDisplayString(item.lbsy) + "枚",
                  1
                  /* TEXT */
                )
              ]),
              createElementVNode("u-text", { class: "gm_r" }, "领取")
            ])
          ], 8, ["onClick"]);
        }),
        128
        /* KEYED_FRAGMENT */
      )) : createCommentVNode("v-if", true),
      $data.list == "" ? (openBlock(), createElementBlock("cell", {
        key: 1,
        class: "nodata"
      }, [
        createElementVNode("u-image", {
          class: "nodata_i",
          src: "/static/nodata.png"
        })
      ])) : createCommentVNode("v-if", true),
      createElementVNode("cell", { class: "list_b" })
    ],
    32
    /* HYDRATE_EVENTS */
  );
}
const tab3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/小熊秘宝/pages/index/tab3.nvue"]]);
export {
  tab3 as default
};
