import { _ as _export_sfc, G as G_APP } from "../../ip.js";
import { openBlock, createElementBlock, createElementVNode, normalizeStyle, Fragment, renderList, toDisplayString, createCommentVNode } from "vue";
const _style_0 = { "list": { "": { "width": "750rpx", "paddingTop": "20rpx" } }, "topsoso": { "": { "width": "750rpx", "height": "100rpx", "paddingBottom": "15rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "flex-start", "alignItems": "flex-end" } }, "fh": { "": { "width": "110rpx", "height": "80rpx", "lineHeight": "80rpx", "fontFamily": "iconfont", "fontSize": "40rpx", "fontWeight": "300", "textAlign": "center", "paddingRight": "20rpx" } }, "soinput": { "": { "fontFamily": "iconfont", "backgroundColor": "rgba(0,0,0,0.05)", "width": "600rpx", "paddingLeft": "30rpx", "height": "80rpx", "lineHeight": "80rpx", "borderRadius": "40rpx", "fontSize": "28rpx" } }, "cell": { "": { "width": "750rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx" } }, "gm": { "": { "width": "690rpx", "height": "160rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "flex-start" } }, "gm_i": { "": { "width": "130rpx", "height": "130rpx", "borderRadius": "20rpx" } }, "gm_c": { "": { "width": "450rpx", "paddingLeft": "20rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "flex-start" } }, "gm_c_t": { "": { "width": "330rpx", "height": "43rpx", "lines": 1, "lineHeight": "43rpx", "fontSize": "30rpx", "fontWeight": "bold", "paddingRight": "20rpx", "color": "rgba(0,0,0,0.8)" } }, "gm_c_c": { "": { "height": "43rpx", "lineHeight": "50rpx", "fontSize": "24rpx", "color": "rgba(0,0,0,0.5)" } }, "gm_c_b": { "": { "height": "43rpx", "lineHeight": "43rpx", "fontSize": "24rpx", "lines": 1, "color": "rgba(0,0,0,0.5)" } }, "gm_r": { "": { "marginTop": "30rpx", "width": "100rpx", "borderRadius": "15rpx", "height": "60rpx", "lineHeight": "60rpx", "textAlign": "center", "fontSize": "24rpx", "backgroundImage": "linear-gradient(to top,#ffc30c,#ffda08)" } } };
const _sfc_main = {
  data() {
    return {
      ip: G_APP.ip,
      appt: G_APP.appt,
      sozt: 0,
      //控制显示隐藏
      sonr: "",
      list: []
    };
  },
  methods: {
    clososo() {
      uni.hideKeyboard();
      uni.navigateBack();
    },
    iswc(e) {
      if (e.detail.value.length == 0) {
        this.sonr = "";
        this.sozt = 0;
        uni.hideKeyboard();
      } else {
        uni.hideKeyboard();
        this.sozt = 0;
        this.sosonr(1);
      }
    },
    isval(e) {
      if (e.detail.value.length == 0) {
        this.sonr = "";
        this.sozt = 0;
        uni.hideKeyboard();
      } else {
        this.sonr = e.detail.value;
      }
    },
    opgm(id) {
      uni.navigateTo({
        url: "../../pages/gm/gmxx?id=" + id
      });
    },
    getdata(pd) {
      let thi = this;
      uni.request({
        url: G_APP.ip + "appapi.php?to=search",
        method: "GET",
        dataType: "json",
        enableCache: false,
        //缓存
        defer: false,
        //控制当前请求是否延时至首屏内容渲染后发送
        data: {
          keyboard: thi.sonr,
          id: 1
        },
        success: (ret) => {
          uni.hideLoading();
          if (ret.data.data) {
            thi.list = ret.data.data;
          }
        }
      });
    },
    sosonr() {
      let thi = this;
      thi.list = "";
      if (thi.sonr && thi.list == "") {
        uni.showLoading({ title: "搜索中" });
        thi.sozt = 1;
        const sonrtm = setTimeout(() => {
          thi.getdata(1);
          clearTimeout(sonrtm);
        }, 180);
      } else {
        thi.sonr = "";
        thi.sozt = 0;
        uni.showToast({ icon: "none", title: "请输入搜索内容", duration: 1e3, position: "center" });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", null, [
    createElementVNode("view", {
      class: "topsoso",
      onClick: _cache[2] || (_cache[2] = (...args) => $options.clososo && $options.clososo(...args)),
      style: normalizeStyle("height:" + ($data.appt + 55) + "px;"),
      renderWhole: true
    }, [
      createElementVNode("u-text", { class: "fh" }, ""),
      createElementVNode("u-input", {
        class: "soinput",
        value: $data.sonr,
        confirmType: "search",
        type: "text",
        placeholder: " 搜索你想要的",
        onInput: _cache[0] || (_cache[0] = (...args) => $options.isval && $options.isval(...args)),
        onConfirm: _cache[1] || (_cache[1] = (...args) => $options.iswc && $options.iswc(...args))
      }, null, 40, ["value"])
    ], 4),
    $data.sozt == 1 ? (openBlock(), createElementBlock("list", {
      key: 0,
      class: "list",
      loadmoreoffset: "9999999"
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.list, (item, index) => {
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
              createElementVNode("u-text", { class: "gm_c_t" }, toDisplayString(item.gmname), 1),
              createElementVNode("u-text", { class: "gm_c_c" }, "类型：" + toDisplayString(item.gmbq), 1),
              createElementVNode("u-text", { class: "gm_c_b" }, toDisplayString(item.gmjj), 1)
            ]),
            createElementVNode("u-text", { class: "gm_r" }, "下载")
          ])
        ], 8, ["onClick"]);
      }), 128))
    ])) : createCommentVNode("", true)
  ]);
}
const soso = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  soso as default
};
