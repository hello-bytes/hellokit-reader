import { E as ElDivider } from './el-divider-D385yaft.mjs';
import { _ as _export_sfc, d as defineNuxtComponent, j as devicebiz, h as helper } from './server.mjs';
import { E as ElMessage } from './index-5CKSucjx.mjs';
import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { r as readLater$1 } from './read_later-BhIVw6nV.mjs';
import { L as Loading } from './el-dropdown-item-DyXojXgF.mjs';
import { F as FeedItemListV3 } from './FeedItemListV3-CMU19OSx.mjs';
import { A as AddRssWhite } from './AddRssWhite-C0G9H8dw.mjs';
import { E as EmptyFolder, A as AllDoneFolder } from './AllDoneFolder-Ctut6hlc.mjs';
import { G as Good } from './Good-DSQoGmif.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
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
import './index-CXO4VfHa.mjs';
import './typescript-D6L75muK.mjs';
import './index-C_KRVs-j.mjs';
import './use-global-config-0TAJExVa.mjs';
import './constants-dJdD8wGz.mjs';
import './objects-MD33mwF0.mjs';
import './user-z1s-Jdvw.mjs';
import 'js-cookie';
import './el-button-3_FG0aY6.mjs';
import './use-form-item-CHqUkINw.mjs';
import '@ctrl/tinycolor';
import './el-popper-cvaMBS-J.mjs';
import '@popperjs/core';
import './index-Bn0qoa0Y.mjs';
import './el-scrollbar-COSNo7Ps.mjs';
import './refs-CJvnaIJj.mjs';
import './rss-CsPEoumS.mjs';
import './event-f_DzkNfH.mjs';
import 'mitt';

const _sfc_main = defineNuxtComponent({
  components: {
    Loading,
    EmptyFolder,
    FeedItemListV3,
    AddRssWhite,
    Good,
    AllDoneFolder
  },
  async asyncData() {
    return {
      viewState: 1,
      totalCount: 0
    };
  },
  mounted() {
    this.loadFeedItems("0", 30, 0);
  },
  methods: {
    async loadFeedItems(feedItemID, limit, offset) {
      let responseData = await readLater$1.fetchReadLaterV2(devicebiz.getDeviceID(), feedItemID, limit, offset);
      if (!helper.isResultOk(responseData)) {
        ElMessage.error("\u6587\u7AE0\u5217\u8868\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u6216\u7A0D\u540E\u518D\u8BD5\u3002");
        return;
      }
      let readLaterItems = responseData.data.list;
      let totalCount = responseData.data.total_count;
      if (totalCount == 0) {
        this.viewState = 2;
      } else {
        let feedItemIds = [];
        for (let index in readLaterItems) {
          feedItemIds.push(readLaterItems[index].feed_item_id);
        }
        await this.$refs.feedItemListComp.appendFeedItemIDs(feedItemIds);
        this.viewState = 3;
      }
    },
    async onReload() {
      (void 0).location.reload();
    },
    onLoadMore(params) {
      this.loadFeedItems(params.feedItemID, params.limit, 0);
    },
    onSubscribeFeed() {
      (void 0).location.href = "/feed/website/ft/1.html";
    }
  }
}, "$ogAhbhpD0J");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_divider = ElDivider;
  const _component_Loading = resolveComponent("Loading");
  const _component_FeedItemListV3 = resolveComponent("FeedItemListV3");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page_root_container" }, _attrs))} data-v-8b2e053b><h2 class="page_root_title" data-v-8b2e053b>\u7A0D\u540E\u9605\u8BFB</h2>`);
  _push(ssrRenderComponent(_component_el_divider, null, null, _parent));
  if (_ctx.viewState == 1) {
    _push(ssrRenderComponent(_component_Loading, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.viewState == 2) {
    _push(`<div style="${ssrRenderStyle({ "width": "800px", "margin": "0px auto", "text-align": "center" })}" data-v-8b2e053b><img src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/reader/read-latre.svg" data-v-8b2e053b><p style="${ssrRenderStyle({ "margin-bottom": "0px", "font-size": "30px" })}" data-v-8b2e053b>\u7A7A\u7A7A\u5982\u4E5F</p><p style="${ssrRenderStyle({ "margin-bottom": "0px", "font-size": "16px" })}" data-v-8b2e053b>\u4F60\u8BBE\u7F6E\u4E3A\u201C\u7A0D\u540E\u9605\u8BFB\u201D\u7684\u6587\u7AE0\u5C06\u4F1A\u51FA\u73B0\u8FD9\u91CC\u3002</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_FeedItemListV3, {
    style: _ctx.viewState == 3 ? null : { display: "none" },
    readLaterMode: true,
    onOnLoadMore: _ctx.onLoadMore,
    onOnReload: _ctx.onReload,
    ref: "feedItemListComp"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my/read-later.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const readLater = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8b2e053b"]]);

export { readLater as default };
//# sourceMappingURL=read-later-Dq3TZ9hr.mjs.map
