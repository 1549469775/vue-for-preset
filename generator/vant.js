module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      "vant": "^2.0.3",
    }
  });
  api.extendPackage({
    dependencies: {
      "babel-plugin-import": "^1.12.0",
    },
    babel: {
      plugins: [
        ['import', {
          libraryName: 'vant',
          libraryDirectory: 'es',
          style: true
        }, 'vant']
      ]
    }
  });
};