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


(()=>{var _=Object.create;var c=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var y=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty;var v=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var B=(t,e,n,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of b(e))!S.call(t,o)&&o!==n&&c(t,o,{get:()=>e[o],enumerable:!(s=h(e,o))||s.enumerable});return t};var A=(t,e,n)=>(n=t!=null?_(y(t)):{},B(e||!t||!t.__esModule?c(n,"default",{value:t,enumerable:!0}):n,t));var m=v(($,f)=>{f.exports=Vue});var d=(t,e)=>{let n=t.__vccOpts||t;for(let[s,o]of e)n[s]=o;return n},w="http://xxmbao.bacms.cn/",a=uni.getWindowInfo(),I=uni.getDeviceInfo().deviceBrand,N=uni.getDeviceInfo().deviceId,V=uni.getAppBaseInfo().appName,k=uni.getAppBaseInfo().appVersionCode,C=uni.getAppBaseInfo().appVersion,P=0,T=0,z=Number(a.screenWidth),g=Number(a.statusBarHeight),l=Number(a.screenHeight);a.safeAreaInsets.bottom>0&&uni.setStorageSync("appb",a.safeAreaInsets.bottom);var u=Number(uni.getStorageSync("appb"))?Number(uni.getStorageSync("appb")):0,G=l-g-u,x={ip:w,appsys:I,appdvid:N,appV:k,appVs:C,appname:V,appt:g,appb:u,appw:z,apph:l,appmain_h:G,issoso_zt:P,isgggd_zt:T};var p=A(m()),H={m:{"":{width:"750rpx"}},tit:{"":{width:"750rpx",lineHeight:"30rpx",paddingLeft:"30rpx",paddingRight:"30rpx",lines:2,fontSize:"30rpx",textAlign:"center",paddingTop:"30rpx"}},tm:{"":{color:"rgba(0,0,0,0.3)",width:"750rpx",paddingLeft:"30rpx",paddingRight:"30rpx",lines:1,height:"80rpx",lineHeight:"80rpx",fontSize:"26rpx",textAlign:"center",borderBottomWidth:"0.5rpx",borderBottomStyle:"solid",borderBottomColor:"rgba(0,0,0,0.05)"}},nr:{"":{paddingLeft:"30rpx",paddingRight:"30rpx",fontSize:"30rpx",lineHeight:"40rpx",paddingTop:"30rpx",backgroundColor:"#ffffff"}}},D={data(){return{id:"0",tit:"",tm:"",nr:""}},onLoad(t){this.id=t.id},onReady(){this.get()},methods:{get(){let t=this;uni.request({url:x.ip+"appapi.php?to=sys",method:"GET",dataType:"json",enableCache:!0,defer:!0,data:{op:"sys_gg_xx",id:t.id},success:e=>{e.data&&(t.tit=e.data.name,t.tm=e.data.times,t.nr=e.data.nr)}})}},onNavigationBarButtonTap(t){t.index=="0"&&uni.navigateBack()}};function L(t,e,n,s,o,R){return(0,p.openBlock)(),(0,p.createElementBlock)("list",{class:"m"},[(0,p.createElementVNode)("cell",{style:{"background-color":"#f9f9f9"}},[(0,p.createElementVNode)("u-text",{class:"tit"},(0,p.toDisplayString)(o.tit),1),(0,p.createElementVNode)("u-text",{class:"tm"},"\u53D1\u5E03\u4E8E: "+(0,p.toDisplayString)(o.tm),1)]),(0,p.createElementVNode)("cell",null,[(0,p.createElementVNode)("u-text",{class:"nr"},(0,p.toDisplayString)(o.nr),1)])])}var r=d(D,[["render",L],["styles",[H]]]);var i=plus.webview.currentWebview();if(i){let t=parseInt(i.id),e="pages/user/msgxx",n={};try{n=JSON.parse(i.__query__)}catch(o){}r.mpType="page";let s=Vue.createPageApp(r,{$store:getApp({allowDefault:!0}).$store,__pageId:t,__pagePath:e,__pageQuery:n});s.provide("__globalStyles",Vue.useCssStyles([...__uniConfig.styles,...r.styles||[]])),s.mount("#root")}})();
