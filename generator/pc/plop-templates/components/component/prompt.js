const {
  notEmpty
} = require('../../utils.js');

module.exports = {
  description: 'generate vue component',
  prompts: [{
      type: 'input',
      name: 'name',
      message: 'component name please',
      validate: notEmpty('name')
    },
    {
      type: 'checkbox',
      name: 'blocks',
      message: 'Blocks:',
      choices: [{
          name: '<template>',
          value: 'template',
          checked: true
        },
        {
          name: '<script>',
          value: 'script',
          checked: true
        },
        {
          name: 'style',
          value: 'style',
          checked: true
        }
      ],
      validate(value) {
        if (value.indexOf('script') === -1 && value.indexOf('template') === -1) {
          return 'Components require at least a <script> or <template> tag.';
        }
        return true;
      }
    }
  ],
  actions: (data) => {
    const name = '{{name}}';
    const actions = [];
    data.blocks.includes('template')&&actions.push({
      type: 'add',
      path: `src/components/${name}/index.vue`,
      templateFile: 'plop-templates/components/component/index.hbs',
      data: {
        name: name,
        template: data.blocks.includes('template'),
        script: data.blocks.includes('script'),
        style: data.blocks.includes('style')
      }
    });
    data.blocks.includes('style')&&actions.push({
      type: 'add',
      path: `src/components/${name}/style.scss`,
      templateFile: 'plop-templates/components/style/index.hbs',
      data: {
        name: name,
        templateType: 'component'
      }
    });
    data.blocks.includes('script')&&actions.push({
      type: 'add',
      path: `src/components/${name}/index.js`,
      templateFile: 'plop-templates/components/js/index.hbs',
      data: {
        name: name,
        templateType: 'component'
      }
    });
    return actions;
  }
};