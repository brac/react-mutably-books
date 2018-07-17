import React, { Component } from 'react';
import Button from './Button'

class ButtonRow extends Component {
  // constructor(props){
  //   super(props);
    // this.state = {
    //   showEditButton: true,
    // };
    // this.handleClick = this.handleClick.bind(this);
  // }

/*  handleClick(event){
    this.setState(prevState => ({
      showEditButton: !prevState.showEditButton
    }));
  }*/

  render(){
    //jshint ignore:start
    return(
          <div className="container mb-2 mt-3">
            {this.props.showEditForm ?
              <Button
                className="btn btn-info mr-2 mb-2"
                data-id="TODO"
                value="Edit"
                name="edit-btn"
                handleClick={this.props.handleClick}
              /> :
              <Button
                className="btn btn-success mr-2 mb-2"
                data-id="TODO"
                value="Save"
                handleClick={this.props.handleClick}
              />
            }

            <Button
              className="btn btn-danger ml-2 mb-2"
              data-id="TODO"
              value="Delete"
            />
          </div>
        );
    //jshint ignore:end
  }
}

export default ButtonRow;
