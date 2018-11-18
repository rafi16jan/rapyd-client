process.env.NODE_ENV = 'development';

const config = require('react-scripts/config/webpack.config.dev');

config.resolve.alias['react'] = 'preact-compat';
config.resolve.alias['react-dom'] = 'preact-compat'

require('react-scripts/scripts/start');
