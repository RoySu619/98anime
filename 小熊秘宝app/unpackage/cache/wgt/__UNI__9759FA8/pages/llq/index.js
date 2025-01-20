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


(()=>{var b=Object.create;var c=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var w=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var B=(e,t,s,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of v(t))!y.call(e,o)&&o!==s&&c(e,o,{get:()=>t[o],enumerable:!(n=h(t,o))||n.enumerable});return e};var I=(e,t,s)=>(s=e!=null?b(x(e)):{},B(t||!e||!e.__esModule?c(s,"default",{value:e,enumerable:!0}):s,e));var d=w((O,f)=>{f.exports=Vue});var l=(e,t)=>{let s=e.__vccOpts||e;for(let[n,o]of t)s[n]=o;return s},A="http://xxmbao.bacms.cn/",p=uni.getWindowInfo(),N=uni.getDeviceInfo().deviceBrand,S=uni.getDeviceInfo().deviceId,V=uni.getAppBaseInfo().appName,P=uni.getAppBaseInfo().appVersionCode,T=uni.getAppBaseInfo().appVersion,k=0,$=0,D=Number(p.screenWidth),u=Number(p.statusBarHeight),_=Number(p.screenHeight);p.safeAreaInsets.bottom>0&&uni.setStorageSync("appb",p.safeAreaInsets.bottom);var g=Number(uni.getStorageSync("appb"))?Number(uni.getStorageSync("appb")):0,G=_-u-g,m={ip:A,appsys:N,appdvid:S,appV:P,appVs:T,appname:V,appt:u,appb:g,appw:D,apph:_,appmain_h:G,issoso_zt:k,isgggd_zt:$};var a=I(d()),C={main:{"":{flex:1}}},W={data(){return{tit:"",url:""}},onLoad(e){if(this.tit=e.tit,e.pd==2){let t=/@@@/g,s=e.url.replace(t,"&");this.url=s}else this.url=m.ip+"mobile.php?to=help&op="+e.url;uni.setNavigationBarTitle({title:this.tit})},methods:{},onNavigationBarButtonTap(e){e.index==0&&uni.navigateBack()}};function q(e,t,s,n,o,z){return(0,a.openBlock)(),(0,a.createElementBlock)("scroll-view",{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true",style:{flexDirection:"column"}},[(0,a.createElementVNode)("u-web-view",{class:"main",src:o.url,updateTitle:""},null,8,["src"])])}var r=l(W,[["render",q],["styles",[C]]]);var i=plus.webview.currentWebview();if(i){let e=parseInt(i.id),t="pages/llq/index",s={};try{s=JSON.parse(i.__query__)}catch(o){}r.mpType="page";let n=Vue.createPageApp(r,{$store:getApp({allowDefault:!0}).$store,__pageId:e,__pagePath:t,__pageQuery:s});n.provide("__globalStyles",Vue.useCssStyles([...__uniConfig.styles,...r.styles||[]])),n.mount("#root")}})();
