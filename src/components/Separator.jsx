import React from 'react';

export default class extends React.Component {
  render(props) {
    if (props.width && props.width.slice(-1) === '%' && parseInt(props.width.slice(0, -1)) > 97) {
      props.width = '97%';
    }
    return (
      <div className="component-separator" style={{float: 'left', width: props.width || '46.5%', height: '50px' : this.state.lastHeight ...((props.invisible instanceof Function ? props.invisible(window.models.env.context.active_id) : props.invisible) ? {position: 'absolute', left: '-9999px', top: '-9999px'} : {})}}/>
    );
  }
}
