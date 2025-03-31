import { i as d_arrow_left_default, j as d_arrow_right_default, k as arrow_left_default, n as arrow_right_default, E as ElIcon } from './index-CXO4VfHa.mjs';
import { _ as _export_sfc, d as defineNuxtComponent } from './server.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = defineNuxtComponent({
  components: {
    DArrowLeft: d_arrow_left_default,
    DArrowRight: d_arrow_right_default,
    ArrowLeft: arrow_left_default,
    ArrowRight: arrow_right_default
  },
  props: {
    // 每一页多少条
    countPerPage: {
      type: Number,
      default: 30
    },
    // 一起有多少条
    totalCount: {
      type: Number,
      default: 0
    },
    activeIndex: {
      type: Number,
      default: 0
    },
    baseURL: {
      type: String,
      default: ""
    }
  },
  async asyncData(params) {
    return {};
  },
  mounted() {
  }
}, "$24crtEmymB");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_icon = ElIcon;
  const _component_ArrowLeft = resolveComponent("ArrowLeft");
  const _component_ArrowRight = resolveComponent("ArrowRight");
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "text-align": "center", "display": "flex", "align-items": "center" } }, _attrs))} data-v-b20c250a><a${ssrRenderAttr("href", _ctx.baseURL + "/1.html")} class="page_a_block" data-v-b20c250a>`);
  _push(ssrRenderComponent(_component_el_icon, { size: 16 }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ArrowLeft, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ArrowLeft)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</a><!--[-->`);
  ssrRenderList(parseInt(_ctx.totalCount / _ctx.countPerPage) + (_ctx.totalCount % _ctx.countPerPage == 0 ? 0 : 1), (pageIndex) => {
    _push(`<span style="${ssrRenderStyle(pageIndex > _ctx.activeIndex - 5 && pageIndex < _ctx.activeIndex + 10 ? null : { display: "none" })}" data-v-b20c250a><a class="${ssrRenderClass([{ page_a_block_active: _ctx.activeIndex == pageIndex }, "page_a_block"])}"${ssrRenderAttr("href", _ctx.baseURL + "/" + pageIndex + ".html")} data-v-b20c250a>${ssrInterpolate(pageIndex)}</a></span>`);
  });
  _push(`<!--]--><a${ssrRenderAttr("href", _ctx.baseURL + "/" + (parseInt(_ctx.totalCount / _ctx.countPerPage) + (_ctx.totalCount % _ctx.countPerPage == 0 ? 0 : 1)) + ".html")} class="page_a_block" data-v-b20c250a>`);
  _push(ssrRenderComponent(_component_el_icon, { size: 16 }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ArrowRight, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ArrowRight)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</a></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Pager.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Pager = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b20c250a"]]);

export { Pager as P };
//# sourceMappingURL=Pager-BqwivwxM.mjs.map
