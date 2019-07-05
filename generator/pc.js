module.exports = (api, options, rootOptions) => {
  if (options['ui-framework'] === 'element-ui') {
    require('./vendor/element.js')(api, options);
  } else if (options['ui-framework'] === 'iview') {
    require('./vendor/iview.js')(api, options);
  } else if (options['ui-framework'] === 'ant') {
    require('./vendor/ant.js')(api, options);
  } else if (options['ui-framework'] === 'hui') {
    require('./vendor/hui.js')(api, options);
  }
}