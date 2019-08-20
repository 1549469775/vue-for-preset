const {
  notEmpty
} = require('../../utils.js');

module.exports = {
  description: 'generate a view',
  prompts: [{
      type: 'input',
      name: 'name',
      message: 'view name please',
      validate: notEmpty('name'),
    },
    {
      type: 'checkbox',
      name: 'blocks',
      message: 'Blocks:',
      choices: [{
          name: '<template>',
          value: 'template',
          checked: true,
        },
        {
          name: '<script>',
          value: 'script',
          checked: true,
        },
        {
          name: 'style',
          value: 'style',
          checked: true,
        },
      ],
      validate(value) {
        if (
          value.indexOf('script') === -1 &&
          value.indexOf('template') === -1
        ) {
          return 'View require at least a <script> or <template> tag.';
        }
        return true;
      },
    },
  ],
  actions: (data) => {
    const name = '{{name}}';
    var actions = [];
    data.blocks.includes('template')&&actions.push({
      type: 'add',
      path: `src/views/${name}/index.vue`,
      templateFile: 'plop-templates/views/view/index.hbs',
      data: {
        name: name,
        template: data.blocks.includes('template'),
        script: data.blocks.includes('script'),
        style: data.blocks.includes('style'),
      },
    })
    
    data.blocks.includes('style')&&actions.push({
      type: 'add',
      path: `src/views/${name}/style.scss`,
      templateFile: 'plop-templates/views/style/index.hbs',
      data: {
        name: name,
        templateType: 'view',
      },
    })

    data.blocks.includes('script')&&actions.push({
      type: 'add',
      path: `src/views/${name}/index.js`,
      templateFile: 'plop-templates/views/js/index.hbs',
      data: {
        name: name,
        templateType: 'view',
      },
    })

    return actions;
  },
};
