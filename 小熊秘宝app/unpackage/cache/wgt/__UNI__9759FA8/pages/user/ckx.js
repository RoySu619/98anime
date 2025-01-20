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


(()=>{var w=Object.create;var g=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var k=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty;var I=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports);var A=(a,t,p,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of v(t))!S.call(a,r)&&r!==p&&g(a,r,{get:()=>t[r],enumerable:!(i=y(t,r))||i.enumerable});return a};var C=(a,t,p)=>(p=a!=null?w(k(a)):{},A(t||!a||!a.__esModule?g(p,"default",{value:a,enumerable:!0}):p,a));var m=I((Y,h)=>{h.exports=Vue});var u=(a,t)=>{let p=a.__vccOpts||a;for(let[i,r]of t)p[i]=r;return p},z="http://xxmbao.bacms.cn/",n=uni.getWindowInfo(),B=uni.getDeviceInfo().deviceBrand,D=uni.getDeviceInfo().deviceId,L=uni.getAppBaseInfo().appName,N=uni.getAppBaseInfo().appVersionCode,V=uni.getAppBaseInfo().appVersion,R=0,T=0,E=Number(n.screenWidth),x=Number(n.statusBarHeight),_=Number(n.screenHeight);n.safeAreaInsets.bottom>0&&uni.setStorageSync("appb",n.safeAreaInsets.bottom);var f=Number(uni.getStorageSync("appb"))?Number(uni.getStorageSync("appb")):0,H=_-x-f,o={ip:z,appsys:B,appdvid:D,appV:N,appVs:V,appname:L,appt:x,appb:f,appw:E,apph:_,appmain_h:H,issoso_zt:R,isgggd_zt:T};var e=C(m()),P={m:{"":{width:"750rpx",paddingLeft:"30rpx",paddingRight:"30rpx",paddingTop:"30rpx"}},cell:{"":{width:"690rpx",paddingBottom:"30rpx"}},li:{"":{width:"690rpx",paddingTop:"20rpx",paddingRight:"20rpx",paddingBottom:"40rpx",paddingLeft:"20rpx",backgroundColor:"rgba(0,0,0,0.02)",borderRadius:"20rpx"}},li_t:{"":{width:"690rpx",height:"120rpx",flexDirection:"row",flexWrap:"nowrap",justifyContent:"flex-start",alignItems:"center"}},li_t_l:{"":{width:"120rpx",height:"120rpx",borderRadius:"20rpx"}},li_t_r:{"":{paddingLeft:"30rpx",width:"520rpx",height:"120rpx"}},li_t_r_t:{"":{width:"490rpx",height:"50rpx",lines:1,lineHeight:"50rpx",fontSize:"35rpx"}},li_t_r_b:{"":{width:"490rpx",height:"50rpx",lineHeight:"50rpx",fontSize:"26rpx",color:"rgba(0,0,0,0.5)"}},li_c:{"":{width:"650rpx",paddingLeft:"30rpx",paddingRight:"30rpx",textAlign:"center",height:"120rpx",lineHeight:"120rpx",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between",alignItems:"center",color:"rgba(0,0,0,0.5)"}},li_b:{"":{width:"600rpx",paddingLeft:"30rpx",paddingBottom:"30rpx"}},li_b_t:{"":{width:"650rpx",color:"rgba(0,0,0,0.5)",fontSize:"26rpx"}},li_a:{"":{width:"600rpx",marginLeft:"25rpx",height:"80rpx",lineHeight:"80rpx",fontSize:"30rpx",color:"#131220",backgroundColor:"#ffda08",textAlign:"center",borderRadius:"40rpx"}}},G={data(){return{ip:o.ip,appsys:o.appsys,list:[],pag:0,zpag:1}},onReady(){this.get(1)},methods:{fz(a,t){let p=this;a==1&&uni.setClipboardData({data:p.list[t].lbkey,success:function(){uni.showToast({icon:"none",title:" \u590D\u5236\u793C\u5305KEY\u6210\u529F! ",mask:!1,duration:1500})}}),a==2&&uni.setClipboardData({data:p.list[t].gmurl,success:function(){uni.showToast({icon:"none",title:" \u590D\u5236\u4E0B\u8F7D\u94FE\u63A5\u6210\u529F! ",mask:!1,duration:1500})}})},get(a){let t=this,p=t.pag+1;t.pag=p,p<=t.zpag&&uni.request({url:o.ip+"appapi.php?to=user&op=user-lblist",method:"GET",dataType:"json",enableCache:!0,defer:!0,data:{myuslb:"go",pages:p},success:i=>{i.data.data&&(a==1&&(t.zpag=i.data.pagenum,t.list=i.data.data),a==2&&(t.list=t.list.concat(i.data.data)))}})}}};function W(a,t,p,i,r,d){return(0,e.openBlock)(),(0,e.createElementBlock)("list",{class:"m",onLoadmore:t[0]||(t[0]=s=>d.get(2))},[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(r.list,(s,b)=>((0,e.openBlock)(),(0,e.createElementBlock)("cell",{class:"cell",key:s.id},[(0,e.createElementVNode)("view",{class:"li"},[(0,e.createElementVNode)("view",{class:"li_t"},[(0,e.createElementVNode)("u-image",{class:"li_t_l",src:r.ip+s.gmlogo},null,8,["src"]),(0,e.createElementVNode)("view",{class:"li_t_r"},[(0,e.createElementVNode)("u-text",{class:"li_t_r_t"},(0,e.toDisplayString)(s.gmname)+" - "+(0,e.toDisplayString)(s.lbname),1),(0,e.createElementVNode)("u-text",{class:"li_t_r_b"},"\u5230\u671F\u65F6\u95F4\uFF1A"+(0,e.toDisplayString)(s.lbtm),1)])]),(0,e.createElementVNode)("u-text",{class:"li_c"},"KEY: "+(0,e.toDisplayString)(s.lbkey),1),(0,e.createElementVNode)("u-text",{class:"li_a",onClick:$=>d.fz(1,b)},"\u590D\u5236KEY",8,["onClick"])])]))),128))],32)}var l=u(G,[["render",W],["styles",[P]]]);var c=plus.webview.currentWebview();if(c){let a=parseInt(c.id),t="pages/user/ckx",p={};try{p=JSON.parse(c.__query__)}catch(r){}l.mpType="page";let i=Vue.createPageApp(l,{$store:getApp({allowDefault:!0}).$store,__pageId:a,__pagePath:t,__pageQuery:p});i.provide("__globalStyles",Vue.useCssStyles([...__uniConfig.styles,...l.styles||[]])),i.mount("#root")}})();
