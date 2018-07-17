import React from 'react';
import CardImg from './CardImg'
import CardInfo from './CardInfo'

function Card(props) {
  return (
    <div className="card mb-4" style={{width:"18rem"}}>
      <CardImg
        image={props.image}
        alt={props.title}
      />

      <CardInfo
        title={props.title}
        author={props.author}
        releaseDate={props.releaseDate}
      />
      </div>
    );
  //jshint ignore:end
}

export default Card;
