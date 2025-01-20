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


(()=>{var b=Object.create;var d=Object.defineProperty;var w=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,I=Object.prototype.hasOwnProperty;var S=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports);var A=(a,t,p,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of y(t))!I.call(a,r)&&r!==p&&d(a,r,{get:()=>t[r],enumerable:!(n=w(t,r))||n.enumerable});return a};var N=(a,t,p)=>(p=a!=null?b(v(a)):{},A(t||!a||!a.__esModule?d(p,"default",{value:a,enumerable:!0}):p,a));var f=S((F,_)=>{_.exports=Vue});var m=(a,t)=>{let p=a.__vccOpts||a;for(let[n,r]of t)p[n]=r;return p},B="http://xxmbao.bacms.cn/",s=uni.getWindowInfo(),C=uni.getDeviceInfo().deviceBrand,k=uni.getDeviceInfo().deviceId,z=uni.getAppBaseInfo().appName,V=uni.getAppBaseInfo().appVersionCode,W=uni.getAppBaseInfo().appVersion,D=0,T=0,L=Number(s.screenWidth),u=Number(s.statusBarHeight),x=Number(s.screenHeight);s.safeAreaInsets.bottom>0&&uni.setStorageSync("appb",s.safeAreaInsets.bottom);var h=Number(uni.getStorageSync("appb"))?Number(uni.getStorageSync("appb")):0,P=x-u-h,o={ip:B,appsys:C,appdvid:k,appV:V,appVs:W,appname:z,appt:u,appb:h,appw:L,apph:x,appmain_h:P,issoso_zt:D,isgggd_zt:T};var e=N(f()),j={nodata:{"":{width:"750rpx",height:"600rpx",flexDirection:"column",flexWrap:"nowrap",justifyContent:"center",alignItems:"center"}},nodata_i:{"":{width:"400rpx",height:"300rpx"}},m:{"":{width:"750rpx"}},list:{"":{width:"750rpx",paddingTop:"30rpx",paddingLeft:"30rpx",paddingRight:"30rpx",paddingBottom:"30rpx"}},list_b:{"":{width:"750rpx",height:"30rpx"}},gm:{"":{width:"690rpx",height:"130rpx",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between",alignItems:"center"}},gm_i:{"":{width:"130rpx",height:"130rpx",borderRadius:"20rpx"}},gm_c:{"":{width:"450rpx",paddingLeft:"20rpx",flexDirection:"column",flexWrap:"nowrap",justifyContent:"center",alignItems:"flex-start"}},gm_c_t:{"":{width:"330rpx",height:"43rpx",lines:1,lineHeight:"43rpx",fontSize:"30rpx",fontWeight:"bold",paddingRight:"20rpx",color:"rgba(0,0,0,0.8)"}},gm_c_c:{"":{height:"43rpx",lineHeight:"50rpx",fontSize:"24rpx",color:"rgba(0,0,0,0.5)"}},gm_c_b:{"":{lines:1,height:"43rpx",lineHeight:"43rpx",fontSize:"24rpx",color:"rgba(0,0,0,0.5)"}},gm_r:{"":{marginTop:"30rpx",width:"100rpx",borderRadius:"15rpx",height:"60rpx",lineHeight:"60rpx",textAlign:"center",fontSize:"24rpx",backgroundImage:"linear-gradient(to top,#ffc30c,#ffda08)"}}},H={data(){return{ip:o.ip,appb:o.appb,gmlist:[],pag:0,zpag:1}},onLoad(){},onReady(){this.get(1)},methods:{opgm(a){uni.navigateTo({url:"../../pages/gm/gmxx?id="+a})},moerdata(){this.get(2)},get(a){let t=this,p=Number(t.pag)+1;t.pag=p,p<=t.zpag&&uni.request({url:o.ip+"appapi.php?to=gm-ph",method:"GET",dataType:"json",enableCache:!0,defer:!0,data:{phlist:"go",pages:p},success:n=>{n.data.data?(uni.hideLoading(),a==1&&(t.gmlist=n.data.data,t.zpag=n.data.pagenum,uni.stopPullDownRefresh()),a==2&&(t.gmlist=t.gmlist.concat(n.data.data))):(t.gmlist=[],uni.hideLoading())}})}},onNavigationBarButtonTap(a){a.index==0&&uni.navigateTo({url:"../../pages/user/dow"})}};function R(a,t,p,n,r,c){return(0,e.openBlock)(),(0,e.createElementBlock)("list",{class:"m",onLoadmore:t[0]||(t[0]=(...i)=>c.moerdata&&c.moerdata(...i))},[r.gmlist?((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,{key:0},(0,e.renderList)(r.gmlist,(i,G)=>((0,e.openBlock)(),(0,e.createElementBlock)("cell",{class:"list",key:i.id,onClick:q=>c.opgm(i.id)},[(0,e.createElementVNode)("view",{class:"gm",renderWhole:!0},[(0,e.createElementVNode)("u-image",{class:"gm_i",src:r.ip+i.gmlogo},null,8,["src"]),(0,e.createElementVNode)("view",{renderWhole:!0,class:"gm_c"},[(0,e.createElementVNode)("u-text",{class:"gm_c_t"},(0,e.toDisplayString)(i.gmname),1),(0,e.createElementVNode)("u-text",{class:"gm_c_c"},"\u7C7B\u578B\uFF1A "+(0,e.toDisplayString)(i.gmbq),1),(0,e.createElementVNode)("u-text",{class:"gm_c_b"},(0,e.toDisplayString)(i.gmjj),1)]),(0,e.createElementVNode)("u-text",{class:"gm_r"},"\u4E0B\u8F7D")])],8,["onClick"]))),128)):(0,e.createCommentVNode)("",!0),r.gmlist==""?((0,e.openBlock)(),(0,e.createElementBlock)("cell",{key:1,class:"nodata"},[(0,e.createElementVNode)("u-image",{class:"nodata_i",src:"/static/nodata.png"})])):(0,e.createCommentVNode)("",!0)],32)}var g=m(H,[["render",R],["styles",[j]]]);var l=plus.webview.currentWebview();if(l){let a=parseInt(l.id),t="pages/gm/gmtop",p={};try{p=JSON.parse(l.__query__)}catch(r){}g.mpType="page";let n=Vue.createPageApp(g,{$store:getApp({allowDefault:!0}).$store,__pageId:a,__pagePath:t,__pageQuery:p});n.provide("__globalStyles",Vue.useCssStyles([...__uniConfig.styles,...g.styles||[]])),n.mount("#root")}})();
