import React from 'react'

export default (props) => {
  const style = { 
    backgroundImage: `url('${props.url}')`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center center', 
    height: props.height,
    ...props.style };
  return (
    <div style={style}>{props.children}</div>
  );
}
