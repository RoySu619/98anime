const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const ip = "http://xxmbao.bacms.cn/";
let appxx = uni.getWindowInfo();
const appsys = uni.getDeviceInfo().deviceBrand;
const appdvid = uni.getDeviceInfo().deviceId;
const appname = uni.getAppBaseInfo().appName;
const appV = uni.getAppBaseInfo().appVersionCode;
const appVs = uni.getAppBaseInfo().appVersion;
const issoso_zt = 0;
const isgggd_zt = 0;
const appw = Number(appxx.screenWidth);
const appt = Number(appxx.statusBarHeight);
const apph = Number(appxx.screenHeight);
if (appxx.safeAreaInsets.bottom > 0) {
  uni.setStorageSync("appb", appxx.safeAreaInsets.bottom);
}
const appb = Number(uni.getStorageSync("appb")) ? Number(uni.getStorageSync("appb")) : 0;
const appmain_h = apph - appt - appb;
const G_APP = {
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
  isgggd_zt
};
export {
  G_APP as G,
  _export_sfc as _
};
