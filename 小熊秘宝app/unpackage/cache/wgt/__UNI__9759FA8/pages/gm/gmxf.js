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


(()=>{var b=Object.create;var d=Object.defineProperty;var w=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty;var C=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var I=(i,e,a,p)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of y(e))!k.call(i,r)&&r!==a&&d(i,r,{get:()=>e[r],enumerable:!(p=w(e,r))||p.enumerable});return i};var S=(i,e,a)=>(a=i!=null?b(v(i)):{},I(e||!i||!i.__esModule?d(a,"default",{value:i,enumerable:!0}):a,i));var _=C((F,h)=>{h.exports=Vue});var u=(i,e)=>{let a=i.__vccOpts||i;for(let[p,r]of e)a[p]=r;return a},A="http://xxmbao.bacms.cn/",o=uni.getWindowInfo(),z=uni.getDeviceInfo().deviceBrand,N=uni.getDeviceInfo().deviceId,W=uni.getAppBaseInfo().appName,B=uni.getAppBaseInfo().appVersionCode,D=uni.getAppBaseInfo().appVersion,V=0,T=0,H=Number(o.screenWidth),x=Number(o.statusBarHeight),m=Number(o.screenHeight);o.safeAreaInsets.bottom>0&&uni.setStorageSync("appb",o.safeAreaInsets.bottom);var f=Number(uni.getStorageSync("appb"))?Number(uni.getStorageSync("appb")):0,L=m-x-f,g={ip:A,appsys:z,appdvid:N,appV:B,appVs:D,appname:W,appt:x,appb:f,appw:H,apph:m,appmain_h:L,issoso_zt:V,isgggd_zt:T};var t=S(_()),P={nodata:{"":{width:"750rpx",height:"600rpx",flexDirection:"column",flexWrap:"nowrap",justifyContent:"center",alignItems:"center"}},nodata_i:{"":{width:"400rpx",height:"300rpx"}},tp:{"":{width:"750rpx",height:"100rpx",flexDirection:"row",flexWrap:"nowrap",justifyContent:"center",alignItems:"center",backgroundColor:"#ffda08"}},tpli:{"":{width:"200rpx",height:"100rpx",textAlign:"center",fontSize:"30rpx",flexDirection:"column",flexWrap:"nowrap",justifyContent:"flex-start",alignItems:"center"}},tpli_t:{"":{width:"200rpx",height:"80rpx",lineHeight:"100rpx",textAlign:"center",fontSize:"30rpx"}},tpli_b:{"":{width:"50rpx",height:"10rpx",backgroundColor:"#ffffff",borderRadius:"5rpx"}},m:{"":{width:"750rpx"}},list:{"":{width:"750rpx",paddingTop:"30rpx",paddingLeft:"30rpx",paddingRight:"30rpx",paddingBottom:"30rpx"}},list_b:{"":{width:"750rpx",height:"30rpx"}},gm:{"":{width:"690rpx",height:"130rpx",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between",alignItems:"center"}},gm_i:{"":{width:"130rpx",height:"130rpx",borderRadius:"20rpx"}},gm_c:{"":{width:"450rpx",paddingLeft:"20rpx",flexDirection:"column",flexWrap:"nowrap",justifyContent:"center",alignItems:"flex-start"}},gm_c_t:{"":{width:"330rpx",height:"43rpx",lines:1,lineHeight:"43rpx",fontSize:"30rpx",fontWeight:"bold",paddingRight:"20rpx",color:"rgba(0,0,0,0.8)"}},gm_c_c:{"":{height:"43rpx",lineHeight:"50rpx",fontSize:"24rpx",color:"rgba(0,0,0,0.5)"}},gm_c_b:{"":{lines:1,height:"43rpx",lineHeight:"43rpx",fontSize:"24rpx",color:"rgba(0,0,0,0.5)"}},gm_r:{"":{marginTop:"30rpx",width:"100rpx",borderRadius:"15rpx",height:"60rpx",lineHeight:"60rpx",textAlign:"center",fontSize:"24rpx",backgroundImage:"linear-gradient(to top,#ffc30c,#ffda08)"}}},R={data(){return{ip:g.ip,appb:g.appb,gmlist:[],pag:0,zpag:1,tabid:1}},onLoad(){},onReady(){this.get(1)},methods:{opgm(i){uni.navigateTo({url:"../../pages/gm/gmxx?id="+i})},settab(i){this.tabid!=i&&(this.tabid=i,this.pag=0,this.zpag=1,this.get(1))},moerdata(){this.get(2)},get(i){let e=this,a=Number(e.pag)+1;e.pag=a,a<=e.zpag&&uni.request({url:g.ip+"appapi.php?to=kaifu",method:"GET",dataType:"json",enableCache:!0,defer:!0,data:{op:"kaifu"+e.tabid,pages:a},success:p=>{p.data.data?(uni.hideLoading(),i==1&&(e.gmlist=p.data.data,e.zpag=p.data.pagenum,uni.stopPullDownRefresh()),i==2&&(e.gmlist=e.gmlist.concat(p.data.data))):(e.gmlist=[],uni.hideLoading())}})}},onNavigationBarButtonTap(i){i.index==0&&uni.navigateTo({url:"../../pages/user/dow"})}};function j(i,e,a,p,r,s){return(0,t.openBlock)(),(0,t.createElementBlock)("view",null,[(0,t.createElementVNode)("view",{class:"tp"},[(0,t.createElementVNode)("view",{class:"tpli",onClick:e[0]||(e[0]=n=>s.settab(1))},[(0,t.createElementVNode)("u-text",{class:"tpli_t"},"\u4ECA\u65E5\u65B0\u670D"),r.tabid==1?((0,t.openBlock)(),(0,t.createElementBlock)("u-text",{key:0,class:"tpli_b"})):(0,t.createCommentVNode)("",!0)]),(0,t.createElementVNode)("view",{class:"tpli",onClick:e[1]||(e[1]=n=>s.settab(2))},[(0,t.createElementVNode)("u-text",{class:"tpli_t"},"\u660E\u65E5\u65B0\u670D"),r.tabid==2?((0,t.openBlock)(),(0,t.createElementBlock)("u-text",{key:0,class:"tpli_b"})):(0,t.createCommentVNode)("",!0)]),(0,t.createElementVNode)("view",{class:"tpli",onClick:e[2]||(e[2]=n=>s.settab(3))},[(0,t.createElementVNode)("u-text",{class:"tpli_t"},"\u5386\u53F2\u8BB0\u5F55"),r.tabid==3?((0,t.openBlock)(),(0,t.createElementBlock)("u-text",{key:0,class:"tpli_b"})):(0,t.createCommentVNode)("",!0)])]),(0,t.createElementVNode)("list",{class:"m",onLoadmore:e[3]||(e[3]=(...n)=>s.moerdata&&s.moerdata(...n))},[r.gmlist?((0,t.openBlock)(!0),(0,t.createElementBlock)(t.Fragment,{key:0},(0,t.renderList)(r.gmlist,(n,G)=>((0,t.openBlock)(),(0,t.createElementBlock)("cell",{class:"list",key:n.id,onClick:E=>s.opgm(n.gid)},[(0,t.createElementVNode)("view",{class:"gm",renderWhole:!0},[(0,t.createElementVNode)("u-image",{class:"gm_i",src:r.ip+n.gmlogo},null,8,["src"]),(0,t.createElementVNode)("view",{renderWhole:!0,class:"gm_c"},[(0,t.createElementVNode)("u-text",{class:"gm_c_t"},(0,t.toDisplayString)(n.gmname),1),(0,t.createElementVNode)("u-text",{class:"gm_c_c"},"\u533A\u670D\uFF1A "+(0,t.toDisplayString)(n.xfname),1),(0,t.createElementVNode)("u-text",{class:"gm_c_b"},"\u5F00\u670D\u65F6\u95F4\uFF1A"+(0,t.toDisplayString)(n.kftimes),1)]),(0,t.createElementVNode)("u-text",{class:"gm_r"},"\u4E0B\u8F7D")])],8,["onClick"]))),128)):(0,t.createCommentVNode)("",!0),r.gmlist==""?((0,t.openBlock)(),(0,t.createElementBlock)("cell",{key:1,class:"nodata"},[(0,t.createElementVNode)("u-image",{class:"nodata_i",src:"/static/nodata.png"})])):(0,t.createCommentVNode)("",!0)],32)])}var l=u(R,[["render",j],["styles",[P]]]);var c=plus.webview.currentWebview();if(c){let i=parseInt(c.id),e="pages/gm/gmxf",a={};try{a=JSON.parse(c.__query__)}catch(r){}l.mpType="page";let p=Vue.createPageApp(l,{$store:getApp({allowDefault:!0}).$store,__pageId:i,__pagePath:e,__pageQuery:a});p.provide("__globalStyles",Vue.useCssStyles([...__uniConfig.styles,...l.styles||[]])),p.mount("#root")}})();
