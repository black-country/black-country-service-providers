export default {
  ssr: false,
  target: "static",

  router: {
    base: '/service-provider/'
  },

  app: {
    baseURL: '/service-provider/',
    head: {
      title: "Black Country | Servivce Providers",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },

  modules: ["@nuxtjs/tailwindcss"],
  css: ["/assets/css/main.css"],

  tailwindcss: {
    cssPath: "@/assets/css/main.css",
  },

  axios: {
    // Axios options here
    timeout: 10000, // Example: set timeout to 10 seconds
  },

  // buildModules: [
  //   '@nuxtjs/moment'
  // ]
  // alias: {
  // 	'@': '/'
  // },
  plugins: [],

  compatibilityDate: "2025-03-07",
};