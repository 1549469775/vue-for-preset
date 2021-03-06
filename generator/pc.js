module.exports = (api, options, rootOptions) => {
  // https://github.com/vuejs/awesome-vue#responsive-design
  // vue响应式设计
  if (options['ui-framework'] === 'element-ui') {
    require('./vendor/element.js')(api, options);
  } else if (options['ui-framework'] === 'iview') {
    require('./vendor/iview.js')(api, options);
  } else if (options['ui-framework'] === 'ant') {
    require('./vendor/ant.js')(api, options);
  } else if (options['ui-framework'] === 'hui') {
    require('./vendor/hui.js')(api, options);
  }
  api.extendPackage({
    scripts: {
      "new": "plop"
    },
    dependencies: {
      "plop": "^2.4.0",
    },
  });

}