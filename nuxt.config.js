export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    if(!this && !this.$nuxtI18nHead) return {}
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: 'eliut.space',
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'My awesome site' },
        { name: 'format-detection', content: 'telephone=no' },
        ...i18nHead.meta
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, ...i18nHead.link],
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
  ],

  googleAnalytics: {
    id: 'G-GH49KB4DMB'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/i18n'],

  i18n: {
    locales: [
      'en',
      'fr',
      'es',
      'ca',
      'zh',
      'zh-tw',
      'hi',
      'ar',
      'bn',
      'ru',
      'pt',
      'id',
      'jp',
      'pa',
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
    // defaultLocale: 'en',
    vueI18n: {
      // fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome',
        },
        fr: {
          welcome: 'Bienvenue',
        },
        es: {
          welcome: 'Bienvenido',
        },
        ca: {
          welcome: 'Benvingut',
        },
        zh: {
          welcome: '比恩韦尼多',
        },
        'zh-tw': {
          welcome: '比恩韋尼多',
        },
        hi: {
          welcome: 'स्वागत',
        },
        ar: {
          welcome: 'اهلا',
        },
        bn: {
          welcome: 'স্বাগত',
        },
        ru: {
          welcome: 'Привет',
        },
        pt: {
          welcome: 'Bem-vindo',
        },
        id: {
          welcome: 'Selamat datang',
        },
        jp: {
          welcome: 'ようこそ',
        },
        pa: {
          welcome: 'ਜੀ ਆਇਆ',
        },
      },
    },
  },

  generate: {
    // choose to suit your project
    interval: 2000,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
