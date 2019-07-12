import React from 'react';
//import Parser from 'react-jsx-parser';
import Tree from '../Tree';
//import Field from '../Field';
//import {transform as Parser} from 'babel-core';
//import preset from '@babel/preset-react';
import api from 'api';

const customComponents = {Tree, Field: null};

const function_string =
`if (!active_id) return false;
var True = true;
var False = false;
var None = null;
return `;


function parseView(view, model, title) {
  view = new DOMParser().parseFromString(view, 'text/xml').children[0];
  console.log(view);
  if (title) view.setAttribute('title', title);
  function recurse(elements) {
    let components = [];
    for (let element of elements) {
      const component = customComponents[element.tagName[0].toUpperCase() + element.tagName.toLowerCase().slice(1)] || customComponents[element.tagName] || element.tagName;
      const props = {model};
      for (let attribute of element.attributes) {
        props[attribute.name] = attribute.value;
      }
      for (let attribute of ['invisible', 'required', 'readonly']) {
        if (api.hasKey(props, attribute)) {
          if (api.hasValue(['true', 'True'], props[attribute])) props[attribute] = true;
          if (api.hasValue(['false', 'False'], props[attribute])) props[attribute] = false;
          if (props[attribute].constructor === Boolean) continue;
          if (api.hasValue(props[attribute], ' == ')) props[attribute] = props[attribute].replace('==', '===');
          if (api.hasValue(props[attribute], ' != ')) props[attribute] = props[attribute].replace('!=', '!==');
          if (api.hasValue(props[attribute], ' === ') || api.hasValue(props[attribute], ' !== ')) props[attribute] = new (Function.prototype.bind.apply(Function, [null, 'active_id', function_string + props[attribute]]))();
        }
      }
      if (props.domain) props.domain = new (Function.prototype.bind.apply(Function, [null, 'active_id', function_string + '[' + props.domain + ']']))();
      props.isTreeView = true;
      components.push(React.createElement(component, props, recurse(element.children)));
    }
    components = components.length === 1 ? components[0] : components;
    return components
  }
  return recurse([view]);
}

const cachedViews = {};

const render = (props) => {
  let model = window.models.env.context.active_model;
  if (props.f7route && props.f7route.url) window.models.env.context.active_url = props.f7route.url;
  else window.models.env.context.active_url = '/';
  if (props.f7route && props.f7route.params && props.f7route.params.model) {
    model = props.f7route.params.model;
  }/* else {
    window.models.env.context.active_url = '/';
  }*/
  this.model = model;
  this.mode = 'tree';
  const view = window.tools.view[model].tree;
  window.models.env.context.active_model = model;

  if (!cachedViews[view + (props.title ? '-' + props.title : '')]) {
    // eslint-disable-next-line
    //cachedViews[view] = evals(Parser(view, {presets: [preset]}).code);
    cachedViews[view + (props.title ? '-' + props.title : '')] = parseView(view, model, props.title);
  }

  return cachedViews[view + (props.title ? '-' + props.title : '')];

  /*return (
    <Parser components={{Tree}} jsx={view} renderInWrapper={false}/>
  );*/
}

export default class extends React.Component {
  componentDidMount() {
    const model = this.model, mode = this.mode;
    if (window.tools.view[model].custom_init && window.tools.view[model].custom_init[model + '.' + mode]) window.tools.view[model].custom_init[model + '.' + mode].bind(this)(this.props);
  }

  render(props) {
    return render.bind(this)(props);
  }

}
