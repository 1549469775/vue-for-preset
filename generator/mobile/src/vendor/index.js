  // vant组件分离
  import '@vendor/vant.js'
  // 触摸事件库
  import '@vendor/touch.js'
  // plus插件，用hbuilder打包
  import '@vendor/plus.js'


  // 开启移动端调试
  import VConsole from 'vconsole';
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-unused-vars
    var vConsole = new VConsole();
  }