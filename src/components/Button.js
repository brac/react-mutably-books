import React from 'react';

function Button(props) {
  // jshint ignore:start
  return (
    <button className={props.className} onClick={props.handleClick} name={props.name}>
      {props.value}
    </button>
  );
  // jshint ignore:end
}

export default Button;