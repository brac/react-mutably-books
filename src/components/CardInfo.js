import React, { Component } from 'react';
import InfoTable from './InfoTable'
import EditForm from './EditForm'
import ButtonRow from './ButtonRow'

class CardInfo extends Component {
  constructor(props){
    super(props)
    this.state = {
      showEditForm: false,
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
    return(
      <div>
        {this.state.showEditForm ?
          <EditForm
            title={this.props.title}
            author={this.props.author}
            releaseDate={this.props.releaseDate}
          /> :
          <InfoTable
            title={this.props.title}
            author={this.props.author}
            releaseDate={this.props.releaseDate}
          />
        }
          <ButtonRow
            showEditForm={this.state.showEditForm}
            handleClick={this.handleClick}
          />
      </div>
    )
    //jshint ignore:end
  }
}

export default CardInfo;
