import PouchDB from 'pouchdb-browser';
import PouchFind from 'pouchdb-find';
import RelationalPouch from 'relational-pouch';

PouchDB.plugin(PouchFind);
PouchDB.plugin(RelationalPouch);
window.PouchDB = PouchDB;
window.session_db = new PouchDB('session');

if (!window.localStorage.rapyd_server_url) {
  window.localStorage.rapyd_server_url = window.location.protocol + '//' + window.location.hostname + ':8069';
}

function preload() {
  const root = document.getElementById('app');
  if (root) {
    const preloader = document.createElement('div');
    preloader.className = 'preloader-modal';
    preloader.insertAdjacentHTML('beforeend',`
    <div class="preloader color-white">
      <span class="preloader-inner">
        <span class="preloader-inner-gap"></span>
        <span class="preloader-inner-left">
          <span class="preloader-inner-half-circle"></span>
        </span>
        <span class="preloader-inner-right">
          <span class="preloader-inner-half-circle"></span>
        </span>
      </span>
    </div>`);
    root.insertAdjacentElement('beforeend', preloader);
    return {done: () => preloader.remove()};
  }
}

async function get_session() {
  const session_db = window.session_db;
  if (window.models) {
    return {models: window.models, tools: window.tools, local_db: window.local_db};
  }
  try {
    const session_object = await session_db.get('session');
    ORM(session_object);
    return {models: window.models, tools: window.tools, local_db: window.local_db};
  }
  catch(error) {
    return {};
  }
}

async function login(args) {
  args.encrypted = args.encrypted ? true: false;
  const session = await ajax('post', 'json', window.localStorage.rapyd_server_url + '/api/login', args);
  try {
    const session_object = await window.session_db.get('session');
    session._rev = session_object._rev;
    session.unsaved = session_object.unsaved;
    session.client_js = session.client_js || session_object.client_js
    session.client_js_time = session.client_js_time || session_object.client_js_time
  }
  catch(error) {
    session.unsaved = {};
  }
  session._id = 'session';
  return window.session_db.put(session);
}

function ORM(session) {
  window.localStorage.rapyd_server_url = session.url;
  // eslint-disable-next-line
  new Function(session.client_js)();
  const tools = window.tools;
  tools.configuration.url = session.url;
  const models = window.models;
  models.env.context.unsaved = session.unsaved || {};
  models.env.user = models.env['res.users'].browse();
  models.env.user.id = session.id;
  models.env.user.login = session.login;
  models.env.user.password = session.password;
}

function ajax(type, dataType, url, data) {
  if (data !== undefined || null || false) {
    data = parseURI(data);
  }
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(type, url, true);
    xhr.onload = function() {
      resolve(this.response);
    };
    xhr.onerror = function() {
      reject(this.statusText);
    };
    if (dataType === undefined) {
      dataType = 'json';
    }
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.responseType = dataType;
    try {
      xhr.send(data);
    }
    catch(error) {
      reject(error);
    }
  });
}

function parseURI(data) {
  const array = [];
  for (let key in data) {
    let value = data[key];
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    else if (value === '') {
      value = null;
    }
    array.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
  }
  return array.join('&');
}

export default {preload, get_session, login, ORM, ajax, parseURI};
