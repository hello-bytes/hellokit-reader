import { E as ElDivider } from './el-divider-D3HTy-mk.mjs';
import { E as ElRow, a as ElCol } from './el-col-9gCwzEGq.mjs';
import { F as setting_default, E as ElIcon } from './index-DkfqKprI.mjs';
import { _ as _export_sfc, d as defineNuxtComponent } from './server.mjs';
import { U as User } from './User-CpYILQyt.mjs';
import { e as emitter } from './event-f_DzkNfH.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import './base-BSYjTNA2.mjs';
import 'lodash-unified';
import '@vue/shared';
import './typescript-D6L75muK.mjs';
import '@vueuse/core';
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
import 'mitt';

const _sfc_main = defineNuxtComponent({
  components: {
    Setting: setting_default,
    User
  },
  async asyncData() {
    return {};
  },
  mounted() {
  },
  methods: {
    onGeneralSetting() {
      emitter.emit("on_popup_general_setting", {});
    }
  }
}, "$kr1DDyMBH6");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_divider = ElDivider;
  const _component_el_row = ElRow;
  const _component_el_col = ElCol;
  const _component_el_icon = ElIcon;
  const _component_Setting = resolveComponent("Setting");
  const _component_User = resolveComponent("User");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page_root_container" }, _attrs))} data-v-60f4e33b><h2 class="page_root_title" data-v-60f4e33b>\u8BBE\u7F6E</h2>`);
  _push(ssrRenderComponent(_component_el_divider, null, null, _parent));
  _push(ssrRenderComponent(_component_el_row, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_col, {
          span: 8,
          class: "col_left_block",
          style: { "padding-right": "12px" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="setting_entry_block" data-v-60f4e33b${_scopeId2}><p style="${ssrRenderStyle({ "margin": "0px", "color": "#333333" })}" data-v-60f4e33b${_scopeId2}>\u5E38\u89C4\u8BBE\u7F6E</p>`);
              _push3(ssrRenderComponent(_component_el_icon, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_Setting, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_Setting)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", {
                  class: "setting_entry_block",
                  onClick: ($event) => _ctx.onGeneralSetting()
                }, [
                  createVNode("p", { style: { "margin": "0px", "color": "#333333" } }, "\u5E38\u89C4\u8BBE\u7F6E"),
                  createVNode(_component_el_icon, null, {
                    default: withCtx(() => [
                      createVNode(_component_Setting)
                    ]),
                    _: 1
                  })
                ], 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_col, {
          span: 8,
          class: "col_block"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="setting_entry_block" data-v-60f4e33b${_scopeId2}><p style="${ssrRenderStyle({ "margin": "0px", "color": "#333333" })}" data-v-60f4e33b${_scopeId2}>\u6587\u4EF6\u5939\u7BA1\u7406</p>`);
              _push3(ssrRenderComponent(_component_el_icon, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_User, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_User)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "setting_entry_block" }, [
                  createVNode("p", { style: { "margin": "0px", "color": "#333333" } }, "\u6587\u4EF6\u5939\u7BA1\u7406"),
                  createVNode(_component_el_icon, null, {
                    default: withCtx(() => [
                      createVNode(_component_User)
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_col, {
          span: 8,
          class: "col_right_block"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="setting_entry_block" data-v-60f4e33b${_scopeId2}><p style="${ssrRenderStyle({ "margin": "0px", "color": "#333333" })}" data-v-60f4e33b${_scopeId2}>\u8BA2\u9605\u6E90\u7BA1\u7406</p>`);
              _push3(ssrRenderComponent(_component_el_icon, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_User, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_User)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "setting_entry_block" }, [
                  createVNode("p", { style: { "margin": "0px", "color": "#333333" } }, "\u8BA2\u9605\u6E90\u7BA1\u7406"),
                  createVNode(_component_el_icon, null, {
                    default: withCtx(() => [
                      createVNode(_component_User)
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_col, {
          span: 8,
          class: "col_left_block not_first_line_block"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="setting_entry_block" data-v-60f4e33b${_scopeId2}><p style="${ssrRenderStyle({ "margin": "0px", "color": "#333333" })}" data-v-60f4e33b${_scopeId2}>\u4E2A\u4EBA\u8D44\u6599</p>`);
              _push3(ssrRenderComponent(_component_el_icon, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_User, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_User)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "setting_entry_block" }, [
                  createVNode("p", { style: { "margin": "0px", "color": "#333333" } }, "\u4E2A\u4EBA\u8D44\u6599"),
                  createVNode(_component_el_icon, null, {
                    default: withCtx(() => [
                      createVNode(_component_User)
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_el_col, {
            span: 8,
            class: "col_left_block",
            style: { "padding-right": "12px" }
          }, {
            default: withCtx(() => [
              createVNode("div", {
                class: "setting_entry_block",
                onClick: ($event) => _ctx.onGeneralSetting()
              }, [
                createVNode("p", { style: { "margin": "0px", "color": "#333333" } }, "\u5E38\u89C4\u8BBE\u7F6E"),
                createVNode(_component_el_icon, null, {
                  default: withCtx(() => [
                    createVNode(_component_Setting)
                  ]),
                  _: 1
                })
              ], 8, ["onClick"])
            ]),
            _: 1
          }),
          createVNode(_component_el_col, {
            span: 8,
            class: "col_block"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "setting_entry_block" }, [
                createVNode("p", { style: { "margin": "0px", "color": "#333333" } }, "\u6587\u4EF6\u5939\u7BA1\u7406"),
                createVNode(_component_el_icon, null, {
                  default: withCtx(() => [
                    createVNode(_component_User)
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_el_col, {
            span: 8,
            class: "col_right_block"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "setting_entry_block" }, [
                createVNode("p", { style: { "margin": "0px", "color": "#333333" } }, "\u8BA2\u9605\u6E90\u7BA1\u7406"),
                createVNode(_component_el_icon, null, {
                  default: withCtx(() => [
                    createVNode(_component_User)
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_el_col, {
            span: 8,
            class: "col_left_block not_first_line_block"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "setting_entry_block" }, [
                createVNode("p", { style: { "margin": "0px", "color": "#333333" } }, "\u4E2A\u4EBA\u8D44\u6599"),
                createVNode(_component_el_icon, null, {
                  default: withCtx(() => [
                    createVNode(_component_User)
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my/setting/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-60f4e33b"]]);

export { index as default };
//# sourceMappingURL=index-B2T1Yp6P.mjs.map
