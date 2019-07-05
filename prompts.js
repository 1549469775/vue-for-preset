module.exports = [{
  type: 'string',
  name: 'BASE_URL',
  message: "What's app's name?",
  validate: value => !value ? `Can't be empty` : true
}， {
  name: 'application',
  type: 'list',
  message: 'Choose whether your app is a PC or a mobile(default:mobile)',
  choices: [{
      name: 'PC',
      value: 'pc'
    },
    {
      name: 'mobile',
      value: 'mobile'
    }
  ],
  default: 'mobile'
}, {
  name: 'ui-framework',
  type: 'list',
  message: 'choice UI Framework(default:none)',
  choices: [{
      name: 'Element UI',
      value: 'element-ui'
    },
    {
      name: 'iView',
      value: 'iview'
    },
    {
      name: 'ant-design-vue',
      value: 'ant'
    },
    {
      name: 'h_ui',
      value: 'hui'
    },
    {
      name: 'none',
      value: 'none'
    }
  ],
  when: answers => answers.application === 'pc',
  default: 'none'
}, {
  name: 'mobile-ui',
  type: 'list',
  message: 'choice UI Framework(default:none)',
  choices: [{
      name: 'vant',
      value: 'vant'
    },
    {
      name: 'none',
      value: 'none'
    }
  ],
  when: answers => answers.application === 'mobile',
  default: 'none'
}];