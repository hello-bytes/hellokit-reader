import { _ as _export_sfc, d as defineNuxtComponent } from './server.mjs';
import { A as AllDialog } from './AllDialog-Cihv-oMH.mjs';
import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
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
import '@vue/shared';
import 'lodash-unified';
import './base-CiGMx3WA.mjs';
import './index-Bn0qoa0Y.mjs';
import './constants-dJdD8wGz.mjs';
import './index-CXO4VfHa.mjs';
import './index-C_KRVs-j.mjs';
import './refs-CJvnaIJj.mjs';
import './event-DSz0kuqc.mjs';
import './use-global-config-0TAJExVa.mjs';
import './objects-MD33mwF0.mjs';
import './scroll-Hq3mw777.mjs';
import './use-form-item-CHqUkINw.mjs';
import './el-button-3_FG0aY6.mjs';
import '@ctrl/tinycolor';
import './event-f_DzkNfH.mjs';
import 'mitt';
import './el-link-C2xhUqkp.mjs';
import './user-z1s-Jdvw.mjs';
import 'js-cookie';

const _sfc_main = defineNuxtComponent({
  components: {
    AllDialog
  }
}, "$MERNDbrb4a");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AllDialog = resolveComponent("AllDialog");
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "background-color": "white" } }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_AllDialog, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/blank.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blank = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { blank as default };
//# sourceMappingURL=blank-kcyItdv6.mjs.map
