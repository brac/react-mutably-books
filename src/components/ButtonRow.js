import React from 'react';
import Button from './Button'

function ButtonRow(props) {
  //jshint ignore:start
  return(
    <div className="container mb-2 mt-3">
      {props.showEditForm ?
        <Button
          className="btn btn-success mr-2 mb-2"
          data-id="TODO"
          value="Save"
          handleClick={props.handleSave}
        /> :
        <Button
          className="btn btn-info mr-2 mb-2"
          data-id="TODO"
          value="Edit"
          name="edit-btn"
          handleClick={props.handleEdit}
        />
      }
      <Button
        className="btn btn-danger ml-2 mb-2"
        data-id="TODO"
        value="Delete"
        handleClick={props.handleDelete}
      />
    </div>
  );
  //jshint ignore:end
}

export default ButtonRow;
