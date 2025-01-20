
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#FFFFFF","navigationBar":{"backgroundColor":"#FFFFFF","titleText":"","type":"default","titleColor":"#000000"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"native","appname":"小熊秘宝","splashscreen":{"alwaysShowBeforeRender":false,"autoclose":false},"compilerVersion":"3.98","entryPagePath":"pages/index/tab1","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"tabBar":{"position":"bottom","color":"#ddd","selectedColor":"#ffda08","borderStyle":"#ececec","blurEffect":"none","fontSize":"11px","iconWidth":"28px","spacing":"3px","height":"59px","backgroundColor":"#fff","iconfontSrc":"/static/iconfont.ttf","list":[{"pagePath":"pages/index/tab1","text":"首页","iconfont":{"color":"#ddd","fontSize":"26px","selectedColor":"#ffda08","text":"","selectedText":""}},{"pagePath":"pages/index/tab2","text":"分类","iconfont":{"color":"#ddd","fontSize":"26px","selectedColor":"#ffda08","text":"","selectedText":""}},{"pagePath":"pages/index/tab3","text":"礼包","iconfont":{"color":"#ddd","fontSize":"26px","selectedColor":"#ffda08","text":"","selectedText":""}},{"pagePath":"pages/index/tab4","text":"我的","iconfont":{"color":"#ddd","fontSize":"26px","selectedColor":"#ffda08","text":"","selectedText":""}}],"selectedIndex":0,"shown":true},"locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/index/tab1","meta":{"isQuit":true,"isEntry":true,"isTabBar":true,"tabBarIndex":0,"background":"#FFFFFF","enablePullDownRefresh":true,"titleNView":false,"navigationBar":{"type":"default","style":"custom"},"isNVue":true}},{"path":"pages/index/tab2","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":1,"background":"#FFFFFF","enablePullDownRefresh":true,"titleNView":false,"navigationBar":{"titleText":"tab2","type":"default","style":"custom"},"isNVue":true}},{"path":"pages/index/tab3","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":2,"background":"#FFFFFF","enablePullDownRefresh":true,"titleNView":false,"navigationBar":{"titleText":"tab3","type":"default","style":"custom"},"isNVue":true}},{"path":"pages/index/tab4","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":3,"background":"#FFFFFF","enablePullDownRefresh":true,"titleNView":false,"navigationBar":{"titleText":"tab4","type":"default","style":"custom"},"isNVue":true}},{"path":"pages/login/login","meta":{"background":"#fff","bounce":"none","navigationBar":{"titleText":"会员登录","type":"float","backgroundColor":"rgba(0,0,0,0)"},"isNVue":true}},{"path":"pages/login/login_zpas","meta":{"background":"#fff","bounce":"none","navigationBar":{"titleText":"找回密码","type":"default"},"isNVue":true}},{"path":"pages/login/login_zc","meta":{"background":"#fff","bounce":"none","navigationBar":{"titleText":"注册账号","type":"default"},"isNVue":true}},{"path":"pages/user/set","meta":{"background":"#fff","bounce":"none","navigationBar":{"backgroundColor":"#ffda08","titleText":"设置","type":"default"},"isNVue":true}},{"path":"pages/user/msg","meta":{"background":"#fff","bounce":"none","navigationBar":{"backgroundColor":"#ffda08","titleText":"消息列表","type":"default"},"isNVue":true}},{"path":"pages/user/msgxx","meta":{"background":"#fff","bounce":"none","navigationBar":{"backgroundColor":"#ffda08","titleText":"消息详细","type":"default"},"isNVue":true}},{"path":"pages/libao/lb","meta":{"background":"#fff","bounce":"none","navigationBar":{"backgroundColor":"#ffda08","titleText":"礼包详情","type":"default"},"isNVue":true}},{"path":"pages/user/ckx","meta":{"background":"#fff","bounce":"none","navigationBar":{"backgroundColor":"#ffda08","titleText":"我的礼包","type":"default"},"isNVue":true}},{"path":"pages/user/kf","meta":{"background":"#fff","bounce":"none","navigationBar":{"backgroundColor":"#ffda08","titleText":"在线客服","type":"default"},"isNVue":true}},{"path":"pages/soso/soso","meta":{"background":"#fff","bounce":"none","titleNView":false,"navigationBar":{"titleText":"","type":"default","style":"custom"},"isNVue":true}},{"path":"pages/gm/gmxx","meta":{"background":"#fff","bounce":"none","navigationBar":{"backgroundColor":"#ffda08","titleText":"游戏详情","type":"default","buttons":[{"float":"right","width":60,"text":"","fontSize":"24px","fontSrc":"/static/iconfont.ttf","color":"rgba(0,0,0,0.7)","background":"rgba(0,0,0,0)"}]},"isNVue":true}},{"path":"pages/user/dow","meta":{"background":"#f1f1f1","bounce":"none","navigationBar":{"backgroundColor":"#ffda08","titleText":"下载管理","type":"default"},"isNVue":true}},{"path":"pages/gm/gmtop","meta":{"background":"#fff","bounce":"none","navigationBar":{"backgroundColor":"#ffda08","titleText":"游戏榜单","type":"default","buttons":[{"float":"right","width":60,"text":"","fontSize":"24px","fontSrc":"/static/iconfont.ttf","color":"rgba(0,0,0,0.7)","background":"rgba(0,0,0,0)"}]},"isNVue":true}},{"path":"pages/gm/news","meta":{"background":"#f1f1f1","bounce":"none","navigationBar":{"backgroundColor":"#ffda08","titleText":"资讯列表","type":"default"},"isNVue":true}},{"path":"pages/gm/newsxx","meta":{"background":"#f1f1f1","bounce":"none","navigationBar":{"backgroundColor":"#ffda08","titleText":"资讯详细","type":"default"},"isNVue":true}},{"path":"pages/gm/hd","meta":{"background":"#f1f1f1","bounce":"none","navigationBar":{"backgroundColor":"#ffda08","titleText":"游戏活动","type":"default"},"isNVue":true}},{"path":"pages/gm/gmxf","meta":{"background":"#fff","bounce":"none","navigationBar":{"backgroundColor":"#ffda08","titleText":"新服表","type":"default"},"isNVue":true}},{"path":"pages/llq/index","meta":{"navigationBar":{"titleText":"","type":"default"},"popGesture":"none","isNVue":true}},{"path":"pages/open/index","meta":{"background":"#fff","bounce":"none","titleNView":false,"navigationBar":{"titleText":"","type":"default","style":"custom"},"isNVue":true}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  