//require('module-alias/register');
process.env.NODE_ENV = 'production';
process.env.NODE_PATH = './src';

const config = require('react-scripts/config/webpack.config.prod');
const OfflinePlugin = require('offline-plugin');

//config.plugins.splice(5, 1);

config.output.publicPath = '';

config.plugins.push(new OfflinePlugin({appShell: 'index.html', externals: ['index.html'], relativePaths: true}));

config.resolve.alias['react'] = 'preact-compat';
config.resolve.alias['react-dom'] = 'preact-compat';
config.resolve.alias['pouchdb-promise'] = require('path').join(__dirname, '../node_modules/pouchdb-promise/lib/index.js');

config.module.rules.push({test: /framework7\.min\.css$/, loader: 'string-replace-loader', options: {search: '\#9e9e9e', replace: '#009688', flags: 'g'}});

require('react-scripts/scripts/build');
