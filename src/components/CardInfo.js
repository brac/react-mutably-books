import React, { Component } from 'react';
import InfoTable from './InfoTable'
import EditForm from './EditForm'
import ButtonRow from './ButtonRow'

class CardInfo extends Component {
  constructor(props){
    super(props)

    this.state = {
      _id: props._id,
      image: props.image,
      title: props.title,
      author: props.author,
      releaseDate: props.releaseDate,

      showEditForm: false,
      editSuccess: false,
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
    this.setState(prevState => ({
      showEditForm: !prevState.showEditForm
    }));
  }

  handleSave(event){
    const data = this.state
    const url = `https://quiet-ravine-87109.herokuapp.com/books/${data._id}`

    let fetchData = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: new Headers({'Content-Type': 'application/json'})
    }

    fetch(url, fetchData)
      .then(validateResponse)
      .then(readResponseAsJSON)
      .then(logResponse)
      .catch(logError)

    function logError(error){
      console.error(error)
    }

    function logResponse(result){
      console.log('Successfully edited')
    }

    function readResponseAsJSON(response) {
      return response.json();
    }

    function validateResponse(response) {
      if (!response.ok) {

        throw Error(response.statusText)
      }
      return response
    }

    this.setState(prevState => ({
      showEditForm: !prevState.showEditForm,
    }));
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
            title={this.props.title}
            author={this.props.author}
            releaseDate={this.props.releaseDate}
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
