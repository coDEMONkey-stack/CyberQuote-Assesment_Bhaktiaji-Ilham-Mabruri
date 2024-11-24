import __nuxt_component_0$1 from './index-CxbB8YZe.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-SQoQGqa5.mjs';
import { _ as __nuxt_component_0$2 } from './Logo-CCk80m6m.mjs';
import { useSSRContext, defineComponent, mergeProps, computed, unref, withCtx, createVNode, resolveDynamicComponent, renderSlot, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, Fragment, renderList, Transition, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderVNode, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { MenuItem, Menu, MenuButton, MenuItems } from '@headlessui/vue';
import { useRouter } from 'vue-router';
import { u as useAuthStore } from './auth-CexA4LLA.mjs';
import { o as useI18n, f as useHead, j as useRoute } from './server.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './asyncData-WeAjXoGm.mjs';
import 'node:http';
import 'node:https';
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
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';
import 'unhead';
import '@unhead/shared';
import '@intlify/core-base';
import 'is-https';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './cookie-qIRfTUpt.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DropdownItem",
  __ssrInlineRender: true,
  props: {
    text: {},
    to: {},
    href: {},
    icon: {},
    iconClass: { default: "w-5 h-5" },
    newTab: { type: Boolean },
    divider: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const computedComponent = computed(() => {
      if (props.href)
        return "a";
      return props.to ? __nuxt_component_0 : "button";
    });
    const toProps = computed(() => {
      return props.to ? { to: props.to } : {};
    });
    const hrefProps = computed(() => {
      return props.href ? { href: props.href } : {};
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(ssrRenderComponent(unref(MenuItem), _attrs, {
        default: withCtx(({ active }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.divider) {
              _push2(`<div class="border-b my-1 -mx-1"${_scopeId}></div>`);
            } else {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(computedComponent)), mergeProps({
                target: _ctx.href && _ctx.newTab ? "_blank" : void 0,
                rel: _ctx.href && _ctx.newTab ? "noopener" : null,
                class: ["group flex gap-2 rounded-md items-center w-full px-2 py-2 text-sm", [
                  active ? "bg-gray-100" : "text-gray-900"
                ]]
              }, { ...unref(hrefProps), ...unref(toProps), ..._ctx.$attrs }), {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
                      if (_ctx.icon) {
                        _push3(ssrRenderComponent(_component_Icon, {
                          name: _ctx.icon,
                          class: _ctx.iconClass
                        }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                    }, _push3, _parent3, _scopeId2);
                    ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                      _push3(`${ssrInterpolate(_ctx.text)}`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "icon", {}, () => [
                        _ctx.icon ? (openBlock(), createBlock(_component_Icon, {
                          key: 0,
                          name: _ctx.icon,
                          class: _ctx.iconClass
                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                      ]),
                      renderSlot(_ctx.$slots, "default", {}, () => [
                        createTextVNode(toDisplayString(_ctx.text), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }), _parent2, _scopeId);
            }
          } else {
            return [
              _ctx.divider ? (openBlock(), createBlock("div", {
                key: 0,
                class: "border-b my-1 -mx-1"
              })) : (openBlock(), createBlock(resolveDynamicComponent(unref(computedComponent)), mergeProps({
                key: 1,
                target: _ctx.href && _ctx.newTab ? "_blank" : void 0,
                rel: _ctx.href && _ctx.newTab ? "noopener" : null,
                class: ["group flex gap-2 rounded-md items-center w-full px-2 py-2 text-sm", [
                  active ? "bg-gray-100" : "text-gray-900"
                ]]
              }, { ...unref(hrefProps), ...unref(toProps), ..._ctx.$attrs }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "icon", {}, () => [
                    _ctx.icon ? (openBlock(), createBlock(_component_Icon, {
                      key: 0,
                      name: _ctx.icon,
                      class: _ctx.iconClass
                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                  ]),
                  renderSlot(_ctx.$slots, "default", {}, () => [
                    createTextVNode(toDisplayString(_ctx.text), 1)
                  ])
                ]),
                _: 2
              }, 1040, ["target", "rel", "class"]))
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/ui/components/Dropdown/DropdownItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Boolean, default: false },
    btnProps: { default: () => ({
      variant: "secondary"
    }) },
    label: { default: "Options" },
    right: { type: Boolean, default: false },
    items: { default: () => [] }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(ssrRenderComponent(unref(Menu), mergeProps({
        as: "div",
        class: "relative inline-block text-left"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "activator", {
              btnProps: _ctx.btnProps,
              label: _ctx.label
            }, () => {
              _push2(ssrRenderComponent(unref(MenuButton), mergeProps({
                as: "button",
                class: "text-sm"
              }, _ctx.btnProps), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.label)} `);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "heroicons:chevron-down",
                      class: "w-4 h-4 inline",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.label) + " ", 1),
                      createVNode(_component_Icon, {
                        name: "heroicons:chevron-down",
                        class: "w-4 h-4 inline",
                        "aria-hidden": "true"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(MenuItems), {
              class: ["absolute z-10 p-1 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", _ctx.right ? "right-0" : "left-0"]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                    _push3(`<!--[-->`);
                    ssrRenderList(_ctx.items, (item) => {
                      _push3(ssrRenderComponent(_sfc_main$4, mergeProps({
                        key: item.text,
                        ref_for: true
                      }, item), null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, () => [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                        return openBlock(), createBlock(_sfc_main$4, mergeProps({
                          key: item.text,
                          ref_for: true
                        }, item), null, 16);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", null, [
                renderSlot(_ctx.$slots, "activator", {
                  btnProps: _ctx.btnProps,
                  label: _ctx.label
                }, () => [
                  createVNode(unref(MenuButton), mergeProps({
                    as: "button",
                    class: "text-sm"
                  }, _ctx.btnProps), {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.label) + " ", 1),
                      createVNode(_component_Icon, {
                        name: "heroicons:chevron-down",
                        class: "w-4 h-4 inline",
                        "aria-hidden": "true"
                      })
                    ]),
                    _: 1
                  }, 16)
                ])
              ]),
              createVNode(Transition, {
                "enter-active-class": "transition duration-100 ease-out",
                "enter-from-class": "transform scale-95 opacity-0",
                "enter-to-class": "transform scale-100 opacity-100",
                "leave-active-class": "transition duration-75 ease-in",
                "leave-from-class": "transform scale-100 opacity-100",
                "leave-to-class": "transform scale-95 opacity-0"
              }, {
                default: withCtx(() => [
                  createVNode(unref(MenuItems), {
                    class: ["absolute z-10 p-1 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", _ctx.right ? "right-0" : "left-0"]
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default", {}, () => [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                          return openBlock(), createBlock(_sfc_main$4, mergeProps({
                            key: item.text,
                            ref_for: true
                          }, item), null, 16);
                        }), 128))
                      ])
                    ]),
                    _: 3
                  }, 8, ["class"])
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/ui/components/Dropdown/Dropdown.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DropdownButton",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenuButton), _attrs, {
        default: withCtx((props, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", props, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", props)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/ui/components/Dropdown/DropdownButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  emits: ["menu:click"],
  setup(__props) {
    const auth = useAuthStore();
    const router = useRouter();
    const route = useRoute();
    function logout() {
      auth.logout();
      router.push("/auth/login");
    }
    const isOpen = ref(false);
    const menus = ref([
      {
        icon: "ri:dashboard-line",
        text: "Dashboard",
        to: "/admin"
      },
      {
        text: "Open VIP",
        icon: "fluent:premium-person-16-filled",
        to: "/admin/vip"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Logo = __nuxt_component_0$2;
      const _component_VDropdown = _sfc_main$3;
      const _component_VDropdownButton = _sfc_main$2;
      const _component_VDropdownItem = _sfc_main$4;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-white border-b border-gray-200" }, _attrs))}><div class="pr-6 pl-3 py-3 flex gap-2 items-center justify-between"><button class="flex-shrink-0 px-4 py-2 rounded inline sm:hidden">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ri:menu-line",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</button><div class="relative sm:w-2/12"><div class="flex justify-between gap-2 items-center px-4 border-b border-gray-200 -mx-2 sm:border-none">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/admin",
        class: "py-2 w-full font-bold text-lg text-indigo-500 flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Logo, { class: "flex justify-center" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Logo, { class: "flex justify-center" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="i-ri-close-line w-6 h-6 text hidden sm:hidden"></button></div></div><nav class="hidden sm:flex flex-1 justify-center gap-6"><!--[-->`);
      ssrRenderList(unref(menus), (menu) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: menu.to,
          to: menu.to,
          class: [
            unref(route).path === menu.to ? "text-indigo-600 font-bold border-b-2 border-indigo-500" : ""
          ]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: menu.icon,
                class: "w-5 h-5 mr-1"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(menu.text)}`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: menu.icon,
                  class: "w-5 h-5 mr-1"
                }, null, 8, ["name"]),
                createTextVNode(" " + toDisplayString(menu.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav>`);
      _push(ssrRenderComponent(_component_VDropdown, { right: "" }, {
        activator: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VDropdownButton, {
              as: "button",
              type: "button",
              class: "text-gray-600 hover:bg-gray-200 hover:text-indigo-500 px-2 py-2 rounded"
            }, {
              default: withCtx(({ open }, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<span class="${ssrRenderClass([[open ? "text-indigo-500" : ""], "flex items-center gap-2"])}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ri:user-line",
                    class: "w-5 h-5"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="hidden sm:inline"${_scopeId2}>${ssrInterpolate((_a = unref(auth).user) == null ? void 0 : _a.name)}</span>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ri:arrow-down-s-line",
                    class: "i-ri-arrow-down-s-line w-5 h-5"
                  }, null, _parent3, _scopeId2));
                  _push3(`</span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: [[open ? "text-indigo-500" : ""], "flex items-center gap-2"]
                    }, [
                      createVNode(_component_Icon, {
                        name: "ri:user-line",
                        class: "w-5 h-5"
                      }),
                      createVNode("span", { class: "hidden sm:inline" }, toDisplayString((_b = unref(auth).user) == null ? void 0 : _b.name), 1),
                      createVNode(_component_Icon, {
                        name: "ri:arrow-down-s-line",
                        class: "i-ri-arrow-down-s-line w-5 h-5"
                      })
                    ], 2)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VDropdownButton, {
                as: "button",
                type: "button",
                class: "text-gray-600 hover:bg-gray-200 hover:text-indigo-500 px-2 py-2 rounded"
              }, {
                default: withCtx(({ open }) => {
                  var _a;
                  return [
                    createVNode("span", {
                      class: [[open ? "text-indigo-500" : ""], "flex items-center gap-2"]
                    }, [
                      createVNode(_component_Icon, {
                        name: "ri:user-line",
                        class: "w-5 h-5"
                      }),
                      createVNode("span", { class: "hidden sm:inline" }, toDisplayString((_a = unref(auth).user) == null ? void 0 : _a.name), 1),
                      createVNode(_component_Icon, {
                        name: "ri:arrow-down-s-line",
                        class: "i-ri-arrow-down-s-line w-5 h-5"
                      })
                    ], 2)
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VDropdownItem, { onClick: logout }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Logout `);
                } else {
                  return [
                    createTextVNode(" Logout ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VDropdownItem, { onClick: logout }, {
                default: withCtx(() => [
                  createTextVNode(" Logout ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isOpen)) {
        _push(`<div class="fixed inset-0 bg-white z-50 sm:hidden"><div class="p-4"><button class="text-gray-600">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ri:close-line",
          class: "w-6 h-6"
        }, null, _parent));
        _push(`</button><nav class="mt-4"><!--[-->`);
        ssrRenderList(unref(menus), (menu) => {
          _push(ssrRenderComponent(_component_nuxt_link, {
            key: menu.to,
            to: menu.to,
            "exact-active-class": "active",
            class: ["block py-2 text-gray-700 hover:text-indigo-500", [unref(route).path === menu.to ? "text-indigo-600 font-bold border-b-2 border-indigo-500" : ""]]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: menu.icon,
                  class: "w-5 h-5 mr-2"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(menu.text)}`);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: menu.icon,
                    class: "w-5 h-5 mr-2"
                  }, null, 8, ["name"]),
                  createTextVNode(" " + toDisplayString(menu.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></nav></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/admin/components/admin/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: t("app_name")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminHeader = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex flex-col sm:flex-row" }, _attrs))}><div class="w-full flex-grow">`);
      _push(ssrRenderComponent(_component_AdminHeader, null, null, _parent));
      _push(`<div class="px-6 py-6">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/admin/layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=admin-BaKurAD1.mjs.map
