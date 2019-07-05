module.exports = {
  // 这其中包含了动态导入import()函数
  presets: [
    '@vue/app'
  ],
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