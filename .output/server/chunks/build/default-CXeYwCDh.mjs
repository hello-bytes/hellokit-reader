import { b as useTooltipTriggerProps, a as useTooltipContentProps, E as ElTooltip } from './el-popper-cvaMBS-J.mjs';
import { defineComponent, useSlots, computed, ref, openBlock, createBlock, unref, withCtx, createVNode, Transition, withDirectives, createElementVNode, mergeProps, withModifiers, normalizeClass, createElementBlock, renderSlot, toDisplayString, createCommentVNode, vShow, createTextVNode, useSSRContext, resolveComponent, withKeys } from 'vue';
import { b as buildProps, w as withInstall, f as withInstallDirective, _ as _export_sfc$1 } from './base-CiGMx3WA.mjs';
import { d as dropdownProps, L as Loading, E as ElDropdown, a as ElDropdownMenu, b as ElDropdownItem } from './el-dropdown-item-DyXojXgF.mjs';
import { e as useNamespace, _ as _export_sfc, k as isBoolean, d as defineNuxtComponent, j as devicebiz$1, h as helper, f as useRoute } from './server.mjs';
import { G as addUnit, E as ElIcon, t as close_default, T as close_bold_default, U as finished_default, g as folder_add_default, V as folder_default, s as select_default, W as folder_remove_default, X as folder_delete_default, y as plus_default, Y as minus_default, a as check_default, r as refresh_default, b as share_default, d as reading_default, m as more_default, l as link_default, p as paperclip_default, f as full_screen_default, c as collection_tag_default, n as arrow_right_default, N as arrow_down_default, D as files_default, Z as switch_button_default, _ as service_default } from './index-CXO4VfHa.mjs';
import { E as ElPopconfirm } from './el-popover-CC-9YRpy.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { U as User } from './User-CpYILQyt.mjs';
import { d as dialogProps, u as useDialog, E as ElOverlay, a as dialogEmits, A as AllDialog } from './AllDialog-Cihv-oMH.mjs';
import { a as ElTeleport, E as ElFocusTrap } from './index-Bn0qoa0Y.mjs';
import { a as useDeprecated } from './use-form-item-CHqUkINw.mjs';
import { u as useLocale } from './constants-dJdD8wGz.mjs';
import { E as ElInput } from './index-DFYFv5ur.mjs';
import { E as ElButton } from './el-button-3_FG0aY6.mjs';
import { E as ElMessage } from './index-5CKSucjx.mjs';
import { u as userbiz } from './user-z1s-Jdvw.mjs';
import { r as rssfolder } from './folder-CSzLTgX2.mjs';
import { e as emitter } from './event-f_DzkNfH.mjs';
import { E as ElTable, a as ElTableColumn } from './el-table-column-Cy5YW1tD.mjs';
import { E as ElLink } from './el-link-C2xhUqkp.mjs';
import { i as importbiz } from './import-DUQd4H5-.mjs';
import { r as rssbiz } from './rss-CsPEoumS.mjs';
import { E as ElPagination } from './el-select-CLusrMIy.mjs';
import { r as readLater, f as feedItemBiz } from './read_later-BhIVw6nV.mjs';
import { L as LinkIcon, R as ReadLaterIcon, a as ReadLaterFillIcon, O as OutLinkIcon, _ as _sfc_main$4$1 } from './OutLink-BiLhAui_.mjs';
import Clipboard from 'vue-clipboard3';
import '@vueuse/core';
import '@popperjs/core';
import 'lodash-unified';
import '@vue/shared';
import './el-scrollbar-COSNo7Ps.mjs';
import './index-C_KRVs-j.mjs';
import './refs-CJvnaIJj.mjs';
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
import './event-DSz0kuqc.mjs';
import './use-global-config-0TAJExVa.mjs';
import './objects-MD33mwF0.mjs';
import './scroll-Hq3mw777.mjs';
import './typescript-D6L75muK.mjs';
import '@ctrl/tinycolor';
import 'js-cookie';
import 'mitt';
import './index-9OLeZljD.mjs';
import 'normalize-wheel-es';
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

const drawerProps = buildProps({
  ...dialogProps,
  direction: {
    type: String,
    default: "rtl",
    values: ["ltr", "rtl", "ttb", "btt"]
  },
  size: {
    type: [String, Number],
    default: "30%"
  },
  withHeader: {
    type: Boolean,
    default: true
  },
  modalFade: {
    type: Boolean,
    default: true
  },
  headerAriaLevel: {
    type: String,
    default: "2"
  }
});
const drawerEmits = dialogEmits;
const __default__$1 = defineComponent({
  name: "ElDrawer",
  inheritAttrs: false
});
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: drawerProps,
  emits: drawerEmits,
  setup(__props, { expose }) {
    const props = __props;
    const slots = useSlots();
    useDeprecated({
      scope: "el-drawer",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/drawer.html#slots"
    }, computed(() => !!slots.title));
    const drawerRef = ref();
    const focusStartRef = ref();
    const ns = useNamespace("drawer");
    const { t } = useLocale();
    const {
      afterEnter,
      afterLeave,
      beforeLeave,
      visible,
      rendered,
      titleId,
      bodyId,
      zIndex,
      onModalClick,
      onOpenAutoFocus,
      onCloseAutoFocus,
      onFocusoutPrevented,
      onCloseRequested,
      handleClose
    } = useDialog(props, drawerRef);
    const isHorizontal = computed(() => props.direction === "rtl" || props.direction === "ltr");
    const drawerSize = computed(() => addUnit(props.size));
    expose({
      handleClose,
      afterEnter,
      afterLeave
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTeleport), {
        to: _ctx.appendTo,
        disabled: _ctx.appendTo !== "body" ? false : !_ctx.appendToBody
      }, {
        default: withCtx(() => [
          createVNode(Transition, {
            name: unref(ns).b("fade"),
            onAfterEnter: unref(afterEnter),
            onAfterLeave: unref(afterLeave),
            onBeforeLeave: unref(beforeLeave),
            persisted: ""
          }, {
            default: withCtx(() => [
              withDirectives(createVNode(unref(ElOverlay), {
                mask: _ctx.modal,
                "overlay-class": _ctx.modalClass,
                "z-index": unref(zIndex),
                onClick: unref(onModalClick)
              }, {
                default: withCtx(() => [
                  createVNode(unref(ElFocusTrap), {
                    loop: "",
                    trapped: unref(visible),
                    "focus-trap-el": drawerRef.value,
                    "focus-start-el": focusStartRef.value,
                    onFocusAfterTrapped: unref(onOpenAutoFocus),
                    onFocusAfterReleased: unref(onCloseAutoFocus),
                    onFocusoutPrevented: unref(onFocusoutPrevented),
                    onReleaseRequested: unref(onCloseRequested)
                  }, {
                    default: withCtx(() => [
                      createElementVNode("div", mergeProps({
                        ref_key: "drawerRef",
                        ref: drawerRef,
                        "aria-modal": "true",
                        "aria-label": _ctx.title || void 0,
                        "aria-labelledby": !_ctx.title ? unref(titleId) : void 0,
                        "aria-describedby": unref(bodyId)
                      }, _ctx.$attrs, {
                        class: [unref(ns).b(), _ctx.direction, unref(visible) && "open"],
                        style: unref(isHorizontal) ? "width: " + unref(drawerSize) : "height: " + unref(drawerSize),
                        role: "dialog",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }), [
                        createElementVNode("span", {
                          ref_key: "focusStartRef",
                          ref: focusStartRef,
                          class: normalizeClass(unref(ns).e("sr-focus")),
                          tabindex: "-1"
                        }, null, 2),
                        _ctx.withHeader ? (openBlock(), createElementBlock("header", {
                          key: 0,
                          class: normalizeClass(unref(ns).e("header"))
                        }, [
                          !_ctx.$slots.title ? renderSlot(_ctx.$slots, "header", {
                            key: 0,
                            close: unref(handleClose),
                            titleId: unref(titleId),
                            titleClass: unref(ns).e("title")
                          }, () => [
                            !_ctx.$slots.title ? (openBlock(), createElementBlock("span", {
                              key: 0,
                              id: unref(titleId),
                              role: "heading",
                              "aria-level": _ctx.headerAriaLevel,
                              class: normalizeClass(unref(ns).e("title"))
                            }, toDisplayString(_ctx.title), 11, ["id", "aria-level"])) : createCommentVNode("v-if", true)
                          ]) : renderSlot(_ctx.$slots, "title", { key: 1 }, () => [
                            createCommentVNode(" DEPRECATED SLOT ")
                          ]),
                          _ctx.showClose ? (openBlock(), createElementBlock("button", {
                            key: 2,
                            "aria-label": unref(t)("el.drawer.close"),
                            class: normalizeClass(unref(ns).e("close-btn")),
                            type: "button",
                            onClick: unref(handleClose)
                          }, [
                            createVNode(unref(ElIcon), {
                              class: normalizeClass(unref(ns).e("close"))
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(close_default))
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ], 10, ["aria-label", "onClick"])) : createCommentVNode("v-if", true)
                        ], 2)) : createCommentVNode("v-if", true),
                        unref(rendered) ? (openBlock(), createElementBlock("div", {
                          key: 1,
                          id: unref(bodyId),
                          class: normalizeClass(unref(ns).e("body"))
                        }, [
                          renderSlot(_ctx.$slots, "default")
                        ], 10, ["id"])) : createCommentVNode("v-if", true),
                        _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
                          key: 2,
                          class: normalizeClass(unref(ns).e("footer"))
                        }, [
                          renderSlot(_ctx.$slots, "footer")
                        ], 2)) : createCommentVNode("v-if", true)
                      ], 16, ["aria-label", "aria-labelledby", "aria-describedby", "onClick"])
                    ]),
                    _: 3
                  }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                ]),
                _: 3
              }, 8, ["mask", "overlay-class", "z-index", "onClick"]), [
                [vShow, unref(visible)]
              ])
            ]),
            _: 3
          }, 8, ["name", "onAfterEnter", "onAfterLeave", "onBeforeLeave"])
        ]),
        _: 3
      }, 8, ["to", "disabled"]);
    };
  }
});
var Drawer = /* @__PURE__ */ _export_sfc$1(_sfc_main$v, [["__file", "drawer.vue"]]);
const ElDrawer = withInstall(Drawer);
const popoverProps = buildProps({
  trigger: useTooltipTriggerProps.trigger,
  placement: dropdownProps.placement,
  disabled: useTooltipTriggerProps.disabled,
  visible: useTooltipContentProps.visible,
  transition: useTooltipContentProps.transition,
  popperOptions: dropdownProps.popperOptions,
  tabindex: dropdownProps.tabindex,
  content: useTooltipContentProps.content,
  popperStyle: useTooltipContentProps.popperStyle,
  popperClass: useTooltipContentProps.popperClass,
  enterable: {
    ...useTooltipContentProps.enterable,
    default: true
  },
  effect: {
    ...useTooltipContentProps.effect,
    default: "light"
  },
  teleported: useTooltipContentProps.teleported,
  title: String,
  width: {
    type: [String, Number],
    default: 150
  },
  offset: {
    type: Number,
    default: void 0
  },
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  persistent: {
    type: Boolean,
    default: true
  },
  "onUpdate:visible": {
    type: Function
  }
});
const popoverEmits = {
  "update:visible": (value) => isBoolean(value),
  "before-enter": () => true,
  "before-leave": () => true,
  "after-enter": () => true,
  "after-leave": () => true
};
const updateEventKeyRaw = `onUpdate:visible`;
const __default__ = defineComponent({
  name: "ElPopover"
});
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: popoverProps,
  emits: popoverEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const onUpdateVisible = computed(() => {
      return props[updateEventKeyRaw];
    });
    const ns = useNamespace("popover");
    const tooltipRef = ref();
    const popperRef = computed(() => {
      var _a;
      return (_a = unref(tooltipRef)) == null ? void 0 : _a.popperRef;
    });
    const style = computed(() => {
      return [
        {
          width: addUnit(props.width)
        },
        props.popperStyle
      ];
    });
    const kls = computed(() => {
      return [ns.b(), props.popperClass, { [ns.m("plain")]: !!props.content }];
    });
    const gpuAcceleration = computed(() => {
      return props.transition === `${ns.namespace.value}-fade-in-linear`;
    });
    const hide = () => {
      var _a;
      (_a = tooltipRef.value) == null ? void 0 : _a.hide();
    };
    const beforeEnter = () => {
      emit("before-enter");
    };
    const beforeLeave = () => {
      emit("before-leave");
    };
    const afterEnter = () => {
      emit("after-enter");
    };
    const afterLeave = () => {
      emit("update:visible", false);
      emit("after-leave");
    };
    expose({
      popperRef,
      hide
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTooltip), mergeProps({
        ref_key: "tooltipRef",
        ref: tooltipRef
      }, _ctx.$attrs, {
        trigger: _ctx.trigger,
        placement: _ctx.placement,
        disabled: _ctx.disabled,
        visible: _ctx.visible,
        transition: _ctx.transition,
        "popper-options": _ctx.popperOptions,
        tabindex: _ctx.tabindex,
        content: _ctx.content,
        offset: _ctx.offset,
        "show-after": _ctx.showAfter,
        "hide-after": _ctx.hideAfter,
        "auto-close": _ctx.autoClose,
        "show-arrow": _ctx.showArrow,
        "aria-label": _ctx.title,
        effect: _ctx.effect,
        enterable: _ctx.enterable,
        "popper-class": unref(kls),
        "popper-style": unref(style),
        teleported: _ctx.teleported,
        persistent: _ctx.persistent,
        "gpu-acceleration": unref(gpuAcceleration),
        "onUpdate:visible": unref(onUpdateVisible),
        onBeforeShow: beforeEnter,
        onBeforeHide: beforeLeave,
        onShow: afterEnter,
        onHide: afterLeave
      }), {
        content: withCtx(() => [
          _ctx.title ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns).e("title")),
            role: "title"
          }, toDisplayString(_ctx.title), 3)) : createCommentVNode("v-if", true),
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.content), 1)
          ])
        ]),
        default: withCtx(() => [
          _ctx.$slots.reference ? renderSlot(_ctx.$slots, "reference", { key: 0 }) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]);
    };
  }
});
var Popover = /* @__PURE__ */ _export_sfc$1(_sfc_main$u, [["__file", "popover.vue"]]);
const attachEvents = (el, binding) => {
  const popperComponent = binding.arg || binding.value;
  const popover = popperComponent == null ? void 0 : popperComponent.popperRef;
  if (popover) {
    popover.triggerRef = el;
  }
};
var PopoverDirective = {
  mounted(el, binding) {
    attachEvents(el, binding);
  },
  updated(el, binding) {
    attachEvents(el, binding);
  }
};
const VPopover = "popover";
const ElPopoverDirective = withInstallDirective(PopoverDirective, VPopover);
const ElPopover = withInstall(Popover, {
  directive: ElPopoverDirective
});
const _sfc_main$t = {};
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    t: "1729441165354",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "6785",
    width: "256",
    height: "256"
  }, _attrs))}><path d="M365.714286 731.428571c0-40.557714-32.585143-73.142857-73.142857-73.142857s-73.142857 32.585143-73.142858 73.142857 32.585143 73.142857 73.142858 73.142858 73.142857-32.585143 73.142857-73.142858z m200.557714 53.723429a346.258286 346.258286 0 0 0-327.424-327.424c-5.156571-0.585143-10.276571 1.718857-13.714286 5.156571S219.428571 470.893714 219.428571 476.013714v73.142857c0 9.728 7.424 17.700571 17.152 18.285715 117.138286 8.557714 211.419429 102.838857 220.013715 220.013714a18.212571 18.212571 0 0 0 18.285714 17.152h73.142857c5.156571 0 9.728-2.304 13.129143-5.705143s5.705143-8.557714 5.156571-13.714286z m219.428571 0.548571C775.972571 488.557714 535.405714 247.990857 238.262857 238.262857a13.897143 13.897143 0 0 0-13.129143 5.156572 18.578286 18.578286 0 0 0-5.705143 13.129142v73.142858c0 9.728 8.009143 17.700571 17.700572 18.285714 237.129143 8.557714 430.299429 201.728 438.857143 438.857143a18.651429 18.651429 0 0 0 18.285714 17.700571h73.142857a18.614857 18.614857 0 0 0 13.129143-5.705143 14.628571 14.628571 0 0 0 5.156571-13.129143zM950.857143 237.714286v548.571428c0 90.843429-73.728 164.571429-164.571429 164.571429h-548.571428A164.644571 164.644571 0 0 1 73.142857 786.285714v-548.571428C73.142857 146.870857 146.870857 73.142857 237.714286 73.142857h548.571428C877.129143 73.142857 950.857143 146.870857 950.857143 237.714286z" fill="#009a61" p-id="6786"></path></svg>`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("icons/RssLogo.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const RssLogo = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$t]]);
const _sfc_main$s = {};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    t: "1729441165354",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "6785",
    width: "256",
    height: "256"
  }, _attrs))}><path d="M365.714286 731.428571c0-40.557714-32.585143-73.142857-73.142857-73.142857s-73.142857 32.585143-73.142858 73.142857 32.585143 73.142857 73.142858 73.142858 73.142857-32.585143 73.142857-73.142858z m200.557714 53.723429a346.258286 346.258286 0 0 0-327.424-327.424c-5.156571-0.585143-10.276571 1.718857-13.714286 5.156571S219.428571 470.893714 219.428571 476.013714v73.142857c0 9.728 7.424 17.700571 17.152 18.285715 117.138286 8.557714 211.419429 102.838857 220.013715 220.013714a18.212571 18.212571 0 0 0 18.285714 17.152h73.142857c5.156571 0 9.728-2.304 13.129143-5.705143s5.705143-8.557714 5.156571-13.714286z m219.428571 0.548571C775.972571 488.557714 535.405714 247.990857 238.262857 238.262857a13.897143 13.897143 0 0 0-13.129143 5.156572 18.578286 18.578286 0 0 0-5.705143 13.129142v73.142858c0 9.728 8.009143 17.700571 17.700572 18.285714 237.129143 8.557714 430.299429 201.728 438.857143 438.857143a18.651429 18.651429 0 0 0 18.285714 17.700571h73.142857a18.614857 18.614857 0 0 0 13.129143-5.705143 14.628571 14.628571 0 0 0 5.156571-13.129143zM950.857143 237.714286v548.571428c0 90.843429-73.728 164.571429-164.571429 164.571429h-548.571428A164.644571 164.644571 0 0 1 73.142857 786.285714v-548.571428C73.142857 146.870857 146.870857 73.142857 237.714286 73.142857h548.571428C877.129143 73.142857 950.857143 146.870857 950.857143 237.714286z" fill="#707070" p-id="6786"></path></svg>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("icons/RssLogoGray.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const RssLogoGray = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$s]]);
const _sfc_main$r = {};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    t: "1729577811762",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "10730",
    width: "256",
    height: "256"
  }, _attrs))}><path d="M849.92 981.333333H175.658667A132.736 132.736 0 0 1 42.666667 848.597333V175.36A132.736 132.736 0 0 1 175.658667 42.666667H849.92C921.898667 42.666667 981.333333 102.016 981.333333 175.402667v673.152C981.333333 922.026667 921.898667 981.333333 849.92 981.333333zM175.658667 136.362667a38.698667 38.698667 0 0 0-39.125334 39.04v673.152c0 21.888 17.194667 39.082667 39.125334 39.082666H849.92a38.698667 38.698667 0 0 0 39.125333-39.04V175.36c-1.578667-21.845333-18.773333-39.04-39.125333-39.04H175.658667z" fill="#707070" p-id="10731"></path><path d="M374.314667 957.866667a46.08 46.08 0 0 1-46.933334-46.805334V111.36a46.08 46.08 0 0 1 46.933334-46.890667c26.624 0 46.933333 20.309333 46.933333 46.890667v799.658667a46.08 46.08 0 0 1-46.933333 46.848z" fill="#707070" p-id="10732"></path></svg>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("icons/SideBar.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const SideBar = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$r]]);
const _sfc_main$q = {};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    t: "1729578337189",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "11829",
    width: "256",
    height: "256"
  }, _attrs))}><path d="M931.8 245.4H822.6V136.3c0-15.1-12.2-27.3-27.3-27.3S768 121.2 768 136.3v109.1H658.9c-15.1 0-27.3 12.2-27.3 27.3 0 15.1 12.2 27.3 27.3 27.3H768v109.1c0 15.1 12.2 27.3 27.3 27.3s27.3-12.2 27.3-27.3V300h109.1c15.1 0 27.3-12.2 27.3-27.3 0.1-15.1-12.1-27.3-27.2-27.3zM783.7 882.1c0 11.4-6.1 22-16 27.7-9.9 5.7-22.1 5.7-32 0-9.9-5.7-16-16.3-16-27.7 0-335.9-272.3-608.3-608.3-608.3-11.4 0-22-6.1-27.7-16-5.7-9.9-5.7-22.1 0-32 5.7-9.9 16.3-16 27.7-16 371.3 0 672.3 301 672.3 672.3z" p-id="11830" fill="#707070"></path><path d="M591.6 882.1c0 11.4-6.1 22-16 27.7-9.9 5.7-22.1 5.7-32 0-9.9-5.7-16-16.3-16-27.7 0-229.9-186.3-416.2-416.2-416.2-11.4 0-22-6.1-27.7-16-5.7-9.9-5.7-22.1 0-32 5.7-9.9 16.3-16 27.7-16 265.2 0 480.2 215 480.2 480.2z" p-id="11831" fill="#707070"></path><path d="M399.6 882.1c0 11.4-6.1 22-16 27.7-9.9 5.7-22.1 5.7-32 0-9.9-5.7-16-16.3-16-27.7 0-123.8-100.3-224.1-224.1-224.1-11.4 0-22-6.1-27.7-16-5.7-9.9-5.7-22.1 0-32 5.7-9.9 16.3-16 27.7-16 159.1-0.1 288.1 128.9 288.1 288.1z" p-id="11832" fill="#707070"></path><path d="M127.9 852m-63 0a63 63 0 1 0 126 0 63 63 0 1 0-126 0Z" p-id="11833" fill="#707070"></path></svg>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("icons/AddRss.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const AddRss = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$q]]);
const _sfc_main$p = {};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    t: "1729604199621",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "19012",
    width: "256",
    height: "256"
  }, _attrs))}><path d="M1024.256 824.64v-1.28 2.112l-0.448-6.144 0.448 4.032v-518.4c0-47.296-22.592-80.576-58.24-96a116.48 116.48 0 0 0-50.624-8.704H551.744c0.96 0-5.376-0.448-11.264-9.664a1428.544 1428.544 0 0 0-33.024-49.088 151.616 151.616 0 0 0-14.784-18.432c-27.648-29.376-59.328-38.592-86.336-35.456-3.2 0.384-282.816 0-282.816 0-50.56 0-87.168 22.336-107.136 58.688a120.96 120.96 0 0 0-15.744 56.96v618.816c0 51.712 20.8 88.064 56.448 105.216 18.048 8.768 36.16 10.88 52.416 9.152h-1.856l6.848-0.384-4.096 0.384H922.24c48.256 0 81.664-24 95.232-62.272 5.824-15.808 8.128-32.896 6.784-49.536z m-102.08 68.864H107.264s-64.128 10.048-64.128-71.872V203.264s0.896-73.152 80-73.152h286.016s33.792-6.976 62.72 35.52c27.584 40.32 43.392 66.176 43.392 66.176s10.816 11.776 33.408 11.328c-20.288 0.448 367.68 0 367.68 0s65.088-6.528 65.088 62.272v520.576c0-0.512 9.472 67.52-59.264 67.52z" fill="#707070" p-id="19013"></path><path d="M711.104 592.256H571.968v139.136a27.968 27.968 0 0 1-27.904 27.904 27.968 27.968 0 0 1-27.84-27.904V592.256H377.152a27.904 27.904 0 0 1 0-55.744h139.136V397.376a27.84 27.84 0 0 1 55.744 0v139.072h139.136a27.904 27.904 0 0 1-0.064 55.808zM907.392 145.92h-311.68a24.704 24.704 0 0 1-24.896-24.576c0-13.568 11.136-24.576 24.896-24.576h311.68c13.76 0 24.96 11.008 24.96 24.576a24.768 24.768 0 0 1-24.96 24.576z" fill="#707070" p-id="19014"></path></svg>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("icons/CreateRssFolder.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const CreateRssFolder = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$p]]);
const _sfc_main$o = {};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    t: "1729604300067",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "20986",
    width: "256",
    height: "256"
  }, _attrs))}><path d="M512.002662 664.3712c-5.8368 0-11.5712-1.6384-16.7936-4.8128L15.260262 359.8336C5.737062 353.9968 0.002662 343.4496 0.002662 332.1856s5.7344-21.8112 15.2576-27.648L495.209062 4.8128c10.24-6.4512 23.2448-6.4512 33.4848 0L1008.642662 304.5376c9.5232 5.9392 15.2576 16.384 15.2576 27.648s-5.7344 21.8112-15.2576 27.648L528.796262 659.5584c-5.2224 3.1744-10.9568 4.8128-16.7936 4.8128zM93.084262 332.1856L512.002662 593.7152l418.9184-261.5296L512.002662 70.656 93.084262 332.1856z" p-id="20987" fill="#707070"></path><path d="M512.002662 844.1856c-5.8368 0-11.5712-1.6384-16.7936-4.8128L15.260262 539.7504C0.207462 530.3296-4.502938 510.3616 4.713062 495.0016c9.216-15.2576 28.9792-20.0704 44.032-10.6496L512.002662 773.5296 975.260262 484.352c15.0528-9.4208 34.7136-4.608 44.032 10.6496 9.216 15.2576 4.5056 35.328-10.5472 44.7488L528.796262 839.3728c-5.2224 3.1744-10.9568 4.8128-16.7936 4.8128z" p-id="20988" fill="#707070"></path><path d="M512.002662 1024c-5.8368 0-11.5712-1.6384-16.7936-4.8128L15.260262 719.4624C0.207462 710.0416-4.502938 690.0736 4.713062 674.7136c9.216-15.2576 28.9792-20.0704 44.032-10.6496L512.002662 953.344l463.2576-289.1776c15.0528-9.4208 34.7136-4.608 44.032 10.6496 9.216 15.2576 4.5056 35.328-10.5472 44.7488L528.796262 1019.1872c-5.2224 3.1744-10.9568 4.8128-16.7936 4.8128z" p-id="20989" fill="#707070"></path></svg>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("icons/AllFeed.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const AllFeed = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$o]]);
const _sfc_main$n = {};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    t: "1729604405377",
    class: "icon",
    viewBox: "0 0 1025 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "22106",
    width: "256",
    height: "256"
  }, _attrs))}><path d="M239.3 579.8h102.6c18.8 0 34.2 15.2 34.2 33.9 0 18.6-15.4 33.9-34.2 33.9H239.3c-18.8 0-34.2-15.3-34.2-33.9 0.1-18.7 15.4-33.9 34.2-33.9z m0-161H444.4c18.8 0 34.2 15.2 34.2 33.9 0 18.6-15.4 33.9-34.2 33.9H239.3c-18.8 0-34.2-15.2-34.2-33.9 0.1-18.6 15.4-33.9 34.2-33.9z m0-161h307.7c18.8 0 34.2 15.2 34.2 33.9 0 18.6-15.4 33.9-34.2 33.9H239.3c-18.8 0-34.2-15.2-34.2-33.9 0.1-18.6 15.4-33.9 34.2-33.9z m512.8 677.8c112.8 0 205.1-91.5 205.1-203.3 0-111.8-92.3-203.3-205.1-203.3s-205.1 91.5-205.1 203.3c0 111.8 92.3 203.3 205.1 203.3z m0 67.8c-150.4 0-273.5-122-273.5-271.1s123.1-271.1 273.5-271.1 273.5 122 273.5 271.1-123.1 271.1-273.5 271.1z m13.8-259.9l60.7 45.4c10.8 8 13 23.3 4.9 34 0 0.1-0.1 0.1-0.1 0.2-8.2 10.8-23.6 13-34.5 4.8l-69.2-51.7c-1.5-1.2-2.9-2.5-4.1-3.9-4.3-4.4-6.9-10.5-6.9-17.1v-147c0-13.6 11-24.6 24.6-24.6 13.6 0 24.6 11 24.6 24.6v135.3zM410.3 901.7c18.8 0 34.2 15.2 34.2 33.9s-15.4 33.9-34.2 33.9H68.4c-37.6 0-68.4-30.5-68.4-67.8V88.4c0-37.3 30.8-67.8 68.4-67.8h649.5c37.6 0 68.4 30.5 68.4 67.8v271.1c0 18.6-15.4 33.9-34.2 33.9-18.8 0-34.2-15.2-34.2-33.9V88.4H68.4v813.4h341.9z" p-id="22107" fill="#707070"></path></svg>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("icons/LaterRead.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const LaterRead = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$n]]);
const _sfc_main$m = {};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    t: "1729604489300",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "24068",
    width: "256",
    height: "256"
  }, _attrs))}><path d="M761.6 595.2L544 518.4V211.2c0-19.2-19.2-38.4-38.4-38.4-19.2 6.4-38.4 19.2-38.4 38.4v326.4c0 12.8 6.4 25.6 19.2 32l236.8 89.6c6.4 0 32 12.8 51.2-19.2 12.8-19.2-6.4-44.8-12.8-44.8z" p-id="24069" fill="#707070"></path><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512-230.4-512-512-512z m441.6 512c0 243.2-198.4 441.6-441.6 441.6S70.4 755.2 70.4 512 268.8 70.4 512 70.4c243.2 0 441.6 198.4 441.6 441.6z" p-id="24070" fill="#707070"></path></svg>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("icons/Recent.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const Recent = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$m]]);
const _sfc_main$l = {};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    t: "1729604925634",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "31303",
    width: "256",
    height: "256"
  }, _attrs))}><path d="M483.555556 910.222222c-11.377778 0-22.755556-5.688889-34.133334-17.066666l-307.2-307.2c-91.022222-91.022222-113.777778-227.555556-51.2-341.333334 34.133333-68.266667 102.4-113.777778 176.355556-125.155555 68.266667-11.377778 142.222222 5.688889 204.8 51.2 5.688889 5.688889 17.066667 5.688889 28.444444 0 56.888889-45.511111 130.844444-62.577778 204.8-51.2 73.955556 11.377778 142.222222 56.888889 176.355556 125.155555 34.133333 56.888889 39.822222 125.155556 28.444444 193.422222 0 5.688889-5.688889 11.377778-11.377778 17.066667-5.688889 5.688889-11.377778 5.688889-17.066666 0l-34.133334-11.377778c-11.377778-5.688889-17.066667-17.066667-17.066666-28.444444 11.377778-45.511111 0-91.022222-17.066667-125.155556-22.755556-45.511111-62.577778-73.955556-113.777778-85.333333-56.888889-5.688889-113.777778 11.377778-159.288889 45.511111-28.444444 22.755556-68.266667 22.755556-96.711111 0C398.222222 210.488889 341.333333 193.422222 284.444444 204.8c-56.888889 5.688889-96.711111 34.133333-119.466666 79.644444-45.511111 79.644444-28.444444 176.355556 39.822222 238.933334l267.377778 267.377778c5.688889 5.688889 11.377778 5.688889 17.066666 5.688888 5.688889 0 11.377778 0 17.066667-5.688888l39.822222-39.822223c5.688889-5.688889 11.377778-5.688889 17.066667-5.688889s11.377778 0 17.066667 5.688889l22.755555 22.755556c11.377778 11.377778 11.377778 22.755556 0 34.133333l-79.644444 79.644445c-11.377778 17.066667-28.444444 22.755556-39.822222 22.755555z" p-id="31304" fill="#707070"></path><path d="M910.222222 517.688889c-17.066667-17.066667-39.822222-17.066667-51.2 0l-153.6 159.288889-79.644444-85.333334c-17.066667-17.066667-39.822222-17.066667-51.2 0-17.066667 17.066667-17.066667 39.822222 0 56.888889l108.088889 113.777778c17.066667 17.066667 39.822222 17.066667 51.2 0l176.355555-187.733333c11.377778-17.066667 11.377778-45.511111 0-56.888889z" p-id="31305" fill="#707070"></path></svg>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("icons/AllSubscribeFeed.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const AllSubscribeFeed = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$l]]);
const _sfc_main$k = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    t: "1729604925634",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "31303",
    width: "256",
    height: "256"
  }, _attrs))}><path d="M483.555556 910.222222c-11.377778 0-22.755556-5.688889-34.133334-17.066666l-307.2-307.2c-91.022222-91.022222-113.777778-227.555556-51.2-341.333334 34.133333-68.266667 102.4-113.777778 176.355556-125.155555 68.266667-11.377778 142.222222 5.688889 204.8 51.2 5.688889 5.688889 17.066667 5.688889 28.444444 0 56.888889-45.511111 130.844444-62.577778 204.8-51.2 73.955556 11.377778 142.222222 56.888889 176.355556 125.155555 34.133333 56.888889 39.822222 125.155556 28.444444 193.422222 0 5.688889-5.688889 11.377778-11.377778 17.066667-5.688889 5.688889-11.377778 5.688889-17.066666 0l-34.133334-11.377778c-11.377778-5.688889-17.066667-17.066667-17.066666-28.444444 11.377778-45.511111 0-91.022222-17.066667-125.155556-22.755556-45.511111-62.577778-73.955556-113.777778-85.333333-56.888889-5.688889-113.777778 11.377778-159.288889 45.511111-28.444444 22.755556-68.266667 22.755556-96.711111 0C398.222222 210.488889 341.333333 193.422222 284.444444 204.8c-56.888889 5.688889-96.711111 34.133333-119.466666 79.644444-45.511111 79.644444-28.444444 176.355556 39.822222 238.933334l267.377778 267.377778c5.688889 5.688889 11.377778 5.688889 17.066666 5.688888 5.688889 0 11.377778 0 17.066667-5.688888l39.822222-39.822223c5.688889-5.688889 11.377778-5.688889 17.066667-5.688889s11.377778 0 17.066667 5.688889l22.755555 22.755556c11.377778 11.377778 11.377778 22.755556 0 34.133333l-79.644444 79.644445c-11.377778 17.066667-28.444444 22.755556-39.822222 22.755555z" p-id="31304" fill="#009a61"></path><path d="M910.222222 517.688889c-17.066667-17.066667-39.822222-17.066667-51.2 0l-153.6 159.288889-79.644444-85.333334c-17.066667-17.066667-39.822222-17.066667-51.2 0-17.066667 17.066667-17.066667 39.822222 0 56.888889l108.088889 113.777778c17.066667 17.066667 39.822222 17.066667 51.2 0l176.355555-187.733333c11.377778-17.066667 11.377778-45.511111 0-56.888889z" p-id="31305" fill="#009a61"></path></svg>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("icons/AllSubscribeFeedActive.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const AllSubscribeFeedActive = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$k]]);
const _sfc_main$j = {};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    t: "1735364759125",
    class: "icon",
    viewBox: "0 0 1751 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "6496",
    width: "144",
    height: "144"
  }, _attrs))}><path d="M1245.79435 0l116.357062 116.5258-442.335216 441.901319-116.357062-116.357063z" p-id="6497" fill="#707070"></path><path d="M1629.143503 82.103202L921.527684 789.719021 584.195857 444.143126l-123.419962 115.175895 460.751789 460.775894L1744.319397 197.303202zM0 559.319021l460.775895 460.775894 115.175894-115.2L115.175895 444.143126z" p-id="6498" fill="#707070"></path></svg>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("icons/Readed.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const ReadedIcon = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$j]]);
const _sfc_main$i = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    t: "1729605428484",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "45174",
    width: "256",
    height: "256"
  }, _attrs))}><path d="M418.909091 768H310.30303A116.363636 116.363636 0 0 1 193.939394 651.636364V550.787879a116.363636 116.363636 0 0 1 116.363636-116.363637h108.606061a116.363636 116.363636 0 0 1 116.363636 116.363637v100.848485a116.363636 116.363636 0 0 1-116.363636 116.363636zM310.30303 512a38.787879 38.787879 0 0 0-38.787878 38.787879v100.848485a38.787879 38.787879 0 0 0 38.787878 38.787878h108.606061a38.787879 38.787879 0 0 0 38.787879-38.787878V550.787879a38.787879 38.787879 0 0 0-38.787879-38.787879zM799.030303 550.787879h-155.151515a38.787879 38.787879 0 1 1 0-77.575758h155.151515a38.787879 38.787879 0 0 1 0 77.575758zM799.030303 333.575758H232.727273a38.787879 38.787879 0 0 1-38.787879-38.787879 38.787879 38.787879 0 0 1 38.787879-38.787879h566.30303a38.787879 38.787879 0 0 1 38.787879 38.787879 38.787879 38.787879 0 0 1-38.787879 38.787879zM799.030303 729.212121h-155.151515a38.787879 38.787879 0 1 1 0-77.575757h155.151515a38.787879 38.787879 0 0 1 0 77.575757z" fill="#707070" p-id="45175"></path><path d="M868.848485 1024H155.151515A116.363636 116.363636 0 0 1 38.787879 907.636364V116.363636A116.363636 116.363636 0 0 1 155.151515 0h713.69697a116.363636 116.363636 0 0 1 116.363636 116.363636v791.272728a116.363636 116.363636 0 0 1-116.363636 116.363636zM155.151515 77.575758a38.787879 38.787879 0 0 0-38.787879 38.787878v791.272728a38.787879 38.787879 0 0 0 38.787879 38.787878h713.69697a38.787879 38.787879 0 0 0 38.787879-38.787878V116.363636a38.787879 38.787879 0 0 0-38.787879-38.787878z" fill="#707070" p-id="45176"></path></svg>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("icons/AllFeedItem.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const AllFeedItem = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$i]]);
const _sfc_main$h = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    t: "1729605490330",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "46525",
    width: "256",
    height: "256"
  }, _attrs))}><path d="M704 199.68h28.16c25.6 0 46.08-20.48 46.08-43.52V69.12c0-25.6-20.48-43.52-46.08-43.52h-28.16c-25.6 0-43.52 20.48-43.52 43.52v87.04c-2.56 25.6 17.92 43.52 43.52 43.52z m268.8 25.6v-102.4c0-20.48-17.92-38.4-38.4-38.4h-84.48-46.08v56.32c0 51.2-40.96 92.16-92.16 92.16h-5.12c-51.2 0-92.16-40.96-92.16-92.16V84.48h-171.52v56.32c0 51.2-40.96 92.16-92.16 92.16h-5.12c-51.2 0-92.16-40.96-92.16-92.16V84.48H179.2h10.24-99.84C69.12 84.48 51.2 102.4 51.2 122.88v844.8c0 20.48 17.92 38.4 38.4 38.4H184.32h-12.8H844.8h-15.36 97.28c20.48 0 38.4-17.92 38.4-38.4V232.96c7.68-2.56 7.68-5.12 7.68-7.68z m-58.88 663.04c0 53.76-5.12 58.88-58.88 58.88H168.96c-53.76 0-58.88-5.12-58.88-58.88V320h803.84v568.32zM332.8 199.68h28.16c25.6 0 46.08-20.48 46.08-43.52V69.12c0-25.6-20.48-43.52-46.08-43.52H332.8c-25.6 0-46.08 20.48-46.08 43.52v87.04c0 25.6 20.48 43.52 46.08 43.52zM302.08 640h391.68c-12.8 25.6-25.6 48.64-43.52 71.68-15.36 20.48-33.28 38.4-53.76 56.32-20.48 15.36-40.96 30.72-64 43.52-17.92 10.24-35.84 17.92-56.32 25.6-10.24 2.56-12.8 12.8-10.24 23.04 2.56 5.12 5.12 7.68 10.24 10.24 5.12 2.56 10.24 2.56 15.36 0 23.04-7.68 46.08-20.48 69.12-33.28 28.16-15.36 51.2-35.84 76.8-56.32 23.04-23.04 43.52-48.64 64-76.8 15.36-23.04 28.16-48.64 38.4-76.8 5.12-12.8-5.12-25.6-17.92-25.6H537.6v-66.56c0-10.24-7.68-17.92-17.92-17.92-10.24 0-17.92 7.68-17.92 17.92v66.56h-199.68c-10.24 0-17.92 7.68-17.92 17.92v2.56c-2.56 10.24 7.68 17.92 17.92 17.92z m17.92-102.4l74.24-76.8 12.8-12.8c10.24-7.68 17.92-12.8 30.72-15.36 5.12-2.56 12.8-2.56 23.04-2.56h122.88c7.68 0 15.36 0 23.04 2.56 5.12 0 12.8 2.56 17.92 5.12 10.24 5.12 17.92 12.8 25.6 20.48l71.68 76.8c7.68 7.68 17.92 7.68 25.6 0 5.12-5.12 5.12-7.68 5.12-12.8s-2.56-7.68-5.12-12.8L675.84 435.2l-17.92-17.92c-5.12-5.12-12.8-7.68-20.48-12.8-15.36-7.68-35.84-10.24-56.32-10.24h-122.88c-20.48 0-38.4 2.56-56.32 10.24-7.68 5.12-12.8 7.68-20.48 12.8l-17.92 17.92-71.68 76.8c-5.12 5.12-5.12 7.68-5.12 12.8s2.56 10.24 5.12 12.8c7.68 7.68 20.48 7.68 28.16 0z" fill="#707070" p-id="46526"></path></svg>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("icons/Today.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const Today = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$h]]);
const _sfc_main$g = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    t: "1730996872166",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "17427",
    width: "256",
    height: "256"
  }, _attrs))}><path d="M876.555191 0H147.444809A95.125683 95.125683 0 0 0 52.319126 95.125683v833.748634a95.125683 95.125683 0 0 0 95.125683 95.125683h729.110382a95.125683 95.125683 0 0 0 95.125683-95.125683V95.125683a95.125683 95.125683 0 0 0-95.125683-95.125683z m39.169399 928.874317a39.169399 39.169399 0 0 1-39.169399 39.169399H147.444809a39.169399 39.169399 0 0 1-39.169399-39.169399V95.125683a39.169399 39.169399 0 0 1 39.169399-39.169399h729.110382a39.169399 39.169399 0 0 1 39.169399 39.169399z" fill="#707070" p-id="17428"></path><path d="M715.904699 167.868852H308.095301a95.125683 95.125683 0 0 0-95.125684 95.125684v89.530054a95.125683 95.125683 0 0 0 95.125684 95.125683h407.865355a95.125683 95.125683 0 0 0 95.125683-95.125683V262.994536a95.125683 95.125683 0 0 0-95.18164-95.125684z m39.169399 184.991476a39.169399 39.169399 0 0 1-39.169399 39.169399H308.095301a39.169399 39.169399 0 0 1-39.169399-39.169399V262.994536a39.169399 39.169399 0 0 1 39.169399-39.169399h407.865355a39.169399 39.169399 0 0 1 39.169399 39.169399zM504.781639 556.653115l-2.350164 0.615519-2.182295 1.007213c-163.504262 75.708852-234.00918-7.442186-237.366557-11.526995a27.978142 27.978142 0 0 0-44.093552 34.469071c3.91694 5.036066 97.979454 122.376393 302.499672 28.985356 18.577486-4.36459 156.173989-33.57377 244.081312 38.330054a27.978142 27.978142 0 0 0 35.420328-43.310164c-116.165246-95.181639-288.734426-50.472568-296.008744-48.570054zM504.781639 758.151694l-2.350164 0.615519-2.182295 1.007213c-163.560219 75.708852-234.065137-7.442186-237.366557-11.526994a27.978142 27.978142 0 0 0-44.093552 34.469071c3.91694 5.036066 97.979454 122.376393 302.443716 28.985355 18.577486-4.36459 156.173989-33.57377 244.081311 38.330055a27.978142 27.978142 0 0 0 35.420328-43.310164c-116.10929-95.181639-288.67847-50.528525-295.952787-48.570055z" fill="#707070" p-id="17429"></path></svg>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("icons/AllArticleIcon.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const AllArticleIcon = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$f = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    t: "1729872766076",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "9494",
    width: "256",
    height: "256"
  }, _attrs))}><path d="M322.78 818.43c-30.35-0.18-54.91-24.74-55.09-55.09V529.61c0-178.97 145.09-324.06 324.06-324.06 154.44-0.69 295.84 86.5 364.56 224.82 9.32 20.34 0.38 44.38-19.96 53.7-19.43 8.89-42.43 1.17-52.55-17.65C829.13 356 716.58 286.15 593.37 286.16c-134.23 0-243.04 108.81-243.04 243.04v164.46l131.65-150.28c14.04-17.42 39.55-20.14 56.96-6.1 17.42 14.03 20.15 39.54 6.11 56.95-0.73 0.91-1.5 1.78-2.3 2.62L365.72 799.39a54.299 54.299 0 0 1-42.94 19.04z m-89.12-101.67c16.76-14.77 18.39-40.33 3.65-57.11L136.04 543.79c-14.04-17.42-39.55-20.14-56.96-6.1-17.42 14.03-20.15 39.54-6.11 56.95 0.73 0.91 1.5 1.78 2.3 2.62l101.27 115.85c14.78 16.77 40.33 18.4 57.12 3.65z" fill="#707070" p-id="9495"></path></svg>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("icons/Cancel.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const Cancel = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f]]);
const _sfc_main$e = defineNuxtComponent({
  components: {
    CloseBold: close_bold_default,
    Finished: finished_default,
    Cancel
  },
  async asyncData() {
    return {
      drawWidth: "600",
      showDrawer: false,
      folderName: ""
    };
  },
  mounted() {
    emitter.on("on_popup_createfolder", (param) => {
      this.show();
    });
  },
  methods: {
    show() {
      this.showDrawer = true;
    },
    onCloseClick() {
      this.showDrawer = false;
    },
    onKeyUp(k) {
    },
    async createFolderClick() {
      let responseData = null;
      if (userbiz.isUserMode()) {
        responseData = await rssfolder.createUserFolder(this.folderName);
      } else if (userbiz.isDeviceMode()) {
        responseData = await rssfolder.createDeviceFolder(devicebiz$1.getDeviceID(), this.folderName);
      }
      if (!helper.isResultOk(responseData)) {
        ElMessage.error("\u521B\u5EFA\u76EE\u5F55\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002");
        return;
      }
      ElMessage.success("\u76EE\u5F55\u521B\u5EFA\u6210\u529F\u3002");
      emitter.emit("on_feed_folder_create", {});
      this.onCloseClick();
    },
    cancelFolderClick() {
      this.onCloseClick();
    },
    formatTime(time) {
      return helper.getHumanTime(time / 1e3);
    }
  }
}, "$bxGFTQ1lE6");
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_drawer = ElDrawer;
  const _component_el_icon = ElIcon;
  const _component_CloseBold = resolveComponent("CloseBold");
  const _component_el_input = ElInput;
  const _component_el_button = ElButton;
  const _component_Finished = resolveComponent("Finished");
  _push(ssrRenderComponent(_component_el_drawer, mergeProps({
    modelValue: _ctx.showDrawer,
    "onUpdate:modelValue": ($event) => _ctx.showDrawer = $event,
    "with-header": false,
    "destroy-on-close": true,
    size: _ctx.drawWidth
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="close_wrapper" data-v-08727f51${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_icon, { size: 30 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_CloseBold, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_CloseBold)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div style="${ssrRenderStyle({ "height": "30px" })}" data-v-08727f51${_scopeId}></div><div style="${ssrRenderStyle({ "max-width": "650px", "margin": "0px auto" })}" data-v-08727f51${_scopeId}><h2 style="${ssrRenderStyle({ "margin-bottom": "0px", "font-size": "34px" })}" data-v-08727f51${_scopeId}>\u521B\u5EFA\u6587\u4EF6\u5939</h2><p style="${ssrRenderStyle({ "margin-top": "0px", "font-size": "18px", "color": "rgb(117, 117, 117)" })}" data-v-08727f51${_scopeId}>\u6839\u636E\u60A8\u7684\u559C\u597D\uFF0C\u5C06\u7279\u5B9A\u8BDD\u9898\u6216\u7C7B\u578B\u7684\u8BA2\u9605\u6E90\u653E\u5230\u79C1\u6709\u6587\u4EF6\u5939\u4E0B</p><p style="${ssrRenderStyle({ "margin-bottom": "0px", "margin-top": "30px", "font-size": "14px" })}" data-v-08727f51${_scopeId}>\u6587\u4EF6\u5939\u540D\u79F0</p>`);
        _push2(ssrRenderComponent(_component_el_input, {
          modelValue: _ctx.folderName,
          "onUpdate:modelValue": ($event) => _ctx.folderName = $event,
          onKeyup: _ctx.createFolderClick,
          size: "large",
          placeholder: ""
        }, null, _parent2, _scopeId));
        _push2(`<div style="${ssrRenderStyle({ "margin-top": "20px" })}" data-v-08727f51${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_button, {
          size: "large",
          type: "primary",
          onClick: _ctx.createFolderClick
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_icon, { size: 20 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_Finished, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_Finished)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`\xA0\u4FDD\u5B58`);
            } else {
              return [
                createVNode(_component_el_icon, { size: 20 }, {
                  default: withCtx(() => [
                    createVNode(_component_Finished)
                  ]),
                  _: 1
                }),
                createTextVNode("\xA0\u4FDD\u5B58")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_button, {
          size: "large",
          onClick: _ctx.cancelFolderClick
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u53D6\u6D88`);
            } else {
              return [
                createTextVNode("\u53D6\u6D88")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", {
            class: "close_wrapper",
            onClick: _ctx.onCloseClick
          }, [
            createVNode(_component_el_icon, { size: 30 }, {
              default: withCtx(() => [
                createVNode(_component_CloseBold)
              ]),
              _: 1
            })
          ], 8, ["onClick"]),
          createVNode("div", { style: { "height": "30px" } }),
          createVNode("div", { style: { "max-width": "650px", "margin": "0px auto" } }, [
            createVNode("h2", { style: { "margin-bottom": "0px", "font-size": "34px" } }, "\u521B\u5EFA\u6587\u4EF6\u5939"),
            createVNode("p", { style: { "margin-top": "0px", "font-size": "18px", "color": "rgb(117, 117, 117)" } }, "\u6839\u636E\u60A8\u7684\u559C\u597D\uFF0C\u5C06\u7279\u5B9A\u8BDD\u9898\u6216\u7C7B\u578B\u7684\u8BA2\u9605\u6E90\u653E\u5230\u79C1\u6709\u6587\u4EF6\u5939\u4E0B"),
            createVNode("p", { style: { "margin-bottom": "0px", "margin-top": "30px", "font-size": "14px" } }, "\u6587\u4EF6\u5939\u540D\u79F0"),
            createVNode(_component_el_input, {
              modelValue: _ctx.folderName,
              "onUpdate:modelValue": ($event) => _ctx.folderName = $event,
              onKeyup: withKeys(_ctx.createFolderClick, ["enter", "native"]),
              size: "large",
              placeholder: ""
            }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
            createVNode("div", { style: { "margin-top": "20px" } }, [
              createVNode(_component_el_button, {
                size: "large",
                type: "primary",
                onClick: _ctx.createFolderClick
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_icon, { size: 20 }, {
                    default: withCtx(() => [
                      createVNode(_component_Finished)
                    ]),
                    _: 1
                  }),
                  createTextVNode("\xA0\u4FDD\u5B58")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_el_button, {
                size: "large",
                onClick: _ctx.cancelFolderClick
              }, {
                default: withCtx(() => [
                  createTextVNode("\u53D6\u6D88")
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/popup/CreateFolderPopup.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const CreateFolderPopup = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e], ["__scopeId", "data-v-08727f51"]]);
const _sfc_main$d = defineNuxtComponent({
  /* props:{
      feed : {
          type:Object,
          default:null,
      },
  },*/
  components: {
    CloseBold: close_bold_default,
    Finished: finished_default,
    Cancel,
    FolderAdd: folder_add_default,
    Folder: folder_default,
    Select: select_default,
    FolderRemove: folder_remove_default,
    FolderDelete: folder_delete_default,
    Plus: plus_default,
    Minus: minus_default
  },
  async asyncData() {
    return {
      drawWidth: "500",
      showDrawer: false,
      folderList: [],
      feed: null,
      action: 1
    };
  },
  mounted() {
    emitter.on("on_popup_selectfolder", (param) => {
      this.feed = null;
      this.folderList = [];
      if (param == void 0) {
        return;
      }
      this.loadFolderList();
      this.action = param.action;
      if (this.action == 1) {
        this.feed = param.currentFeed;
      } else if (this.action == 2) {
        this.feed = param.currentFeed;
        this.feed.folderList = [];
      } else if (this.action == 3)
        ;
      this.show();
    });
  },
  methods: {
    async loadFolderList() {
      let responseData = await rssfolder.queryFolderList(false, devicebiz$1.getDeviceID(), 100, 0);
      if (helper.isResultOk(responseData)) {
        let folderList = responseData.data.page;
        for (let index in folderList) {
          folderList[index].isFeed = false;
          if (this.feed != null) {
            for (let i in this.feed.folderList) {
              if (this.feed.folderList[i].folder_id == folderList[index].folder_id) {
                folderList[index].isFeed = true;
              }
            }
          }
        }
        this.folderList = folderList;
      }
    },
    show() {
      this.showDrawer = true;
    },
    onCloseClick() {
      this.showDrawer = false;
      emitter.emit("on_feed_folder_update", { feed: this.feed });
    },
    beforeClose() {
      emitter.emit("on_feed_folder_update", { feed: this.feed });
      this.showDrawer = false;
    },
    async addToFolder(folderObj) {
      if (this.action == 1) {
        let responseData = await rssfolder.setFolderFeed(devicebiz$1.getDeviceID(), this.feed.feed_id, folderObj.folder_id);
        if (helper.isResultOk(responseData)) {
          folderObj.isFeed = true;
          ElMessage.success("\u8BA2\u9605\u6210\u529F");
          return;
        } else {
          ElMessage.error("\u8BA2\u9605\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002");
        }
      } else if (this.action == 2) {
        let responseData = await importbiz.subscribeFeedURL(devicebiz$1.getDeviceID(), folderObj.folder_id, this.feed.name, this.feed.url, this.feed.feed_url, this.feed.desc, this.feed.lang);
        if (helper.isResultOk(responseData)) {
          ElMessage.success("\u8BA2\u9605\u6210\u529F");
        } else {
          ElMessage.error("\u8BA2\u9605\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002");
        }
      } else if (this.action == 3)
        ;
    },
    importToFolder(folderObj) {
      emitter.emit("on_import_all", { folderObj });
      this.showDrawer = false;
    },
    async removeFromFolder(folderObj) {
      let responseData = await rssfolder.removeFolderFeed(devicebiz$1.getDeviceID(), this.feed.feed_id, folderObj.folder_id);
      if (helper.isResultOk(responseData)) {
        ElMessage.success("\u5DF2\u53D6\u6D88\u8BA2\u9605");
        folderObj.isFeed = false;
      } else {
        ElMessage.error("\u53D6\u6D88\u8BA2\u9605\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002");
      }
    },
    async loadFeedState() {
      let responseData = await rssfolder.getFolderIDByFeedIDs(devicebiz$1.getDeviceID(), [this.feed.feed_id]);
      if (helper.isResultOk(responseData)) {
        if (responseData.data.length == 1) {
          this.feed.folderList = responseData.data[0].user_folder_list;
        }
      }
    },
    formatTime(time) {
      return helper.getHumanTime(time / 1e3);
    },
    isThisFolder(folderID) {
      for (let index in this.feed.folderList) {
        if (this.feed.folderList[index].folder_id == folderID) {
          return true;
        }
      }
      return false;
    },
    onAddFolder() {
      this.onCloseClick();
      emitter.emit("on_popup_createfolder", {});
    },
    deleteFolder(folderObj) {
    },
    cancelDeleteFolder() {
    },
    deleteFolderByFolderID(folderID) {
      for (let index in this.folderList) {
        if (this.folderList[index].folder_id == folderID) {
          this.folderList.splice(index, 1);
          break;
        }
      }
    },
    async confirmDeleteFolder(folderObj) {
      let responseData = await rssfolder.deleteFolder(devicebiz$1.getDeviceID(), folderObj.folder_id);
      if (!helper.isResultOk(responseData)) {
        ElMessage.error("\u5220\u9664\u6587\u4EF6\u5939\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002");
        return;
      }
      this.deleteFolderByFolderID(folderObj.folder_id);
    }
  }
}, "$fmrXmcC95x");
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_drawer = ElDrawer;
  const _component_el_icon = ElIcon;
  const _component_CloseBold = resolveComponent("CloseBold");
  const _component_el_button = ElButton;
  const _component_FolderRemove = resolveComponent("FolderRemove");
  const _component_el_table = ElTable;
  const _component_el_table_column = ElTableColumn;
  const _component_Folder = resolveComponent("Folder");
  const _component_el_link = ElLink;
  const _component_Plus = resolveComponent("Plus");
  const _component_Minus = resolveComponent("Minus");
  const _component_el_popconfirm = ElPopconfirm;
  const _component_FolderDelete = resolveComponent("FolderDelete");
  const _component_FolderAdd = resolveComponent("FolderAdd");
  _push(ssrRenderComponent(_component_el_drawer, mergeProps({
    modelValue: _ctx.showDrawer,
    "onUpdate:modelValue": ($event) => _ctx.showDrawer = $event,
    "with-header": false,
    "destroy-on-close": true,
    size: _ctx.drawWidth,
    "before-close": _ctx.beforeClose
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="close_wrapper" data-v-53f3a7c5${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_icon, { size: 30 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_CloseBold, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_CloseBold)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div style="${ssrRenderStyle({ "height": "10px" })}" data-v-53f3a7c5${_scopeId}></div><div style="${ssrRenderStyle({ "max-width": "650px", "margin": "0px auto" })}" data-v-53f3a7c5${_scopeId}>`);
        if (_ctx.feed != null && _ctx.feed.folderList.length == 0) {
          _push2(`<p style="${ssrRenderStyle({ "font-size": "22px" })}" data-v-53f3a7c5${_scopeId}>\u5C06\u201C${ssrInterpolate(_ctx.feed.name)}\u201D\u52A0\u5230\u6307\u5B9A\u6587\u4EF6\u5939</p>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.feed != null && _ctx.feed.folderList.length > 0) {
          _push2(`<p style="${ssrRenderStyle({ "font-size": "22px" })}" data-v-53f3a7c5${_scopeId}>\u60A8\u5DF2\u8BA2\u9605\u201C${ssrInterpolate(_ctx.feed.name)}\u201D</p>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.feed != null && _ctx.feed.folderList.length > 0) {
          _push2(`<div style="${ssrRenderStyle({ "text-align": "right", "margin-bottom": "10px" })}" data-v-53f3a7c5${_scopeId}>`);
          _push2(ssrRenderComponent(_component_el_button, { type: "danger" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_el_icon, { size: 18 }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_FolderRemove, null, null, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_FolderRemove)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
                _push3(`\xA0\u79FB\u9664\u6240\u6709`);
              } else {
                return [
                  createVNode(_component_el_icon, { size: 18 }, {
                    default: withCtx(() => [
                      createVNode(_component_FolderRemove)
                    ]),
                    _: 1
                  }),
                  createTextVNode("\xA0\u79FB\u9664\u6240\u6709")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.action == 3) {
          _push2(`<p style="${ssrRenderStyle({ "font-size": "22px" })}" data-v-53f3a7c5${_scopeId}>\u5C06\u6240\u6709\u8BA2\u9605\u6E90\u5BFC\u5165\u5230\u6307\u5B9A\u76EE\u5F55</p>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(ssrRenderComponent(_component_el_table, {
          data: _ctx.folderList,
          border: "",
          style: { "width": "100%" },
          stripe: true
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_table_column, {
                prop: "folder_name",
                label: "\u6587\u4EF6\u5939\u540D\u79F0"
              }, {
                default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "font-size": "16px" })}" data-v-53f3a7c5${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_el_icon, { size: 18 }, {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_Folder, null, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_Folder)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                    _push4(`\xA0${ssrInterpolate(scope.row.folder_name)}</div>`);
                  } else {
                    return [
                      createVNode("div", { style: { "display": "flex", "align-items": "center", "font-size": "16px" } }, [
                        createVNode(_component_el_icon, { size: 18 }, {
                          default: withCtx(() => [
                            createVNode(_component_Folder)
                          ]),
                          _: 1
                        }),
                        createTextVNode("\xA0" + toDisplayString(scope.row.folder_name), 1)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_table_column, {
                prop: "folder_name",
                label: "\u64CD\u4F5C",
                width: "260"
              }, {
                default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    if (_ctx.action != 3) {
                      _push4(`<div data-v-53f3a7c5${_scopeId3}>`);
                      if (!scope.row.isFeed) {
                        _push4(ssrRenderComponent(_component_el_link, {
                          onClick: ($event) => _ctx.addToFolder(scope.row)
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_icon, { size: 18 }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Plus, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Plus)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`\xA0\u52A0\u5165`);
                            } else {
                              return [
                                createVNode(_component_el_icon, { size: 18 }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Plus)
                                  ]),
                                  _: 1
                                }),
                                createTextVNode("\xA0\u52A0\u5165")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        _push4(ssrRenderComponent(_component_el_link, {
                          type: "danger",
                          onClick: ($event) => _ctx.removeFromFolder(scope.row)
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_icon, { size: 18 }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Minus, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Minus)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`\xA0\u79FB\u9664`);
                            } else {
                              return [
                                createVNode(_component_el_icon, { size: 18 }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Minus)
                                  ]),
                                  _: 1
                                }),
                                createTextVNode("\xA0\u79FB\u9664")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      }
                      _push4(`<span data-v-53f3a7c5${_scopeId3}>\xA0\xA0\xA0\xA0\xA0</span>`);
                      _push4(ssrRenderComponent(_component_el_popconfirm, {
                        title: "\u5220\u9664\u540E\u5176\u76EE\u5F55\u4E0B\u7684\u5185\u5BB9\u6E90\u90FD\u4F1A\u88AB\u53D6\u6D88\u8BA2\u9605\uFF0C\u786E\u8BA4\u8981\u5220\u9664\u6B64\u76EE\u5F55\u5417\uFF1F",
                        width: "260",
                        "cancel-button-text": "\u53D6\u6D88\u5220\u9664",
                        onConfirm: ($event) => _ctx.confirmDeleteFolder(scope.row),
                        onCancel: _ctx.cancelDeleteFolder,
                        "confirm-button-text": "\u786E\u8BA4\u5220\u9664"
                      }, {
                        reference: withCtx((_3, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_el_link, {
                              onClick: ($event) => _ctx.deleteFolder(scope.row)
                            }, {
                              default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(_component_el_icon, { size: 18 }, {
                                    default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(_component_FolderDelete, null, null, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(_component_FolderDelete)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                  _push6(`\xA0\u5220\u9664`);
                                } else {
                                  return [
                                    createVNode(_component_el_icon, { size: 18 }, {
                                      default: withCtx(() => [
                                        createVNode(_component_FolderDelete)
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode("\xA0\u5220\u9664")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(_component_el_link, {
                                onClick: ($event) => _ctx.deleteFolder(scope.row)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_icon, { size: 18 }, {
                                    default: withCtx(() => [
                                      createVNode(_component_FolderDelete)
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode("\xA0\u5220\u9664")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                      _push4(`</div>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    if (_ctx.action == 3) {
                      _push4(`<div data-v-53f3a7c5${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_el_link, {
                        onClick: ($event) => _ctx.importToFolder(scope.row)
                      }, {
                        default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_el_icon, { size: 18 }, {
                              default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(_component_Plus, null, null, _parent6, _scopeId5));
                                } else {
                                  return [
                                    createVNode(_component_Plus)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                            _push5(`\xA0\u5BFC\u5165\u5230\u6B64\u6587\u4EF6\u5939`);
                          } else {
                            return [
                              createVNode(_component_el_icon, { size: 18 }, {
                                default: withCtx(() => [
                                  createVNode(_component_Plus)
                                ]),
                                _: 1
                              }),
                              createTextVNode("\xA0\u5BFC\u5165\u5230\u6B64\u6587\u4EF6\u5939")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                      _push4(`</div>`);
                    } else {
                      _push4(`<!---->`);
                    }
                  } else {
                    return [
                      _ctx.action != 3 ? (openBlock(), createBlock("div", { key: 0 }, [
                        !scope.row.isFeed ? (openBlock(), createBlock(_component_el_link, {
                          key: 0,
                          onClick: ($event) => _ctx.addToFolder(scope.row)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_icon, { size: 18 }, {
                              default: withCtx(() => [
                                createVNode(_component_Plus)
                              ]),
                              _: 1
                            }),
                            createTextVNode("\xA0\u52A0\u5165")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : (openBlock(), createBlock(_component_el_link, {
                          key: 1,
                          type: "danger",
                          onClick: ($event) => _ctx.removeFromFolder(scope.row)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_icon, { size: 18 }, {
                              default: withCtx(() => [
                                createVNode(_component_Minus)
                              ]),
                              _: 1
                            }),
                            createTextVNode("\xA0\u79FB\u9664")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])),
                        createVNode("span", null, "\xA0\xA0\xA0\xA0\xA0"),
                        createVNode(_component_el_popconfirm, {
                          title: "\u5220\u9664\u540E\u5176\u76EE\u5F55\u4E0B\u7684\u5185\u5BB9\u6E90\u90FD\u4F1A\u88AB\u53D6\u6D88\u8BA2\u9605\uFF0C\u786E\u8BA4\u8981\u5220\u9664\u6B64\u76EE\u5F55\u5417\uFF1F",
                          width: "260",
                          "cancel-button-text": "\u53D6\u6D88\u5220\u9664",
                          onConfirm: ($event) => _ctx.confirmDeleteFolder(scope.row),
                          onCancel: _ctx.cancelDeleteFolder,
                          "confirm-button-text": "\u786E\u8BA4\u5220\u9664"
                        }, {
                          reference: withCtx(() => [
                            createVNode(_component_el_link, {
                              onClick: ($event) => _ctx.deleteFolder(scope.row)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_icon, { size: 18 }, {
                                  default: withCtx(() => [
                                    createVNode(_component_FolderDelete)
                                  ]),
                                  _: 1
                                }),
                                createTextVNode("\xA0\u5220\u9664")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1032, ["onConfirm", "onCancel"])
                      ])) : createCommentVNode("", true),
                      _ctx.action == 3 ? (openBlock(), createBlock("div", { key: 1 }, [
                        createVNode(_component_el_link, {
                          onClick: ($event) => _ctx.importToFolder(scope.row)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_icon, { size: 18 }, {
                              default: withCtx(() => [
                                createVNode(_component_Plus)
                              ]),
                              _: 1
                            }),
                            createTextVNode("\xA0\u5BFC\u5165\u5230\u6B64\u6587\u4EF6\u5939")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_el_table_column, {
                  prop: "folder_name",
                  label: "\u6587\u4EF6\u5939\u540D\u79F0"
                }, {
                  default: withCtx((scope) => [
                    createVNode("div", { style: { "display": "flex", "align-items": "center", "font-size": "16px" } }, [
                      createVNode(_component_el_icon, { size: 18 }, {
                        default: withCtx(() => [
                          createVNode(_component_Folder)
                        ]),
                        _: 1
                      }),
                      createTextVNode("\xA0" + toDisplayString(scope.row.folder_name), 1)
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  prop: "folder_name",
                  label: "\u64CD\u4F5C",
                  width: "260"
                }, {
                  default: withCtx((scope) => [
                    _ctx.action != 3 ? (openBlock(), createBlock("div", { key: 0 }, [
                      !scope.row.isFeed ? (openBlock(), createBlock(_component_el_link, {
                        key: 0,
                        onClick: ($event) => _ctx.addToFolder(scope.row)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_icon, { size: 18 }, {
                            default: withCtx(() => [
                              createVNode(_component_Plus)
                            ]),
                            _: 1
                          }),
                          createTextVNode("\xA0\u52A0\u5165")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : (openBlock(), createBlock(_component_el_link, {
                        key: 1,
                        type: "danger",
                        onClick: ($event) => _ctx.removeFromFolder(scope.row)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_icon, { size: 18 }, {
                            default: withCtx(() => [
                              createVNode(_component_Minus)
                            ]),
                            _: 1
                          }),
                          createTextVNode("\xA0\u79FB\u9664")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])),
                      createVNode("span", null, "\xA0\xA0\xA0\xA0\xA0"),
                      createVNode(_component_el_popconfirm, {
                        title: "\u5220\u9664\u540E\u5176\u76EE\u5F55\u4E0B\u7684\u5185\u5BB9\u6E90\u90FD\u4F1A\u88AB\u53D6\u6D88\u8BA2\u9605\uFF0C\u786E\u8BA4\u8981\u5220\u9664\u6B64\u76EE\u5F55\u5417\uFF1F",
                        width: "260",
                        "cancel-button-text": "\u53D6\u6D88\u5220\u9664",
                        onConfirm: ($event) => _ctx.confirmDeleteFolder(scope.row),
                        onCancel: _ctx.cancelDeleteFolder,
                        "confirm-button-text": "\u786E\u8BA4\u5220\u9664"
                      }, {
                        reference: withCtx(() => [
                          createVNode(_component_el_link, {
                            onClick: ($event) => _ctx.deleteFolder(scope.row)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_icon, { size: 18 }, {
                                default: withCtx(() => [
                                  createVNode(_component_FolderDelete)
                                ]),
                                _: 1
                              }),
                              createTextVNode("\xA0\u5220\u9664")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1032, ["onConfirm", "onCancel"])
                    ])) : createCommentVNode("", true),
                    _ctx.action == 3 ? (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode(_component_el_link, {
                        onClick: ($event) => _ctx.importToFolder(scope.row)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_icon, { size: 18 }, {
                            default: withCtx(() => [
                              createVNode(_component_Plus)
                            ]),
                            _: 1
                          }),
                          createTextVNode("\xA0\u5BFC\u5165\u5230\u6B64\u6587\u4EF6\u5939")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div style="${ssrRenderStyle({ "margin-top": "20px", "text-align": "right" })}" data-v-53f3a7c5${_scopeId}><span style="${ssrRenderStyle({ "color": "rgb(100,100,100)", "font-size": "14px" })}" data-v-53f3a7c5${_scopeId}>\u6CA1\u6709\u5408\u9002\u7684\u6587\u4EF6\u5939\uFF1F</span>`);
        _push2(ssrRenderComponent(_component_el_button, {
          type: "primary",
          onClick: _ctx.onAddFolder
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_icon, { size: 18 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_FolderAdd, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_FolderAdd)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`\xA0\xA0\u521B\u5EFA\u6587\u4EF6\u5939`);
            } else {
              return [
                createVNode(_component_el_icon, { size: 18 }, {
                  default: withCtx(() => [
                    createVNode(_component_FolderAdd)
                  ]),
                  _: 1
                }),
                createTextVNode("\xA0\xA0\u521B\u5EFA\u6587\u4EF6\u5939")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", {
            class: "close_wrapper",
            onClick: _ctx.onCloseClick
          }, [
            createVNode(_component_el_icon, { size: 30 }, {
              default: withCtx(() => [
                createVNode(_component_CloseBold)
              ]),
              _: 1
            })
          ], 8, ["onClick"]),
          createVNode("div", { style: { "height": "10px" } }),
          createVNode("div", { style: { "max-width": "650px", "margin": "0px auto" } }, [
            _ctx.feed != null && _ctx.feed.folderList.length == 0 ? (openBlock(), createBlock("p", {
              key: 0,
              style: { "font-size": "22px" }
            }, "\u5C06\u201C" + toDisplayString(_ctx.feed.name) + "\u201D\u52A0\u5230\u6307\u5B9A\u6587\u4EF6\u5939", 1)) : createCommentVNode("", true),
            _ctx.feed != null && _ctx.feed.folderList.length > 0 ? (openBlock(), createBlock("p", {
              key: 1,
              style: { "font-size": "22px" }
            }, "\u60A8\u5DF2\u8BA2\u9605\u201C" + toDisplayString(_ctx.feed.name) + "\u201D", 1)) : createCommentVNode("", true),
            _ctx.feed != null && _ctx.feed.folderList.length > 0 ? (openBlock(), createBlock("div", {
              key: 2,
              style: { "text-align": "right", "margin-bottom": "10px" }
            }, [
              createVNode(_component_el_button, { type: "danger" }, {
                default: withCtx(() => [
                  createVNode(_component_el_icon, { size: 18 }, {
                    default: withCtx(() => [
                      createVNode(_component_FolderRemove)
                    ]),
                    _: 1
                  }),
                  createTextVNode("\xA0\u79FB\u9664\u6240\u6709")
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            _ctx.action == 3 ? (openBlock(), createBlock("p", {
              key: 3,
              style: { "font-size": "22px" }
            }, "\u5C06\u6240\u6709\u8BA2\u9605\u6E90\u5BFC\u5165\u5230\u6307\u5B9A\u76EE\u5F55")) : createCommentVNode("", true),
            createVNode(_component_el_table, {
              data: _ctx.folderList,
              border: "",
              style: { "width": "100%" },
              stripe: true
            }, {
              default: withCtx(() => [
                createVNode(_component_el_table_column, {
                  prop: "folder_name",
                  label: "\u6587\u4EF6\u5939\u540D\u79F0"
                }, {
                  default: withCtx((scope) => [
                    createVNode("div", { style: { "display": "flex", "align-items": "center", "font-size": "16px" } }, [
                      createVNode(_component_el_icon, { size: 18 }, {
                        default: withCtx(() => [
                          createVNode(_component_Folder)
                        ]),
                        _: 1
                      }),
                      createTextVNode("\xA0" + toDisplayString(scope.row.folder_name), 1)
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  prop: "folder_name",
                  label: "\u64CD\u4F5C",
                  width: "260"
                }, {
                  default: withCtx((scope) => [
                    _ctx.action != 3 ? (openBlock(), createBlock("div", { key: 0 }, [
                      !scope.row.isFeed ? (openBlock(), createBlock(_component_el_link, {
                        key: 0,
                        onClick: ($event) => _ctx.addToFolder(scope.row)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_icon, { size: 18 }, {
                            default: withCtx(() => [
                              createVNode(_component_Plus)
                            ]),
                            _: 1
                          }),
                          createTextVNode("\xA0\u52A0\u5165")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : (openBlock(), createBlock(_component_el_link, {
                        key: 1,
                        type: "danger",
                        onClick: ($event) => _ctx.removeFromFolder(scope.row)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_icon, { size: 18 }, {
                            default: withCtx(() => [
                              createVNode(_component_Minus)
                            ]),
                            _: 1
                          }),
                          createTextVNode("\xA0\u79FB\u9664")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])),
                      createVNode("span", null, "\xA0\xA0\xA0\xA0\xA0"),
                      createVNode(_component_el_popconfirm, {
                        title: "\u5220\u9664\u540E\u5176\u76EE\u5F55\u4E0B\u7684\u5185\u5BB9\u6E90\u90FD\u4F1A\u88AB\u53D6\u6D88\u8BA2\u9605\uFF0C\u786E\u8BA4\u8981\u5220\u9664\u6B64\u76EE\u5F55\u5417\uFF1F",
                        width: "260",
                        "cancel-button-text": "\u53D6\u6D88\u5220\u9664",
                        onConfirm: ($event) => _ctx.confirmDeleteFolder(scope.row),
                        onCancel: _ctx.cancelDeleteFolder,
                        "confirm-button-text": "\u786E\u8BA4\u5220\u9664"
                      }, {
                        reference: withCtx(() => [
                          createVNode(_component_el_link, {
                            onClick: ($event) => _ctx.deleteFolder(scope.row)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_icon, { size: 18 }, {
                                default: withCtx(() => [
                                  createVNode(_component_FolderDelete)
                                ]),
                                _: 1
                              }),
                              createTextVNode("\xA0\u5220\u9664")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1032, ["onConfirm", "onCancel"])
                    ])) : createCommentVNode("", true),
                    _ctx.action == 3 ? (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode(_component_el_link, {
                        onClick: ($event) => _ctx.importToFolder(scope.row)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_icon, { size: 18 }, {
                            default: withCtx(() => [
                              createVNode(_component_Plus)
                            ]),
                            _: 1
                          }),
                          createTextVNode("\xA0\u5BFC\u5165\u5230\u6B64\u6587\u4EF6\u5939")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["data"]),
            createVNode("div", { style: { "margin-top": "20px", "text-align": "right" } }, [
              createVNode("span", { style: { "color": "rgb(100,100,100)", "font-size": "14px" } }, "\u6CA1\u6709\u5408\u9002\u7684\u6587\u4EF6\u5939\uFF1F"),
              createVNode(_component_el_button, {
                type: "primary",
                onClick: _ctx.onAddFolder
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_icon, { size: 18 }, {
                    default: withCtx(() => [
                      createVNode(_component_FolderAdd)
                    ]),
                    _: 1
                  }),
                  createTextVNode("\xA0\xA0\u521B\u5EFA\u6587\u4EF6\u5939")
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/popup/SelectFolder.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const SelectFolder = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d], ["__scopeId", "data-v-53f3a7c5"]]);
const _sfc_main$c = defineNuxtComponent({
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
    return {
      totalCount: 0,
      feedItems: [],
      currentPage: 1,
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
        this.feedItems = feedItems;
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
      let responseData = await rssbiz.fetchUserFeedItemByIds(devicebiz$1.getDeviceID(), feedItemIds);
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
      let responseData = await readLater.getReadLaterByFeedItems(devicebiz$1.getDeviceID(), feedItemIds);
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
        if (this.feedItems[i].feed_item_id == feedItemID) {
          this.feedItems.splice(i, 1);
        } else {
          ++i;
        }
      }
      this.notifyFeedItemChange();
    },
    async onSetFeedItemState(feedItem, readState) {
      let readStateInt = parseInt(readState);
      let responseData = await rssbiz.setFeedItemReadState(devicebiz$1.getDeviceID(), feedItem.feed_item_id, readStateInt);
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
      let responseData = await readLater.setReadLater(devicebiz$1.getDeviceID(), feedItem.feed_id, feedItem.feed_item_id);
      if (!helper.isResultOk(responseData)) {
        ElMessage.error('\u8BBE\u7F6E\u201C\u7A0D\u540E\u9605\u8BFB"\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002');
      } else {
        feedItem.isReadLater = true;
      }
    },
    async removeReadLater(feedItem) {
      let responseData = await readLater.removeReadLater(devicebiz$1.getDeviceID(), feedItem.feed_item_id);
      if (!helper.isResultOk(responseData)) {
        ElMessage.error('\u53D6\u6D88\u201C\u7A0D\u540E\u9605\u8BFB"\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002');
      } else {
        if (this.onlyShowReadLater) {
          this.removeByFeedItemID(feedItem.feed_item_id);
        }
        feedItem.isReadLater = false;
      }
    },
    handlePageChange(pageNumber) {
      this.currentPage = pageNumber;
      this.$emit("onPageChange", { pageNumber: parseInt(pageNumber) });
    },
    onShareArticle() {
    },
    setPageIndex(currentPage) {
      this.currentPage = currentPage;
    }
  }
}, "$h51YNPvTGY");
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
  const _component_el_pagination = ElPagination;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-62d17263><!--[-->`);
  ssrRenderList(_ctx.feedItems, (item, index) => {
    _push(`<div style="${ssrRenderStyle({ "margin-top": "20px", "margin-bottom": "20px", "border-bottom": "1px solid #eee", "padding-bottom": "10px" })}" data-v-62d17263>`);
    if (item.thumb_url.length > 0) {
      _push(`<div data-v-62d17263><div class="feed_item_list_img_container" data-v-62d17263><img class="feed_item_img"${ssrRenderAttr("src", item.thumb_url)} data-v-62d17263><div class="feed_item_list_content_container" data-v-62d17263><a class="${ssrRenderClass([{ feed_item_list_container_title_readed: item.readState != 1 }, "feed_item_list_container_title"])}" data-v-62d17263>${ssrInterpolate(item.title)}</a><p class="feed_item_list_container_desc" data-v-62d17263>${ssrInterpolate(item.desc)}</p><div style="${ssrRenderStyle({ "display": "flex", "margin-top": "5px" })}" data-v-62d17263><div style="${ssrRenderStyle({ "height": "30px", "line-height": "30px" })}" data-v-62d17263>`);
      if (item.authorList.length > 0) {
        _push(`<span class="feed_item_list_container_time" data-v-62d17263>${ssrInterpolate(item.authorList.length > 0 ? item.authorList[0].author_name : "")}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (item.authorList.length > 0) {
        _push(`<span class="feed_item_list_container_time" data-v-62d17263>\xA0\xB7\xA0</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="feed_item_list_container_time" data-v-62d17263>${ssrInterpolate(_ctx.formatHumanTime(item.publish_time))}</span><span class="feed_item_list_container_time" data-v-62d17263>\xA0\xB7\xA0</span><span class="feed_item_list_container_time" data-v-62d17263>${ssrInterpolate(item.read_count)}\u6B21\u9605\u8BFB</span></div><div style="${ssrRenderStyle({ "flex": "1" })}" data-v-62d17263></div>`);
      _push(ssrRenderComponent(_component_el_tooltip, {
        effect: "dark",
        content: "\u5FEB\u901F\u9605\u8BFB\u6B64\u6587\u7AE0",
        placement: "top-start"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="svg_icon_container_mini" data-v-62d17263${_scopeId}>`);
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
      _push(`<span data-v-62d17263>\xA0</span>`);
      if (item.readState == 1) {
        _push(ssrRenderComponent(_component_el_tooltip, {
          effect: "dark",
          content: "\u6807\u8BB0\u4E3A\u5DF2\u8BFB",
          placement: "top-start"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="svg_icon_container_mini" data-v-62d17263${_scopeId}>`);
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
              _push2(`<div class="svg_icon_container_mini" data-v-62d17263${_scopeId}>`);
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
      _push(`<span data-v-62d17263>\xA0</span>`);
      if (!item.isReadLater) {
        _push(ssrRenderComponent(_component_el_tooltip, {
          effect: "dark",
          content: "\u6DFB\u52A0\u5230\u7A0D\u540E\u9605\u8BFB",
          placement: "top-start"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="svg_icon_container_mini" data-v-62d17263${_scopeId}>`);
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
              _push2(`<div class="svg_icon_container_mini" data-v-62d17263${_scopeId}>`);
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
      _push(`<span data-v-62d17263>\xA0</span>`);
      _push(ssrRenderComponent(_component_el_dropdown, { placement: "bottom-end" }, {
        dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_dropdown_menu, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<a class="article_link" target="_blank" data-v-62d17263${_scopeId3}>`);
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
                        _push4(`<a class="article_link"${ssrRenderAttr("href", "/feed-item/" + item.feed_item_id + ".html")} target="_blank" data-v-62d17263${_scopeId3}>`);
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
                        _push4(`<a class="article_link"${ssrRenderAttr("href", item.feed_url)} target="_blank" data-v-62d17263${_scopeId3}>`);
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
            _push2(`<div class="svg_icon_container_mini" data-v-62d17263${_scopeId}>`);
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
      _push(`</div></div></div></div>`);
    } else {
      _push(`<!---->`);
    }
    if (item.thumb_url.length == 0) {
      _push(`<div data-v-62d17263><a class="feed_item_list_container" data-v-62d17263><a class="${ssrRenderClass([{ feed_item_list_container_title_readed: item.readState != 1 }, "feed_item_list_container_title"])}" data-v-62d17263>${ssrInterpolate(item.title)}</a><p class="feed_item_list_container_desc" data-v-62d17263>${ssrInterpolate(item.desc)}</p></a><div style="${ssrRenderStyle({ "display": "flex", "margin-top": "5px" })}" data-v-62d17263><div style="${ssrRenderStyle({ "height": "30px", "line-height": "30px" })}" data-v-62d17263>`);
      if (item.authorList.length > 0) {
        _push(`<span class="feed_item_list_container_time" data-v-62d17263>${ssrInterpolate(item.authorList.length > 0 ? item.authorList[0].author_name : "")}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (item.authorList.length > 0) {
        _push(`<span class="feed_item_list_container_time" data-v-62d17263>\xA0\xB7\xA0</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="feed_item_list_container_time" data-v-62d17263>${ssrInterpolate(_ctx.formatHumanTime(item.publish_time))}</span><span class="feed_item_list_container_time" data-v-62d17263>\xA0\xB7\xA0</span><span class="feed_item_list_container_time" data-v-62d17263>${ssrInterpolate(item.read_count)}\u6B21\u9605\u8BFB</span></div><div style="${ssrRenderStyle({ "flex": "1" })}" data-v-62d17263></div>`);
      _push(ssrRenderComponent(_component_el_tooltip, {
        effect: "dark",
        content: "\u5FEB\u901F\u9605\u8BFB\u6B64\u6587\u7AE0",
        placement: "top-start"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="svg_icon_container_mini" data-v-62d17263${_scopeId}>`);
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
      _push(`<span data-v-62d17263>\xA0</span>`);
      if (item.readState == 1) {
        _push(ssrRenderComponent(_component_el_tooltip, {
          effect: "dark",
          content: "\u6807\u8BB0\u4E3A\u5DF2\u8BFB",
          placement: "top-start"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="svg_icon_container_mini" data-v-62d17263${_scopeId}>`);
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
              _push2(`<div class="svg_icon_container_mini" data-v-62d17263${_scopeId}>`);
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
      _push(`<span data-v-62d17263>\xA0</span>`);
      if (!item.isReadLater) {
        _push(ssrRenderComponent(_component_el_tooltip, {
          effect: "dark",
          content: "\u6DFB\u52A0\u5230\u7A0D\u540E\u9605\u8BFB",
          placement: "top-start"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="svg_icon_container_mini" data-v-62d17263${_scopeId}>`);
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
              _push2(`<div class="svg_icon_container_mini" data-v-62d17263${_scopeId}>`);
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
      _push(`<span data-v-62d17263>\xA0</span>`);
      _push(ssrRenderComponent(_component_el_dropdown, { placement: "bottom-end" }, {
        dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_dropdown_menu, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_dropdown_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<a class="article_link" target="_blank" data-v-62d17263${_scopeId3}>`);
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
                        _push4(`<a class="article_link"${ssrRenderAttr("href", "/feed-item/" + item.feed_item_id + ".html")} target="_blank" data-v-62d17263${_scopeId3}>`);
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
                        _push4(`<a class="article_link"${ssrRenderAttr("href", item.feed_url)} target="_blank" data-v-62d17263${_scopeId3}>`);
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
            _push2(`<div class="svg_icon_container_mini" data-v-62d17263${_scopeId}>`);
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
  if (_ctx.pageMode == 1) {
    _push(ssrRenderComponent(_component_el_pagination, {
      "current-page": _ctx.currentPage,
      onCurrentChange: _ctx.handlePageChange,
      background: "",
      layout: "prev, pager, next",
      total: _ctx.totalCount,
      "page-size": 30
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div style="${ssrRenderStyle({ "height": "30px" })}" data-v-62d17263></div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/itemlist/FeedItemList1.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const FeedItemList1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c], ["__scopeId", "data-v-62d17263"]]);
const _sfc_main$b = defineNuxtComponent({
  components: {
    CloseBold: close_bold_default,
    FolderAdd: folder_add_default,
    FeedItemList1,
    Loading
  },
  async asyncData() {
    return {
      feed: null,
      drawWidth: "70%",
      showDrawer: false,
      viewState: 1,
      followCount: 0,
      articleCount: 0
    };
  },
  mounted() {
    emitter.on("on_popup_feed", (param) => {
      this.viewState = 1;
      this.feed = param.feed;
      this.show();
      this.loadFeedItems(1);
      this.loadStatics();
    });
  },
  methods: {
    async loadStatics() {
      let feedStaticsResponse = await rssbiz.queryFeedStaticsByIDs(false, [this.feed.feed_id]);
      if (helper.isResultOk(feedStaticsResponse)) {
        if (feedStaticsResponse.data.length == 1) {
          this.followCount = feedStaticsResponse.data[0].follow_count;
          this.articleCount = feedStaticsResponse.data[0].feed_item_count;
        }
      }
    },
    show() {
      this.showDrawer = true;
    },
    onCloseClick() {
      this.showDrawer = false;
    },
    async loadFeedItems(pageNumber) {
      let responseData = await rssbiz.queryFeedItemsByFeedID(false, this.feed.feed_id, 30, (pageNumber - 1) * 30);
      if (!helper.isResultOk(responseData)) {
        return;
      }
      let list = responseData.data.list;
      let totalCount = responseData.data.total_count;
      await this.$refs.feedItemListComp.setFeedItems(list, pageNumber, totalCount);
      this.viewState = 3;
    },
    onFeedItemCountChange(feedItemCount) {
    },
    async onPageChange(obj) {
      await this.loadFeedItems(obj.pageNumber);
      ElMessage.success("\u5DF2\u4E3A\u60A8\u52A0\u8F7D\u65B0\u7684\u5185\u5BB9\u3002");
    },
    formatTime(time) {
      return helper.getHumanTime(time);
    },
    onAddSubscribe() {
      this.showDrawer = false;
      emitter.emit("on_popup_selectfolder", { currentFeed: this.feed, action: 1 });
    },
    onFeedDetail() {
      emitter.emit("on_popup_feed_info", { feed: this.feed });
    }
  }
}, "$G4eP85gkuY");
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_drawer = ElDrawer;
  const _component_el_icon = ElIcon;
  const _component_CloseBold = resolveComponent("CloseBold");
  const _component_el_button = ElButton;
  const _component_FolderAdd = resolveComponent("FolderAdd");
  const _component_Loading = resolveComponent("Loading");
  const _component_FeedItemList1 = resolveComponent("FeedItemList1");
  _push(ssrRenderComponent(_component_el_drawer, mergeProps({
    modelValue: _ctx.showDrawer,
    "onUpdate:modelValue": ($event) => _ctx.showDrawer = $event,
    "with-header": false,
    "destroy-on-close": true,
    size: _ctx.drawWidth
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="close_wrapper" data-v-c123f6d0${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_icon, { size: 30 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_CloseBold, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_CloseBold)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div style="${ssrRenderStyle({ "max-width": "700px", "margin": "0px auto" })}" data-v-c123f6d0${_scopeId}><div style="${ssrRenderStyle({ "display": "flex" })}" data-v-c123f6d0${_scopeId}><div style="${ssrRenderStyle({ "flex": "1" })}" data-v-c123f6d0${_scopeId}><h2 class="feed_name_h2" data-v-c123f6d0${_scopeId}>${ssrInterpolate(_ctx.feed.name)}</h2><p data-v-c123f6d0${_scopeId}>${ssrInterpolate(_ctx.feed.desc)}</p><div data-v-c123f6d0${_scopeId}><span class="feed_meta_text" data-v-c123f6d0${_scopeId}>${ssrInterpolate(_ctx.followCount)}\u4F4D\u8BA2\u9605</span><span data-v-c123f6d0${_scopeId}>\xA0\xA0</span><span class="feed_meta_text" data-v-c123f6d0${_scopeId}>${ssrInterpolate(_ctx.articleCount)}\u7BC7\u6587\u7AE0</span></div></div><div style="${ssrRenderStyle({ "width": "280px", "padding-top": "15px", "text-align": "right" })}" data-v-c123f6d0${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_button, {
          onClick: _ctx.onFeedDetail,
          size: "large"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u8BA2\u9605\u6E90\u9009\u9879`);
            } else {
              return [
                createTextVNode("\u8BA2\u9605\u6E90\u9009\u9879")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_button, {
          onClick: _ctx.onAddSubscribe,
          type: "primary",
          size: "large"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\xA0\xA0`);
              _push3(ssrRenderComponent(_component_el_icon, { size: 20 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_FolderAdd, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_FolderAdd)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`\xA0\u8BA2\xA0\u9605\xA0\xA0\xA0`);
            } else {
              return [
                createTextVNode("\xA0\xA0"),
                createVNode(_component_el_icon, { size: 20 }, {
                  default: withCtx(() => [
                    createVNode(_component_FolderAdd)
                  ]),
                  _: 1
                }),
                createTextVNode("\xA0\u8BA2\xA0\u9605\xA0\xA0\xA0")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
        if (_ctx.viewState == 1) {
          _push2(ssrRenderComponent(_component_Loading, null, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div style="${ssrRenderStyle({ "margin-top": "30px" })}" data-v-c123f6d0${_scopeId}>`);
        _push2(ssrRenderComponent(_component_FeedItemList1, {
          onOnPageChange: _ctx.onPageChange,
          onFeedItemCountChange: _ctx.onFeedItemCountChange,
          pageMode: 1,
          style: _ctx.viewState == 3 ? null : { display: "none" },
          ref: "feedItemListComp"
        }, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", {
            class: "close_wrapper",
            onClick: _ctx.onCloseClick
          }, [
            createVNode(_component_el_icon, { size: 30 }, {
              default: withCtx(() => [
                createVNode(_component_CloseBold)
              ]),
              _: 1
            })
          ], 8, ["onClick"]),
          createVNode("div", { style: { "max-width": "700px", "margin": "0px auto" } }, [
            createVNode("div", { style: { "display": "flex" } }, [
              createVNode("div", { style: { "flex": "1" } }, [
                createVNode("h2", { class: "feed_name_h2" }, toDisplayString(_ctx.feed.name), 1),
                createVNode("p", null, toDisplayString(_ctx.feed.desc), 1),
                createVNode("div", null, [
                  createVNode("span", { class: "feed_meta_text" }, toDisplayString(_ctx.followCount) + "\u4F4D\u8BA2\u9605", 1),
                  createVNode("span", null, "\xA0\xA0"),
                  createVNode("span", { class: "feed_meta_text" }, toDisplayString(_ctx.articleCount) + "\u7BC7\u6587\u7AE0", 1)
                ])
              ]),
              createVNode("div", { style: { "width": "280px", "padding-top": "15px", "text-align": "right" } }, [
                createVNode(_component_el_button, {
                  onClick: _ctx.onFeedDetail,
                  size: "large"
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u8BA2\u9605\u6E90\u9009\u9879")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_el_button, {
                  onClick: _ctx.onAddSubscribe,
                  type: "primary",
                  size: "large"
                }, {
                  default: withCtx(() => [
                    createTextVNode("\xA0\xA0"),
                    createVNode(_component_el_icon, { size: 20 }, {
                      default: withCtx(() => [
                        createVNode(_component_FolderAdd)
                      ]),
                      _: 1
                    }),
                    createTextVNode("\xA0\u8BA2\xA0\u9605\xA0\xA0\xA0")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ]),
            _ctx.viewState == 1 ? (openBlock(), createBlock(_component_Loading, { key: 0 })) : createCommentVNode("", true),
            createVNode("div", { style: { "margin-top": "30px" } }, [
              withDirectives(createVNode(_component_FeedItemList1, {
                onOnPageChange: _ctx.onPageChange,
                onFeedItemCountChange: _ctx.onFeedItemCountChange,
                pageMode: 1,
                ref: "feedItemListComp"
              }, null, 8, ["onOnPageChange", "onFeedItemCountChange"]), [
                [vShow, _ctx.viewState == 3]
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/popup/FeedDescriptPopup.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const FeedDescriptPopup = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b], ["__scopeId", "data-v-c123f6d0"]]);
const _sfc_main$a = defineNuxtComponent({
  components: {
    CloseBold: close_bold_default,
    CollectionTag: collection_tag_default,
    LinkIcon,
    ReadLaterIcon,
    ReadLaterFillIcon,
    OutLinkIcon,
    FullScreen: full_screen_default
  },
  async asyncData() {
    return {
      drawWidth: "70%",
      showDrawer: false,
      feed: null,
      feedItem: null,
      authorItem: null
    };
  },
  mounted() {
    emitter.on("on_popup_feeditem_content", (param) => {
      console.log(param);
      this.showFeedItem(param.feed, param.feedItem);
    });
  },
  methods: {
    showFeedItem(feed, feedItem) {
      this.feed = feed;
      this.feedItem = feedItem;
      if (this.feedItem.authorList.length > 0) {
        this.authorItem = this.feedItem.authorList[0];
      }
      if (this.feedItem != null) {
        feedItemBiz.increaseFeedItemReadCount(false, this.feedItem.feed_item_id);
        this.feedItem.read_count = this.feedItem.read_count + 1;
      }
      this.fetchAuthor();
      this.show();
    },
    show() {
      this.showDrawer = true;
    },
    onCloseClick() {
      this.showDrawer = false;
    },
    async fetchAuthor() {
      let responseData = feedItemBiz.fetchAuthor(false, [this.feedItem.feed_item_id]);
      if (helper.isResultOk(responseData)) {
        if (responseData.data.length > 0) {
          this.authorItem = responseData.data[0];
          console.log(this.authorItem);
        }
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
    formatTime(time) {
      return helper.getHumanTime(time);
    },
    onGotoSourceURL() {
      (void 0).open(this.feedItem.feed_url);
    },
    readSource() {
      this.onGotoSourceURL();
    },
    readFullScreen() {
      let url = "https://reader.hellokit.com.cn/feed-item/" + this.feedItem.feed_item_id + ".html";
      (void 0).open(url);
    }
  }
}, "$rG3ayCgTnQ");
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_drawer = ElDrawer;
  const _component_el_icon = ElIcon;
  const _component_CloseBold = resolveComponent("CloseBold");
  const _component_el_tooltip = ElTooltip;
  const _component_ReadLaterIcon = resolveComponent("ReadLaterIcon");
  const _component_ReadLaterFillIcon = resolveComponent("ReadLaterFillIcon");
  const _component_LinkIcon = resolveComponent("LinkIcon");
  const _component_FullScreen = resolveComponent("FullScreen");
  const _component_OutLinkIcon = resolveComponent("OutLinkIcon");
  const _component_MDC = _sfc_main$4$1;
  const _component_el_button = ElButton;
  _push(ssrRenderComponent(_component_el_drawer, mergeProps({
    modelValue: _ctx.showDrawer,
    "onUpdate:modelValue": ($event) => _ctx.showDrawer = $event,
    "with-header": false,
    "destroy-on-close": true,
    size: _ctx.drawWidth
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a;
      if (_push2) {
        _push2(`<div style="${ssrRenderStyle({ "height": "50px", "border-bottom": "1px solid #eee" })}" data-v-178907e7${_scopeId}><div class="content_wrapper" style="${ssrRenderStyle({ "display": "flex", "margin-top": "-15px" })}" data-v-178907e7${_scopeId}><div class="svg_icon_container" data-v-178907e7${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_icon, {
          size: 20,
          color: "#757575"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_CloseBold, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_CloseBold)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
        if (_ctx.feedItem != null && !_ctx.feedItem.isReadLater) {
          _push2(ssrRenderComponent(_component_el_tooltip, {
            effect: "dark",
            content: "\u6DFB\u52A0\u5230\u7A0D\u540E\u9605\u8BFB",
            placement: "top-start"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="svg_icon_container" data-v-178907e7${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_el_icon, {
                  size: 20,
                  color: "#757575"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_ReadLaterIcon, null, null, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_ReadLaterIcon)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
                _push3(`</div>`);
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
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.feedItem != null && _ctx.feedItem.isReadLater) {
          _push2(ssrRenderComponent(_component_el_tooltip, {
            effect: "dark",
            content: "\u53D6\u6D88\u7A0D\u540E\u9605\u8BFB",
            placement: "top-start"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="svg_icon_container" data-v-178907e7${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_el_icon, {
                  size: 20,
                  color: "#009a61"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_ReadLaterFillIcon, null, null, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_ReadLaterFillIcon)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
                _push3(`</div>`);
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
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(ssrRenderComponent(_component_el_tooltip, {
          effect: "dark",
          content: "\u590D\u5236\u6587\u7AE0\u94FE\u63A5",
          placement: "top-start",
          style: { "margin-left": "5px" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="svg_icon_container" data-v-178907e7${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_el_icon, {
                size: 20,
                color: "#009a61"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_LinkIcon, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_LinkIcon)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
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
        }, _parent2, _scopeId));
        _push2(`<div style="${ssrRenderStyle({ "flex": "1" })}" data-v-178907e7${_scopeId}></div>`);
        _push2(ssrRenderComponent(_component_el_tooltip, {
          effect: "dark",
          content: "\u5168\u5C4F\u9605\u8BFB",
          placement: "top-start",
          style: { "margin-left": "5px" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="svg_icon_container" data-v-178907e7${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_el_icon, { size: 20 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_FullScreen, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_FullScreen)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", {
                  onClick: _ctx.readFullScreen,
                  class: "svg_icon_container"
                }, [
                  createVNode(_component_el_icon, { size: 20 }, {
                    default: withCtx(() => [
                      createVNode(_component_FullScreen)
                    ]),
                    _: 1
                  })
                ], 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_tooltip, {
          effect: "dark",
          content: "\u9605\u8BFB\u539F\u6587",
          placement: "top-start",
          style: { "margin-left": "5px" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="svg_icon_container" data-v-178907e7${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_el_icon, {
                size: 20,
                color: "#009a61"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_OutLinkIcon, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_OutLinkIcon)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
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
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
        if (_ctx.feedItem != null && _ctx.feed != null && _ctx.feed.view_type == 1) {
          _push2(`<div style="${ssrRenderStyle({ "max-width": "800px", "margin": "0px auto" })}" data-v-178907e7${_scopeId}><p class="feed_item_title" data-v-178907e7${_scopeId}>${ssrInterpolate(_ctx.feedItem.title)}</p><div data-v-178907e7${_scopeId}>`);
          if (this.authorItem != null) {
            _push2(`<span class="feed_item_time" data-v-178907e7${_scopeId}>${ssrInterpolate(this.authorItem == null ? "" : this.authorItem.author_name)}\xA0\xA0</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<a${ssrRenderAttr("href", _ctx.feed.url)} class="feed_item_url" data-v-178907e7${_scopeId}>${ssrInterpolate(_ctx.feed.name)}</a><span data-v-178907e7${_scopeId}>\xA0\xA0</span><span class="feed_item_time" data-v-178907e7${_scopeId}>${ssrInterpolate(_ctx.formatTime(_ctx.feedItem.publish_time))}</span><span data-v-178907e7${_scopeId}>\xA0\xA0</span><span class="feed_item_time" data-v-178907e7${_scopeId}>${ssrInterpolate(_ctx.feedItem.read_count)}\u6B21\u9605\u8BFB</span></div><div class="feed_content_container" data-v-178907e7${_scopeId}>`);
          if (_ctx.feedItem.content.length > 0 && _ctx.feed.content_format == 1) {
            _push2(`<div class="feed_article_container" data-v-178907e7${_scopeId}>${(_a = _ctx.feedItem.content) != null ? _a : ""}</div>`);
          } else if (_ctx.feedItem.content.length > 0 && _ctx.feed.content_format == 2) {
            _push2(ssrRenderComponent(_component_MDC, {
              value: _ctx.feedItem.content,
              tag: "div",
              class: "feed_article_container"
            }, null, _parent2, _scopeId));
          } else if (_ctx.feedItem.desc.length > 0) {
            _push2(ssrRenderComponent(_component_MDC, {
              value: _ctx.feedItem.desc,
              tag: "div",
              class: "feed_article_container"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<div data-v-178907e7${_scopeId}></div>`);
          }
          _push2(`</div><div style="${ssrRenderStyle({ "padding-top": "10px", "padding-bottom": "10px" })}" data-v-178907e7${_scopeId}>`);
          _push2(ssrRenderComponent(_component_el_button, {
            onClick: _ctx.onGotoSourceURL,
            style: { "width": "100%", "color": "#009a61" },
            size: "large"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`\u8BBF\u95EE\u7F51\u9875\u539F\u59CB\u94FE\u63A5`);
              } else {
                return [
                  createTextVNode("\u8BBF\u95EE\u7F51\u9875\u539F\u59CB\u94FE\u63A5")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.feedItem != null && _ctx.feed != null && _ctx.feed.view_type == 2) {
          _push2(`<div style="${ssrRenderStyle({ "max-width": "800px", "margin": "0px auto" })}" data-v-178907e7${_scopeId}><iframe${ssrRenderAttr("src", _ctx.feedItem.feed_url)} data-v-178907e7${_scopeId}></iframe></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode("div", { style: { "height": "50px", "border-bottom": "1px solid #eee" } }, [
            createVNode("div", {
              class: "content_wrapper",
              style: { "display": "flex", "margin-top": "-15px" }
            }, [
              createVNode("div", {
                onClick: _ctx.onCloseClick,
                class: "svg_icon_container"
              }, [
                createVNode(_component_el_icon, {
                  size: 20,
                  color: "#757575"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_CloseBold)
                  ]),
                  _: 1
                })
              ], 8, ["onClick"]),
              _ctx.feedItem != null && !_ctx.feedItem.isReadLater ? (openBlock(), createBlock(_component_el_tooltip, {
                key: 0,
                effect: "dark",
                content: "\u6DFB\u52A0\u5230\u7A0D\u540E\u9605\u8BFB",
                placement: "top-start"
              }, {
                default: withCtx(() => [
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
                ]),
                _: 1
              })) : createCommentVNode("", true),
              _ctx.feedItem != null && _ctx.feedItem.isReadLater ? (openBlock(), createBlock(_component_el_tooltip, {
                key: 1,
                effect: "dark",
                content: "\u53D6\u6D88\u7A0D\u540E\u9605\u8BFB",
                placement: "top-start"
              }, {
                default: withCtx(() => [
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
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_el_tooltip, {
                effect: "dark",
                content: "\u590D\u5236\u6587\u7AE0\u94FE\u63A5",
                placement: "top-start",
                style: { "margin-left": "5px" }
              }, {
                default: withCtx(() => [
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
                ]),
                _: 1
              }),
              createVNode("div", { style: { "flex": "1" } }),
              createVNode(_component_el_tooltip, {
                effect: "dark",
                content: "\u5168\u5C4F\u9605\u8BFB",
                placement: "top-start",
                style: { "margin-left": "5px" }
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    onClick: _ctx.readFullScreen,
                    class: "svg_icon_container"
                  }, [
                    createVNode(_component_el_icon, { size: 20 }, {
                      default: withCtx(() => [
                        createVNode(_component_FullScreen)
                      ]),
                      _: 1
                    })
                  ], 8, ["onClick"])
                ]),
                _: 1
              }),
              createVNode(_component_el_tooltip, {
                effect: "dark",
                content: "\u9605\u8BFB\u539F\u6587",
                placement: "top-start",
                style: { "margin-left": "5px" }
              }, {
                default: withCtx(() => [
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
                ]),
                _: 1
              })
            ])
          ]),
          _ctx.feedItem != null && _ctx.feed != null && _ctx.feed.view_type == 1 ? (openBlock(), createBlock("div", {
            key: 0,
            style: { "max-width": "800px", "margin": "0px auto" }
          }, [
            createVNode("p", { class: "feed_item_title" }, toDisplayString(_ctx.feedItem.title), 1),
            createVNode("div", null, [
              this.authorItem != null ? (openBlock(), createBlock("span", {
                key: 0,
                class: "feed_item_time"
              }, toDisplayString(this.authorItem == null ? "" : this.authorItem.author_name) + "\xA0\xA0", 1)) : createCommentVNode("", true),
              createVNode("a", {
                href: _ctx.feed.url,
                class: "feed_item_url"
              }, toDisplayString(_ctx.feed.name), 9, ["href"]),
              createVNode("span", null, "\xA0\xA0"),
              createVNode("span", { class: "feed_item_time" }, toDisplayString(_ctx.formatTime(_ctx.feedItem.publish_time)), 1),
              createVNode("span", null, "\xA0\xA0"),
              createVNode("span", { class: "feed_item_time" }, toDisplayString(_ctx.feedItem.read_count) + "\u6B21\u9605\u8BFB", 1)
            ]),
            createVNode("div", { class: "feed_content_container" }, [
              _ctx.feedItem.content.length > 0 && _ctx.feed.content_format == 1 ? (openBlock(), createBlock("div", {
                key: 0,
                innerHTML: _ctx.feedItem.content,
                class: "feed_article_container"
              }, null, 8, ["innerHTML"])) : _ctx.feedItem.content.length > 0 && _ctx.feed.content_format == 2 ? (openBlock(), createBlock(_component_MDC, {
                key: 1,
                value: _ctx.feedItem.content,
                tag: "div",
                class: "feed_article_container"
              }, null, 8, ["value"])) : _ctx.feedItem.desc.length > 0 ? (openBlock(), createBlock(_component_MDC, {
                key: 2,
                value: _ctx.feedItem.desc,
                tag: "div",
                class: "feed_article_container"
              }, null, 8, ["value"])) : (openBlock(), createBlock("div", { key: 3 }))
            ]),
            createVNode("div", { style: { "padding-top": "10px", "padding-bottom": "10px" } }, [
              createVNode(_component_el_button, {
                onClick: _ctx.onGotoSourceURL,
                style: { "width": "100%", "color": "#009a61" },
                size: "large"
              }, {
                default: withCtx(() => [
                  createTextVNode("\u8BBF\u95EE\u7F51\u9875\u539F\u59CB\u94FE\u63A5")
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ])) : createCommentVNode("", true),
          _ctx.feedItem != null && _ctx.feed != null && _ctx.feed.view_type == 2 ? (openBlock(), createBlock("div", {
            key: 1,
            style: { "max-width": "800px", "margin": "0px auto" }
          }, [
            createVNode("iframe", {
              src: _ctx.feedItem.feed_url
            }, null, 8, ["src"])
          ])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/popup/FeedItemPopup.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const FeedItemPopup = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a], ["__scopeId", "data-v-178907e7"]]);
const _sfc_main$9 = defineNuxtComponent({
  components: {
    CloseBold: close_bold_default,
    FolderAdd: folder_add_default,
    FeedItemList1,
    Loading
  },
  async asyncData() {
    return {
      feed: null,
      drawWidth: "40%",
      showDrawer: false,
      viewState: 1
    };
  },
  mounted() {
    emitter.on("on_popup_feed_info", (param) => {
      this.viewState = 2;
      this.feed = param.feed;
      this.show();
    });
  },
  methods: {
    async loadStatics() {
      let feedStaticsResponse = await rssbiz.queryFeedStaticsByIDs(false, [this.feed.feed_id]);
      if (helper.isResultOk(feedStaticsResponse)) {
        if (feedStaticsResponse.data.length == 1) {
          this.followCount = feedStaticsResponse.data[0].follow_count;
          this.articleCount = feedStaticsResponse.data[0].feed_item_count;
        }
      }
    },
    show() {
      this.showDrawer = true;
    },
    onCloseClick() {
      this.showDrawer = false;
    },
    formatTime(time) {
      return helper.getHumanTime(time);
    },
    onFeedDetail() {
    }
  }
}, "$xjjvN3uHnx");
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_drawer = ElDrawer;
  const _component_el_icon = ElIcon;
  const _component_CloseBold = resolveComponent("CloseBold");
  const _component_Loading = resolveComponent("Loading");
  _push(ssrRenderComponent(_component_el_drawer, mergeProps({
    modelValue: _ctx.showDrawer,
    "onUpdate:modelValue": ($event) => _ctx.showDrawer = $event,
    "with-header": false,
    "destroy-on-close": true,
    size: _ctx.drawWidth
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="close_wrapper" data-v-5432e27f${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_icon, { size: 30 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_CloseBold, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_CloseBold)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div style="${ssrRenderStyle({ "max-width": "700px", "margin": "0px auto" })}" data-v-5432e27f${_scopeId}>`);
        if (_ctx.viewState == 1) {
          _push2(ssrRenderComponent(_component_Loading, null, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.viewState == 2) {
          _push2(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "height": "500px" })}" data-v-5432e27f${_scopeId}><div style="${ssrRenderStyle({ "text-align": "center" })}" data-v-5432e27f${_scopeId}><img${ssrRenderAttr("src", this.feed.icon_url)} style="${ssrRenderStyle({ "width": "88px" })}" data-v-5432e27f${_scopeId}></div><div style="${ssrRenderStyle({ "flex": "1" })}" data-v-5432e27f${_scopeId}></div><p class="feed_info_title" data-v-5432e27f${_scopeId}>\u6807\u9898</p><p class="feed_info_val" data-v-5432e27f${_scopeId}>${ssrInterpolate(this.feed != null ? this.feed.name : "")}</p><div style="${ssrRenderStyle({ "flex": "1" })}" data-v-5432e27f${_scopeId}></div><p class="feed_info_title" data-v-5432e27f${_scopeId}>\u63CF\u8FF0</p><p class="feed_info_val" data-v-5432e27f${_scopeId}>${ssrInterpolate(this.feed != null ? this.feed.desc : "")}</p><div style="${ssrRenderStyle({ "flex": "1" })}" data-v-5432e27f${_scopeId}></div><p class="feed_info_title" data-v-5432e27f${_scopeId}>\u7F51\u7AD9</p><a class="feed_info_link"${ssrRenderAttr("href", this.feed != null ? this.feed.url : "")} data-v-5432e27f${_scopeId}>${ssrInterpolate(this.feed != null ? this.feed.url : "")}</a><div style="${ssrRenderStyle({ "flex": "1" })}" data-v-5432e27f${_scopeId}></div><p class="feed_info_title" data-v-5432e27f${_scopeId}>RSS</p><a class="feed_info_link"${ssrRenderAttr("href", this.feed != null ? this.feed.feed_url : "")} data-v-5432e27f${_scopeId}>${ssrInterpolate(this.feed != null ? this.feed.feed_url : "")}</a><div style="${ssrRenderStyle({ "height": "30px" })}" data-v-5432e27f${_scopeId}></div></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", {
            class: "close_wrapper",
            onClick: _ctx.onCloseClick
          }, [
            createVNode(_component_el_icon, { size: 30 }, {
              default: withCtx(() => [
                createVNode(_component_CloseBold)
              ]),
              _: 1
            })
          ], 8, ["onClick"]),
          createVNode("div", { style: { "max-width": "700px", "margin": "0px auto" } }, [
            _ctx.viewState == 1 ? (openBlock(), createBlock(_component_Loading, { key: 0 })) : createCommentVNode("", true),
            _ctx.viewState == 2 ? (openBlock(), createBlock("div", {
              key: 1,
              style: { "display": "flex", "flex-direction": "column", "height": "500px" }
            }, [
              createVNode("div", { style: { "text-align": "center" } }, [
                createVNode("img", {
                  src: this.feed.icon_url,
                  style: { "width": "88px" }
                }, null, 8, ["src"])
              ]),
              createVNode("div", { style: { "flex": "1" } }),
              createVNode("p", { class: "feed_info_title" }, "\u6807\u9898"),
              createVNode("p", { class: "feed_info_val" }, toDisplayString(this.feed != null ? this.feed.name : ""), 1),
              createVNode("div", { style: { "flex": "1" } }),
              createVNode("p", { class: "feed_info_title" }, "\u63CF\u8FF0"),
              createVNode("p", { class: "feed_info_val" }, toDisplayString(this.feed != null ? this.feed.desc : ""), 1),
              createVNode("div", { style: { "flex": "1" } }),
              createVNode("p", { class: "feed_info_title" }, "\u7F51\u7AD9"),
              createVNode("a", {
                class: "feed_info_link",
                href: this.feed != null ? this.feed.url : ""
              }, toDisplayString(this.feed != null ? this.feed.url : ""), 9, ["href"]),
              createVNode("div", { style: { "flex": "1" } }),
              createVNode("p", { class: "feed_info_title" }, "RSS"),
              createVNode("a", {
                class: "feed_info_link",
                href: this.feed != null ? this.feed.feed_url : ""
              }, toDisplayString(this.feed != null ? this.feed.feed_url : ""), 9, ["href"]),
              createVNode("div", { style: { "height": "30px" } })
            ])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/popup/FeedInfoPopup.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const FeedInfoPopup = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-5432e27f"]]);
const _sfc_main$8 = defineNuxtComponent({
  components: {
    CloseBold: close_bold_default
  },
  async asyncData() {
    return {
      drawWidth: "70%",
      showDrawer: false
    };
  },
  mounted() {
    emitter.on("on_popup_general_setting", (param) => {
      this.show();
    });
  },
  methods: {
    show() {
      this.showDrawer = true;
    },
    onCloseClick() {
      this.showDrawer = false;
    }
  }
}, "$wi22mnLoVG");
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_drawer = ElDrawer;
  const _component_el_icon = ElIcon;
  const _component_CloseBold = resolveComponent("CloseBold");
  _push(ssrRenderComponent(_component_el_drawer, mergeProps({
    modelValue: _ctx.showDrawer,
    "onUpdate:modelValue": ($event) => _ctx.showDrawer = $event,
    "with-header": false,
    "destroy-on-close": true,
    size: _ctx.drawWidth
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="close_wrapper" data-v-37ba5897${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_icon, { size: 30 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_CloseBold, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_CloseBold)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", {
            class: "close_wrapper",
            onClick: _ctx.onCloseClick
          }, [
            createVNode(_component_el_icon, { size: 30 }, {
              default: withCtx(() => [
                createVNode(_component_CloseBold)
              ]),
              _: 1
            })
          ], 8, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/setting/GeneralSettingPopup.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const GeneralSettingPopup = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-37ba5897"]]);
const _sfc_main$7 = defineNuxtComponent({
  components: {
    CloseBold: close_bold_default
  },
  async asyncData() {
    return {
      drawWidth: "70%",
      showDrawer: false,
      feedList: []
    };
  },
  mounted() {
    emitter.on("on_popup_manage_feed", (param) => {
      this.show();
    });
  },
  methods: {
    show() {
      this.showDrawer = true;
    },
    onCloseClick() {
      this.showDrawer = false;
    },
    deleteFolder(folderItem) {
    },
    deleteFolderImpl(folderItem) {
    },
    cancelDeleteFolder() {
    }
  }
}, "$WDejEZrWDH");
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_drawer = ElDrawer;
  const _component_el_icon = ElIcon;
  const _component_CloseBold = resolveComponent("CloseBold");
  const _component_el_table = ElTable;
  const _component_el_table_column = ElTableColumn;
  const _component_Folder = resolveComponent("Folder");
  _push(ssrRenderComponent(_component_el_drawer, mergeProps({
    modelValue: _ctx.showDrawer,
    "onUpdate:modelValue": ($event) => _ctx.showDrawer = $event,
    "with-header": false,
    "destroy-on-close": true,
    size: _ctx.drawWidth
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="close_wrapper" data-v-ed90b518${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_icon, { size: 30 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_CloseBold, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_CloseBold)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(ssrRenderComponent(_component_el_table, {
          data: _ctx.feedList,
          border: "",
          style: { "width": "100%" },
          stripe: true
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_table_column, {
                prop: "name",
                label: "\u8BA2\u9605\u6E90"
              }, {
                default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "font-size": "16px" })}" data-v-ed90b518${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_el_icon, { size: 18 }, {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_Folder, null, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_Folder)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                    _push4(`\xA0${ssrInterpolate(scope.row.folder_name)}</div>`);
                  } else {
                    return [
                      createVNode("div", { style: { "display": "flex", "align-items": "center", "font-size": "16px" } }, [
                        createVNode(_component_el_icon, { size: 18 }, {
                          default: withCtx(() => [
                            createVNode(_component_Folder)
                          ]),
                          _: 1
                        }),
                        createTextVNode("\xA0" + toDisplayString(scope.row.folder_name), 1)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_table_column, {
                prop: "name",
                label: "\u64CD\u4F5C",
                width: "260"
              }, {
                default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                  if (_push4)
                    ;
                  else {
                    return [];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_el_table_column, {
                  prop: "name",
                  label: "\u8BA2\u9605\u6E90"
                }, {
                  default: withCtx((scope) => [
                    createVNode("div", { style: { "display": "flex", "align-items": "center", "font-size": "16px" } }, [
                      createVNode(_component_el_icon, { size: 18 }, {
                        default: withCtx(() => [
                          createVNode(_component_Folder)
                        ]),
                        _: 1
                      }),
                      createTextVNode("\xA0" + toDisplayString(scope.row.folder_name), 1)
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  prop: "name",
                  label: "\u64CD\u4F5C",
                  width: "260"
                }, {
                  default: withCtx((scope) => []),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", {
            class: "close_wrapper",
            onClick: _ctx.onCloseClick
          }, [
            createVNode(_component_el_icon, { size: 30 }, {
              default: withCtx(() => [
                createVNode(_component_CloseBold)
              ]),
              _: 1
            })
          ], 8, ["onClick"]),
          createVNode(_component_el_table, {
            data: _ctx.feedList,
            border: "",
            style: { "width": "100%" },
            stripe: true
          }, {
            default: withCtx(() => [
              createVNode(_component_el_table_column, {
                prop: "name",
                label: "\u8BA2\u9605\u6E90"
              }, {
                default: withCtx((scope) => [
                  createVNode("div", { style: { "display": "flex", "align-items": "center", "font-size": "16px" } }, [
                    createVNode(_component_el_icon, { size: 18 }, {
                      default: withCtx(() => [
                        createVNode(_component_Folder)
                      ]),
                      _: 1
                    }),
                    createTextVNode("\xA0" + toDisplayString(scope.row.folder_name), 1)
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                prop: "name",
                label: "\u64CD\u4F5C",
                width: "260"
              }, {
                default: withCtx((scope) => []),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["data"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/setting/FeedManagePopup.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const FeedManagePopup = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-ed90b518"]]);
const _sfc_main$6 = defineNuxtComponent({
  components: {
    CloseBold: close_bold_default
  },
  async asyncData() {
    return {
      drawWidth: "70%",
      showDrawer: false,
      folderList: []
    };
  },
  mounted() {
    emitter.on("on_popup_manage_folder", (param) => {
      this.folderList = [];
      this.show();
      this.loadFolderList();
    });
  },
  methods: {
    show() {
      this.showDrawer = true;
    },
    onCloseClick() {
      this.showDrawer = false;
    },
    deleteFolder(folderItem) {
    },
    deleteFolderImpl(folderItem) {
    },
    cancelDeleteFolder() {
    },
    async loadFolderList() {
      let responseData = await rssfolder.queryFolderList(false, devicebiz.getDeviceID(), 100, 0);
      if (helper.isResultOk(responseData)) {
        let folderList = responseData.data.page;
        for (let index in folderList) {
          folderList[index].isFeed = false;
          if (this.feed != null) {
            for (let i in this.feed.folderList) {
              if (this.feed.folderList[i].folder_id == folderList[index].folder_id) {
                folderList[index].isFeed = true;
              }
            }
          }
        }
        this.folderList = folderList;
      }
    }
  }
}, "$5H0pkRvPAX");
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_drawer = ElDrawer;
  const _component_el_icon = ElIcon;
  const _component_CloseBold = resolveComponent("CloseBold");
  const _component_el_table = ElTable;
  const _component_el_table_column = ElTableColumn;
  const _component_Folder = resolveComponent("Folder");
  const _component_el_link = ElLink;
  const _component_FolderDelete = resolveComponent("FolderDelete");
  const _component_el_popconfirm = ElPopconfirm;
  _push(ssrRenderComponent(_component_el_drawer, mergeProps({
    modelValue: _ctx.showDrawer,
    "onUpdate:modelValue": ($event) => _ctx.showDrawer = $event,
    "with-header": false,
    "destroy-on-close": true,
    size: _ctx.drawWidth
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="close_wrapper" data-v-8d00ab43${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_icon, { size: 30 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_CloseBold, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_CloseBold)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(ssrRenderComponent(_component_el_table, {
          data: _ctx.folderList,
          border: "",
          style: { "width": "100%" },
          stripe: true
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_table_column, {
                prop: "folder_name",
                label: "\u6587\u4EF6\u5939\u540D\u79F0"
              }, {
                default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "font-size": "16px" })}" data-v-8d00ab43${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_el_icon, { size: 18 }, {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_Folder, null, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_Folder)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                    _push4(`\xA0${ssrInterpolate(scope.row.folder_name)}</div>`);
                  } else {
                    return [
                      createVNode("div", { style: { "display": "flex", "align-items": "center", "font-size": "16px" } }, [
                        createVNode(_component_el_icon, { size: 18 }, {
                          default: withCtx(() => [
                            createVNode(_component_Folder)
                          ]),
                          _: 1
                        }),
                        createTextVNode("\xA0" + toDisplayString(scope.row.folder_name), 1)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_table_column, {
                prop: "folder_name",
                label: "\u64CD\u4F5C",
                width: "260"
              }, {
                default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_el_link, {
                      type: "danger",
                      onClick: ($event) => _ctx.deleteFolder(scope.row)
                    }, {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_el_icon, { size: 18 }, {
                            default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_FolderDelete, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_FolderDelete)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent5, _scopeId4));
                          _push5(`\xA0\u5220\u9664\u76EE\u5F55`);
                        } else {
                          return [
                            createVNode(_component_el_icon, { size: 18 }, {
                              default: withCtx(() => [
                                createVNode(_component_FolderDelete)
                              ]),
                              _: 1
                            }),
                            createTextVNode("\xA0\u5220\u9664\u76EE\u5F55")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                    _push4(`<span data-v-8d00ab43${_scopeId3}>\xA0\xA0\xA0\xA0\xA0</span>`);
                    _push4(ssrRenderComponent(_component_el_popconfirm, {
                      title: "\u5220\u9664\u540E\u5176\u76EE\u5F55\u4E0B\u7684\u5185\u5BB9\u6E90\u90FD\u4F1A\u88AB\u53D6\u6D88\u8BA2\u9605\uFF0C\u786E\u8BA4\u8981\u5220\u9664\u6B64\u76EE\u5F55\u5417\uFF1F",
                      width: "260",
                      "cancel-button-text": "\u53D6\u6D88\u5220\u9664",
                      onConfirm: ($event) => _ctx.confirmDeleteFolder(scope.row),
                      onCancel: _ctx.cancelDeleteFolder,
                      "confirm-button-text": "\u786E\u8BA4\u5220\u9664"
                    }, {
                      reference: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_el_link, {
                            onClick: ($event) => _ctx.deleteFolderImpl(scope.row)
                          }, {
                            default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_el_icon, { size: 18 }, {
                                  default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_FolderDelete, null, null, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_FolderDelete)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent6, _scopeId5));
                                _push6(`\xA0\u5220\u9664\u76EE\u5F55`);
                              } else {
                                return [
                                  createVNode(_component_el_icon, { size: 18 }, {
                                    default: withCtx(() => [
                                      createVNode(_component_FolderDelete)
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode("\xA0\u5220\u9664\u76EE\u5F55")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_el_link, {
                              onClick: ($event) => _ctx.deleteFolderImpl(scope.row)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_icon, { size: 18 }, {
                                  default: withCtx(() => [
                                    createVNode(_component_FolderDelete)
                                  ]),
                                  _: 1
                                }),
                                createTextVNode("\xA0\u5220\u9664\u76EE\u5F55")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_el_link, {
                        type: "danger",
                        onClick: ($event) => _ctx.deleteFolder(scope.row)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_icon, { size: 18 }, {
                            default: withCtx(() => [
                              createVNode(_component_FolderDelete)
                            ]),
                            _: 1
                          }),
                          createTextVNode("\xA0\u5220\u9664\u76EE\u5F55")
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      createVNode("span", null, "\xA0\xA0\xA0\xA0\xA0"),
                      createVNode(_component_el_popconfirm, {
                        title: "\u5220\u9664\u540E\u5176\u76EE\u5F55\u4E0B\u7684\u5185\u5BB9\u6E90\u90FD\u4F1A\u88AB\u53D6\u6D88\u8BA2\u9605\uFF0C\u786E\u8BA4\u8981\u5220\u9664\u6B64\u76EE\u5F55\u5417\uFF1F",
                        width: "260",
                        "cancel-button-text": "\u53D6\u6D88\u5220\u9664",
                        onConfirm: ($event) => _ctx.confirmDeleteFolder(scope.row),
                        onCancel: _ctx.cancelDeleteFolder,
                        "confirm-button-text": "\u786E\u8BA4\u5220\u9664"
                      }, {
                        reference: withCtx(() => [
                          createVNode(_component_el_link, {
                            onClick: ($event) => _ctx.deleteFolderImpl(scope.row)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_icon, { size: 18 }, {
                                default: withCtx(() => [
                                  createVNode(_component_FolderDelete)
                                ]),
                                _: 1
                              }),
                              createTextVNode("\xA0\u5220\u9664\u76EE\u5F55")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1032, ["onConfirm", "onCancel"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_el_table_column, {
                  prop: "folder_name",
                  label: "\u6587\u4EF6\u5939\u540D\u79F0"
                }, {
                  default: withCtx((scope) => [
                    createVNode("div", { style: { "display": "flex", "align-items": "center", "font-size": "16px" } }, [
                      createVNode(_component_el_icon, { size: 18 }, {
                        default: withCtx(() => [
                          createVNode(_component_Folder)
                        ]),
                        _: 1
                      }),
                      createTextVNode("\xA0" + toDisplayString(scope.row.folder_name), 1)
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  prop: "folder_name",
                  label: "\u64CD\u4F5C",
                  width: "260"
                }, {
                  default: withCtx((scope) => [
                    createVNode(_component_el_link, {
                      type: "danger",
                      onClick: ($event) => _ctx.deleteFolder(scope.row)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_icon, { size: 18 }, {
                          default: withCtx(() => [
                            createVNode(_component_FolderDelete)
                          ]),
                          _: 1
                        }),
                        createTextVNode("\xA0\u5220\u9664\u76EE\u5F55")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode("span", null, "\xA0\xA0\xA0\xA0\xA0"),
                    createVNode(_component_el_popconfirm, {
                      title: "\u5220\u9664\u540E\u5176\u76EE\u5F55\u4E0B\u7684\u5185\u5BB9\u6E90\u90FD\u4F1A\u88AB\u53D6\u6D88\u8BA2\u9605\uFF0C\u786E\u8BA4\u8981\u5220\u9664\u6B64\u76EE\u5F55\u5417\uFF1F",
                      width: "260",
                      "cancel-button-text": "\u53D6\u6D88\u5220\u9664",
                      onConfirm: ($event) => _ctx.confirmDeleteFolder(scope.row),
                      onCancel: _ctx.cancelDeleteFolder,
                      "confirm-button-text": "\u786E\u8BA4\u5220\u9664"
                    }, {
                      reference: withCtx(() => [
                        createVNode(_component_el_link, {
                          onClick: ($event) => _ctx.deleteFolderImpl(scope.row)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_icon, { size: 18 }, {
                              default: withCtx(() => [
                                createVNode(_component_FolderDelete)
                              ]),
                              _: 1
                            }),
                            createTextVNode("\xA0\u5220\u9664\u76EE\u5F55")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 2
                    }, 1032, ["onConfirm", "onCancel"])
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
          createVNode("div", {
            class: "close_wrapper",
            onClick: _ctx.onCloseClick
          }, [
            createVNode(_component_el_icon, { size: 30 }, {
              default: withCtx(() => [
                createVNode(_component_CloseBold)
              ]),
              _: 1
            })
          ], 8, ["onClick"]),
          createVNode(_component_el_table, {
            data: _ctx.folderList,
            border: "",
            style: { "width": "100%" },
            stripe: true
          }, {
            default: withCtx(() => [
              createVNode(_component_el_table_column, {
                prop: "folder_name",
                label: "\u6587\u4EF6\u5939\u540D\u79F0"
              }, {
                default: withCtx((scope) => [
                  createVNode("div", { style: { "display": "flex", "align-items": "center", "font-size": "16px" } }, [
                    createVNode(_component_el_icon, { size: 18 }, {
                      default: withCtx(() => [
                        createVNode(_component_Folder)
                      ]),
                      _: 1
                    }),
                    createTextVNode("\xA0" + toDisplayString(scope.row.folder_name), 1)
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                prop: "folder_name",
                label: "\u64CD\u4F5C",
                width: "260"
              }, {
                default: withCtx((scope) => [
                  createVNode(_component_el_link, {
                    type: "danger",
                    onClick: ($event) => _ctx.deleteFolder(scope.row)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_icon, { size: 18 }, {
                        default: withCtx(() => [
                          createVNode(_component_FolderDelete)
                        ]),
                        _: 1
                      }),
                      createTextVNode("\xA0\u5220\u9664\u76EE\u5F55")
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode("span", null, "\xA0\xA0\xA0\xA0\xA0"),
                  createVNode(_component_el_popconfirm, {
                    title: "\u5220\u9664\u540E\u5176\u76EE\u5F55\u4E0B\u7684\u5185\u5BB9\u6E90\u90FD\u4F1A\u88AB\u53D6\u6D88\u8BA2\u9605\uFF0C\u786E\u8BA4\u8981\u5220\u9664\u6B64\u76EE\u5F55\u5417\uFF1F",
                    width: "260",
                    "cancel-button-text": "\u53D6\u6D88\u5220\u9664",
                    onConfirm: ($event) => _ctx.confirmDeleteFolder(scope.row),
                    onCancel: _ctx.cancelDeleteFolder,
                    "confirm-button-text": "\u786E\u8BA4\u5220\u9664"
                  }, {
                    reference: withCtx(() => [
                      createVNode(_component_el_link, {
                        onClick: ($event) => _ctx.deleteFolderImpl(scope.row)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_icon, { size: 18 }, {
                            default: withCtx(() => [
                              createVNode(_component_FolderDelete)
                            ]),
                            _: 1
                          }),
                          createTextVNode("\xA0\u5220\u9664\u76EE\u5F55")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    _: 2
                  }, 1032, ["onConfirm", "onCancel"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["data"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/setting/FolderManagePopup.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const FolderManagePopup = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-8d00ab43"]]);
const _sfc_main$5 = defineNuxtComponent({
  components: {
    CreateFolderPopup,
    SelectFolder,
    FeedDescriptPopup,
    FeedItemPopup,
    FeedInfoPopup,
    GeneralSettingPopup,
    FeedManagePopup,
    FolderManagePopup
  },
  async asyncData() {
    return {};
  },
  methods: {}
}, "$8rC6ZvVBKL");
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CreateFolderPopup = resolveComponent("CreateFolderPopup");
  const _component_SelectFolder = resolveComponent("SelectFolder");
  const _component_FeedDescriptPopup = resolveComponent("FeedDescriptPopup");
  const _component_FeedItemPopup = resolveComponent("FeedItemPopup");
  const _component_FeedInfoPopup = resolveComponent("FeedInfoPopup");
  const _component_GeneralSettingPopup = resolveComponent("GeneralSettingPopup");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CreateFolderPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_SelectFolder, null, null, _parent));
  _push(ssrRenderComponent(_component_FeedDescriptPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_FeedItemPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_FeedInfoPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_GeneralSettingPopup, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/popup/AllPopup.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const AllPopup = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    t: "1731067512195",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "4338",
    width: "256",
    height: "256"
  }, _attrs))}><path d="M703.998185 191.999505c0-106.039727-85.959778-191.999505-191.999505-191.999505s-191.999505 85.959778-191.999505 191.999505 85.959778 191.999505 191.999505 191.999505 191.999505-85.959778 191.999505-191.999505zM467.178796 482.198757c-118.659694-72.639813-310.859199-92.599761-407.57895-98.099747C27.09993 382.259014 0 407.018951 0 438.27887v445.598851c0 28.659926 23.17994 52.559864 52.979863 54.099861 87.319775 4.579988 263.979319 21.359945 386.079005 82.859786 18.739952 9.439976 40.959894-3.419991 40.959894-23.739939V505.118698c-0.02-9.339976-4.639988-17.899954-12.839966-22.919941z m497.218718-98.099747c-96.699751 5.479986-288.919255 25.459934-407.55895 98.099747-8.199979 5.019987-12.819967 13.919964-12.819967 23.25994v491.578733c0 20.379947 22.279943 33.259914 41.079895 23.799938 122.079685-61.439842 298.63923-78.219798 385.939005-82.799786 29.799923-1.559996 52.979863-25.459934 52.979863-54.119861V438.27887c-0.02-31.259919-27.11993-56.019856-59.619846-54.17986z" fill="#009a61" p-id="4339"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("icons/HelloReadLogo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const HelloReadLogo = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    t: "1735365131139",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "13630",
    width: "144",
    height: "144"
  }, _attrs))}><path d="M852.7 63.95H171.3c-17.91 0-32.41 14.49-32.41 32.41v828.42c0 11.2 5.76 21.61 15.32 27.53 9.43 5.89 21.33 6.49 31.46 1.52L512 792.55l326.33 161.27c4.56 2.25 9.49 3.35 14.37 3.35 5.95 0 11.9-1.65 17.09-4.87a32.344 32.344 0 0 0 15.32-27.53V96.35c-0.01-17.91-14.5-32.4-32.41-32.4z m-32.41 808.67L526.37 727.36c-4.56-2.25-9.43-3.35-14.37-3.35s-9.81 1.11-14.37 3.35L203.71 872.62V128.76h616.58v743.86z" p-id="13631"></path><path d="M324.53 306.64h374.94v64.81H324.53zM324.53 481.48h374.94v64.81H324.53z" p-id="13632"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("icons/ReadLaterEntry.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ReadLaterEntry = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    t: "1731068115047",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "5629",
    width: "256",
    height: "256"
  }, _attrs))}><path d="M736 800a32 32 0 0 0-32 32v96a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v128a32 32 0 0 0 64 0V96a96.11 96.11 0 0 0-96-96H96A96.11 96.11 0 0 0 0 96v832a96.11 96.11 0 0 0 96 96h576a96.11 96.11 0 0 0 96-96v-96a32 32 0 0 0-32-32z" fill="#707070" p-id="5630"></path><path d="M1024 510.42v-0.24c0-0.63-0.09-1.25-0.16-1.88 0-0.15 0-0.3-0.05-0.46a31.043 31.043 0 0 0-0.84-4.21l-0.06-0.23a31.84 31.84 0 0 0-1.5-4.22l-0.05-0.12a31.73 31.73 0 0 0-2.1-4l-0.14-0.22a31.93 31.93 0 0 0-2.59-3.51l-0.34-0.4c-0.46-0.52-0.93-1-1.43-1.54l-160-160a32 32 0 1 0-45.26 45.25L914.75 480H544a32 32 0 0 0 0 64h370.75L809.38 649.37a32 32 0 1 0 45.25 45.25l160-160 0.28-0.3 0.45-0.47q0.59-0.63 1.13-1.27l0.24-0.28c0.46-0.55 0.89-1.12 1.3-1.7l0.19-0.27c0.41-0.59 0.81-1.18 1.17-1.79q0.61-1 1.14-2.06a31.78 31.78 0 0 0 1.81-4.36l0.05-0.17a32 32 0 0 0 1.07-4.29l0.08-0.47c0.11-0.68 0.21-1.37 0.27-2.05v-0.17c0.06-0.63 0.09-1.26 0.11-1.9v-0.58c0.08-0.73 0.08-1.4 0.08-2.07z" fill="#707070" p-id="5631"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("icons/LogoutIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const LogoutIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    t: "1731068237636",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "7115",
    width: "256",
    height: "256"
  }, _attrs))}><path d="M85.333333 170.666667v682.666666h853.333334V170.666667H85.333333z m0-85.333334h853.333334a85.333333 85.333333 0 0 1 85.333333 85.333334v682.666666a85.333333 85.333333 0 0 1-85.333333 85.333334H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V170.666667a85.333333 85.333333 0 0 1 85.333333-85.333334z" p-id="7116" fill="#707070"></path><path d="M256 298.666667m64 0l0 0q64 0 64 64l0 42.666666q0 64-64 64l0 0q-64 0-64-64l0-42.666666q0-64 64-64Z" p-id="7117" fill="#707070"></path><path d="M640 298.666667m64 0l0 0q64 0 64 64l0 42.666666q0 64-64 64l0 0q-64 0-64-64l0-42.666666q0-64 64-64Z" p-id="7118" fill="#707070"></path><path d="M288.170667 674.346667a42.666667 42.666667 0 1 1 61.781333-58.88C390.229333 657.792 448.725333 682.666667 512 682.666667c63.914667 0 122.88-25.386667 163.157333-68.352a42.666667 42.666667 0 1 1 62.293334 58.325333C680.96 732.885333 599.381333 768 512 768c-86.570667 0-167.424-34.432-223.829333-93.653333z" p-id="7119" fill="#707070"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("icons/WelcomeIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const WelcomeIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineNuxtComponent({
  components: {
    RssLogo,
    SideBar,
    AddRss,
    User,
    RssLogoGray,
    CreateRssFolder,
    AllFeed,
    LaterRead,
    Recent,
    AllSubscribeFeed,
    AllFeedItem,
    Today,
    AllPopup,
    ArrowRight: arrow_right_default,
    ArrowDown: arrow_down_default,
    AllSubscribeFeedActive,
    Files: files_default,
    CollectionTag: collection_tag_default,
    ReadedIcon,
    AllArticleIcon,
    HelloReadLogo,
    LogoutIcon,
    WelcomeIcon,
    SwitchButton: switch_button_default,
    Service: service_default,
    Share: share_default,
    ReadLaterEntry,
    AllDialog
  },
  async asyncData(params) {
    const route = useRoute();
    let currentFeedID = "";
    let currentFolderID = "";
    let isReaded = false;
    let isMyFeed = false;
    let isReadLater = false;
    let isTodayPage = false;
    let isAllFeeds = false;
    {
      let url = params.ssrContext.url;
      if (url.indexOf("/my/folder") >= 0) {
        currentFolderID = route.params.folder_id;
        if (currentFolderID == void 0) {
          currentFolderID = "";
        }
      } else if (url.indexOf("/my/feed") >= 0) {
        currentFeedID = route.params.feed_id;
        if (currentFeedID == void 0) {
          currentFeedID = "";
        }
      } else if (url.indexOf("/my/today") >= 0) {
        isTodayPage = true;
      } else if (url.indexOf("/my/all") >= 0) {
        isMyFeed = true;
      } else if (url.indexOf("/my/read-later") >= 0) {
        isReadLater = true;
      } else if (url.indexOf("/my/already-read") >= 0) {
        isReaded = true;
      } else if (url.indexOf("/feed-item") >= 0) {
        isAllFeeds = true;
      }
    }
    return {
      isMyFeed,
      isTodayPage,
      showMiddlePanel: true,
      isReaded,
      isReadLater,
      isAllFeeds,
      currentExpandTick: 0,
      currentFeedID,
      currentFolderID,
      isLogined: false,
      userName: "",
      userAccount: "",
      totalUnreadFeedItemCount: -1,
      folderList: []
    };
  },
  mounted() {
    this.isLogined = userbiz.isUserMode();
    this.loadFolderList();
    emitter.on("on_feed_folder_create", (param) => {
      this.onFeedFolderCreate(param);
    });
    emitter.on("on_feed_folder_update", (param) => {
      this.loadFolderList();
    });
    this.userName = userbiz.getNickName();
    let mstObj = helper.getMst();
    if (mstObj != null) {
      if (mstObj.p != void 0 && mstObj.p.length > 0) {
        this.userAccount = mstObj.p;
      } else if (mstObj.e != void 0 && mstObj.e.length > 0) {
        this.userAccount = mstObj.e;
      } else {
        this.userAccount = "\u5FAE\u4FE1\u7528\u6237";
      }
    }
    rssbiz.addViewNumber();
  },
  methods: {
    async loadFolderList() {
      let expandIndex = -1;
      let responseData = await rssfolder.queryFolderList(false, devicebiz$1.getDeviceID(), 100, 0);
      if (helper.isResultOk(responseData)) {
        let folderList = responseData.data.page;
        for (let index in folderList) {
          folderList[index].expand = false;
          folderList[index].isActive = false;
          if (this.currentFolderID == folderList[index].folder_id) {
            folderList[index].isActive = true;
            expandIndex = index;
          }
          folderList[index].feedCount = -1;
          folderList[index].unReadFeedItemCount = -1;
          folderList[index].feeds = [];
        }
        this.folderList = folderList;
      }
      await this.loadFolderFeedCount();
      await this.loadAllFolderStatics();
      await this.checkFeedFolder();
      if (expandIndex >= 0) {
        this.expandFolder(this.folderList[expandIndex]);
      }
    },
    async loadFolderFeedCount() {
      let folderIDs = [];
      for (let index in this.folderList) {
        let folder = this.folderList[index];
        folderIDs.push(folder.folder_id);
      }
      let responseData = await rssfolder.getFolderCount(false, devicebiz$1.getDeviceID(), folderIDs);
      if (helper.isResultOk(responseData)) {
        let staticsFolderList = responseData.data;
        for (let index in this.folderList) {
          for (let i in staticsFolderList) {
            if (staticsFolderList[i].folder_id == this.folderList[index].folder_id) {
              this.folderList[index].feedCount = staticsFolderList[i].feed_count;
              this.folderList[index].unReadFeedItemCount = staticsFolderList[i].unread_feed_item_count;
              break;
            }
          }
        }
      }
    },
    async loadAllFolderStatics() {
      let responseData = await rssfolder.getUserAllFolderStatics(devicebiz$1.getDeviceID());
      if (helper.isResultOk(responseData)) {
        this.totalUnreadFeedItemCount = responseData.data.unread_feed_item_count;
      }
    },
    async checkFeedFolder() {
      if (this.currentFeedID.length == 0) {
        return;
      }
      let responseData = await rssbiz.getFolderIDByFeedID(devicebiz$1.getDeviceID(), this.currentFeedID);
      if (helper.isResultOk(responseData)) {
        let folderList = responseData.data;
        for (let i in folderList) {
          for (let j in this.folderList) {
            if (this.folderList[j].folder_id == folderList[i].folder_id) {
              this.folderList[j].isActive = true;
              this.expandFolder(this.folderList[j]);
              break;
            }
          }
        }
      }
    },
    createFolderClick() {
      emitter.emit("on_popup_createfolder", {});
    },
    onFeedFolderCreate() {
      this.loadFolderList();
    },
    onToggleFolder(folderItem) {
      this.currentExpandTick = Date.now();
      folderItem.expand = !folderItem.expand;
      if (folderItem.expand) {
        this.loadFolderFeed(folderItem);
      }
    },
    expandFolder(folderItem) {
      if (folderItem.expand) {
        return;
      }
      this.onToggleFolder(folderItem);
    },
    onToggleMiddle() {
      this.showMiddlePanel = !this.showMiddlePanel;
    },
    async loadFolderFeed(folder) {
      let responseData = await rssfolder.getFolderByFeed(false, devicebiz$1.getDeviceID(), folder.folder_id, 1, 50, 0);
      if (helper.isResultOk(responseData)) {
        let feeds = responseData.data.page;
        for (let index in feeds) {
          feeds[index].isActive = false;
          feeds[index].unreadFeedItemCount = -1;
          if (feeds[index].icon_url.length == 0) {
            feeds[index].icon_url = "https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/reader/default-rss-icon.svg";
          }
          if (this.currentFeedID == feeds[index].feed_id) {
            feeds[index].isActive = true;
          }
        }
        folder.feeds = feeds;
      }
      this.loadUnreadCountByFeedIds(folder);
    },
    async loadUnreadCountByFeedIds(folder) {
      let feedIDs = [];
      for (let index in folder.feeds) {
        feedIDs.push(folder.feeds[index].feed_id);
      }
      let responseData = await rssfolder.getUserFeedStatics(devicebiz$1.getDeviceID(), feedIDs);
      if (helper.isResultOk(responseData)) {
        for (let i in responseData.data) {
          for (let j in folder.feeds) {
            if (folder.feeds[j].feed_id == responseData.data[i].feed_id) {
              folder.feeds[j].unreadFeedItemCount = responseData.data[i].unread_feed_item_count;
              break;
            }
          }
        }
      }
    },
    onSelectFolder(folder) {
      if (Date.now() - this.currentExpandTick > 700) {
        (void 0).location.href = "/my/folder/" + folder.folder_id + ".html";
      }
    },
    onGotoLogin() {
      (void 0).location.href = "https://www.hellokit.com.cn/user/login?src=https://reader.hellokit.com.cn";
    }
  }
}, "$VbeGLRT2Wl");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HelloReadLogo = resolveComponent("HelloReadLogo");
  const _component_SideBar = resolveComponent("SideBar");
  const _component_el_tooltip = ElTooltip;
  const _component_AddRss = resolveComponent("AddRss");
  const _component_el_popover = ElPopover;
  const _component_User = resolveComponent("User");
  const _component_el_icon = ElIcon;
  const _component_WelcomeIcon = resolveComponent("WelcomeIcon");
  const _component_Service = resolveComponent("Service");
  resolveComponent("Share");
  resolveComponent("SwitchButton");
  const _component_LogoutIcon = resolveComponent("LogoutIcon");
  const _component_Today = resolveComponent("Today");
  resolveComponent("AllFeedItem");
  const _component_ReadLaterEntry = resolveComponent("ReadLaterEntry");
  const _component_ReadedIcon = resolveComponent("ReadedIcon");
  const _component_Files = resolveComponent("Files");
  const _component_ArrowRight = resolveComponent("ArrowRight");
  const _component_ArrowDown = resolveComponent("ArrowDown");
  resolveComponent("AllSubscribeFeed");
  resolveComponent("AllSubscribeFeedActive");
  const _component_CreateRssFolder = resolveComponent("CreateRssFolder");
  const _component_AllArticleIcon = resolveComponent("AllArticleIcon");
  const _component_AllPopup = resolveComponent("AllPopup");
  const _component_AllDialog = resolveComponent("AllDialog");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "rss_container" }, _attrs))}><div class="rss_left_bar"><a href="/my/today"><div class="rss_icon_bg">`);
  _push(ssrRenderComponent(_component_HelloReadLogo, {
    width: 28,
    height: 28
  }, null, _parent));
  _push(`</div></a><div class="rss_icon_bg">`);
  _push(ssrRenderComponent(_component_SideBar, {
    width: 25,
    height: 25
  }, null, _parent));
  _push(`</div><div style="${ssrRenderStyle({ "height": "160px" })}"></div>`);
  _push(ssrRenderComponent(_component_el_tooltip, {
    class: "box-item",
    effect: "dark",
    content: "\u8BA2\u9605\u60A8\u559C\u6B22\u7684\u5185\u5BB9\u6E90",
    placement: "right-start"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a href="/feed/website/ft/1.html"${_scopeId}><div class="rss_icon_bg"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_AddRss, {
          width: 28,
          height: 28
        }, null, _parent2, _scopeId));
        _push2(`</div></a>`);
      } else {
        return [
          createVNode("a", { href: "/feed/website/ft/1.html" }, [
            createVNode("div", { class: "rss_icon_bg" }, [
              createVNode(_component_AddRss, {
                width: 28,
                height: 28
              })
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div style="${ssrRenderStyle({ "flex": "1" })}"></div>`);
  _push(ssrRenderComponent(_component_el_popover, {
    placement: "right",
    width: 290,
    trigger: "click"
  }, {
    reference: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="rss_icon_bg"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_User, {
          width: 28,
          height: 28
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "rss_icon_bg" }, [
            createVNode(_component_User, {
              width: 28,
              height: 28
            })
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="user_info_popover"${_scopeId}>`);
        if (_ctx.isLogined) {
          _push2(`<div style="${ssrRenderStyle({ "display": "flex", "padding-top": "10px", "padding-bottom": "10px", "border-bottom": "1px solid #ccc" })}"${_scopeId}><div${_scopeId}><img style="${ssrRenderStyle({ "width": "28px" })}" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/user.svg"${_scopeId}></div><div style="${ssrRenderStyle({ "margin-left": "10px" })}"${_scopeId}><p class="user_info_name"${_scopeId}>${ssrInterpolate(_ctx.userName)}</p><p class="user_info_desc"${_scopeId}>${ssrInterpolate(_ctx.userAccount)}</p></div></div>`);
        } else {
          _push2(`<!---->`);
        }
        if (!_ctx.isLogined) {
          _push2(`<div style="${ssrRenderStyle({ "display": "flex", "padding-top": "10px", "padding-bottom": "10px", "border-bottom": "1px solid #ccc" })}"${_scopeId}><a href="https://www.hellokit.com.cn/user/login?src=https://reader.hellokit.com.cn" style="${ssrRenderStyle({ "font-size": "18px", "font-weight": "bold" })}"${_scopeId}>\u6CE8\u518C / \u767B\u5F55</a></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div${_scopeId}><a class="user_info_menu" href="/"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_icon, { width: 20 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_WelcomeIcon, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_WelcomeIcon)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<span${_scopeId}>\u6B22\u8FCE\u60A8</span></a><a class="user_info_menu" href="/contact"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_icon, { width: 18 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Service, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Service)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<span${_scopeId}>\u8054\u7CFB\u6211\u4EEC</span></a><a class="user_info_menu" href="/hello-reader-log"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_icon, { width: 18 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Service, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Service)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<span${_scopeId}>\u66F4\u65B0\u65E5\u5FD7</span></a>`);
        {
          _push2(`<!---->`);
        }
        {
          _push2(`<!---->`);
        }
        _push2(`<a class="user_info_menu" href="/about"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_icon, { width: 18 }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_HelloReadLogo, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_HelloReadLogo)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<span${_scopeId}>\u5173\u4E8E\u54C8\u55BD\u9605\u8BFB</span></a>`);
        if (_ctx.isLogined) {
          _push2(`<a class="user_info_menu" href="https://www.hellokit.com.cn/user/logout"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_el_icon, { width: 19 }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_LogoutIcon, null, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_LogoutIcon)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`<span${_scopeId}>\u767B\u51FA</span></a>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "user_info_popover" }, [
            _ctx.isLogined ? (openBlock(), createBlock("div", {
              key: 0,
              style: { "display": "flex", "padding-top": "10px", "padding-bottom": "10px", "border-bottom": "1px solid #ccc" }
            }, [
              createVNode("div", null, [
                createVNode("img", {
                  style: { "width": "28px" },
                  src: "https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/user.svg"
                })
              ]),
              createVNode("div", { style: { "margin-left": "10px" } }, [
                createVNode("p", { class: "user_info_name" }, toDisplayString(_ctx.userName), 1),
                createVNode("p", { class: "user_info_desc" }, toDisplayString(_ctx.userAccount), 1)
              ])
            ])) : createCommentVNode("", true),
            !_ctx.isLogined ? (openBlock(), createBlock("div", {
              key: 1,
              style: { "display": "flex", "padding-top": "10px", "padding-bottom": "10px", "border-bottom": "1px solid #ccc" }
            }, [
              createVNode("a", {
                href: "https://www.hellokit.com.cn/user/login?src=https://reader.hellokit.com.cn",
                style: { "font-size": "18px", "font-weight": "bold" }
              }, "\u6CE8\u518C / \u767B\u5F55")
            ])) : createCommentVNode("", true),
            createVNode("div", null, [
              createVNode("a", {
                class: "user_info_menu",
                href: "/"
              }, [
                createVNode(_component_el_icon, { width: 20 }, {
                  default: withCtx(() => [
                    createVNode(_component_WelcomeIcon)
                  ]),
                  _: 1
                }),
                createVNode("span", null, "\u6B22\u8FCE\u60A8")
              ]),
              createVNode("a", {
                class: "user_info_menu",
                href: "/contact"
              }, [
                createVNode(_component_el_icon, { width: 18 }, {
                  default: withCtx(() => [
                    createVNode(_component_Service)
                  ]),
                  _: 1
                }),
                createVNode("span", null, "\u8054\u7CFB\u6211\u4EEC")
              ]),
              createVNode("a", {
                class: "user_info_menu",
                href: "/hello-reader-log"
              }, [
                createVNode(_component_el_icon, { width: 18 }, {
                  default: withCtx(() => [
                    createVNode(_component_Service)
                  ]),
                  _: 1
                }),
                createVNode("span", null, "\u66F4\u65B0\u65E5\u5FD7")
              ]),
              createCommentVNode("", true),
              createCommentVNode("", true),
              createVNode("a", {
                class: "user_info_menu",
                href: "/about"
              }, [
                createVNode(_component_el_icon, { width: 18 }, {
                  default: withCtx(() => [
                    createVNode(_component_HelloReadLogo)
                  ]),
                  _: 1
                }),
                createVNode("span", null, "\u5173\u4E8E\u54C8\u55BD\u9605\u8BFB")
              ]),
              _ctx.isLogined ? (openBlock(), createBlock("a", {
                key: 2,
                class: "user_info_menu",
                href: "https://www.hellokit.com.cn/user/logout"
              }, [
                createVNode(_component_el_icon, { width: 19 }, {
                  default: withCtx(() => [
                    createVNode(_component_LogoutIcon)
                  ]),
                  _: 1
                }),
                createVNode("span", null, "\u767B\u51FA")
              ])) : createCommentVNode("", true)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div style="${ssrRenderStyle(_ctx.showMiddlePanel ? null : { display: "none" })}" class="rss_middle_bar"><div style="${ssrRenderStyle({ "height": "50px" })}"></div><a class="${ssrRenderClass([{ feed_entry_active: _ctx.isTodayPage }, "middle_entry"])}" href="/my/today">`);
  _push(ssrRenderComponent(_component_Today, {
    width: 18,
    height: 18
  }, null, _parent));
  _push(`<span>\u4ECA\u65E5\u9605\u8BFB</span></a>`);
  {
    _push(`<!---->`);
  }
  _push(`<a href="/my/read-later" class="${ssrRenderClass([{ feed_entry_active: _ctx.isReadLater }, "middle_entry"])}" style="${ssrRenderStyle({ "padding-left": "22px" })}">`);
  _push(ssrRenderComponent(_component_ReadLaterEntry, {
    width: 18,
    height: 18
  }, null, _parent));
  _push(`<span>\u7A0D\u540E\u9605\u8BFB</span></a><a href="/my/already-read" class="${ssrRenderClass([{ feed_entry_active: _ctx.isReaded }, "middle_entry"])}" style="${ssrRenderStyle({ "padding-left": "22px" })}">`);
  _push(ssrRenderComponent(_component_ReadedIcon, {
    width: 18,
    height: 18
  }, null, _parent));
  _push(`<span>\u5DF2\u8BFB\u6587\u7AE0</span></a><div style="${ssrRenderStyle({ "height": "50px" })}"></div><div style="${ssrRenderStyle({ "margin-bottom": "8px" })}"><span style="${ssrRenderStyle({ "display": "inline-block", "padding-left": "16px" })}">\u5DF2\u8BA2\u9605</span></div><a class="${ssrRenderClass([{ feed_entry_active: _ctx.isMyFeed }, "middle_entry"])}" href="/my/all"><div style="${ssrRenderStyle({ "width": "2px" })}"></div>`);
  _push(ssrRenderComponent(_component_el_icon, { size: 18 }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Files, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Files)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span>\u6240\u6709\u5185\u5BB9</span><div style="${ssrRenderStyle({ "flex": "1" })}"></div><span class="folder_number">${ssrInterpolate(_ctx.totalUnreadFeedItemCount == -1 ? "-" : _ctx.totalUnreadFeedItemCount)}</span></a><!--[-->`);
  ssrRenderList(_ctx.folderList, (folderItem, index) => {
    _push(`<div><div class="${ssrRenderClass([{ middle_entry_active: folderItem.isActive }, "middle_entry folder_entry"])}">`);
    if (folderItem.expand == false) {
      _push(ssrRenderComponent(_component_el_icon, {
        onClick: ($event) => _ctx.onToggleFolder(folderItem),
        size: 20,
        style: { "vertical-align": "center" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ArrowRight, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ArrowRight)
            ];
          }
        }),
        _: 2
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    if (folderItem.expand == true) {
      _push(ssrRenderComponent(_component_el_icon, {
        onClick: ($event) => _ctx.onToggleFolder(folderItem),
        size: 20,
        style: { "vertical-align": "center" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ArrowDown, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ArrowDown)
            ];
          }
        }),
        _: 2
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<span>${ssrInterpolate(folderItem.folder_name)}</span><div style="${ssrRenderStyle({ "flex": "1" })}"></div><span class="folder_number">${ssrInterpolate(folderItem.unReadFeedItemCount == -1 ? "-" : folderItem.unReadFeedItemCount)}</span></div>`);
    if (folderItem.expand) {
      _push(`<!--[-->`);
      ssrRenderList(folderItem.feeds, (feed, feedIndex) => {
        _push(`<div><a${ssrRenderAttr("href", "/my/feed/" + feed.feed_id)}><div class="${ssrRenderClass([{ feed_entry_active: feed.isActive }, "middle_entry"])}" style="${ssrRenderStyle({ "padding-left": "48px" })}">`);
        {
          _push(`<!---->`);
        }
        {
          _push(`<!---->`);
        }
        _push(`<img class="feed_icon_img"${ssrRenderAttr("src", feed.icon_url)}><span>${ssrInterpolate(feed.name)}</span><div style="${ssrRenderStyle({ "flex": "1" })}"></div><span class="folder_number">${ssrInterpolate(feed.unreadFeedItemCount == -1 ? "-" : feed.unreadFeedItemCount)}</span></div></a></div>`);
      });
      _push(`<!--]-->`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--><div class="middle_entry" style="${ssrRenderStyle({ "padding-left": "22px" })}">`);
  _push(ssrRenderComponent(_component_CreateRssFolder, {
    width: 18,
    height: 18
  }, null, _parent));
  _push(`<span>\u521B\u5EFA\u6587\u4EF6\u5939</span></div><div style="${ssrRenderStyle({ "height": "50px" })}"></div><a href="/feed-item" class="${ssrRenderClass([{ feed_entry_active: _ctx.isAllFeeds }, "middle_entry"])}">`);
  _push(ssrRenderComponent(_component_AllArticleIcon, {
    width: 18,
    height: 18
  }, null, _parent));
  _push(`<span>\u6240\u6709\u6587\u7AE0</span></a></div><div id="right_content_rootcontainer" class="rss_right">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_AllPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_AllDialog, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-CXeYwCDh.mjs.map
