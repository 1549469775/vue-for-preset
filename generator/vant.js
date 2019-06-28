module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      "vant": "^2.0.3",
    }
  });
  api.render('../ui/vant');
  api.injectImports('src/vendor/vant.js', `import './vant.js'`);
  api.onCreateComplete(() => {});
};