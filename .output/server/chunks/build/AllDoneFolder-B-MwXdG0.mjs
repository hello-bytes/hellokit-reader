import { r as refresh_default, D as files_default, E as ElIcon } from './index-DkfqKprI.mjs';
import { E as ElButton } from './el-button-KAYtidDM.mjs';
import { _ as _export_sfc, d as defineNuxtComponent } from './server.mjs';
import { E as EmptyFolder$1, A as AddRssWhite } from './AddRssWhite-C0G9H8dw.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main$1 = defineNuxtComponent({
  components: {
    Refresh: refresh_default,
    EmptyFolder: EmptyFolder$1,
    AddRssWhite
  },
  props: {
    folder: {
      type: Object,
      default: null
    }
  },
  async asyncData() {
    return {};
  },
  methods: {
    addFeedClick() {
      (void 0).location.href = "/feed/website/ft/1.html";
    }
  }
}, "$Rv0TZjEgnA");
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_icon = ElIcon;
  const _component_EmptyFolder = resolveComponent("EmptyFolder", true);
  const _component_el_button = ElButton;
  const _component_AddRssWhite = resolveComponent("AddRssWhite");
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "display": "flex" } }, _attrs))}><div style="${ssrRenderStyle({ "max-width": "800px", "margin": "0px auto" })}"><div style="${ssrRenderStyle({ "text-align": "center", "margin-top": "100px" })}">`);
  _push(ssrRenderComponent(_component_el_icon, { size: 100 }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_EmptyFolder, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_EmptyFolder)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p style="${ssrRenderStyle({ "margin-bottom": "0px", "font-size": "30px" })}">\u672A\u8BA2\u9605\u5185\u5BB9</p><p style="${ssrRenderStyle({ "margin-top": "0px", "margin-bottom": "20px" })}">\u6DFB\u52A0\u60A8\u559C\u6B22\u7684\u5185\u5BB9\u6E90\uFF0C\u5373\u523B\u4E3A\u60A8\u5C55\u73B0\u60A8\u7684\u7CBE\u5F69\u6587\u7AE0\u3002</p>`);
  _push(ssrRenderComponent(_component_el_button, {
    onClick: ($event) => _ctx.addFeedClick(),
    type: "primary",
    size: "large"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_icon, {
          size: 18,
          style: { "color": "#fff" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_AddRssWhite, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_AddRssWhite)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`\xA0\u8BA2\u9605\u5185\u5BB9\u6E90`);
      } else {
        return [
          createVNode(_component_el_icon, {
            size: 18,
            style: { "color": "#fff" }
          }, {
            default: withCtx(() => [
              createVNode(_component_AddRssWhite)
            ]),
            _: 1
          }),
          createTextVNode("\xA0\u8BA2\u9605\u5185\u5BB9\u6E90")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/folder/EmptyFolder.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const EmptyFolder = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineNuxtComponent({
  components: {
    Refresh: refresh_default,
    EmptyFolder: EmptyFolder$1,
    AddRssWhite,
    Files: files_default
  },
  props: {
    folder: {
      type: Object,
      default: null
    }
  },
  async asyncData() {
    return {};
  },
  methods: {
    viewAllFeedItem() {
      this.$emit("viewAllFeedItem", {});
    }
  }
}, "$hpzu6MY5Qt");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_button = ElButton;
  const _component_el_icon = ElIcon;
  const _component_Files = resolveComponent("Files");
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "display": "flex" } }, _attrs))}><div style="${ssrRenderStyle({ "max-width": "800px", "margin": "0px auto" })}"><div style="${ssrRenderStyle({ "text-align": "center", "margin-top": "10px" })}"><img src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/all_done.svg"><p style="${ssrRenderStyle({ "margin-bottom": "0px", "font-size": "30px" })}">\u641E\u5B9A\uFF01</p><p style="${ssrRenderStyle({ "margin-top": "0px", "margin-bottom": "20px" })}">\u592A\u68D2\u4E86\uFF0C\u60A8\u5DF2\u7ECF\u8BFB\u5B8C\u8BA2\u9605\u7684\u6240\u6709\u6587\u7AE0\u4E86\u3002</p>`);
  _push(ssrRenderComponent(_component_el_button, {
    onClick: _ctx.viewAllFeedItem,
    type: "primary",
    size: "large"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_icon, {
          size: 18,
          style: { "color": "#fff" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Files, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Files)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`\xA0\u6D4F\u89C8\u6240\u6709\u6587\u7AE0`);
      } else {
        return [
          createVNode(_component_el_icon, {
            size: 18,
            style: { "color": "#fff" }
          }, {
            default: withCtx(() => [
              createVNode(_component_Files)
            ]),
            _: 1
          }),
          createTextVNode("\xA0\u6D4F\u89C8\u6240\u6709\u6587\u7AE0")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/folder/AllDoneFolder.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AllDoneFolder = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { AllDoneFolder as A, EmptyFolder as E };
//# sourceMappingURL=AllDoneFolder-B-MwXdG0.mjs.map
