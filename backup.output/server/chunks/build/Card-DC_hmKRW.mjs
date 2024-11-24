import { useSSRContext, defineComponent, mergeProps, withCtx, renderSlot, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import __nuxt_component_0 from './index-CxbB8YZe.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CardHeader",
  __ssrInlineRender: true,
  props: {
    title: {},
    bordered: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h3${ssrRenderAttrs(mergeProps({ class: "font-semibold text-lg text-gray-700 px-4 py-3 border-b" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(_ctx.title)}`);
      }, _push, _parent);
      _push(`</h3>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/ui/components/Card/CardHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CardBody",
  __ssrInlineRender: true,
  props: {
    bordered: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 py-3 text-gray-600" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/ui/components/Card/CardBody.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CardFooter",
  __ssrInlineRender: true,
  props: {
    bordered: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 pb-3 text-gray-600" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/ui/components/Card/CardFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    title: {},
    icon: {},
    iconClass: { default: "h-5" },
    body: {},
    bordered: { type: Boolean, default: false },
    classes: { default: () => ({
      wrapper: "border border-gray-200 rounded-lg bg-white",
      header: "",
      body: "",
      footer: ""
    }) },
    hideHeader: { type: Boolean },
    hideFooter: { type: Boolean },
    headerClass: {},
    bodyClass: {},
    footerClass: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VCardHeader = _sfc_main$3;
      const _component_Icon = __nuxt_component_0;
      const _component_VCardBody = _sfc_main$2;
      const _component_VCardFooter = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: _ctx.classes.wrapper
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "headerWrapper", {
        title: _ctx.title,
        bordered: _ctx.bordered,
        classes: [_ctx.classes.header, _ctx.headerClass],
        hideHeader: _ctx.hideHeader
      }, () => {
        if (!_ctx.hideHeader) {
          _push(ssrRenderComponent(_component_VCardHeader, {
            title: _ctx.title,
            bordered: _ctx.bordered,
            class: [_ctx.classes.header, _ctx.headerClass]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
                  if (_ctx.icon) {
                    _push2(ssrRenderComponent(_component_Icon, {
                      name: _ctx.icon,
                      class: _ctx.iconClass
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "icon", {}, () => [
                    _ctx.icon ? (openBlock(), createBlock(_component_Icon, {
                      key: 0,
                      name: _ctx.icon,
                      class: _ctx.iconClass
                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                  ]),
                  renderSlot(_ctx.$slots, "header")
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(ssrRenderComponent(_component_VCardBody, {
        class: [_ctx.classes.body, _ctx.bodyClass],
        bordered: _ctx.bordered
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {
              classes: [_ctx.classes.body, _ctx.bodyClass],
              bordered: _ctx.bordered
            }, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {
                classes: [_ctx.classes.body, _ctx.bodyClass],
                bordered: _ctx.bordered
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "footerWrapper", {
        classes: [_ctx.classes.footer, _ctx.footerClass],
        bordered: _ctx.bordered,
        hideFooter: _ctx.hideFooter
      }, () => {
        if (!_ctx.hideFooter) {
          _push(ssrRenderComponent(_component_VCardFooter, {
            class: [_ctx.classes.footer, _ctx.footerClass],
            bordered: _ctx.bordered
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "footer")
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/ui/components/Card/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Card-DC_hmKRW.mjs.map
