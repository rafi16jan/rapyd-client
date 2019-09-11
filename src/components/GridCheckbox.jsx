import React from 'react';

function changeValue(props) {
  const value = !props.value;
  const colDef = window.tools.copy(props.column.colDef);
  delete colDef.cellEditorFramework;
  const field = window.models.env[props.model]._fields[props.name];
  const records = field.relation && window.models.env[field.relation];
  return props.tree.onChange({colDef, data: props.tree.state.records[props.rowIndex], specialValue: value, oldValue: props.value, newValue: value});
}

export default (props) => (
  <span className="ag-selection-checkbox">
    <span className={'ag-icon ' + (props.value ? 'ag-icon-checkbox-checked' : 'ag-icon-checkbox-unchecked')}/>
  </span>
)
