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


(()=>{var b=Object.create;var g=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,I=Object.prototype.hasOwnProperty;var S=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var A=(t,e,a,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of w(e))!I.call(t,n)&&n!==a&&g(t,n,{get:()=>e[n],enumerable:!(s=y(e,n))||s.enumerable});return t};var B=(t,e,a)=>(a=t!=null?b(v(t)):{},A(e||!t||!t.__esModule?g(a,"default",{value:t,enumerable:!0}):a,t));var f=S((O,_)=>{_.exports=Vue});var u=(t,e)=>{let a=t.__vccOpts||t;for(let[s,n]of e)a[s]=n;return a},C="http://xxmbao.bacms.cn/",o=uni.getWindowInfo(),N=uni.getDeviceInfo().deviceBrand,V=uni.getDeviceInfo().deviceId,z=uni.getAppBaseInfo().appName,k=uni.getAppBaseInfo().appVersionCode,D=uni.getAppBaseInfo().appVersion,P=0,W=0,G=Number(o.screenWidth),d=Number(o.statusBarHeight),x=Number(o.screenHeight);o.safeAreaInsets.bottom>0&&uni.setStorageSync("appb",o.safeAreaInsets.bottom);var m=Number(uni.getStorageSync("appb"))?Number(uni.getStorageSync("appb")):0,$=x-d-m,r={ip:C,appsys:N,appdvid:V,appV:k,appVs:D,appname:z,appt:d,appb:m,appw:G,apph:x,appmain_h:$,issoso_zt:P,isgggd_zt:W};var p=B(f()),H={m:{"":{width:"750rpx"}},ml:{"":{flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between",alignItems:"center",width:"750rpx",borderRadius:"20rpx",height:"120rpx"}},li:{"":{flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between",alignItems:"center",width:"750rpx",height:"120rpx",borderBottomWidth:"0.5rpx",borderBottomStyle:"solid",borderBottomColor:"rgba(0,0,0,0.05)"}},li_l:{"":{width:"490rpx",height:"50rpx",lineHeight:"50rpx",lines:1,fontSize:"26rpx",paddingLeft:"30rpx",color:"rgba(0,0,0,0.5)"}},li_r:{"":{width:"150rpx",height:"50rpx",lineHeight:"50rpx",fontSize:"26rpx",fontFamily:"iconfont",textAlign:"center"}}},T={data(){return{ip:r.ip,appt:r.appt,appb:r.appb,list:[],pag:0,zpag:1}},onReady(){this.get(1)},methods:{openxx(t){uni.navigateTo({url:"../user/msgxx?id="+t})},get(t){let e=this,a=Number(e.pag)+1;e.pag=a,a<=e.zpag&&uni.request({url:r.ip+"appapi.php?to=sys",method:"GET",dataType:"json",enableCache:!0,defer:!0,data:{pages:a},success:s=>{s.data.data?(t==1&&(e.list=s.data.data,e.zpag=s.data.pagenum),t==2&&(e.list=e.list.concat(s.data.data))):(e.list=[],uni.hideLoading())}})}}};function j(t,e,a,s,n,h){return(0,p.openBlock)(),(0,p.createElementBlock)("list",{class:"m"},[((0,p.openBlock)(!0),(0,p.createElementBlock)(p.Fragment,null,(0,p.renderList)(n.list,(c,E)=>((0,p.openBlock)(),(0,p.createElementBlock)("cell",{class:"ml",key:c.id,onClick:L=>h.openxx(c.id)},[(0,p.createElementVNode)("view",{class:"li"},[(0,p.createElementVNode)("u-text",{class:"li_l"},(0,p.toDisplayString)(c.ggtp),1),(0,p.createElementVNode)("u-text",{class:"li_r"},"\u67E5\u770B\u8BE6\u7EC6 \uE630")])],8,["onClick"]))),128))])}var i=u(T,[["render",j],["styles",[H]]]);var l=plus.webview.currentWebview();if(l){let t=parseInt(l.id),e="pages/user/msg",a={};try{a=JSON.parse(l.__query__)}catch(n){}i.mpType="page";let s=Vue.createPageApp(i,{$store:getApp({allowDefault:!0}).$store,__pageId:t,__pagePath:e,__pageQuery:a});s.provide("__globalStyles",Vue.useCssStyles([...__uniConfig.styles,...i.styles||[]])),s.mount("#root")}})();
