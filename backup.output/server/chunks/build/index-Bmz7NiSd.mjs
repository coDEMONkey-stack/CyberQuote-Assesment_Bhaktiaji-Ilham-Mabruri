import { useRouter } from 'vue-router';
import { useSSRContext } from 'vue';

const _sfc_main = {
  __name: "index",
  setup(__props) {
    const router = useRouter();
    router.push("/auth/login");
    return () => {
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bmz7NiSd.mjs.map
