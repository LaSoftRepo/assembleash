const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = function (config) {
  config.plugins.unshift(new CopyPlugin([{
    from: 'node_modules/monaco-editor/min/vs',
    to: 'vs'
  }]));

  return config;
};
