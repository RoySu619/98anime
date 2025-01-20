import { r as requireNativePlugin } from "../../uni-app.es.js";
import { _ as _export_sfc } from "../../ip.js";
import { resolveComponent, openBlock, createElementBlock, Fragment, renderList, createElementVNode, toDisplayString, createBlock, createCommentVNode } from "vue";
const _style_0 = { "m": { "": { "width": "750rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx" } }, "li": { "": { "width": "690rpx", "paddingTop": "30rpx" } }, "lis": { "": { "width": "690rpx", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx", "backgroundColor": "rgba(255,255,255,1)", "borderRadius": "20rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "flex-start", "alignItems": "center" } }, "li_l": { "": { "width": "120rpx", "height": "120rpx", "lineHeight": "120rpx", "fontSize": "100rpx", "fontFamily": "iconfont", "color": "#41c500" } }, "li_c": { "": { "width": "400rpx", "height": "120rpx" } }, "li_c_t": { "": { "width": "350rpx", "height": "70rpx", "lineHeight": "70rpx", "lines": 1, "textAlign": "left", "fontSize": "30rpx" } }, "li_c_b": { "": { "width": "450rpx", "height": "50rpx", "lineHeight": "50rpx", "textAlign": "left", "fontSize": "26rpx", "color": "rgba(0,0,0,0.6)" } }, "li_r": { "": { "width": "120rpx", "height": "120rpx", "justifyContent": "space-between", "position": "relative" } }, "li_r_jd": { "": { "position": "absolute", "right": 0, "top": "15rpx", "width": "120rpx", "height": "40rpx", "lineHeight": "40rpx", "textAlign": "center", "fontSize": "26rpx" } }, "li_r_t": { "": { "width": "120rpx", "height": "50rpx", "lineHeight": "50rpx", "borderRadius": "25rpx", "textAlign": "center", "fontSize": "22rpx", "color": "#1f2531", "backgroundColor": "#ffda08" } }, "li_r_t98": { "": { "width": "120rpx", "height": "50rpx", "lineHeight": "50rpx", "borderRadius": "25rpx", "textAlign": "center", "fontSize": "22rpx", "color": "rgba(0,0,0,0.6)", "backgroundColor": "rgba(0,0,0,0.1)" } }, "li_r_b": { "": { "width": "120rpx", "height": "50rpx", "lineHeight": "50rpx", "borderRadius": "25rpx", "textAlign": "center", "fontSize": "26rpx", "backgroundColor": "rgba(0,0,0,0.1)" } } };
const domModule = requireNativePlugin("dom");
const _sfc_main = {
  data() {
    return {
      list: [],
      isdowtm: "",
      //计时器
      jcnum: 0,
      //进程ID
      isdowtms: "",
      dow_a_index: []
      //重要
    };
  },
  onLoad() {
    domModule.addRule("fontFace", {
      "fontFamily": "iconfont",
      "src": "url('http://www.268yx.cn/ttf/iconfontd.ttf')"
    });
  },
  onShow() {
    this.sql_c();
  },
  onHide() {
    this.list = [];
    clearInterval(this.isdowtms);
    this.jcnum = 0;
  },
  methods: {
    gototm() {
      let thi = this;
      thi.isdowtms = setInterval(() => {
        thi.getjd();
      }, 1e3);
    },
    getjd() {
      let thi = this;
      plus.sqlite.selectSql({
        name: "dowlist",
        sql: 'select dow_id,dow_jd,dow_mb from dowgmlist where dow_zt="0" limit 1',
        success: function(data) {
          if (data.length > 0) {
            let nums = thi.dow_a_index.lastIndexOf("" + data[0].dow_id);
            thi.list[nums].dow_jd = data[0].dow_jd;
            thi.list[nums].dow_mb = data[0].dow_mb;
          }
        }
      });
    },
    sql_c() {
      let thi = this;
      plus.sqlite.selectSql({
        name: "dowlist",
        sql: "select * from dowgmlist limit 50",
        success: function(data) {
          if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
              thi.list = thi.list.concat(data[i]);
              thi.dow_a_index.push("" + data[i].dow_id);
            }
            thi.gototm();
          }
        }
      });
    },
    openazb(i) {
      plus.runtime.install(this.list[i].dow_fd, { force: true }, {}, function(error) {
        uni.showToast({ icon: "none", title: "安装失败", mask: false, duration: 1500 });
      });
    },
    jxdow(gmid) {
      let thi = this;
      plus.sqlite.executeSql({
        name: "dowlist",
        sql: "UPDATE dowgmlist set dow_zt='97' where dow_id='" + gmid + "'",
        success: function(e) {
          let nums = thi.dow_a_index.lastIndexOf("" + gmid);
          thi.list[nums].dow_jd = 0;
          thi.list[nums].dow_zt = 0;
        }
      });
    },
    ztdow(gmid, index) {
      let thi = this;
      plus.sqlite.executeSql({
        name: "dowlist",
        sql: "UPDATE dowgmlist set dow_zt='98' where dow_id='" + gmid + "'",
        success: function(e) {
          thi.list[index].dow_zt = 98;
          uni.$emit("updowzt", { msg: "暂停游戏ID" + gmid });
        }
      });
    },
    delazb(index, id) {
      let thi = this;
      plus.sqlite.executeSql({
        name: "dowlist",
        sql: "DELETE FROM dowgmlist where dow_id='" + id + "'",
        success: function(e) {
          uni.removeSavedFile({
            filePath: thi.list[index].dow_fd,
            complete: function(res) {
              thi.list.splice(index, 1);
            }
          });
          uni.showToast({ icon: "none", title: " 删除成功 ", mask: false, duration: 1500 });
        }
      });
    }
  },
  onNavigationBarButtonTap(e) {
    if (e.index == "0") {
      uni.navigateBack();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_progress = resolveComponent("progress");
  return openBlock(), createElementBlock("list", { class: "m" }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($data.list, (item, index) => {
      return openBlock(), createElementBlock("cell", {
        class: "li",
        key: index
      }, [
        createElementVNode("view", {
          class: "lis",
          renderWhole: true
        }, [
          createElementVNode("u-text", { class: "li_l" }, ""),
          createElementVNode("view", {
            class: "li_c",
            renderWhole: true
          }, [
            createElementVNode("u-text", { class: "li_c_t" }, toDisplayString(item.dow_name), 1),
            createElementVNode("u-text", { class: "li_c_b" }, toDisplayString((item.dow_mb / 1024 / 1024).toFixed(2)) + "M", 1)
          ]),
          createElementVNode("view", {
            class: "li_r",
            renderWhole: true
          }, [
            item.dow_zt == 0 ? (openBlock(), createBlock(_component_progress, {
              key: 0,
              percent: item.dow_jd,
              "stroke-width": "20",
              "border-radius": "10",
              activeColor: "#ffda08",
              backgroundColor: "#ddd"
            }, null, 8, ["percent"])) : createCommentVNode("", true),
            item.dow_zt == 0 ? (openBlock(), createElementBlock("u-text", {
              key: 1,
              class: "li_r_jd"
            }, toDisplayString(item.dow_jd) + "%", 1)) : createCommentVNode("", true),
            item.dow_zt == 0 ? (openBlock(), createElementBlock("u-text", {
              key: 2,
              class: "li_r_t98",
              onClick: ($event) => $options.ztdow(item.dow_id, index)
            }, "暂停下载", 8, ["onClick"])) : createCommentVNode("", true),
            item.dow_zt == 98 ? (openBlock(), createElementBlock("u-text", {
              key: 3,
              class: "li_r_t",
              onClick: ($event) => $options.jxdow(item.dow_id, index)
            }, "继续下载", 8, ["onClick"])) : createCommentVNode("", true),
            item.dow_zt == 66 ? (openBlock(), createElementBlock("u-text", {
              key: 4,
              class: "li_r_t",
              onClick: ($event) => $options.openazb(index)
            }, "安装", 8, ["onClick"])) : createCommentVNode("", true),
            item.dow_zt == 99 ? (openBlock(), createElementBlock("u-text", {
              key: 5,
              class: "li_r_t"
            }, "下载失败")) : createCommentVNode("", true),
            item.dow_zt == 99 || item.dow_zt == 98 || item.dow_zt == 66 ? (openBlock(), createElementBlock("u-text", {
              key: 6,
              class: "li_r_b",
              onClick: ($event) => $options.delazb(index, item.dow_id)
            }, "删除", 8, ["onClick"])) : createCommentVNode("", true)
          ])
        ])
      ]);
    }), 128))
  ]);
}
const dow = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  dow as default
};
