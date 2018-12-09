import React from 'react';
//import Parser from 'react-jsx-parser';
import Tree from '../Tree';
import Field from '../Field';
import {transform as Parser} from 'babel-core';
import preset from '@babel/preset-react';

window.React = React;
window.Tree = Tree;
window.Field = Field;

const cachedViews = {};

export default (props) => {
  console.log(props);
  let model = window.models.env.context.active_model;
  if (props.f7route) {
    model = props.f7route.params.model;
    window.models.env.context.active_url = props.f7route.url;
  } else {
    window.models.env.context.active_url = '/';
  }
  const view = window.tools.view[model].tree;
  window.models.env.context.active_model = model;

  if (!cachedViews[view]) {
    // eslint-disable-next-line
    cachedViews[view] = eval(Parser(view, {presets: [preset]}).code);
  }

  return cachedViews[view];

  /*return (
    <Parser components={{Tree}} jsx={view} renderInWrapper={false}/>
  );*/
}
