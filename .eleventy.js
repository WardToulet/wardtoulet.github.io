const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function(config) {
  config.addPassthroughCopy('./src/css');
  config.addWatchTarget('./src/css');
  config.addPlugin(syntaxHighlight);

  config.addPassthroughCopy('./static');

  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
};
