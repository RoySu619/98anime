import { r as requireNativePlugin, a as resolveEasycom } from "../../uni-app.es.js";
import { _ as __easycom_1 } from "../../uni-popup.js";
import { resolveComponent, resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, normalizeStyle, createVNode, withCtx, Fragment, renderList, createBlock, toDisplayString, createCommentVNode } from "vue";
import { _ as _export_sfc, G as G_APP } from "../../ip.js";
const _style_0 = { "list": { "": { "flex": 1, "width": "750rpx" } }, "hed": { "": { "width": "750rpx", "height": 55, "position": "sticky" } }, "heds": { "": { "width": "750rpx", "height": 55, "paddingLeft": "30rpx", "paddingRight": "30rpx", "paddingBottom": "20rpx", "backgroundColor": "#ffda08", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "flex-end" } }, "hed_l": { "": { "width": "125rpx", "height": "75rpx", "lineHeight": "75rpx", "fontSize": "60rpx", "textAlign": "center", "fontWeight": "bold", "color": "rgba(0,0,0,0.8)", "fontFamily": "iconfont" } }, "hed_c": { "": { "width": "580rpx", "paddingLeft": "30rpx", "borderRadius": "37.5rpx", "textAlign": "left", "fontSize": "30rpx", "height": "75rpx", "color": "rgba(0,0,0,0.8)", "lineHeight": "75rpx", "fontFamily": "iconfont", "backgroundColor": "rgba(0,0,0,0.05)" } }, "hed_r": { "": { "width": "70rpx", "fontSize": "45rpx", "textAlign": "center", "height": "70rpx", "lineHeight": "70rpx", "color": "rgba(0,0,0,0.7)", "fontFamily": "iconfont", "backgroundColor": "rgba(0,0,0,0.05)", "borderRadius": "35rpx" } }, "lbt": { "": { "width": "750rpx", "height": "390rpx", "paddingTop": "30rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "borderRadius": "20rpx" } }, "lbtm": { "": { "width": "690rpx", "height": "360rpx" } }, "lbtm_i": { "": { "width": "690rpx", "height": "360rpx", "position": "relative", "backgroundColor": "#666666", "borderRadius": "20rpx" } }, "lbtm_img": { "": { "width": "690rpx", "height": "360rpx", "borderRadius": "20rpx", "opacity": 0.9 } }, "mue": { "": { "width": "750rpx", "height": "230rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "flex-start", "alignItems": "center" } }, "mue_li": { "": { "width": "187.5rpx", "height": "230rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "center" } }, "mue_li_i": { "": { "width": "90rpx", "height": "90rpx" } }, "mue_li_t": { "": { "width": "138rpx", "height": "50rpx", "lineHeight": "60rpx", "textAlign": "center", "fontSize": "24rpx", "fontWeight": "bold", "color": "rgba(0,0,0,0.8)" } }, "tit": { "": { "width": "750rpx", "height": "140rpx", "borderTopWidth": "16rpx", "borderTopStyle": "solid", "borderTopColor": "rgba(0,0,0,0.05)" } }, "tit_t": { "": { "width": "750rpx", "paddingLeft": "30rpx", "height": "100rpx", "lineHeight": "100rpx", "fontWeight": "bold", "borderBottomWidth": "0.5rpx", "borderBottomStyle": "solid", "borderBottomColor": "rgba(0,0,0,0.05)", "textAlign": "left", "fontSize": "30rpx", "color": "rgba(0,0,0,1)" } }, "cell": { "": { "width": "750rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx" } }, "gm": { "": { "width": "690rpx", "height": "160rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "flex-start" } }, "gm_i": { "": { "width": "130rpx", "height": "130rpx", "borderRadius": "20rpx" } }, "gm_c": { "": { "width": "450rpx", "paddingLeft": "20rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "flex-start" } }, "gm_c_t": { "": { "width": "330rpx", "height": "43rpx", "lines": 1, "lineHeight": "43rpx", "fontSize": "30rpx", "fontWeight": "bold", "paddingRight": "20rpx", "color": "rgba(0,0,0,0.8)" } }, "gm_c_c": { "": { "height": "43rpx", "lineHeight": "50rpx", "fontSize": "24rpx", "color": "rgba(0,0,0,0.5)" } }, "gm_c_b": { "": { "height": "43rpx", "lineHeight": "43rpx", "fontSize": "24rpx", "lines": 1, "color": "rgba(0,0,0,0.5)" } }, "gm_r": { "": { "marginTop": "30rpx", "width": "100rpx", "borderRadius": "15rpx", "height": "60rpx", "lineHeight": "60rpx", "textAlign": "center", "fontSize": "24rpx", "backgroundImage": "linear-gradient(to top,#ffc30c,#ffda08)" } }, "tkmain": { "": { "backgroundColor": "#1f2531", "width": "600rpx", "height": "520rpx", "borderRadius": "20rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "flex-start", "alignItems": "center" } }, "tkmain_t": { "": { "width": "600rpx", "height": "120rpx", "lineHeight": "120rpx", "color": "rgba(255,255,255,0.8)", "textAlign": "center", "fontSize": "30rpx" } }, "tkmain_c": { "": { "width": "550rpx", "height": "300rpx" } }, "tkmain_c_t": { "": { "width": "550rpx", "lineHeight": "40rpx", "fontSize": "25rpx", "textAlign": "left", "color": "rgba(255,255,255,0.9)" } }, "tkmain_c_t2": { "": { "width": "550rpx", "height": "40rpx", "textAlign": "center", "lineHeight": "40rpx", "fontSize": "26rpx", "color": "#33ffb4" } }, "tkmain_b": { "": { "width": "550rpx", "height": "100rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center", "borderTopWidth": "0.5rpx", "borderTopStyle": "solid", "borderTopColor": "rgba(255,255,255,0.1)" } }, "tkmain_b_l": { "": { "width": "275rpx", "height": "100rpx", "lineHeight": "100rpx", "fontSize": "30rpx", "color": "rgba(255,255,255,0.8)", "textAlign": "center", "borderRightWidth": "0.5rpx", "borderRightStyle": "solid", "borderRightColor": "rgba(225,255,255,0.1)" } }, "tkmain_b_r": { "": { "width": "275rpx", "height": "100rpx", "lineHeight": "100rpx", "fontSize": "30rpx", "color": "#33ffb4", "textAlign": "center" } }, "appupmain": { "": { "backgroundColor": "#1f2531", "width": "750rpx", "borderRadius": "20rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "flex-start", "alignItems": "center" } }, "appupmain_t": { "": { "width": "690rpx", "height": "120rpx", "lineHeight": "120rpx", "color": "rgba(255,255,255,0.8)", "textAlign": "center", "fontSize": "30rpx" } }, "appupmain_c": { "": { "width": "690rpx", "paddingBottom": "20rpx" } }, "appupmain_c_t": { "": { "width": "690rpx", "lineHeight": "40rpx", "fontSize": "28rpx", "textAlign": "left", "color": "rgba(255,255,255,0.9)" } }, "appupmain_b": { "": { "width": "690rpx", "height": "200rpx" } }, "appupmain_bx": { "": { "width": "690rpx", "height": "100rpx" } }, "appupmain_b_l": { "": { "width": "690rpx", "height": "80rpx", "lineHeight": "80rpx", "fontSize": "30rpx", "color": "rgba(255,0,138,1)", "textAlign": "center", "backgroundColor": "rgba(255,0,138,0.2)" } }, "appupmain_b_r": { "": { "width": "690rpx", "height": "100rpx", "lineHeight": "100rpx", "fontSize": "30rpx", "color": "rgba(255,255,255,0.5)", "textAlign": "center" } }, "appupmain_progress": { "": { "width": "690rpx", "height": "80rpx" } } };
const domModule = requireNativePlugin("dom");
const _sfc_main = {
  data() {
    return {
      ip: G_APP.ip,
      appsys: G_APP.appsys,
      appt: G_APP.appt,
      appb: G_APP.appb,
      apph: G_APP.apph,
      hedbg: "rgba(255,255,255,0)",
      tk_main: 0,
      //条款
      appup_main: 0,
      //APP 弹窗
      appup_tit: "有更新啦！",
      appup_zt: 0,
      appup_url: "",
      appdow_jd: 0,
      //下载进度
      appdow_fd: "",
      //下载的APP包
      lbt: [],
      hotlist: [],
      jplist: [],
      hylist: [],
      nelist: [],
      peg: 0,
      zpeg: 1
    };
  },
  onLoad() {
    domModule.addRule("fontFace", {
      "fontFamily": "iconfont",
      "src": "url('" + this.ip + "/ttf/iconfont.ttf')"
    });
  },
  onReady() {
    this.get();
  },
  methods: {
    opxf() {
      uni.navigateTo({
        url: "../../pages/gm/gmxf"
      });
    },
    ophd() {
      uni.navigateTo({
        url: "../../pages/gm/hd"
      });
    },
    opnews() {
      uni.navigateTo({
        url: "../../pages/gm/news"
      });
    },
    optopgm() {
      uni.navigateTo({
        url: "../../pages/gm/gmtop"
      });
    },
    opdow() {
      uni.navigateTo({
        url: "../../pages/user/dow"
      });
    },
    opgm(id) {
      uni.navigateTo({
        url: "../../pages/gm/gmxx?id=" + id
      });
    },
    opsoso() {
      uni.navigateTo({
        url: "../../pages/soso/soso"
      });
    },
    get() {
      let thi = this;
      uni.request({
        url: G_APP.ip + "appapi.php?topgm=go",
        method: "GET",
        dataType: "json",
        enableCache: true,
        //缓存
        defer: true,
        //控制当前请求是否延时至首屏内容渲染后发送
        data: {
          sylbt: "go"
        },
        success: (ret) => {
          uni.stopPullDownRefresh();
          if (ret.data.lbt) {
            thi.lbt = ret.data.lbt;
          }
          if (ret.data.hotgm) {
            thi.hotlist = ret.data.hotgm;
          }
          if (ret.data.jp) {
            thi.jplist = ret.data.jp;
          }
          if (ret.data.hy) {
            thi.hylist = ret.data.hy;
          }
          if (ret.data.ne) {
            thi.nelist = ret.data.ne;
          }
        }
      });
    },
    appup_get() {
      let appupshow = uni.getStorageSync("appup");
      if (appupshow) {
        if (appupshow[0].upzt == "1") {
          this.appup_main = 1;
          this.appup_url = appupshow[0].url;
          setTimeout(() => {
            this.$refs.appupmain.open();
          }, 2e3);
        }
      }
    },
    appup_goapp() {
      plus.runtime.install(this.appdow_fd, { force: true }, {}, function(error) {
        uni.showToast({ icon: "none", title: "安装失败", mask: false, duration: 1500 });
      });
    },
    appup_yes() {
      let thi = this;
      thi.appup_tit = "新版本正在下载";
      thi.appup_zt = 1;
      const downloadTask = uni.downloadFile({
        url: thi.appup_url,
        filePath: "appup",
        success: (res) => {
          if (res.statusCode === 200) {
            thi.appdow_fd = res.tempFilePath;
            plus.runtime.install(res.tempFilePath, { force: true }, {}, function(error) {
              uni.showToast({ icon: "none", title: "安装失败", mask: false, duration: 1500 });
            });
          }
        }
      });
      downloadTask.onProgressUpdate((ress) => {
        if (ress.progress > 0) {
          thi.appdow_jd = ress.progress;
        }
      });
    },
    appup_no() {
      this.$refs.appupmain.close();
      uni.showTabBar();
    },
    tk_open() {
      this.$refs.tkmain.open();
    },
    tk_yes() {
      this.$refs.tkmain.close();
      uni.setStorage({
        key: "tkyes",
        data: "1"
      });
      uni.showTabBar();
      this.appup_get();
    },
    tk_no() {
      uni.setStorage({
        key: "tkyes",
        data: "0"
      });
      if (G_APP.appsys == "apple") {
        plus.ios.import("UIApplication").sharedApplication().performSelector("exit");
      } else {
        plus.runtime.quit();
      }
    }
  },
  onPullDownRefresh() {
    this.get();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_swiper_item = resolveComponent("swiper-item");
  const _component_swiper = resolveComponent("swiper");
  const _component_uni_popup = resolveEasycom(resolveDynamicComponent("uni-popup"), __easycom_1);
  const _component_progress = resolveComponent("progress");
  return openBlock(), createElementBlock("view", null, [
    createElementVNode("list", {
      class: "list",
      renderWhole: true,
      showScrollbar: "false",
      bounce: "false"
    }, [
      createElementVNode(
        "header",
        {
          class: "hed",
          style: normalizeStyle("height: " + ($data.appt + 55) + "px;"),
          renderWhole: true
        },
        [
          createElementVNode(
            "view",
            {
              renderWhole: true,
              class: "heds",
              style: normalizeStyle("height: " + ($data.appt + 55) + "px;")
            },
            [
              createElementVNode("u-text", {
                class: "hed_c",
                onClick: _cache[0] || (_cache[0] = (...args) => $options.opsoso && $options.opsoso(...args))
              }, " 搜索你想玩的游戏"),
              createElementVNode("u-text", {
                class: "hed_r",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.opdow && $options.opdow(...args))
              }, "")
            ],
            4
            /* STYLE */
          )
        ],
        4
        /* STYLE */
      ),
      createElementVNode("cell", { class: "lbt" }, [
        createVNode(_component_swiper, {
          class: "lbtm",
          circular: "true",
          "render-whole": true,
          "indicator-active-color": "#ffda08",
          "indicator-color": "rgba(255,255,255,0.5)",
          "indicator-dots": "true",
          autoplay: "true"
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($data.lbt, (item, index) => {
                return openBlock(), createBlock(_component_swiper_item, {
                  key: item.id,
                  onClick: ($event) => $options.opgm(item.id),
                  "render-whole": true,
                  class: "lbtm_i"
                }, {
                  default: withCtx(() => [
                    createElementVNode("u-image", {
                      mode: "aspectFill",
                      class: "lbtm_img",
                      src: $data.ip + item.gmapplbt
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createElementVNode("cell", { class: "mue" }, [
        createElementVNode("view", {
          renderWhole: true,
          class: "mue_li",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.optopgm && $options.optopgm(...args))
        }, [
          createElementVNode("u-image", {
            class: "mue_li_i",
            src: "/static/01.png"
          }),
          createElementVNode("u-text", { class: "mue_li_t" }, "游戏榜单")
        ]),
        createElementVNode("view", {
          renderWhole: true,
          class: "mue_li",
          onClick: _cache[3] || (_cache[3] = (...args) => $options.opnews && $options.opnews(...args))
        }, [
          createElementVNode("u-image", {
            class: "mue_li_i",
            src: "/static/02.png"
          }),
          createElementVNode("u-text", { class: "mue_li_t" }, "游戏资讯")
        ]),
        createElementVNode("view", {
          renderWhole: true,
          class: "mue_li",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.opxf && $options.opxf(...args))
        }, [
          createElementVNode("u-image", {
            class: "mue_li_i",
            src: "/static/03.png"
          }),
          createElementVNode("u-text", { class: "mue_li_t" }, "站长推荐")
        ]),
        createElementVNode("view", {
          renderWhole: true,
          class: "mue_li",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.ophd && $options.ophd(...args))
        }, [
          createElementVNode("u-image", {
            class: "mue_li_i",
            src: "/static/04.png"
          }),
          createElementVNode("u-text", { class: "mue_li_t" }, "游戏活动")
        ])
      ]),
      createElementVNode("cell", { class: "tit" }, [
        createElementVNode("u-text", { class: "tit_t" }, "热门游戏推荐")
      ]),
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($data.hotlist, (item, index) => {
          return openBlock(), createElementBlock("cell", {
            class: "cell",
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
                  "类型：" + toDisplayString(item.gmbq),
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
      )),
      createElementVNode("cell", { class: "tit" }, [
        createElementVNode("u-text", { class: "tit_t" }, "精品游戏推荐")
      ]),
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($data.jplist, (item, index) => {
          return openBlock(), createElementBlock("cell", {
            class: "cell",
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
                  "类型：" + toDisplayString(item.gmbq),
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
      )),
      createElementVNode("cell", { class: "tit" }, [
        createElementVNode("u-text", { class: "tit_t" }, "最受欢迎游戏")
      ]),
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($data.hylist, (item, index) => {
          return openBlock(), createElementBlock("cell", {
            class: "cell",
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
                  "类型：" + toDisplayString(item.gmbq),
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
      )),
      createElementVNode("cell", { class: "tit" }, [
        createElementVNode("u-text", { class: "tit_t" }, "最新上架游戏")
      ]),
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($data.nelist, (item, index) => {
          return openBlock(), createElementBlock("cell", {
            class: "cell",
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
                  "类型：" + toDisplayString(item.gmbq),
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
      ))
    ]),
    $data.tk_main == 1 ? (openBlock(), createBlock(
      _component_uni_popup,
      {
        key: 0,
        type: "center",
        ref: "tkmain",
        "is-mask-click": false,
        "mask-click": false,
        "render-whole": true
      },
      {
        default: withCtx(() => [
          createElementVNode("view", {
            renderWhole: true,
            class: "tkmain"
          }, [
            createElementVNode("u-text", { class: "tkmain_t" }, "服务协议和隐私政策"),
            createElementVNode("view", {
              class: "tkmain_c",
              renderWhole: true
            }, [
              createElementVNode("u-text", { class: "tkmain_c_t" }, "请你务必审慎阅读、充分理解“服务协议”和“隐私政策”各条款，包括但不限于：为了更好的向你提供服务，我们需要收集你的设备标识、操作日志等信息用于分析、优化应用性能。"),
              createElementVNode("u-text", {
                class: "tkmain_c_t2",
                onClick: _cache[6] || (_cache[6] = ($event) => _ctx.opllq(1))
              }, "《 点击阅读服务协议详细信息 》"),
              createElementVNode("u-text", {
                class: "tkmain_c_t2",
                onClick: _cache[7] || (_cache[7] = ($event) => _ctx.opllq(2))
              }, "《 点击阅读隐私政策详细信息 》"),
              createElementVNode("u-text", { class: "tkmain_c_t" }, "如果你同意，请点击下面按钮接受我们的服务。")
            ]),
            createElementVNode("view", {
              class: "tkmain_b",
              renderWhole: true
            }, [
              createElementVNode("u-text", {
                class: "tkmain_b_l",
                onClick: _cache[8] || (_cache[8] = (...args) => $options.tk_no && $options.tk_no(...args))
              }, "不接受"),
              createElementVNode("u-text", {
                class: "tkmain_b_r",
                onClick: _cache[9] || (_cache[9] = (...args) => $options.tk_yes && $options.tk_yes(...args))
              }, "同意并接受")
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      },
      512
      /* NEED_PATCH */
    )) : createCommentVNode("v-if", true),
    $data.appup_main == 1 ? (openBlock(), createBlock(
      _component_uni_popup,
      {
        key: 1,
        type: "bottom",
        ref: "appupmain",
        "is-mask-click": false,
        "mask-click": false,
        "render-whole": true
      },
      {
        default: withCtx(() => [
          createElementVNode(
            "view",
            {
              renderWhole: true,
              class: "appupmain",
              style: normalizeStyle("padding-bottom:" + $data.appb + "px;")
            },
            [
              createElementVNode(
                "u-text",
                { class: "appupmain_t" },
                toDisplayString($data.appup_tit),
                1
                /* TEXT */
              ),
              $data.appup_zt == 0 ? (openBlock(), createElementBlock("view", {
                key: 0,
                class: "appupmain_c",
                renderWhole: true
              }, [
                createElementVNode("u-text", { class: "appupmain_c_t" }, "优化体验，修复已知问题，赶快点击下载吧！"),
                createElementVNode("u-text", { class: "appupmain_c_t" }, "温馨提示！请保持新版本，旧版本可能会影响您的体验和部分功能无法使用的问题。")
              ])) : createCommentVNode("v-if", true),
              $data.appup_zt == 1 ? (openBlock(), createElementBlock("u-text", {
                key: 1,
                class: "appupmain_t"
              }, "已下载")) : createCommentVNode("v-if", true),
              $data.appup_zt == 1 ? (openBlock(), createElementBlock("view", {
                key: 2,
                class: "appupmain_progress"
              }, [
                createVNode(_component_progress, {
                  percent: $data.appdow_jd,
                  "stroke-width": "20",
                  "active-mode": "forwards",
                  activeColor: "#ff008a",
                  backgroundColor: "#2d3648"
                }, null, 8, ["percent"])
              ])) : createCommentVNode("v-if", true),
              $data.appup_zt == 1 && $data.appdow_fd != "" ? (openBlock(), createElementBlock("view", {
                key: 3,
                class: "appupmain_bx",
                renderWhole: true
              }, [
                createElementVNode("u-text", {
                  class: "appupmain_b_l",
                  onClick: _cache[10] || (_cache[10] = (...args) => $options.appup_goapp && $options.appup_goapp(...args))
                }, "重新安装")
              ])) : createCommentVNode("v-if", true),
              $data.appup_zt == 0 ? (openBlock(), createElementBlock("view", {
                key: 4,
                class: "appupmain_b",
                renderWhole: true
              }, [
                createElementVNode("u-text", {
                  class: "appupmain_b_l",
                  onClick: _cache[11] || (_cache[11] = (...args) => $options.appup_yes && $options.appup_yes(...args))
                }, "立即升级"),
                createElementVNode("u-text", {
                  class: "appupmain_b_r",
                  onClick: _cache[12] || (_cache[12] = (...args) => $options.appup_no && $options.appup_no(...args))
                }, "等待下次再升级")
              ])) : createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          )
        ]),
        _: 1
        /* STABLE */
      },
      512
      /* NEED_PATCH */
    )) : createCommentVNode("v-if", true)
  ]);
}
const tab1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/小熊秘宝/pages/index/tab1.nvue"]]);
export {
  tab1 as default
};
