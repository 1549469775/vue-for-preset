module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      'h_ui': '*'
    }
  });
  api.render('../ui/hui');
  api.injectImports('src/vendor/hui.js', `import './hui.js'`);
  api.onCreateComplete(() => {});
};