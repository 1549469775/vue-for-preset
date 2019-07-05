module.exports = (api, options, rootOptions) => {
  const utils = require('./utils')(api);
  // 删除 vue-cli3 默认目录
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/') || path.startsWith('public/'))
      .forEach(path => delete files[path]);
  });
  // 公共基础目录和文件
  // api.render('./template');
  require('./common.js')(api, options, rootOptions);
  if (options.application === 'mobile') {
    api.render('./mobile');
    require('./mobile.js')(api, options, rootOptions);
  }
  if (options.application === 'pc') {
    api.render('./pc');
    require('./pc.js')(api, options, rootOptions);
  }
  // 屏蔽 generator 之后的文件写入操作
  // writeFileTree 函数不写文件直接退出，这样 vue-cli3 在写 README.md 时会直接跳过
  api.onCreateComplete(() => {
    process.env.VUE_CLI_SKIP_WRITE = true;
    // if (options.application === 'mobile') {
    //   utils.deleteDir('./src/vendor');
    // }
  });
}