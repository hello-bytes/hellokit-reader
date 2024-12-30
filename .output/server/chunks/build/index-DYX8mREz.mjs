import { _ as _export_sfc, d as defineNuxtComponent } from './server.mjs';
import { b as browser } from './browser-BEZoJCeu.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
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

const _sfc_main = defineNuxtComponent({
  async asyncData() {
    return {
      isMobile: browser.isMobile()
    };
  },
  mounted() {
  },
  methods: {}
}, "$tXKtSDr8Gn");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "background-color": "white" })}" class="${ssrRenderClass({ pc_tr_container: !_ctx.isMobile, pc_default_inner: !_ctx.isMobile, pc_default_container: !_ctx.isMobile, mobile_tr_container: _ctx.isMobile })}"><div class="tool_title_wrapper"><h1 style="${ssrRenderStyle({ "margin-bottom": "0px" })}">TIOBE \u6307\u6570\u6392\u540D</h1><p style="${ssrRenderStyle({ "margin-top": "0px" })}">\uFF082024\u5E748\u6708\u4EFD\uFF09</p></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/feed/wx-public-account/[[mp_id]]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DYX8mREz.mjs.map
