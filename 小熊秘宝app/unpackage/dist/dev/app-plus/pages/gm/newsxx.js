"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // F:/360MoveData/Users/abc/Desktop/小熊秘宝/unpackage/dist/dev/.nvue/ip.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  var ip = "http://xxmbao.bacms.cn/";
  var appxx = uni.getWindowInfo();
  var appsys = uni.getDeviceInfo().deviceBrand;
  var appdvid = uni.getDeviceInfo().deviceId;
  var appname = uni.getAppBaseInfo().appName;
  var appV = uni.getAppBaseInfo().appVersionCode;
  var appVs = uni.getAppBaseInfo().appVersion;
  var issoso_zt = 0;
  var isgggd_zt = 0;
  var appw = Number(appxx.screenWidth);
  var appt = Number(appxx.statusBarHeight);
  var apph = Number(appxx.screenHeight);
  if (appxx.safeAreaInsets.bottom > 0) {
    uni.setStorageSync("appb", appxx.safeAreaInsets.bottom);
  }
  var appb = Number(uni.getStorageSync("appb")) ? Number(uni.getStorageSync("appb")) : 0;
  var appmain_h = apph - appt - appb;
  var G_APP = {
    ip,
    appsys,
    appdvid,
    appV,
    appVs,
    appname,
    appt,
    appb,
    appw,
    apph,
    appmain_h,
    issoso_zt,
    isgggd_zt
  };

  // F:/360MoveData/Users/abc/Desktop/小熊秘宝/unpackage/dist/dev/.nvue/uni-app.es.js
  var import_vue = __toESM(require_vue());
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }

  // F:/360MoveData/Users/abc/Desktop/小熊秘宝/unpackage/dist/dev/.nvue/pages/gm/newsxx.js
  var import_vue2 = __toESM(require_vue());
  var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;
  var endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/;
  var attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
  var empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr");
  var block = makeMap("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video");
  var inline = makeMap("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");
  var closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
  var fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");
  var special = makeMap("script,style");
  function HTMLParser(html, handler) {
    var index;
    var chars;
    var match;
    var stack = [];
    var last = html;
    stack.last = function() {
      return this[this.length - 1];
    };
    while (html) {
      chars = true;
      if (!stack.last() || !special[stack.last()]) {
        if (html.indexOf("<!--") == 0) {
          index = html.indexOf("-->");
          if (index >= 0) {
            if (handler.comment) {
              handler.comment(html.substring(4, index));
            }
            html = html.substring(index + 3);
            chars = false;
          }
        } else if (html.indexOf("</") == 0) {
          match = html.match(endTag);
          if (match) {
            html = html.substring(match[0].length);
            match[0].replace(endTag, parseEndTag);
            chars = false;
          }
        } else if (html.indexOf("<") == 0) {
          match = html.match(startTag);
          if (match) {
            html = html.substring(match[0].length);
            match[0].replace(startTag, parseStartTag);
            chars = false;
          }
        }
        if (chars) {
          index = html.indexOf("<");
          var text = index < 0 ? html : html.substring(0, index);
          html = index < 0 ? "" : html.substring(index);
          if (handler.chars) {
            handler.chars(text);
          }
        }
      } else {
        html = html.replace(new RegExp("([\\s\\S]*?)</" + stack.last() + "[^>]*>"), function(all, text2) {
          text2 = text2.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, "$1$2");
          if (handler.chars) {
            handler.chars(text2);
          }
          return "";
        });
        parseEndTag("", stack.last());
      }
      if (html == last) {
        throw "Parse Error: " + html;
      }
      last = html;
    }
    parseEndTag();
    function parseStartTag(tag, tagName, rest, unary) {
      tagName = tagName.toLowerCase();
      if (block[tagName]) {
        while (stack.last() && inline[stack.last()]) {
          parseEndTag("", stack.last());
        }
      }
      if (closeSelf[tagName] && stack.last() == tagName) {
        parseEndTag("", tagName);
      }
      unary = empty[tagName] || !!unary;
      if (!unary) {
        stack.push(tagName);
      }
      if (handler.start) {
        var attrs = [];
        rest.replace(attr, function(match2, name) {
          var value = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : fillAttrs[name] ? name : "";
          attrs.push({
            name,
            value,
            escaped: value.replace(/(^|[^\\])"/g, '$1\\"')
            // "
          });
        });
        if (handler.start) {
          handler.start(tagName, attrs, unary);
        }
      }
    }
    function parseEndTag(tag, tagName) {
      if (!tagName) {
        var pos = 0;
      } else {
        for (var pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos] == tagName) {
            break;
          }
        }
      }
      if (pos >= 0) {
        for (var i = stack.length - 1; i >= pos; i--) {
          if (handler.end) {
            handler.end(stack[i]);
          }
        }
        stack.length = pos;
      }
    }
  }
  function makeMap(str) {
    var obj = {};
    var items = str.split(",");
    for (var i = 0; i < items.length; i++) {
      obj[items[i]] = true;
    }
    return obj;
  }
  function removeDOCTYPE(html) {
    return html.replace(/<\?xml.*\?>\n/, "").replace(/<!doctype.*>\n/, "").replace(/<!DOCTYPE.*>\n/, "");
  }
  function parseAttrs(attrs) {
    return attrs.reduce(function(pre, attr2) {
      var value = attr2.value;
      var name = attr2.name;
      if (pre[name]) {
        pre[name] = pre[name] + " " + value;
      } else {
        pre[name] = value;
      }
      return pre;
    }, {});
  }
  function parseHtml(html) {
    html = removeDOCTYPE(html);
    var stacks = [];
    var results = {
      node: "root",
      children: []
    };
    HTMLParser(html, {
      start: function start(tag, attrs, unary) {
        var node = {
          name: tag
        };
        if (attrs.length !== 0) {
          node.attrs = parseAttrs(attrs);
        }
        if (unary) {
          var parent = stacks[0] || results;
          if (!parent.children) {
            parent.children = [];
          }
          parent.children.push(node);
        } else {
          stacks.unshift(node);
        }
      },
      end: function end(tag) {
        var node = stacks.shift();
        if (node.name !== tag)
          formatAppLog("error", "at common/html-parse/html-parser.js:303", "invalid state: mismatch end tag");
        if (stacks.length === 0) {
          results.children.push(node);
        } else {
          var parent = stacks[0];
          if (!parent.children) {
            parent.children = [];
          }
          parent.children.push(node);
        }
      },
      chars: function chars(text) {
        var node = {
          type: "text",
          text
        };
        if (stacks.length === 0) {
          results.children.push(node);
        } else {
          var parent = stacks[0];
          if (!parent.children) {
            parent.children = [];
          }
          parent.children.push(node);
        }
      },
      comment: function comment(text) {
        var node = {
          node: "comment",
          text
        };
        var parent = stacks[0];
        if (!parent.children) {
          parent.children = [];
        }
        parent.children.push(node);
      }
    });
    return results.children;
  }
  var _style_0 = { "list": { "": { "width": "750rpx", "backgroundColor": "#ffffff", "flex": 1 } }, "top": { "": { "width": "750rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "backgroundColor": "#f9f9f9" } }, "main": { "": { "width": "750rpx", "paddingTop": "30rpx", "paddingRight": "30rpx", "paddingBottom": "30rpx", "paddingLeft": "30rpx" } }, "tit": { "": { "width": "690rpx", "lineHeight": "30rpx", "lines": 2, "fontSize": "30rpx", "textAlign": "center", "paddingTop": "30rpx" } }, "tm": { "": { "color": "rgba(0,0,0,0.3)", "width": "690rpx", "lines": 1, "height": "80rpx", "lineHeight": "80rpx", "fontSize": "26rpx", "textAlign": "center", "borderBottomWidth": "0.5rpx", "borderBottomStyle": "solid", "borderBottomColor": "rgba(0,0,0,0.05)" } }, "nr": { "": { "width": "690rpx", "fontSize": "30rpx", "backgroundColor": "#ffffff" } } };
  var _sfc_main = {
    data() {
      return {
        id: "0",
        tit: "",
        tm: "",
        nr: ""
      };
    },
    onLoad(obj) {
      this.id = obj.id;
    },
    onReady() {
      this.get();
    },
    methods: {
      get() {
        let thi = this;
        uni.request({
          url: G_APP.ip + "appapi.php?to=newsxx",
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
            if (ret.data) {
              thi.tit = ret.data.newname;
              thi.tm = ret.data.times;
              let data = parseHtml(ret.data.newnr);
              thi.nr = data;
            }
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
    const _component_rich_text = (0, import_vue2.resolveComponent)("rich-text");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("list", { class: "list" }, [
      (0, import_vue2.createElementVNode)("cell", { class: "top" }, [
        (0, import_vue2.createElementVNode)(
          "u-text",
          { class: "tit" },
          (0, import_vue2.toDisplayString)($data.tit),
          1
          /* TEXT */
        ),
        (0, import_vue2.createElementVNode)(
          "u-text",
          { class: "tm" },
          "\u53D1\u5E03\u4E8E: " + (0, import_vue2.toDisplayString)($data.tm),
          1
          /* TEXT */
        )
      ]),
      (0, import_vue2.createElementVNode)("cell", { class: "main" }, [
        (0, import_vue2.createVNode)(_component_rich_text, {
          class: "nr",
          nodes: $data.nr
        }, null, 8, ["nodes"])
      ])
    ]);
  }
  var newsxx = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "F:/360MoveData/Users/abc/Desktop/\u5C0F\u718A\u79D8\u5B9D/pages/gm/newsxx.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/gm/newsxx";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    newsxx.mpType = "page";
    const app = Vue.createPageApp(newsxx, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...newsxx.styles || []]));
    app.mount("#root");
  }
})();
