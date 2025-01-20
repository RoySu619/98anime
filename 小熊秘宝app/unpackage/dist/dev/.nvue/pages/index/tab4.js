import { _ as _export_sfc, G as G_APP } from "../../ip.js";
import { openBlock, createElementBlock, createElementVNode, toDisplayString } from "vue";
const _style_0 = { "nodata": { "": { "width": "750rpx", "height": "600rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "center" } }, "nodata_i": { "": { "width": "400rpx", "height": "300rpx" } }, "top": { "": { "width": "750rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "paddingTop": "180rpx", "paddingBottom": "50rpx", "backgroundColor": "#ffda08", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center" } }, "top_l": { "": { "width": "120rpx", "height": "120rpx", "backgroundColor": "#ffffff", "paddingTop": "5rpx", "paddingRight": "5rpx", "paddingBottom": "5rpx", "paddingLeft": "5rpx", "borderRadius": "70rpx" } }, "top_c": { "": { "width": "400rpx", "height": "120rpx" } }, "top_c_t": { "": { "width": "400rpx", "height": "60rpx", "lineHeight": "60rpx", "textAlign": "left", "fontSize": "30rpx" } }, "top_c_b": { "": { "width": "400rpx", "height": "60rpx", "textAlign": "left", "lineHeight": "60rpx", "fontSize": "26rpx", "color": "rgba(0,0,0,0.5)" } }, "top_r": { "": { "textAlign": "center", "fontSize": "50rpx", "width": "100rpx", "lineHeight": "100rpx", "height": "120rpx", "fontFamily": "iconfont" } }, "li": { "": { "width": "750rpx", "paddingTop": "15rpx", "height": "130rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "borderBottomWidth": "0.5rpx", "borderBottomStyle": "solid", "borderBottomColor": "rgba(0,0,0,0.05)" } }, "lis": { "": { "width": "690rpx", "height": "100rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center" } }, "lis_l": { "": { "width": "60rpx", "height": "60rpx" } }, "lis_c": { "": { "width": "380rpx", "height": "100rpx", "lineHeight": "100rpx", "textAlign": "left", "fontSize": "32rpx", "fontWeight": "bold" } }, "lis_r": { "": { "width": "220rpx", "textAlign": "right", "height": "100rpx", "lineHeight": "100rpx", "fontSize": "24rpx", "fontFamily": "iconfont", "color": "rgba(0,0,0,0.5)" } }, "tis": { "": { "width": "750rpx", "height": "150rpx" } }, "tis_t": { "": { "width": "750rpx", "paddingTop": "30rpx", "textAlign": "center", "height": "150rpx", "lineHeight": "35rpx", "fontSize": "24rpx", "color": "rgba(0,0,0,0.5)" } } };
const _sfc_main = {
  data() {
    return {
      ip: G_APP.ip,
      appv: G_APP.appVs,
      appt: G_APP.appt,
      appb: G_APP.appb,
      ulogo: "../../static/uslogo.png",
      uid: "0000",
      unick: "登陆领取专属礼包"
    };
  },
  onReady() {
    this.get();
  },
  onShow() {
    uni.$off("login");
  },
  onHide() {
    let thi = this;
    uni.$on("login", function(data) {
      thi.get();
    });
  },
  methods: {
    opllq(pd) {
      if (pd == 1) {
        uni.navigateTo({
          url: "../../pages/llq/index?url=yszc&tit=隐私政策&pd=1"
        });
      }
      if (pd == 2) {
        uni.navigateTo({
          url: "../../pages/llq/index?url=fwxy&tit=服务协议&pd=1"
        });
      }
    },
    opdow() {
      uni.navigateTo({
        url: "../user/dow"
      });
    },
    opmsg() {
      if (this.uid > 0) {
        uni.navigateTo({
          url: "../user/msg"
        });
      } else {
        uni.navigateTo({
          url: "../login/login"
        });
      }
    },
    oplb() {
      if (this.uid > 0) {
        uni.navigateTo({
          url: "../user/ckx"
        });
      } else {
        uni.navigateTo({
          url: "../login/login"
        });
      }
    },
    opkf() {
      if (this.uid > 0) {
        uni.navigateTo({
          url: "../user/kf"
        });
      } else {
        uni.navigateTo({
          url: "../login/login"
        });
      }
    },
    opset() {
      if (this.uid > 0) {
        uni.navigateTo({
          url: "../user/set"
        });
      } else {
        uni.navigateTo({
          url: "../login/login"
        });
      }
    },
    get() {
      let thi = this;
      uni.request({
        url: G_APP.ip + "appapi.php?to=user",
        method: "GET",
        dataType: "json",
        enableCache: true,
        //缓存
        defer: true,
        //控制当前请求是否延时至首屏内容渲染后发送
        data: {
          "myusapp": "go"
        },
        success: (ret) => {
          uni.stopPullDownRefresh();
          if (ret.data.msg == "yes") {
            let data = {
              "uid": ret.data.id,
              "unick": ret.data.unick,
              "ulogo": thi.ip + ret.data.ulogo
            };
            uni.setStorageSync("user", data);
            if (ret.data.ulogo) {
              thi.ulogo = thi.ip + ret.data.ulogo;
            }
            if (ret.data.unick) {
              thi.unick = ret.data.unick;
            }
            if (ret.data.id) {
              thi.uid = ret.data.id;
            }
          } else {
            let data = {
              "uid": "0",
              "unick": "",
              "ulogo": "../../static/uslogo.png"
            };
            uni.setStorageSync("user", data);
            thi.ulogo = "../../static/uslogo.png";
            thi.unick = "登陆领取专属礼包";
            thi.uid = "0000";
          }
        }
      });
    }
  },
  onPullDownRefresh() {
    this.get();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("list", null, [
    createElementVNode("cell", {
      class: "top",
      renderWhole: true
    }, [
      createElementVNode("u-image", {
        class: "top_l",
        src: $data.ulogo,
        onClick: _cache[0] || (_cache[0] = (...args) => $options.opset && $options.opset(...args))
      }, null, 8, ["src"]),
      createElementVNode("view", {
        class: "top_c",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.opset && $options.opset(...args)),
        renderWhole: true
      }, [
        createElementVNode(
          "u-text",
          { class: "top_c_t" },
          toDisplayString($data.unick),
          1
          /* TEXT */
        ),
        createElementVNode(
          "u-text",
          { class: "top_c_b" },
          "ID: " + toDisplayString($data.uid),
          1
          /* TEXT */
        )
      ]),
      createElementVNode("u-text", {
        class: "top_r",
        onClick: _cache[2] || (_cache[2] = (...args) => $options.opset && $options.opset(...args))
      }, "")
    ]),
    createElementVNode("cell", {
      class: "li",
      onClick: _cache[3] || (_cache[3] = (...args) => $options.opmsg && $options.opmsg(...args))
    }, [
      createElementVNode("view", {
        class: "lis",
        renderWhole: true
      }, [
        createElementVNode("u-image", {
          class: "lis_l",
          src: "/static/us_msg.png"
        }),
        createElementVNode("u-text", { class: "lis_c" }, "我的消息"),
        createElementVNode("u-text", { class: "lis_r" }, "官方公告活动 ")
      ])
    ]),
    createElementVNode("cell", {
      class: "li",
      onClick: _cache[4] || (_cache[4] = (...args) => $options.oplb && $options.oplb(...args))
    }, [
      createElementVNode("view", {
        class: "lis",
        renderWhole: true
      }, [
        createElementVNode("u-image", {
          class: "lis_l",
          src: "/static/us_libao.png"
        }),
        createElementVNode("u-text", { class: "lis_c" }, "我的礼包"),
        createElementVNode("u-text", { class: "lis_r" }, "领取礼包记录 ")
      ])
    ]),
    createElementVNode("cell", {
      class: "li",
      onClick: _cache[5] || (_cache[5] = (...args) => $options.opdow && $options.opdow(...args))
    }, [
      createElementVNode("view", {
        class: "lis",
        renderWhole: true
      }, [
        createElementVNode("u-image", {
          class: "lis_l",
          src: "/static/us_dow.png"
        }),
        createElementVNode("u-text", { class: "lis_c" }, "下载管理"),
        createElementVNode("u-text", { class: "lis_r" }, "游戏安装包管理 ")
      ])
    ]),
    createElementVNode("cell", {
      class: "li",
      onClick: _cache[6] || (_cache[6] = (...args) => $options.opkf && $options.opkf(...args))
    }, [
      createElementVNode("view", {
        class: "lis",
        renderWhole: true
      }, [
        createElementVNode("u-image", {
          class: "lis_l",
          src: "/static/us_kf.png"
        }),
        createElementVNode("u-text", { class: "lis_c" }, "客服中心"),
        createElementVNode("u-text", { class: "lis_r" }, "官方唯一客服 ")
      ])
    ]),
    createElementVNode("cell", {
      class: "li",
      onClick: _cache[7] || (_cache[7] = ($event) => $options.opllq(1))
    }, [
      createElementVNode("view", {
        class: "lis",
        renderWhole: true
      }, [
        createElementVNode("u-image", {
          class: "lis_l",
          src: "/static/us_yhxy.png"
        }),
        createElementVNode("u-text", { class: "lis_c" }, "隐私政策"),
        createElementVNode("u-text", { class: "lis_r" }, "")
      ])
    ]),
    createElementVNode("cell", {
      class: "li",
      onClick: _cache[8] || (_cache[8] = ($event) => $options.opllq(2))
    }, [
      createElementVNode("view", {
        class: "lis",
        renderWhole: true
      }, [
        createElementVNode("u-image", {
          class: "lis_l",
          src: "/static/us_fwxy.png"
        }),
        createElementVNode("u-text", { class: "lis_c" }, "服务协议"),
        createElementVNode("u-text", { class: "lis_r" }, "")
      ])
    ]),
    createElementVNode("cell", { class: "tis" }, [
      createElementVNode(
        "u-text",
        { class: "tis_t" },
        "海口龙华茂绅优选贸易商行版权所有\n当前APP版本：v" + toDisplayString($data.appv),
        1
        /* TEXT */
      )
    ])
  ]);
}
const tab4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/小熊秘宝/pages/index/tab4.nvue"]]);
export {
  tab4 as default
};
