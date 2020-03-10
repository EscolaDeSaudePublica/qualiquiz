module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/QualiQuiz'
    : '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_mixins.scss";
          @import "@/styles/_functions.scss";
        `
      }
    }
  }
}
