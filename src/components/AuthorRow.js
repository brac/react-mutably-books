import React from 'react';

function AuthorRow(props) {
  //jshint ignore:start
  return (
      <h6 className="card-subtitle mb-2 text-muted">
        {props.author}
      </h6>
    );
  //jshint ignore:end
}

export default AuthorRow;
