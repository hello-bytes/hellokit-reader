import { E as ElDivider } from './el-divider-D385yaft.mjs';
import { _ as _export_sfc, d as defineNuxtComponent } from './server.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import './base-CiGMx3WA.mjs';
import 'lodash-unified';
import '@vue/shared';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';

const _sfc_main = defineNuxtComponent({
  async asyncData() {
    return {};
  }
}, "$upAkW7AZLX");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_divider = ElDivider;
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "max-width": "800px", "margin": "0px auto" } }, _attrs))}><div style="${ssrRenderStyle({ "height": "30px" })}"></div><h1 style="${ssrRenderStyle({ "color": "#009a61", "font-size": "48px", "margin-bottom": "0px" })}">\u8054\u7CFB\u6211\u4EEC</h1><p style="${ssrRenderStyle({ "margin-top": "0px", "font-size": "24px" })}">\u53CD\u9988\u4EA7\u54C1\u95EE\u9898\uFF0C\u5EFA\u8BAE\u6216\u8005\u5C31\u53EA\u662F\u5355\u7EAF\u804A\u804A\u3002</p>`);
  _push(ssrRenderComponent(_component_el_divider, null, null, _parent));
  _push(`<div style="${ssrRenderStyle({ "text-align": "center" })}"><img style="${ssrRenderStyle({ "width": "400px" })}" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/hellobit_wechat.jpg"><p style="${ssrRenderStyle({ "margin-top": "0px" })}">\u4F7F\u7528\u5FAE\u4FE1\u626B\u63CF\u4EE5\u4E0A\u4E8C\u7EF4\u7801\uFF0C\u6DFB\u52A0\u597D\u53CB\u3002</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { contact as default };
//# sourceMappingURL=contact-cK8tUp3H.mjs.map
