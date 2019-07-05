module.exports = (api, options, rootOptions) => {
  // application 应用类型为 mobile
  api.extendPackage({
    dependencies: {
      'lib-flexible': '^0.3.2',
      "vconsole": "^3.3.0"
    },
    devDependencies: {
      'postcss-pxtorem': '^4.0.1'
    },
    postcss: {
      plugins: {
        'postcss-pxtorem': {
          rootValue: 37.5,
          unitPrecision: 5,
          // propList: ['*'],
          // selectorBlackList: [],
          // replace: true,
          // mediaQuery: false,
          // minPixelValue: 1
        }
      }
    }
  });
  if (options['mobile-ui'] === 'vant') {
    require('./vendor/vant.js')(api, options);
    // postcss
    api.extendPackage({
      babel: {
        plugins: [
          [
            'import',
            {
              libraryName: 'vant',
              libraryDirectory: 'es',
              // style: true,
              // 指定样式路径
              style: name => `${name}/style/less`
            },
            'vant'
          ]
        ]
      }
    });
  }
}