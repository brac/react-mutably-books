import React, { Component } from 'react';

class EditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      author: '',
      releaseDate: '',
    };

    this.handelChange = this.handelChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handelChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

 handleSubmit(event) {
    alert('Something was submitted: ' + this.state);
    event.preventDefault();
  }

  render(){
    //jshint ignore:start
    return (
      <form className="edit-form" data-edit-id="TODO">
        <div className="form-group">
          <label htmlFor="book-title">
            Book Title
          </label>
          <input
            name="title"
            type="text"
            autoComplete="title"
            className="form-control"
            id="book-title"
            placeholder={this.props.title}
            value={this.state.title}
            onChange={this.handelChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="book-author">
            Author
          </label>
          <input
            name="author"
            type="text"
            autoComplete="author"
            className="form-control"
            id="book-author"
            placeholder={this.props.author}
            value={this.state.author}
            onChange={this.handelChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="book-releasedate">
            Release Date
          </label>
          <input
            name="releaseDate"
            type="text"
            autoComplete="date"
            className="form-control"
            id="book-releasedate"
            placeholder={this.props.releaseDate}
            value={this.state.releaseDate}
            onChange={this.handelChange}
          />
        </div>
      </form>
    )
    //jshint ignore:end
  }

}

export default EditForm;
