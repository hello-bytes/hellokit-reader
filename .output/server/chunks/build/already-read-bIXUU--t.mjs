import { E as ElDivider } from './el-divider-D3HTy-mk.mjs';
import { _ as _export_sfc, d as defineNuxtComponent, h as helper, j as devicebiz } from './server.mjs';
import { E as ElMessage } from './index-DoQiR3n0.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { r as rssbiz } from './rss-D-s2yPOL.mjs';
import { L as Loading, E as ElDropdown, a as ElDropdownMenu, b as ElDropdownItem } from './el-dropdown-item-BDgCuFnw.mjs';
import { E as ElTooltip } from './el-popper-IPLn1IGN.mjs';
import { a as check_default, r as refresh_default, s as select_default, b as share_default, d as reading_default, m as more_default, l as link_default, p as paperclip_default, f as full_screen_default, c as collection_tag_default, E as ElIcon } from './index-DkfqKprI.mjs';
import { E as ElButton } from './el-button-KAYtidDM.mjs';
import { E as ElPagination } from './el-select-BPCfhimv.mjs';
import { r as readLater, f as feedItemBiz } from './read_later-CHodLy6D.mjs';
import { e as emitter } from './event-f_DzkNfH.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { A as AddRssWhite } from './AddRssWhite-C0G9H8dw.mjs';
import { E as EmptyFolder, A as AllDoneFolder } from './AllDoneFolder-B-MwXdG0.mjs';
import { G as Good } from './Good-DSQoGmif.mjs';
import './base-BSYjTNA2.mjs';
import 'lodash-unified';
import '@vue/shared';
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
import '@vueuse/core';
import './typescript-D6L75muK.mjs';
import './index-FYQmeljH.mjs';
import './use-global-config-OeHUdFGt.mjs';
import './constants-XLKnfDE9.mjs';
import './objects-MD33mwF0.mjs';
import './user-C1csm6gi.mjs';
import './el-scrollbar-fDmy9Fq1.mjs';
import './use-form-item-C9td9zAz.mjs';
import '@popperjs/core';
import '@ctrl/tinycolor';
import './index-C4SW8lk2.mjs';
import './el-tag-C0R49AZH.mjs';
import './index-WNanLJvq.mjs';
import 'mitt';

const _sfc_main$1 = defineNuxtComponent({
  props: {
    pageMode: {
      type: Number,
      default: 1
      //  1 分页， 2 自动加载更多
    },
    onlyShowReadLater: {
      type: Boolean,
      default: false
      // 是否只显示read later的文章，状态改变后自动删除
    },
    readedMode: {
      type: Number,
      default: 0
      // 0 全部显示， 1 只显示未读， 3 只显示已读
    },
    showSetReadedButton: {
      type: Boolean,
      default: false
      // 0 全部显示， 1 只显示未读， 3 只显示已读
    }
  },
  components: {
    Check: check_default,
    Refresh: refresh_default,
    Select: select_default,
    Share: share_default,
    Reading: reading_default,
    More: more_default,
    Link: link_default,
    Paperclip: paperclip_default,
    FullScreen: full_screen_default,
    CollectionTag: collection_tag_default
  },
  async asyncData() {
    return {
      totalCount: 0,
      feedItems: [],
      currentPage: 1,
      readLaterList: [],
      // 里面有加入read later的时间，用来排序
      currentFeed: null,
      feedItem: null
      // 当前被选中（点击）的 FeedItem
    };
  },
  mounted() {
  },
  methods: {
    async setFeedItemIDs(feedItemIDs, totalCount) {
      let feedItems = [];
      let responseData = await rssbiz.getFeedItemByIDs(false, feedItemIDs);
      if (helper.isResultOk(responseData)) {
        feedItems = responseData.data;
        await this.loadReadedFlag(feedItems);
        await this.loadReadLaterFlag(feedItems);
        await this.loadFeedForFeedItem(feedItems);
        await this.loadAuthorForFeedItem(feedItems);
        let sortFeedItems = [];
        for (let i in feedItemIDs) {
          for (let j in feedItems) {
            if (feedItems[j].feed_item_id == feedItemIDs[i]) {
              sortFeedItems.push(feedItems[j]);
              break;
            }
          }
        }
        this.feedItems = sortFeedItems;
        this.totalCount = totalCount;
      }
    },
    async setFeedItems(feedItems, pageNumber, totalCount) {
      await this.loadReadedFlag(feedItems);
      await this.loadReadLaterFlag(feedItems);
      await this.loadFeedForFeedItem(feedItems);
      await this.loadAuthorForFeedItem(feedItems);
      this.currentPage = pageNumber;
      this.feedItems = feedItems;
      this.totalCount = totalCount;
    },
    setReadLaterIDList(readLaterIDs) {
      this.readLaterList = readLaterIDs;
    },
    notifyFeedItemChange() {
      this.$emit("feedItemCountChange", this.feedItems.length);
    },
    isFeedIdExist(feedID, feedIds) {
      let found = false;
      for (let index in feedIds) {
        if (feedIds[index] == feedID) {
          found = true;
          break;
        }
      }
      return found;
    },
    async loadReadedFlag(feedItems) {
      let feedItemIds = [];
      for (let index in feedItems) {
        feedItems[index].readState = 1;
        if (this.isFeedIdExist(feedItems[index].feed_item_id, feedItemIds))
          ;
        else {
          feedItemIds.push(feedItems[index].feed_item_id);
        }
      }
      let responseData = await rssbiz.fetchUserFeedItemByIds(devicebiz.getDeviceID(), feedItemIds);
      if (!helper.isResultOk(responseData)) {
        return;
      }
      let userFeedItemList = responseData.data;
      for (let index in feedItems) {
        for (let j in userFeedItemList) {
          if (userFeedItemList[j].feed_item_id == feedItems[index].feed_item_id) {
            feedItems[index].readState = userFeedItemList[j].readed;
          }
        }
      }
    },
    async loadReadLaterFlag(feedItems) {
      let feedItemIds = [];
      for (let index in feedItems) {
        feedItems[index].isReadLater = false;
        if (this.isFeedIdExist(feedItems[index].feed_item_id, feedItemIds))
          ;
        else {
          feedItemIds.push(feedItems[index].feed_item_id);
        }
      }
      let responseData = await readLater.getReadLaterByFeedItems(devicebiz.getDeviceID(), feedItemIds);
      if (helper.isResultOk(responseData)) {
        for (let index in feedItems) {
          let feedItemID = feedItems[index].feed_item_id;
          for (let j in responseData.data) {
            if (responseData.data[j].feed_item_id == feedItemID) {
              feedItems[index].isReadLater = true;
              break;
            }
          }
        }
      }
    },
    async loadFeedForFeedItem(feedItems) {
      let feedIds = [];
      for (let index in feedItems) {
        feedItems[index].feed = null;
        if (this.isFeedIdExist(feedItems[index].feed_id, feedIds))
          ;
        else {
          feedIds.push(feedItems[index].feed_id);
        }
      }
      if (feedIds.length > 0) {
        let responseData = await rssbiz.queryFeedByIDs(false, feedIds);
        if (helper.isResultOk(responseData)) {
          let feedList = responseData.data.list;
          for (let index in feedItems) {
            for (let j in feedList) {
              if (feedList[j].feed_id == feedItems[index].feed_id) {
                feedItems[index].feed = feedList[j];
              }
            }
          }
        }
      }
    },
    async loadAuthorForFeedItem(feedItems) {
      let feedItemIds = [];
      for (let index in feedItems) {
        feedItems[index].authorList = [];
        if (this.isFeedIdExist(feedItems[index].feed_item_id, feedItemIds))
          ;
        else {
          feedItemIds.push(feedItems[index].feed_item_id);
        }
      }
      let responseData = await feedItemBiz.fetchAuthor(false, feedItemIds);
      if (helper.isResultOk(responseData)) {
        let authorList = responseData.data;
        for (let i in authorList) {
          for (let j in feedItems) {
            if (authorList[i].feed_item_id == feedItems[j].feed_item_id) {
              feedItems[j].authorList.push(authorList[i]);
              break;
            }
          }
        }
      }
    },
    formatHumanTime(time) {
      return helper.getHumanTime(time);
    },
    showFeedItem(feedItem2) {
      emitter.emit("on_popup_feeditem_content", { feed: feedItem2.feed, feedItem: feedItem2 });
    },
    loadMore() {
      if (this.pageMode == 1) {
        return;
      }
    },
    handlePageChange(pageNumber) {
      this.$emit("onPageChange", { pageNumber: parseInt(pageNumber) });
    },
    onSetReadAndNextPage() {
      this.$emit("setReadedAndNextPage", { feedItems: this.feedItems, currentPage: this.currentPage });
    },
    removeByFeedItemID(feedItemID) {
      let i = 0;
      while (i < this.feedItems.length) {
        if (this.feedItems[i].feed_item_id === feedItemID) {
          this.feedItems.splice(i, 1);
        } else {
          ++i;
        }
      }
      this.notifyFeedItemChange();
    },
    async onSetFeedItemState(feedItem2, readState) {
      let readStateInt = parseInt(readState);
      let responseData = await rssbiz.setFeedItemReadState(devicebiz.getDeviceID(), feedItem2.feed_item_id, readStateInt);
      if (helper.isResultOk(responseData)) {
        feedItem2.readState = readStateInt;
      } else {
        ElMessage.error('\u8BBE\u7F6E\u4E3A"' + (readStateInt == 1 ? "\u672A\u8BFB" : "\u5DF2\u8BFB") + '"\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002');
      }
    },
    async setReadLater(feedItem2) {
      let responseData = await readLater.setReadLater(devicebiz.getDeviceID(), feedItem2.feed_id, feedItem2.feed_item_id);
      if (!helper.isResultOk(responseData)) {
        ElMessage.error('\u8BBE\u7F6E\u201C\u7A0D\u540E\u9605\u8BFB"\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002');
      } else {
        feedItem2.isReadLater = true;
      }
    },
    async removeReadLater(feedItem2) {
      let responseData = await readLater.removeReadLater(devicebiz.getDeviceID(), feedItem2.feed_item_id);
      if (!helper.isResultOk(responseData)) {
        ElMessage.error('\u53D6\u6D88\u201C\u7A0D\u540E\u9605\u8BFB"\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002');
      } else {
        if (this.onlyShowReadLater) {
          this.removeByFeedItemID(feedItem2.feed_item_id);
        }
        feedItem2.isReadLater = false;
      }
    },
    onShareArticle() {
    },
    setPageIndex(currentPage) {
      this.currentPage = currentPage;
    },
    onFeedClick(feedObj) {
      emitter.emit("on_popup_feed", { feed: feedObj });
    },
    loadMoreFeedItem() {
    }
  }
}, "$5rOHbgHksb");
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_tooltip = ElTooltip;
  const _component_el_icon = ElIcon;
  const _component_Reading = resolveComponent("Reading");
  const _component_Check = resolveComponent("Check");
  const _component_CollectionTag = resolveComponent("CollectionTag");
  const _component_el_dropdown = ElDropdown;
  const _component_More = resolveComponent("More");
  const _component_el_dropdown_menu = ElDropdownMenu;
  const _component_el_dropdown_item = ElDropdownItem;
  const _component_Share = resolveComponent("Share");
  const _component_FullScreen = resolveComponent("FullScreen");
  const _component_Paperclip = resolveComponent("Paperclip");
  const _component_el_button = ElButton;
  const _component_el_pagination = ElPagination;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-26789c3e><!--[-->`);
  ssrRenderList(_ctx.feedItems, (item, index) => {
    _push(`<div style="${ssrRenderStyle({ "margin-top": "20px", "margin-bottom": "20px", "border-bottom": "1px solid #eee", "padding-bottom": "10px" })}" data-v-26789c3e>`);
    if (item.thumb_url.length > 0) {
      _push(`<div data-v-26789c3e><div data-v-26789c3e>`);
      if (item.feed != null) {
        _push(`<a target="_blank" class="feed_name_img" data-v-26789c3e><img${ssrRenderAttr("src", item.feed.icon_url)} data-v-26789c3e> ${ssrInterpolate(item.feed.name)}${ssrInterpolate(item.authorList.length > 0 ? " \xB7 " + item.authorList[0].author_name : "")}</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="feed_item_list_img_container" data-v-26789c3e><img class="feed_item_img"${ssrRenderAttr("src", item.thumb_url)} data-v-26789c3e><div class="feed_item_list_content_container" data-v-26789c3e><a class="${ssrRenderClass([{ feed_item_list_container_title_readed: item.readState != 1 }, "feed_item_list_container_title"])}" data-v-26789c3e>${ssrInterpolate(item.title)}</a><p class="feed_item_list_container_desc" data-v-26789c3e>${ssrInterpolate(item.desc)}</p><div style="${ssrRenderStyle({ "display": "flex", "margin-top": "5px" })}" data-v-26789c3e><div style="${ssrRenderStyle({ "height": "30px", "line-height": "30px" })}" data-v-26789c3e><span class="feed_item_list_container_time" data-v-26789c3e>${ssrInterpolate(_ctx.formatHumanTime(item.publish_time))}</span><span class="feed_item_list_container_time" data-v-26789c3e>\xA0\xB7\xA0</span><span class="feed_item_list_container_time" data-v-26789c3e>${ssrInterpolate(item.read_count)}\u6B21\u9605\u8BFB</span></div><div style="${ssrRenderStyle({ "flex": "1" })}" data-v-26789c3e></div>`);
      _push(ssrRenderComponent(_component_el_tooltip, {
        effect: "dark",
        content: "\u5FEB\u901F\u9605\u8BFB\u6B64\u6587\u7AE0",
        placement: "top-start"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="svg_icon_container_mini" data-v-26789c3e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_icon, {
              size: 20,
              color: "#757575"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Reading, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Reading)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                onClick: ($event) => _ctx.showFeedItem(item),
                class: "svg_icon_container_mini"
              }, [
                createVNode(_component_el_icon, {
                  size: 20,
                  color: "#757575"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Reading)
                  ]),
                  _: 1
                })
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`<span data-v-26789c3e>\xA0</span>`);
      if (item.readState == 1) {
        _push(ssrRenderComponent(_component_el_tooltip, {
          effect: "dark",
          content: "\u6807\u8BB0\u4E3A\u5DF2\u8BFB",
          placement: "top-start"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="svg_icon_container_mini" data-v-26789c3e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_icon, {
                size: 20,
                color: "#757575"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Check, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Check)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  onClick: ($event) => _ctx.onSetFeedItemState(item, 2),
                  class: "svg_icon_container_mini"
                }, [
                  createVNode(_component_el_icon, {
                    size: 20,
                    color: "#757575"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Check)
                    ]),
                    _: 1
                  })
                ], 8, ["onClick"])
              ];
            }
          }),
          _: 2
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (item.readState != 1) {
        _push(ssrRenderComponent(_component_el_tooltip, {
          effect: "dark",
          content: "\u6807\u8BB0\u4E3A\u672A\u8BFB",
          placement: "top-start"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="svg_icon_container_mini" data-v-26789c3e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_icon, {
                size: 20,
                color: "#757575"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Check, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Check)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  onClick: ($event) => _ctx.onSetFeedItemState(item, 1),
                  class: "svg_icon_container_mini"
                }, [
                  createVNode(_component_el_icon, {
                    size: 20,
                    color: "#757575"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Check)
                    ]),
                    _: 1
                  })
                ], 8, ["onClick"])
              ];
            }
          }),
          _: 2
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-26789c3e>\xA0</span>`);
      if (!item.isReadLater) {
        _push(ssrRenderComponent(_component_el_tooltip, {
          effect: "dark",
          content: "\u6DFB\u52A0\u5230\u7A0D\u540E\u9605\u8BFB",
          placement: "top-start"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="svg_icon_container_mini" data-v-26789c3e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_icon, {
                size: 20,
                color: "#757575"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_CollectionTag, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_CollectionTag)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  onClick: ($event) => _ctx.setReadLater(item),
                  class: "svg_icon_container_mini"
                }, [
                  createVNode(_component_el_icon, {
                    size: 20,
                    color: "#757575"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_CollectionTag)
                    ]),
                    _: 1
                  })
                ], 8, ["onClick"])
              ];
            }
          }),
          _: 2
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (item.isReadLater) {
        _push(ssrRenderComponent(_component_el_tooltip, {
          effect: "dark",
          content: "\u53D6\u6D88\u7A0D\u540E\u9605\u8BFB",
          placement: "top-start"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="svg_icon_container_mini" data-v-26789c3e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_icon, {
                size: 20,
                color: "#009a61"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_CollectionTag, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_CollectionTag)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  onClick: ($event) => _ctx.removeReadLater(item),
                  class: "svg_icon_container_mini"
                }, [
                  createVNode(_component_el_icon, {
                    size: 20,
                    color: "#009a61"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_CollectionTag)
                    ]),
                    _: 1
                  })
                ], 8, ["onClick"])
              ];
            }
          }),
          _: 2
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-26789c3e>\xA0</span>`);
      _push(ssrRenderComponent(_component_el_dropdown, { placement: "bottom-end" }, {
        dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_dropdown_menu, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<a class="article_link" target="_blank" data-v-26789c3e${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_el_icon, { size: 18 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Share, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Share)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`\u5206\u4EAB\u7ED9\u670B\u53CB</a>`);
                      } else {
                        return [
                          createVNode("a", {
                            class: "article_link",
                            onClick: _ctx.onShareArticle,
                            target: "_blank"
                          }, [
                            createVNode(_component_el_icon, { size: 18 }, {
                              default: withCtx(() => [
                                createVNode(_component_Share)
                              ]),
                              _: 1
                            }),
                            createTextVNode("\u5206\u4EAB\u7ED9\u670B\u53CB")
                          ], 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<a class="article_link"${ssrRenderAttr("href", "/feed-item/" + item.feed_item_id + ".html")} target="_blank" data-v-26789c3e${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_el_icon, { size: 18 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FullScreen, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FullScreen)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`\u5728\u65B0\u7A97\u53E3\u6253\u5F00</a>`);
                      } else {
                        return [
                          createVNode("a", {
                            class: "article_link",
                            href: "/feed-item/" + item.feed_item_id + ".html",
                            target: "_blank"
                          }, [
                            createVNode(_component_el_icon, { size: 18 }, {
                              default: withCtx(() => [
                                createVNode(_component_FullScreen)
                              ]),
                              _: 1
                            }),
                            createTextVNode("\u5728\u65B0\u7A97\u53E3\u6253\u5F00")
                          ], 8, ["href"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<a class="article_link"${ssrRenderAttr("href", item.feed_url)} target="_blank" data-v-26789c3e${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_el_icon, { size: 18 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Paperclip, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Paperclip)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`\u539F\u6587\u94FE\u63A5</a>`);
                      } else {
                        return [
                          createVNode("a", {
                            class: "article_link",
                            href: item.feed_url,
                            target: "_blank"
                          }, [
                            createVNode(_component_el_icon, { size: 18 }, {
                              default: withCtx(() => [
                                createVNode(_component_Paperclip)
                              ]),
                              _: 1
                            }),
                            createTextVNode("\u539F\u6587\u94FE\u63A5")
                          ], 8, ["href"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_dropdown_item, null, {
                      default: withCtx(() => [
                        createVNode("a", {
                          class: "article_link",
                          onClick: _ctx.onShareArticle,
                          target: "_blank"
                        }, [
                          createVNode(_component_el_icon, { size: 18 }, {
                            default: withCtx(() => [
                              createVNode(_component_Share)
                            ]),
                            _: 1
                          }),
                          createTextVNode("\u5206\u4EAB\u7ED9\u670B\u53CB")
                        ], 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_dropdown_item, null, {
                      default: withCtx(() => [
                        createVNode("a", {
                          class: "article_link",
                          href: "/feed-item/" + item.feed_item_id + ".html",
                          target: "_blank"
                        }, [
                          createVNode(_component_el_icon, { size: 18 }, {
                            default: withCtx(() => [
                              createVNode(_component_FullScreen)
                            ]),
                            _: 1
                          }),
                          createTextVNode("\u5728\u65B0\u7A97\u53E3\u6253\u5F00")
                        ], 8, ["href"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_el_dropdown_item, null, {
                      default: withCtx(() => [
                        createVNode("a", {
                          class: "article_link",
                          href: item.feed_url,
                          target: "_blank"
                        }, [
                          createVNode(_component_el_icon, { size: 18 }, {
                            default: withCtx(() => [
                              createVNode(_component_Paperclip)
                            ]),
                            _: 1
                          }),
                          createTextVNode("\u539F\u6587\u94FE\u63A5")
                        ], 8, ["href"])
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_dropdown_menu, null, {
                default: withCtx(() => [
                  createVNode(_component_el_dropdown_item, null, {
                    default: withCtx(() => [
                      createVNode("a", {
                        class: "article_link",
                        onClick: _ctx.onShareArticle,
                        target: "_blank"
                      }, [
                        createVNode(_component_el_icon, { size: 18 }, {
                          default: withCtx(() => [
                            createVNode(_component_Share)
                          ]),
                          _: 1
                        }),
                        createTextVNode("\u5206\u4EAB\u7ED9\u670B\u53CB")
                      ], 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_dropdown_item, null, {
                    default: withCtx(() => [
                      createVNode("a", {
                        class: "article_link",
                        href: "/feed-item/" + item.feed_item_id + ".html",
                        target: "_blank"
                      }, [
                        createVNode(_component_el_icon, { size: 18 }, {
                          default: withCtx(() => [
                            createVNode(_component_FullScreen)
                          ]),
                          _: 1
                        }),
                        createTextVNode("\u5728\u65B0\u7A97\u53E3\u6253\u5F00")
                      ], 8, ["href"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_el_dropdown_item, null, {
                    default: withCtx(() => [
                      createVNode("a", {
                        class: "article_link",
                        href: item.feed_url,
                        target: "_blank"
                      }, [
                        createVNode(_component_el_icon, { size: 18 }, {
                          default: withCtx(() => [
                            createVNode(_component_Paperclip)
                          ]),
                          _: 1
                        }),
                        createTextVNode("\u539F\u6587\u94FE\u63A5")
                      ], 8, ["href"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="svg_icon_container_mini" data-v-26789c3e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_icon, {
              size: 20,
              color: "#757575"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_More, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_More)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "svg_icon_container_mini" }, [
                createVNode(_component_el_icon, {
                  size: 20,
                  color: "#757575"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_More)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div></div></div></div></div>`);
    } else {
      _push(`<!---->`);
    }
    if (item.thumb_url.length == 0) {
      _push(`<div data-v-26789c3e>`);
      if (item.feed != null) {
        _push(`<a target="_blank" class="feed_name_img" data-v-26789c3e><img${ssrRenderAttr("src", item.feed.icon_url)} data-v-26789c3e> ${ssrInterpolate(item.feed.name)}${ssrInterpolate(item.authorList.length > 0 ? " \xB7 " + item.authorList[0].author_name : "")}</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a class="feed_item_list_container" data-v-26789c3e><a class="${ssrRenderClass([{ feed_item_list_container_title_readed: item.readState != 1 }, "feed_item_list_container_title"])}" data-v-26789c3e>${ssrInterpolate(item.title)}</a><p class="feed_item_list_container_desc" data-v-26789c3e>${ssrInterpolate(item.desc)}</p></a><div style="${ssrRenderStyle({ "display": "flex", "margin-top": "5px" })}" data-v-26789c3e><div style="${ssrRenderStyle({ "height": "30px", "line-height": "30px" })}" data-v-26789c3e><span class="feed_item_list_container_time" data-v-26789c3e>${ssrInterpolate(_ctx.formatHumanTime(item.publish_time))}</span><span class="feed_item_list_container_time" data-v-26789c3e>\xA0\xB7\xA0</span><span class="feed_item_list_container_time" data-v-26789c3e>${ssrInterpolate(item.read_count)}\u6B21\u9605\u8BFB</span></div><div style="${ssrRenderStyle({ "flex": "1" })}" data-v-26789c3e></div>`);
      _push(ssrRenderComponent(_component_el_tooltip, {
        effect: "dark",
        content: "\u5FEB\u901F\u9605\u8BFB\u6B64\u6587\u7AE0",
        placement: "top-start"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="svg_icon_container_mini" data-v-26789c3e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_icon, {
              size: 20,
              color: "#757575"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Reading, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Reading)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                onClick: ($event) => _ctx.showFeedItem(item),
                class: "svg_icon_container_mini"
              }, [
                createVNode(_component_el_icon, {
                  size: 20,
                  color: "#757575"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Reading)
                  ]),
                  _: 1
                })
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`<span data-v-26789c3e>\xA0</span>`);
      if (item.readState == 1) {
        _push(ssrRenderComponent(_component_el_tooltip, {
          effect: "dark",
          content: "\u6807\u8BB0\u4E3A\u5DF2\u8BFB",
          placement: "top-start"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="svg_icon_container_mini" data-v-26789c3e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_icon, {
                size: 20,
                color: "#757575"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Check, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Check)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  onClick: ($event) => _ctx.onSetFeedItemState(item, 2),
                  class: "svg_icon_container_mini"
                }, [
                  createVNode(_component_el_icon, {
                    size: 20,
                    color: "#757575"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Check)
                    ]),
                    _: 1
                  })
                ], 8, ["onClick"])
              ];
            }
          }),
          _: 2
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (item.readState != 1) {
        _push(ssrRenderComponent(_component_el_tooltip, {
          effect: "dark",
          content: "\u6807\u8BB0\u4E3A\u672A\u8BFB",
          placement: "top-start"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="svg_icon_container_mini" data-v-26789c3e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_icon, {
                size: 20,
                color: "#757575"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Check, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Check)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  onClick: ($event) => _ctx.onSetFeedItemState(item, 1),
                  class: "svg_icon_container_mini"
                }, [
                  createVNode(_component_el_icon, {
                    size: 20,
                    color: "#757575"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Check)
                    ]),
                    _: 1
                  })
                ], 8, ["onClick"])
              ];
            }
          }),
          _: 2
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-26789c3e>\xA0</span>`);
      if (!item.isReadLater) {
        _push(ssrRenderComponent(_component_el_tooltip, {
          effect: "dark",
          content: "\u6DFB\u52A0\u5230\u7A0D\u540E\u9605\u8BFB",
          placement: "top-start"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="svg_icon_container_mini" data-v-26789c3e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_icon, {
                size: 20,
                color: "#757575"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_CollectionTag, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_CollectionTag)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  onClick: ($event) => _ctx.setReadLater(item),
                  class: "svg_icon_container_mini"
                }, [
                  createVNode(_component_el_icon, {
                    size: 20,
                    color: "#757575"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_CollectionTag)
                    ]),
                    _: 1
                  })
                ], 8, ["onClick"])
              ];
            }
          }),
          _: 2
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (item.isReadLater) {
        _push(ssrRenderComponent(_component_el_tooltip, {
          effect: "dark",
          content: "\u53D6\u6D88\u7A0D\u540E\u9605\u8BFB",
          placement: "top-start"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="svg_icon_container_mini" data-v-26789c3e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_icon, {
                size: 20,
                color: "#009a61"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_CollectionTag, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_CollectionTag)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  onClick: ($event) => _ctx.removeReadLater(item),
                  class: "svg_icon_container_mini"
                }, [
                  createVNode(_component_el_icon, {
                    size: 20,
                    color: "#009a61"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_CollectionTag)
                    ]),
                    _: 1
                  })
                ], 8, ["onClick"])
              ];
            }
          }),
          _: 2
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-26789c3e>\xA0</span>`);
      _push(ssrRenderComponent(_component_el_dropdown, { placement: "bottom-end" }, {
        dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_dropdown_menu, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<a class="article_link" target="_blank" data-v-26789c3e${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_el_icon, { size: 18 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Share, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Share)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`\u5206\u4EAB\u7ED9\u670B\u53CB</a>`);
                      } else {
                        return [
                          createVNode("a", {
                            class: "article_link",
                            onClick: _ctx.onShareArticle,
                            target: "_blank"
                          }, [
                            createVNode(_component_el_icon, { size: 18 }, {
                              default: withCtx(() => [
                                createVNode(_component_Share)
                              ]),
                              _: 1
                            }),
                            createTextVNode("\u5206\u4EAB\u7ED9\u670B\u53CB")
                          ], 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<a class="article_link"${ssrRenderAttr("href", "/feed-item/" + item.feed_item_id + ".html")} target="_blank" data-v-26789c3e${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_el_icon, { size: 18 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FullScreen, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FullScreen)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`\u5728\u65B0\u7A97\u53E3\u6253\u5F00</a>`);
                      } else {
                        return [
                          createVNode("a", {
                            class: "article_link",
                            href: "/feed-item/" + item.feed_item_id + ".html",
                            target: "_blank"
                          }, [
                            createVNode(_component_el_icon, { size: 18 }, {
                              default: withCtx(() => [
                                createVNode(_component_FullScreen)
                              ]),
                              _: 1
                            }),
                            createTextVNode("\u5728\u65B0\u7A97\u53E3\u6253\u5F00")
                          ], 8, ["href"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<a class="article_link"${ssrRenderAttr("href", item.feed_url)} target="_blank" data-v-26789c3e${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_el_icon, { size: 18 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Paperclip, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Paperclip)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`\u539F\u6587\u94FE\u63A5</a>`);
                      } else {
                        return [
                          createVNode("a", {
                            class: "article_link",
                            href: item.feed_url,
                            target: "_blank"
                          }, [
                            createVNode(_component_el_icon, { size: 18 }, {
                              default: withCtx(() => [
                                createVNode(_component_Paperclip)
                              ]),
                              _: 1
                            }),
                            createTextVNode("\u539F\u6587\u94FE\u63A5")
                          ], 8, ["href"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_dropdown_item, null, {
                      default: withCtx(() => [
                        createVNode("a", {
                          class: "article_link",
                          onClick: _ctx.onShareArticle,
                          target: "_blank"
                        }, [
                          createVNode(_component_el_icon, { size: 18 }, {
                            default: withCtx(() => [
                              createVNode(_component_Share)
                            ]),
                            _: 1
                          }),
                          createTextVNode("\u5206\u4EAB\u7ED9\u670B\u53CB")
                        ], 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_dropdown_item, null, {
                      default: withCtx(() => [
                        createVNode("a", {
                          class: "article_link",
                          href: "/feed-item/" + item.feed_item_id + ".html",
                          target: "_blank"
                        }, [
                          createVNode(_component_el_icon, { size: 18 }, {
                            default: withCtx(() => [
                              createVNode(_component_FullScreen)
                            ]),
                            _: 1
                          }),
                          createTextVNode("\u5728\u65B0\u7A97\u53E3\u6253\u5F00")
                        ], 8, ["href"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_el_dropdown_item, null, {
                      default: withCtx(() => [
                        createVNode("a", {
                          class: "article_link",
                          href: item.feed_url,
                          target: "_blank"
                        }, [
                          createVNode(_component_el_icon, { size: 18 }, {
                            default: withCtx(() => [
                              createVNode(_component_Paperclip)
                            ]),
                            _: 1
                          }),
                          createTextVNode("\u539F\u6587\u94FE\u63A5")
                        ], 8, ["href"])
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_dropdown_menu, null, {
                default: withCtx(() => [
                  createVNode(_component_el_dropdown_item, null, {
                    default: withCtx(() => [
                      createVNode("a", {
                        class: "article_link",
                        onClick: _ctx.onShareArticle,
                        target: "_blank"
                      }, [
                        createVNode(_component_el_icon, { size: 18 }, {
                          default: withCtx(() => [
                            createVNode(_component_Share)
                          ]),
                          _: 1
                        }),
                        createTextVNode("\u5206\u4EAB\u7ED9\u670B\u53CB")
                      ], 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_dropdown_item, null, {
                    default: withCtx(() => [
                      createVNode("a", {
                        class: "article_link",
                        href: "/feed-item/" + item.feed_item_id + ".html",
                        target: "_blank"
                      }, [
                        createVNode(_component_el_icon, { size: 18 }, {
                          default: withCtx(() => [
                            createVNode(_component_FullScreen)
                          ]),
                          _: 1
                        }),
                        createTextVNode("\u5728\u65B0\u7A97\u53E3\u6253\u5F00")
                      ], 8, ["href"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_el_dropdown_item, null, {
                    default: withCtx(() => [
                      createVNode("a", {
                        class: "article_link",
                        href: item.feed_url,
                        target: "_blank"
                      }, [
                        createVNode(_component_el_icon, { size: 18 }, {
                          default: withCtx(() => [
                            createVNode(_component_Paperclip)
                          ]),
                          _: 1
                        }),
                        createTextVNode("\u539F\u6587\u94FE\u63A5")
                      ], 8, ["href"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="svg_icon_container_mini" data-v-26789c3e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_icon, {
              size: 20,
              color: "#757575"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_More, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_More)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "svg_icon_container_mini" }, [
                createVNode(_component_el_icon, {
                  size: 20,
                  color: "#757575"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_More)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]-->`);
  if (_ctx.showSetReadedButton) {
    _push(`<div style="${ssrRenderStyle({ "margin": "30px 0px", "text-align": "center" })}" data-v-26789c3e>`);
    _push(ssrRenderComponent(_component_el_button, {
      onClick: _ctx.onSetReadAndNextPage,
      size: "large",
      style: { "width": "100%" }
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`\xA0\xA0\xA0\xA0`);
          _push2(ssrRenderComponent(_component_el_icon, {
            size: 24,
            color: "#757575"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_Check, null, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_Check)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`\xA0\xA0\u672C\u9875\u5DF2\u8BFB\uFF0C\u52A0\u8F7D\u4E0B\u4E00\u9875\xA0\xA0\xA0\xA0\xA0`);
        } else {
          return [
            createTextVNode("\xA0\xA0\xA0\xA0"),
            createVNode(_component_el_icon, {
              size: 24,
              color: "#757575"
            }, {
              default: withCtx(() => [
                createVNode(_component_Check)
              ]),
              _: 1
            }),
            createTextVNode("\xA0\xA0\u672C\u9875\u5DF2\u8BFB\uFF0C\u52A0\u8F7D\u4E0B\u4E00\u9875\xA0\xA0\xA0\xA0\xA0")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.pageMode == 1) {
    _push(ssrRenderComponent(_component_el_pagination, {
      onCurrentPage: _ctx.currentPage,
      onCurrentChange: _ctx.handlePageChange,
      background: "",
      layout: "prev, pager, next",
      total: _ctx.totalCount,
      "page-size": 30
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div style="${ssrRenderStyle({ "height": "30px" })}" data-v-26789c3e></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/itemlist/FeedItemList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FeedItemList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-26789c3e"]]);
const _sfc_main = defineNuxtComponent({
  components: {
    Loading,
    EmptyFolder,
    FeedItemList,
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
    this.loadFeedItems(1);
  },
  methods: {
    async loadFeedItems(pageNumber) {
      let responseData = await rssbiz.getUserFeedItems(devicebiz.getDeviceID(), 2, 30, (pageNumber - 1) * 30);
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
        await this.$refs.feedItemListComp.setFeedItemIDs(feedItemIds, totalCount);
        this.viewState = 3;
      }
    },
    onSubscribeFeed() {
      (void 0).location.href = "/feed/website/ft/1.html";
    },
    onFeedItemCountChange(feedItemCount) {
      if (feedItemCount == 0) {
        this.viewState = 2;
      }
    },
    async onPageChange(obj) {
      await this.loadFeedItems(obj.pageNumber);
      ElMessage.success("\u5DF2\u4E3A\u60A8\u52A0\u8F7D\u65B0\u7684\u5185\u5BB9\u3002");
    }
  }
}, "$zLqsY0aCD3");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_divider = ElDivider;
  const _component_Loading = resolveComponent("Loading");
  const _component_FeedItemList = resolveComponent("FeedItemList");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page_root_container" }, _attrs))} data-v-10d2f665><h2 class="page_root_title" data-v-10d2f665>\u5DF2\u8BFB\u6587\u7AE0</h2>`);
  _push(ssrRenderComponent(_component_el_divider, null, null, _parent));
  if (_ctx.viewState == 1) {
    _push(ssrRenderComponent(_component_Loading, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.viewState == 2) {
    _push(`<div style="${ssrRenderStyle({ "width": "800px", "margin": "0px auto", "text-align": "center" })}" data-v-10d2f665><img src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/reader/read-latre.svg" data-v-10d2f665><p style="${ssrRenderStyle({ "margin-bottom": "0px", "font-size": "30px" })}" data-v-10d2f665>\u7A7A\u7A7A\u5982\u4E5F</p><p style="${ssrRenderStyle({ "margin-bottom": "0px", "font-size": "16px" })}" data-v-10d2f665>\u4F60\u6807\u8BB0\u4E3A\u201C\u5DF2\u8BFB\u201D\u7684\u6587\u7AE0\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\u3002</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_FeedItemList, {
    onFeedItemCountChange: _ctx.onFeedItemCountChange,
    onOnPageChange: _ctx.onPageChange,
    readedMode: 2,
    pageMode: 1,
    style: _ctx.viewState == 3 ? null : { display: "none" },
    ref: "feedItemListComp"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my/already-read.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alreadyRead = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-10d2f665"]]);

export { alreadyRead as default };
//# sourceMappingURL=already-read-bIXUU--t.mjs.map
