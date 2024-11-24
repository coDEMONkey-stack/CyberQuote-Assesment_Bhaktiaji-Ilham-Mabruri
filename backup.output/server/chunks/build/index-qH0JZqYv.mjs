import { _ as __nuxt_component_0 } from './nuxt-link-SQoQGqa5.mjs';
import { _ as _sfc_main$1 } from './Card-DC_hmKRW.mjs';
import { ref, withCtx, createTextVNode, unref, openBlock, createBlock, createVNode, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-CexA4LLA.mjs';
import '../_/nitro.mjs';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';
import './server.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@intlify/core-base';
import 'is-https';
import '@iconify/vue';
import './index-CxbB8YZe.mjs';
import '@iconify/utils/lib/css/icon';
import './asyncData-WeAjXoGm.mjs';
import './cookie-qIRfTUpt.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = useAuthStore();
    const isLoading = ref(true);
    const errorMessage = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_VCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-5">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "font-semibold text-2xl",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-gray-500"> Profile Summary </div></div>`);
      _push(ssrRenderComponent(_component_VCard, {
        title: "Bio",
        class: "mb-5",
        "header-class": "bg-[#55335d] text-white rounded-t-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            if (isLoading.value) {
              _push2(`<div class="text-center"${_scopeId}><p${_scopeId}>Loading user data...</p></div>`);
            } else if (errorMessage.value) {
              _push2(`<div class="text-center text-red-500"${_scopeId}><p${_scopeId}>${ssrInterpolate(errorMessage.value)}</p></div>`);
            } else if (unref(auth).user) {
              _push2(`<div class="overflow-x-auto"${_scopeId}><table class="table-auto w-full border-collapse border border-gray-200"${_scopeId}><tbody${_scopeId}><tr${_scopeId}><td class="border border-gray-300 px-4 py-2 font-semibold w-1/3 sm:w-1/4"${_scopeId}> Name </td><td class="border border-gray-300 px-4 py-2"${_scopeId}>${ssrInterpolate((_a = unref(auth).user) == null ? void 0 : _a.name)}</td></tr><tr${_scopeId}><td class="border border-gray-300 px-4 py-2 font-semibold w-1/3 sm:w-1/4"${_scopeId}> Username </td><td class="border border-gray-300 px-4 py-2"${_scopeId}>${ssrInterpolate((_b = unref(auth).user) == null ? void 0 : _b.username)}</td></tr><tr${_scopeId}><td class="border border-gray-300 px-4 py-2 font-semibold w-1/3 sm:w-1/4"${_scopeId}> Email </td><td class="border border-gray-300 px-4 py-2"${_scopeId}>${ssrInterpolate((_c = unref(auth).user) == null ? void 0 : _c.email)}</td></tr></tbody></table></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              isLoading.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "text-center"
              }, [
                createVNode("p", null, "Loading user data...")
              ])) : errorMessage.value ? (openBlock(), createBlock("div", {
                key: 1,
                class: "text-center text-red-500"
              }, [
                createVNode("p", null, toDisplayString(errorMessage.value), 1)
              ])) : unref(auth).user ? (openBlock(), createBlock("div", {
                key: 2,
                class: "overflow-x-auto"
              }, [
                createVNode("table", { class: "table-auto w-full border-collapse border border-gray-200" }, [
                  createVNode("tbody", null, [
                    createVNode("tr", null, [
                      createVNode("td", { class: "border border-gray-300 px-4 py-2 font-semibold w-1/3 sm:w-1/4" }, " Name "),
                      createVNode("td", { class: "border border-gray-300 px-4 py-2" }, toDisplayString((_d = unref(auth).user) == null ? void 0 : _d.name), 1)
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", { class: "border border-gray-300 px-4 py-2 font-semibold w-1/3 sm:w-1/4" }, " Username "),
                      createVNode("td", { class: "border border-gray-300 px-4 py-2" }, toDisplayString((_e = unref(auth).user) == null ? void 0 : _e.username), 1)
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", { class: "border border-gray-300 px-4 py-2 font-semibold w-1/3 sm:w-1/4" }, " Email "),
                      createVNode("td", { class: "border border-gray-300 px-4 py-2" }, toDisplayString((_f = unref(auth).user) == null ? void 0 : _f.email), 1)
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_VCard, {
        title: "Contact",
        class: "mb-5",
        "header-class": "bg-[#55335d] text-white rounded-t-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
          if (_push2) {
            if (isLoading.value) {
              _push2(`<div class="text-center"${_scopeId}><p${_scopeId}>Loading user data...</p></div>`);
            } else if (errorMessage.value) {
              _push2(`<div class="text-center text-red-500"${_scopeId}><p${_scopeId}>${ssrInterpolate(errorMessage.value)}</p></div>`);
            } else if (unref(auth).user) {
              _push2(`<div class="overflow-x-auto"${_scopeId}><table class="table-auto w-full border-collapse border border-gray-200"${_scopeId}><tbody${_scopeId}><tr${_scopeId}><td class="border border-gray-300 px-4 py-2 font-semibold w-1/3 sm:w-1/4"${_scopeId}> Address </td><td class="border border-gray-300 px-4 py-2"${_scopeId}>${ssrInterpolate(((_b = (_a = unref(auth).user) == null ? void 0 : _a.address) == null ? void 0 : _b.street) || "N/A")}, ${ssrInterpolate(((_d = (_c = unref(auth).user) == null ? void 0 : _c.address) == null ? void 0 : _d.suite) || "N/A")}, ${ssrInterpolate(((_f = (_e = unref(auth).user) == null ? void 0 : _e.address) == null ? void 0 : _f.city) || "N/A")} - ${ssrInterpolate(((_h = (_g = unref(auth).user) == null ? void 0 : _g.address) == null ? void 0 : _h.zipcode) || "N/A")} <br${_scopeId}><span class="text-sm text-gray-500"${_scopeId}> Latitude: ${ssrInterpolate(((_k = (_j = (_i = unref(auth).user) == null ? void 0 : _i.address) == null ? void 0 : _j.geo) == null ? void 0 : _k.lat) || "N/A")}, Longitude: ${ssrInterpolate(((_n = (_m = (_l = unref(auth).user) == null ? void 0 : _l.address) == null ? void 0 : _m.geo) == null ? void 0 : _n.lng) || "N/A")}</span></td></tr><tr${_scopeId}><td class="border border-gray-300 px-4 py-2 font-semibold w-1/3 sm:w-1/4"${_scopeId}> Phone </td><td class="border border-gray-300 px-4 py-2"${_scopeId}>${ssrInterpolate((_o = unref(auth).user) == null ? void 0 : _o.phone)}</td></tr></tbody></table></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              isLoading.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "text-center"
              }, [
                createVNode("p", null, "Loading user data...")
              ])) : errorMessage.value ? (openBlock(), createBlock("div", {
                key: 1,
                class: "text-center text-red-500"
              }, [
                createVNode("p", null, toDisplayString(errorMessage.value), 1)
              ])) : unref(auth).user ? (openBlock(), createBlock("div", {
                key: 2,
                class: "overflow-x-auto"
              }, [
                createVNode("table", { class: "table-auto w-full border-collapse border border-gray-200" }, [
                  createVNode("tbody", null, [
                    createVNode("tr", null, [
                      createVNode("td", { class: "border border-gray-300 px-4 py-2 font-semibold w-1/3 sm:w-1/4" }, " Address "),
                      createVNode("td", { class: "border border-gray-300 px-4 py-2" }, [
                        createTextVNode(toDisplayString(((_q = (_p = unref(auth).user) == null ? void 0 : _p.address) == null ? void 0 : _q.street) || "N/A") + ", " + toDisplayString(((_s = (_r = unref(auth).user) == null ? void 0 : _r.address) == null ? void 0 : _s.suite) || "N/A") + ", " + toDisplayString(((_u = (_t = unref(auth).user) == null ? void 0 : _t.address) == null ? void 0 : _u.city) || "N/A") + " - " + toDisplayString(((_w = (_v = unref(auth).user) == null ? void 0 : _v.address) == null ? void 0 : _w.zipcode) || "N/A") + " ", 1),
                        createVNode("br"),
                        createVNode("span", { class: "text-sm text-gray-500" }, " Latitude: " + toDisplayString(((_z = (_y = (_x = unref(auth).user) == null ? void 0 : _x.address) == null ? void 0 : _y.geo) == null ? void 0 : _z.lat) || "N/A") + ", Longitude: " + toDisplayString(((_C = (_B = (_A = unref(auth).user) == null ? void 0 : _A.address) == null ? void 0 : _B.geo) == null ? void 0 : _C.lng) || "N/A"), 1)
                      ])
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", { class: "border border-gray-300 px-4 py-2 font-semibold w-1/3 sm:w-1/4" }, " Phone "),
                      createVNode("td", { class: "border border-gray-300 px-4 py-2" }, toDisplayString((_D = unref(auth).user) == null ? void 0 : _D.phone), 1)
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_VCard, {
        title: "Organization",
        class: "mb-5",
        "header-class": "bg-[#55335d] text-white rounded-t-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            if (isLoading.value) {
              _push2(`<div class="text-center"${_scopeId}><p${_scopeId}>Loading user data...</p></div>`);
            } else if (errorMessage.value) {
              _push2(`<div class="text-center text-red-500"${_scopeId}><p${_scopeId}>${ssrInterpolate(errorMessage.value)}</p></div>`);
            } else if (unref(auth).user) {
              _push2(`<div class="overflow-x-auto"${_scopeId}><table class="table-auto w-full border-collapse border border-gray-200"${_scopeId}><tbody${_scopeId}><tr${_scopeId}><td class="border border-gray-300 px-4 py-2 font-semibold w-1/3 sm:w-1/4"${_scopeId}> Company </td><td class="border border-gray-300 px-4 py-2"${_scopeId}>${ssrInterpolate(((_b = (_a = unref(auth).user) == null ? void 0 : _a.company) == null ? void 0 : _b.name) || "N/A")}</td></tr><tr${_scopeId}><td class="border border-gray-300 px-4 py-2 font-semibold w-1/3 sm:w-1/4"${_scopeId}> Catch Phrase </td><td class="border border-gray-300 px-4 py-2"${_scopeId}>${ssrInterpolate(((_d = (_c = unref(auth).user) == null ? void 0 : _c.company) == null ? void 0 : _d.catchPhrase) || "N/A")}</td></tr><tr${_scopeId}><td class="border border-gray-300 px-4 py-2 font-semibold w-1/3 sm:w-1/4"${_scopeId}> BS </td><td class="border border-gray-300 px-4 py-2"${_scopeId}>${ssrInterpolate(((_f = (_e = unref(auth).user) == null ? void 0 : _e.company) == null ? void 0 : _f.bs) || "N/A")}</td></tr></tbody></table></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              isLoading.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "text-center"
              }, [
                createVNode("p", null, "Loading user data...")
              ])) : errorMessage.value ? (openBlock(), createBlock("div", {
                key: 1,
                class: "text-center text-red-500"
              }, [
                createVNode("p", null, toDisplayString(errorMessage.value), 1)
              ])) : unref(auth).user ? (openBlock(), createBlock("div", {
                key: 2,
                class: "overflow-x-auto"
              }, [
                createVNode("table", { class: "table-auto w-full border-collapse border border-gray-200" }, [
                  createVNode("tbody", null, [
                    createVNode("tr", null, [
                      createVNode("td", { class: "border border-gray-300 px-4 py-2 font-semibold w-1/3 sm:w-1/4" }, " Company "),
                      createVNode("td", { class: "border border-gray-300 px-4 py-2" }, toDisplayString(((_h = (_g = unref(auth).user) == null ? void 0 : _g.company) == null ? void 0 : _h.name) || "N/A"), 1)
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", { class: "border border-gray-300 px-4 py-2 font-semibold w-1/3 sm:w-1/4" }, " Catch Phrase "),
                      createVNode("td", { class: "border border-gray-300 px-4 py-2" }, toDisplayString(((_j = (_i = unref(auth).user) == null ? void 0 : _i.company) == null ? void 0 : _j.catchPhrase) || "N/A"), 1)
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", { class: "border border-gray-300 px-4 py-2 font-semibold w-1/3 sm:w-1/4" }, " BS "),
                      createVNode("td", { class: "border border-gray-300 px-4 py-2" }, toDisplayString(((_l = (_k = unref(auth).user) == null ? void 0 : _k.company) == null ? void 0 : _l.bs) || "N/A"), 1)
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/admin/pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-qH0JZqYv.mjs.map
