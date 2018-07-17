import React, { Component } from 'react';
import CardImg from './CardImg'
import CardInfo from './CardInfo'
import ButtonRow from './ButtonRow'

class Card extends Component {
  constructor(props){
    super(props)
    this.state = {
      showEditForm: true,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    this.setState(prevState => ({
      showEditForm: !prevState.showEditForm
    }));
  }


  render(){
    //jshint ignore:start
    return (
          <div className="card mb-4" style={{width:"18rem"}}>
            <CardImg
              image={this.props.image}
              alt={this.props.title}
            />
            <CardInfo
              title={this.props.title}
              author={this.props.author}
              releaseDate={this.props.releaseDate}
              showEditForm={this.state.showEditForm}
            />
            <ButtonRow
              showEditForm={this.state.showEditForm}
              handleClick={this.handleClick}
            />

          </div>
        );
    //jshint ignore:end
  }
}

export default Card;
