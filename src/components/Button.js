import React, { Component } from 'react';
// import React from 'react';

class Button extends Component {
  render(){
    return (
      <button className={this.props.className} onClick={this.props.handleClick} name={this.props.name}>
        {this.props.value}
      </button>
    );
  }
}

export default Button;