import { r as refresh_default, D as files_default, a as check_default, E as ElIcon } from './index-CXO4VfHa.mjs';
import { _ as _export_sfc, d as defineNuxtComponent, f as useRoute, g as executeAsync, h as helper, j as devicebiz } from './server.mjs';
import { E as ElMessage } from './index-5CKSucjx.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { r as rssbiz } from './rss-CsPEoumS.mjs';
import { r as rssfolder } from './folder-CSzLTgX2.mjs';
import { L as Loading } from './el-dropdown-item-DyXojXgF.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { E as ElButton } from './el-button-3_FG0aY6.mjs';
import { E as EmptyFolder, A as AddRssWhite } from './AddRssWhite-C0G9H8dw.mjs';
import { F as FeedItemListV3 } from './FeedItemListV3-CMU19OSx.mjs';
import './base-CiGMx3WA.mjs';
import 'lodash-unified';
import '@vue/shared';
import '@vueuse/core';
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
import './typescript-D6L75muK.mjs';
import './index-C_KRVs-j.mjs';
import './use-global-config-0TAJExVa.mjs';
import './constants-dJdD8wGz.mjs';
import './objects-MD33mwF0.mjs';
import './user-z1s-Jdvw.mjs';
import 'js-cookie';
import './el-popper-cvaMBS-J.mjs';
import '@popperjs/core';
import './index-Bn0qoa0Y.mjs';
import './el-scrollbar-COSNo7Ps.mjs';
import './use-form-item-CHqUkINw.mjs';
import './refs-CJvnaIJj.mjs';
import '@ctrl/tinycolor';
import './read_later-BhIVw6nV.mjs';
import './event-f_DzkNfH.mjs';
import 'mitt';

const _sfc_main$3 = defineNuxtComponent({
  async asyncData() {
    return {};
  },
  methods: {}
}, "$WntwAQZIMM");
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/ErrorView.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ErrorView = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = defineNuxtComponent({
  components: {
    Refresh: refresh_default,
    EmptyFolder,
    AddRssWhite
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
    addFeedClick() {
      (void 0).location.href = "/feed/website/ft/1.html";
    }
  }
}, "$CCtoHZqa9Y");
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_icon = ElIcon;
  const _component_EmptyFolder = resolveComponent("EmptyFolder");
  const _component_el_button = ElButton;
  const _component_AddRssWhite = resolveComponent("AddRssWhite");
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "display": "flex" } }, _attrs))}><div style="${ssrRenderStyle({ "max-width": "800px", "margin": "0px auto" })}"><div style="${ssrRenderStyle({ "text-align": "center", "margin-top": "100px" })}">`);
  _push(ssrRenderComponent(_component_el_icon, { size: 100 }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_EmptyFolder, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_EmptyFolder)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p style="${ssrRenderStyle({ "margin-bottom": "0px", "font-size": "30px" })}">\u5C1A\u65E0\u66F4\u65B0</p><p style="${ssrRenderStyle({ "margin-top": "0px", "margin-bottom": "20px" })}">\u8FD9\u4E2A\u5185\u5BB9\u6E90\u8FD8\u6CA1\u6709\u53D1\u5E03\u4EFB\u4F55\u6587\u7AE0\uFF0C\u8BF7\u60A8\u9759\u5F85\u4F73\u97F3\u3002</p>`);
  _push(ssrRenderComponent(_component_el_button, {
    onClick: ($event) => _ctx.addFeedClick(),
    type: "primary",
    size: "large"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_icon, {
          size: 18,
          style: { "color": "#fff" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_AddRssWhite, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_AddRssWhite)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`\xA0\u8BA2\u9605\u5176\u5B83\u5185\u5BB9\u6E90`);
      } else {
        return [
          createVNode(_component_el_icon, {
            size: 18,
            style: { "color": "#fff" }
          }, {
            default: withCtx(() => [
              createVNode(_component_AddRssWhite)
            ]),
            _: 1
          }),
          createTextVNode("\xA0\u8BA2\u9605\u5176\u5B83\u5185\u5BB9\u6E90")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/feed/EmptyFeed.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const EmptyFeed = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = defineNuxtComponent({
  components: {
    Refresh: refresh_default,
    EmptyFolder,
    AddRssWhite,
    Files: files_default
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
    viewAllFeedItem() {
      this.$emit("viewAllFeedItem", {});
    }
  }
}, "$kbvp5nqvAa");
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_button = ElButton;
  const _component_el_icon = ElIcon;
  const _component_Files = resolveComponent("Files");
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "display": "flex" } }, _attrs))}><div style="${ssrRenderStyle({ "max-width": "800px", "margin": "0px auto" })}"><div style="${ssrRenderStyle({ "text-align": "center", "margin-top": "10px" })}"><img src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/all_done.svg"><p style="${ssrRenderStyle({ "margin-bottom": "0px", "font-size": "30px" })}">\u641E\u5B9A\uFF01</p><p style="${ssrRenderStyle({ "margin-top": "0px", "margin-bottom": "20px" })}">\u592A\u68D2\u4E86\uFF0C\u60A8\u5DF2\u7ECF\u8BFB\u5B8C\u6B64\u5185\u5BB9\u6E90\u4E0B\u6240\u6709\u6587\u7AE0\u3002</p>`);
  _push(ssrRenderComponent(_component_el_button, {
    onClick: _ctx.viewAllFeedItem,
    type: "primary",
    size: "large"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_icon, {
          size: 18,
          style: { "color": "#fff" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Files, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Files)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`\xA0\u6D4F\u89C8\u6240\u6709\u6587\u7AE0`);
      } else {
        return [
          createVNode(_component_el_icon, {
            size: 18,
            style: { "color": "#fff" }
          }, {
            default: withCtx(() => [
              createVNode(_component_Files)
            ]),
            _: 1
          }),
          createTextVNode("\xA0\u6D4F\u89C8\u6240\u6709\u6587\u7AE0")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/feed/AllDoneFeed.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AllDoneFeed = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineNuxtComponent({
  components: {
    Refresh: refresh_default,
    FeedItemList3: FeedItemListV3,
    Loading,
    EmptyFeed,
    ErrorView,
    AllDoneFeed,
    Check: check_default
  },
  async asyncData() {
    let __temp, __restore;
    const route = useRoute();
    let feedID = route.params.feed_id;
    let feedObj = null;
    let feedResponse = ([__temp, __restore] = executeAsync(() => rssbiz.queryFeedByIDs(true, [feedID])), __temp = await __temp, __restore(), __temp);
    if (helper.isResultOk(feedResponse)) {
      if (feedResponse.data.list.length == 1) {
        feedObj = feedResponse.data.list[0];
      }
    }
    let followCount = 0;
    let feedItemCount = 0;
    let feedStaticsResponse = ([__temp, __restore] = executeAsync(() => rssbiz.queryFeedStaticsByIDs(true, [feedID])), __temp = await __temp, __restore(), __temp);
    if (helper.isResultOk(feedStaticsResponse)) {
      if (feedStaticsResponse.data.length == 1) {
        followCount = feedStaticsResponse.data[0].follow_count;
        feedItemCount = feedStaticsResponse.data[0].feed_item_count;
      }
    }
    return {
      feed: feedObj,
      feedItems: [],
      followCount,
      feedItemCount,
      viewState: 1,
      showAllFeedItem: false
    };
  },
  mounted() {
    this.loadFeedItems("0", 30, 0);
  },
  methods: {
    async loadFeedItems(feedItemID, limit, offset) {
      if (this.feed == null) {
        return;
      }
      let readState = 1;
      if (this.showAllFeedItem) {
        readState = 0;
      }
      let responseData = await rssfolder.getUserFeedItemListByFeed(devicebiz.getDeviceID(), this.feed.feed_id, feedItemID, readState, limit, offset);
      if (!helper.isResultOk(responseData)) {
        ElMessage.error("\u6587\u7AE0\u5217\u8868\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u6216\u7A0D\u540E\u518D\u8BD5\u3002");
        return;
      }
      let feedItems = responseData.data.list;
      let totalCount = responseData.data.total_count;
      if (this.feedItemCount == 0) {
        this.viewState = 3;
      } else {
        if (totalCount == 0) {
          this.viewState = 4;
        } else {
          await this.$refs.feedItemListComp.appendFeedItems(feedItems);
          this.viewState = 5;
        }
      }
    },
    onRefresh() {
      this.viewState = 1;
      this.$refs.feedItemListComp.clear();
      this.$refs.feedItemListComp.setLoadingMoreState();
      this.loadFeedItems("0", 30, 0);
    },
    async onSetAllReaded() {
      let responseData = await rssfolder.setFeedAllRead(devicebiz.getDeviceID(), this.feed.feed_id, 2);
      if (!helper.isResultOk(responseData)) {
        ElMessage.error("\u6807\u8BB0\u4E3A\u5DF2\u8BFB\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002");
        return;
      }
      this.viewState = 4;
    },
    viewAllFeedItem() {
      this.viewState = 1;
      this.showAllFeedItem = true;
      this.$refs.feedItemListComp.clear();
      this.$refs.feedItemListComp.setLoadingMoreState();
      this.loadFeedItems("0", 30, 0);
    },
    onLoadMore(params) {
      this.loadFeedItems(params.feedItemID, params.limit, 0);
    },
    async onReload() {
      (void 0).location.reload();
    }
  }
}, "$fanAyX7XeI");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_icon = ElIcon;
  const _component_Check = resolveComponent("Check");
  const _component_Refresh = resolveComponent("Refresh");
  const _component_Loading = resolveComponent("Loading");
  const _component_ErrorView = resolveComponent("ErrorView");
  const _component_EmptyFeed = resolveComponent("EmptyFeed");
  const _component_AllDoneFeed = resolveComponent("AllDoneFeed");
  const _component_FeedItemList3 = resolveComponent("FeedItemList3");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "feed_item_conatiner" }, _attrs))} data-v-97990fcb><div style="${ssrRenderStyle({ "height": "30px" })}" data-v-97990fcb></div><div style="${ssrRenderStyle({ "display": "flex" })}" data-v-97990fcb><div data-v-97990fcb><h2 class="feed_name" data-v-97990fcb>${ssrInterpolate(_ctx.feed == null ? "" : _ctx.feed.name)}</h2><div class="feed_info_desc" data-v-97990fcb><span data-v-97990fcb>${ssrInterpolate(_ctx.followCount)}\xA0\u4F4D\u8BA2\u9605\u7528\u6237</span><span data-v-97990fcb>\xA0\xA0\uFF5C\xA0\xA0</span><span data-v-97990fcb>${ssrInterpolate(_ctx.feedItemCount)}\xA0\u7BC7\u6587\u7AE0</span></div></div><div style="${ssrRenderStyle({ "flex": "1" })}" data-v-97990fcb></div><div style="${ssrRenderStyle({ "padding-top": "25px" })}" data-v-97990fcb><div class="svg_icon_container" data-v-97990fcb>`);
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
  _push(`</div><div class="svg_icon_container" data-v-97990fcb>`);
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
  _push(`</div></div></div><div style="${ssrRenderStyle({ "height": "1px", "background-color": "#dcdfe6", "margin-top": "10px", "margin-bottom": "24px" })}" data-v-97990fcb></div>`);
  if (_ctx.viewState == 1) {
    _push(ssrRenderComponent(_component_Loading, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.viewState == 2) {
    _push(ssrRenderComponent(_component_ErrorView, { ref: "errorViewComp" }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.viewState == 3) {
    _push(ssrRenderComponent(_component_EmptyFeed, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.viewState == 4) {
    _push(ssrRenderComponent(_component_AllDoneFeed, { onViewAllFeedItem: _ctx.viewAllFeedItem }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_FeedItemList3, {
    showFeedName: false,
    style: _ctx.viewState == 5 ? null : { display: "none" },
    onOnLoadMore: _ctx.onLoadMore,
    onOnReload: _ctx.onReload,
    ref: "feedItemListComp"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my/feed/[[feed_id]]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-97990fcb"]]);

export { index as default };
//# sourceMappingURL=index-DyYt6TLV.mjs.map
