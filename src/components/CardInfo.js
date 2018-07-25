import React, { Component } from 'react';
import InfoTable from './InfoTable'
import EditForm from './EditForm'
import ButtonRow from './ButtonRow'

class CardInfo extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: props.title,
      author: props.author,
      releaseDate: props.releaseDate,
      showEditForm: false,
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  handleEdit(event){
    console.log(`
      Gonna edit something with id:
      ${this.props._id}
    `)

    this.setState(prevState => ({
      showEditForm: !prevState.showEditForm
    }));
  }

  handleSave(event){
    console.log(`
      I will save something with id:
      ${this.props._id}
    `)

    this.setState(prevState => ({
      showEditForm: !prevState.showEditForm
    }));

    console.log(this.state.title)
    console.log(this.state.author)
    console.log(this.state.releaseDate)
  }

  handleDelete(event){
    console.log(`
      I will delete something with id:
      ${this.props._id}
    `)
  }

  render(){
    //jshint ignore:start
    return(
      <div>
        {this.state.showEditForm ?
          <EditForm
            title={this.state.title}
            author={this.state.author}
            releaseDate={this.state.releaseDate}
            handleChange={this.handleChange}
          /> :
          <InfoTable
            title={this.state.title}
            author={this.state.author}
            releaseDate={this.state.releaseDate}
          />
        }
          <ButtonRow
            showEditForm={this.state.showEditForm}
            handleEdit={this.handleEdit}
            handleSave={this.handleSave}
            handleDelete={this.handleDelete}
          />
      </div>
    )
    //jshint ignore:end
  }
}

export default CardInfo;
