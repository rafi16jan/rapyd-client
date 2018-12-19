import React from 'react';

export default (props) => {
  if (props.width && props.width.slice(-1) === '%' && parseInt(props.width.slice(0, -1)) > 97) {
    props.width = '97%';
  }
  return (
    <div style={{float: 'left', width: props.width || '46.5%', padding: '10px', marginTop: '20px'}}>
      {props.children}
    </div>
  )
}
