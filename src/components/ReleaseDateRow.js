import React from 'react';

function ReleaseDateRow(props) {
  //jshint ignore:start
  return (
      <p className="card-text">
        {props.releaseDate}
      </p>
    );
  //jshint ignore:end
}

export default ReleaseDateRow;
