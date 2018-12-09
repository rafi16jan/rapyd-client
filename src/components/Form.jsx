import React from 'react';
import Page from './Page';
import {Button} from 'framework7-react';

export default class extends React.Component {
  constructor(props) {
    super(props);

    //const model = window.models.env.context.active_model;
    const models = window.models;
    //const active_id = window.models.env.context.active_id || null;
    models.env.context.editing = false;
    //models.env.context.new_value = {};
    this.state = models.env.context;//{editing: false, active_id: active_id};
  }

  async componentDidMount(props) {
    const model = window.models.env.context.active_model;
    const models = window.models;
    if (!models.env.context.active_ids[0]) {
      models.env.context.active_id = models.env[model].browse();
      models.env.context.editing = true;
      this.setState(models.env.context);
      return;
    }
    else if (!models.env.context.active_id) {
      models.env.context.active_id = await models.env[model].browse(models.env.context.active_ids);
    }
    this.setState({active_id: models.env.context.active_id})
  }

  async edit() {
    const models = window.models;
    if (!this.state.editing) {
      models.env.context.editing = true;
      this.setState(models.env.context);
      return
    }
    
  }

  render(props) {
    const model = window.models.env.context.active_model;
    console.log(this.state);
    //const models = window.models;
    return (
      <Page title={window.tools.view[model].string}>
        <div className="card" style={{margin: 0, boxShadow: 'none'}}>
          <div className="card-header">
            <div className="data-table-title">
              {window.tools.view[model].string}
              <span style={{color: '#666666'}}>{' / ' + (this.state.active_id && this.state.active_id.id ? this.state.active_id.name : 'New')}</span>
              <Button onClick={this.edit.bind(this)} style={{width: '50px'}} fill>{this.state.editing ? 'Save' : 'Edit'}</Button>
            </div>
          </div>
          {props.children}
        </div>
      </Page>
    );
  }
}
