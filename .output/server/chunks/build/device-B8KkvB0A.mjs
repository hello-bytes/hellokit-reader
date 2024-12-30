import { E as ElLink, a as ElPopconfirm } from './el-popover-D5HYysTy.mjs';
import { defineComponent, useSlots, ref, computed, openBlock, createBlock, Transition, unref, withCtx, withDirectives, createElementVNode, normalizeClass, resolveDynamicComponent, createCommentVNode, createElementBlock, renderSlot, createTextVNode, toDisplayString, Fragment, createVNode, vShow, useSSRContext, mergeProps } from 'vue';
import { E as ElIcon } from './index-DkfqKprI.mjs';
import { b as buildProps, w as withInstall, _ as _export_sfc$1 } from './base-BSYjTNA2.mjs';
import { k as keysOf } from './objects-MD33mwF0.mjs';
import { T as TypeComponentsMap, a as TypeComponents } from './index-FYQmeljH.mjs';
import { e as useNamespace, _ as _export_sfc, d as defineNuxtComponent, j as devicebiz } from './server.mjs';
import { b as browser } from './browser-BEZoJCeu.mjs';
import Clipboard from 'vue-clipboard3';
import { E as ElMessage } from './index-DoQiR3n0.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import './el-button-KAYtidDM.mjs';
import './use-form-item-C9td9zAz.mjs';
import './constants-XLKnfDE9.mjs';
import 'lodash-unified';
import './use-global-config-OeHUdFGt.mjs';
import '@ctrl/tinycolor';
import './el-popper-IPLn1IGN.mjs';
import '@vueuse/core';
import '@popperjs/core';
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
import './typescript-D6L75muK.mjs';

const alertEffects = ["light", "dark"];
const alertProps = buildProps({
  title: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    values: keysOf(TypeComponentsMap),
    default: "info"
  },
  closable: {
    type: Boolean,
    default: true
  },
  closeText: {
    type: String,
    default: ""
  },
  showIcon: Boolean,
  center: Boolean,
  effect: {
    type: String,
    values: alertEffects,
    default: "light"
  }
});
const alertEmits = {
  close: (evt) => evt instanceof MouseEvent
};
const __default__ = defineComponent({
  name: "ElAlert"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: alertProps,
  emits: alertEmits,
  setup(__props, { emit }) {
    const props = __props;
    const { Close } = TypeComponents;
    const slots = useSlots();
    const ns = useNamespace("alert");
    const visible = ref(true);
    const iconComponent = computed(() => TypeComponentsMap[props.type]);
    const iconClass = computed(() => [
      ns.e("icon"),
      { [ns.is("big")]: !!props.description || !!slots.default }
    ]);
    const withDescription = computed(() => {
      return { "with-description": props.description || slots.default };
    });
    const close = (evt) => {
      visible.value = false;
      emit("close", evt);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(ns).b("fade"),
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            class: normalizeClass([unref(ns).b(), unref(ns).m(_ctx.type), unref(ns).is("center", _ctx.center), unref(ns).is(_ctx.effect)]),
            role: "alert"
          }, [
            _ctx.showIcon && unref(iconComponent) ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(iconClass))
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(iconComponent))))
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("v-if", true),
            createElementVNode("div", {
              class: normalizeClass(unref(ns).e("content"))
            }, [
              _ctx.title || _ctx.$slots.title ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass([unref(ns).e("title"), unref(withDescription)])
              }, [
                renderSlot(_ctx.$slots, "title", {}, () => [
                  createTextVNode(toDisplayString(_ctx.title), 1)
                ])
              ], 2)) : createCommentVNode("v-if", true),
              _ctx.$slots.default || _ctx.description ? (openBlock(), createElementBlock("p", {
                key: 1,
                class: normalizeClass(unref(ns).e("description"))
              }, [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createTextVNode(toDisplayString(_ctx.description), 1)
                ])
              ], 2)) : createCommentVNode("v-if", true),
              _ctx.closable ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                _ctx.closeText ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass([unref(ns).e("close-btn"), unref(ns).is("customed")]),
                  onClick: close
                }, toDisplayString(_ctx.closeText), 3)) : (openBlock(), createBlock(unref(ElIcon), {
                  key: 1,
                  class: normalizeClass(unref(ns).e("close-btn")),
                  onClick: close
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Close))
                  ]),
                  _: 1
                }, 8, ["class"]))
              ], 64)) : createCommentVNode("v-if", true)
            ], 2)
          ], 2), [
            [vShow, visible.value]
          ])
        ]),
        _: 3
      }, 8, ["name"]);
    };
  }
});
var Alert = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__file", "alert.vue"]]);
const ElAlert = withInstall(Alert);
const _sfc_main = defineNuxtComponent({
  async asyncData() {
    return {
      isMobile: browser.isMobile(),
      deviceID: ""
    };
  },
  mounted() {
    this.deviceID = devicebiz.getDeviceID();
  },
  methods: {
    async copyDeviceID() {
      const { toClipboard } = Clipboard();
      try {
        await toClipboard(this.deviceID);
        ElMessage({
          message: "\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F\u3002",
          type: "success"
        });
      } catch (e) {
        ElMessage.error("\u590D\u5236\u5931\u8D25\uFF0C\u53EF\u80FD\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u590D\u5236\u3002");
      }
    },
    resetDeviceID() {
    }
  }
}, "$2gZ6cnc9TE");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_link = ElLink;
  const _component_el_popconfirm = ElPopconfirm;
  const _component_el_alert = ElAlert;
  _push(`<div${ssrRenderAttrs(mergeProps({
    style: { "background-color": "white" },
    class: { pc_tr_container: !_ctx.isMobile, pc_default_inner: !_ctx.isMobile, pc_default_container: !_ctx.isMobile, mobile_tr_container: _ctx.isMobile }
  }, _attrs))}><div class="tool_title_wrapper"><h1>\u8BBE\u5907\u4FE1\u606F</h1></div><h3>\u8BBE\u5907\u552F\u4E00ID</h3><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "margin-bottom": "20px" })}"><span>${ssrInterpolate(_ctx.deviceID)}</span><span>\xA0\xA0</span>`);
  _push(ssrRenderComponent(_component_el_link, {
    type: "primary",
    onClick: _ctx.copyDeviceID
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u590D\u5236\u8BBE\u5907ID`);
      } else {
        return [
          createTextVNode("\u590D\u5236\u8BBE\u5907ID")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span>\xA0\xA0</span>`);
  _push(ssrRenderComponent(_component_el_popconfirm, {
    title: "\u91CD\u7F6E\u540E\uFF0C\u4E0E\u5F53\u524D\u8BBE\u5907ID\u76F8\u5173\u7684\u6570\u636E\uFF0C\u90FD\u4F1A\u4E22\u5931\uFF0C\u8BF7\u786E\u8BA4\u6B64\u98CE\u9669\uFF01",
    "confirm-button-text": "\u786E\u8BA4\uFF0C\u9700\u8981\u91CD\u7F6E",
    "cancel-button-text": "\u53D6\u6D88",
    width: "300"
  }, {
    reference: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_link, { onClick: _ctx.resetDeviceID }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u91CD\u7F6E\u8BBE\u5907ID`);
            } else {
              return [
                createTextVNode("\u91CD\u7F6E\u8BBE\u5907ID")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_el_link, { onClick: _ctx.resetDeviceID }, {
            default: withCtx(() => [
              createTextVNode("\u91CD\u7F6E\u8BBE\u5907ID")
            ]),
            _: 1
          }, 8, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_el_alert, {
    "show-icon": "",
    title: "\u5173\u4E8E\u8BBE\u5907ID",
    description: "\u54C8\u55BD\u5DE5\u5177\u7BB1\u4E3A\u60A8\u7684\u8BBE\u5907\uFF08\u6D4F\u89C8\u5668\uFF09\u751F\u6210\u4E00\u4E2A\u7EF4\u4E00ID\uFF0C\u5728\u6B64\u8BBE\u5907\u4E0A\u4F7F\u7528\u54C8\u55BD\u5DE5\u5177\u7BB1\u671F\u95F4\uFF0C\u4EA7\u751F\u7684\u6240\u6709\u6570\u636E\uFF08\u6BD4\u5982\u60A8\u4E0A\u4F20\u7684\u6587\u4EF6\uFF09\uFF0C\u90FD\u548C\u6B64ID\u5173\u8054\u3002",
    type: "info",
    closable: false
  }, null, _parent));
  _push(`<div style="${ssrRenderStyle({ "height": "20px" })}"></div>`);
  _push(ssrRenderComponent(_component_el_alert, {
    title: "\u5EFA\u8BAE\u767B\u5F55",
    type: "warning",
    description: "\u6B64\u8BBE\u5907ID\u4E0D\u662F\u7A33\u5B9A\u7684\uFF0C\u53D7\u9650\u4E8E\u6D4F\u89C8\u5668\u672C\u8EAB\u7684\u673A\u5236\u53CA\u7528\u6237\u4F7F\u7528\u4E60\u60EF\u3002\u6BD4\u5982\u5378\u8F7D\u6D4F\u89C8\u5668\u3001\u6E05\u7406\u6D4F\u89C8\u5668\u7F13\u5B58\u7B49\u64CD\u4F5C\u53EF\u80FD\u5BFC\u81F4\u6B64\u8BBE\u5907ID\u4E22\u5931\u3002\u6B64\u8BBE\u5907ID\u4E22\u5931\u540E\u60A8\u5C06\u65E0\u6CD5\u8BBF\u95EE\u4E4B\u524D\u7684\u6570\u636E\u3002",
    "show-icon": "",
    closable: false
  }, null, _parent));
  _push(`<div style="${ssrRenderStyle({ "height": "25px" })}"></div><h3>\u6211\u7684\u6570\u636E</h3>`);
  _push(ssrRenderComponent(_component_el_link, { href: "https://memo.hellokit.com.cn/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u5907\u5FD8\u5F55\u6570\u636E`);
      } else {
        return [
          createTextVNode("\u5907\u5FD8\u5F55\u6570\u636E")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br>`);
  _push(ssrRenderComponent(_component_el_link, { href: "https://hellokit.com.cn/anhao/send/text" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u6697\u53F7\u5E94\u7528\u6570\u636E`);
      } else {
        return [
          createTextVNode("\u6697\u53F7\u5E94\u7528\u6570\u636E")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br>`);
  _push(ssrRenderComponent(_component_el_link, { href: "https://hellokit.com.cn/fileview/all" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u4E07\u80FD\u6587\u4EF6\u67E5\u770B\u5668`);
      } else {
        return [
          createTextVNode("\u4E07\u80FD\u6587\u4EF6\u67E5\u770B\u5668")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/device.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const device = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { device as default };
//# sourceMappingURL=device-B8KkvB0A.mjs.map
