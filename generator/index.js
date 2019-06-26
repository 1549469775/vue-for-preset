module.exports = (api, options, rootOptions) => {
  const utils = require('./utils')(api);
  // 安装一些基础公共库
  api.extendPackage({
    scripts: {
      "serve": "vue-cli-service serve",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint"
    },
    dependencies: {
      // "animate.css": "^3.7.2",
      "axios": "^0.19.0",
      "vue": "^2.6.10",
      "vue-router": "^3.0.3",
    },
    devDependencies: {
      "@vue/cli-plugin-babel": "^3.8.0",
      "@vue/cli-plugin-eslint": "^3.8.0",
      "@vue/cli-service": "^3.8.0",
      "babel-eslint": "^10.0.1",
      "eslint": "^5.16.0",
      "eslint-plugin-vue": "^5.0.0",
      "node-sass": "^4.9.0",
      "normalize.css": "^8.0.1",
      "sass-loader": "^7.1.0",
      "vue-template-compiler": "^2.6.10",
      "vuex-persistedstate": "^2.5.4"
    },
  });

  // 删除 vue-cli3 默认目录
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/') || path.startsWith('public/'))
      .forEach(path => delete files[path]);
  });

  // postcss
  api.extendPackage({
    postcss: {
      plugins: {
        autoprefixer: {}
      }
    }
  });

  // 安装 vuex
  if (options.vuex) {
    api.extendPackage({
      dependencies: {
        vuex: '^3.0.1'
      }
    });
  }
  // application 应用类型为 mobile
  if (options.application === 'mobile') {
    api.extendPackage({
      dependencies: {
        'lib-flexible': '^0.3.2'
      },
      devDependencies: {
        'postcss-pxtorem': '^4.0.1'
      },
      postcss: {
        plugins: {
          'postcss-pxtorem': {
            rootValue: 37.5,
            unitPrecision: 5,
            propList: ['*'],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 1
          }
        }
      }
    });
  }
  if (options['ui-framework'] === 'element-ui') {
    require('./element.js')(api, options);
  } else if (options['ui-framework'] === 'iview') {
    require('./iview.js')(api, options);
  } else if (options['ui-framework'] === 'ant') {
    require('./ant.js')(api, options);
  } else if (options['ui-framework'] === 'hui') {
    require('./hui.js')(api, options);
  }

  // 公共基础目录和文件
  api.render('./template');
  // 屏蔽 generator 之后的文件写入操作
  // writeFileTree 函数不写文件直接退出，这样 vue-cli3 在写 README.md 时会直接跳过
  api.onCreateComplete(() => {
    process.env.VUE_CLI_SKIP_WRITE = true;
    if (options.application === 'mobile') {
      utils.deleteDir('./src/vendor');
    }
  });
}