const viewGenerator = require('./plop-templates/views/view/prompt');
    const componentGenerator = require('./plop-templates/components/component/prompt');
    module.exports = function (plop) {
      plop.setHelper('formatClassPrefix', function (templateType) {
        if (templateType === 'view') {
          return 'page';
        }
        return 'comp';
      });
      plop.setGenerator('view', viewGenerator);
      plop.setGenerator('component', componentGenerator);
    };
