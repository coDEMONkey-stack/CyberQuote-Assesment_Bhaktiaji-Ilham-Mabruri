import { _ as __nuxt_component_0 } from './nuxt-link-SQoQGqa5.mjs';
import { _ as _sfc_main$1 } from './Card-DC_hmKRW.mjs';
import { defineComponent, ref, withCtx, createTextVNode, unref, openBlock, createBlock, createVNode, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
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
            _push2(` Not VIP `);
          } else {
            return [
              createTextVNode(" Not VIP ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-gray-500"> Profile Status </div></div>`);
      _push(ssrRenderComponent(_component_VCard, {
        icon: "solar:forbidden-bold-duotone",
        "icon-class": "w-[70px] h-[70px] text-red-500",
        class: "mb-5",
        "header-class": "border-none text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (isLoading.value) {
              _push2(`<div class="text-center"${_scopeId}><p${_scopeId}>Loading user data...</p></div>`);
            } else if (errorMessage.value) {
              _push2(`<div class="text-center text-red-500"${_scopeId}><p${_scopeId}>${ssrInterpolate(errorMessage.value)}</p></div>`);
            } else if (unref(auth).user) {
              _push2(`<div class="overflow-x-auto text-center justify-center items-center"${_scopeId}><p class="text-sm md:text-xl lg:text-2xl xl:text-3xl font-bold text-red-500"${_scopeId}> FORBIDDEN, YOU&#39;RE NOT A VIP! <br${_scopeId}><span class="text-xs md:text-sm lg:text-base xl:text-lg font-medium"${_scopeId}> Only users w/ ID Number 5 and above can enter! </span></p></div>`);
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
                class: "overflow-x-auto text-center justify-center items-center"
              }, [
                createVNode("p", { class: "text-sm md:text-xl lg:text-2xl xl:text-3xl font-bold text-red-500" }, [
                  createTextVNode(" FORBIDDEN, YOU'RE NOT A VIP! "),
                  createVNode("br"),
                  createVNode("span", { class: "text-xs md:text-sm lg:text-base xl:text-lg font-medium" }, " Only users w/ ID Number 5 and above can enter! ")
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
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/admin/pages/admin/not-vip/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-fk-oGaDi.mjs.map
