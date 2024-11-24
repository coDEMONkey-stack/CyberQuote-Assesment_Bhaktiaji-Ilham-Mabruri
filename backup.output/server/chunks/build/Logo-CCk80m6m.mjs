import { _ as __nuxt_component_0$1 } from './nuxt-link-SQoQGqa5.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: "/",
    class: "-m-1.5 p-1.5"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="sr-only"${_scopeId}>Cyber Quote</span><img width="auto" class="h-14" src="https://media.licdn.com/dms/image/v2/C560BAQHYNCfTe1gVwQ/company-logo_200_200/company-logo_200_200/0/1630647674791?e=2147483647&amp;v=beta&amp;t=gGx5U2sS1PWItU8D-JJTozCGVQFF314eu1qIOT7-lCE" alt="CyberQuote Logo"${_scopeId}>`);
      } else {
        return [
          createVNode("span", { class: "sr-only" }, "Cyber Quote"),
          createVNode("img", {
            width: "auto",
            class: "h-14",
            src: "https://media.licdn.com/dms/image/v2/C560BAQHYNCfTe1gVwQ/company-logo_200_200/company-logo_200_200/0/1630647674791?e=2147483647&v=beta&t=gGx5U2sS1PWItU8D-JJTozCGVQFF314eu1qIOT7-lCE",
            alt: "CyberQuote Logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Logo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Logo-CCk80m6m.mjs.map
