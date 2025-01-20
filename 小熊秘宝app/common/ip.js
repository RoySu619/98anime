const ip = 'http://www.98anime.com/';//你的域名结尾必须带斜杠
let appxx = uni.getWindowInfo();
const appsys=uni.getDeviceInfo().deviceBrand;//apple 苹果  其他是安卓
const appdvid=uni.getDeviceInfo().deviceId;//设备 id
const appname=uni.getAppBaseInfo().appName;
const appV=uni.getAppBaseInfo().appVersionCode;
const appVs=uni.getAppBaseInfo().appVersion;
const issoso_zt=0;
const isgggd_zt=0;
const appw=Number(appxx.screenWidth);
const appt=Number(appxx.statusBarHeight);
const apph=Number(appxx.screenHeight);//屏幕 高度
if(appxx.safeAreaInsets.bottom>0){
	uni.setStorageSync('appb', appxx.safeAreaInsets.bottom);
}
const appb=Number(uni.getStorageSync('appb')) ? Number(uni.getStorageSync('appb')): 0;//底部安全区域
const appmain_h=apph-appt-appb;//内容区高度
export default {
    ip,
	appsys,
	appdvid,
	appV,
	appVs,
	appname,
	appt,
	appb,
	appw,
	apph,
	appmain_h,
	issoso_zt,
	isgggd_zt,
}
