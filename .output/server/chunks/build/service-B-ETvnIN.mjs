import { E as ElTable, a as ElTableColumn } from './el-table-column-Cy5YW1tD.mjs';
import { _ as _export_sfc, d as defineNuxtComponent } from './server.mjs';
import { b as browser } from './browser-BEZoJCeu.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import 'lodash-unified';
import './el-scrollbar-COSNo7Ps.mjs';
import '@vueuse/core';
import './base-CiGMx3WA.mjs';
import '@vue/shared';
import './el-popper-cvaMBS-J.mjs';
import '@popperjs/core';
import './constants-dJdD8wGz.mjs';
import './index-Bn0qoa0Y.mjs';
import './index-CXO4VfHa.mjs';
import './event-DSz0kuqc.mjs';
import './use-form-item-CHqUkINw.mjs';
import './index-9OLeZljD.mjs';
import 'normalize-wheel-es';
import './objects-MD33mwF0.mjs';
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

const _sfc_main = defineNuxtComponent({
  async asyncData() {
    return {
      isMobile: browser.isMobile(),
      serviceList: [
        { app: "\u6697\u53F7\u5FEB\u4F20", name: "\u5B58\u50A8\u7A7A\u95F4", desc: ["\u5B58\u50A8\u7A7A\u95F4\uFF1A5GB", "\u4F20\u901F\u901F\u5EA6\uFF1A\u65E0\u9650\u5236", "\u6587\u4EF6\u5927\u5C0F\uFF1A\u65E0\u9650\u5236"] },
        { app: "\u4E07\u80FD\u6587\u4EF6\u67E5\u770B", name: "\u5B58\u50A8\u7A7A\u95F4", desc: ["\u5B58\u50A8\u7A7A\u95F4\uFF1A5GB"] },
        { app: "\u9A6C\u514B\u515A\u7B14\u8BB0", name: "\u5B58\u50A8\u7A7A\u95F4", desc: ["\u7B14\u8BB0\u6570\u91CF\uFF1A\u4E0D\u53D7\u9650\u5236", "\u53D1\u5E03\u7B14\u8BB0\uFF1A\u53D7\u9650\u5206\u4EAB"] }
      ]
    };
  }
}, "$r6ds02sGCo");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_table = ElTable;
  const _component_el_table_column = ElTableColumn;
  _push(`<div${ssrRenderAttrs(mergeProps({
    style: { "background-color": "white" },
    class: { pc_tr_container: !_ctx.isMobile, pc_default_inner: !_ctx.isMobile, pc_default_container: !_ctx.isMobile, mobile_tr_container: _ctx.isMobile }
  }, _attrs))}><div class="tool_title_wrapper"><h1>\u7528\u6237\u6743\u76CA</h1></div>`);
  _push(ssrRenderComponent(_component_el_table, {
    data: _ctx.serviceList,
    border: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "app",
          label: "\u5E94\u7528",
          width: "220"
        }, {
          default: withCtx((scope, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p style="${ssrRenderStyle({ "font-size": "18px", "font-weight": "bold" })}"${_scopeId2}>${ssrInterpolate(scope.row.app)}</p>`);
            } else {
              return [
                createVNode("p", { style: { "font-size": "18px", "font-weight": "bold" } }, toDisplayString(scope.row.app), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_table_column, {
          prop: "desc",
          label: "\u5F53\u524D\u6743\u76CA"
        }, {
          default: withCtx((scope, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<ul${_scopeId2}><!--[-->`);
              ssrRenderList(scope.row.desc, (item) => {
                _push3(`<li${_scopeId2}><p style="${ssrRenderStyle({ "font-size": "16px" })}"${_scopeId2}>${ssrInterpolate(item)}</p></li>`);
              });
              _push3(`<!--]--></ul>`);
            } else {
              return [
                createVNode("ul", null, [
                  (openBlock(true), createBlock(Fragment, null, renderList(scope.row.desc, (item) => {
                    return openBlock(), createBlock("li", { key: item }, [
                      createVNode("p", { style: { "font-size": "16px" } }, toDisplayString(item), 1)
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_el_table_column, {
            prop: "app",
            label: "\u5E94\u7528",
            width: "220"
          }, {
            default: withCtx((scope) => [
              createVNode("p", { style: { "font-size": "18px", "font-weight": "bold" } }, toDisplayString(scope.row.app), 1)
            ]),
            _: 1
          }),
          createVNode(_component_el_table_column, {
            prop: "desc",
            label: "\u5F53\u524D\u6743\u76CA"
          }, {
            default: withCtx((scope) => [
              createVNode("ul", null, [
                (openBlock(true), createBlock(Fragment, null, renderList(scope.row.desc, (item) => {
                  return openBlock(), createBlock("li", { key: item }, [
                    createVNode("p", { style: { "font-size": "16px" } }, toDisplayString(item), 1)
                  ]);
                }), 128))
              ])
            ]),
            _: 1
          })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/service.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const service = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { service as default };
//# sourceMappingURL=service-B-ETvnIN.mjs.map
