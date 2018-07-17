import React from 'react';

function CardImg(props) {
  //jshint ignore:start
  return(
      <img
        className="card-img-top"
        src={props.image}
        alt={props.alt}
      />
    )
  //jshint ignore:end
}

export default CardImg;
