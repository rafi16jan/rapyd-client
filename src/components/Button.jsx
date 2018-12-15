import React from 'react';
import {
    Button,
} from 'framework7-react';
import api from 'api';

async function button(props) {
  const load = api.preload();
  if (props.name) {
    try {
      await window.models.env.context.active_id[props.name]();
    }
    catch(error) {
      console.log(error);
      load.done();
    }
  }
  load.done();
}

export default (props) => {

  return (
    <Button fill onClick={() => button.bind(this)(props)} style={{display: 'inline-block', margin: '10px'}}>{props.string}</Button>
  );
}
