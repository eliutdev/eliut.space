export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics',
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
      { code: 'en', iso: 'en-US' },
      { code: 'fr', iso: 'fr-FR' },
      { code: 'es', iso: 'es-ES' },
      { code: 'ca', iso: 'ca-ES' },
      { code: 'zh', iso: 'zh-CN' },
      { code: 'zh-tw', iso: 'zh-TW' },
      { code: 'hi', iso: 'hi-IN' },
      { code: 'ar', iso: 'ar-SA' },
      { code: 'bn', iso: 'bn-IN' },
      { code: 'ru', iso: 'ru-RU' },
      { code: 'pt', iso: 'pt-BR' },
      { code: 'id', iso: 'id-ID' },
      { code: 'jp', iso: 'ja-JP' },
      { code: 'pa', iso: 'pa-IN' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    vueI18n: {
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
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {}
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    }
  }
}
