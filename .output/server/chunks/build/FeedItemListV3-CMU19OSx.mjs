import { E as ElButton } from './el-button-3_FG0aY6.mjs';
import { a as check_default, r as refresh_default, s as select_default, b as share_default, d as reading_default, m as more_default, l as link_default, p as paperclip_default, f as full_screen_default, c as collection_tag_default, E as ElIcon } from './index-CXO4VfHa.mjs';
import { _ as _export_sfc, d as defineNuxtComponent, h as helper, j as devicebiz } from './server.mjs';
import { E as ElMessage } from './index-5CKSucjx.mjs';
import { r as rssbiz } from './rss-CsPEoumS.mjs';
import { r as readLater, f as feedItemBiz } from './read_later-BhIVw6nV.mjs';
import { e as emitter } from './event-f_DzkNfH.mjs';
import { useSSRContext, resolveComponent, withCtx, createVNode, createTextVNode } from 'vue';
import { E as ElTooltip } from './el-popper-cvaMBS-J.mjs';
import { E as ElDropdown, a as ElDropdownMenu, b as ElDropdownItem } from './el-dropdown-item-DyXojXgF.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main$2 = defineNuxtComponent({
  props: {
    feedItem: {
      type: Object,
      default: null
    },
    showFeedName: {
      type: Boolean,
      default: true
      // 是否显示Feed信息
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
    FullScreen: full_screen_default
  },
  async asyncData() {
    return {};
  },
  mounted() {
  },
  destroyed() {
  },
  methods: {
    onFeedClick(feedObj) {
      emitter.emit("on_popup_feed", { feed: feedObj });
    },
    async onSetFeedItemState(feedItem, readState) {
      this.$emit("onSetFeedItemState", { feedItem, readState });
    },
    async setReadLater(feedItem) {
      this.$emit("setReadLater", { feedItem });
    },
    async removeReadLater(feedItem) {
      this.$emit("removeReadLater", { feedItem });
    },
    showFeedItem(feedItem) {
      emitter.emit("on_popup_feeditem_content", { feed: feedItem.feed, feedItem });
    },
    onShareArticle() {
    },
    formatHumanTime(time) {
      return helper.getHumanTime(time);
    }
  }
}, "$nz0P46CkPT");
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-d3ab8030><div data-v-d3ab8030>`);
  if (_ctx.showFeedName && _ctx.feedItem.feed != null) {
    _push(`<a target="_blank" class="feed_name_img" data-v-d3ab8030><img${ssrRenderAttr("src", _ctx.feedItem.feed.icon_url)} data-v-d3ab8030> ${ssrInterpolate(_ctx.feedItem.feed.name)}${ssrInterpolate(_ctx.feedItem.authorList.length > 0 ? " \xB7 " + _ctx.feedItem.authorList[0].author_name : "")}</a>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<a class="feed_item_list_container" data-v-d3ab8030><a class="${ssrRenderClass([{ feed_item_list_container_title_readed: _ctx.feedItem.readState != 1 }, "feed_item_list_container_title"])}" data-v-d3ab8030>${ssrInterpolate(_ctx.feedItem.title)}</a><p class="feed_item_list_container_desc" data-v-d3ab8030>${ssrInterpolate(_ctx.feedItem.desc)}</p></a><div style="${ssrRenderStyle({ "display": "flex", "margin-top": "5px" })}" data-v-d3ab8030><div style="${ssrRenderStyle({ "height": "30px", "line-height": "30px" })}" data-v-d3ab8030><span class="feed_item_list_container_time" data-v-d3ab8030>${ssrInterpolate(_ctx.formatHumanTime(_ctx.feedItem.publish_time))}</span><span class="feed_item_list_container_time" data-v-d3ab8030>\xA0\xB7\xA0</span><span class="feed_item_list_container_time" data-v-d3ab8030>${ssrInterpolate(_ctx.feedItem.read_count)}\u6B21\u9605\u8BFB</span></div><div style="${ssrRenderStyle({ "flex": "1" })}" data-v-d3ab8030></div>`);
  _push(ssrRenderComponent(_component_el_tooltip, {
    effect: "dark",
    content: "\u5FEB\u901F\u9605\u8BFB\u6B64\u6587\u7AE0",
    placement: "top-start"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="svg_icon_container_mini" data-v-d3ab8030${_scopeId}>`);
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
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", {
            onClick: ($event) => _ctx.showFeedItem(_ctx.feedItem),
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
    _: 1
  }, _parent));
  _push(`<span data-v-d3ab8030>\xA0</span>`);
  if (_ctx.feedItem.readState == 1) {
    _push(ssrRenderComponent(_component_el_tooltip, {
      effect: "dark",
      content: "\u6807\u8BB0\u4E3A\u5DF2\u8BFB",
      placement: "top-start"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="svg_icon_container_mini" data-v-d3ab8030${_scopeId}>`);
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
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          return [
            createVNode("div", {
              onClick: ($event) => _ctx.onSetFeedItemState(_ctx.feedItem, 2),
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
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.feedItem.readState != 1) {
    _push(ssrRenderComponent(_component_el_tooltip, {
      effect: "dark",
      content: "\u6807\u8BB0\u4E3A\u672A\u8BFB",
      placement: "top-start"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="svg_icon_container_mini" data-v-d3ab8030${_scopeId}>`);
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
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          return [
            createVNode("div", {
              onClick: ($event) => _ctx.onSetFeedItemState(_ctx.feedItem, 1),
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
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<span data-v-d3ab8030>\xA0</span>`);
  if (!_ctx.feedItem.isReadLater) {
    _push(ssrRenderComponent(_component_el_tooltip, {
      effect: "dark",
      content: "\u6DFB\u52A0\u5230\u7A0D\u540E\u9605\u8BFB",
      placement: "top-start"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="svg_icon_container_mini" data-v-d3ab8030${_scopeId}>`);
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
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          return [
            createVNode("div", {
              onClick: ($event) => _ctx.setReadLater(_ctx.feedItem),
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
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.feedItem.isReadLater) {
    _push(ssrRenderComponent(_component_el_tooltip, {
      effect: "dark",
      content: "\u53D6\u6D88\u7A0D\u540E\u9605\u8BFB",
      placement: "top-start"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="svg_icon_container_mini" data-v-d3ab8030${_scopeId}>`);
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
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          return [
            createVNode("div", {
              onClick: ($event) => _ctx.removeReadLater(_ctx.feedItem),
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
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<span data-v-d3ab8030>\xA0</span>`);
  _push(ssrRenderComponent(_component_el_dropdown, { placement: "bottom-end" }, {
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_dropdown_menu, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_dropdown_item, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<a class="article_link" target="_blank" data-v-d3ab8030${_scopeId3}>`);
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
                      _: 1
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
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_dropdown_item, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<a class="article_link"${ssrRenderAttr("href", "/feed-item/" + _ctx.feedItem.feed_item_id + ".html")} target="_blank" data-v-d3ab8030${_scopeId3}>`);
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
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`\u5728\u65B0\u7A97\u53E3\u6253\u5F00</a>`);
                  } else {
                    return [
                      createVNode("a", {
                        class: "article_link",
                        href: "/feed-item/" + _ctx.feedItem.feed_item_id + ".html",
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
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_dropdown_item, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<a class="article_link"${ssrRenderAttr("href", _ctx.feedItem.feed_url)} target="_blank" data-v-d3ab8030${_scopeId3}>`);
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
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`\u539F\u6587\u94FE\u63A5</a>`);
                  } else {
                    return [
                      createVNode("a", {
                        class: "article_link",
                        href: _ctx.feedItem.feed_url,
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
                _: 1
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
                      href: "/feed-item/" + _ctx.feedItem.feed_item_id + ".html",
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
                  _: 1
                }),
                createVNode(_component_el_dropdown_item, null, {
                  default: withCtx(() => [
                    createVNode("a", {
                      class: "article_link",
                      href: _ctx.feedItem.feed_url,
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
                  _: 1
                })
              ];
            }
          }),
          _: 1
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
                    href: "/feed-item/" + _ctx.feedItem.feed_item_id + ".html",
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
                _: 1
              }),
              createVNode(_component_el_dropdown_item, null, {
                default: withCtx(() => [
                  createVNode("a", {
                    class: "article_link",
                    href: _ctx.feedItem.feed_url,
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
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="svg_icon_container_mini" data-v-d3ab8030${_scopeId}>`);
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
          _: 1
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
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/itemlist/TextItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TextItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-d3ab8030"]]);
const _sfc_main$1 = defineNuxtComponent({
  props: {
    feedItem: {
      type: Object,
      default: null
    },
    showFeedName: {
      type: Boolean,
      default: true
      // 是否显示Feed信息
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
    FullScreen: full_screen_default
  },
  async asyncData() {
    return {};
  },
  mounted() {
  },
  destroyed() {
  },
  methods: {
    onFeedClick(feedObj) {
      emitter.emit("on_popup_feed", { feed: feedObj });
    },
    async onSetFeedItemState(feedItem, readState) {
      this.$emit("onSetFeedItemState", { feedItem, readState });
    },
    async setReadLater(feedItem) {
      this.$emit("setReadLater", { feedItem });
    },
    async removeReadLater(feedItem) {
      this.$emit("removeReadLater", { feedItem });
    },
    showFeedItem(feedItem) {
      emitter.emit("on_popup_feeditem_content", { feed: feedItem.feed, feedItem });
    },
    onShareArticle() {
    },
    formatHumanTime(time) {
      return helper.getHumanTime(time);
    }
  }
}, "$uJTzAXBRww");
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
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-d080d948>`);
  if (_ctx.showFeedName && _ctx.feedItem.feed != null) {
    _push(`<a target="_blank" class="feed_name_img" data-v-d080d948><img${ssrRenderAttr("src", _ctx.feedItem.feed.icon_url)} data-v-d080d948> ${ssrInterpolate(_ctx.feedItem.feed.name)}${ssrInterpolate(_ctx.feedItem.authorList.length > 0 ? " \xB7 " + _ctx.feedItem.authorList[0].author_name : "")}</a>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="feed_item_list_img_container" data-v-d080d948><img class="feed_item_img"${ssrRenderAttr("src", _ctx.feedItem.thumb_url)} data-v-d080d948><div class="feed_item_list_content_container" data-v-d080d948><a class="${ssrRenderClass([{ feed_item_list_container_title_readed: _ctx.feedItem.readState != 1 }, "feed_item_list_container_title"])}" data-v-d080d948>${ssrInterpolate(_ctx.feedItem.title)}</a><p class="feed_item_list_container_desc" data-v-d080d948>${ssrInterpolate(_ctx.feedItem.desc)}</p><div style="${ssrRenderStyle({ "display": "flex", "margin-top": "5px" })}" data-v-d080d948><div style="${ssrRenderStyle({ "height": "30px", "line-height": "30px" })}" data-v-d080d948><span class="feed_item_list_container_time" data-v-d080d948>${ssrInterpolate(_ctx.formatHumanTime(_ctx.feedItem.publish_time))}</span><span class="feed_item_list_container_time" data-v-d080d948>\xA0\xB7\xA0</span><span class="feed_item_list_container_time" data-v-d080d948>${ssrInterpolate(_ctx.feedItem.read_count)}\u6B21\u9605\u8BFB</span></div><div style="${ssrRenderStyle({ "flex": "1" })}" data-v-d080d948></div>`);
  _push(ssrRenderComponent(_component_el_tooltip, {
    effect: "dark",
    content: "\u5FEB\u901F\u9605\u8BFB\u6B64\u6587\u7AE0",
    placement: "top-start"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="svg_icon_container_mini" data-v-d080d948${_scopeId}>`);
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
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", {
            onClick: ($event) => _ctx.showFeedItem(_ctx.feedItem),
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
    _: 1
  }, _parent));
  _push(`<span data-v-d080d948>\xA0</span>`);
  if (_ctx.feedItem.readState == 1) {
    _push(ssrRenderComponent(_component_el_tooltip, {
      effect: "dark",
      content: "\u6807\u8BB0\u4E3A\u5DF2\u8BFB",
      placement: "top-start"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="svg_icon_container_mini" data-v-d080d948${_scopeId}>`);
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
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          return [
            createVNode("div", {
              onClick: ($event) => _ctx.onSetFeedItemState(_ctx.feedItem, 2),
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
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.feedItem.readState != 1) {
    _push(ssrRenderComponent(_component_el_tooltip, {
      effect: "dark",
      content: "\u6807\u8BB0\u4E3A\u672A\u8BFB",
      placement: "top-start"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="svg_icon_container_mini" data-v-d080d948${_scopeId}>`);
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
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          return [
            createVNode("div", {
              onClick: ($event) => _ctx.onSetFeedItemState(_ctx.feedItem, 1),
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
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<span data-v-d080d948>\xA0</span>`);
  if (!_ctx.feedItem.isReadLater) {
    _push(ssrRenderComponent(_component_el_tooltip, {
      effect: "dark",
      content: "\u6DFB\u52A0\u5230\u7A0D\u540E\u9605\u8BFB",
      placement: "top-start"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="svg_icon_container_mini" data-v-d080d948${_scopeId}>`);
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
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          return [
            createVNode("div", {
              onClick: ($event) => _ctx.setReadLater(_ctx.feedItem),
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
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.feedItem.isReadLater) {
    _push(ssrRenderComponent(_component_el_tooltip, {
      effect: "dark",
      content: "\u53D6\u6D88\u7A0D\u540E\u9605\u8BFB",
      placement: "top-start"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="svg_icon_container_mini" data-v-d080d948${_scopeId}>`);
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
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          return [
            createVNode("div", {
              onClick: ($event) => _ctx.removeReadLater(_ctx.feedItem),
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
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<span data-v-d080d948>\xA0</span>`);
  _push(ssrRenderComponent(_component_el_dropdown, { placement: "bottom-end" }, {
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_dropdown_menu, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_dropdown_item, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<a class="article_link" target="_blank" data-v-d080d948${_scopeId3}>`);
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
                      _: 1
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
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_dropdown_item, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<a class="article_link"${ssrRenderAttr("href", "/feed-item/" + _ctx.feedItem.feed_item_id + ".html")} target="_blank" data-v-d080d948${_scopeId3}>`);
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
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`\u5728\u65B0\u7A97\u53E3\u6253\u5F00</a>`);
                  } else {
                    return [
                      createVNode("a", {
                        class: "article_link",
                        href: "/feed-item/" + _ctx.feedItem.feed_item_id + ".html",
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
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_dropdown_item, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<a class="article_link"${ssrRenderAttr("href", _ctx.feedItem.feed_url)} target="_blank" data-v-d080d948${_scopeId3}>`);
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
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`\u539F\u6587\u94FE\u63A5</a>`);
                  } else {
                    return [
                      createVNode("a", {
                        class: "article_link",
                        href: _ctx.feedItem.feed_url,
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
                _: 1
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
                      href: "/feed-item/" + _ctx.feedItem.feed_item_id + ".html",
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
                  _: 1
                }),
                createVNode(_component_el_dropdown_item, null, {
                  default: withCtx(() => [
                    createVNode("a", {
                      class: "article_link",
                      href: _ctx.feedItem.feed_url,
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
                  _: 1
                })
              ];
            }
          }),
          _: 1
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
                    href: "/feed-item/" + _ctx.feedItem.feed_item_id + ".html",
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
                _: 1
              }),
              createVNode(_component_el_dropdown_item, null, {
                default: withCtx(() => [
                  createVNode("a", {
                    class: "article_link",
                    href: _ctx.feedItem.feed_url,
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
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="svg_icon_container_mini" data-v-d080d948${_scopeId}>`);
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
          _: 1
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
    _: 1
  }, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/itemlist/ThumbItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ThumbItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-d080d948"]]);
const _sfc_main = defineNuxtComponent({
  props: {
    readedMode: {
      type: Number,
      default: 0
      // 0 全部显示， 1 只显示未读， 3 只显示已读
    },
    showFeedName: {
      type: Boolean,
      default: true
      // 是否显示Feed信息
    },
    // 当前List是给ReadLater使用的
    readLaterMode: {
      type: Boolean,
      default: false
      // 是否显示Feed信息
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
    FullScreen: full_screen_default,
    TextItem,
    ThumbItem
  },
  async asyncData() {
    return {
      totalCount: 0,
      loadedCount: 0,
      feedItems: [],
      feedsCount: 0,
      // 多少个订阅源
      disabledLoadMore: false,
      //currentPage:1,
      loadingMore: false,
      loadFinish: false,
      // 
      loadTooMuch: false,
      // 
      currentFeed: null,
      feedItem: null,
      // 当前被选中（点击）的 FeedItem
      element: null,
      distance: 200
    };
  },
  mounted() {
    this.$nextTick(() => {
      (void 0).addEventListener("scroll", this.listenBottomOut, true);
      this.element = (void 0).getElementById("right_content_rootcontainer");
    });
  },
  destroyed() {
    (void 0).removeEventListener("scroll", this.listenBottomOut, false);
  },
  methods: {
    isFeedItemExist(feedItemId) {
      for (let i in this.feedItems) {
        if (this.feedItems[i].feed_item_id == feedItemId) {
          return true;
        }
      }
      return false;
    },
    async appendFeedItemIDs(feedItemIDs) {
      if (feedItemIDs.length == 0) {
        this.loadFinish = true;
        this.loadingMore = false;
        return;
      }
      let feedItems = [];
      let responseData = await rssbiz.getFeedItemByIDs(false, feedItemIDs);
      if (helper.isResultOk(responseData)) {
        feedItems = responseData.data;
        let sortedFeedItems = [];
        for (let i in feedItemIDs) {
          for (let j in feedItems) {
            if (feedItemIDs[i] == feedItems[j].feed_item_id) {
              sortedFeedItems.push(feedItems[j]);
              break;
            }
          }
        }
        await this.loadReadedFlag(sortedFeedItems);
        await this.loadReadLaterFlag(sortedFeedItems);
        await this.loadFeedForFeedItem(sortedFeedItems);
        await this.loadAuthorForFeedItem(sortedFeedItems);
        this.feedItems.push(...sortedFeedItems);
        this.buildFeedCount();
        this.loadingMore = false;
        console.log(this.feedItems);
        console.log("=======");
        if (this.feedItems.length >= 100) {
          this.loadTooMuch = true;
        }
      }
    },
    // , totalCount
    async appendFeedItems(feedItems) {
      if (feedItems.length == 0) {
        this.loadFinish = true;
        this.loadingMore = false;
        return;
      }
      let filterFeedItems = [];
      for (let i in feedItems) {
        if (!this.isFeedItemExist(feedItems[i].feed_item_id)) {
          filterFeedItems.push(feedItems[i]);
        }
      }
      filterFeedItems.sort(function(a, b) {
        return b.publish_time - a.publish_time;
      });
      await this.loadReadedFlag(filterFeedItems);
      await this.loadReadLaterFlag(filterFeedItems);
      await this.loadFeedForFeedItem(filterFeedItems);
      await this.loadAuthorForFeedItem(filterFeedItems);
      this.feedItems.push(...filterFeedItems);
      this.buildFeedCount();
      this.loadingMore = false;
      if (this.feedItems.length >= 100) {
        this.loadTooMuch = true;
      }
    },
    clear() {
      this.loadingMore = false;
      this.loadFinish = false;
      this.loadTooMuch = false;
      this.feedItems = [];
    },
    setLoadingMoreState() {
      this.loadingMore = true;
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
    buildFeedCount() {
      let feedIds = [];
      for (let i in this.feedItems) {
        if (this.isFeedIdExist(this.feedItems[i].feed_id, feedIds))
          ;
        else {
          feedIds.push(this.feedItems[i].feed_id);
        }
      }
      this.feedsCount = feedIds.length;
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
      for (let i in feedItems) {
        for (let j in userFeedItemList) {
          if (feedItems[i].feed_item_id == userFeedItemList[j].feed_item_id) {
            feedItems[i].readState = userFeedItemList[j].readed;
            break;
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
    removeByFeedItemID(feedItemID) {
      let i = 0;
      while (i < this.feedItems.length) {
        if (this.feedItems[i].feed_item_id == feedItemID) {
          this.feedItems.splice(i, 1);
        } else {
          ++i;
        }
      }
      this.notifyFeedItemChange();
    },
    async onSetFeedItemState(params) {
      let { feedItem, readState } = params;
      let oldState = feedItem.readState;
      let readStateInt = parseInt(readState);
      feedItem.readState = readStateInt;
      let responseData = await rssbiz.setFeedItemReadState(devicebiz.getDeviceID(), feedItem.feed_item_id, readStateInt);
      if (helper.isResultOk(responseData)) {
        feedItem.readState = readStateInt;
      } else {
        feedItem.readState = oldState;
        ElMessage.error('\u8BBE\u7F6E\u4E3A"' + (readStateInt == 1 ? "\u672A\u8BFB" : "\u5DF2\u8BFB") + '"\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002');
      }
    },
    async setReadLater(params) {
      let { feedItem } = params;
      let responseData = await readLater.setReadLater(devicebiz.getDeviceID(), feedItem.feed_id, feedItem.feed_item_id);
      if (!helper.isResultOk(responseData)) {
        ElMessage.error('\u8BBE\u7F6E\u201C\u7A0D\u540E\u9605\u8BFB"\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002');
      } else {
        feedItem.isReadLater = true;
      }
    },
    async removeReadLater(params) {
      let { feedItem } = params;
      let responseData = await readLater.removeReadLater(devicebiz.getDeviceID(), feedItem.feed_item_id);
      if (!helper.isResultOk(responseData)) {
        ElMessage.error('\u53D6\u6D88\u201C\u7A0D\u540E\u9605\u8BFB"\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002');
      } else {
        feedItem.isReadLater = false;
      }
    },
    onShareArticle() {
    },
    async setAllReaded() {
      let feedItemIds = [];
      for (let index in this.feedItems) {
        feedItemIds.push(this.feedItems[index].feed_item_id);
      }
      let responseData = await rssbiz.setFeedItemReadStateV2(devicebiz.getDeviceID(), feedItemIds, 2);
      if (!helper.isResultOk(responseData)) {
        ElMessage.error("\u7F6E\u4E3A\u5DF2\u8BFB\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002");
        return;
      }
    },
    async onSetReadAndReload() {
      await this.setAllReaded();
      this.$emit("onReload", {});
    },
    async onSetReadAndNextPage() {
      await this.setAllReaded();
      this.feedItems = [];
      this.loadingMore = true;
      this.loadTooMuch = false;
      this.loadFinish = false;
      this.$emit("onLoadMore", { limit: 30, feedItemID: "0" });
    },
    listenBottomOut() {
      if (this.loadingMore || this.loadFinish || this.loadTooMuch)
        return;
      let scrollTop = this.element.scrollTop || (void 0).body.scrollTop;
      let clientHeight = this.element.clientHeight;
      let scrollHeight = this.element.scrollHeight;
      if (scrollTop + clientHeight >= scrollHeight - this.distance) {
        this.loadMoreFeedItems();
      }
    },
    loadMoreFeedItems() {
      this.loadingMore = true;
      let lastFeedItem = null;
      if (this.readLaterMode) {
        console.log("load more...");
        let total = this.feedItems.length;
        for (let i = total - 1; i >= 0; i--) {
          if (this.feedItems[i].isReadLater) {
            lastFeedItem = this.feedItems[i];
            break;
          }
        }
      } else {
        let total = this.feedItems.length;
        for (let i = total - 1; i >= 0; i--) {
          if (this.feedItems[i].readState == 1) {
            lastFeedItem = this.feedItems[i];
            break;
          }
        }
        if (lastFeedItem == null) {
          this.loadingMore = false;
        }
      }
      if (lastFeedItem != null) {
        this.$emit("onLoadMore", { limit: 30, feedItemID: lastFeedItem.feed_item_id });
      } else {
        this.loadingMore = false;
      }
    }
  }
}, "$Mgn71ZVLaX");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ThumbItem = resolveComponent("ThumbItem");
  const _component_TextItem = resolveComponent("TextItem");
  const _component_el_button = ElButton;
  const _component_el_icon = ElIcon;
  const _component_Check = resolveComponent("Check");
  _push(`<div${ssrRenderAttrs(_attrs)}><div><!--[-->`);
  ssrRenderList(_ctx.feedItems, (item, index) => {
    _push(`<div style="${ssrRenderStyle({ "margin-top": "20px", "margin-bottom": "20px", "border-bottom": "1px solid #eee", "padding-bottom": "10px" })}">`);
    if (item.thumb_url.length > 0) {
      _push(`<div>`);
      _push(ssrRenderComponent(_component_ThumbItem, {
        showFeedName: _ctx.showFeedName,
        onOnSetFeedItemState: _ctx.onSetFeedItemState,
        onSetReadLater: _ctx.setReadLater,
        onRemoveReadLater: _ctx.removeReadLater,
        feedItem: item
      }, null, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if (item.thumb_url.length == 0) {
      _push(`<div>`);
      _push(ssrRenderComponent(_component_TextItem, {
        showFeedName: _ctx.showFeedName,
        onOnSetFeedItemState: _ctx.onSetFeedItemState,
        onSetReadLater: _ctx.setReadLater,
        onRemoveReadLater: _ctx.removeReadLater,
        feedItem: item
      }, null, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div>`);
  if (_ctx.loadingMore) {
    _push(`<div style="${ssrRenderStyle({ "display": "flex", "align-items": "center" })}"><img style="${ssrRenderStyle({ "height": "20px" })}" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/1494.gif"><span>\xA0\u6B63\u5728\u52A0\u8F7D\uFF0C\u8BF7\u7A0D\u5019...</span></div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.loadTooMuch) {
    _push(`<div style="${ssrRenderStyle({ "text-align": "center" })}"><p>\u60A8\u5DF2\u7ECF\u6D4F\u89C8\u4E86\u6765\u81EA\xA0${ssrInterpolate(_ctx.feedsCount)}\xA0\u4E2A\u8BA2\u9605\u6E90\u7684\xA0${ssrInterpolate(this.feedItems.length)}\xA0\u7BC7\u6587\u7AE0\u3002</p>`);
    _push(ssrRenderComponent(_component_el_button, {
      onClick: _ctx.onSetReadAndNextPage,
      size: "large"
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
          _push2(`\xA0\xA0\u5168\u90E8\u7F6E\u4E3A\u5DF2\u8BFB\xA0\xA0`);
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
            createTextVNode("\xA0\xA0\u5168\u90E8\u7F6E\u4E3A\u5DF2\u8BFB\xA0\xA0")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.loadFinish) {
    _push(`<div style="${ssrRenderStyle({ "text-align": "center" })}"><p>\u6240\u6709\u6587\u7AE0\u5DF2\u52A0\u8F7D\u3002</p>`);
    _push(ssrRenderComponent(_component_el_button, {
      onClick: _ctx.onSetReadAndReload,
      size: "large"
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
          _push2(`\xA0\xA0\u5168\u90E8\u7F6E\u4E3A\u5DF2\u8BFB\xA0\xA0`);
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
            createTextVNode("\xA0\xA0\u5168\u90E8\u7F6E\u4E3A\u5DF2\u8BFB\xA0\xA0")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div style="${ssrRenderStyle({ "height": "30px" })}"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/itemlist/FeedItemListV3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FeedItemListV3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { FeedItemListV3 as F };
//# sourceMappingURL=FeedItemListV3-CMU19OSx.mjs.map
