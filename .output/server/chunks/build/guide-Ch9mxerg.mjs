import { E as ElDivider } from './el-divider-D3HTy-mk.mjs';
import { E as ElRow, a as ElCol } from './el-col-9gCwzEGq.mjs';
import { E as ElCard } from './el-card-IbMVs2ua.mjs';
import { _ as _export_sfc, d as defineNuxtComponent, h as helper } from './server.mjs';
import { useSSRContext, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import './base-BSYjTNA2.mjs';
import 'lodash-unified';
import '@vue/shared';
import './typescript-D6L75muK.mjs';
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
import '@vueuse/core';

const _sfc_main = defineNuxtComponent({
  async asyncData() {
    return {};
  },
  mounted() {
  },
  methods: {
    onGotoReader() {
      helper.saveKV("hellokit.reader.state", "inited");
      setTimeout(() => {
        (void 0).location.href = "/my/today";
      }, 200);
    }
  }
}, "$C6UTSrWwFM");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_divider = ElDivider;
  const _component_el_row = ElRow;
  const _component_el_col = ElCol;
  const _component_el_card = ElCard;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-80ba83c3><div style="${ssrRenderStyle({ "height": "80px" })}" data-v-80ba83c3></div><div style="${ssrRenderStyle({ "text-align": "center" })}" data-v-80ba83c3><h1 class="brand_title" data-v-80ba83c3>\u54C8\u55BD\xB7\u9605\u8BFB</h1><p style="${ssrRenderStyle({ "font-weight": "500", "font-size": "36px", "text-align": "center", "margin-top": "0px" })}" data-v-80ba83c3>\u6BCF\u4E00\u6B21\u9605\u8BFB\uFF0C\u90FD\u6210\u4E3A\u77E5\u8BC6\u7684\u6DF1\u5EA6\u63A2\u7D22\u4E4B\u65C5\u3002</p><div data-v-80ba83c3><a class="button_link button_link_active" data-v-80ba83c3>\u65E0\u9700\u767B\u5F55\uFF0C\u76F4\u63A5\u4F7F\u7528</a><span data-v-80ba83c3>\xA0\xA0\xA0\xA0\xA0\xA0</span><a class="button_link" href="/feed-item" data-v-80ba83c3>\u5148\u901B\u4E00\u4E0B</a><span data-v-80ba83c3>\xA0\xA0\xA0\xA0\xA0\xA0</span><a class="button_link" href="https://www.hellokit.com.cn/user/login?src=https://reader.hellokit.com/my/today" data-v-80ba83c3>\u767B\u5F55\u8D26\u53F7\uFF0C\u5F00\u542F\u9605\u8BFB</a></div><span style="${ssrRenderStyle({ "margin-top": "15px", "display": "inline-block" })}" data-v-80ba83c3>\u54C8\u55BD\u9605\u8BFB\u57FA\u4E8E\u6D4F\u89C8\u5668\u6307\u7EB9\u81EA\u52A8\u751F\u6210\u60A8\u7684\u4E13\u5C5E\u8D26\u53F7\uFF0C\u4E0D\u7528\u767B\u9646\u5373\u53EF\u4F7F\u7528\u7EDD\u5927\u90E8\u5206\u529F\u80FD\u3002</span></div><div style="${ssrRenderStyle({ "height": "35px" })}" data-v-80ba83c3></div>`);
  _push(ssrRenderComponent(_component_el_divider, null, null, _parent));
  _push(`<div style="${ssrRenderStyle({ "background-color": "white" })}" data-v-80ba83c3><div style="${ssrRenderStyle({ "padding": "35px 0px 60px 0px", "text-align": "center" })}" data-v-80ba83c3><img style="${ssrRenderStyle({ "width": "1024px" })}" src="https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/hellokit.reader.ui.2.png" data-v-80ba83c3></div></div><div style="${ssrRenderStyle({ "background-color": "#eeeeee" })}" data-v-80ba83c3><div style="${ssrRenderStyle({ "padding": "60px 0px", "max-width": "1024px", "margin": "0px auto" })}" data-v-80ba83c3>`);
  _push(ssrRenderComponent(_component_el_row, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_col, {
          span: 12,
          class: "card_left"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_card, null, {
                header: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="card-header" data-v-80ba83c3${_scopeId3}><span class="about_p_title" data-v-80ba83c3${_scopeId3}>\u5185\u5BB9\u7E41\u591A\uFF0C\u8BA2\u9605\u968F\u5FC3</span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "card-header" }, [
                        createVNode("span", { class: "about_p_title" }, "\u5185\u5BB9\u7E41\u591A\uFF0C\u8BA2\u9605\u968F\u5FC3")
                      ])
                    ];
                  }
                }),
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div style="${ssrRenderStyle({ "height": "70px" })}" data-v-80ba83c3${_scopeId3}><p style="${ssrRenderStyle({ "margin-top": "0px" })}" data-v-80ba83c3${_scopeId3}>\u6211\u4EEC\u8BA1\u5212\u652F\u6301\u5927\u7EA6500\u4E2A\u7CBE\u54C1\u5185\u5BB9\u6E90\uFF0C\u53EA\u9700\u8981\u7B80\u5355\u6311\u9009\uFF0C\u5373\u53EF\u6BCF\u65E5\u83B7\u53D6\u7CBE\u54C1\u5185\u5BB9\u3002</p></div>`);
                  } else {
                    return [
                      createVNode("div", { style: { "height": "70px" } }, [
                        createVNode("p", { style: { "margin-top": "0px" } }, "\u6211\u4EEC\u8BA1\u5212\u652F\u6301\u5927\u7EA6500\u4E2A\u7CBE\u54C1\u5185\u5BB9\u6E90\uFF0C\u53EA\u9700\u8981\u7B80\u5355\u6311\u9009\uFF0C\u5373\u53EF\u6BCF\u65E5\u83B7\u53D6\u7CBE\u54C1\u5185\u5BB9\u3002")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_el_card, null, {
                  header: withCtx(() => [
                    createVNode("div", { class: "card-header" }, [
                      createVNode("span", { class: "about_p_title" }, "\u5185\u5BB9\u7E41\u591A\uFF0C\u8BA2\u9605\u968F\u5FC3")
                    ])
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { style: { "height": "70px" } }, [
                      createVNode("p", { style: { "margin-top": "0px" } }, "\u6211\u4EEC\u8BA1\u5212\u652F\u6301\u5927\u7EA6500\u4E2A\u7CBE\u54C1\u5185\u5BB9\u6E90\uFF0C\u53EA\u9700\u8981\u7B80\u5355\u6311\u9009\uFF0C\u5373\u53EF\u6BCF\u65E5\u83B7\u53D6\u7CBE\u54C1\u5185\u5BB9\u3002")
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_col, {
          span: 12,
          class: "card_right"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_card, null, {
                header: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="card-header" data-v-80ba83c3${_scopeId3}><span class="about_p_title" data-v-80ba83c3${_scopeId3}>\u9690\u59D3\u57CB\u540D\uFF0C\u7545\u4EAB\u8F6F\u4EF6</span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "card-header" }, [
                        createVNode("span", { class: "about_p_title" }, "\u9690\u59D3\u57CB\u540D\uFF0C\u7545\u4EAB\u8F6F\u4EF6")
                      ])
                    ];
                  }
                }),
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div style="${ssrRenderStyle({ "height": "70px" })}" data-v-80ba83c3${_scopeId3}><p style="${ssrRenderStyle({ "margin-top": "0px" })}" data-v-80ba83c3${_scopeId3}>\u771F\u6B63\u7684\u652F\u6301\u5F00\u7BB1\u5373\u7528\u3002\u6211\u4EEC\u63A8\u8350\u6CE8\u518C\uFF0C\u4EE5\u786E\u4FDD\u60A8\u7684\u6570\u636E\u4E0D\u56E0\u672C\u5730\u73AF\u5883\u7684\u53D8\u5316\u800C\u4E22\u5931\u3002\u4F46\u4E5F\u652F\u6301\u533F\u540D\u4F7F\u7528\u3002</p></div>`);
                  } else {
                    return [
                      createVNode("div", { style: { "height": "70px" } }, [
                        createVNode("p", { style: { "margin-top": "0px" } }, "\u771F\u6B63\u7684\u652F\u6301\u5F00\u7BB1\u5373\u7528\u3002\u6211\u4EEC\u63A8\u8350\u6CE8\u518C\uFF0C\u4EE5\u786E\u4FDD\u60A8\u7684\u6570\u636E\u4E0D\u56E0\u672C\u5730\u73AF\u5883\u7684\u53D8\u5316\u800C\u4E22\u5931\u3002\u4F46\u4E5F\u652F\u6301\u533F\u540D\u4F7F\u7528\u3002")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_el_card, null, {
                  header: withCtx(() => [
                    createVNode("div", { class: "card-header" }, [
                      createVNode("span", { class: "about_p_title" }, "\u9690\u59D3\u57CB\u540D\uFF0C\u7545\u4EAB\u8F6F\u4EF6")
                    ])
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { style: { "height": "70px" } }, [
                      createVNode("p", { style: { "margin-top": "0px" } }, "\u771F\u6B63\u7684\u652F\u6301\u5F00\u7BB1\u5373\u7528\u3002\u6211\u4EEC\u63A8\u8350\u6CE8\u518C\uFF0C\u4EE5\u786E\u4FDD\u60A8\u7684\u6570\u636E\u4E0D\u56E0\u672C\u5730\u73AF\u5883\u7684\u53D8\u5316\u800C\u4E22\u5931\u3002\u4F46\u4E5F\u652F\u6301\u533F\u540D\u4F7F\u7528\u3002")
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_col, {
          span: 12,
          class: "card_left"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_card, null, {
                header: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="card-header" data-v-80ba83c3${_scopeId3}><span class="about_p_title" data-v-80ba83c3${_scopeId3}>\u6BCF\u65E5\u63A8\u9001\uFF0C\u65E5\u65E5\u7FFB\u5377</span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "card-header" }, [
                        createVNode("span", { class: "about_p_title" }, "\u6BCF\u65E5\u63A8\u9001\uFF0C\u65E5\u65E5\u7FFB\u5377")
                      ])
                    ];
                  }
                }),
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div style="${ssrRenderStyle({ "height": "70px" })}" data-v-80ba83c3${_scopeId3}><p style="${ssrRenderStyle({ "margin-top": "0px" })}" data-v-80ba83c3${_scopeId3}>\u6839\u636E\u60A8\u7684\u8BA2\u9605\uFF0C\u6574\u7406\u51FA\u6BCF\u65E5\u5FC5\u8BFB\uFF0C\u671F\u671B\u60A8\u65E5\u65E5\u7FFB\u5377\u3001\u6D1E\u89C1\u5E38\u65B0\u3002</p></div>`);
                  } else {
                    return [
                      createVNode("div", { style: { "height": "70px" } }, [
                        createVNode("p", { style: { "margin-top": "0px" } }, "\u6839\u636E\u60A8\u7684\u8BA2\u9605\uFF0C\u6574\u7406\u51FA\u6BCF\u65E5\u5FC5\u8BFB\uFF0C\u671F\u671B\u60A8\u65E5\u65E5\u7FFB\u5377\u3001\u6D1E\u89C1\u5E38\u65B0\u3002")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_el_card, null, {
                  header: withCtx(() => [
                    createVNode("div", { class: "card-header" }, [
                      createVNode("span", { class: "about_p_title" }, "\u6BCF\u65E5\u63A8\u9001\uFF0C\u65E5\u65E5\u7FFB\u5377")
                    ])
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { style: { "height": "70px" } }, [
                      createVNode("p", { style: { "margin-top": "0px" } }, "\u6839\u636E\u60A8\u7684\u8BA2\u9605\uFF0C\u6574\u7406\u51FA\u6BCF\u65E5\u5FC5\u8BFB\uFF0C\u671F\u671B\u60A8\u65E5\u65E5\u7FFB\u5377\u3001\u6D1E\u89C1\u5E38\u65B0\u3002")
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_col, {
          span: 12,
          class: "card_right"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_card, null, {
                header: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="card-header" data-v-80ba83c3${_scopeId3}><span class="about_p_title" data-v-80ba83c3${_scopeId3}>\u7A0D\u540E\u9605\u8BFB\u3001\u7BC7\u7BC7\u5FC5\u8BFB</span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "card-header" }, [
                        createVNode("span", { class: "about_p_title" }, "\u7A0D\u540E\u9605\u8BFB\u3001\u7BC7\u7BC7\u5FC5\u8BFB")
                      ])
                    ];
                  }
                }),
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div style="${ssrRenderStyle({ "height": "70px" })}" data-v-80ba83c3${_scopeId3}><p style="${ssrRenderStyle({ "margin-top": "0px" })}" data-v-80ba83c3${_scopeId3}>\u6211\u4EEC\u7406\u89E3\u60A8\u7684\u5FD9\u788C\u53C8\u5B9D\u8D35\u7684\u65F6\u95F4\u3002\u65F6\u95F4\u4E0D\u591F\u65F6\uFF0C\u53EA\u9700\u52A0\u5165\u201C\u7A0D\u540E\u9605\u8BFB\u201D\u5373\u53EF\u6765\u65E5\u518D\u4F1A\u3002</p></div>`);
                  } else {
                    return [
                      createVNode("div", { style: { "height": "70px" } }, [
                        createVNode("p", { style: { "margin-top": "0px" } }, "\u6211\u4EEC\u7406\u89E3\u60A8\u7684\u5FD9\u788C\u53C8\u5B9D\u8D35\u7684\u65F6\u95F4\u3002\u65F6\u95F4\u4E0D\u591F\u65F6\uFF0C\u53EA\u9700\u52A0\u5165\u201C\u7A0D\u540E\u9605\u8BFB\u201D\u5373\u53EF\u6765\u65E5\u518D\u4F1A\u3002")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_el_card, null, {
                  header: withCtx(() => [
                    createVNode("div", { class: "card-header" }, [
                      createVNode("span", { class: "about_p_title" }, "\u7A0D\u540E\u9605\u8BFB\u3001\u7BC7\u7BC7\u5FC5\u8BFB")
                    ])
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { style: { "height": "70px" } }, [
                      createVNode("p", { style: { "margin-top": "0px" } }, "\u6211\u4EEC\u7406\u89E3\u60A8\u7684\u5FD9\u788C\u53C8\u5B9D\u8D35\u7684\u65F6\u95F4\u3002\u65F6\u95F4\u4E0D\u591F\u65F6\uFF0C\u53EA\u9700\u52A0\u5165\u201C\u7A0D\u540E\u9605\u8BFB\u201D\u5373\u53EF\u6765\u65E5\u518D\u4F1A\u3002")
                    ])
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
          createVNode(_component_el_col, {
            span: 12,
            class: "card_left"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_card, null, {
                header: withCtx(() => [
                  createVNode("div", { class: "card-header" }, [
                    createVNode("span", { class: "about_p_title" }, "\u5185\u5BB9\u7E41\u591A\uFF0C\u8BA2\u9605\u968F\u5FC3")
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { style: { "height": "70px" } }, [
                    createVNode("p", { style: { "margin-top": "0px" } }, "\u6211\u4EEC\u8BA1\u5212\u652F\u6301\u5927\u7EA6500\u4E2A\u7CBE\u54C1\u5185\u5BB9\u6E90\uFF0C\u53EA\u9700\u8981\u7B80\u5355\u6311\u9009\uFF0C\u5373\u53EF\u6BCF\u65E5\u83B7\u53D6\u7CBE\u54C1\u5185\u5BB9\u3002")
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_el_col, {
            span: 12,
            class: "card_right"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_card, null, {
                header: withCtx(() => [
                  createVNode("div", { class: "card-header" }, [
                    createVNode("span", { class: "about_p_title" }, "\u9690\u59D3\u57CB\u540D\uFF0C\u7545\u4EAB\u8F6F\u4EF6")
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { style: { "height": "70px" } }, [
                    createVNode("p", { style: { "margin-top": "0px" } }, "\u771F\u6B63\u7684\u652F\u6301\u5F00\u7BB1\u5373\u7528\u3002\u6211\u4EEC\u63A8\u8350\u6CE8\u518C\uFF0C\u4EE5\u786E\u4FDD\u60A8\u7684\u6570\u636E\u4E0D\u56E0\u672C\u5730\u73AF\u5883\u7684\u53D8\u5316\u800C\u4E22\u5931\u3002\u4F46\u4E5F\u652F\u6301\u533F\u540D\u4F7F\u7528\u3002")
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_el_col, {
            span: 12,
            class: "card_left"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_card, null, {
                header: withCtx(() => [
                  createVNode("div", { class: "card-header" }, [
                    createVNode("span", { class: "about_p_title" }, "\u6BCF\u65E5\u63A8\u9001\uFF0C\u65E5\u65E5\u7FFB\u5377")
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { style: { "height": "70px" } }, [
                    createVNode("p", { style: { "margin-top": "0px" } }, "\u6839\u636E\u60A8\u7684\u8BA2\u9605\uFF0C\u6574\u7406\u51FA\u6BCF\u65E5\u5FC5\u8BFB\uFF0C\u671F\u671B\u60A8\u65E5\u65E5\u7FFB\u5377\u3001\u6D1E\u89C1\u5E38\u65B0\u3002")
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_el_col, {
            span: 12,
            class: "card_right"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_card, null, {
                header: withCtx(() => [
                  createVNode("div", { class: "card-header" }, [
                    createVNode("span", { class: "about_p_title" }, "\u7A0D\u540E\u9605\u8BFB\u3001\u7BC7\u7BC7\u5FC5\u8BFB")
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { style: { "height": "70px" } }, [
                    createVNode("p", { style: { "margin-top": "0px" } }, "\u6211\u4EEC\u7406\u89E3\u60A8\u7684\u5FD9\u788C\u53C8\u5B9D\u8D35\u7684\u65F6\u95F4\u3002\u65F6\u95F4\u4E0D\u591F\u65F6\uFF0C\u53EA\u9700\u52A0\u5165\u201C\u7A0D\u540E\u9605\u8BFB\u201D\u5373\u53EF\u6765\u65E5\u518D\u4F1A\u3002")
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div style="${ssrRenderStyle({ "background-color": "white" })}" data-v-80ba83c3><div style="${ssrRenderStyle({ "padding": "30px 0px 30px 0px", "text-align": "center" })}" data-v-80ba83c3><span data-v-80ba83c3>Copyright\xA9 2013-2023 All Rights Reserved \u4EACICP\u59072023019179\u53F7-7 \u4EAC\u516C\u7F51\u5B89\u5907 11010502044969\u53F7</span></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/guide.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const guide = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-80ba83c3"]]);

export { guide as default };
//# sourceMappingURL=guide-Ch9mxerg.mjs.map
