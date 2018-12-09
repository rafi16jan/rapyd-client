// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Import Framework7
import Framework7 from 'framework7/framework7.esm.bundle';

// Import Framework7-React plugin
import Framework7React from 'framework7-react';

// Import main App component
import App from './components/App.jsx';

// Framework7 styles
import 'framework7/css/framework7.min.css';

// Icons
import './css/icons.css';

// Custom app styles
import './css/app.css';

import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import api from 'api';

OfflinePluginRuntime.install();

// Init Framework7-React plugin
Framework7.use(Framework7React);

// Mount React App
(async () => {
  await api.get_session();
  await ReactDOM.render(
    React.createElement(App),
    document.getElementById('app'),
  );
  if (document.querySelector('div.navbar')) {
    const color_element = document.createElement('meta');
    color_element.name = 'theme-color';
    color_element.content = '#' + getComputedStyle(document.querySelector('.navbar'), null).backgroundColor.replace('rgb(', '').replace(')', '').split(', ').map(function(c) {return parseInt(c).toString(16)}).map(function(hex) {return hex.length === 1 ? "0" + hex : hex}).join('');
    document.querySelector('head').appendChild(color_element);
  }
})();
