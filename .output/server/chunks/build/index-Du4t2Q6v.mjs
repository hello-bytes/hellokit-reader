import { E as ElInput } from './index-C4SW8lk2.mjs';
import { E as ElButton } from './el-button-KAYtidDM.mjs';
import { e as search_default, g as folder_add_default, h as folder_checked_default, E as ElIcon } from './index-DkfqKprI.mjs';
import { E as ElTooltip } from './el-popper-IPLn1IGN.mjs';
import { E as ElPagination } from './el-select-BPCfhimv.mjs';
import { _ as _export_sfc, d as defineNuxtComponent, f as useRoute, g as executeAsync, h as helper, j as devicebiz } from './server.mjs';
import { e as emitter } from './event-f_DzkNfH.mjs';
import { r as rssbiz } from './rss-D-s2yPOL.mjs';
import { r as rssfolder } from './folder-2LS57DQv.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import '@vueuse/core';
import 'lodash-unified';
import '@vue/shared';
import './base-BSYjTNA2.mjs';
import './constants-XLKnfDE9.mjs';
import './index-FYQmeljH.mjs';
import './typescript-D6L75muK.mjs';
import './el-tag-C0R49AZH.mjs';
import './use-form-item-C9td9zAz.mjs';
import './use-global-config-OeHUdFGt.mjs';
import './objects-MD33mwF0.mjs';
import '@ctrl/tinycolor';
import '@popperjs/core';
import './el-scrollbar-fDmy9Fq1.mjs';
import './index-WNanLJvq.mjs';
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
import 'mitt';
import './user-C1csm6gi.mjs';

const _sfc_main = defineNuxtComponent({
  components: {
    Search: search_default,
    FolderAdd: folder_add_default,
    FolderChecked: folder_checked_default
  },
  async asyncData() {
    let __temp, __restore;
    const route = useRoute();
    parseInt(route.params.page);
    let text = route.params.text;
    if (text == null || text == void 0) {
      text = "";
    }
    let feeds = [];
    let feedIDs = [];
    let feedsCount = 0;
    let feedListResponse = ([__temp, __restore] = executeAsync(() => rssbiz.searchFeed(true, text, 2, 30, 0)), __temp = await __temp, __restore(), __temp);
    if (helper.isResultOk(feedListResponse)) {
      feeds = feedListResponse.data.list;
      feedsCount = feedListResponse.data.total_count;
    }
    for (let index2 in feeds) {
      feeds[index2].folderList = [];
      feeds[index2].feed_item_count = 0;
      feeds[index2].recent_feeditem_count = 0;
      feeds[index2].read_count = 0;
      feeds[index2].follow_count = 0;
      feedIDs.push(feeds[index2].feed_id);
    }
    let feedStaticsResponse = ([__temp, __restore] = executeAsync(() => rssbiz.queryFeedStaticsByIDs(true, feedIDs)), __temp = await __temp, __restore(), __temp);
    if (helper.isResultOk(feedStaticsResponse)) {
      let feedStatcisList = feedStaticsResponse.data;
      for (let index2 in feedStatcisList) {
        for (let j in feeds) {
          if (feeds[j].feed_id == feedStatcisList[index2].feed_id) {
            feeds[j].feed_item_count = feedStatcisList[index2].feed_item_count;
            feeds[j].recent_feeditem_count = feedStatcisList[index2].recent_feeditem_count;
            feeds[j].read_count = feedStatcisList[index2].read_count;
            feeds[j].follow_count = feedStatcisList[index2].follow_count;
            break;
          }
        }
      }
    }
    return {
      feeds,
      text,
      urlText: text,
      totalCount: feedsCount,
      totalFeedItemCount: 0,
      pageNumber: 1
    };
  },
  mounted() {
    this.fetchFeedFolder();
    emitter.on("on_feed_folder_update", (param) => {
      this.onFeedFolderUpdate(param);
    });
  },
  methods: {
    async fetchFeedFolder() {
      if (this.feeds == null) {
        return;
      }
      let feedIDs = [];
      for (let index2 in this.feeds) {
        feedIDs.push(this.feeds[index2].feed_id);
      }
      let responseData = await rssfolder.getFolderIDByFeedIDs(devicebiz.getDeviceID(), feedIDs);
      if (helper.isResultOk(responseData)) {
        let folders = responseData.data;
        for (let i in folders) {
          for (var j in this.feeds) {
            if (this.feeds[j].feed_id == folders[i].feed_id) {
              this.feeds[j].folderList = folders[i].user_folder_list;
            }
          }
        }
      }
    },
    onSubscribeClick(feed) {
      emitter.emit("on_popup_selectfolder", { currentFeed: feed, action: 1 });
    },
    async onFeedFolderUpdate(params) {
      let feedID = params.feed.feed_id;
      let responseData = await rssfolder.getFolderIDByFeedIDs(devicebiz.getDeviceID(), [feedID]);
      if (helper.isResultOk(responseData)) {
        for (var i in this.feeds) {
          if (this.feeds[i].feed_id == feedID) {
            if (responseData.data.length == 1) {
              this.feeds[i].folderList = responseData.data[0].user_folder_list;
            } else {
              this.feeds[i].folderList = [];
            }
          }
        }
      }
    },
    wrapCountDisplay(count) {
      if (count < 1e3) {
        return count;
      } else if (count < 1e3 * 1e3) {
        return (count / 1e3).toFixed(2) + "K";
      } else if (count < 1e3 * 1e3 * 1e3) {
        return (count / (1e3 * 1e3)).toFixed(2) + "M";
      } else if (count < 1e3 * 1e3 * 1e3 * 1e3) {
        return (count / (1e3 * 1e3 * 1e3)).toFixed(2) + "B";
      }
      return "Infinity";
    },
    onSearchClick() {
      (void 0).location.href = "/feed/search/" + this.text;
    },
    async loadPage(pageNumber) {
      let feeds = [];
      let feedIDs = [];
      let feedListResponse = await rssbiz.searchFeed(true, urlText, 2, 30, (pageNumber - 1) * 30);
      if (helper.isResultOk(feedListResponse)) {
        feeds = feedListResponse.data.list;
        feedListResponse.data.total_count;
      }
      for (let index2 in feeds) {
        feeds[index2].folderList = [];
        feeds[index2].feed_item_count = 0;
        feeds[index2].recent_feeditem_count = 0;
        feeds[index2].read_count = 0;
        feeds[index2].follow_count = 0;
        feedIDs.push(feeds[index2].feed_id);
      }
      let feedStaticsResponse = await rssbiz.queryFeedStaticsByIDs(true, feedIDs);
      if (helper.isResultOk(feedStaticsResponse)) {
        let feedStatcisList = feedStaticsResponse.data;
        for (let index2 in feedStatcisList) {
          for (let j in feeds) {
            if (feeds[j].feed_id == feedStatcisList[index2].feed_id) {
              feeds[j].feed_item_count = feedStatcisList[index2].feed_item_count;
              feeds[j].recent_feeditem_count = feedStatcisList[index2].recent_feeditem_count;
              feeds[j].read_count = feedStatcisList[index2].read_count;
              feeds[j].follow_count = feedStatcisList[index2].follow_count;
              break;
            }
          }
        }
      }
      this.feeds = feeds;
    },
    handlePageChange(currentPage) {
      this.loadPage(parseInt(currentPage));
    },
    onFeedClick(feed) {
      emitter.emit("on_popup_feed", { feed });
    },
    onInputKeyDown(event) {
      if (this.text.length == 0) {
        (void 0).location.href = "/feed/website/ft/1.html";
      } else {
        (void 0).location.href = "/feed/search/" + this.text;
      }
    }
  }
}, "$ejYTspQQe5");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_input = ElInput;
  const _component_el_button = ElButton;
  const _component_el_icon = ElIcon;
  const _component_Search = resolveComponent("Search");
  const _component_FolderAdd = resolveComponent("FolderAdd");
  const _component_el_tooltip = ElTooltip;
  const _component_FolderChecked = resolveComponent("FolderChecked");
  const _component_el_pagination = ElPagination;
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "width": "800px", "margin": "0px auto", "padding-top": "35px" } }, _attrs))} data-v-1120e051><h2 data-v-1120e051>\u641C\u7D22\u60A8\u60F3\u770B\u7684\u9891\u9053</h2>`);
  _push(ssrRenderComponent(_component_el_input, {
    modelValue: _ctx.text,
    "onUpdate:modelValue": ($event) => _ctx.text = $event,
    onKeyup: _ctx.onInputKeyDown,
    size: "large",
    placeholder: "",
    class: "input-with-select"
  }, {
    append: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_button, { onClick: _ctx.onSearchClick }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_icon, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_Search, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_Search)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`\xA0\xA0\u641C\u7D22`);
            } else {
              return [
                createVNode(_component_el_icon, null, {
                  default: withCtx(() => [
                    createVNode(_component_Search)
                  ]),
                  _: 1
                }),
                createTextVNode("\xA0\xA0\u641C\u7D22")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_el_button, { onClick: _ctx.onSearchClick }, {
            default: withCtx(() => [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_Search)
                ]),
                _: 1
              }),
              createTextVNode("\xA0\xA0\u641C\u7D22")
            ]),
            _: 1
          }, 8, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p style="${ssrRenderStyle({ "margin-bottom": "5px", "margin-top": "30px" })}" data-v-1120e051>\u5171\xA0${ssrInterpolate(_ctx.totalCount)}\xA0\u6761\u7ED3\u679C</p><!--[-->`);
  ssrRenderList(_ctx.feeds, (item, index2) => {
    _push(`<div class="feed_container" data-v-1120e051><div class="feed_container_top" data-v-1120e051><img${ssrRenderAttr("src", item.icon_url)} data-v-1120e051><div style="${ssrRenderStyle({ "flex": "1", "margin-left": "10px" })}" data-v-1120e051><a class="feed_name" data-v-1120e051>${ssrInterpolate(item.name)}</a><br data-v-1120e051><a class="feed_url"${ssrRenderAttr("href", item.url)} data-v-1120e051>${ssrInterpolate(item.url)}</a><p class="feed_desc" data-v-1120e051>${ssrInterpolate(item.desc)}</p></div><div data-v-1120e051>`);
    {
      _push(`<!---->`);
    }
    if (item.folderList.length == 0) {
      _push(ssrRenderComponent(_component_el_button, {
        onClick: ($event) => _ctx.onSubscribeClick(item)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_icon, { size: 16 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FolderAdd, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FolderAdd)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`\xA0\u8BA2\u9605`);
          } else {
            return [
              createVNode(_component_el_icon, { size: 16 }, {
                default: withCtx(() => [
                  createVNode(_component_FolderAdd)
                ]),
                _: 1
              }),
              createTextVNode("\xA0\u8BA2\u9605")
            ];
          }
        }),
        _: 2
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    if (item.folderList.length > 0) {
      _push(ssrRenderComponent(_component_el_tooltip, {
        effect: "dark",
        content: "\u53D6\u6D88\u8BA2\u9605\u6216\u8F6C\u79FB\u81F3\u5176\u5B83\u76EE\u5F55",
        placement: "right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_button, {
              onClick: ($event) => _ctx.onSubscribeClick(item)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_icon, { size: 16 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FolderChecked, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FolderChecked)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`\xA0\u4FEE\u6539`);
                } else {
                  return [
                    createVNode(_component_el_icon, { size: 16 }, {
                      default: withCtx(() => [
                        createVNode(_component_FolderChecked)
                      ]),
                      _: 1
                    }),
                    createTextVNode("\xA0\u4FEE\u6539")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_button, {
                onClick: ($event) => _ctx.onSubscribeClick(item)
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_icon, { size: 16 }, {
                    default: withCtx(() => [
                      createVNode(_component_FolderChecked)
                    ]),
                    _: 1
                  }),
                  createTextVNode("\xA0\u4FEE\u6539")
                ]),
                _: 2
              }, 1032, ["onClick"])
            ];
          }
        }),
        _: 2
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div><div style="${ssrRenderStyle({ "display": "flex", "padding-left": "50px", "margin-top": "15px" })}" data-v-1120e051><div class="feed_counter" data-v-1120e051><p data-v-1120e051>${ssrInterpolate(_ctx.wrapCountDisplay(item.follow_count))}</p><p data-v-1120e051>\u8BA2\u9605</p></div><div style="${ssrRenderStyle({ "flex": "1" })}" data-v-1120e051></div><div class="feed_counter" data-v-1120e051><p data-v-1120e051>${ssrInterpolate(_ctx.wrapCountDisplay(item.read_count))}</p><p data-v-1120e051>\u7D2F\u8BA1\u9605\u8BFB</p></div><div style="${ssrRenderStyle({ "flex": "1" })}" data-v-1120e051></div><div class="feed_counter" data-v-1120e051><p data-v-1120e051>${ssrInterpolate(_ctx.wrapCountDisplay(item.feed_item_count))}</p><p data-v-1120e051>\u6587\u7AE0</p></div><div style="${ssrRenderStyle({ "flex": "1" })}" data-v-1120e051></div><div class="feed_counter" data-v-1120e051><p data-v-1120e051>${ssrInterpolate(_ctx.wrapCountDisplay(item.recent_feeditem_count))}</p><p data-v-1120e051>\u6700\u8FD1\u66F4\u65B0</p></div></div></div>`);
  });
  _push(`<!--]-->`);
  _push(ssrRenderComponent(_component_el_pagination, {
    background: "",
    layout: "prev, pager, next",
    onCurrentChange: _ctx.handlePageChange,
    "page-size": 30,
    total: _ctx.totalCount
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/feed/search/[[text]]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1120e051"]]);

export { index as default };
//# sourceMappingURL=index-Du4t2Q6v.mjs.map
