export default defineNuxtConfig({
  target: 'server',
  ssr: true,
  serverMiddleware: [
    { path: '/api', handler: '~/layers/auth/server/api' },
  ],
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  build: {
    analyze: true,
    transpile: ['@heroicons/vue'],
  },
  nitro: {
    preset: 'vercel',
    prerender: {
      crawlLinks: true,
      failOnError: false,
      concurrency: 250,
      interval: 100,
    },
  },
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
    vueI18n: {
      legacy: false,
      locale: 'en',
      messages: {
        en: {
          app_name: 'CyberQuote Interview Project',
          app_description: 'For An Assessment Interview Project - Bhaktiaji Ilham',
          menu_dashboard: 'Dashboard',
        },
        id: {
          app_name: 'CyberQuote Interview Project',
          app_description: 'Untuk sebuah tugas project interview - Bhaktiaji Ilham',
          menu_dashboard: 'Dasbor',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      gaId: '',
    },
  },
  googleFonts: {
    prefetch: true,
    preconnect: true,
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  content: {
    highlight: {
      theme: {
        default: 'github-dark',
      },
    },
    preload: [
      'json',
      'js',
      'ts',
      'html',
      'css',
      'vue',
      'diff',
      'shell',
      'markdown',
      'yaml',
      'bash',
      'ini',
    ],
  },
  vite: {
    vue: {
      script: {
        propsDestructure: true,
      },
    },
  },
  devtools: {
    enabled: true,
  },
  compatibilityDate: '2024-11-24',
})
