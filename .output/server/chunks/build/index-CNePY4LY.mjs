import { _ as _export_sfc, d as defineNuxtComponent, h as helper } from './server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
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

const _sfc_main = defineNuxtComponent({
  async asyncData() {
    return {
      showArticles: true
    };
  },
  mounted() {
    this.showArticles = false;
    let state = helper.getK("hellokit.reader.state");
    if (state == void 0 || state == "") {
      this.showArticles = false;
      (void 0).location.href = "/guide";
    } else {
      if (state == "inited") {
        (void 0).location.href = "/my/today";
      }
    }
  },
  methods: {}
}, "$PslAyef5YX");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-e6b48281><div style="${ssrRenderStyle({ "width": "100%", "height": "100vh", "background-color": "white" })}" data-v-e6b48281><div class="hello_reader_logo" data-v-e6b48281>\u54C8\u55BD\u9605\u8BFB</div></div>`);
  if (_ctx.showArticles) {
    _push(`<div data-v-e6b48281><div class data-v-e6b48281>Hello, Reader</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e6b48281"]]);

export { index as default };
//# sourceMappingURL=index-CNePY4LY.mjs.map
