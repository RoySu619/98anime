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


(()=>{var w=Object.create;var x=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var T=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty;var C=(t,i)=>()=>(i||t((i={exports:{}}).exports,i),i.exports);var I=(t,i,l,o)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of v(i))!S.call(t,s)&&s!==l&&x(t,s,{get:()=>i[s],enumerable:!(o=b(i,s))||o.enumerable});return t};var k=(t,i,l)=>(l=t!=null?w(T(t)):{},I(i||!t||!t.__esModule?x(l,"default",{value:t,enumerable:!0}):l,t));var y=C((E,h)=>{h.exports=Vue});var c=(t,i)=>{let l=t.__vccOpts||t;for(let[o,s]of i)l[o]=s;return l},B="http://xxmbao.bacms.cn/",r=uni.getWindowInfo(),A=uni.getDeviceInfo().deviceBrand,q=uni.getDeviceInfo().deviceId,L=uni.getAppBaseInfo().appName,H=uni.getAppBaseInfo().appVersionCode,N=uni.getAppBaseInfo().appVersion,R=0,V=0,D=Number(r.screenWidth),g=Number(r.statusBarHeight),f=Number(r.screenHeight);r.safeAreaInsets.bottom>0&&uni.setStorageSync("appb",r.safeAreaInsets.bottom);var m=Number(uni.getStorageSync("appb"))?Number(uni.getStorageSync("appb")):0,P=f-g-m,p={ip:B,appsys:A,appdvid:q,appV:H,appVs:N,appname:L,appt:g,appb:m,appw:D,apph:f,appmain_h:P,issoso_zt:R,isgggd_zt:V};var e=k(y()),W={top:{"":{height:"50rpx"}},li:{"":{paddingLeft:"60rpx",paddingRight:"60rpx",justifyContent:"flex-start",alignItems:"center",flexDirection:"row",flexWrap:"nowrap"}},pas:{"":{paddingTop:"20rpx",paddingLeft:"60rpx",paddingRight:"60rpx",justifyContent:"flex-start",alignItems:"center",flexDirection:"row",flexWrap:"nowrap"}},pas_ys:{"":{paddingLeft:"60rpx",paddingRight:"60rpx",height:"100rpx",justifyContent:"flex-start",alignItems:"center",flexDirection:"row",flexWrap:"nowrap"}},txt_url:{"":{color:"#ffda08",height:"100rpx",lineHeight:"100rpx",fontSize:"26rpx",paddingLeft:"10rpx",paddingRight:"10rpx"}},txt_txt:{"":{height:"100rpx",lineHeight:"100rpx",fontSize:"26rpx"}},txt_txt_tis:{"":{fontSize:"26rpx",paddingLeft:"5rpx",color:"#ffffff"}},li_tell:{"":{width:"630rpx",paddingTop:"20rpx",paddingRight:"20rpx",paddingBottom:"20rpx",paddingLeft:"20rpx",borderRadius:"50rpx",backgroundColor:"rgba(0,0,0,0.05)",justifyContent:"flex-start",alignItems:"center",flexDirection:"row",flexWrap:"nowrap"}},li_tell_l:{"":{fontFamily:"iconfont",width:"80rpx",height:"40rpx",lineHeight:"40rpx",textAlign:"center",fontSize:"40rpx"}},li_tell_gd:{"":{width:"80rpx",height:"40rpx"}},li_input:{"":{paddingLeft:"10rpx",width:"500rpx",height:"50rpx",fontSize:"28rpx",lineHeight:"50rpx"}},li_inputs:{"":{paddingLeft:"10rpx",width:"360rpx",height:"50rpx",fontSize:"28rpx",lineHeight:"50rpx"}},li_tell_x:{"":{width:"50rpx",height:"50rpx",paddingTop:"5rpx",paddingRight:"5rpx",paddingBottom:"5rpx",paddingLeft:"5rpx"}},li_tell_yzm:{"":{width:"150rpx",height:"50rpx",lineHeight:"50rpx",fontSize:"26rpx",textAlign:"center",color:"#d4b506"}},tis:{"":{width:"630rpx",height:"80rpx",lineHeight:"80rpx",fontSize:"26rpx",color:"rgba(255,255,255,0.8)"}},pot:{"":{width:"630rpx",height:"100rpx",lineHeight:"100rpx",borderRadius:"50rpx",backgroundColor:"#ffda08",textAlign:"center",fontSize:"30rpx"}},oppas:{"":{marginTop:"20rpx",width:"630rpx",borderWidth:"0.5rpx",borderStyle:"solid",borderColor:"rgba(255,255,255,0.1)",backgroundColor:"rgba(255,255,255,0.1)",color:"#ffffff",fontSize:"28rpx",height:"80rpx",lineHeight:"80rpx",borderRadius:"10rpx",textAlign:"center"}}},j={data(){return{myqdid:0,pas:"",tell:"",isxyzt:!1,yzm:"",yzmnumtm:"",yzmzt:!1,yzmnum:"\u83B7\u53D6\u9A8C\u8BC1\u7801",yzmnums:"60"}},onLoad(){let t=uni.getStorageSync("tgid");t&&(this.myqdid=t)},methods:{potdata(){uni.showLoading({title:"\u8BF7\u7A0D\u540E...",mask:!0}),uni.hideKeyboard();let t=this;t.isxyzt?t.pas&&t.tell&&t.yzm?uni.request({url:p.ip+"appapi.php?to=register",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},dataType:"json",enableCache:!1,defer:!1,data:{lregzc:"go",uname:t.tell,upass:t.pas,yzma:t.yzm,sbname:p.appdvid,qd:t.myqdid},success:i=>{let l=i.data[0];uni.hideLoading(),l==0&&uni.showToast({icon:"none",title:" \u8D26\u53F7\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A ",duration:2e3}),l==1&&uni.showToast({icon:"none",title:" \u8BF7\u8F93\u5165\u624B\u673A\u53F7\uFF01 ",duration:2e3}),l==3&&uni.showToast({icon:"none",title:" \u8BE5\u624B\u673A\u5DF2\u88AB\u6CE8\u518C\uFF01 ",duration:2e3}),l==2&&uni.showToast({icon:"none",title:" \u9A8C\u8BC1\u7801\u9519\u8BEF\u8BF7\u91CD\u8BD5\uFF01 ",duration:2e3}),l==66&&(setTimeout(()=>{uni.navigateBack({delta:1})},1e3),uni.showToast({icon:"none",title:" \u6CE8\u518C\u6210\u529F ",duration:2e3}))}}):t.tell==""?uni.showToast({icon:"none",title:" \u8BF7\u8F93\u5165\u767B\u5F55\u624B\u673A\u53F7 ",duration:2e3}):t.pas==""?uni.showToast({icon:"none",title:" \u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801 ",duration:2e3}):t.yzm==""&&uni.showToast({icon:"none",title:" \u8BF7\u8F93\u5165\u77ED\u606F\u9A8C\u8BC1\u7801 ",duration:2e3}):uni.showToast({icon:"none",title:" \u60A8\u672A\u540C\u610F\u7528\u6237\u534F\u8BAE,\u670D\u52A1\u534F\u8BAE,\u8BF7\u8BA4\u771F\u9605\u8BFB\u5E76\u52FE\u9009\u540C\u610F\u5168\u90E8\u534F\u8BAE ",duration:2e3})},getyzm(){let t=this;t.tell&&t.yzmzt==!1&&uni.request({url:p.ip+"appapi.php?to=seccode",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},dataType:"json",enableCache:!1,defer:!1,data:{yzma:"go",tell:t.tell},success:i=>{i.data.Message=="OK"?(t.yzm=i.data.code,t.gotopotzt=1,uni.hideLoading(),t.yzmzt=!0,t.setyzmnum(),uni.showToast({icon:"none",title:" \u83B7\u53D6\u9A8C\u8BC1\u7801\u6210\u529F ",duration:2e3})):uni.showToast({icon:"none",title:" \u8BF7\u6C42\u88AB\u9650\u5236\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01 ",duration:2e3})}})},setxyzt(){uni.hideKeyboard(),this.isxyzt==!1?this.isxyzt=!0:this.isxyzt=!1},opllq(t){t==1&&uni.navigateTo({url:"../../pages/llq/index?url=yszc&tit=\u9690\u79C1\u653F\u7B56&pd=1"}),t==2&&uni.navigateTo({url:"../../pages/llq/index?url=fwxy&tit=\u670D\u52A1\u534F\u8BAE&pd=1"})},setyzmnum(){this.yzmnumtm=setInterval(()=>{this.yzmnums=this.yzmnums-1,this.yzmnum=this.yzmnums+"s\u540E\u518D\u8BD5",this.yzmnums==1&&(clearInterval(this.yzmnumtm),this.yzmzt=!1,this.yzmnum="\u83B7\u53D6\u9A8C\u8BC1\u7801",this.yzmnums=60)},1e3)},inputtel(t){this.tell=t.detail.value},inputpas(t){this.pas=t.detail.value},inputtz(t){this.yzm=t.detail.value}},onNavigationBarButtonTap(t){t.index=="0"&&uni.navigateBack()}};function K(t,i,l,o,s,n){let z=(0,e.resolveComponent)("radio"),_=(0,e.resolveComponent)("label");return(0,e.openBlock)(),(0,e.createElementBlock)("list",null,[(0,e.createElementVNode)("cell",{class:"top"}),(0,e.createElementVNode)("cell",{class:"li"},[(0,e.createElementVNode)("u-text",{class:"tis"},"\u624B\u673A\u53F7")]),(0,e.createElementVNode)("cell",{class:"li"},[(0,e.createElementVNode)("view",{class:"li_tell"},[(0,e.createElementVNode)("u-text",{class:"li_tell_l"},"\uE7B2"),(0,e.createElementVNode)("u-input",{class:"li_input",value:s.tell,onInput:i[0]||(i[0]=(...a)=>n.inputtel&&n.inputtel(...a)),type:"text",maxlength:"11",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",confirmType:"next",controlled:"true",focus:"",autoBlur:"",holdKeyboard:"true"},null,40,["value"])])]),(0,e.createElementVNode)("cell",{class:"li"},[(0,e.createElementVNode)("u-text",{class:"tis"},"\u767B\u5F55\u5BC6\u7801\uFF08\u5BC6\u7801\u5141\u8BB8\u7279\u6B8A\u7B26\u53F7 .\uFF09")]),(0,e.createElementVNode)("cell",{class:"li"},[(0,e.createElementVNode)("view",{class:"li_tell"},[(0,e.createElementVNode)("u-text",{class:"li_tell_l"},"\uE7D0"),(0,e.createElementVNode)("u-input",{class:"li_input",value:s.pas,onInput:i[1]||(i[1]=(...a)=>n.inputpas&&n.inputpas(...a)),type:"text",password:"true",maxlength:"18",placeholder:"\u8BF7\u8BBE\u7F6E\u5BC6\u7801",confirmType:"next",controlled:"true",autoBlur:"",holdKeyboard:"true"},null,40,["value"])])]),(0,e.createElementVNode)("cell",{class:"li"},[(0,e.createElementVNode)("u-text",{class:"tis"},"\u9A8C\u8BC1\u7801")]),(0,e.createElementVNode)("cell",{class:"li"},[(0,e.createElementVNode)("view",{class:"li_tell"},[(0,e.createElementVNode)("u-text",{class:"li_tell_l"},"\uE7EB"),(0,e.createElementVNode)("u-input",{class:"li_inputs",value:s.yzm,onInput:i[2]||(i[2]=(...a)=>n.inputtz&&n.inputtz(...a)),type:"number",maxlength:"6",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",confirmType:"next",controlled:"true",autoBlur:"",holdKeyboard:"true"},null,40,["value"]),(0,e.createElementVNode)("u-text",{class:"li_tell_yzm",onClick:i[3]||(i[3]=a=>n.getyzm())},(0,e.toDisplayString)(s.yzmnum),1)])]),(0,e.createElementVNode)("cell",{class:"pas_ys"},[(0,e.createVNode)(_,{class:"label",onClick:n.setxyzt},{default:(0,e.withCtx)(()=>[(0,e.createVNode)(z,{value:"0",checked:s.isxyzt,style:{transform:"scale(0.7)"},color:"#ff008a",disabled:""},null,8,["checked"])]),_:1},8,["onClick"]),(0,e.createElementVNode)("u-text",{class:"txt_txt",onClick:i[4]||(i[4]=(...a)=>n.setxyzt&&n.setxyzt(...a))},"\u5DF2\u9605\u8BFB\u5E76\u540C\u610F"),(0,e.createElementVNode)("u-text",{class:"txt_url",onClick:i[5]||(i[5]=a=>n.opllq(2))},"\u7528\u6237\u534F\u8BAE"),(0,e.createElementVNode)("u-text",{class:"txt_txt",onClick:i[6]||(i[6]=(...a)=>n.setxyzt&&n.setxyzt(...a))},"\u548C"),(0,e.createElementVNode)("u-text",{class:"txt_url",onClick:i[7]||(i[7]=a=>n.opllq(1))},"\u9690\u79C1\u653F\u7B56")]),(0,e.createElementVNode)("cell",{class:"li"},[(0,e.createElementVNode)("u-text",{class:"tis"})]),(0,e.createElementVNode)("cell",{class:"li"},[(0,e.createElementVNode)("u-text",{class:"pot",onClick:i[8]||(i[8]=(...a)=>n.potdata&&n.potdata(...a))},"\u786E\u5B9A\u6CE8\u518C")])])}var u=c(j,[["render",K],["styles",[W]]]);var d=plus.webview.currentWebview();if(d){let t=parseInt(d.id),i="pages/login/login_zc",l={};try{l=JSON.parse(d.__query__)}catch(s){}u.mpType="page";let o=Vue.createPageApp(u,{$store:getApp({allowDefault:!0}).$store,__pageId:t,__pagePath:i,__pageQuery:l});o.provide("__globalStyles",Vue.useCssStyles([...__uniConfig.styles,...u.styles||[]])),o.mount("#root")}})();
