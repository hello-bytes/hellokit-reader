import { _ as _export_sfc, d as defineNuxtComponent, f as useRoute, g as executeAsync, h as helper } from './server.mjs';
import { useSSRContext, resolveComponent } from 'vue';
import { r as rssbiz } from './rss-CsPEoumS.mjs';
import { f as feedItemBiz } from './read_later-BhIVw6nV.mjs';
import { F as FeedItemListSEO } from './FeedItemListSEO-D6XYJe7h.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './user-z1s-Jdvw.mjs';
import 'js-cookie';
import './el-divider-D385yaft.mjs';
import './base-CiGMx3WA.mjs';
import './el-popper-cvaMBS-J.mjs';
import '@popperjs/core';
import './constants-dJdD8wGz.mjs';
import './index-Bn0qoa0Y.mjs';
import './index-CXO4VfHa.mjs';
import './index-5CKSucjx.mjs';
import './typescript-D6L75muK.mjs';
import './index-C_KRVs-j.mjs';
import './use-global-config-0TAJExVa.mjs';
import './objects-MD33mwF0.mjs';
import './Pager-BqwivwxM.mjs';
import './event-f_DzkNfH.mjs';
import 'mitt';

const _sfc_main = defineNuxtComponent({
  components: {
    FeedItemListSEO
  },
  async asyncData() {
    let __temp, __restore;
    const route = useRoute();
    let pageNumber = parseInt(route.params.pageNumber);
    if (pageNumber < 1) {
      pageNumber = 1;
    }
    let feedItems = [];
    let totalCount = 0;
    let responseData = ([__temp, __restore] = executeAsync(() => rssbiz.queryFeedItemsByFeedID(true, "0", 30, (pageNumber - 1) * 30)), __temp = await __temp, __restore(), __temp);
    if (helper.isResultOk(responseData)) {
      feedItems = responseData.data.list;
      totalCount = responseData.data.total_count;
      let feedIds = [];
      let feedItemIds = [];
      for (let index2 in feedItems) {
        feedItems[index2].readState = 1;
        feedItems[index2].isReadLater = false;
        feedItems[index2].feed = null;
        feedItems[index2].authorList = [];
        feedItemIds.push(feedItems[index2].feed_item_id);
        let found = false;
        let checkFeedId = feedItems[index2].feed_id;
        for (let index3 in feedIds) {
          if (feedIds[index3] == checkFeedId) {
            found = true;
            break;
          }
        }
        if (!found) {
          feedIds.push(feedItems[index2].feed_id);
        }
      }
      if (feedIds.length > 0) {
        let responseData2 = ([__temp, __restore] = executeAsync(() => rssbiz.queryFeedByIDs(true, feedIds)), __temp = await __temp, __restore(), __temp);
        if (helper.isResultOk(responseData2)) {
          let feedList = responseData2.data.list;
          for (let index2 in feedItems) {
            for (let j in feedList) {
              if (feedList[j].feed_id == feedItems[index2].feed_id) {
                feedItems[index2].feed = feedList[j];
              }
            }
          }
        }
      }
      let feedItemAuthorResponseData = ([__temp, __restore] = executeAsync(() => feedItemBiz.fetchAuthor(true, feedItemIds)), __temp = await __temp, __restore(), __temp);
      if (helper.isResultOk(feedItemAuthorResponseData)) {
        let authorList = feedItemAuthorResponseData.data;
        for (let i in authorList) {
          for (let j in feedItems) {
            if (authorList[i].feed_item_id == feedItems[j].feed_item_id) {
              feedItems[j].authorList.push(authorList[i]);
              break;
            }
          }
        }
      }
    }
    return {
      feedItems,
      totalCount,
      pageNumber
    };
  },
  mounted() {
  },
  methods: {
    isFeedIdExist(feedID, feedIds) {
      let found = false;
      for (let index2 in feedIds) {
        if (feedIds[index2] == feedID) {
          found = true;
          break;
        }
      }
      return found;
    }
  }
}, "$pOevLq8Fpn");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FeedItemListSEO = resolveComponent("FeedItemListSEO");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_FeedItemListSEO, {
    pageNumber: _ctx.pageNumber,
    totalCount: _ctx.totalCount,
    feedItems: _ctx.feedItems
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/feed-item/page/[[pageNumber]].html/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BRKILMGa.mjs.map
