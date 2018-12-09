import React from 'react';
import Form from '../Form';
import Header from '../Header';
import Button from '../Button';
import Sheet from '../Sheet';
import Group from '../Group';
import Field from '../Field';
import Footer from '../Footer';
import {transform as Parser} from 'babel-core';
import preset from '@babel/preset-react';

window.React = React;
window.Form = Form;
window.Header = Header
window.Button = Button;
window.Sheet = Sheet;
window.Group = Group;
window.Field = Field;
window.Footer = Footer;

const cachedViews = {};

export default (props) => {
  let model = window.models.env.context.active_model;
  if (props.f7route) {
    model = props.f7route.params.model;
    window.models.env.context.active_url = props.f7route.url;     
  } else {
    window.models.env.context.active_url = '/';
  }
  const id = props.f7route.query.id;
  const view = window.tools.view[model].form;
  window.models.env.context.active_model = model;
  window.models.env.context.active_ids = [id];
  /*if (id) {
    window.models.env[model].browse(id).then((record) => window.models.env.context.active_id = record);
  }*/
  if (!cachedViews[view]) {
    // eslint-disable-next-line
    cachedViews[view] = eval(Parser(view, {presets: [preset]}).code);
  }

  return cachedViews[view];

}
