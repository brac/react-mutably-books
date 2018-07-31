import React, { Component } from 'react';
// import React from 'react';
import CardImg from './CardImg'
import CardInfo from './CardInfo'

class Card extends Component{
  render(){
    return (
      <div className="card mb-4" style={{width:"18rem"}}>
        <CardImg
          image={this.props.image}
          alt={this.props.title}
        />

        <CardInfo
          _id={this.props._id}
          title={this.props.title}
          author={this.props.author}
          image={this.props.image}
          releaseDate={this.props.releaseDate}
          handleDelete={this.props.handleDelete}
        />
        </div>
      );
    //jshint ignore:end
  }
}

export default Card;
