import React, { Component } from 'react';
// import React from 'react';

class Button extends Component {
  //jshint ignore:start
  render(){
    if (this.props.value !== 'Delete') {
      return (
        <button
          className={this.props.className}
          onClick={this.props.handleClick}
          name={this.props.name}
          _id={this.props._id}
        >{
          this.props.value
        }
        </button>
      );

    } else {
      return(
        <button
          className={this.props.className}
          onClick={() => this.props.handleClick(this.props._id)}
          name={this.props.name}
          _id={this.props._id}
        >{
          this.props.value
        }
        </button>
      )
    }
  }
  //jshint ignore:end
}

export default Button;