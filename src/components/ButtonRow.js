// jshint asi:true

import React, { Component } from 'react';
// import React from 'react';
import Button from './Button'

class ButtonRow extends Component {
  render(){
      //jshint ignore:start
      return(
        <div className="container mb-2 mt-3">
          {this.props.showEditForm ?
            <Button
              className="btn btn-success mr-2 mb-2"
              value="Save"
              handleClick={this.props.handleSave}
            /> :
            <Button
              className="btn btn-info mr-2 mb-2"
              value="Edit"
              name="edit-btn"
              handleClick={this.props.handleEdit}
            />
          }
          <Button
            className="btn btn-danger ml-2 mb-2"
            _id={this.props._id}
            value="Delete"
            handleClick={this.props.handleDelete}
          />
        </div>
      );
      //jshint ignore:end
  }
}

export default ButtonRow;
