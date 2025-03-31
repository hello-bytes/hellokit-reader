import { E as ElDivider } from './el-divider-D385yaft.mjs';
import { _ as _export_sfc, d as defineNuxtComponent, j as devicebiz, h as helper } from './server.mjs';
import { E as ElMessage } from './index-5CKSucjx.mjs';
import { r as rssbiz } from './rss-CsPEoumS.mjs';
import { r as rssfolder } from './folder-CSzLTgX2.mjs';
import { L as Loading } from './el-dropdown-item-DyXojXgF.mjs';
import { F as FeedItemListV3 } from './FeedItemListV3-CMU19OSx.mjs';
import { A as AddRssWhite } from './AddRssWhite-C0G9H8dw.mjs';
import { E as EmptyFolder, A as AllDoneFolder } from './AllDoneFolder-Ctut6hlc.mjs';
import { G as Good } from './Good-DSQoGmif.mjs';
import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './read_later-BhIVw6nV.mjs';
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
      showAllFeedItem: false,
      viewState: 1,
      totalCount: 0
    };
  },
  mounted() {
    this.loadFeedItems("0", 30, 0);
  },
  methods: {
    async loadFeedItems(feedItemID, limit, offset) {
      let readState = 1;
      if (this.showAllFeedItem) {
        readState = 0;
      }
      let responseData = await rssfolder.getUserFeedItemList(devicebiz.getDeviceID(), feedItemID, readState, limit, offset);
      if (!helper.isResultOk(responseData)) {
        ElMessage.error("\u6587\u7AE0\u5217\u8868\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u6216\u7A0D\u540E\u518D\u8BD5\u3002");
        return;
      }
      let feedItems = responseData.data.list;
      let totalCount = responseData.data.total_count;
      if (totalCount == 0) {
        let responseData2 = await rssbiz.getUserFeedCount(devicebiz.getDeviceID());
        if (helper.isResultOk(responseData2)) {
          if (responseData2.data.total_count == 0) {
            this.viewState = 2;
          } else {
            this.viewState = 3;
          }
        } else {
          this.viewState = 4;
        }
      } else {
        await this.$refs.feedItemListComp.appendFeedItems(feedItems);
        this.viewState = 4;
      }
    },
    onSubscribeFeed() {
      (void 0).location.href = "/feed/website/ft/1.html";
    },
    viewAllFeedItem() {
      this.viewState = 1;
      this.showAllFeedItem = true;
      this.$refs.feedItemListComp.clear();
      this.$refs.feedItemListComp.setLoadingMoreState();
      this.loadFeedItems("0", 30, 0);
    },
    async onReload() {
      (void 0).location.reload();
    },
    onLoadMore(params) {
      this.loadFeedItems(params.feedItemID, params.limit, 0);
    }
  }
}, "$K6KffO79PB");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_divider = ElDivider;
  const _component_Loading = resolveComponent("Loading");
  const _component_EmptyFolder = resolveComponent("EmptyFolder");
  const _component_AllDoneFolder = resolveComponent("AllDoneFolder");
  const _component_FeedItemListV3 = resolveComponent("FeedItemListV3");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page_root_container" }, _attrs))} data-v-4d300d3a><h2 class="page_root_title" data-v-4d300d3a>\u6211\u8BA2\u9605\u7684\u6240\u6709\u5185\u5BB9</h2>`);
  _push(ssrRenderComponent(_component_el_divider, null, null, _parent));
  if (_ctx.viewState == 1) {
    _push(ssrRenderComponent(_component_Loading, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.viewState == 2) {
    _push(ssrRenderComponent(_component_EmptyFolder, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.viewState == 3) {
    _push(ssrRenderComponent(_component_AllDoneFolder, { onViewAllFeedItem: _ctx.viewAllFeedItem }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_FeedItemListV3, {
    onOnLoadMore: _ctx.onLoadMore,
    onOnReload: _ctx.onReload,
    style: _ctx.viewState == 4 ? null : { display: "none" },
    ref: "feedItemListComp"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my/all.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const all = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4d300d3a"]]);

export { all as default };
//# sourceMappingURL=all-DOCyQunj.mjs.map
