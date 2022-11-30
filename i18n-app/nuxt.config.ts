import { defineNuxtConfig } from 'nuxt/config'
import TypedLink from '..'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/i18n',
    TypedLink
  ],
  typedLink: {
    i18n: true
  },
  i18n: {
    locales: ['en', 'fr'], // used in URL path prefix
    defaultLocale: 'en', // default locale of your project for Nuxt pages and routings
    vueI18n: {
      legacy: false,
      locale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        fr: {
          welcome: 'Bienvenue'
        }
      }
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
