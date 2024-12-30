import { _ as __nuxt_component_0 } from './FeedListPage-Ce1re_F5.mjs';
import { _ as _export_sfc, d as defineNuxtComponent } from './server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './el-button-KAYtidDM.mjs';
import './index-DkfqKprI.mjs';
import './base-BSYjTNA2.mjs';
import 'lodash-unified';
import '@vue/shared';
import '@vueuse/core';
import './use-form-item-C9td9zAz.mjs';
import './constants-XLKnfDE9.mjs';
import './use-global-config-OeHUdFGt.mjs';
import './index-FYQmeljH.mjs';
import './objects-MD33mwF0.mjs';
import '@ctrl/tinycolor';
import './index-C4SW8lk2.mjs';
import './typescript-D6L75muK.mjs';
import './el-popper-IPLn1IGN.mjs';
import '@popperjs/core';
import './el-tag-C0R49AZH.mjs';
import './rss-D-s2yPOL.mjs';
import './user-C1csm6gi.mjs';
import './folder-2LS57DQv.mjs';
import './event-f_DzkNfH.mjs';
import 'mitt';
import './Pager-ClphuyoT.mjs';
import './AddRssWhite-C0G9H8dw.mjs';
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

const _sfc_main = defineNuxtComponent({
  components: {
    FeedListPage: __nuxt_component_0
  },
  async asyncData() {
  },
  mounted() {
  },
  methods: {}
}, "$07J73LXeVc");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FeedListPage = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_FeedListPage, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/feed/wechat/ft/[[page]].html/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-4HIGd1cD.mjs.map
