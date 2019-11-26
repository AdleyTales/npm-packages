module.exports = {
  publicPath: '/npm', // 项目根路径

  assetsDir: 'static', // 静态资源(js、css、img、fonts)目录

  productionSourceMap: false, // 生产环境关闭sourceMap,提高构建速度

  /**
   * 别名配置 `alias`
   */
  configureWebpack: {
    resolve: {
      alias: {
        apis: '@/apis',
        assets: '@/assets',
        components: '@/components',
        _c: '@/components',
        config: '@/config',
        styles: '@/styles',
        views: '@/views'
      }
    }
  },

  /**
   * 开发环境的配置，代理，只是针对接口Api层面
   */
  devServer: {
    open: true, // 自动打开浏览器

    // 接口代理
    proxy: {}
  }
}
