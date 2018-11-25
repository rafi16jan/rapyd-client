process.env.NODE_ENV = 'development';
process.env.NODE_PATH = './src';

const config = require('react-scripts/config/webpack.config.dev');

config.resolve.alias['react'] = 'preact-compat';
config.resolve.alias['react-dom'] = 'preact-compat'

require('react-scripts/scripts/start');
