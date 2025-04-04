import { defineComponent, ref, computed, openBlock, createBlock, unref, mergeProps, withCtx, createElementVNode, normalizeClass, normalizeStyle, resolveDynamicComponent, createCommentVNode, createTextVNode, toDisplayString, createVNode, renderSlot } from 'vue';
import { b as buttonTypes, E as ElButton } from './el-button-3_FG0aY6.mjs';
import { P as question_filled_default, G as addUnit, E as ElIcon } from './index-CXO4VfHa.mjs';
import { a as useTooltipContentProps, E as ElTooltip } from './el-popper-cvaMBS-J.mjs';
import { b as buildProps, w as withInstall, _ as _export_sfc } from './base-CiGMx3WA.mjs';
import { i as iconPropType } from './index-C_KRVs-j.mjs';
import { u as useLocale } from './constants-dJdD8wGz.mjs';
import { e as useNamespace } from './server.mjs';

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

export { ElPopconfirm as E };
//# sourceMappingURL=el-popover-CC-9YRpy.mjs.map
