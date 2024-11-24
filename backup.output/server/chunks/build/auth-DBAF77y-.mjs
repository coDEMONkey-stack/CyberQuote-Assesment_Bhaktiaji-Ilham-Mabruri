import { u as useAuthStore } from './auth-CexA4LLA.mjs';
import { l as defineNuxtRouteMiddleware, u as useRouter } from './server.mjs';
import './cookie-qIRfTUpt.mjs';
import 'vue';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@intlify/core-base';
import 'is-https';
import '@iconify/vue';
import 'vue/server-renderer';

const auth = defineNuxtRouteMiddleware((to) => {
  const auth2 = useAuthStore();
  const router = useRouter();
  if (!auth2.loggedIn) {
    return router.push({
      path: "/auth/login",
      query: {
        next: to.path
      }
    });
  }
});

export { auth as default };
//# sourceMappingURL=auth-DBAF77y-.mjs.map
