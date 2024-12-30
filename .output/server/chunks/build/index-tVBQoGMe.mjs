import { r as refresh_default, E as ElIcon } from './index-DkfqKprI.mjs';
import { _ as _export_sfc, d as defineNuxtComponent, h as helper, f as useRoute, g as executeAsync } from './server.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode } from 'vue';
import { b as browser } from './browser-BEZoJCeu.mjs';
import { r as rssbiz } from './rss-D-s2yPOL.mjs';
import { E as ElPagination } from './el-select-BPCfhimv.mjs';
import { e as emitter } from './event-f_DzkNfH.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
import './user-C1csm6gi.mjs';
import './index-FYQmeljH.mjs';
import './constants-XLKnfDE9.mjs';
import './el-popper-IPLn1IGN.mjs';
import '@popperjs/core';
import './el-scrollbar-fDmy9Fq1.mjs';
import './use-form-item-C9td9zAz.mjs';
import './index-C4SW8lk2.mjs';
import './typescript-D6L75muK.mjs';
import './el-tag-C0R49AZH.mjs';
import './index-WNanLJvq.mjs';
import 'mitt';

const _sfc_main$2 = defineNuxtComponent({
  components: {},
  props: {
    feed: {
      type: Object,
      default: null
    },
    totalCount: {
      type: Number,
      default: 0
    },
    feedItems: {
      type: Array,
      default: []
    }
  },
  async asyncData() {
    return {};
  },
  methods: {
    // :href='"/subscript/" + item.feed_id + "/" + item.feed_item_id'
    appendFeedItems(feedItems) {
    },
    formatHumanTime(time) {
      return helper.getHumanTime(time);
    },
    showFeedItem(feedItem) {
      emitter.emit("on_popup_feeditem_content", { feedItem, feed: this.feed });
    }
  }
}, "$hgQKyT8xi7");
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_pagination = ElPagination;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-49d7c81c><div style="${ssrRenderStyle({ "height": "30px" })}" data-v-49d7c81c></div><!--[-->`);
  ssrRenderList(_ctx.feedItems, (item, index2) => {
    _push(`<div style="${ssrRenderStyle({ "margin-bottom": "35px" })}" data-v-49d7c81c><a class="feed_item_list_container" data-v-49d7c81c><p class="feed_item_list_container_title" data-v-49d7c81c>${ssrInterpolate(item.title)}</p><p class="feed_item_list_container_desc" data-v-49d7c81c>${ssrInterpolate(item.desc)}</p></a><div style="${ssrRenderStyle({ "display": "flex", "margin-top": "5px" })}" data-v-49d7c81c><span class="feed_item_list_container_time" data-v-49d7c81c>${ssrInterpolate(_ctx.formatHumanTime(item.publish_time))}</span><div style="${ssrRenderStyle({ "flex": "1" })}" data-v-49d7c81c></div><a class="article_link" style="${ssrRenderStyle({ "color": "#009a61" })}" data-v-49d7c81c>\u67E5\u770B\u5185\u5BB9</a><span style="${ssrRenderStyle({ "color": "#ccc" })}" data-v-49d7c81c>\xA0\xA0|\xA0\xA0</span><a class="article_link"${ssrRenderAttr("href", "/feed-item/" + item.feed_item_id + ".html")} data-v-49d7c81c>\u5168\u5C4F\u9605\u8BFB</a><span style="${ssrRenderStyle({ "color": "#ccc" })}" data-v-49d7c81c>\xA0\xA0|\xA0\xA0</span><a class="article_link"${ssrRenderAttr("href", item.feed_url)} data-v-49d7c81c>\u539F\u6587\u94FE\u63A5</a></div></div>`);
  });
  _push(`<!--]-->`);
  _push(ssrRenderComponent(_component_el_pagination, {
    background: "",
    layout: "prev, pager, next",
    total: _ctx.totalCount,
    style: { "width": "100%" },
    "page-size": 30
  }, null, _parent));
  _push(`<div style="${ssrRenderStyle({ "height": "30px" })}" data-v-49d7c81c></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rss/FeedDetail.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FeedDetail = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-49d7c81c"]]);
const _sfc_main$1 = defineNuxtComponent({
  props: {
    feed: {
      type: Object,
      default: []
    },
    feedItem: {
      type: Object,
      default: []
    }
  },
  async asyncData() {
    return {
      isMobile: browser.isMobile()
    };
  },
  methods: {
    formatTime(time) {
      return helper.getHumanTime(time / 1e3);
    }
  }
}, "$8qCe8w8SW2");
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "15px", "padding": "20px", "background-color": "white", "border-radius": "8px" } }, _attrs))} data-v-68bfcaff><div data-v-68bfcaff>`);
  if (_ctx.feed != null) {
    _push(`<div class="feed_item_container_feedname" style="${ssrRenderStyle({ "display": "flex" })}" data-v-68bfcaff><img${ssrRenderAttr("src", _ctx.feed.icon_url)} data-v-68bfcaff><span data-v-68bfcaff>${ssrInterpolate(_ctx.feed.name)}</span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<p class="feed_item_container_title" data-v-68bfcaff>${ssrInterpolate(_ctx.feedItem.title)}</p><p class="feed_item_container_time" data-v-68bfcaff>${ssrInterpolate(_ctx.formatTime(_ctx.feedItem.publish_time))}</p></div><div style="${ssrRenderStyle({ "padding": "10px" })}" data-v-68bfcaff><div data-v-68bfcaff>${(_a = _ctx.feedItem.desc) != null ? _a : ""}</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rss/FeedItemDesc.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FeedItemDesc = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-68bfcaff"]]);
const _sfc_main = defineNuxtComponent({
  components: {
    FeedDetail,
    FeedItemDesc,
    Refresh: refresh_default
  },
  async asyncData() {
    let __temp, __restore;
    const route = useRoute();
    let feedID = route.params.feed_id;
    route.params.feed_item_id;
    let feedObj = null;
    let feedResponse = ([__temp, __restore] = executeAsync(() => rssbiz.queryFeedByIDs(true, [feedID])), __temp = await __temp, __restore(), __temp);
    if (helper.isResultOk(feedResponse)) {
      if (feedResponse.data.list.length == 1) {
        feedObj = feedResponse.data.list[0];
      }
    }
    let feedName = "";
    let iconURL = "";
    if (feedObj != null) {
      iconURL = feedObj.icon_url;
      feedName = feedObj.name;
    }
    let feedItems = [];
    let feedItemsResponse = ([__temp, __restore] = executeAsync(() => rssbiz.queryFeedItemsByFeedID(true, feedID, 30, 0)), __temp = await __temp, __restore(), __temp);
    if (helper.isResultOk(feedItemsResponse)) {
      feedItems = feedItemsResponse.data.list;
    }
    for (var index2 in feedItems) {
      feedItems[index2].feed_icon = iconURL;
      feedItems[index2].feed_name = feedName;
    }
    let currentFeedItem = feedItems[0];
    return {
      feed: feedObj,
      feedItems,
      currentFeedItem,
      isMobile: browser.isMobile()
    };
  },
  mounted() {
  },
  methods: {}
}, "$R5geNhpl1D");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_icon = ElIcon;
  const _component_Refresh = resolveComponent("Refresh");
  const _component_FeedDetail = resolveComponent("FeedDetail");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "feed_item_conatiner" }, _attrs))} data-v-ed1e8957><div style="${ssrRenderStyle({ "height": "30px" })}" data-v-ed1e8957></div><div style="${ssrRenderStyle({ "display": "flex" })}" data-v-ed1e8957><div data-v-ed1e8957><h2 class="feed_name" data-v-ed1e8957>${ssrInterpolate(_ctx.feed.name)}</h2><div class="feed_info_desc" data-v-ed1e8957><span data-v-ed1e8957>3\u4F4D\u8BA2\u9605\u7528\u6237</span><span data-v-ed1e8957>\xA0\xA0\uFF5C\xA0\xA0</span><span data-v-ed1e8957>30\u7BC7\u6587\u7AE0</span></div></div><div style="${ssrRenderStyle({ "flex": "1" })}" data-v-ed1e8957></div><div style="${ssrRenderStyle({ "margin-top": "15px" })}" data-v-ed1e8957><a class="svg_icon_container" data-v-ed1e8957>`);
  _push(ssrRenderComponent(_component_el_icon, { size: 30 }, {
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
  _push(`</a></div></div><div style="${ssrRenderStyle({ "height": "20px" })}" data-v-ed1e8957></div>`);
  _push(ssrRenderComponent(_component_FeedDetail, {
    ref: "feedItemsComp",
    feed: _ctx.feed,
    feedItems: _ctx.feedItems,
    totalCount: 0
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my/feed/[[feed_id]]/[[feed_item_id]].html/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ed1e8957"]]);

export { index as default };
//# sourceMappingURL=index-tVBQoGMe.mjs.map
