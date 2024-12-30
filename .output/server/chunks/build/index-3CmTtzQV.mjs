import { r as refresh_default, a as check_default, s as select_default, E as ElIcon } from './index-DkfqKprI.mjs';
import { E as ElDivider } from './el-divider-D3HTy-mk.mjs';
import { _ as _export_sfc, d as defineNuxtComponent, f as useRoute, j as devicebiz, h as helper } from './server.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { E as ElMessage } from './index-DoQiR3n0.mjs';
import { r as rssfolder } from './folder-2LS57DQv.mjs';
import { L as Loading } from './el-dropdown-item-BDgCuFnw.mjs';
import { E as EmptyFolder, A as AllDoneFolder } from './AllDoneFolder-B-MwXdG0.mjs';
import { F as FeedItemListV3 } from './FeedItemListV3-zdIDCaPU.mjs';
import './base-BSYjTNA2.mjs';
import 'lodash-unified';
import '@vue/shared';
import '@vueuse/core';
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
import './typescript-D6L75muK.mjs';
import './index-FYQmeljH.mjs';
import './use-global-config-OeHUdFGt.mjs';
import './constants-XLKnfDE9.mjs';
import './objects-MD33mwF0.mjs';
import './user-C1csm6gi.mjs';
import './el-button-KAYtidDM.mjs';
import './use-form-item-C9td9zAz.mjs';
import '@ctrl/tinycolor';
import './el-popper-IPLn1IGN.mjs';
import '@popperjs/core';
import './el-scrollbar-fDmy9Fq1.mjs';
import './AddRssWhite-C0G9H8dw.mjs';
import './rss-D-s2yPOL.mjs';
import './read_later-CHodLy6D.mjs';
import './event-f_DzkNfH.mjs';
import 'mitt';

const _sfc_main$1 = defineNuxtComponent({
  components: {
    Refresh: refresh_default,
    Check: check_default,
    Select: select_default
  },
  props: {
    folder: {
      type: Object,
      default: null
    }
  },
  async asyncData() {
    return {};
  },
  methods: {
    onRefresh() {
      this.$emit("onRefreshItems", {});
    },
    onSetAllReaded() {
      this.$emit("onSetAllReaded", {});
    }
  }
}, "$FoOghomfAA");
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_icon = ElIcon;
  const _component_Check = resolveComponent("Check");
  const _component_Refresh = resolveComponent("Refresh");
  const _component_el_divider = ElDivider;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-19f25b60><div style="${ssrRenderStyle({ "display": "flex" })}" data-v-19f25b60><span class="page_root_title" data-v-19f25b60>${ssrInterpolate(_ctx.folder == null ? "-" : _ctx.folder.folder_name)}</span><div style="${ssrRenderStyle({ "flex": "1" })}" data-v-19f25b60></div><div style="${ssrRenderStyle({ "margin-top": "15px" })}" data-v-19f25b60><div class="svg_icon_container" data-v-19f25b60>`);
  _push(ssrRenderComponent(_component_el_icon, { size: 28 }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Check, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Check)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="svg_icon_container" data-v-19f25b60>`);
  _push(ssrRenderComponent(_component_el_icon, { size: 28 }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Refresh, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Refresh)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
  _push(ssrRenderComponent(_component_el_divider, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/folder/FolderBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-19f25b60"]]);
const _sfc_main = defineNuxtComponent({
  components: {
    Loading,
    FolderBar: __nuxt_component_0,
    EmptyFolder,
    FeedItemListV3,
    AllDoneFolder
  },
  async asyncData() {
    const route = useRoute();
    let folderID = route.params.folder_id;
    return {
      folder: null,
      folderID,
      viewState: 1,
      showAllFeedItem: false
    };
  },
  mounted() {
    this.loadFolder();
  },
  methods: {
    async loadFolder() {
      let responseData = await rssfolder.getFolderMeta(false, devicebiz.getDeviceID(), this.folderID);
      if (helper.isResultOk(responseData)) {
        this.folder = responseData.data;
      }
      this.loadFeedItems("0", 30, 0);
    },
    async loadFeedItems(feedItemID, limit, offset) {
      let readState = 1;
      if (this.showAllFeedItem) {
        readState = 0;
      }
      let responseData = await rssfolder.getUserFeedItemListByFolder(devicebiz.getDeviceID(), this.folderID, feedItemID, readState, limit, offset);
      if (!helper.isResultOk(responseData)) {
        ElMessage.error("\u6587\u7AE0\u5217\u8868\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u6216\u7A0D\u540E\u518D\u8BD5\u3002");
        return;
      }
      let startFeedItem = parseInt(feedItemID);
      let feedItems = responseData.data.list;
      let totalCount = responseData.data.total_count;
      if (totalCount == 0 && startFeedItem == 0) {
        this.checkFeedCount();
      } else {
        await this.$refs.feedItemListComp.appendFeedItems(feedItems);
        this.viewState = 4;
      }
    },
    async checkFeedCount() {
      let responseData = await rssfolder.getFolderCount(false, devicebiz.getDeviceID(), [this.folderID]);
      if (helper.isResultOk(responseData)) {
        let staticsFolderList = responseData.data;
        if (staticsFolderList.length == 1) {
          let feedCount = staticsFolderList[0].feed_count;
          this.viewState = feedCount == 0 ? 2 : 3;
          return;
        }
      }
      this.viewState = 2;
    },
    onRefreshFeedItems() {
      this.viewState = 1;
      (void 0).location.reload();
    },
    async onSetAllReaded() {
      let responseData = await rssfolder.setFolderAllRead(devicebiz.getDeviceID(), this.folderID, 2);
      if (!helper.isResultOk(responseData)) {
        ElMessage.error("\u6807\u8BB0\u4E3A\u5DF2\u8BFB\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002");
        return;
      }
      this.viewState = 3;
    },
    viewAllFeedItem() {
      this.viewState = 1;
      this.showAllFeedItem = true;
      this.loadFeedItems(1);
    },
    async onReload() {
      (void 0).location.reload();
    },
    onLoadMore(params) {
      this.loadFeedItems(params.feedItemID, params.limit, 0);
    }
  }
}, "$RERymwjBm8");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FolderBar = __nuxt_component_0;
  const _component_Loading = resolveComponent("Loading");
  const _component_EmptyFolder = resolveComponent("EmptyFolder");
  const _component_AllDoneFolder = resolveComponent("AllDoneFolder");
  const _component_FeedItemListV3 = resolveComponent("FeedItemListV3");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page_root_container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_FolderBar, {
    onOnSetAllReaded: _ctx.onSetAllReaded,
    onOnRefreshItems: _ctx.onRefreshFeedItems,
    folder: _ctx.folder
  }, null, _parent));
  if (_ctx.viewState == 1) {
    _push(ssrRenderComponent(_component_Loading, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.viewState == 2) {
    _push(ssrRenderComponent(_component_EmptyFolder, { folder: _ctx.folder }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.viewState == 3) {
    _push(ssrRenderComponent(_component_AllDoneFolder, { onViewAllFeedItem: _ctx.viewAllFeedItem }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_FeedItemListV3, {
    style: _ctx.viewState == 4 ? null : { display: "none" },
    onOnLoadMore: _ctx.onLoadMore,
    onOnReload: _ctx.onReload,
    ref: "feedItemListComp"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my/folder/[[folder_id]].html/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-3CmTtzQV.mjs.map
