import React from 'react';
import {
    List,
    ListInput,
} from 'framework7-react';
//import api from 'api';

export default class extends React.Component {
  /*constructor(props) {
    super(props);

    this.props = props;
  }*/

  componentDidUpdate() {
    const context = window.models.env.context;
    const value = context.active_id && context.active_id[this.props.name];
    console.log(window.models.env.context.active_id);
    this.refs.input.$listEl[0].querySelector('input').value = value;
  }

  render(props) {
    const model = window.models.env.context.active_model;
    const field = window.models.env[model]._fields[props.name];
    const string = props.string || field.string;
    const type = field.type;
    const types = {char: 'text', text: 'textarea', float: 'number', integer: 'number'};
    const context = window.models.env.context;

    return (
      <List>
        <ListInput ref="input" label={string} type={types[type]} placeholder={props.placeholder || ''} disabled={!context.editing} onChange={(event) => window.models.env.context.active_id[props.name] = event.target.value}>
        </ListInput>
      </List>
    );
  }
}
