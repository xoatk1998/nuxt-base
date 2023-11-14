export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "server",
  ssr: true,
  colorMode: {
    classSuffix: "",
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Kieng Nhua",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/app.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'vue-social-sharing/nuxt',
    '@nuxtjs/sentry'
  ],
  sentry: {
    dsn: 'https://11c20020c83f0c26ecc00498686a38d2@o4506225186308096.ingest.sentry.io/4506225189519360',    
    config: {
      tracesSampleRate: 1.0,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  watchers: {
    webpack: {
      ignored: /node_modules/
    }
  },
  dev: {
    watch: ['~/pages', '~/components', '~/static']
  }
};
