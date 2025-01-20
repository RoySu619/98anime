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


(()=>{var w=Object.create;var g=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty;var z=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);var A=(a,e,s,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let p of y(e))!S.call(a,p)&&p!==s&&g(a,p,{get:()=>e[p],enumerable:!(n=b(e,p))||n.enumerable});return a};var I=(a,e,s)=>(s=a!=null?w(v(a)):{},A(e||!a||!a.__esModule?g(s,"default",{value:a,enumerable:!0}):s,a));var m=z((F,h)=>{h.exports=Vue});var u=(a,e)=>{let s=a.__vccOpts||a;for(let[n,p]of e)s[n]=p;return s},N="http://xxmbao.bacms.cn/",i=uni.getWindowInfo(),k=uni.getDeviceInfo().deviceBrand,B=uni.getDeviceInfo().deviceId,C=uni.getAppBaseInfo().appName,V=uni.getAppBaseInfo().appVersionCode,L=uni.getAppBaseInfo().appVersion,P=0,T=0,W=Number(i.screenWidth),x=Number(i.statusBarHeight),f=Number(i.screenHeight);i.safeAreaInsets.bottom>0&&uni.setStorageSync("appb",i.safeAreaInsets.bottom);var _=Number(uni.getStorageSync("appb"))?Number(uni.getStorageSync("appb")):0,D=f-x-_,r={ip:N,appsys:k,appdvid:B,appV:V,appVs:L,appname:C,appt:x,appb:_,appw:W,apph:f,appmain_h:D,issoso_zt:P,isgggd_zt:T};var t=I(m()),G={nodata:{"":{width:"750rpx",height:"600rpx",flexDirection:"column",flexWrap:"nowrap",justifyContent:"center",alignItems:"center"}},nodata_i:{"":{width:"400rpx",height:"300rpx"}},m:{"":{width:"750rpx"}},list:{"":{width:"750rpx",paddingLeft:"30rpx",paddingTop:"30rpx"}},list_b:{"":{width:"750rpx",height:"30rpx"}},news:{"":{width:"690rpx",paddingTop:"20rpx",paddingRight:"20rpx",paddingBottom:"20rpx",paddingLeft:"20rpx",backgroundColor:"#ffffff",borderRadius:"10rpx"}},news_t:{"":{width:"650rpx",height:"80rpx",lineHeight:"70rpx",lines:1,textAlign:"center",fontSize:"30rpx",fontWeight:"bold",color:"rgba(0,0,0,0.8)"}},news_c:{"":{width:"650rpx",lines:3,textOverflow:"ellipsis",fontSize:"24rpx",color:"rgba(0,0,0,0.5)",paddingBottom:"20rpx"}},news_b:{"":{width:"650rpx",height:"43rpx",lineHeight:"43rpx",fontSize:"24rpx",textAlign:"center",color:"rgba(0,0,0,0.5)"}}},j={data(){return{ip:r.ip,appb:r.appb,list:[],pag:0,zpag:1}},onLoad(){},onReady(){this.get(1)},methods:{opzxxx(a){uni.navigateTo({url:"../../pages/gm/newsxx?id="+a})},moerdata(){this.get(2)},get(a){let e=this,s=Number(e.pag)+1;e.pag=s,s<=e.zpag&&uni.request({url:r.ip+"appapi.php?to=news",method:"GET",dataType:"json",enableCache:!0,defer:!0,data:{nelist:"go",pages:s},success:n=>{n.data.data?(uni.hideLoading(),a==1&&(e.list=n.data.data,e.zpag=n.data.pagenum),a==2&&(e.list=e.list.concat(n.data.data))):(e.list=[],uni.hideLoading())}})}}};function H(a,e,s,n,p,l){return(0,t.openBlock)(),(0,t.createElementBlock)("list",{class:"m",onLoadmore:e[0]||(e[0]=(...o)=>l.moerdata&&l.moerdata(...o))},[p.list?((0,t.openBlock)(!0),(0,t.createElementBlock)(t.Fragment,{key:0},(0,t.renderList)(p.list,(o,E)=>((0,t.openBlock)(),(0,t.createElementBlock)("cell",{class:"list",key:o.id,onClick:O=>l.opzxxx(o.id)},[(0,t.createElementVNode)("view",{class:"news",renderWhole:!0},[(0,t.createElementVNode)("u-text",{class:"news_t"},(0,t.toDisplayString)(o.zxname),1),(0,t.createElementVNode)("u-text",{class:"news_c"},(0,t.toDisplayString)(o.zxjj),1),(0,t.createElementVNode)("u-text",{class:"news_b"},(0,t.toDisplayString)(o.times),1)])],8,["onClick"]))),128)):(0,t.createCommentVNode)("",!0),(0,t.createElementVNode)("cell",{class:"list_b"}),p.list==""?((0,t.openBlock)(),(0,t.createElementBlock)("cell",{key:1,class:"nodata"},[(0,t.createElementVNode)("u-image",{class:"nodata_i",src:"/static/nodata.png"})])):(0,t.createCommentVNode)("",!0)],32)}var c=u(j,[["render",H],["styles",[G]]]);var d=plus.webview.currentWebview();if(d){let a=parseInt(d.id),e="pages/gm/news",s={};try{s=JSON.parse(d.__query__)}catch(p){}c.mpType="page";let n=Vue.createPageApp(c,{$store:getApp({allowDefault:!0}).$store,__pageId:a,__pagePath:e,__pageQuery:s});n.provide("__globalStyles",Vue.useCssStyles([...__uniConfig.styles,...c.styles||[]])),n.mount("#root")}})();
