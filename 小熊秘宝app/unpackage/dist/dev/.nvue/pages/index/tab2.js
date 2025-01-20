import { r as requireNativePlugin } from "../../uni-app.es.js";
import { _ as _export_sfc, G as G_APP } from "../../ip.js";
import { openBlock, createElementBlock, createElementVNode, normalizeStyle, normalizeClass, Fragment, renderList, toDisplayString, createCommentVNode } from "vue";
const _style_0 = { "nodata": { "": { "width": "750rpx", "height": "600rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "center" } }, "nodata_i": { "": { "width": "400rpx", "height": "300rpx" } }, "hed": { "": { "width": "750rpx", "position": "sticky" } }, "heds": { "": { "width": "750rpx", "paddingRight": "30rpx", "backgroundColor": "#ffda08", "paddingBottom": "20rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "flex-end" } }, "hed_l": { "": { "width": "70rpx", "height": "70rpx", "lineHeight": "70rpx", "fontSize": "28rpx" } }, "hed_c": { "": { "width": "250rpx", "borderRadius": "50rpx", "textAlign": "center", "fontSize": "35rpx", "fontWeight": "bold", "height": "75rpx", "lineHeight": "75rpx" } }, "hed_r": { "": { "width": "70rpx", "fontSize": "45rpx", "textAlign": "center", "height": "70rpx", "lineHeight": "70rpx", "color": "rgba(0,0,0,0.7)", "fontFamily": "iconfont", "backgroundColor": "rgba(0,0,0,0.05)", "borderRadius": "37.5rpx" } }, "tp": { "": { "width": "750rpx", "paddingTop": "30rpx", "paddingLeft": "30rpx", "flexDirection": "row", "flexWrap": "wrap", "justifyContent": "flex-start", "alignItems": "flex-start", "backgroundColor": "#f9f9f9" } }, "tp_li": { "": { "width": "156.5rpx", "marginRight": "20rpx", "marginBottom": "30rpx", "height": "60rpx", "lineHeight": "60rpx", "textAlign": "center", "fontSize": "26rpx", "borderRadius": "10rpx", "backgroundColor": "rgba(255,255,255,1)" } }, "tp_li_cur": { "": { "backgroundColor": "#ffda08" } }, "list": { "": { "width": "750rpx", "paddingTop": "30rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx" } }, "list_b": { "": { "width": "750rpx", "height": "30rpx" } }, "gm": { "": { "width": "690rpx", "height": "130rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center" } }, "gm_i": { "": { "width": "130rpx", "height": "130rpx", "borderRadius": "20rpx" } }, "gm_c": { "": { "width": "450rpx", "paddingLeft": "20rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "flex-start" } }, "gm_c_t": { "": { "width": "330rpx", "height": "43rpx", "lines": 1, "lineHeight": "43rpx", "fontSize": "30rpx", "fontWeight": "bold", "paddingRight": "20rpx", "color": "rgba(0,0,0,0.8)" } }, "gm_c_c": { "": { "height": "43rpx", "lineHeight": "50rpx", "fontSize": "24rpx", "color": "rgba(0,0,0,0.5)" } }, "gm_c_b": { "": { "lines": 1, "height": "43rpx", "lineHeight": "43rpx", "fontSize": "24rpx", "color": "rgba(0,0,0,0.5)" } }, "gm_r": { "": { "marginTop": "30rpx", "width": "100rpx", "borderRadius": "15rpx", "height": "60rpx", "lineHeight": "60rpx", "textAlign": "center", "fontSize": "24rpx", "backgroundImage": "linear-gradient(to top,#ffc30c,#ffda08)" } } };
const domModule = requireNativePlugin("dom");
const _sfc_main = {
  data() {
    return {
      ip: G_APP.ip,
      appt: G_APP.appt,
      appb: G_APP.appb,
      istpid: 999999999,
      bqlist: [],
      istpname: "",
      gmlist: [],
      pag: 0,
      zpag: 1
    };
  },
  onPullDownRefresh() {
    this.pag = 0;
    this.zpag = 1;
    this.getgmlist(1);
  },
  onLoad() {
    domModule.addRule("fontFace", {
      "fontFamily": "iconfont",
      "src": "url('http://www.268yx.cn/ttf/iconfontd.ttf')"
    });
  },
  onReady() {
    this.getbq();
    this.getgmlist(1);
  },
  methods: {
    opgm(id) {
      uni.navigateTo({
        url: "../../pages/gm/gmxx?id=" + id
      });
    },
    setbq(name, id) {
      uni.showLoading({
        title: "加载中"
      });
      this.istpname = name;
      this.istpid = id;
      this.zpag = 1;
      this.pag = 0;
      this.getgmlist(1);
    },
    getgmlist(pd) {
      let thi = this;
      let npag = Number(thi.pag) + 1;
      thi.pag = npag;
      if (npag <= thi.zpag) {
        uni.request({
          url: G_APP.ip + "appapi.php?to=game",
          method: "GET",
          dataType: "json",
          enableCache: true,
          //缓存
          defer: true,
          //控制当前请求是否延时至首屏内容渲染后发送
          data: {
            "gmlist": "go",
            "type": thi.istpname,
            "gmtp": thi.istpid,
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
    },
    getbq() {
      let thi = this;
      uni.request({
        url: G_APP.ip + "appapi.php?to=game&op=game_bq",
        method: "GET",
        dataType: "json",
        enableCache: true,
        //缓存
        defer: true,
        //控制当前请求是否延时至首屏内容渲染后发送
        data: {
          "game_bq": "go"
        },
        success: (ret) => {
          if (ret.data.data) {
            thi.bqlist = ret.data.data;
          }
        }
      });
    },
    opdow() {
      uni.navigateTo({
        url: "../../pages/user/dow"
      });
    },
    opgg() {
      uni.navigateTo({
        url: "../../pages/user/msg"
      });
    },
    opsoso() {
      uni.navigateTo({
        url: "../../pages/soso/soso"
      });
    },
    settab(id) {
      if (id != 2) {
        uni.switchTab({
          url: "/pages/index/tab" + id,
          success: function(e) {
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
      onLoadmore: _cache[3] || (_cache[3] = ($event) => $options.getgmlist(2)),
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
            createElementVNode("u-text", { class: "hed_c" }, "软件中心"),
            createElementVNode("u-text", {
              class: "hed_r",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.opsoso && $options.opsoso(...args))
            }, ""),
            createElementVNode("u-text", {
              class: "hed_r",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.opdow && $options.opdow(...args))
            }, "")
          ],
          4
          /* STYLE */
        )
      ]),
      createElementVNode("cell", {
        renderWhole: true,
        class: "tp",
        showScrollbar: "true"
      }, [
        createElementVNode(
          "u-text",
          {
            class: normalizeClass(["tp_li", { "tp_li_cur": $data.istpid == 999999999 }]),
            onClick: _cache[2] || (_cache[2] = ($event) => $options.setbq(1, 999999999))
          },
          "全部",
          2
          /* CLASS */
        ),
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($data.bqlist, (item, index) => {
            return openBlock(), createElementBlock("u-text", {
              class: normalizeClass(["tp_li", { "tp_li_cur": $data.istpid == item.id }]),
              key: item.id,
              onClick: ($event) => $options.setbq(item.bqname, item.id)
            }, toDisplayString(item.bqname), 11, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      $data.gmlist ? (openBlock(true), createElementBlock(
        Fragment,
        { key: 0 },
        renderList($data.gmlist, (item, index) => {
          return openBlock(), createElementBlock("cell", {
            class: "list",
            key: item.id,
            onClick: ($event) => $options.opgm(item.id)
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
                  "类型： " + toDisplayString(item.gmbq),
                  1
                  /* TEXT */
                ),
                createElementVNode(
                  "u-text",
                  { class: "gm_c_b" },
                  toDisplayString(item.gmjj),
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
      ])) : createCommentVNode("v-if", true),
      createElementVNode("cell", {
        class: "list_b",
        renderWhole: true
      })
    ],
    32
    /* HYDRATE_EVENTS */
  );
}
const tab2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/小熊秘宝/pages/index/tab2.nvue"]]);
export {
  tab2 as default
};
