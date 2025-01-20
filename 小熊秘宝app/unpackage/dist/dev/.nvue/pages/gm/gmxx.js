import { _ as _export_sfc, G as G_APP } from "../../ip.js";
import { openBlock, createElementBlock, createElementVNode, toDisplayString, createCommentVNode, Fragment, renderList, normalizeStyle } from "vue";
const _style_0 = { "m": { "": { "width": "750rpx" } }, "m_t": { "": { "width": "750rpx", "paddingTop": "50rpx", "paddingRight": "30rpx", "paddingBottom": "50rpx", "paddingLeft": "30rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "flex-start", "alignItems": "center", "backgroundColor": "rgba(0,0,0,0.02)" } }, "m_t_l": { "": { "width": "120rpx", "height": "120rpx", "borderRadius": "20rpx" } }, "m_t_c": { "": { "paddingLeft": "20rpx", "width": "400rpx", "height": "120rpx" } }, "m_t_c_t1": { "": { "width": "400rpx", "height": "40rpx", "lineHeight": "40rpx", "lines": 1, "fontSize": "30rpx", "color": "rgba(0,0,0,1)", "fontWeight": "bold", "fontFamily": "iconfont" } }, "m_t_c_t2": { "": { "width": "400rpx", "lines": 1, "height": "40rpx", "lineHeight": "48rpx", "fontSize": "24rpx", "color": "rgba(0,0,0,0.5)", "fontFamily": "iconfont" } }, "m_t_c_t3": { "": { "width": "400rpx", "lines": 1, "height": "40rpx", "lineHeight": "40rpx", "fontSize": "24rpx", "color": "rgba(255,0,0,1)", "fontFamily": "iconfont" } }, "m_t_r": { "": { "width": "170rpx", "textAlign": "right", "height": "120rpx", "lineHeight": "200rpx", "fontSize": "24rpx", "color": "rgba(0,0,0,0.5)" } }, "cell": { "": { "width": "750rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx" } }, "cell_tp": { "": { "width": "750rpx", "paddingTop": "30rpx", "paddingBottom": "30rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center" } }, "cell_tps": { "": { "width": "230rpx", "height": "60rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "flex-start", "alignItems": "center" } }, "cell_tp_t": { "": { "width": "230rpx", "height": "50rpx", "lineHeight": "50rpx", "fontSize": "32rpx", "textAlign": "center" } }, "cell_tp_b": { "": { "width": "50rpx", "height": "10rpx", "backgroundColor": "#ffda08", "borderRadius": "5rpx" } }, "tit": { "": { "width": "690rpx", "height": "120rpx", "lineHeight": "120rpx", "fontSize": "30rpx", "textAlign": "center", "fontWeight": "bold" } }, "jj": { "": { "width": "690rpx", "lineHeight": "35rpx", "fontSize": "26rpx", "borderRadius": "10rpx", "color": "rgba(0,0,0,0.8)", "paddingBottom": "20rpx" } }, "cells": { "": { "width": "750rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "paddingTop": "50rpx" } }, "gmimg": { "": { "width": "690rpx", "height": "520rpx", "flexWrap": "wrap", "justifyContent": "flex-start", "alignItems": "flex-start" } }, "gmimg_i": { "": { "width": "300rpx", "height": "480rpx", "marginRight": "20rpx", "marginBottom": "20rpx", "borderRadius": "10rpx" } }, "lbli": { "": { "width": "690rpx", "marginBottom": "20rpx", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx", "borderRadius": "10rpx", "backgroundColor": "rgba(0,0,0,0.02)", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "space-between", "alignItems": "center" } }, "lbli_l": { "": { "width": "520rpx", "height": "120rpx" } }, "lbli_l_t1": { "": { "width": "520rpx", "height": "40rpx", "lineHeight": "40rpx", "fontSize": "30rpx" } }, "lbli_l_t2": { "": { "width": "520rpx", "height": "40rpx", "lineHeight": "40rpx", "fontSize": "24rpx", "lines": 1, "color": "rgba(0,0,0,0.6)" } }, "lbli_l_t3": { "": { "width": "520rpx", "height": "40rpx", "lineHeight": "40rpx", "fontSize": "24rpx", "color": "rgba(0,0,0,0.6)" } }, "lbli_r": { "": { "width": "100rpx", "height": "60rpx", "lineHeight": "60rpx", "fontSize": "26rpx", "textAlign": "center", "backgroundColor": "#ffda08", "borderRadius": "5rpx" } }, "neli": { "": { "width": "690rpx", "marginBottom": "20rpx", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx", "borderRadius": "10rpx", "backgroundColor": "rgba(0,0,0,0.02)" } }, "neli_t1": { "": { "width": "650rpx", "height": "50rpx", "lineHeight": "50rpx", "fontSize": "32rpx", "textAlign": "center" } }, "neli_t2": { "": { "width": "650rpx", "lines": 2, "fontSize": "26rpx", "color": "rgba(0,0,0,0.6)" } }, "neli_t3": { "": { "width": "650rpx", "height": "40rpx", "lineHeight": "40rpx", "textAlign": "center", "fontSize": "26rpx", "color": "rgba(0,0,0,0.6)" } }, "dow": { "": { "width": "750rpx", "height": 60, "backgroundColor": "#ffffff", "justifyContent": "center", "alignItems": "center", "position": "relative" } }, "dow_an": { "": { "width": "690rpx", "height": "80rpx", "lineHeight": "80rpx", "color": "#000000", "textAlign": "center", "fontSize": "30rpx", "position": "absolute", "left": "30rpx", "top": "20rpx", "zIndex": 2, "backgroundColor": "rgba(0,0,0,0.02)", "borderRadius": "40rpx" } }, "dow_bg": { "": { "backgroundColor": "rgba(255,218,8,1)", "borderRadius": "40rpx", "position": "absolute", "left": "30rpx", "top": "20rpx", "width": "0rpx", "height": "80rpx", "zIndex": 1 } }, "cell_qun": { "": { "width": "750rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "paddingTop": "30rpx", "height": "130rpx" } }, "cell_quns": { "": { "width": "690rpx", "height": "100rpx", "borderWidth": "0.5rpx", "borderStyle": "solid", "borderColor": "#ffda08", "flexDirection": "row", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "center", "borderRadius": "10rpx", "backgroundColor": "rgba(255,218,8,0.1)" } }, "cell_qun_l": { "": { "width": "500rpx", "height": "100rpx" } }, "cell_qun_l_t": { "": { "fontSize": "30rpx", "width": "520rpx", "height": "55rpx", "lineHeight": "60rpx" } }, "cell_qun_l_b": { "": { "fontSize": "24rpx", "width": "520rpx", "height": "35rpx", "lineHeight": "35rpx", "fontFamily": "iconfont", "color": "rgba(0,0,0,0.5)" } }, "cell_qun_r": { "": { "width": "140rpx", "textAlign": "center", "height": "60rpx", "lineHeight": "60rpx", "fontSize": "24rpx", "color": "#000000", "backgroundColor": "#ffda08", "borderRadius": "10rpx" } }, "nodata": { "": { "width": "750rpx", "height": "600rpx", "flexDirection": "column", "flexWrap": "nowrap", "justifyContent": "center", "alignItems": "center" } }, "nodata_i": { "": { "width": "400rpx", "height": "300rpx" } } };
const _sfc_main = {
  data() {
    return {
      ip: G_APP.ip,
      appb: G_APP.appb,
      id: "",
      tabid: 1,
      gmlogo: "",
      gmname: "",
      gmdow: 0,
      gmpf: 3,
      gmbq: "",
      gmmb: "",
      gmqun: "",
      gmimg: [],
      gmjj: "",
      gmjs: "",
      gmurl: "",
      lblist: [],
      nelist: [],
      nepag: 0,
      nezpag: 1,
      aurl: "",
      iurl: "",
      urlpd: 0,
      //---------//
      gmfd: "",
      dowtm: 0,
      dowjd: 0,
      dowbg: 690,
      dowzttis: "下载游戏",
      dowzt: 0
      //0未下载 1准备下载 2 正在下载 99下载失败 98暂停下载 97继续下载 66 下载完成
    };
  },
  onLoad(option) {
    this.id = option.id;
  },
  onReady() {
    this.get();
  },
  methods: {
    oplbxx(id) {
      uni.navigateTo({
        url: "../libao/lb?id=" + id
      });
    },
    opzxxx(id) {
      uni.navigateTo({
        url: "../../pages/gm/newsxx?id=" + id
      });
    },
    opqun() {
      if (this.gmqun) {
        let url = "mqqapi://card/show_pslcard?src_type=internal&version=1&uin=" + this.gmqun + "&card_type=group&source=qrcode";
        plus.runtime.openURL(url, function(res) {
        });
      } else {
        uni.showToast({
          icon: "none",
          title: " 游戏群还未创建，请联系客服 ",
          duration: 2e3
        });
      }
    },
    gotodow() {
      let thi = this;
      if (thi.appsys == "apple") {
        if (thi.iurl) {
          plus.runtime.openURL(thi.iurl, function(res) {
          });
        } else {
          uni.showToast({
            icon: "none",
            title: " 下载链接失效了 ",
            duration: 2e3
          });
        }
      } else {
        if (thi.aurl) {
          if (thi.urlpd == 0) {
            if (thi.dowzt == 66) {
              plus.runtime.install(thi.gmfd, { force: true }, {}, function(error) {
                uni.showToast({ icon: "none", title: "安装失败", mask: false, duration: 1500 });
              });
            }
            if (thi.dowzt == 0) {
              plus.sqlite.executeSql({
                name: "dowlist",
                sql: 'create table if not exists dowgmlist("dow_id" INT(11),"dow_zt" INT(1),"dow_name" VARCHAR(30),"dow_jd" INT(11),"dow_mb" VARCHAR(20),"dow_fd" VARCHAR(100),"dow_url" VARCHAR(300))',
                success: function(e) {
                  plus.sqlite.executeSql({
                    name: "dowlist",
                    sql: "insert into dowgmlist values('" + thi.id + "','0','" + thi.gmname + "','0','0','0','" + thi.aurl + "')",
                    //状态1是正在下载 0未下载，66完成
                    success: function(e2) {
                      thi.dowzttis = "获取下载中....";
                      thi.dowzt = 1;
                      thi.dowbg = 0;
                      thi.gotodowtm();
                    }
                  });
                }
              });
            }
            if (thi.dowzt == 1 || thi.dowzt == 2) {
              plus.sqlite.executeSql({
                name: "dowlist",
                sql: "UPDATE dowgmlist set dow_zt='98' where dow_id='" + thi.id + "'",
                success: function(e) {
                  clearInterval(thi.dowtm);
                  thi.dowzttis = "已暂停下载";
                  thi.dowzt = 4;
                  uni.$emit("updowzt", { msg: "暂停游戏ID" + thi.id });
                }
              });
            }
            if (thi.dowzt == 98) {
              clearInterval(thi.dowtm);
              plus.sqlite.executeSql({
                name: "dowlist",
                sql: "UPDATE dowgmlist set dow_zt='97' where dow_id='" + thi.id + "'",
                success: function(e) {
                  thi.dowzt = 1;
                  thi.dowzttis = "正在恢复下载";
                  thi.gotodowtm();
                }
              });
            }
          } else {
            plus.runtime.openURL(thi.aurl, function(res) {
            });
          }
        } else {
          uni.showToast({
            icon: "none",
            title: " 下载链接失效了 ",
            duration: 2e3
          });
        }
      }
    },
    gotodowtm() {
      let thi = this;
      thi.dowtm = setInterval(() => {
        plus.sqlite.selectSql({
          name: "dowlist",
          sql: "select dow_jd,dow_zt from dowgmlist where dow_id=" + thi.id,
          success: function(data) {
            if (data[0].dow_jd == 100) {
              thi.dowjd = 690;
              thi.dowbg = 690;
              thi.dowzt = 66;
              thi.dowzttis = "安装游戏";
              clearInterval(thi.dowtm);
            } else {
              if (data[0].dow_jd == 0) {
                thi.dowzttis = "已加入下载队列，请稍后....";
              } else {
                thi.dowjd = data[0].dow_jd;
                thi.dowzttis = data[0].dow_jd + "%";
                thi.dowbg = data[0].dow_jd * 6.9;
              }
            }
          }
        });
      }, 1e3);
    },
    settab(id) {
      if (this.tabid != id) {
        this.tabid = id;
      }
      if (this.lblist.length == 0 && id == 2) {
        this.getlb();
      }
      if (this.nelist.length == 0 && id == 3) {
        this.getne(1);
      }
    },
    moerdata() {
      this.getne(2);
    },
    getne(pd) {
      let thi = this;
      let npag = Number(thi.nepag) + 1;
      thi.nepag = npag;
      if (npag <= thi.nezpag) {
        uni.request({
          url: G_APP.ip + "appapi.php?to=gmxx&op=gmxx_zx",
          method: "GET",
          dataType: "json",
          enableCache: true,
          //缓存
          defer: true,
          //控制当前请求是否延时至首屏内容渲染后发送
          data: {
            id: thi.id,
            pages: npag
          },
          success: (ret) => {
            thi.nezpag = ret.data.pagenum;
            if (ret.data.nelist) {
              if (pd == 1) {
                thi.nelist = ret.data.nelist;
              }
              if (pd == 2) {
                thi.nelist = thi.nelist.concat(ret.data.nelist);
              }
            }
          }
        });
      }
    },
    getlb() {
      let thi = this;
      uni.request({
        url: G_APP.ip + "appapi.php?to=gmxx&op=gmxx_lb",
        method: "GET",
        dataType: "json",
        enableCache: true,
        //缓存
        defer: true,
        //控制当前请求是否延时至首屏内容渲染后发送
        data: {
          id: thi.id
        },
        success: (ret) => {
          if (ret.data.lblist) {
            thi.lblist = ret.data.lblist;
          }
        }
      });
    },
    get() {
      let thi = this;
      uni.request({
        url: G_APP.ip + "appapi.php?to=gmxx",
        method: "GET",
        dataType: "json",
        enableCache: true,
        //缓存
        defer: true,
        //控制当前请求是否延时至首屏内容渲染后发送
        data: {
          id: thi.id
        },
        success: (ret) => {
          if (ret.data.gm[0]) {
            thi.gmlogo = thi.ip + ret.data.gm[0].gmlogo;
            thi.gmname = ret.data.gm[0].gmname;
            thi.gmjj = ret.data.gm[0].gmjj;
            thi.gmjs = ret.data.gm[0].gmjs;
            thi.gmbq = ret.data.gm[0].gmbq;
            thi.gmqun = ret.data.gm[0].qun;
            let downum = Number(ret.data.gm[0].gmdow);
            if (downum > 9999) {
              let num1 = downum / 1e4;
              let num2 = num1.toFixed(2);
              thi.gmdow = num2 + "万";
            } else {
              thi.gmdow = downum;
            }
            let mgnum = Number(ret.data.gm[0].gmmb);
            if (mgnum > 1024) {
              let num1 = mgnum / 1024;
              let num2 = num1.toFixed(2);
              thi.gmmb = num2 + "G";
            } else {
              thi.gmmb = mgnum + "M";
            }
            if (ret.data.gm[0].gmpf < 1.99) {
              thi.gmpf = "1";
            }
            if (ret.data.gm[0].gmpf < 2.99 && ret.data.gm[0].gmpf > 1.99) {
              thi.gmpf = "2";
            }
            if (ret.data.gm[0].gmpf < 3.99 && ret.data.gm[0].gmpf > 2.99) {
              thi.gmpf = "3";
            }
            if (ret.data.gm[0].gmpf < 4.5 && ret.data.gm[0].gmpf > 3.99) {
              thi.gmpf = "4";
            }
            if (ret.data.gm[0].gmpf > 4.5) {
              thi.gmpf = "5";
            }
            thi.gmimg = ret.data.img;
            thi.aurl = ret.data.gm[0].Android;
            thi.iurl = ret.data.gm[0].ios;
            thi.urlpd = ret.data.gm[0].urlpd;
          }
        }
      });
    }
  },
  onShow() {
    let thi = this;
    plus.sqlite.selectSql({
      name: "dowlist",
      sql: "select dow_jd,dow_zt,dow_fd from dowgmlist where dow_id=" + thi.id,
      success: function(data) {
        if (data.length > 0) {
          if (data[0].dow_zt == 66) {
            thi.gmfd = data[0].dow_fd;
            thi.dowzt = 66;
            thi.dowzttis = "安装游戏";
          } else {
            if (data[0].dow_zt == 0) {
              if (data[0].dow_jd == 0) {
                thi.dowzttis = "已加入下载队列，请稍后....";
                thi.gotodowtm(2);
              } else {
                thi.dowjd = data[0].dow_jd;
                thi.dowzttis = data[0].dow_jd + "%";
                thi.dowzt = 1;
                thi.dowbg = data[0].dow_jd * 6.9;
                thi.gotodowtm(2);
              }
            }
            if (data[0].dow_zt == 98) {
              thi.dowzttis = "继续下载";
              thi.dowzt = 98;
              thi.dowjd = data[0].dow_jd;
              thi.dowbg = data[0].dow_jd * 6.9;
            }
          }
        }
      }
    });
  },
  onHide() {
    clearInterval(this.dowtm);
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
    createElementVNode(
      "list",
      {
        class: "m",
        onLoadmore: _cache[4] || (_cache[4] = (...args) => $options.moerdata && $options.moerdata(...args))
      },
      [
        createElementVNode("cell", { class: "m_t" }, [
          createElementVNode("u-image", {
            class: "m_t_l",
            src: $data.gmlogo
          }, null, 8, ["src"]),
          createElementVNode("view", {
            class: "m_t_c",
            renderWhole: true
          }, [
            createElementVNode(
              "u-text",
              { class: "m_t_c_t1" },
              toDisplayString($data.gmname),
              1
              /* TEXT */
            ),
            createElementVNode(
              "u-text",
              { class: "m_t_c_t2" },
              toDisplayString($data.gmbq) + " . " + toDisplayString($data.gmmb),
              1
              /* TEXT */
            ),
            $data.gmpf == "1" ? (openBlock(), createElementBlock(
              "u-text",
              {
                key: 0,
                class: "m_t_c_t3"
              },
              " " + toDisplayString($data.gmpf) + "分",
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true),
            $data.gmpf == "2" ? (openBlock(), createElementBlock(
              "u-text",
              {
                key: 1,
                class: "m_t_c_t3"
              },
              "  " + toDisplayString($data.gmpf) + "分",
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true),
            $data.gmpf == "3" ? (openBlock(), createElementBlock(
              "u-text",
              {
                key: 2,
                class: "m_t_c_t3"
              },
              "   " + toDisplayString($data.gmpf) + "分",
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true),
            $data.gmpf == "4" ? (openBlock(), createElementBlock(
              "u-text",
              {
                key: 3,
                class: "m_t_c_t3"
              },
              "    " + toDisplayString($data.gmpf) + "分",
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true),
            $data.gmpf == "5" ? (openBlock(), createElementBlock(
              "u-text",
              {
                key: 4,
                class: "m_t_c_t3"
              },
              "     " + toDisplayString($data.gmpf) + "分",
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true)
          ]),
          createElementVNode(
            "u-text",
            { class: "m_t_r" },
            toDisplayString($data.gmdow) + "次下载",
            1
            /* TEXT */
          )
        ]),
        $data.gmqun ? (openBlock(), createElementBlock("cell", {
          key: 0,
          class: "cell_qun",
          renderWhole: true
        }, [
          createElementVNode("view", {
            class: "cell_quns",
            renderWhole: true
          }, [
            createElementVNode("view", {
              class: "cell_qun_l",
              renderWhole: true
            }, [
              createElementVNode(
                "u-text",
                { class: "cell_qun_l_t" },
                "已有" + toDisplayString($data.gmdow) + "人在玩",
                1
                /* TEXT */
              ),
              createElementVNode("u-text", { class: "cell_qun_l_b" }, " 加入玩家交流群,找到更多志同道合的好友.")
            ]),
            createElementVNode("u-text", {
              class: "cell_qun_r",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.opqun && $options.opqun(...args))
            }, "一键加群")
          ])
        ])) : createCommentVNode("v-if", true),
        createElementVNode("cell", { class: "cell_tp" }, [
          createElementVNode("view", {
            class: "cell_tps",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.settab(1)),
            renderWhole: true
          }, [
            createElementVNode("u-text", { class: "cell_tp_t" }, "详细"),
            $data.tabid == 1 ? (openBlock(), createElementBlock("u-text", {
              key: 0,
              class: "cell_tp_b"
            })) : createCommentVNode("v-if", true)
          ]),
          createElementVNode("view", {
            class: "cell_tps",
            onClick: _cache[2] || (_cache[2] = ($event) => $options.settab(2)),
            renderWhole: true
          }, [
            createElementVNode("u-text", { class: "cell_tp_t" }, "礼包"),
            $data.tabid == 2 ? (openBlock(), createElementBlock("u-text", {
              key: 0,
              class: "cell_tp_b"
            })) : createCommentVNode("v-if", true)
          ]),
          createElementVNode("view", {
            class: "cell_tps",
            onClick: _cache[3] || (_cache[3] = ($event) => $options.settab(3)),
            renderWhole: true
          }, [
            createElementVNode("u-text", { class: "cell_tp_t" }, "攻略"),
            $data.tabid == 3 ? (openBlock(), createElementBlock("u-text", {
              key: 0,
              class: "cell_tp_b"
            })) : createCommentVNode("v-if", true)
          ])
        ]),
        $data.tabid == 1 ? (openBlock(), createElementBlock("cell", {
          key: 1,
          class: "cell"
        }, [
          createElementVNode("scroll-view", {
            renderWhole: true,
            class: "gmimg",
            scrollX: "true",
            showScrollbar: "false"
          }, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($data.gmimg, (item, index) => {
                return openBlock(), createElementBlock("u-image", {
                  class: "gmimg_i",
                  mode: "heightFix",
                  key: index,
                  src: $data.ip + item.imgs
                }, null, 8, ["src"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          createElementVNode(
            "u-text",
            { class: "jj" },
            toDisplayString($data.gmjj),
            1
            /* TEXT */
          ),
          createElementVNode("u-text", { class: "tit" }, "-- 游戏介绍 --"),
          createElementVNode(
            "u-text",
            { class: "jj" },
            toDisplayString($data.gmjs),
            1
            /* TEXT */
          )
        ])) : createCommentVNode("v-if", true),
        $data.tabid == 2 && $data.lblist ? (openBlock(), createElementBlock("cell", {
          key: 2,
          class: "cell"
        }, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($data.lblist, (item, index) => {
              return openBlock(), createElementBlock("view", {
                class: "lbli",
                onClick: ($event) => $options.oplbxx(item.id),
                key: item.id,
                renderWhole: true
              }, [
                createElementVNode("view", {
                  class: "lbli_l",
                  renderWhole: true
                }, [
                  createElementVNode(
                    "u-text",
                    { class: "lbli_l_t1" },
                    toDisplayString(item.lbname),
                    1
                    /* TEXT */
                  ),
                  createElementVNode(
                    "u-text",
                    { class: "lbli_l_t2" },
                    toDisplayString(item.lbjj),
                    1
                    /* TEXT */
                  ),
                  createElementVNode(
                    "u-text",
                    { class: "lbli_l_t3" },
                    "剩余：" + toDisplayString(item.lbsy) + "枚",
                    1
                    /* TEXT */
                  )
                ]),
                createElementVNode("u-text", { class: "lbli_r" }, "领取")
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])) : createCommentVNode("v-if", true),
        $data.tabid == 2 && $data.lblist == "" ? (openBlock(), createElementBlock("cell", {
          key: 3,
          class: "nodata",
          renderWhole: true
        }, [
          createElementVNode("u-image", {
            class: "nodata_i",
            src: "/static/nodata.png"
          })
        ])) : createCommentVNode("v-if", true),
        $data.tabid == 3 && $data.nelist ? (openBlock(), createElementBlock("cell", {
          key: 4,
          class: "cell"
        }, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($data.nelist, (item, index) => {
              return openBlock(), createElementBlock("view", {
                class: "neli",
                onClick: ($event) => $options.opzxxx(item.id),
                key: item.id,
                renderWhole: true
              }, [
                createElementVNode(
                  "u-text",
                  { class: "neli_t1" },
                  toDisplayString(item.zxname),
                  1
                  /* TEXT */
                ),
                createElementVNode(
                  "u-text",
                  { class: "neli_t2" },
                  toDisplayString(item.zxjj),
                  1
                  /* TEXT */
                ),
                createElementVNode(
                  "u-text",
                  { class: "neli_t3" },
                  toDisplayString(item.times),
                  1
                  /* TEXT */
                )
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])) : createCommentVNode("v-if", true),
        $data.tabid == 3 && $data.nelist == "" ? (openBlock(), createElementBlock("cell", {
          key: 5,
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
    ),
    createElementVNode(
      "view",
      {
        class: "dow",
        style: normalizeStyle("height:" + ($data.appb + 60) + "px"),
        onClick: _cache[5] || (_cache[5] = (...args) => $options.gotodow && $options.gotodow(...args)),
        renderWhole: true
      },
      [
        createElementVNode(
          "u-text",
          {
            class: "dow_bg",
            style: normalizeStyle("width:" + $data.dowbg + "rpx;")
          },
          null,
          4
          /* STYLE */
        ),
        createElementVNode(
          "u-text",
          { class: "dow_an" },
          toDisplayString($data.dowzttis),
          1
          /* TEXT */
        )
      ],
      4
      /* STYLE */
    )
  ]);
}
const gmxx = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/小熊秘宝/pages/gm/gmxx.nvue"]]);
export {
  gmxx as default
};
