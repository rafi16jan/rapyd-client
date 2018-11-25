process.env.NODE_ENV = 'production';
process.env.NODE_PATH = './src';

const config = require('react-scripts/config/webpack.config.prod');

config.resolve.alias['react'] = 'preact-compat';
config.resolve.alias['react-dom'] = 'preact-compat'

require('react-scripts/scripts/build');
