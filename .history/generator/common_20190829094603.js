module.exports = (api, options, rootOptions) => {
  // 安装一些基础公共库
  api.extendPackage({
    scripts: {
      "serve": "vue-cli-service serve",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint",
      "zip": "npm run build && node build/zip.js"
    },
    dependencies: {
      // "animate.css": "^3.7.2",
      "axios": "^0.19.0",
      "vue": "^2.6.10",
      "vue-router": "^3.0.3",
      "vuex": "^3.1.1"
    },
    devDependencies: {
      "@vue/cli-plugin-babel": "^3.8.0",
      "@vue/cli-plugin-eslint": "^3.8.0",
      "@vue/cli-service": "^3.8.0",
      "babel-eslint": "^10.0.1",
      "eslint": "^5.16.0",
      "eslint-plugin-vue": "^5.0.0",
      "normalize.css": "^8.0.1",
      "node-sass": "^4.9.0",
      "sass-loader": "^7.1.0",
      "less": "^3.9.0",
      "less-loader": "^5.0.0",
      "vue-template-compiler": "^2.6.10",
      "vuex-persistedstate": "^2.5.4",
      "jquery": "^3.4.1",
      "lodash": "^4.17.11",
      "archiver": "^3.0.3",
      "chalk": "^2.4.2",
      "tasksfile": "^5.1.0",
      "webpack-bundle-analyzer": "^3.4.1",
      "compression-webpack-plugin": "^3.0.0",
    },
  });
  // 支持采用TinyPNG node.js API 进行在线压缩.jpg或.png格式图片，并且转换Webp格式文件
  // 支持断网处理
  // SVG 雪碧图：vue-svgicon
  // 移动 web 的适配方案：引入了 postcss-pxtorem 及 lib-flexible，可以自由地用 px 去开发
  // 常用的 js 工具类： cloud-utils
  // 引用 style-resources-loader：全局注入相关的less文件，如通用的 variable及 mixins等

  // "babel-plugin-import": "^1.12.0",

  // postcss
  api.extendPackage({
    postcss: {
      plugins: {
        autoprefixer: {}
      }
    },
    babel: {
      presets: [
        '@vue/app'
      ]
    }
  });
}