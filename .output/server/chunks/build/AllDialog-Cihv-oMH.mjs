import { e as useNamespace, p as useZIndex, q as useId, B as throwError, k as isBoolean, w as defaultNamespace, d as defineNuxtComponent, h as helper, _ as _export_sfc$1 } from './server.mjs';
import { defineComponent, createVNode, renderSlot, h, inject, computed, openBlock, createElementBlock, unref, normalizeClass, normalizeStyle, createElementVNode, toDisplayString, withCtx, createBlock, resolveDynamicComponent, createCommentVNode, getCurrentInstance, ref, watch, nextTick, useSlots, provide, Transition, withDirectives, mergeProps, createSlots, vShow, useSSRContext, isRef, onScopeDispose, resolveComponent, createTextVNode } from 'vue';
import { b as buildProps, d as definePropType, w as withInstall, _ as _export_sfc } from './base-CiGMx3WA.mjs';
import { NOOP } from '@vue/shared';
import { F as FOCUS_TRAP_INJECTION_KEY, a as ElTeleport, E as ElFocusTrap } from './index-Bn0qoa0Y.mjs';
import { E as ElIcon, G as addUnit, R as hasClass, A as getStyle, B as addClass, S as refresh_left_default, C as removeClass } from './index-CXO4VfHa.mjs';
import { i as iconPropType, C as CloseComponents } from './index-C_KRVs-j.mjs';
import { u as useLocale } from './constants-dJdD8wGz.mjs';
import { c as composeRefs } from './refs-CJvnaIJj.mjs';
import { U as UPDATE_MODEL_EVENT } from './event-DSz0kuqc.mjs';
import { isClient, useTimeoutFn } from '@vueuse/core';
import { isUndefined } from 'lodash-unified';
import { a as useGlobalConfig } from './use-global-config-0TAJExVa.mjs';
import { g as getScrollBarWidth } from './scroll-Hq3mw777.mjs';
import { a as useDeprecated } from './use-form-item-CHqUkINw.mjs';
import { E as ElButton } from './el-button-3_FG0aY6.mjs';
import { e as emitter } from './event-f_DzkNfH.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { E as ElLink } from './el-link-C2xhUqkp.mjs';
import { u as userbiz } from './user-z1s-Jdvw.mjs';

var PatchFlags = /* @__PURE__ */ ((PatchFlags2) => {
  PatchFlags2[PatchFlags2["TEXT"] = 1] = "TEXT";
  PatchFlags2[PatchFlags2["CLASS"] = 2] = "CLASS";
  PatchFlags2[PatchFlags2["STYLE"] = 4] = "STYLE";
  PatchFlags2[PatchFlags2["PROPS"] = 8] = "PROPS";
  PatchFlags2[PatchFlags2["FULL_PROPS"] = 16] = "FULL_PROPS";
  PatchFlags2[PatchFlags2["HYDRATE_EVENTS"] = 32] = "HYDRATE_EVENTS";
  PatchFlags2[PatchFlags2["STABLE_FRAGMENT"] = 64] = "STABLE_FRAGMENT";
  PatchFlags2[PatchFlags2["KEYED_FRAGMENT"] = 128] = "KEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["UNKEYED_FRAGMENT"] = 256] = "UNKEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["NEED_PATCH"] = 512] = "NEED_PATCH";
  PatchFlags2[PatchFlags2["DYNAMIC_SLOTS"] = 1024] = "DYNAMIC_SLOTS";
  PatchFlags2[PatchFlags2["HOISTED"] = -1] = "HOISTED";
  PatchFlags2[PatchFlags2["BAIL"] = -2] = "BAIL";
  return PatchFlags2;
})(PatchFlags || {});
const useDraggable = (targetRef, dragRef, draggable, overflow) => {
  const resetPostion = () => {
    if (targetRef.value) {
      targetRef.value.style.transform = "none";
    }
  };
  return {
    resetPostion
  };
};
const useLockscreen = (trigger, options = {}) => {
  if (!isRef(trigger)) {
    throwError("[useLockscreen]", "You need to pass a ref param to this function");
  }
  const ns = options.ns || useNamespace("popup");
  const hiddenCls = computed(() => ns.bm("parent", "hidden"));
  if (!isClient || hasClass((void 0).body, hiddenCls.value)) {
    return;
  }
  let scrollBarWidth = 0;
  let withoutHiddenClass = false;
  let bodyWidth = "0";
  const cleanup = () => {
    setTimeout(() => {
      removeClass(void 0, hiddenCls.value);
      if (withoutHiddenClass && void 0) {
        (void 0).body.style.width = bodyWidth;
      }
    }, 200);
  };
  watch(trigger, (val) => {
    if (!val) {
      cleanup();
      return;
    }
    withoutHiddenClass = !hasClass((void 0).body, hiddenCls.value);
    if (withoutHiddenClass) {
      bodyWidth = (void 0).body.style.width;
    }
    scrollBarWidth = getScrollBarWidth(ns.namespace.value);
    const bodyHasOverflow = (void 0).documentElement.clientHeight < (void 0).body.scrollHeight;
    const bodyOverflowY = getStyle((void 0).body, "overflowY");
    if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === "scroll") && withoutHiddenClass) {
      (void 0).body.style.width = `calc(100% - ${scrollBarWidth}px)`;
    }
    addClass((void 0).body, hiddenCls.value);
  });
  onScopeDispose(() => cleanup());
};
const useSameTarget = (handleClick) => {
  if (!handleClick) {
    return { onClick: NOOP, onMousedown: NOOP, onMouseup: NOOP };
  }
  let mousedownTarget = false;
  let mouseupTarget = false;
  const onClick = (e) => {
    if (mousedownTarget && mouseupTarget) {
      handleClick(e);
    }
    mousedownTarget = mouseupTarget = false;
  };
  const onMousedown = (e) => {
    mousedownTarget = e.target === e.currentTarget;
  };
  const onMouseup = (e) => {
    mouseupTarget = e.target === e.currentTarget;
  };
  return { onClick, onMousedown, onMouseup };
};
const overlayProps = buildProps({
  mask: {
    type: Boolean,
    default: true
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: definePropType([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: definePropType([String, Number])
  }
});
const overlayEmits = {
  click: (evt) => evt instanceof MouseEvent
};
const BLOCK = "overlay";
var Overlay = defineComponent({
  name: "ElOverlay",
  props: overlayProps,
  emits: overlayEmits,
  setup(props, { slots, emit }) {
    const ns = useNamespace(BLOCK);
    const onMaskClick = (e) => {
      emit("click", e);
    };
    const { onClick, onMousedown, onMouseup } = useSameTarget(props.customMaskEvent ? void 0 : onMaskClick);
    return () => {
      return props.mask ? createVNode("div", {
        class: [ns.b(), props.overlayClass],
        style: {
          zIndex: props.zIndex
        },
        onClick,
        onMousedown,
        onMouseup
      }, [renderSlot(slots, "default")], PatchFlags.STYLE | PatchFlags.CLASS | PatchFlags.PROPS, ["onClick", "onMouseup", "onMousedown"]) : h("div", {
        class: props.overlayClass,
        style: {
          zIndex: props.zIndex,
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }, [renderSlot(slots, "default")]);
    };
  }
});
const ElOverlay = Overlay;
const dialogInjectionKey = Symbol("dialogInjectionKey");
const dialogContentProps = buildProps({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: iconPropType
  },
  draggable: Boolean,
  overflow: Boolean,
  fullscreen: Boolean,
  showClose: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ""
  },
  ariaLevel: {
    type: String,
    default: "2"
  }
});
const dialogContentEmits = {
  close: () => true
};
const __default__$1 = defineComponent({ name: "ElDialogContent" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: dialogContentProps,
  emits: dialogContentEmits,
  setup(__props, { expose }) {
    const props = __props;
    const { t } = useLocale();
    const { Close } = CloseComponents;
    const { dialogRef, headerRef, bodyId, ns, style } = inject(dialogInjectionKey);
    const { focusTrapRef } = inject(FOCUS_TRAP_INJECTION_KEY);
    const dialogKls = computed(() => [
      ns.b(),
      ns.is("fullscreen", props.fullscreen),
      ns.is("draggable", props.draggable),
      ns.is("align-center", props.alignCenter),
      { [ns.m("center")]: props.center }
    ]);
    const composedDialogRef = composeRefs(focusTrapRef, dialogRef);
    computed(() => props.draggable);
    computed(() => props.overflow);
    const { resetPostion } = useDraggable(dialogRef);
    expose({
      resetPostion
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref: unref(composedDialogRef),
        class: normalizeClass(unref(dialogKls)),
        style: normalizeStyle(unref(style)),
        tabindex: "-1"
      }, [
        createElementVNode("header", {
          ref_key: "headerRef",
          ref: headerRef,
          class: normalizeClass([unref(ns).e("header"), { "show-close": _ctx.showClose }])
        }, [
          renderSlot(_ctx.$slots, "header", {}, () => [
            createElementVNode("span", {
              role: "heading",
              "aria-level": _ctx.ariaLevel,
              class: normalizeClass(unref(ns).e("title"))
            }, toDisplayString(_ctx.title), 11, ["aria-level"])
          ]),
          _ctx.showClose ? (openBlock(), createElementBlock("button", {
            key: 0,
            "aria-label": unref(t)("el.dialog.close"),
            class: normalizeClass(unref(ns).e("headerbtn")),
            type: "button",
            onClick: ($event) => _ctx.$emit("close")
          }, [
            createVNode(unref(ElIcon), {
              class: normalizeClass(unref(ns).e("close"))
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.closeIcon || unref(Close))))
              ]),
              _: 1
            }, 8, ["class"])
          ], 10, ["aria-label", "onClick"])) : createCommentVNode("v-if", true)
        ], 2),
        createElementVNode("div", {
          id: unref(bodyId),
          class: normalizeClass(unref(ns).e("body"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 10, ["id"]),
        _ctx.$slots.footer ? (openBlock(), createElementBlock("footer", {
          key: 0,
          class: normalizeClass(unref(ns).e("footer"))
        }, [
          renderSlot(_ctx.$slots, "footer")
        ], 2)) : createCommentVNode("v-if", true)
      ], 6);
    };
  }
});
var ElDialogContent = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "dialog-content.vue"]]);
const dialogProps = buildProps({
  ...dialogContentProps,
  appendToBody: Boolean,
  appendTo: {
    type: definePropType([String, Object]),
    default: "body"
  },
  beforeClose: {
    type: definePropType(Function)
  },
  destroyOnClose: Boolean,
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  modal: {
    type: Boolean,
    default: true
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: Boolean,
  modalClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: Boolean,
  headerAriaLevel: {
    type: String,
    default: "2"
  }
});
const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  [UPDATE_MODEL_EVENT]: (value) => isBoolean(value),
  openAutoFocus: () => true,
  closeAutoFocus: () => true
};
const useDialog = (props, targetRef) => {
  var _a;
  const instance = getCurrentInstance();
  const emit = instance.emit;
  const { nextZIndex } = useZIndex();
  let lastPosition = "";
  const titleId = useId();
  const bodyId = useId();
  const visible = ref(false);
  const closed = ref(false);
  const rendered = ref(false);
  const zIndex = ref((_a = props.zIndex) != null ? _a : nextZIndex());
  let openTimer = void 0;
  let closeTimer = void 0;
  const namespace = useGlobalConfig("namespace", defaultNamespace);
  const style = computed(() => {
    const style2 = {};
    const varPrefix = `--${namespace.value}-dialog`;
    if (!props.fullscreen) {
      if (props.top) {
        style2[`${varPrefix}-margin-top`] = props.top;
      }
      if (props.width) {
        style2[`${varPrefix}-width`] = addUnit(props.width);
      }
    }
    return style2;
  });
  const overlayDialogStyle = computed(() => {
    if (props.alignCenter) {
      return { display: "flex" };
    }
    return {};
  });
  function afterEnter() {
    emit("opened");
  }
  function afterLeave() {
    emit("closed");
    emit(UPDATE_MODEL_EVENT, false);
    if (props.destroyOnClose) {
      rendered.value = false;
    }
  }
  function beforeLeave() {
    emit("close");
  }
  function open() {
    closeTimer == null ? void 0 : closeTimer();
    openTimer == null ? void 0 : openTimer();
    if (props.openDelay && props.openDelay > 0) {
      ({ stop: openTimer } = useTimeoutFn(() => doOpen(), props.openDelay));
    } else {
      doOpen();
    }
  }
  function close() {
    openTimer == null ? void 0 : openTimer();
    closeTimer == null ? void 0 : closeTimer();
    if (props.closeDelay && props.closeDelay > 0) {
      ({ stop: closeTimer } = useTimeoutFn(() => doClose(), props.closeDelay));
    } else {
      doClose();
    }
  }
  function handleClose() {
    function hide(shouldCancel) {
      if (shouldCancel)
        return;
      closed.value = true;
      visible.value = false;
    }
    if (props.beforeClose) {
      props.beforeClose(hide);
    } else {
      close();
    }
  }
  function onModalClick() {
    if (props.closeOnClickModal) {
      handleClose();
    }
  }
  function doOpen() {
    if (!isClient)
      return;
    visible.value = true;
  }
  function doClose() {
    visible.value = false;
  }
  function onOpenAutoFocus() {
    emit("openAutoFocus");
  }
  function onCloseAutoFocus() {
    emit("closeAutoFocus");
  }
  function onFocusoutPrevented(event) {
    var _a2;
    if (((_a2 = event.detail) == null ? void 0 : _a2.focusReason) === "pointer") {
      event.preventDefault();
    }
  }
  if (props.lockScroll) {
    useLockscreen(visible);
  }
  function onCloseRequested() {
    if (props.closeOnPressEscape) {
      handleClose();
    }
  }
  watch(() => props.modelValue, (val) => {
    if (val) {
      closed.value = false;
      open();
      rendered.value = true;
      zIndex.value = isUndefined(props.zIndex) ? nextZIndex() : zIndex.value++;
      nextTick(() => {
        emit("open");
        if (targetRef.value) {
          targetRef.value.scrollTop = 0;
        }
      });
    } else {
      if (visible.value) {
        close();
      }
    }
  });
  watch(() => props.fullscreen, (val) => {
    if (!targetRef.value)
      return;
    if (val) {
      lastPosition = targetRef.value.style.transform;
      targetRef.value.style.transform = "";
    } else {
      targetRef.value.style.transform = lastPosition;
    }
  });
  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    handleClose,
    onModalClick,
    close,
    doClose,
    onOpenAutoFocus,
    onCloseAutoFocus,
    onCloseRequested,
    onFocusoutPrevented,
    titleId,
    bodyId,
    closed,
    style,
    overlayDialogStyle,
    rendered,
    visible,
    zIndex
  };
};
const __default__ = defineComponent({
  name: "ElDialog",
  inheritAttrs: false
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: dialogProps,
  emits: dialogEmits,
  setup(__props, { expose }) {
    const props = __props;
    const slots = useSlots();
    useDeprecated({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, computed(() => !!slots.title));
    const ns = useNamespace("dialog");
    const dialogRef = ref();
    const headerRef = ref();
    const dialogContentRef = ref();
    const {
      visible,
      titleId,
      bodyId,
      style,
      overlayDialogStyle,
      rendered,
      zIndex,
      afterEnter,
      afterLeave,
      beforeLeave,
      handleClose,
      onModalClick,
      onOpenAutoFocus,
      onCloseAutoFocus,
      onCloseRequested,
      onFocusoutPrevented
    } = useDialog(props, dialogRef);
    provide(dialogInjectionKey, {
      dialogRef,
      headerRef,
      bodyId,
      ns,
      rendered,
      style
    });
    const overlayEvent = useSameTarget(onModalClick);
    const draggable = computed(() => props.draggable && !props.fullscreen);
    const resetPostion = () => {
      dialogContentRef.value.resetPostion();
    };
    expose({
      visible,
      dialogContentRef,
      resetPostion
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTeleport), {
        to: _ctx.appendTo,
        disabled: _ctx.appendTo !== "body" ? false : !_ctx.appendToBody
      }, {
        default: withCtx(() => [
          createVNode(Transition, {
            name: "dialog-fade",
            onAfterEnter: unref(afterEnter),
            onAfterLeave: unref(afterLeave),
            onBeforeLeave: unref(beforeLeave),
            persisted: ""
          }, {
            default: withCtx(() => [
              withDirectives(createVNode(unref(ElOverlay), {
                "custom-mask-event": "",
                mask: _ctx.modal,
                "overlay-class": _ctx.modalClass,
                "z-index": unref(zIndex)
              }, {
                default: withCtx(() => [
                  createElementVNode("div", {
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": _ctx.title || void 0,
                    "aria-labelledby": !_ctx.title ? unref(titleId) : void 0,
                    "aria-describedby": unref(bodyId),
                    class: normalizeClass(`${unref(ns).namespace.value}-overlay-dialog`),
                    style: normalizeStyle(unref(overlayDialogStyle)),
                    onClick: unref(overlayEvent).onClick,
                    onMousedown: unref(overlayEvent).onMousedown,
                    onMouseup: unref(overlayEvent).onMouseup
                  }, [
                    createVNode(unref(ElFocusTrap), {
                      loop: "",
                      trapped: unref(visible),
                      "focus-start-el": "container",
                      onFocusAfterTrapped: unref(onOpenAutoFocus),
                      onFocusAfterReleased: unref(onCloseAutoFocus),
                      onFocusoutPrevented: unref(onFocusoutPrevented),
                      onReleaseRequested: unref(onCloseRequested)
                    }, {
                      default: withCtx(() => [
                        unref(rendered) ? (openBlock(), createBlock(ElDialogContent, mergeProps({
                          key: 0,
                          ref_key: "dialogContentRef",
                          ref: dialogContentRef
                        }, _ctx.$attrs, {
                          center: _ctx.center,
                          "align-center": _ctx.alignCenter,
                          "close-icon": _ctx.closeIcon,
                          draggable: unref(draggable),
                          overflow: _ctx.overflow,
                          fullscreen: _ctx.fullscreen,
                          "show-close": _ctx.showClose,
                          title: _ctx.title,
                          "aria-level": _ctx.headerAriaLevel,
                          onClose: unref(handleClose)
                        }), createSlots({
                          header: withCtx(() => [
                            !_ctx.$slots.title ? renderSlot(_ctx.$slots, "header", {
                              key: 0,
                              close: unref(handleClose),
                              titleId: unref(titleId),
                              titleClass: unref(ns).e("title")
                            }) : renderSlot(_ctx.$slots, "title", { key: 1 })
                          ]),
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "default")
                          ]),
                          _: 2
                        }, [
                          _ctx.$slots.footer ? {
                            name: "footer",
                            fn: withCtx(() => [
                              renderSlot(_ctx.$slots, "footer")
                            ])
                          } : void 0
                        ]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "show-close", "title", "aria-level", "onClose"])) : createCommentVNode("v-if", true)
                      ]),
                      _: 3
                    }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                  ], 46, ["aria-label", "aria-labelledby", "aria-describedby", "onClick", "onMousedown", "onMouseup"])
                ]),
                _: 3
              }, 8, ["mask", "overlay-class", "z-index"]), [
                [vShow, unref(visible)]
              ])
            ]),
            _: 3
          }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
        ]),
        _: 3
      }, 8, ["to", "disabled"]);
    };
  }
});
var Dialog = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "dialog.vue"]]);
const ElDialog = withInstall(Dialog);
const _sfc_main$2 = defineNuxtComponent({
  components: {
    RefreshLeft: refresh_left_default
  },
  async asyncData() {
    return {
      dialogVisible: false
    };
  },
  mounted() {
    emitter.on("on_popup_anonymity_warning", (param) => {
      this.show();
    });
  },
  methods: {
    show() {
      this.dialogVisible = true;
    },
    gotoMainPage() {
      helper.saveKV("hellokit.reader.state", "inited");
      setTimeout(() => {
        (void 0).location.href = "/my/today";
      }, 200);
    }
  }
}, "$lE07lWksYK");
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_dialog = ElDialog;
  const _component_el_button = ElButton;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-0a68e204>`);
  _push(ssrRenderComponent(_component_el_dialog, {
    modelValue: _ctx.dialogVisible,
    "onUpdate:modelValue": ($event) => _ctx.dialogVisible = $event,
    title: "\u60A8\u5373\u5C06\u533F\u540D\u4F7F\u7528\u54C8\u55BD\u9605\u8BFB",
    width: "500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div style="${ssrRenderStyle({ "padding": "0px 0px 10px 0px" })}" data-v-0a68e204${_scopeId}><p class="normal" data-v-0a68e204${_scopeId}>\u533F\u540D\u4F7F\u7528\u65F6\uFF0C\u60A8\u7684\u6807\u8BC6\u4FE1\u606F\u5B58\u50A8\u5728\u6D4F\u89C8\u5668\u672C\u5730\u3002</p><p class="danger" data-v-0a68e204${_scopeId}>\u91CD\u88C5\u6D4F\u89C8\u5668\u6216\u8005\u4F7F\u7528\u7B2C\u4E09\u65B9\u8F6F\u4EF6\u6E05\u7406\u6D4F\u89C8\u5668Cookie\u3001\u7F13\u5B58\u7B49\u6709\u53EF\u80FD\u5BFC\u81F4\u8D26\u53F7\u4FE1\u606F\u4E22\u5931\u3002</p><div style="${ssrRenderStyle({ "text-align": "right" })}" data-v-0a68e204${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_button, {
          type: "primary",
          size: "large",
          onClick: _ctx.gotoMainPage
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u6211\u77E5\u9053\u4E86`);
            } else {
              return [
                createTextVNode("\u6211\u77E5\u9053\u4E86")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { style: { "padding": "0px 0px 10px 0px" } }, [
            createVNode("p", { class: "normal" }, "\u533F\u540D\u4F7F\u7528\u65F6\uFF0C\u60A8\u7684\u6807\u8BC6\u4FE1\u606F\u5B58\u50A8\u5728\u6D4F\u89C8\u5668\u672C\u5730\u3002"),
            createVNode("p", { class: "danger" }, "\u91CD\u88C5\u6D4F\u89C8\u5668\u6216\u8005\u4F7F\u7528\u7B2C\u4E09\u65B9\u8F6F\u4EF6\u6E05\u7406\u6D4F\u89C8\u5668Cookie\u3001\u7F13\u5B58\u7B49\u6709\u53EF\u80FD\u5BFC\u81F4\u8D26\u53F7\u4FE1\u606F\u4E22\u5931\u3002"),
            createVNode("div", { style: { "text-align": "right" } }, [
              createVNode(_component_el_button, {
                type: "primary",
                size: "large",
                onClick: _ctx.gotoMainPage
              }, {
                default: withCtx(() => [
                  createTextVNode("\u6211\u77E5\u9053\u4E86")
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
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialog/AnonymityWarning.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AnonymityWarning = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-0a68e204"]]);
const _sfc_main$1 = defineNuxtComponent({
  components: {
    RefreshLeft: refresh_left_default
  },
  async asyncData() {
    return {
      dialogVisible: false,
      errorText: "",
      qrcodeURL: ""
    };
  },
  mounted() {
    emitter.on("on_popup_wechatlogin", (param) => {
      this.show();
    });
  },
  methods: {
    show() {
      this.dialogVisible = true;
      this.loadQRCode();
    },
    handleClose() {
    },
    async loadQRCode() {
      let responseData = await userbiz.getWxLoginURL();
      if (!helper.isResultOk(responseData) || responseData.data.ticket.length == 0) {
        this.errorText = "\u83B7\u53D6\u767B\u5F55\u4E8C\u552F\u7801\u5931\u8D25\u3002";
        return;
      }
      this.ticket = responseData.data.ticket;
      this.url = responseData.data.url;
      this.expireSecond = responseData.data.expire_seconds;
      this.qrcodeURL = "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + responseData.data.ticket;
      this.errorText = "";
      this.checkLoginState();
    },
    async checkLoginState() {
      if (this.dialogVisible == false) {
        return;
      }
      let responseData = await userbiz.fetchWxLoginState(this.ticket);
      if (helper.isResultOk(responseData)) {
        if (responseData.data.state == 1) {
          setTimeout(() => {
            this.checkLoginState();
          }, 500);
        } else if (responseData.data.state == 2) {
          let token = responseData.data.token;
          this.refreshUserInfo(token);
        } else if (responseData.data.state > 2) {
          this.qrcodeURL = "";
          this.errorText = "\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u4E8C\u552F\u7801\u4EE5\u91CD\u8BD5\u3002";
        }
      }
    },
    /*async checkLoginStateImpl(){
        
    },*/
    onRefreshQR() {
      this.loadQRCode();
    },
    async refreshUserInfo(token) {
      let responseData = await userbiz.getMyUserInfoWithToken(token);
      if (!helper.isResultOk(responseData)) {
        this.qrcodeURL = "";
        this.errorText = "\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u4E8C\u552F\u7801\u4EE5\u91CD\u8BD5\u3002";
        return;
      }
      userbiz.saveAuthWithWxCookie(responseData.data.uid, responseData.data.name, responseData.data.mobile, responseData.data.email, responseData.data.wx_open_id, token);
      userbiz.saveLocalUser(responseData.data);
      this.postLoginRedirect();
    },
    postLoginRedirect() {
      helper.saveKV("hellokit.reader.state", "inited");
      setTimeout(() => {
        let src = helper.getK("login_ref_src");
        if (src != null && src != void 0 && src.length > 0) {
          (void 0).location.href = src;
        } else {
          (void 0).location.href = "/";
        }
      }, 50);
    }
  }
}, "$WvC7CNkdmg");
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_dialog = ElDialog;
  const _component_el_icon = ElIcon;
  const _component_RefreshLeft = resolveComponent("RefreshLeft");
  const _component_el_link = ElLink;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-5543374d>`);
  _push(ssrRenderComponent(_component_el_dialog, {
    modelValue: _ctx.dialogVisible,
    "onUpdate:modelValue": ($event) => _ctx.dialogVisible = $event,
    title: "\u4F7F\u7528\u5FAE\u4FE1\u767B\u5F55",
    width: "500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div data-v-5543374d${_scopeId}><div style="${ssrRenderStyle({ "text-align": "center" })}" data-v-5543374d${_scopeId}><div style="${ssrRenderStyle({ "height": "152px", "overflow": "hidden" })}" data-v-5543374d${_scopeId}><div style="${ssrRenderStyle({ "z-index": "100", "border": "1px solid #eee", "width": "150px", "height": "150px", "margin": "0px auto" })}" data-v-5543374d${_scopeId}><img style="${ssrRenderStyle([
          _ctx.qrcodeURL != "" ? null : { display: "none" },
          { "width": "148px", "height": "148px" }
        ])}"${ssrRenderAttr("src", _ctx.qrcodeURL)} data-v-5543374d${_scopeId}>`);
        if (_ctx.qrcodeURL == "" && _ctx.errorText.length == 0) {
          _push2(`<div style="${ssrRenderStyle({ "z-index": "101", "width": "150px", "height": "150px", "text-align": "center", "margin-left": "auto", "margin-right": "auto" })}" data-v-5543374d${_scopeId}>`);
          if (_ctx.qrcodeURL == "") {
            _push2(`<img style="${ssrRenderStyle({ "width": "50px", "height": "50px", "margin-top": "50px", "margin-left": "0px" })}" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/tools/pdf/loading.gif" data-v-5543374d${_scopeId}>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.errorText.length > 0) {
          _push2(`<div style="${ssrRenderStyle({ "z-index": "101", "width": "150px", "height": "150px", "text-align": "center", "margin-left": "auto", "margin-right": "auto" })}" data-v-5543374d${_scopeId}><div style="${ssrRenderStyle({ "height": "50px" })}" data-v-5543374d${_scopeId}></div><span style="${ssrRenderStyle({ "font-size": "60px" })}" data-v-5543374d${_scopeId}>`);
          _push2(ssrRenderComponent(_component_el_icon, null, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_RefreshLeft, null, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_RefreshLeft)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</span></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><p style="${ssrRenderStyle({ "color": "red", "font-size": "14px", "font-weight": "500", "margin-right": "10px" })}" data-v-5543374d${_scopeId}>${ssrInterpolate(_ctx.errorText)}</p><p style="${ssrRenderStyle({ "font-size": "16px", "margin-top": "3px", "margin-bottom": "3px" })}" data-v-5543374d${_scopeId}>\u5FAE\u4FE1\u626B\u7801\u5E76\u5173\u6CE8\u516C\u4F17\u53F7\u5B8C\u6210\u767B\u5F55</p></div><div class="button-container" data-v-5543374d${_scopeId}><div style="${ssrRenderStyle({ "height": "40px", "display": "flex", "justify-content": "center" })}" data-v-5543374d${_scopeId}><div style="${ssrRenderStyle({ "flex": "1" })}" data-v-5543374d${_scopeId}></div>`);
        _push2(ssrRenderComponent(_component_el_link, {
          underline: false,
          type: "primary",
          href: "/user/login",
          style: { "font-size": "14px" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u4F7F\u7528\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55`);
            } else {
              return [
                createTextVNode("\u4F7F\u7528\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<span data-v-5543374d${_scopeId}>\xA0\xA0\xA0\xA0</span>`);
        _push2(ssrRenderComponent(_component_el_link, {
          underline: false,
          type: "primary",
          href: "/user/password/login",
          style: { "font-size": "14px" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u4F7F\u7528\u8D26\u53F7\u5BC6\u7801\u767B\u5F55`);
            } else {
              return [
                createTextVNode("\u4F7F\u7528\u8D26\u53F7\u5BC6\u7801\u767B\u5F55")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("div", { style: { "text-align": "center" } }, [
              createVNode("div", { style: { "height": "152px", "overflow": "hidden" } }, [
                createVNode("div", { style: { "z-index": "100", "border": "1px solid #eee", "width": "150px", "height": "150px", "margin": "0px auto" } }, [
                  withDirectives(createVNode("img", {
                    style: { "width": "148px", "height": "148px" },
                    src: _ctx.qrcodeURL
                  }, null, 8, ["src"]), [
                    [vShow, _ctx.qrcodeURL != ""]
                  ]),
                  _ctx.qrcodeURL == "" && _ctx.errorText.length == 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    style: { "z-index": "101", "width": "150px", "height": "150px", "text-align": "center", "margin-left": "auto", "margin-right": "auto" }
                  }, [
                    _ctx.qrcodeURL == "" ? (openBlock(), createBlock("img", {
                      key: 0,
                      style: { "width": "50px", "height": "50px", "margin-top": "50px", "margin-left": "0px" },
                      src: "https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/tools/pdf/loading.gif"
                    })) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true),
                  _ctx.errorText.length > 0 ? (openBlock(), createBlock("div", {
                    key: 1,
                    onClick: _ctx.onRefreshQR,
                    style: { "z-index": "101", "width": "150px", "height": "150px", "text-align": "center", "margin-left": "auto", "margin-right": "auto" }
                  }, [
                    createVNode("div", { style: { "height": "50px" } }),
                    createVNode("span", { style: { "font-size": "60px" } }, [
                      createVNode(_component_el_icon, null, {
                        default: withCtx(() => [
                          createVNode(_component_RefreshLeft)
                        ]),
                        _: 1
                      })
                    ])
                  ], 8, ["onClick"])) : createCommentVNode("", true)
                ])
              ]),
              createVNode("p", { style: { "color": "red", "font-size": "14px", "font-weight": "500", "margin-right": "10px" } }, toDisplayString(_ctx.errorText), 1),
              createVNode("p", { style: { "font-size": "16px", "margin-top": "3px", "margin-bottom": "3px" } }, "\u5FAE\u4FE1\u626B\u7801\u5E76\u5173\u6CE8\u516C\u4F17\u53F7\u5B8C\u6210\u767B\u5F55")
            ]),
            createVNode("div", { class: "button-container" }, [
              createVNode("div", { style: { "height": "40px", "display": "flex", "justify-content": "center" } }, [
                createVNode("div", { style: { "flex": "1" } }),
                createVNode(_component_el_link, {
                  underline: false,
                  type: "primary",
                  href: "/user/login",
                  style: { "font-size": "14px" }
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u4F7F\u7528\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55")
                  ]),
                  _: 1
                }),
                createVNode("span", null, "\xA0\xA0\xA0\xA0"),
                createVNode(_component_el_link, {
                  underline: false,
                  type: "primary",
                  href: "/user/password/login",
                  style: { "font-size": "14px" }
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u4F7F\u7528\u8D26\u53F7\u5BC6\u7801\u767B\u5F55")
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialog/WechatLoginDialog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const WechatLoginDialog = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-5543374d"]]);
const _sfc_main = defineNuxtComponent({
  components: {
    WechatLoginDialog,
    AnonymityWarning
  },
  async asyncData() {
    return {};
  },
  methods: {}
}, "$Kq7I2U8c2M");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WechatLoginDialog = resolveComponent("WechatLoginDialog");
  const _component_AnonymityWarning = resolveComponent("AnonymityWarning");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_WechatLoginDialog, null, null, _parent));
  _push(ssrRenderComponent(_component_AnonymityWarning, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialog/AllDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AllDialog = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { AllDialog as A, ElOverlay as E, dialogEmits as a, dialogProps as d, useDialog as u };
//# sourceMappingURL=AllDialog-Cihv-oMH.mjs.map
