
import React from 'react';
import {
    List,
    ListInput,
    F7Button as Button,
} from 'framework7-react';
import {React as Selectivity, Templates} from 'selectivity/react';
import 'selectivity/styles/selectivity-react.css';
import Flatpickr from './Flatpickr';
import api from 'api';


const singleSelectInput = Templates.singleSelectInput;
Templates.singleSelectInput = (options) => singleSelectInput(options).replace('<i class="fa fa-sort-desc selectivity-caret"></i>', '<i class="selectivity-caret material-icons">expand_more</i>');
const singleSelectedItem = Templates.singleSelectedItem;
Templates.singleSelectedItem = (options) => singleSelectedItem(options).replace('<i class="fa fa-remove"></i>', '<i class="selectivity-remove material-icons">close</i>');
const multipleSelectedItem = Templates.multipleSelectedItem;
Templates.multipleSelectedItem = (options) => multipleSelectedItem(options).replace('<i class="fa fa-remove"></i>', '<i class="selectivity-remove selectivity-multi-remove material-icons">close</i>');

export default class extends React.Component {
  /*constructor(props) {
    super(props);

    this.props = props;
  }*/

  async setValue(value, altvalue) {
    window.models.env.context.active_error && (window.models.env.context.active_error.field_map[this.props.name] = false);
    if (!this.props.cellEdit) window.models.env.context.active_id[this.props.name] = value;
    return await this.setState({value: altvalue || value});
  }

  async componentDidMount() {
    //if (!window.models.env.context.active_id) window.models.env.context.active_id = window.models.env[window.models.env.context.active_model].browse();
    await api.wait_exist(() => window.models.env.context.active_id);
    const props = this.props;
    const models = window.models;
    const model = props.model || window.models.env.context.active_model;
    const field = window.models.env[model]._fields[props.name];
    const type = field.type;
    const context = window.models.env.context;
    if (context.active_id._pending_promises.length > 0) await context.active_id._wait_promise();
    const value = props.cellEdit ? null : context.active_id && context.active_id[this.props.name];
    if (this.props.ref_object) Object.assign(this.props.ref_object, this.refs, {loaded: true});
    if (this.refs.input) {
      if (!api.hasValue(['text', 'data', 'boolean'], type)) {
        this.refs.input.$listEl[0].querySelector('input').value = value;
      }
      else if (type === 'boolean') {
        this.refs.input.$listEl[0].querySelector('input').checked = value;
      }
      else {
        this.refs.input.$listEl[0].querySelector('textarea').value = type !== 'data' ? value : JSON.stringify(value);
      }
    }
    else if (api.hasValue(['many2many', 'one2many', 'many2one', 'one2one'], type) && !props.children) {
      if (!value) {
        return this.setState({value: undefined});
      }
      //const model = props.model || window.models.env.context.active_model;
      //const field = window.models.env[model]._fields[props.name];
      const records = await models.env[field.relation].browse(value);
      if (value.constructor === String) {
        return this.setState({value: {id: records.id, text: records[records._rec_name || 'name']}});
      }
      else if (value.constructor === Array) {
        return this.setState({value: Array.from(records.__iter__()).map((record) => ({id: record.id, text: record[record._rec_name || 'name']}))});
      }
    }
    else if (type === 'selection') {
      if (this.props.widget === 'statusbar') return this.setState({value});
      return this.setState({value: value && {id: value, text: window.tools.dict(field.selection)[value]}});
    }
    else if (api.hasValue(['date', 'datetime'], type)) {
      return this.setState({value, input: this.refs.date_input.$listEl[0].querySelector('input')});
    }
    else {
      return this.setState({value});
    }
  }

  componentWillUnmount() {
    if (this.refs.selectivity && this.refs.selectivity.selectivity) this.refs.selectivity.selectivity.destroy();
  }

  render(props) {
    const models = window.models;
    const model = props.model || window.models.env.context.active_model;
    const field = window.models.env[model]._fields[props.name];
    if (!field) return;
    const string = props.string || field.string;
    const type = field.type;
    const types = {char: 'text', text: 'textarea', float: 'number', integer: 'number', data: 'textarea', 'boolean': 'checkbox'};
    const context = window.models.env.context;
    const refs = this.refs;
    const active_id = props.cellEdit ? this.props.tree.state.records[this.props.rowIndex].id && context.active_lines[model].find(this.props.tree.state.records[this.props.rowIndex].id) || this.props.tree.state.records[this.props.rowIndex]._original_object_for_id : context.active_id
    const invisible = props.invisible instanceof Function && active_id ? props.invisible(active_id) : props.invisible;
    props.readonly = field.readonly || props.readonly;
    const readonly = props.readonly instanceof Function && active_id ? props.readonly(active_id) : props.readonly;

    async function fetch(url, init, query) {
      try {
        const limit = 10
        models.env.context.active_limit = limit;
        models.env.context.active_index = query.offset / limit;
        const records = await models.env[field.relation].with_context({no_preload: true}).search([(models.env[field.relation]._rec_name || 'name'), 'ilike', query.term]);
        if (models.env.context.active_lines[field.relation]) {
          for (var inverse_field in models.env.context.active_lines[model]) {
            records.add(models.env.context.active_lines[field.relation][inverse_field].filter((record) => record[record._rec_name || 'name'] && record[record._rec_name || 'name'].toLowerCase().indexOf(query.term.toLowerCase()) !== -1));
          }
        }
        const results = [];
        if (type === 'selection') return {results, more: false};
        for (let record of records) {
          if (!record.id) {
            const id = 'etemp' + Math.random().toString(36).substr(2, 9);
            if (!api.globals.temp_records) api.globals.temp_records = {};
            api.globals.temp_records[id] = record;
            results.push({id, text: record[record._rec_name || 'name']});
            continue;
          }
          results.push({id: record.id, text: record[record._rec_name || 'name']});
        }
        models.env.context.active_index = 0;
        console.log((query.offset / limit + 1) * limit < records._search_count);
        console.log(results);
        return {results: results, more: (query.offset / limit + 1) * limit < records._search_count};
      }
      catch(error) {
        console.error(error);
        throw error;
      }
    }

    if (api.hasValue(['many2many', 'one2many'], type) && props.children) {
      return props.children;
    }

    let component;

    if (type === 'selection' && props.widget === 'statusbar') {
      let first = true;
      const selections = window.tools.copy(field.selection).reverse();
      component = (
        <div style={invisible ? {display: 'none'} : {}}>
          {selections.map((selection) => 
          first ? <Button raised={models.env.context.active_id && models.env.context.active_id[props.name] === selection[0]} className="rapyd-statusbars">{(first = false) || selection[1]}</Button> : [<span className="rapyd-statusbars rapyd-statusbar-arrow">{'>'}</span>, <Button raised={models.env.context.active_id && models.env.context.active_id[props.name] === selection[0]} className="rapyd-statusbars">{selection[1]}</Button>]
          )}
        </div>
      );
      return component;
    }

    if (api.hasValue(['many2many', 'one2many', 'many2one', 'one2one', 'selection'], type)) {
      let ajax;
      let items = null;
      if (api.hasValue(['many2many', 'one2many', 'many2one', 'one2one'], type)) {
        ajax = {url: window.tools.configuration.url, minimumInputLength: 0, params: () => ({}), placeholder: '', fetch: fetch};
      }
      else if (type === 'selection') {
        items = field.selection.map((selection) => ({id: selection[0], text: selection[1]}));
      }
      component = (
        <ListInput label={string} input={false} errorMessageForce={window.models.env.context.active_error ? window.models.env.context.active_error.field_map[props.name] : false} errorMessage="Field required">
          <Selectivity ref="selectivity" slot="input" ajax={ajax} items={items} placeholder={props.placeholder || ''} readOnly={readonly || !context.editing} multiple={api.hasValue(['many2many', 'one2many'], type)} data={this.state.value} onChange={(event) => this.setValue(event.value, event.data)} onDropdownClose={props.onSelect} allowClear closeOnSelect/>
        </ListInput>
      );
      if (props.cellEdit) return component.children[0];
    }
    else if (api.hasValue(['date', 'datetime'], type)) {
      const input = (
        <ul>
          <ListInput ref="date_input" label={string} placeholder={props.placeholder || ''} disabled={readonly || !context.editing} errorMessageForce={window.models.env.context.active_error ? window.models.env.context.active_error.field_map[props.name] : false} errorMessage="Field required"/>
        </ul>
      );
      component = (
        <Flatpickr customComponent={input} customInput={this.state.input} enableTime={type === 'datetime' && true} enableSeconds={type === 'datetime' && true} defaultDate={this.state.value} onChange={(value) => this.setValue(value)}/>
      );
      if (props.cellEdit) return component.children.children;
    }
    else {
      component = (
        <ListInput ref="input" label={string} type={types[type]} placeholder={props.placeholder || ''} disabled={readonly || !context.editing} onChange={(event) => this.setValue(event.target.type !== 'checkbox' ? event.target.value : event.target.checked)} errorMessageForce={window.models.env.context.active_error ? window.models.env.context.active_error.field_map[props.name] : false} errorMessage="Field required"/>
      );
    }

    return (
      <List style={invisible ? {display: 'none'} : {}}>
        {component}
      </List>
    );
  }
}
