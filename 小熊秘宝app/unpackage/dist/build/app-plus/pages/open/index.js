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


(()=>{var b=Object.create;var m=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var I=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty;var S=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var A=(e,t,s,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of y(t))!w.call(e,a)&&a!==s&&m(e,a,{get:()=>t[a],enumerable:!(o=v(t,a))||o.enumerable});return e};var B=(e,t,s)=>(s=e!=null?b(I(e)):{},A(t||!e||!e.__esModule?m(s,"default",{value:e,enumerable:!0}):s,e));var h=S((j,x)=>{x.exports=Vue});var g=(e,t)=>{let s=e.__vccOpts||e;for(let[o,a]of t)s[o]=a;return s},k="http://xxmbao.bacms.cn/",p=uni.getWindowInfo(),N=uni.getDeviceInfo().deviceBrand,T=uni.getDeviceInfo().deviceId,V=uni.getAppBaseInfo().appName,C=uni.getAppBaseInfo().appVersionCode,P=uni.getAppBaseInfo().appVersion,z=0,G=0,q=Number(p.screenWidth),d=Number(p.statusBarHeight),f=Number(p.screenHeight);p.safeAreaInsets.bottom>0&&uni.setStorageSync("appb",p.safeAreaInsets.bottom);var _=Number(uni.getStorageSync("appb"))?Number(uni.getStorageSync("appb")):0,D=f-d-_,c={ip:k,appsys:N,appdvid:T,appV:C,appVs:P,appname:V,appt:d,appb:_,appw:q,apph:f,appmain_h:D,issoso_zt:z,isgggd_zt:G};var n=B(h()),E={m:{"":{width:"750rpx",flex:1,position:"relative"}},tm:{"":{position:"absolute",right:"20rpx",top:"100rpx",width:"150rpx",height:"60rpx",lineHeight:"60rpx",color:"#ffffff",fontSize:"26rpx",backgroundColor:"rgba(0,0,0,0.5)",textAlign:"center",borderRadius:"30rpx",zIndex:9999}},img:{"":{position:"absolute",zIndex:1,flex:1}}},H={data(){return{img:"",imgtp:"",url:"",num:5,timer:""}},onReady(){this.get();let e=setTimeout(()=>{uni.navigateBack(),clearTimeout(e)},8e3)},methods:{clwin(){clearInterval(this.timer),uni.navigateBack()},gototm(){let e=this;e.timer=setInterval(()=>{e.num>0?e.num=e.num-1:(uni.navigateBack(),clearInterval(this.timer))},1e3)},opurl(){uni.navigateTo({url:"../../pages/gm/gmxx?id="+this.url})},get(){let e=this;uni.request({url:c.ip+"appapi.php?to=appqd",method:"GET",dataType:"json",enableCache:!0,defer:!0,data:{syspt:"go"},success:t=>{if(t.data){e.img=c.ip+t.data.imgurl,e.url=t.data.urls,e.imgtp=t.data.imgtp;let s=setTimeout(()=>{e.gototm(),plus.navigator.closeSplashscreen(),clearTimeout(s)},500)}}})}}};function W(e,t,s,o,a,i){return(0,n.openBlock)(),(0,n.createElementBlock)("list",null,[(0,n.createElementVNode)("cell",{class:"m"},[(0,n.createElementVNode)("u-image",{class:"img",src:a.img,onClick:t[0]||(t[0]=(...l)=>i.opurl&&i.opurl(...l)),mode:"aspectFill"},null,8,["src"]),(0,n.createElementVNode)("u-text",{class:"tm",onClick:t[1]||(t[1]=(...l)=>i.clwin&&i.clwin(...l))},(0,n.toDisplayString)(a.num)+" \u8DF3\u8FC7",1)])])}var r=g(H,[["render",W],["styles",[E]]]);var u=plus.webview.currentWebview();if(u){let e=parseInt(u.id),t="pages/open/index",s={};try{s=JSON.parse(u.__query__)}catch(a){}r.mpType="page";let o=Vue.createPageApp(r,{$store:getApp({allowDefault:!0}).$store,__pageId:e,__pagePath:t,__pageQuery:s});o.provide("__globalStyles",Vue.useCssStyles([...__uniConfig.styles,...r.styles||[]])),o.mount("#root")}})();
