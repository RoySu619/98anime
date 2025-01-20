import { _ as _export_sfc, G as G_APP } from "../../ip.js";
import { openBlock, createElementBlock, createElementVNode } from "vue";
const _style_0 = { "main": { "": { "flex": 1 } } };
const _sfc_main = {
  data() {
    return {
      tit: "",
      url: ""
    };
  },
  onLoad(option) {
    this.tit = option.tit;
    if (option.pd == 2) {
      let regex = /@@@/g;
      let urls = option.url.replace(regex, "&");
      this.url = urls;
    } else {
      this.url = G_APP.ip + "mobile.php?to=help&op=" + option.url;
    }
    uni.setNavigationBarTitle({
      title: this.tit
    });
  },
  methods: {},
  onNavigationBarButtonTap(e) {
    if (e.index == 0) {
      uni.navigateBack();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("u-web-view", {
      class: "main",
      src: $data.url,
      updateTitle: ""
    }, null, 8, ["src"])
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/小熊秘宝/pages/llq/index.nvue"]]);
export {
  index as default
};
