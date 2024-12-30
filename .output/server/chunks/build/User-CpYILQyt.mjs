import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    t: "1729578516611",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "12922",
    width: "256",
    height: "256"
  }, _attrs))}><path d="M509.44 1018.368c-141.312 0-277.504-59.904-372.736-164.352l-19.968-21.504 19.968-21.504c95.744-104.448 231.424-164.352 372.736-164.352 141.312 0 277.504 59.904 372.736 164.352l19.968 21.504-19.968 21.504c-95.232 104.448-231.424 164.352-372.736 164.352zM204.8 832.512c81.92 77.824 190.976 121.856 304.64 121.856 113.664 0 222.72-44.032 304.64-121.856-81.92-77.824-190.976-121.856-304.64-121.856-113.664 0-222.72 44.032-304.64 121.856zM509.952 600.576c-89.088 0-161.792-72.704-161.792-161.792 0-89.088 72.704-161.792 161.792-161.792s161.792 72.704 161.792 161.792c0 89.088-72.192 161.792-161.792 161.792z m0-259.584c-53.76 0-97.792 44.032-97.792 97.792s44.032 97.792 97.792 97.792 97.792-44.032 97.792-97.792-43.52-97.792-97.792-97.792z" fill="#707070" p-id="12923"></path><path d="M119.296 719.36c-33.792-63.488-51.2-134.144-51.2-206.848 0-243.712 198.144-441.344 441.344-441.344s441.344 198.144 441.344 441.344c0 72.192-17.92 143.36-51.2 206.336 16.384 15.36 31.744 31.744 46.08 49.152 45.568-77.312 69.12-165.376 69.12-255.488 0-279.04-226.816-505.856-505.856-505.856C230.4 7.168 4.096 233.984 4.096 512.512c0 90.112 24.064 178.688 69.632 255.488 13.824-16.896 29.184-33.28 45.568-48.64z" fill="#707070" p-id="12924"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("icons/User.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const User = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { User as U };
//# sourceMappingURL=User-CpYILQyt.mjs.map