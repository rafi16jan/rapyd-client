import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state.lastHeight = 0.0;
  }

  componentDidMount(props) {
    if (this.haveChild && this.refs.group.previousElementSibling === null) {
      return;
    }
    setTimeout(() => {
      const lastHeight = this.refs.group.previousElementSibling.clientHeight - 20;
      this.setState({lastHeight: lastHeight});
    }, 500);
  }

  render(props) {
    this.haveChild = props.children !== undefined;
    if (props.width && props.width.slice(-1) === '%' && parseInt(props.width.slice(0, -1)) > 97) {
      props.width = '97%';
    }
    return (
      <div ref="group" style={{float: 'left', width: props.width || '46.5%', padding: '10px', marginTop: '20px', height: props.children ? 'auto' : this.state.lastHeight + 'px'}}>
        {props.children}
      </div>
    );
  }
}
