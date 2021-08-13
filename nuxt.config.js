export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "FullStackBeta Auth",
    htmlAttrs: {
      lang: "pt-br"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
      },
      {
        rel: "stylesheet",
        type: "css",
        href:
          "https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: "~static/css/app.css" }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~plugins/vuesax.js" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",

    // Compition API Nuxt
    "@nuxtjs/composition-api/module"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-validate", "@nuxtjs/axios", "@nuxtjs/auth-next"],

  axios: {
    baseURL: "http://localhost:3333/api/auth",
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json;charset=utf-8"
      }
    },
    proxy: true
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: "/login", method: "post", propertName: "data.token" },
          logout: { url: "/logout", method: "post"},
          register: { url: '/register', method: 'post', propertName: "data.token" },
          user: {
            url: "/profile",
            method: "get",
            propertName: "data"
          }
        },
        token: {
          required: false,
          type: false
        }
      },
      facebook: {
        endpoints: {
          userInfo:
            "https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}"
        },
        clientId: "588145119263555",
        scope: ["public_profile", "email"],
        responseType: "token id_token"
      },
      google: {
        clientId:
          "231209895914-kdciht9i3ssaaiqp60h910c2o8v6187g.apps.googleusercontent.com",
        scope: ["profile", "email"],
        codeChallengeMethod: "",
        responseType: "token id_token"
      }
    }
  },
  redirect: {
    login: "/profile",
    logout: "/",
    callback: "/",
    home: "/"
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    interval: 2000
  }
};
