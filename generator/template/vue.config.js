const path = require('path');

const resolve = (dir) => {
  return path.join(__dirname, './', dir);
};

const isProd = () => {
  return process.env.NODE_ENV === 'production';
};


module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
    '/' : '/',
  assetsDir: 'static',
  productionSourceMap: false,
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 3000,
    https: false,
    hotOnly: false,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: isProd() ? true : false,
    // 开启 CSS source maps?
    sourceMap: isProd() ? true : false,
    // css预设器配置项
    loaderOptions: {
      sass: {
        data: `
        @import "@/assets/styles/_index.scss";
      `
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false,
  },
  configureWebpack: () => ({
    resolve: {
      alias: {
        '@': resolve('src'),
        '@assets': resolve('src/assets'),
        '@components': resolve('src/components'),
        '@store': resolve('src/store'),
        '@router': resolve('src/router'),
        '@views': resolve('src/views'),
        '@images': resolve('src/assets/images'),
      }
    }
  })
}