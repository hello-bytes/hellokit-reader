import { defineComponent, useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode } from 'vue';
import { _ as _export_sfc, u as useHead, d as defineNuxtComponent, f as useRoute, g as executeAsync, h as helper, j as devicebiz } from './server.mjs';
import { E as ElTooltip } from './el-popper-cvaMBS-J.mjs';
import { c as collection_tag_default, E as ElIcon } from './index-CXO4VfHa.mjs';
import { L as LinkIcon, R as ReadLaterIcon, a as ReadLaterFillIcon, O as OutLinkIcon, _ as _sfc_main$4 } from './OutLink-BiLhAui_.mjs';
import { E as ElButton } from './el-button-3_FG0aY6.mjs';
import { E as ElMessage } from './index-5CKSucjx.mjs';
import { r as rssbiz } from './rss-CsPEoumS.mjs';
import { f as feedItemBiz, r as readLater } from './read_later-BhIVw6nV.mjs';
import Clipboard from 'vue-clipboard3';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
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
import './base-CiGMx3WA.mjs';
import '@popperjs/core';
import './constants-dJdD8wGz.mjs';
import './index-Bn0qoa0Y.mjs';
import 'property-information';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import './use-form-item-CHqUkINw.mjs';
import './use-global-config-0TAJExVa.mjs';
import './index-C_KRVs-j.mjs';
import './objects-MD33mwF0.mjs';
import '@ctrl/tinycolor';
import './typescript-D6L75muK.mjs';
import './user-z1s-Jdvw.mjs';
import 'js-cookie';

const removeUndefinedProps = (props) => {
  const filteredProps = /* @__PURE__ */ Object.create(null);
  for (const key in props) {
    const value = props[key];
    if (value !== void 0) {
      filteredProps[key] = value;
    }
  }
  return filteredProps;
};
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: [String, Object, Array],
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a;
    const noscript = { ...props };
    const slotVnodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
    const textContent = slotVnodes ? slotVnodes.filter(({ children }) => children).map(({ children }) => children).join("") : "";
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    /** @deprecated **/
    methods: String,
    /** @deprecated **/
    target: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    return {
      title: ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null
    };
  })
});
defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props) => {
    const meta = { ...props };
    if (meta.httpEquiv) {
      meta["http-equiv"] = meta.httpEquiv;
      delete meta.httpEquiv;
    }
    return {
      meta: [meta]
    };
  })
});
defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    /** @deprecated **/
    scoped: {
      type: Boolean,
      default: void 0
    },
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = { ...props };
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: {
    ...globalProps,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const _sfc_main = defineNuxtComponent({
  components: {
    CollectionTag: collection_tag_default,
    LinkIcon,
    ReadLaterIcon,
    ReadLaterFillIcon,
    OutLinkIcon
  },
  /*
      head(){
          return {
              title : "Hello",
          }
      },*/
  async asyncData() {
    let __temp, __restore;
    const route = useRoute();
    let feedItem = null;
    let feedItemID = route.params.feed_item_id;
    let feedItemResponse = ([__temp, __restore] = executeAsync(() => rssbiz.getFeedItemByID(feedItemID)), __temp = await __temp, __restore(), __temp);
    if (helper.isResultOk(feedItemResponse)) {
      feedItem = feedItemResponse.data;
    }
    let feed = null;
    if (feedItem != null) {
      let responseData = ([__temp, __restore] = executeAsync(() => rssbiz.queryFeedByIDs(true, [feedItem.feed_id])), __temp = await __temp, __restore(), __temp);
      if (helper.isResultOk(responseData)) {
        let feedList = responseData.data.list;
        if (feedList.length == 1) {
          feed = feedList[0];
        }
      }
    }
    return {
      feed,
      feedItem,
      isReadLater: false,
      title: feedItem.title
    };
  },
  mounted() {
    this.loadReadLater();
    feedItemBiz.increaseFeedItemReadCount(false, this.feedItem.feed_item_id);
  },
  methods: {
    formatTime(time) {
      return helper.getHumanTime(time);
    },
    async loadReadLater() {
      let responseData = await readLater.getReadLaterByFeedItems(devicebiz.getDeviceID(), [this.feedItem.feed_item_id]);
      if (helper.isResultOk(responseData)) {
        if (responseData.data.length == 1) {
          this.isReadLater = true;
        }
      }
    },
    async setReadLater() {
      let responseData = await readLater.setReadLater(devicebiz.getDeviceID(), this.feedItem.feed_id, this.feedItem.feed_item_id);
      if (!helper.isResultOk(responseData)) {
        ElMessage.error('\u8BBE\u7F6E\u201C\u7A0D\u540E\u9605\u8BFB"\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002');
      } else {
        this.isReadLater = true;
      }
    },
    async removeReadLater() {
      let responseData = await readLater.removeReadLater(devicebiz.getDeviceID(), this.feedItem.feed_item_id);
      if (!helper.isResultOk(responseData)) {
        ElMessage.error('\u53D6\u6D88\u201C\u7A0D\u540E\u9605\u8BFB"\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002');
      } else {
        this.isReadLater = false;
      }
    },
    async copyURL() {
      const { toClipboard } = Clipboard();
      try {
        let url = "https://reader.hellokit.com.cn/feed-item/" + this.feedItem.feed_item_id + ".html";
        await toClipboard(url);
        ElMessage({
          message: "\u6587\u7AE0\u5730\u5740\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F\u3002",
          type: "success"
        });
      } catch (e) {
        ElMessage.error("\u590D\u5236\u5931\u8D25\uFF0C\u53EF\u80FD\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u590D\u5236\u3002");
      }
    },
    onGotoSourceURL() {
      (void 0).location.href = this.feedItem.feed_url;
    },
    readSource() {
      this.onGotoSourceURL();
    }
  }
}, "$xaS4HCtq1X");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_Head = Head;
  const _component_Title = Title;
  const _component_el_tooltip = ElTooltip;
  const _component_el_icon = ElIcon;
  const _component_ReadLaterIcon = resolveComponent("ReadLaterIcon");
  const _component_ReadLaterFillIcon = resolveComponent("ReadLaterFillIcon");
  const _component_LinkIcon = resolveComponent("LinkIcon");
  const _component_OutLinkIcon = resolveComponent("OutLinkIcon");
  const _component_MDC = _sfc_main$4;
  const _component_el_button = ElButton;
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "background-color": "white" } }, _attrs))} data-v-687dd144>`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.title)} - \u6DF1\u5EA6\u63A2\u7D22\u4F60\u7684\u5174\u8DA3\u4E16\u754C - https://reader.hellokit.cn/`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.title) + " - \u6DF1\u5EA6\u63A2\u7D22\u4F60\u7684\u5174\u8DA3\u4E16\u754C - https://reader.hellokit.cn/", 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Title, null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.title) + " - \u6DF1\u5EA6\u63A2\u7D22\u4F60\u7684\u5174\u8DA3\u4E16\u754C - https://reader.hellokit.cn/", 1)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div style="${ssrRenderStyle({ "height": "50px", "border-bottom": "1px solid #eee" })}" data-v-687dd144><div class="content_wrapper" style="${ssrRenderStyle({ "padding-top": "3px", "display": "flex" })}" data-v-687dd144>`);
  if (!_ctx.isReadLater) {
    _push(ssrRenderComponent(_component_el_tooltip, {
      effect: "dark",
      content: "\u6DFB\u52A0\u5230\u7A0D\u540E\u9605\u8BFB",
      placement: "top-start"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="svg_icon_container" data-v-687dd144${_scopeId}>`);
          _push2(ssrRenderComponent(_component_el_icon, {
            size: 20,
            color: "#757575"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_ReadLaterIcon, null, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_ReadLaterIcon)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          return [
            createVNode("div", {
              onClick: _ctx.setReadLater,
              class: "svg_icon_container"
            }, [
              createVNode(_component_el_icon, {
                size: 20,
                color: "#757575"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ReadLaterIcon)
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
  if (_ctx.isReadLater) {
    _push(ssrRenderComponent(_component_el_tooltip, {
      effect: "dark",
      content: "\u53D6\u6D88\u7A0D\u540E\u9605\u8BFB",
      placement: "top-start"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="svg_icon_container" data-v-687dd144${_scopeId}>`);
          _push2(ssrRenderComponent(_component_el_icon, {
            size: 20,
            color: "#009a61"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_ReadLaterFillIcon, null, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_ReadLaterFillIcon)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          return [
            createVNode("div", {
              onClick: _ctx.removeReadLater,
              class: "svg_icon_container"
            }, [
              createVNode(_component_el_icon, {
                size: 20,
                color: "#009a61"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ReadLaterFillIcon)
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
  _push(ssrRenderComponent(_component_el_tooltip, {
    effect: "dark",
    content: "\u590D\u5236\u6587\u7AE0\u94FE\u63A5",
    placement: "top-start",
    style: { "margin-left": "5px" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="svg_icon_container" data-v-687dd144${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_icon, {
          size: 20,
          color: "#009a61"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_LinkIcon, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_LinkIcon)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", {
            onClick: _ctx.copyURL,
            class: "svg_icon_container"
          }, [
            createVNode(_component_el_icon, {
              size: 20,
              color: "#009a61"
            }, {
              default: withCtx(() => [
                createVNode(_component_LinkIcon)
              ]),
              _: 1
            })
          ], 8, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div style="${ssrRenderStyle({ "flex": "1" })}" data-v-687dd144></div>`);
  _push(ssrRenderComponent(_component_el_tooltip, {
    effect: "dark",
    content: "\u9605\u8BFB\u539F\u6587",
    placement: "top-start",
    style: { "margin-left": "5px" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="svg_icon_container" data-v-687dd144${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_icon, {
          size: 20,
          color: "#009a61"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_OutLinkIcon, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_OutLinkIcon)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", {
            onClick: _ctx.readSource,
            class: "svg_icon_container"
          }, [
            createVNode(_component_el_icon, {
              size: 20,
              color: "#009a61"
            }, {
              default: withCtx(() => [
                createVNode(_component_OutLinkIcon)
              ]),
              _: 1
            })
          ], 8, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="content_wrapper" style="${ssrRenderStyle({ "margin-top": "20px" })}" data-v-687dd144><div data-v-687dd144><p class="feed_item_container_title" data-v-687dd144>${ssrInterpolate(_ctx.feedItem.title)}</p><div data-v-687dd144><a${ssrRenderAttr("href", _ctx.feed != null ? _ctx.feed.url : "")} class="feed_item_container_time" data-v-687dd144>${ssrInterpolate(_ctx.feed != null ? _ctx.feed.name : "")}</a><p class="feed_item_container_time" data-v-687dd144>\xA0\xA0\xB7\xA0\xA0</p><p class="feed_item_container_time" data-v-687dd144>${ssrInterpolate(_ctx.formatTime(_ctx.feedItem.publish_time))}</p><p class="feed_item_container_time" data-v-687dd144>\xA0\xA0\xB7\xA0\xA0</p><p class="feed_item_container_time" data-v-687dd144>${ssrInterpolate(_ctx.feedItem.read_count)}\u6B21\u9605\u8BFB</p></div></div><div class="article_content_container" data-v-687dd144>`);
  if (_ctx.feedItem.content.length > 0 && _ctx.feed.content_format == 1) {
    _push(`<div tag="article" data-v-687dd144>${(_a = _ctx.feedItem.content) != null ? _a : ""}</div>`);
  } else if (_ctx.feedItem.content.length > 0 && _ctx.feed.content_format == 2) {
    _push(ssrRenderComponent(_component_MDC, {
      value: _ctx.feedItem.content,
      tag: "div",
      class: "feed_article_container"
    }, null, _parent));
  } else if (_ctx.feedItem.desc.length > 0) {
    _push(ssrRenderComponent(_component_MDC, {
      value: _ctx.feedItem.desc,
      tag: "div",
      class: "feed_article_container"
    }, null, _parent));
  } else {
    _push(`<div data-v-687dd144></div>`);
  }
  _push(`</div><div style="${ssrRenderStyle({ "padding-top": "40px", "padding-bottom": "40px", "text-align": "center" })}" data-v-687dd144>`);
  _push(ssrRenderComponent(_component_el_button, {
    onClick: _ctx.onGotoSourceURL,
    size: "large",
    style: { "width": "100%" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u8BBF\u95EE\u7F51\u9875\u539F\u59CB\u94FE\u63A5`);
      } else {
        return [
          createTextVNode("\u8BBF\u95EE\u7F51\u9875\u539F\u59CB\u94FE\u63A5")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/feed-item/[[feed_item_id]].html/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-687dd144"]]);

export { index as default };
//# sourceMappingURL=index-C13fJX9b.mjs.map
