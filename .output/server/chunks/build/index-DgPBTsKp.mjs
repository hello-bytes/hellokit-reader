import { _ as __nuxt_component_0 } from './FeedListPage-BhK334L7.mjs';
import { _ as _export_sfc, d as defineNuxtComponent } from './server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './el-button-3_FG0aY6.mjs';
import './index-CXO4VfHa.mjs';
import './base-CiGMx3WA.mjs';
import 'lodash-unified';
import '@vue/shared';
import '@vueuse/core';
import './use-form-item-CHqUkINw.mjs';
import './constants-dJdD8wGz.mjs';
import './use-global-config-0TAJExVa.mjs';
import './index-C_KRVs-j.mjs';
import './objects-MD33mwF0.mjs';
import '@ctrl/tinycolor';
import './index-DFYFv5ur.mjs';
import './typescript-D6L75muK.mjs';
import './el-popper-cvaMBS-J.mjs';
import '@popperjs/core';
import './index-Bn0qoa0Y.mjs';
import './event-DSz0kuqc.mjs';
import './rss-CsPEoumS.mjs';
import './user-z1s-Jdvw.mjs';
import 'js-cookie';
import './folder-CSzLTgX2.mjs';
import './event-f_DzkNfH.mjs';
import 'mitt';
import './Pager-BqwivwxM.mjs';
import './AddRssWhite-C0G9H8dw.mjs';
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

const _sfc_main = defineNuxtComponent({
  components: {
    FeedListPage: __nuxt_component_0
  },
  async asyncData() {
  },
  mounted() {
  },
  methods: {}
}, "$jEAEyYOFhx");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FeedListPage = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_FeedListPage, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/feed/website/at/[[page]].html/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DgPBTsKp.mjs.map
