import "vue";
const isString = (val) => typeof val === "string";
function requireNativePlugin(name) {
  return weex.requireModule(name);
}
function formatAppLog(type, filename, ...args) {
  if (uni.__log__) {
    uni.__log__(type, filename, ...args);
  } else {
    console[type].apply(console, [...args, filename]);
  }
}
function resolveEasycom(component, easycom) {
  return isString(component) ? easycom : component;
}
export {
  resolveEasycom as a,
  formatAppLog as f,
  requireNativePlugin as r
};
