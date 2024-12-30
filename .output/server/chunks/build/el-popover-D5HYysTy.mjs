import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, createBlock, withCtx, resolveDynamicComponent, createCommentVNode, renderSlot, ref, mergeProps, createElementVNode, normalizeStyle, createTextVNode, toDisplayString, createVNode } from 'vue';
import { E as ElIcon, P as question_filled_default, H as addUnit } from './index-DkfqKprI.mjs';
import { b as buildProps, w as withInstall, _ as _export_sfc } from './base-BSYjTNA2.mjs';
import { i as iconPropType } from './index-FYQmeljH.mjs';
import { e as useNamespace } from './server.mjs';
import { b as buttonTypes, E as ElButton } from './el-button-KAYtidDM.mjs';
import { a as useTooltipContentProps, E as ElTooltip } from './el-popper-IPLn1IGN.mjs';
import { u as useLocale } from './constants-XLKnfDE9.mjs';

const linkProps = buildProps({
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger", "default"],
    default: "default"
  },
  underline: {
    type: Boolean,
    default: true
  },
  disabled: Boolean,
  href: { type: String, default: "" },
  target: {
    type: String,
    default: "_self"
  },
  icon: {
    type: iconPropType
  }
});
const linkEmits = {
  click: (evt) => evt instanceof MouseEvent
};
const __default__$1 = defineComponent({
  name: "ElLink"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: linkProps,
  emits: linkEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("link");
    const linkKls = computed(() => [
      ns.b(),
      ns.m(props.type),
      ns.is("disabled", props.disabled),
      ns.is("underline", props.underline && !props.disabled)
    ]);
    function handleClick(event) {
      if (!props.disabled)
        emit("click", event);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(unref(linkKls)),
        href: _ctx.disabled || !_ctx.href ? void 0 : _ctx.href,
        target: _ctx.disabled || !_ctx.href ? void 0 : _ctx.target,
        onClick: handleClick
      }, [
        _ctx.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
          ]),
          _: 1
        })) : createCommentVNode("v-if", true),
        _ctx.$slots.default ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(unref(ns).e("inner"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)) : createCommentVNode("v-if", true),
        _ctx.$slots.icon ? renderSlot(_ctx.$slots, "icon", { key: 2 }) : createCommentVNode("v-if", true)
      ], 10, ["href", "target"]);
    };
  }
});
var Link = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "link.vue"]]);
const ElLink = withInstall(Link);
const popconfirmProps = buildProps({
  title: String,
  confirmButtonText: String,
  cancelButtonText: String,
  confirmButtonType: {
    type: String,
    values: buttonTypes,
    default: "primary"
  },
  cancelButtonType: {
    type: String,
    values: buttonTypes,
    default: "text"
  },
  icon: {
    type: iconPropType,
    default: () => question_filled_default
  },
  iconColor: {
    type: String,
    default: "#f90"
  },
  hideIcon: {
    type: Boolean,
    default: false
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  teleported: useTooltipContentProps.teleported,
  persistent: useTooltipContentProps.persistent,
  width: {
    type: [String, Number],
    default: 150
  }
});
const popconfirmEmits = {
  confirm: (e) => e instanceof MouseEvent,
  cancel: (e) => e instanceof MouseEvent
};
const __default__ = defineComponent({
  name: "ElPopconfirm"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: popconfirmProps,
  emits: popconfirmEmits,
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useLocale();
    const ns = useNamespace("popconfirm");
    const tooltipRef = ref();
    const hidePopper = () => {
      var _a, _b;
      (_b = (_a = tooltipRef.value) == null ? void 0 : _a.onClose) == null ? void 0 : _b.call(_a);
    };
    const style = computed(() => {
      return {
        width: addUnit(props.width)
      };
    });
    const confirm = (e) => {
      emit("confirm", e);
      hidePopper();
    };
    const cancel = (e) => {
      emit("cancel", e);
      hidePopper();
    };
    const finalConfirmButtonText = computed(() => props.confirmButtonText || t("el.popconfirm.confirmButtonText"));
    const finalCancelButtonText = computed(() => props.cancelButtonText || t("el.popconfirm.cancelButtonText"));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTooltip), mergeProps({
        ref_key: "tooltipRef",
        ref: tooltipRef,
        trigger: "click",
        effect: "light"
      }, _ctx.$attrs, {
        "popper-class": `${unref(ns).namespace.value}-popover`,
        "popper-style": unref(style),
        teleported: _ctx.teleported,
        "fallback-placements": ["bottom", "top", "right", "left"],
        "hide-after": _ctx.hideAfter,
        persistent: _ctx.persistent
      }), {
        content: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass(unref(ns).b())
          }, [
            createElementVNode("div", {
              class: normalizeClass(unref(ns).e("main"))
            }, [
              !_ctx.hideIcon && _ctx.icon ? (openBlock(), createBlock(unref(ElIcon), {
                key: 0,
                class: normalizeClass(unref(ns).e("icon")),
                style: normalizeStyle({ color: _ctx.iconColor })
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
                ]),
                _: 1
              }, 8, ["class", "style"])) : createCommentVNode("v-if", true),
              createTextVNode(" " + toDisplayString(_ctx.title), 1)
            ], 2),
            createElementVNode("div", {
              class: normalizeClass(unref(ns).e("action"))
            }, [
              createVNode(unref(ElButton), {
                size: "small",
                type: _ctx.cancelButtonType === "text" ? "" : _ctx.cancelButtonType,
                text: _ctx.cancelButtonType === "text",
                onClick: cancel
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(finalCancelButtonText)), 1)
                ]),
                _: 1
              }, 8, ["type", "text"]),
              createVNode(unref(ElButton), {
                size: "small",
                type: _ctx.confirmButtonType === "text" ? "" : _ctx.confirmButtonType,
                text: _ctx.confirmButtonType === "text",
                onClick: confirm
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(finalConfirmButtonText)), 1)
                ]),
                _: 1
              }, 8, ["type", "text"])
            ], 2)
          ], 2)
        ]),
        default: withCtx(() => [
          _ctx.$slots.reference ? renderSlot(_ctx.$slots, "reference", { key: 0 }) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 16, ["popper-class", "popper-style", "teleported", "hide-after", "persistent"]);
    };
  }
});
var Popconfirm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "popconfirm.vue"]]);
const ElPopconfirm = withInstall(Popconfirm);

export { ElLink as E, ElPopconfirm as a };
//# sourceMappingURL=el-popover-D5HYysTy.mjs.map
