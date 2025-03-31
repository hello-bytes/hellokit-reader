import { E as ElDivider } from './el-divider-D385yaft.mjs';
import { E as ElTooltip } from './el-popper-cvaMBS-J.mjs';
import { a as check_default, r as refresh_default, s as select_default, b as share_default, d as reading_default, m as more_default, l as link_default, p as paperclip_default, f as full_screen_default, c as collection_tag_default, E as ElIcon } from './index-CXO4VfHa.mjs';
import { _ as _export_sfc, d as defineNuxtComponent, h as helper, j as devicebiz } from './server.mjs';
import { E as ElMessage } from './index-5CKSucjx.mjs';
import { r as rssbiz } from './rss-CsPEoumS.mjs';
import { r as readLater } from './read_later-BhIVw6nV.mjs';
import { useSSRContext, resolveComponent, withCtx, createVNode } from 'vue';
import { P as Pager } from './Pager-BqwivwxM.mjs';
import { e as emitter } from './event-f_DzkNfH.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = defineNuxtComponent({
  props: {
    totalCount: {
      type: Number,
      default: 0
      // 总条数
    },
    pageNumber: {
      type: Number,
      default: 0
      // 当前页面编号，即当前是第几页
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
    feedItems: {
      type: Array,
      default: []
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
    CollectionTag: collection_tag_default,
    Pager
  },
  async asyncData() {
    return {};
  },
  mounted() {
  },
  methods: {
    notifyFeedItemChange() {
      this.$emit("feedItemCountChange", this.feedItems.length);
    },
    formatHumanTime(time) {
      return helper.getHumanTime(time);
    },
    showFeedItem(feedItem) {
      emitter.emit("on_popup_feeditem_content", { feed: feedItem.feed, feedItem });
    },
    loadMore() {
      if (this.pageMode == 1) {
        return;
      }
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
    async onSetFeedItemState(feedItem, readState) {
      let readStateInt = parseInt(readState);
      let responseData = await rssbiz.setFeedItemReadState(devicebiz.getDeviceID(), feedItem.feed_item_id, readStateInt);
      if (helper.isResultOk(responseData)) {
        if (this.readedMode == 1) {
          if (readStateInt == 2) {
            this.removeByFeedItemID(feedItem.feed_item_id);
          }
        } else if (this.readedMode == 2) {
          if (readStateInt == 1) {
            this.removeByFeedItemID(feedItem.feed_item_id);
          }
        }
      } else {
        ElMessage.error('\u8BBE\u7F6E\u4E3A"' + (readStateInt == 1 ? "\u672A\u8BFB" : "\u5DF2\u8BFB") + '"\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002');
      }
    },
    async setReadLater(feedItem) {
      let responseData = await readLater.setReadLater(devicebiz.getDeviceID(), feedItem.feed_id, feedItem.feed_item_id);
      if (!helper.isResultOk(responseData)) {
        ElMessage.error('\u8BBE\u7F6E\u201C\u7A0D\u540E\u9605\u8BFB"\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002');
      } else {
        feedItem.isReadLater = true;
      }
    },
    async removeReadLater(feedItem) {
      let responseData = await readLater.removeReadLater(devicebiz.getDeviceID(), feedItem.feed_item_id);
      if (!helper.isResultOk(responseData)) {
        ElMessage.error('\u53D6\u6D88\u201C\u7A0D\u540E\u9605\u8BFB"\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002');
      } else {
        if (this.onlyShowReadLater) {
          this.removeByFeedItemID(feedItem.feed_item_id);
        }
        feedItem.isReadLater = false;
      }
    },
    onShareArticle() {
    }
  }
}, "$BcdNQI5kMb");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_divider = ElDivider;
  const _component_el_tooltip = ElTooltip;
  const _component_el_icon = ElIcon;
  const _component_Reading = resolveComponent("Reading");
  const _component_Check = resolveComponent("Check");
  const _component_CollectionTag = resolveComponent("CollectionTag");
  const _component_Pager = resolveComponent("Pager");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-3cf53973><div style="${ssrRenderStyle({ "max-width": "800px", "margin": "0px auto" })}" data-v-3cf53973><h2 style="${ssrRenderStyle({ "font-size": "34px", "font-weight": "700", "margin-top": "40px", "margin-bottom": "10px" })}" data-v-3cf53973>\u6240\u6709\u6587\u7AE0</h2>`);
  _push(ssrRenderComponent(_component_el_divider, null, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList(_ctx.feedItems, (item, index) => {
    _push(`<div class="feed_item_root_container" data-v-3cf53973>`);
    if (item.thumb_url.length > 0) {
      _push(`<div data-v-3cf53973><div data-v-3cf53973><div data-v-3cf53973>`);
      if (item.feed != null) {
        _push(`<a target="_blank"${ssrRenderAttr("href", item.feed.url)} class="feed_name_img" data-v-3cf53973><img${ssrRenderAttr("src", item.feed.icon_url)} data-v-3cf53973> ${ssrInterpolate(item.feed.name)}${ssrInterpolate(item.authorList.length > 0 ? " \xB7 " + item.authorList[0].author_name : "")}</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="feed_item_list_img_container" data-v-3cf53973><img class="feed_item_img"${ssrRenderAttr("src", item.thumb_url)} data-v-3cf53973><div class="feed_item_list_content_container" data-v-3cf53973><a${ssrRenderAttr("href", "/feed-item/" + item.feed_item_id + ".html")} target="_blank" class="feed_item_list_container_title" data-v-3cf53973>${ssrInterpolate(item.title)}</a><p class="feed_item_list_container_desc" data-v-3cf53973>${ssrInterpolate(item.desc)}</p><div style="${ssrRenderStyle({ "display": "flex", "margin-top": "5px" })}" data-v-3cf53973><div style="${ssrRenderStyle({ "height": "30px", "line-height": "30px" })}" data-v-3cf53973><span class="feed_item_list_container_time" data-v-3cf53973>${ssrInterpolate(_ctx.formatHumanTime(item.publish_time))}</span><span class="feed_item_list_container_time" data-v-3cf53973>\xA0\xB7\xA0</span><span class="feed_item_list_container_time" data-v-3cf53973>${ssrInterpolate(item.read_count)}\u6B21\u9605\u8BFB</span></div><div style="${ssrRenderStyle({ "flex": "1" })}" data-v-3cf53973></div>`);
      _push(ssrRenderComponent(_component_el_tooltip, {
        effect: "dark",
        content: "\u5FEB\u901F\u9605\u8BFB\u6B64\u6587\u7AE0",
        placement: "top-start"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="svg_icon_container_mini" data-v-3cf53973${_scopeId}>`);
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
      _push(`<span data-v-3cf53973>\xA0</span>`);
      if (item.readState == 1) {
        _push(ssrRenderComponent(_component_el_tooltip, {
          effect: "dark",
          content: "\u6807\u8BB0\u4E3A\u5DF2\u8BFB",
          placement: "top-start"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="svg_icon_container_mini" data-v-3cf53973${_scopeId}>`);
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
              _push2(`<div class="svg_icon_container_mini" data-v-3cf53973${_scopeId}>`);
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
      _push(`<span data-v-3cf53973>\xA0</span>`);
      if (!item.isReadLater) {
        _push(ssrRenderComponent(_component_el_tooltip, {
          effect: "dark",
          content: "\u6DFB\u52A0\u5230\u7A0D\u540E\u9605\u8BFB",
          placement: "top-start"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="svg_icon_container_mini" data-v-3cf53973${_scopeId}>`);
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
              _push2(`<div class="svg_icon_container_mini" data-v-3cf53973${_scopeId}>`);
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
      _push(`</div></div></div></div></div>`);
    } else {
      _push(`<!---->`);
    }
    if (item.thumb_url.length == 0) {
      _push(`<div data-v-3cf53973><div class="feed_item_list_container" data-v-3cf53973>`);
      if (item.feed != null) {
        _push(`<a target="_blank"${ssrRenderAttr("href", item.feed.url)} class="feed_name_img" data-v-3cf53973><img${ssrRenderAttr("src", item.feed.icon_url)} data-v-3cf53973> ${ssrInterpolate(item.feed.name)}${ssrInterpolate(item.authorList.length > 0 ? " \xB7 " + item.authorList[0].author_name : "")}</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a${ssrRenderAttr("href", "/feed-item/" + item.feed_item_id + ".html")} target="_blank" class="feed_item_list_container_title" data-v-3cf53973>${ssrInterpolate(item.title)}</a><p class="feed_item_list_container_desc" data-v-3cf53973>${ssrInterpolate(item.desc)}</p></div><div style="${ssrRenderStyle({ "display": "flex", "margin-top": "5px" })}" data-v-3cf53973><div style="${ssrRenderStyle({ "height": "30px", "line-height": "30px" })}" data-v-3cf53973><span class="feed_item_list_container_time" data-v-3cf53973>${ssrInterpolate(_ctx.formatHumanTime(item.publish_time))}</span><span class="feed_item_list_container_time" data-v-3cf53973>\xA0\xB7\xA0</span><span class="feed_item_list_container_time" data-v-3cf53973>${ssrInterpolate(item.read_count)}\u6B21\u9605\u8BFB</span></div><div style="${ssrRenderStyle({ "flex": "1" })}" data-v-3cf53973></div>`);
      _push(ssrRenderComponent(_component_el_tooltip, {
        effect: "dark",
        content: "\u5FEB\u901F\u9605\u8BFB\u6B64\u6587\u7AE0",
        placement: "top-start"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="svg_icon_container_mini" data-v-3cf53973${_scopeId}>`);
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
      _push(`<span data-v-3cf53973>\xA0</span>`);
      if (item.readState == 1) {
        _push(ssrRenderComponent(_component_el_tooltip, {
          effect: "dark",
          content: "\u6807\u8BB0\u4E3A\u5DF2\u8BFB",
          placement: "top-start"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="svg_icon_container_mini" data-v-3cf53973${_scopeId}>`);
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
              _push2(`<div class="svg_icon_container_mini" data-v-3cf53973${_scopeId}>`);
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
      _push(`<span data-v-3cf53973>\xA0</span>`);
      if (!item.isReadLater) {
        _push(ssrRenderComponent(_component_el_tooltip, {
          effect: "dark",
          content: "\u6DFB\u52A0\u5230\u7A0D\u540E\u9605\u8BFB",
          placement: "top-start"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="svg_icon_container_mini" data-v-3cf53973${_scopeId}>`);
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
              _push2(`<div class="svg_icon_container_mini" data-v-3cf53973${_scopeId}>`);
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
      _push(`</div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]-->`);
  _push(ssrRenderComponent(_component_Pager, {
    baseURL: "/article/page",
    activeIndex: _ctx.pageNumber,
    totalCount: _ctx.totalCount
  }, null, _parent));
  _push(`<div style="${ssrRenderStyle({ "height": "30px" })}" data-v-3cf53973></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/itemlist/FeedItemListSEO.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FeedItemListSEO = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3cf53973"]]);

export { FeedItemListSEO as F };
//# sourceMappingURL=FeedItemListSEO-D6XYJe7h.mjs.map
