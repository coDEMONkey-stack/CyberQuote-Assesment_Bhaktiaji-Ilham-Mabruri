import { useSSRContext, ref, computed, mergeProps, unref, isRef, withCtx, createTextVNode, defineComponent, mergeModels, useModel, createVNode, resolveDynamicComponent, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrGetDynamicModelProps, ssrRenderVNode } from 'vue/server-renderer';
import __nuxt_component_0 from './index-CxbB8YZe.mjs';
import { tv } from 'tailwind-variants';
import { useForm, useField } from 'vee-validate';
import { object, string } from 'yup';
import { u as useAuthStore, a as useAuthStorage } from './auth-CexA4LLA.mjs';
import { f as useHead, u as useRouter, j as useRoute } from './server.mjs';
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
import 'vue-router';
import '@intlify/core-base';
import 'is-https';
import './cookie-qIRfTUpt.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-8 space-y-2 text-center" }, _attrs))}><h1 class="text-2xl font-semibold">${ssrInterpolate(_ctx.title)}</h1><p class="text-gray-500 text-sm">${ssrInterpolate(_ctx.subtitle)}</p></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/auth/components/Auth/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "UInput",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    variant: { default: "filled" },
    type: { default: "text" },
    label: {},
    placeholder: {},
    prependIcon: {},
    prependIconClass: {},
    prependIconSize: {},
    appendIcon: {},
    appendIconClass: {},
    appendIconSize: {},
    iconSize: { default: "20" },
    size: {},
    hint: {},
    error: { type: Boolean },
    errorMessage: {},
    outerClass: {},
    wrapperClass: {}
  }, {
    "modelValue": {
      local: true
    },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["click:prepend", "click:prependIcon", "click:append", "click:appendIcon"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const input = tv({
      slots: {
        outer: "",
        label: "empty:hidden text-gray-800 font-medioum tracking-wide text-sm mb-1 block focus-within:text-primary-600",
        inner: "flex items-center",
        prepend: "empty:hidden h-full flex items-center pl-3",
        append: "empty:hidden h-full flex items-center pr-3",
        icon: "text-gray-500",
        input: "w-full px-3 py-2 placeholder-gray-500 h-full",
        hint: "text-gray-500 text-xs mt-1 mb-2",
        error: "text-error-600 text-sm mt-1",
        wrapper: ""
      },
      variants: {
        variant: {
          filled: {
            inner: "bg-white border rounded-lg focus-within:border-primary-600 focus-within:ring-1 focus-within:ring-primary-600 transition duration-200",
            input: "px-3 bg-transparent border-none focus:border-none focus:outline-none focus:ring-0 rounded-lg"
          },
          underline: {
            label: "mb-0",
            inner: "border-b-2 focus-within:border-primary-600 transition duration-200",
            input: "px-0 bg-transparent px-0 border-none focus:border-none focus:outline-none focus:ring-0"
          },
          outlined: {
            outer: `border rounded-lg relative
        focus-within:border-primary-600 focus-within:ring-1 focus-within:ring-primary-600
        [&:has(input:placeholder-shown)_label]:-translate-y-6 [&:has(input:placeholder-shown)_label]:bg-white [&:has(input:placeholder-shown)_label]:scale-95 [&:has(input:placeholder-shown)_label]:text-gray-800
        [&:has(input:not(:placeholder-shown))_label]:-translate-y-6 [&:has(input:not(:placeholder-shown))_label]:bg-white [&:has(input:not(:placeholder-shown))_label]:scale-95 [&:has(input:not(:placeholder-shown))_label]:text-black
        [&:has(:focus-visible)_label]:-translate-y-6 [&:has(:focus-visible)_label]:bg-white [&:has(:focus-visible)_label]:scale-95 [&:has(:focus-visible)_label]:text-black`,
            inner: "rounded-lg border border-transparent",
            input: "bg-transparent border-none focus:border-none focus:outline-none focus:ring-0",
            label: "absolute top-3 left-2.5 text-gray-500 pointer-events-none transition duration-200 ease-in-out px-1"
          }
        },
        size: {
          sm: {
            input: "text-sm h-[36px]"
          },
          md: {
            input: "text-sm h-[40px]"
          },
          lg: {
            input: "text-base h-[48px]"
          },
          auto: {
            input: "h-auto"
          }
        },
        error: {
          true: {
            outer: "",
            inner: "",
            label: "",
            input: ""
          }
        }
      },
      defaultVariants: {
        variant: "filled",
        size: "md"
      },
      compoundSlots: [
        {
          slots: ["inner"],
          error: true,
          variant: "filled",
          class: "border-error-600 focus-within:border-error-600 focus-within:ring-1 focus-within:ring-error-600"
        },
        {
          slots: ["inner"],
          error: true,
          variant: "underline",
          class: "border-error-600 focus-within:border-error-600"
        },
        {
          slots: ["outer"],
          error: true,
          variant: "outlined",
          class: "border-error-600 focus-within:outline-none focus-within:border-error-600 focus-within:ring-1 focus-within:ring-error-600"
        }
      ]
    });
    const {
      label: labelClass,
      outer,
      inner,
      prepend: prependClass,
      icon,
      input: inputClassVariant,
      append: appendClass,
      hint: hintClass,
      error: errorClass,
      wrapper
    } = input({
      size: __props.size,
      variant: __props.variant,
      error: __props.error
    });
    const modelValue = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [unref(wrapper)(), _ctx.wrapperClass]
      }, _attrs))}><div class="${ssrRenderClass([unref(outer)(), _ctx.outerClass])}"><label class="${ssrRenderClass(unref(labelClass)())}">${ssrInterpolate(_ctx.label)}</label><div class="${ssrRenderClass(unref(inner)())}"><div class="${ssrRenderClass(unref(prependClass)())}">`);
      ssrRenderSlot(_ctx.$slots, "prepend", {}, () => {
        if (_ctx.prependIcon) {
          _push(ssrRenderComponent(_component_Icon, {
            name: _ctx.prependIcon,
            class: [unref(icon)(), _ctx.prependIconClass],
            size: _ctx.prependIconSize || _ctx.iconSize,
            onClick: ($event) => emit("click:prependIcon")
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</div><input${ssrRenderAttrs((_temp0 = mergeProps({
        type: _ctx.type,
        placeholder: _ctx.placeholder,
        class: [unref(inputClassVariant)()]
      }, _ctx.$attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, modelValue.value))))}><div class="${ssrRenderClass(unref(appendClass)())}">`);
      ssrRenderSlot(_ctx.$slots, "append", {}, () => {
        if (_ctx.appendIcon) {
          _push(ssrRenderComponent(_component_Icon, {
            name: _ctx.appendIcon,
            class: [unref(icon)(), _ctx.appendIconClass],
            size: _ctx.appendIconSize || _ctx.iconSize,
            onClick: ($event) => emit("click:appendIcon")
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</div></div></div><div>`);
      ssrRenderSlot(_ctx.$slots, "hint", { hint: _ctx.hint }, () => {
        if (_ctx.hint) {
          _push(`<div class="${ssrRenderClass([unref(hintClass)()])}">${ssrInterpolate(_ctx.hint)}</div>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "error", { error: _ctx.error, errorMessage: _ctx.errorMessage }, () => {
        if (_ctx.error) {
          _push(`<div class="${ssrRenderClass([unref(errorClass)()])}">${ssrInterpolate(_ctx.errorMessage)}</div>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/ui/components/UInput.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: void 0
    },
    color: {
      type: String,
      default: "light"
    },
    rounded: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: "primary",
      validator: (v) => ["primary", "tertiary", "ghost"].includes(v)
    },
    block: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      default: void 0
    },
    href: {
      type: String,
      default: void 0
    },
    size: {
      type: String,
      default: "md",
      validator: (v) => ["sm", "md", "lg"].includes(v)
    },
    shadow: {
      type: [Boolean, String],
      default: false,
      validator: (v) => [true, false, "sm", "md", "lg", "xl"].includes(v)
    }
  },
  setup(__props) {
    const props = __props;
    const tag = computed(() => props.to ? "nuxt-link" : props.href ? "a" : "button");
    const btn = tv({
      base: `inline-flex items-center gap-2 justify-center border border-transparent text-center font-medium
    focus:outline-none focus:ring-2 focus:ring-offset-2
    transition duration-200 ease-in-out
    disabled:cursor-not-allowed
    `,
      variants: {
        color: {
          light: "bg-white text-gray-800 border-gray-400 hover:bg-gray-100 focus:ring-indigo-600 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 disabled:bg-gray-200",
          dark: "text-white bg-neutral-800 border-neutral-800 focus:ring-neutral-800 disabled:bg-neutral-500 disabled:text-neutral-300 disabled:border-neutral-500",
          primary: "bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-600 disabled:bg-indigo-400 disabled:text-indigo-200 disabled:border-indigo-400",
          secondary: "bg-gray-600 border-gray-600 text-white hover:bg-gray-700 focus:ring-gray-600 disabled:bg-gray-400 disabled:text-gray-200 disabled:border-gray-400",
          warning: "bg-amber-500 border-amber-500 text-white hover:bg-amber-600 focus:ring-amber-500 disabled:bg-amber-300 disabled:text-amber-100 disabled:border-amber-300",
          error: "bg-rose-600 border-rose-600 text-white hover:bg-rose-700 focus:ring-rose-600 disabled:bg-rose-400 disabled:text-rose-200 disabled:border-rose-400",
          success: "bg-green-600 border-green-600 text-white hover:bg-green-700 focus:ring-green-600 disabled:bg-green-400 disabled:text-green-200 disabled:border-green-400"
        },
        size: {
          sm: "px-2 py-1 text-sm h-[28px]",
          md: "px-3.5 py-1.5 text-sm",
          lg: "py-3 px-8 text-lg h-[48px]"
        },
        rounded: {
          true: "rounded-full",
          false: "rounded-md"
        },
        variant: {
          primary: "",
          tertiary: "bg-transparent",
          ghost: "bg-transparent border-none"
        },
        shadow: {
          true: "shadow",
          false: "",
          sm: "shadow-sm",
          md: "shadow-md",
          lg: "shadow-lg",
          xl: "shadow-xl"
        },
        block: {
          true: "w-full",
          false: ""
        }
      },
      defaultVariants: {
        size: "md",
        color: "light",
        rounded: false
      },
      compoundVariants: [
        // primary
        {
          variant: "tertiary",
          color: "primary",
          class: "text-indigo-600 hover:text-white"
        },
        {
          variant: "ghost",
          color: "primary",
          class: "text-indigo-600 hover:bg-indigo-100"
        },
        // secondary
        {
          variant: "tertiary",
          color: "secondary",
          class: "text-gray-600 hover:text-white"
        },
        {
          variant: "ghost",
          color: "secondary",
          class: "text-gray-600 hover:bg-gray-100"
        },
        // warning
        {
          variant: "tertiary",
          color: "warning",
          class: "text-amber-600 hover:text-white"
        },
        {
          variant: "ghost",
          color: "warning",
          class: "text-amber-600 hover:bg-amber-100"
        },
        // error
        {
          variant: "tertiary",
          color: "error",
          class: "text-rose-600 hover:text-white"
        },
        {
          variant: "ghost",
          color: "error",
          class: "text-rose-600 hover:bg-rose-100"
        },
        // success
        {
          variant: "tertiary",
          color: "success",
          class: "text-green-600 hover:text-white"
        },
        {
          variant: "ghost",
          color: "success",
          class: "text-green-600 hover:bg-green-100"
        },
        // light
        {
          variant: "tertiary",
          color: "light",
          class: "text-gray-800 hover:bg-gray-800 hover:text-white"
        },
        {
          variant: "ghost",
          color: "light",
          class: "text-gray-800 hover:bg-gray-100"
        },
        // dark
        {
          variant: "tertiary",
          color: "dark",
          class: "text-neutral-800 hover:bg-neutral-800 hover:text-white"
        },
        {
          variant: "ghost",
          color: "dark",
          class: "text-neutral-800 hover:bg-neutral-100"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tag.value), mergeProps({
        to: __props.to,
        href: __props.href,
        type: __props.type,
        class: unref(btn)({
          size: __props.size,
          color: __props.color,
          rounded: __props.rounded,
          variant: __props.variant,
          shadow: __props.shadow,
          block: __props.block
        })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/ui/components/Button/Button.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Login"
    });
    const { handleSubmit } = useForm({
      validationSchema: object({
        userID: string().matches(/^\d+$/, "Only numbers are allowed. Please remove any letters or special characters.").required("User ID is required").label("User ID")
      })
    });
    const auth = useAuthStore();
    const router = useRouter();
    const error = ref(null);
    const route = useRoute();
    const { store } = useAuthStorage();
    const { value: userID, errorMessage: userIDError, validate } = useField("userID", void 0, {
      initialValue: ""
    });
    const isLoginDisabled = computed(() => {
      return !/^\d+$/.test(userID.value);
    });
    handleSubmit(async (values) => {
      var _a, _b;
      error.value = "";
      try {
        const res = await $fetch("https://cyber-quote-assesment-bhaktiaji-ilham-mabruri.vercel.app/api/auth/login", {
          method: "post",
          body: values
        });
        const token = res.token;
        const user = res.user;
        store(token, user);
        auth.user = user;
        auth.loggedIn = true;
        router.push(((_a = route.query) == null ? void 0 : _a.next) || "/admin");
      } catch (e) {
        error.value = ((_b = e == null ? void 0 : e.data) == null ? void 0 : _b.error) || "An unknown error occurred";
      }
      setTimeout(() => {
        error.value = null;
      }, 3500);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AuthHeader = _sfc_main$3;
      const _component_VUInput = _sfc_main$2;
      const _component_VButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center h-full" }, _attrs))}><form class="rounded-lg px-10 py-8 w-full max-w-md mx-auto">`);
      _push(ssrRenderComponent(_component_AuthHeader, {
        title: "Login",
        subtitle: "Please enter your credentials"
      }, null, _parent));
      if (error.value) {
        _push(`<div class="bg-error-600 text-white text-sm px-4 py-3 rounded-lg mb-4">${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_VUInput, {
        modelValue: unref(userID),
        "onUpdate:modelValue": ($event) => isRef(userID) ? userID.value = $event : null,
        hint: "dummy: 97",
        "wrapper-class": "mb-1",
        name: "userID",
        label: `User ID${unref(userID) ? `: ${unref(userID)}` : ""}`,
        placeholder: "Input User ID",
        "error-message": unref(userIDError),
        onInput: ($event) => unref(validate)()
      }, null, _parent));
      if (unref(userIDError) && unref(userID)) {
        _push(`<div class="text-error-600 text-sm mb-4">${ssrInterpolate(unref(userIDError))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mb-5 flex gap-2 justify-between items-center"><label class="flex gap-2 items-center text-sm"><input type="checkbox" class="w-4 h-4 rounded text-primary-500 focus:ring-primary-500 transition duration-300"> Remember me </label></div>`);
      _push(ssrRenderComponent(_component_VButton, {
        type: "submit",
        color: "primary",
        block: "",
        class: "mb-5",
        disabled: isLoginDisabled.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Login `);
          } else {
            return [
              createTextVNode(" Login ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layers/auth/pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-Bu0k7ia5.mjs.map
