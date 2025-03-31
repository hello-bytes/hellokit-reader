import { E as ElDivider } from './el-divider-D385yaft.mjs';
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, normalizeStyle, renderSlot, toDisplayString, createCommentVNode, createBlock, withCtx, resolveDynamicComponent, ref, TransitionGroup, Fragment, renderList, withKeys, withModifiers, createVNode, inject, shallowRef, provide, toRef, createSlots, mergeProps, useSSRContext, watch, resolveComponent, createTextVNode, isRef, nextTick, reactive, h, Transition, withDirectives, vShow, createApp, toRefs } from 'vue';
import { w as warning_filled_default, o as circle_check_default, q as circle_close_default, a as check_default, t as close_default, E as ElIcon, u as document_default, z as zoom_in_default, v as delete_default, x as upload_filled_default, y as plus_default, s as select_default, g as folder_add_default, h as folder_checked_default, A as getStyle, B as addClass, C as removeClass } from './index-CXO4VfHa.mjs';
import { b as buildProps, d as definePropType, w as withInstall, _ as _export_sfc$1 } from './base-CiGMx3WA.mjs';
import { e as useNamespace, B as throwError, _ as _export_sfc, d as defineNuxtComponent, h as helper, j as devicebiz, o as debugWarn } from './server.mjs';
import { isFunction, isString, NOOP, isArray, isPlainObject, isObject, hyphenate } from '@vue/shared';
import { isNil, cloneDeep, isEqual } from 'lodash-unified';
import { m as mutable } from './typescript-D6L75muK.mjs';
import { u as useLocale } from './constants-dJdD8wGz.mjs';
import { u as useFormDisabled } from './use-form-item-CHqUkINw.mjs';
import { e as entriesOf } from './objects-MD33mwF0.mjs';
import { useVModel, isClient } from '@vueuse/core';
import { E as ElButton } from './el-button-3_FG0aY6.mjs';
import { u as useGlobalComponentSettings } from './use-global-config-0TAJExVa.mjs';
import { E as ElMessage } from './index-5CKSucjx.mjs';
import { i as importbiz } from './import-DUQd4H5-.mjs';
import { e as emitter } from './event-f_DzkNfH.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
import './index-C_KRVs-j.mjs';
import '@ctrl/tinycolor';
import './user-z1s-Jdvw.mjs';
import 'js-cookie';
import 'mitt';

const progressProps = buildProps({
  type: {
    type: String,
    default: "line",
    values: ["line", "circle", "dashboard"]
  },
  percentage: {
    type: Number,
    default: 0,
    validator: (val) => val >= 0 && val <= 100
  },
  status: {
    type: String,
    default: "",
    values: ["", "success", "exception", "warning"]
  },
  indeterminate: Boolean,
  duration: {
    type: Number,
    default: 3
  },
  strokeWidth: {
    type: Number,
    default: 6
  },
  strokeLinecap: {
    type: definePropType(String),
    default: "round"
  },
  textInside: Boolean,
  width: {
    type: Number,
    default: 126
  },
  showText: {
    type: Boolean,
    default: true
  },
  color: {
    type: definePropType([
      String,
      Array,
      Function
    ]),
    default: ""
  },
  striped: Boolean,
  stripedFlow: Boolean,
  format: {
    type: definePropType(Function),
    default: (percentage) => `${percentage}%`
  }
});
const __default__$4 = defineComponent({
  name: "ElProgress"
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: progressProps,
  setup(__props) {
    const props = __props;
    const STATUS_COLOR_MAP = {
      success: "#13ce66",
      exception: "#ff4949",
      warning: "#e6a23c",
      default: "#20a0ff"
    };
    const ns = useNamespace("progress");
    const barStyle = computed(() => {
      const barStyle2 = {
        width: `${props.percentage}%`,
        animationDuration: `${props.duration}s`
      };
      const color = getCurrentColor(props.percentage);
      if (color.includes("gradient")) {
        barStyle2.background = color;
      } else {
        barStyle2.backgroundColor = color;
      }
      return barStyle2;
    });
    const relativeStrokeWidth = computed(() => (props.strokeWidth / props.width * 100).toFixed(1));
    const radius = computed(() => {
      if (["circle", "dashboard"].includes(props.type)) {
        return Number.parseInt(`${50 - Number.parseFloat(relativeStrokeWidth.value) / 2}`, 10);
      }
      return 0;
    });
    const trackPath = computed(() => {
      const r = radius.value;
      const isDashboard = props.type === "dashboard";
      return `
          M 50 50
          m 0 ${isDashboard ? "" : "-"}${r}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "-" : ""}${r * 2}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "" : "-"}${r * 2}
          `;
    });
    const perimeter = computed(() => 2 * Math.PI * radius.value);
    const rate = computed(() => props.type === "dashboard" ? 0.75 : 1);
    const strokeDashoffset = computed(() => {
      const offset = -1 * perimeter.value * (1 - rate.value) / 2;
      return `${offset}px`;
    });
    const trailPathStyle = computed(() => ({
      strokeDasharray: `${perimeter.value * rate.value}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value
    }));
    const circlePathStyle = computed(() => ({
      strokeDasharray: `${perimeter.value * rate.value * (props.percentage / 100)}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    }));
    const stroke = computed(() => {
      let ret;
      if (props.color) {
        ret = getCurrentColor(props.percentage);
      } else {
        ret = STATUS_COLOR_MAP[props.status] || STATUS_COLOR_MAP.default;
      }
      return ret;
    });
    const statusIcon = computed(() => {
      if (props.status === "warning") {
        return warning_filled_default;
      }
      if (props.type === "line") {
        return props.status === "success" ? circle_check_default : circle_close_default;
      } else {
        return props.status === "success" ? check_default : close_default;
      }
    });
    const progressTextSize = computed(() => {
      return props.type === "line" ? 12 + props.strokeWidth * 0.4 : props.width * 0.111111 + 2;
    });
    const content = computed(() => props.format(props.percentage));
    function getColors(color) {
      const span = 100 / color.length;
      const seriesColors = color.map((seriesColor, index) => {
        if (isString(seriesColor)) {
          return {
            color: seriesColor,
            percentage: (index + 1) * span
          };
        }
        return seriesColor;
      });
      return seriesColors.sort((a, b) => a.percentage - b.percentage);
    }
    const getCurrentColor = (percentage) => {
      var _a;
      const { color } = props;
      if (isFunction(color)) {
        return color(percentage);
      } else if (isString(color)) {
        return color;
      } else {
        const colors = getColors(color);
        for (const color2 of colors) {
          if (color2.percentage > percentage)
            return color2.color;
        }
        return (_a = colors[colors.length - 1]) == null ? void 0 : _a.color;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).m(_ctx.type),
          unref(ns).is(_ctx.status),
          {
            [unref(ns).m("without-text")]: !_ctx.showText,
            [unref(ns).m("text-inside")]: _ctx.textInside
          }
        ]),
        role: "progressbar",
        "aria-valuenow": _ctx.percentage,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, [
        _ctx.type === "line" ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns).b("bar"))
        }, [
          createElementVNode("div", {
            class: normalizeClass(unref(ns).be("bar", "outer")),
            style: normalizeStyle({ height: `${_ctx.strokeWidth}px` })
          }, [
            createElementVNode("div", {
              class: normalizeClass([
                unref(ns).be("bar", "inner"),
                { [unref(ns).bem("bar", "inner", "indeterminate")]: _ctx.indeterminate },
                { [unref(ns).bem("bar", "inner", "striped")]: _ctx.striped },
                { [unref(ns).bem("bar", "inner", "striped-flow")]: _ctx.stripedFlow }
              ]),
              style: normalizeStyle(unref(barStyle))
            }, [
              (_ctx.showText || _ctx.$slots.default) && _ctx.textInside ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(unref(ns).be("bar", "innerText"))
              }, [
                renderSlot(_ctx.$slots, "default", { percentage: _ctx.percentage }, () => [
                  createElementVNode("span", null, toDisplayString(unref(content)), 1)
                ])
              ], 2)) : createCommentVNode("v-if", true)
            ], 6)
          ], 6)
        ], 2)) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(unref(ns).b("circle")),
          style: normalizeStyle({ height: `${_ctx.width}px`, width: `${_ctx.width}px` })
        }, [
          (openBlock(), createElementBlock("svg", { viewBox: "0 0 100 100" }, [
            createElementVNode("path", {
              class: normalizeClass(unref(ns).be("circle", "track")),
              d: unref(trackPath),
              stroke: `var(${unref(ns).cssVarName("fill-color-light")}, #e5e9f2)`,
              "stroke-linecap": _ctx.strokeLinecap,
              "stroke-width": unref(relativeStrokeWidth),
              fill: "none",
              style: normalizeStyle(unref(trailPathStyle))
            }, null, 14, ["d", "stroke", "stroke-linecap", "stroke-width"]),
            createElementVNode("path", {
              class: normalizeClass(unref(ns).be("circle", "path")),
              d: unref(trackPath),
              stroke: unref(stroke),
              fill: "none",
              opacity: _ctx.percentage ? 1 : 0,
              "stroke-linecap": _ctx.strokeLinecap,
              "stroke-width": unref(relativeStrokeWidth),
              style: normalizeStyle(unref(circlePathStyle))
            }, null, 14, ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"])
          ]))
        ], 6)),
        (_ctx.showText || _ctx.$slots.default) && !_ctx.textInside ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(unref(ns).e("text")),
          style: normalizeStyle({ fontSize: `${unref(progressTextSize)}px` })
        }, [
          renderSlot(_ctx.$slots, "default", { percentage: _ctx.percentage }, () => [
            !_ctx.status ? (openBlock(), createElementBlock("span", { key: 0 }, toDisplayString(unref(content)), 1)) : (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(statusIcon))))
              ]),
              _: 1
            }))
          ])
        ], 6)) : createCommentVNode("v-if", true)
      ], 10, ["aria-valuenow"]);
    };
  }
});
var Progress = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["__file", "progress.vue"]]);
const ElProgress = withInstall(Progress);
const uploadContextKey = Symbol("uploadContextKey");
const SCOPE$1 = "ElUpload";
class UploadAjaxError extends Error {
  constructor(message, status, method, url) {
    super(message);
    this.name = "UploadAjaxError";
    this.status = status;
    this.method = method;
    this.url = url;
  }
}
function getError(action, option, xhr) {
  let msg;
  if (xhr.response) {
    msg = `${xhr.response.error || xhr.response}`;
  } else if (xhr.responseText) {
    msg = `${xhr.responseText}`;
  } else {
    msg = `fail to ${option.method} ${action} ${xhr.status}`;
  }
  return new UploadAjaxError(msg, xhr.status, option.method, action);
}
function getBody(xhr) {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }
  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}
const ajaxUpload = (option) => {
  throwError(SCOPE$1, "XMLHttpRequest is undefined");
  const xhr = new (void 0)();
  const action = option.action;
  if (xhr.upload) {
    xhr.upload.addEventListener("progress", (evt) => {
      const progressEvt = evt;
      progressEvt.percent = evt.total > 0 ? evt.loaded / evt.total * 100 : 0;
      option.onProgress(progressEvt);
    });
  }
  const formData = new FormData();
  if (option.data) {
    for (const [key, value] of Object.entries(option.data)) {
      if (isArray(value) && value.length)
        formData.append(key, ...value);
      else
        formData.append(key, value);
    }
  }
  formData.append(option.filename, option.file, option.file.name);
  xhr.addEventListener("error", () => {
    option.onError(getError(action, option, xhr));
  });
  xhr.addEventListener("load", () => {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(action, option, xhr));
    }
    option.onSuccess(getBody(xhr));
  });
  xhr.open(option.method, action, true);
  if (option.withCredentials && "withCredentials" in xhr) {
    xhr.withCredentials = true;
  }
  const headers = option.headers || {};
  if (headers instanceof Headers) {
    headers.forEach((value, key) => xhr.setRequestHeader(key, value));
  } else {
    for (const [key, value] of Object.entries(headers)) {
      if (isNil(value))
        continue;
      xhr.setRequestHeader(key, String(value));
    }
  }
  xhr.send(formData);
  return xhr;
};
const uploadListTypes = ["text", "picture", "picture-card"];
let fileId = 1;
const genFileId = () => Date.now() + fileId++;
const uploadBaseProps = buildProps({
  action: {
    type: String,
    default: "#"
  },
  headers: {
    type: definePropType(Object)
  },
  method: {
    type: String,
    default: "post"
  },
  data: {
    type: definePropType([Object, Function, Promise]),
    default: () => mutable({})
  },
  multiple: Boolean,
  name: {
    type: String,
    default: "file"
  },
  drag: Boolean,
  withCredentials: Boolean,
  showFileList: {
    type: Boolean,
    default: true
  },
  accept: {
    type: String,
    default: ""
  },
  fileList: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  autoUpload: {
    type: Boolean,
    default: true
  },
  listType: {
    type: String,
    values: uploadListTypes,
    default: "text"
  },
  httpRequest: {
    type: definePropType(Function),
    default: ajaxUpload
  },
  disabled: Boolean,
  limit: Number
});
const uploadProps = buildProps({
  ...uploadBaseProps,
  beforeUpload: {
    type: definePropType(Function),
    default: NOOP
  },
  beforeRemove: {
    type: definePropType(Function)
  },
  onRemove: {
    type: definePropType(Function),
    default: NOOP
  },
  onChange: {
    type: definePropType(Function),
    default: NOOP
  },
  onPreview: {
    type: definePropType(Function),
    default: NOOP
  },
  onSuccess: {
    type: definePropType(Function),
    default: NOOP
  },
  onProgress: {
    type: definePropType(Function),
    default: NOOP
  },
  onError: {
    type: definePropType(Function),
    default: NOOP
  },
  onExceed: {
    type: definePropType(Function),
    default: NOOP
  },
  crossorigin: {
    type: definePropType(String)
  }
});
const uploadListProps = buildProps({
  files: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  disabled: {
    type: Boolean,
    default: false
  },
  handlePreview: {
    type: definePropType(Function),
    default: NOOP
  },
  listType: {
    type: String,
    values: uploadListTypes,
    default: "text"
  },
  crossorigin: {
    type: definePropType(String)
  }
});
const uploadListEmits = {
  remove: (file) => !!file
};
const __default__$3 = defineComponent({
  name: "ElUploadList"
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: uploadListProps,
  emits: uploadListEmits,
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useLocale();
    const nsUpload = useNamespace("upload");
    const nsIcon = useNamespace("icon");
    const nsList = useNamespace("list");
    const disabled = useFormDisabled();
    const focusing = ref(false);
    const containerKls = computed(() => [
      nsUpload.b("list"),
      nsUpload.bm("list", props.listType),
      nsUpload.is("disabled", props.disabled)
    ]);
    const handleRemove = (file) => {
      emit("remove", file);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(TransitionGroup, {
        tag: "ul",
        class: normalizeClass(unref(containerKls)),
        name: unref(nsList).b()
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.files, (file, index) => {
            return openBlock(), createElementBlock("li", {
              key: file.uid || file.name,
              class: normalizeClass([
                unref(nsUpload).be("list", "item"),
                unref(nsUpload).is(file.status),
                { focusing: focusing.value }
              ]),
              tabindex: "0",
              onKeydown: withKeys(($event) => !unref(disabled) && handleRemove(file), ["delete"]),
              onFocus: ($event) => focusing.value = true,
              onBlur: ($event) => focusing.value = false,
              onClick: ($event) => focusing.value = false
            }, [
              renderSlot(_ctx.$slots, "default", {
                file,
                index
              }, () => [
                _ctx.listType === "picture" || file.status !== "uploading" && _ctx.listType === "picture-card" ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  class: normalizeClass(unref(nsUpload).be("list", "item-thumbnail")),
                  src: file.url,
                  crossorigin: _ctx.crossorigin,
                  alt: ""
                }, null, 10, ["src", "crossorigin"])) : createCommentVNode("v-if", true),
                file.status === "uploading" || _ctx.listType !== "picture-card" ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(unref(nsUpload).be("list", "item-info"))
                }, [
                  createElementVNode("a", {
                    class: normalizeClass(unref(nsUpload).be("list", "item-name")),
                    onClick: withModifiers(($event) => _ctx.handlePreview(file), ["prevent"])
                  }, [
                    createVNode(unref(ElIcon), {
                      class: normalizeClass(unref(nsIcon).m("document"))
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(document_default))
                      ]),
                      _: 1
                    }, 8, ["class"]),
                    createElementVNode("span", {
                      class: normalizeClass(unref(nsUpload).be("list", "item-file-name")),
                      title: file.name
                    }, toDisplayString(file.name), 11, ["title"])
                  ], 10, ["onClick"]),
                  file.status === "uploading" ? (openBlock(), createBlock(unref(ElProgress), {
                    key: 0,
                    type: _ctx.listType === "picture-card" ? "circle" : "line",
                    "stroke-width": _ctx.listType === "picture-card" ? 6 : 2,
                    percentage: Number(file.percentage),
                    style: normalizeStyle(_ctx.listType === "picture-card" ? "" : "margin-top: 0.5rem")
                  }, null, 8, ["type", "stroke-width", "percentage", "style"])) : createCommentVNode("v-if", true)
                ], 2)) : createCommentVNode("v-if", true),
                createElementVNode("label", {
                  class: normalizeClass(unref(nsUpload).be("list", "item-status-label"))
                }, [
                  _ctx.listType === "text" ? (openBlock(), createBlock(unref(ElIcon), {
                    key: 0,
                    class: normalizeClass([unref(nsIcon).m("upload-success"), unref(nsIcon).m("circle-check")])
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(circle_check_default))
                    ]),
                    _: 1
                  }, 8, ["class"])) : ["picture-card", "picture"].includes(_ctx.listType) ? (openBlock(), createBlock(unref(ElIcon), {
                    key: 1,
                    class: normalizeClass([unref(nsIcon).m("upload-success"), unref(nsIcon).m("check")])
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(check_default))
                    ]),
                    _: 1
                  }, 8, ["class"])) : createCommentVNode("v-if", true)
                ], 2),
                !unref(disabled) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 2,
                  class: normalizeClass(unref(nsIcon).m("close")),
                  onClick: ($event) => handleRemove(file)
                }, {
                  default: withCtx(() => [
                    createVNode(unref(close_default))
                  ]),
                  _: 2
                }, 1032, ["class", "onClick"])) : createCommentVNode("v-if", true),
                createCommentVNode(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),
                createCommentVNode(" This is a bug which needs to be fixed "),
                createCommentVNode(" TODO: Fix the incorrect navigation interaction "),
                !unref(disabled) ? (openBlock(), createElementBlock("i", {
                  key: 3,
                  class: normalizeClass(unref(nsIcon).m("close-tip"))
                }, toDisplayString(unref(t)("el.upload.deleteTip")), 3)) : createCommentVNode("v-if", true),
                _ctx.listType === "picture-card" ? (openBlock(), createElementBlock("span", {
                  key: 4,
                  class: normalizeClass(unref(nsUpload).be("list", "item-actions"))
                }, [
                  createElementVNode("span", {
                    class: normalizeClass(unref(nsUpload).be("list", "item-preview")),
                    onClick: ($event) => _ctx.handlePreview(file)
                  }, [
                    createVNode(unref(ElIcon), {
                      class: normalizeClass(unref(nsIcon).m("zoom-in"))
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(zoom_in_default))
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ], 10, ["onClick"]),
                  !unref(disabled) ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: normalizeClass(unref(nsUpload).be("list", "item-delete")),
                    onClick: ($event) => handleRemove(file)
                  }, [
                    createVNode(unref(ElIcon), {
                      class: normalizeClass(unref(nsIcon).m("delete"))
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(delete_default))
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ], 10, ["onClick"])) : createCommentVNode("v-if", true)
                ], 2)) : createCommentVNode("v-if", true)
              ])
            ], 42, ["onKeydown", "onFocus", "onBlur", "onClick"]);
          }), 128)),
          renderSlot(_ctx.$slots, "append")
        ]),
        _: 3
      }, 8, ["class", "name"]);
    };
  }
});
var UploadList = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["__file", "upload-list.vue"]]);
const uploadDraggerProps = buildProps({
  disabled: {
    type: Boolean,
    default: false
  }
});
const uploadDraggerEmits = {
  file: (file) => isArray(file)
};
const COMPONENT_NAME = "ElUploadDrag";
const __default__$2 = defineComponent({
  name: COMPONENT_NAME
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: uploadDraggerProps,
  emits: uploadDraggerEmits,
  setup(__props, { emit }) {
    const uploaderContext = inject(uploadContextKey);
    if (!uploaderContext) {
      throwError(COMPONENT_NAME, "usage: <el-upload><el-upload-dragger /></el-upload>");
    }
    const ns = useNamespace("upload");
    const dragover = ref(false);
    const disabled = useFormDisabled();
    const onDrop = (e) => {
      if (disabled.value)
        return;
      dragover.value = false;
      e.stopPropagation();
      const files = Array.from(e.dataTransfer.files);
      emit("file", files);
    };
    const onDragover = () => {
      if (!disabled.value)
        dragover.value = true;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b("dragger"), unref(ns).is("dragover", dragover.value)]),
        onDrop: withModifiers(onDrop, ["prevent"]),
        onDragover: withModifiers(onDragover, ["prevent"]),
        onDragleave: withModifiers(($event) => dragover.value = false, ["prevent"])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 42, ["onDrop", "onDragover", "onDragleave"]);
    };
  }
});
var UploadDragger = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__file", "upload-dragger.vue"]]);
const uploadContentProps = buildProps({
  ...uploadBaseProps,
  beforeUpload: {
    type: definePropType(Function),
    default: NOOP
  },
  onRemove: {
    type: definePropType(Function),
    default: NOOP
  },
  onStart: {
    type: definePropType(Function),
    default: NOOP
  },
  onSuccess: {
    type: definePropType(Function),
    default: NOOP
  },
  onProgress: {
    type: definePropType(Function),
    default: NOOP
  },
  onError: {
    type: definePropType(Function),
    default: NOOP
  },
  onExceed: {
    type: definePropType(Function),
    default: NOOP
  }
});
const __default__$1 = defineComponent({
  name: "ElUploadContent",
  inheritAttrs: false
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: uploadContentProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("upload");
    const disabled = useFormDisabled();
    const requests = shallowRef({});
    const inputRef = shallowRef();
    const uploadFiles = (files) => {
      if (files.length === 0)
        return;
      const { autoUpload, limit, fileList, multiple, onStart, onExceed } = props;
      if (limit && fileList.length + files.length > limit) {
        onExceed(files, fileList);
        return;
      }
      if (!multiple) {
        files = files.slice(0, 1);
      }
      for (const file of files) {
        const rawFile = file;
        rawFile.uid = genFileId();
        onStart(rawFile);
        if (autoUpload)
          upload(rawFile);
      }
    };
    const upload = async (rawFile) => {
      inputRef.value.value = "";
      if (!props.beforeUpload) {
        return doUpload(rawFile);
      }
      let hookResult;
      let beforeData = {};
      try {
        const originData = props.data;
        const beforeUploadPromise = props.beforeUpload(rawFile);
        beforeData = isPlainObject(props.data) ? cloneDeep(props.data) : props.data;
        hookResult = await beforeUploadPromise;
        if (isPlainObject(props.data) && isEqual(originData, beforeData)) {
          beforeData = cloneDeep(props.data);
        }
      } catch (e) {
        hookResult = false;
      }
      if (hookResult === false) {
        props.onRemove(rawFile);
        return;
      }
      let file = rawFile;
      if (hookResult instanceof Blob) {
        if (hookResult instanceof File) {
          file = hookResult;
        } else {
          file = new File([hookResult], rawFile.name, {
            type: rawFile.type
          });
        }
      }
      doUpload(Object.assign(file, {
        uid: rawFile.uid
      }), beforeData);
    };
    const resolveData = async (data, rawFile) => {
      if (isFunction(data)) {
        return data(rawFile);
      }
      return data;
    };
    const doUpload = async (rawFile, beforeData) => {
      const {
        headers,
        data,
        method,
        withCredentials,
        name: filename,
        action,
        onProgress,
        onSuccess,
        onError,
        httpRequest
      } = props;
      try {
        beforeData = await resolveData(beforeData != null ? beforeData : data, rawFile);
      } catch (e) {
        props.onRemove(rawFile);
        return;
      }
      const { uid } = rawFile;
      const options = {
        headers: headers || {},
        withCredentials,
        file: rawFile,
        data: beforeData,
        method,
        filename,
        action,
        onProgress: (evt) => {
          onProgress(evt, rawFile);
        },
        onSuccess: (res) => {
          onSuccess(res, rawFile);
          delete requests.value[uid];
        },
        onError: (err) => {
          onError(err, rawFile);
          delete requests.value[uid];
        }
      };
      const request = httpRequest(options);
      requests.value[uid] = request;
      if (request instanceof Promise) {
        request.then(options.onSuccess, options.onError);
      }
    };
    const handleChange = (e) => {
      const files = e.target.files;
      if (!files)
        return;
      uploadFiles(Array.from(files));
    };
    const handleClick = () => {
      if (!disabled.value) {
        inputRef.value.value = "";
        inputRef.value.click();
      }
    };
    const handleKeydown = () => {
      handleClick();
    };
    const abort = (file) => {
      const _reqs = entriesOf(requests.value).filter(file ? ([uid]) => String(file.uid) === uid : () => true);
      _reqs.forEach(([uid, req]) => {
        if (req instanceof void 0)
          req.abort();
        delete requests.value[uid];
      });
    };
    expose({
      abort,
      upload
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).m(_ctx.listType),
          unref(ns).is("drag", _ctx.drag),
          unref(ns).is("disabled", unref(disabled))
        ]),
        tabindex: unref(disabled) ? "-1" : "0",
        onClick: handleClick,
        onKeydown: withKeys(withModifiers(handleKeydown, ["self"]), ["enter", "space"])
      }, [
        _ctx.drag ? (openBlock(), createBlock(UploadDragger, {
          key: 0,
          disabled: unref(disabled),
          onFile: uploadFiles
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["disabled"])) : renderSlot(_ctx.$slots, "default", { key: 1 }),
        createElementVNode("input", {
          ref_key: "inputRef",
          ref: inputRef,
          class: normalizeClass(unref(ns).e("input")),
          name: _ctx.name,
          disabled: unref(disabled),
          multiple: _ctx.multiple,
          accept: _ctx.accept,
          type: "file",
          onChange: handleChange,
          onClick: withModifiers(() => {
          }, ["stop"])
        }, null, 42, ["name", "disabled", "multiple", "accept", "onClick"])
      ], 42, ["tabindex", "onKeydown"]);
    };
  }
});
var UploadContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__file", "upload-content.vue"]]);
const SCOPE = "ElUpload";
const revokeFileObjectURL = (file) => {
  var _a;
  if ((_a = file.url) == null ? void 0 : _a.startsWith("blob:")) {
    URL.revokeObjectURL(file.url);
  }
};
const useHandlers = (props, uploadRef) => {
  const uploadFiles = useVModel(props, "fileList", void 0, { passive: true });
  const getFile = (rawFile) => uploadFiles.value.find((file) => file.uid === rawFile.uid);
  function abort(file) {
    var _a;
    (_a = uploadRef.value) == null ? void 0 : _a.abort(file);
  }
  function clearFiles(states = ["ready", "uploading", "success", "fail"]) {
    uploadFiles.value = uploadFiles.value.filter((row) => !states.includes(row.status));
  }
  function removeFile(file) {
    uploadFiles.value = uploadFiles.value.filter((uploadFile) => uploadFile !== file);
  }
  const handleError = (err, rawFile) => {
    const file = getFile(rawFile);
    if (!file)
      return;
    console.error(err);
    file.status = "fail";
    removeFile(file);
    props.onError(err, file, uploadFiles.value);
    props.onChange(file, uploadFiles.value);
  };
  const handleProgress = (evt, rawFile) => {
    const file = getFile(rawFile);
    if (!file)
      return;
    props.onProgress(evt, file, uploadFiles.value);
    file.status = "uploading";
    file.percentage = Math.round(evt.percent);
  };
  const handleSuccess = (response, rawFile) => {
    const file = getFile(rawFile);
    if (!file)
      return;
    file.status = "success";
    file.response = response;
    props.onSuccess(response, file, uploadFiles.value);
    props.onChange(file, uploadFiles.value);
  };
  const handleStart = (file) => {
    if (isNil(file.uid))
      file.uid = genFileId();
    const uploadFile = {
      name: file.name,
      percentage: 0,
      status: "ready",
      size: file.size,
      raw: file,
      uid: file.uid
    };
    if (props.listType === "picture-card" || props.listType === "picture") {
      try {
        uploadFile.url = URL.createObjectURL(file);
      } catch (err) {
        debugWarn(SCOPE, err.message);
        props.onError(err, uploadFile, uploadFiles.value);
      }
    }
    uploadFiles.value = [...uploadFiles.value, uploadFile];
    props.onChange(uploadFile, uploadFiles.value);
  };
  const handleRemove = async (file) => {
    const uploadFile = file instanceof File ? getFile(file) : file;
    if (!uploadFile)
      throwError(SCOPE, "file to be removed not found");
    const doRemove = (file2) => {
      abort(file2);
      removeFile(file2);
      props.onRemove(file2, uploadFiles.value);
      revokeFileObjectURL(file2);
    };
    if (props.beforeRemove) {
      const before = await props.beforeRemove(uploadFile, uploadFiles.value);
      if (before !== false)
        doRemove(uploadFile);
    } else {
      doRemove(uploadFile);
    }
  };
  function submit() {
    uploadFiles.value.filter(({ status }) => status === "ready").forEach(({ raw }) => {
      var _a;
      return raw && ((_a = uploadRef.value) == null ? void 0 : _a.upload(raw));
    });
  }
  watch(() => props.listType, (val) => {
    if (val !== "picture-card" && val !== "picture") {
      return;
    }
    uploadFiles.value = uploadFiles.value.map((file) => {
      const { raw, url } = file;
      if (!url && raw) {
        try {
          file.url = URL.createObjectURL(raw);
        } catch (err) {
          props.onError(err, file, uploadFiles.value);
        }
      }
      return file;
    });
  });
  watch(uploadFiles, (files) => {
    for (const file of files) {
      file.uid || (file.uid = genFileId());
      file.status || (file.status = "success");
    }
  }, { immediate: true, deep: true });
  return {
    uploadFiles,
    abort,
    clearFiles,
    handleError,
    handleProgress,
    handleStart,
    handleSuccess,
    handleRemove,
    submit,
    revokeFileObjectURL
  };
};
const __default__ = defineComponent({
  name: "ElUpload"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: uploadProps,
  setup(__props, { expose }) {
    const props = __props;
    const disabled = useFormDisabled();
    const uploadRef = shallowRef();
    const {
      abort,
      submit,
      clearFiles,
      uploadFiles,
      handleStart,
      handleError,
      handleRemove,
      handleSuccess,
      handleProgress,
      revokeFileObjectURL: revokeFileObjectURL2
    } = useHandlers(props, uploadRef);
    const isPictureCard = computed(() => props.listType === "picture-card");
    const uploadContentProps2 = computed(() => ({
      ...props,
      fileList: uploadFiles.value,
      onStart: handleStart,
      onProgress: handleProgress,
      onSuccess: handleSuccess,
      onError: handleError,
      onRemove: handleRemove
    }));
    provide(uploadContextKey, {
      accept: toRef(props, "accept")
    });
    expose({
      abort,
      submit,
      clearFiles,
      handleStart,
      handleRemove
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        unref(isPictureCard) && _ctx.showFileList ? (openBlock(), createBlock(UploadList, {
          key: 0,
          disabled: unref(disabled),
          "list-type": _ctx.listType,
          files: unref(uploadFiles),
          crossorigin: _ctx.crossorigin,
          "handle-preview": _ctx.onPreview,
          onRemove: unref(handleRemove)
        }, createSlots({
          append: withCtx(() => [
            createVNode(UploadContent, mergeProps({
              ref_key: "uploadRef",
              ref: uploadRef
            }, unref(uploadContentProps2)), {
              default: withCtx(() => [
                _ctx.$slots.trigger ? renderSlot(_ctx.$slots, "trigger", { key: 0 }) : createCommentVNode("v-if", true),
                !_ctx.$slots.trigger && _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : createCommentVNode("v-if", true)
              ]),
              _: 3
            }, 16)
          ]),
          _: 2
        }, [
          _ctx.$slots.file ? {
            name: "default",
            fn: withCtx(({ file, index }) => [
              renderSlot(_ctx.$slots, "file", {
                file,
                index
              })
            ])
          } : void 0
        ]), 1032, ["disabled", "list-type", "files", "crossorigin", "handle-preview", "onRemove"])) : createCommentVNode("v-if", true),
        !unref(isPictureCard) || unref(isPictureCard) && !_ctx.showFileList ? (openBlock(), createBlock(UploadContent, mergeProps({
          key: 1,
          ref_key: "uploadRef",
          ref: uploadRef
        }, unref(uploadContentProps2)), {
          default: withCtx(() => [
            _ctx.$slots.trigger ? renderSlot(_ctx.$slots, "trigger", { key: 0 }) : createCommentVNode("v-if", true),
            !_ctx.$slots.trigger && _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 16)) : createCommentVNode("v-if", true),
        _ctx.$slots.trigger ? renderSlot(_ctx.$slots, "default", { key: 2 }) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "tip"),
        !unref(isPictureCard) && _ctx.showFileList ? (openBlock(), createBlock(UploadList, {
          key: 3,
          disabled: unref(disabled),
          "list-type": _ctx.listType,
          files: unref(uploadFiles),
          crossorigin: _ctx.crossorigin,
          "handle-preview": _ctx.onPreview,
          onRemove: unref(handleRemove)
        }, createSlots({ _: 2 }, [
          _ctx.$slots.file ? {
            name: "default",
            fn: withCtx(({ file, index }) => [
              renderSlot(_ctx.$slots, "file", {
                file,
                index
              })
            ])
          } : void 0
        ]), 1032, ["disabled", "list-type", "files", "crossorigin", "handle-preview", "onRemove"])) : createCommentVNode("v-if", true)
      ]);
    };
  }
});
var Upload = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__file", "upload.vue"]]);
const ElUpload = withInstall(Upload);
function createLoadingComponent(options) {
  let afterLeaveTimer;
  const afterLeaveFlag = ref(false);
  const data = reactive({
    ...options,
    originalPosition: "",
    originalOverflow: "",
    visible: false
  });
  function setText(text) {
    data.text = text;
  }
  function destroySelf() {
    const target = data.parent;
    const ns = vm.ns;
    if (!target.vLoadingAddClassList) {
      let loadingNumber = target.getAttribute("loading-number");
      loadingNumber = Number.parseInt(loadingNumber) - 1;
      if (!loadingNumber) {
        removeClass(target, ns.bm("parent", "relative"));
        target.removeAttribute("loading-number");
      } else {
        target.setAttribute("loading-number", loadingNumber.toString());
      }
      removeClass(target, ns.bm("parent", "hidden"));
    }
    removeElLoadingChild();
    loadingInstance.unmount();
  }
  function removeElLoadingChild() {
    var _a, _b;
    (_b = (_a = vm.$el) == null ? void 0 : _a.parentNode) == null ? void 0 : _b.removeChild(vm.$el);
  }
  function close() {
    var _a;
    if (options.beforeClose && !options.beforeClose())
      return;
    afterLeaveFlag.value = true;
    clearTimeout(afterLeaveTimer);
    afterLeaveTimer = setTimeout(handleAfterLeave, 400);
    data.visible = false;
    (_a = options.closed) == null ? void 0 : _a.call(options);
  }
  function handleAfterLeave() {
    if (!afterLeaveFlag.value)
      return;
    const target = data.parent;
    afterLeaveFlag.value = false;
    target.vLoadingAddClassList = void 0;
    destroySelf();
  }
  const elLoadingComponent = defineComponent({
    name: "ElLoading",
    setup(_, { expose }) {
      const { ns, zIndex } = useGlobalComponentSettings("loading");
      expose({
        ns,
        zIndex
      });
      return () => {
        const svg = data.spinner || data.svg;
        const spinner = h("svg", {
          class: "circular",
          viewBox: data.svgViewBox ? data.svgViewBox : "0 0 50 50",
          ...svg ? { innerHTML: svg } : {}
        }, [
          h("circle", {
            class: "path",
            cx: "25",
            cy: "25",
            r: "20",
            fill: "none"
          })
        ]);
        const spinnerText = data.text ? h("p", { class: ns.b("text") }, [data.text]) : void 0;
        return h(Transition, {
          name: ns.b("fade"),
          onAfterLeave: handleAfterLeave
        }, {
          default: withCtx(() => [
            withDirectives(createVNode("div", {
              style: {
                backgroundColor: data.background || ""
              },
              class: [
                ns.b("mask"),
                data.customClass,
                data.fullscreen ? "is-fullscreen" : ""
              ]
            }, [
              h("div", {
                class: ns.b("spinner")
              }, [spinner, spinnerText])
            ]), [[vShow, data.visible]])
          ])
        });
      };
    }
  });
  const loadingInstance = createApp(elLoadingComponent);
  const vm = loadingInstance.mount((void 0).createElement("div"));
  return {
    ...toRefs(data),
    setText,
    removeElLoadingChild,
    close,
    handleAfterLeave,
    vm,
    get $el() {
      return vm.$el;
    }
  };
}
let fullscreenInstance = void 0;
const Loading = function(options = {}) {
  if (!isClient)
    return void 0;
  const resolved = resolveOptions(options);
  if (resolved.fullscreen && fullscreenInstance) {
    return fullscreenInstance;
  }
  const instance = createLoadingComponent({
    ...resolved,
    closed: () => {
      var _a;
      (_a = resolved.closed) == null ? void 0 : _a.call(resolved);
      if (resolved.fullscreen)
        fullscreenInstance = void 0;
    }
  });
  addStyle(resolved, resolved.parent, instance);
  addClassList(resolved, resolved.parent, instance);
  resolved.parent.vLoadingAddClassList = () => addClassList(resolved, resolved.parent, instance);
  let loadingNumber = resolved.parent.getAttribute("loading-number");
  if (!loadingNumber) {
    loadingNumber = "1";
  } else {
    loadingNumber = `${Number.parseInt(loadingNumber) + 1}`;
  }
  resolved.parent.setAttribute("loading-number", loadingNumber);
  resolved.parent.appendChild(instance.$el);
  nextTick(() => instance.visible.value = resolved.visible);
  if (resolved.fullscreen) {
    fullscreenInstance = instance;
  }
  return instance;
};
const resolveOptions = (options) => {
  var _a, _b, _c, _d;
  let target;
  if (isString(options.target)) {
    target = (_a = (void 0).querySelector(options.target)) != null ? _a : (void 0).body;
  } else {
    target = options.target || (void 0).body;
  }
  return {
    parent: target === (void 0).body || options.body ? (void 0).body : target,
    background: options.background || "",
    svg: options.svg || "",
    svgViewBox: options.svgViewBox || "",
    spinner: options.spinner || false,
    text: options.text || "",
    fullscreen: target === (void 0).body && ((_b = options.fullscreen) != null ? _b : true),
    lock: (_c = options.lock) != null ? _c : false,
    customClass: options.customClass || "",
    visible: (_d = options.visible) != null ? _d : true,
    beforeClose: options.beforeClose,
    closed: options.closed,
    target
  };
};
const addStyle = async (options, parent, instance) => {
  const { nextZIndex } = instance.vm.zIndex || instance.vm._.exposed.zIndex;
  const maskStyle = {};
  if (options.fullscreen) {
    instance.originalPosition.value = getStyle((void 0).body, "position");
    instance.originalOverflow.value = getStyle((void 0).body, "overflow");
    maskStyle.zIndex = nextZIndex();
  } else if (options.parent === (void 0).body) {
    instance.originalPosition.value = getStyle((void 0).body, "position");
    await nextTick();
    for (const property of ["top", "left"]) {
      const scroll = property === "top" ? "scrollTop" : "scrollLeft";
      maskStyle[property] = `${options.target.getBoundingClientRect()[property] + (void 0).body[scroll] + (void 0).documentElement[scroll] - Number.parseInt(getStyle((void 0).body, `margin-${property}`), 10)}px`;
    }
    for (const property of ["height", "width"]) {
      maskStyle[property] = `${options.target.getBoundingClientRect()[property]}px`;
    }
  } else {
    instance.originalPosition.value = getStyle(parent, "position");
  }
  for (const [key, value] of Object.entries(maskStyle)) {
    instance.$el.style[key] = value;
  }
};
const addClassList = (options, parent, instance) => {
  const ns = instance.vm.ns || instance.vm._.exposed.ns;
  if (!["absolute", "fixed", "sticky"].includes(instance.originalPosition.value)) {
    addClass(parent, ns.bm("parent", "relative"));
  } else {
    removeClass(parent, ns.bm("parent", "relative"));
  }
  if (options.fullscreen && options.lock) {
    addClass(parent, ns.bm("parent", "hidden"));
  } else {
    removeClass(parent, ns.bm("parent", "hidden"));
  }
};
const INSTANCE_KEY = Symbol("ElLoading");
const createInstance = (el, binding) => {
  var _a, _b, _c, _d;
  const vm = binding.instance;
  const getBindingProp = (key) => isObject(binding.value) ? binding.value[key] : void 0;
  const resolveExpression = (key) => {
    const data = isString(key) && (vm == null ? void 0 : vm[key]) || key;
    if (data)
      return ref(data);
    else
      return data;
  };
  const getProp = (name) => resolveExpression(getBindingProp(name) || el.getAttribute(`element-loading-${hyphenate(name)}`));
  const fullscreen = (_a = getBindingProp("fullscreen")) != null ? _a : binding.modifiers.fullscreen;
  const options = {
    text: getProp("text"),
    svg: getProp("svg"),
    svgViewBox: getProp("svgViewBox"),
    spinner: getProp("spinner"),
    background: getProp("background"),
    customClass: getProp("customClass"),
    fullscreen,
    target: (_b = getBindingProp("target")) != null ? _b : fullscreen ? void 0 : el,
    body: (_c = getBindingProp("body")) != null ? _c : binding.modifiers.body,
    lock: (_d = getBindingProp("lock")) != null ? _d : binding.modifiers.lock
  };
  el[INSTANCE_KEY] = {
    options,
    instance: Loading(options)
  };
};
const updateOptions = (newOptions, originalOptions) => {
  for (const key of Object.keys(originalOptions)) {
    if (isRef(originalOptions[key]))
      originalOptions[key].value = newOptions[key];
  }
};
const vLoading = {
  mounted(el, binding) {
    if (binding.value) {
      createInstance(el, binding);
    }
  },
  updated(el, binding) {
    const instance = el[INSTANCE_KEY];
    if (binding.oldValue !== binding.value) {
      if (binding.value && !binding.oldValue) {
        createInstance(el, binding);
      } else if (binding.value && binding.oldValue) {
        if (isObject(binding.value))
          updateOptions(binding.value, instance.options);
      } else {
        instance == null ? void 0 : instance.instance.close();
      }
    }
  },
  unmounted(el) {
    var _a;
    (_a = el[INSTANCE_KEY]) == null ? void 0 : _a.instance.close();
    el[INSTANCE_KEY] = null;
  }
};
const _sfc_main = defineNuxtComponent({
  components: {
    UploadFilled: upload_filled_default,
    Plus: plus_default,
    Select: select_default,
    FolderAdd: folder_add_default,
    FolderChecked: folder_checked_default
  },
  async asyncData() {
    return {
      importAlling: false,
      viewType: 1,
      //  1 上传文件 2 loading，加载RSS列表  3 显示RSS列表， 4 解析错误页面
      importedFeeds: [],
      //importedFeeds:[{name:"aa",feed_url:"https://test.com",feedState:{is_subscribe:true}},{name:"aa",feed_url:"https://test.com",feedState:{is_subscribe:false}}],
      fileItem: null,
      uploadPercentage: 0
    };
  },
  mounted() {
    emitter.on("on_import_all", (param) => {
      this.importAllFeedImpl(param.folderObj);
    });
  },
  methods: {
    checkUploadFile(params) {
      this.fileItem = {
        file_id: "",
        name: params.name,
        object_key: "",
        modifyDate: params.lastModifiedDate,
        file_size: params.size,
        lastModified: params.lastModified,
        fileType: params.type,
        fileStatus: 1
      };
      return true;
    },
    async uploadFile(param) {
      try {
        this.uploadPercentage = 0;
        let responseData = await helper.getUploadFileSignParam(devicebiz.getDeviceID(), param.file.name, param.file.size);
        if (!helper.isResultOk(responseData)) {
          return;
        }
        this.fileItem.file_id = responseData.data.id;
        this.uploadFileToAliyun(responseData.data, param);
      } catch (e) {
        param.onError(e);
      }
    },
    uploadFileToAliyun(ossData, param) {
      let aliyunToken = ossData.token;
      try {
        const formData = new FormData();
        let objectKey = "" + aliyunToken.dir + aliyunToken.filename;
        formData.append("key", objectKey);
        formData.append("policy", aliyunToken.policy);
        formData.append("OSSAccessKeyId", aliyunToken.accessid);
        formData.append("success_action_status", "200");
        formData.append("Signature", aliyunToken.signature);
        formData.append("file", param.file);
        const xhr = new (void 0)();
        xhr.open("post", aliyunToken.host);
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            let result = { code: 0, fileID: ossData.id };
            if (result.code == 0) {
              param.onSuccess(result, param.file, param.fileList);
            } else {
              param.onError(result);
            }
          }
        };
        xhr.upload.onprogress = function(event) {
          if (event.lengthComputable) {
            var percent = event.loaded / event.total * 100;
            param.onProgress(percent);
          }
        };
        xhr.send(formData);
      } catch (e) {
        param.onError(e);
      }
    },
    onUploadProgress(event, file, fileList) {
      let uploadPercentage = parseInt(event);
      uploadPercentage = uploadPercentage > 100 ? 100 : uploadPercentage;
      uploadPercentage = uploadPercentage <= 0 ? 0 : uploadPercentage;
      this.uploadPercentage = uploadPercentage;
    },
    async onUploadSuccess(responseData, file, fileList) {
      if (responseData == null) {
        return;
      }
      this.loadRssList();
    },
    async loadRssList() {
      this.viewType = 2;
      await this.loadRssListImpl();
      this.viewType = 3;
    },
    async loadRssListImpl() {
      let responseData = await importbiz.getRssListByFile(this.fileItem.file_id);
      if (!helper.isResultOk(responseData)) {
        ElMessage.error("\u83B7\u53D6\u6587\u4EF6\u7684Feed\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002");
        return;
      }
      let feedURLs = [];
      let importedFeeds = responseData.data;
      for (let index in importedFeeds) {
        feedURLs.push(importedFeeds[index].feed_url);
        importedFeeds[index].feedState = null;
      }
      let checkFeedURLResponse = await importbiz.checkFeedURL(devicebiz.getDeviceID(), feedURLs);
      if (!helper.isResultOk(checkFeedURLResponse)) {
        ElMessage.error("\u83B7\u53D6Feed\u72B6\u6001\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002");
        return;
      }
      let feedURLStates = checkFeedURLResponse.data;
      for (let i in feedURLStates) {
        for (let j in importedFeeds) {
          if (feedURLStates[i].feed_url == importedFeeds[j].feed_url) {
            importedFeeds[j].feedState = feedURLStates[i];
            break;
          }
        }
      }
      this.importedFeeds = importedFeeds;
    },
    importFeed(feedObj) {
      let feedState = feedObj.feedState;
      if (feedState == void 0) {
        return;
      }
      let cloundFeedObj = feedState.feed;
      if (cloundFeedObj != null) {
        cloundFeedObj.folderList = [];
        emitter.emit("on_popup_selectfolder", { currentFeed: cloundFeedObj, action: 1 });
      } else {
        let feed = { feed_id: "0", name: feedObj.name, feed_url: feedObj.feed_url, url: feedObj.url, desc: feedObj.desc, language: feedObj.language };
        emitter.emit("on_popup_selectfolder", { currentFeed: feed, action: 2 });
      }
    },
    importAllFeed() {
      emitter.emit("on_popup_selectfolder", { currentFeed: null, action: 3 });
    },
    async importAllFeedImpl(folderObj) {
      this.importAlling = true;
      let responseData = await importbiz.importAllFeed(devicebiz.getDeviceID(), this.fileItem.file_id, folderObj.folder_id);
      await this.loadRssListImpl();
      if (helper.isResultOk(responseData)) {
        ElMessage.success("\u5BFC\u5165\u6210\u529F\u3002");
      } else {
        ElMessage.success("\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002");
      }
      this.importAlling = false;
    }
  }
}, "$hehGTsFs7l");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_divider = ElDivider;
  const _component_el_upload = ElUpload;
  const _component_el_icon = ElIcon;
  const _component_upload_filled = resolveComponent("upload-filled");
  const _component_el_button = ElButton;
  const _component_FolderAdd = resolveComponent("FolderAdd");
  const _component_FolderChecked = resolveComponent("FolderChecked");
  const _directive_loading = vLoading;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page_root_container" }, _attrs))} data-v-ae0c5709><h2 class="page_root_title" data-v-ae0c5709>\u5BFC\u5165\u5185\u5BB9\u6E90</h2>`);
  _push(ssrRenderComponent(_component_el_divider, null, null, _parent));
  if (_ctx.viewType == 1) {
    _push(`<div data-v-ae0c5709><p data-v-ae0c5709>\u4E0A\u4F20OPML\u6587\u4EF6\uFF0C\u4EE5\u5BFC\u5165\u5185\u5BB9\u6E90\uFF08RSS\u8BA2\u9605\u6E90\uFF09</p>`);
    _push(ssrRenderComponent(_component_el_upload, {
      drag: "",
      name: "elfilename",
      action: "' '",
      "http-request": _ctx.uploadFile,
      "show-file-list": false,
      "before-upload": _ctx.checkUploadFile,
      "on-progress": _ctx.onUploadProgress,
      "on-success": _ctx.onUploadSuccess
    }, {
      tip: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="el-upload__tip" data-v-ae0c5709${_scopeId}></div>`);
        } else {
          return [
            createVNode("div", { class: "el-upload__tip" })
          ];
        }
      }),
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_el_icon, { class: "el-icon--upload" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_upload_filled, null, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_upload_filled)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`<div class="el-upload__text" data-v-ae0c5709${_scopeId}>\u628A\u6587\u4EF6\u62D6\u653E\u81F3\u6B64\u5904 \u6216 <em data-v-ae0c5709${_scopeId}>\u70B9\u51FB\u4EE5\u4E0A\u4F20\u6587\u4EF6</em></div>`);
        } else {
          return [
            createVNode(_component_el_icon, { class: "el-icon--upload" }, {
              default: withCtx(() => [
                createVNode(_component_upload_filled)
              ]),
              _: 1
            }),
            createVNode("div", { class: "el-upload__text" }, [
              createTextVNode("\u628A\u6587\u4EF6\u62D6\u653E\u81F3\u6B64\u5904 \u6216 "),
              createVNode("em", null, "\u70B9\u51FB\u4EE5\u4E0A\u4F20\u6587\u4EF6")
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.viewType == 2) {
    _push(`<div style="${ssrRenderStyle({ "text-align": "center" })}" data-v-ae0c5709><div style="${ssrRenderStyle({ "height": "90px" })}" data-v-ae0c5709></div><img style="${ssrRenderStyle({ "height": "80px" })}" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/loading_v5_black.gif" data-v-ae0c5709><p data-v-ae0c5709>\u6587\u4EF6\u5DF2\u4E0A\u4F20\uFF0C\u6B63\u5728\u89E3\u6790...</p></div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.viewType == 3) {
    _push(`<div data-v-ae0c5709><div style="${ssrRenderStyle({ "text-align": "right", "padding-right": "15px" })}" data-v-ae0c5709>`);
    _push(ssrRenderComponent(_component_el_button, {
      type: "primary",
      onClick: ($event) => _ctx.importAllFeed()
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_el_icon, { size: 18 }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_FolderAdd, null, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_FolderAdd)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`\xA0\u8BA2\u9605\u6240\u6709`);
        } else {
          return [
            createVNode(_component_el_icon, { size: 18 }, {
              default: withCtx(() => [
                createVNode(_component_FolderAdd)
              ]),
              _: 1
            }),
            createTextVNode("\xA0\u8BA2\u9605\u6240\u6709")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><div${ssrRenderAttrs(mergeProps({ style: { "border-top": "1px solid #ddd", "border-left": "1px solid #ddd", "border-right": "1px solid #ddd", "border-radius": "3px", "margin-top": "15px" } }, ssrGetDirectiveProps(_ctx, _directive_loading, _ctx.importAlling)))} data-v-ae0c5709><!--[-->`);
    ssrRenderList(_ctx.importedFeeds, (item, index) => {
      _push(`<div class="feed_state_container" data-v-ae0c5709><div style="${ssrRenderStyle({ "flex": "1" })}" data-v-ae0c5709><p style="${ssrRenderStyle({ "margin": "0px", "font-size": "16px", "font-weight": "500", "color": "rgb(27, 27, 31)" })}" data-v-ae0c5709>${ssrInterpolate(item.name)}</p><a style="${ssrRenderStyle({ "font-size": "14px" })}"${ssrRenderAttr("href", item.feed_url)} target="_blank" data-v-ae0c5709>${ssrInterpolate(item.feed_url)}</a></div><div class="feed_state_container_right" data-v-ae0c5709>`);
      if (item.feedState != null && !item.feedState.is_subscribe) {
        _push(ssrRenderComponent(_component_el_button, {
          onClick: ($event) => _ctx.importFeed(item)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_el_icon, { size: 18 }, {
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
              _push2(`\xA0\u65B0\u589E\u8BA2\u9605`);
            } else {
              return [
                createVNode(_component_el_icon, { size: 18 }, {
                  default: withCtx(() => [
                    createVNode(_component_FolderAdd)
                  ]),
                  _: 1
                }),
                createTextVNode("\xA0\u65B0\u589E\u8BA2\u9605")
              ];
            }
          }),
          _: 2
        }, _parent));
      } else if (item.feedState != null && item.feedState.is_subscribe) {
        _push(ssrRenderComponent(_component_el_button, {
          onClick: ($event) => _ctx.importFeed(item)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_el_icon, { size: 18 }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_FolderChecked, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_FolderChecked)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`\xA0\u4FEE\u6539\u8BA2\u9605`);
            } else {
              return [
                createVNode(_component_el_icon, { size: 18 }, {
                  default: withCtx(() => [
                    createVNode(_component_FolderChecked)
                  ]),
                  _: 1
                }),
                createTextVNode("\xA0\u4FEE\u6539\u8BA2\u9605")
              ];
            }
          }),
          _: 2
        }, _parent));
      } else {
        _push(`<span data-v-ae0c5709>-</span>`);
      }
      _push(`</div></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/import.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _import = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ae0c5709"]]);

export { _import as default };
//# sourceMappingURL=import-B0JGudKU.mjs.map
