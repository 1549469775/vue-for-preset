const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");

const resolve = (dir) => {
  return path.join(__dirname, './', dir);
};

const isProd = () => {
  return process.env.NODE_ENV === 'production';
};


module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
    './' : '/',
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
      },
	  <%_ if (options['mobile-ui'] === 'vant') { _%>
      // 为了改变主题，多安装了less,less-loader
      less: {
        modifyVars: {
          red: '#03a9f4',
          blue: '#000',
          orange: '#f08d49',
          'text-color': '#111'
        }
      }
	  <%_ } _%>
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false,
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log'];
    }
    return {
      resolve: {
        alias: {
          '@': resolve('src'),
          '@http': resolve('src/http'),
          '@config': resolve('src/config/config.js'),
          '@assets': resolve('src/assets'),
          '@components': resolve('src/components'),
          '@store': resolve('src/store'),
          '@router': resolve('src/router'),
          '@views': resolve('src/views'),
          '@vendor': resolve('src/vendor'),
          '@images': resolve('src/assets/images'),
          '@mixins': resolve('src/mixins'),
          '@directive': resolve('src/directive'),
          '@filter': resolve('src/filter'),
          '@utils': resolve('src/utils'),
        }
      },
      plugins: [
        new webpack.ProvidePlugin({
          _: "lodash",
          $: "jquery"
        })
      ]
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
      config
        .plugin('webpack-bundle-analyzer')
        .use(CompressionPlugin,[{
          test:/\.js$|\.html$|\.css/,
          threshold:10240,
          deleteOriginalAssets:false
        }])
    } 
  }
}