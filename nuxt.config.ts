import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import axios from 'axios'

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
    prerender: {
      crawlLinks: true,
      failOnError: false,
      concurrency: 250,
      interval: 100,
    },
  },
  hooks: {
    'nitro:config': async () => {
      try {
        const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users/')

        const dummyUser = {
          id: 97,
          name: 'Bhaktiaji Ilham Mabruri',
          username: 'bhakti97',
          email: 'bhaktiaji1997@gmail.com',
          address: {
            street: 'Jl. RRI Kp. Parung Serab',
            suite: 'Kelurahan Tirtajaya, Kecamatan Sukmajaya',
            city: 'Depok',
            zipcode: '16412',
            geo: {
              lat: '-6.2088',
              lng: '106.8456',
            },
          },
          phone: '+62822-2112-2318',
          website: 'https://github.com/coDEMONkey-stack',
          company: {
            name: 'Cyber Quote',
            catchPhrase: 'Financial Training Information Technology',
            bs: 'cyberquote financial it solutions',
          },
        }
        const combinedUsers = [dummyUser, ...users]

        const filePath = resolve(__dirname, 'public', 'users.json')
        writeFileSync(filePath, JSON.stringify(combinedUsers, null, 2))

        /* eslint-disable no-console */
        if (process.env.NODE_ENV !== 'production')
          console.info('✅ Data pengguna berhasil disimpan ke public/users.json')
      }
      catch (error) {
        console.error('❌ Gagal mem-fetch data pengguna:', error)
      }
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
  compatibilityDate: '2024-11-22',
})
