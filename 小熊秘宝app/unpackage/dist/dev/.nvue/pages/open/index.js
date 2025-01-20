import { _ as _export_sfc, G as G_APP } from "../../ip.js";
import { openBlock, createElementBlock, createElementVNode, toDisplayString } from "vue";
const _style_0 = { "m": { "": { "width": "750rpx", "flex": 1, "position": "relative" } }, "tm": { "": { "position": "absolute", "right": "20rpx", "top": "100rpx", "width": "150rpx", "height": "60rpx", "lineHeight": "60rpx", "color": "#ffffff", "fontSize": "26rpx", "backgroundColor": "rgba(0,0,0,0.5)", "textAlign": "center", "borderRadius": "30rpx", "zIndex": 9999 } }, "img": { "": { "position": "absolute", "zIndex": 1, "flex": 1 } } };
const _sfc_main = {
  data() {
    return {
      img: "",
      imgtp: "",
      url: "",
      num: 5,
      timer: ""
    };
  },
  onReady() {
    this.get();
    let optmdeltm = setTimeout(() => {
      uni.navigateBack();
      clearTimeout(optmdeltm);
    }, 8e3);
  },
  methods: {
    clwin() {
      clearInterval(this.timer);
      uni.navigateBack();
    },
    gototm() {
      let thi = this;
      thi.timer = setInterval(() => {
        if (thi.num > 0) {
          thi.num = thi.num - 1;
        } else {
          uni.navigateBack();
          clearInterval(this.timer);
        }
      }, 1e3);
    },
    opurl() {
      uni.navigateTo({
        url: "../../pages/gm/gmxx?id=" + this.url
      });
    },
    get() {
      let thi = this;
      uni.request({
        url: G_APP.ip + "appapi.php?to=appqd",
        method: "GET",
        dataType: "json",
        enableCache: true,
        //缓存
        defer: true,
        //控制当前请求是否延时至首屏内容渲染后发送
        data: {
          "syspt": "go"
        },
        success: (ret) => {
          if (ret.data) {
            thi.img = G_APP.ip + ret.data.imgurl;
            thi.url = ret.data.urls;
            thi.imgtp = ret.data.imgtp;
            const qdtshowtm = setTimeout(() => {
              thi.gototm();
              plus.navigator.closeSplashscreen();
              clearTimeout(qdtshowtm);
            }, 500);
          }
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("list", null, [
    createElementVNode("cell", { class: "m" }, [
      createElementVNode("u-image", {
        class: "img",
        src: $data.img,
        onClick: _cache[0] || (_cache[0] = (...args) => $options.opurl && $options.opurl(...args)),
        mode: "aspectFill"
      }, null, 8, ["src"]),
      createElementVNode(
        "u-text",
        {
          class: "tm",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.clwin && $options.clwin(...args))
        },
        toDisplayString($data.num) + " 跳过",
        1
        /* TEXT */
      )
    ])
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/小熊秘宝/pages/open/index.nvue"]]);
export {
  index as default
};
