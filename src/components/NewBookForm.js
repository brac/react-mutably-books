// jshint asi:true

import React, { Component } from 'react';

class NewBookForm extends Component {
  render(){
    //jshint ignore:start
    return (
      <div className="container col">
        <div className="conatiner border rounded p-4">
            <h4>Add a Book</h4>
            <form id="new-book-form" onSubmit={this.props.handleSubmit}>
              <div className="form-group">
                <label htmlFor="newBookTitle">
                  Book Title
                </label>
                <input
                  name="title"
                  type="text"
                  className="form-control"
                  id="newBookTitle"
                  placeholder="The name of the wind"
                  aria-describedby="newBookHelp"
                  value={this.props.book.title}
                  onChange={this.props.handleChange}
                />

                <small id="newBookHelp" className="form-text text-muted">
                  Enter the title of a new book
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="newBookAuthor">
                  Author
                </label>
                <input
                  name="author"
                  type="text"
                  className="form-control"
                  id="newBookAuthor"
                  placeholder="Ex: Patrick Rothfuss"
                  aria-describedby="newBookAuthorHelp"
                  value={this.props.value}
                  onChange={this.props.handleChange}
                />
                <small id="newBookAuthorHelp" className="form-text text-muted">
                  Full name of the Author(s)
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="newBookImg">
                  Image
                </label>
                <input
                  name="image"
                  type="text"
                  className="form-control"
                  id="newBookImg"
                  placeholder="Ex: https://images-na.ssl-images-amazon.com/images/I/51MUF7bj-lL._SY346_.jpg"
                  aria-describedby="newBookImgHelp"
                  value={this.props.value}
                  onChange={this.props.handleChange}
                />
                <small id="newBookImgHelp" className="form-text text-muted">Link to book graphic</small>
              </div>

              <div className="form-group">
                <label htmlFor="newBookReleaseDate">
                  Release Date
                </label>
                <input
                  name="releaseDate"
                  type="text"
                  className="form-control"
                  id="newBookReleaseDate"
                  placeholder="Ex: April 1st 2008"
                  aria-describedby="newBookReleaseDateHelp"
                  value={this.props.value}
                  onChange={this.props.handleChange}
                />

                <small id="newBookReleaseDateHelp" className="form-text text-muted">Date Originally Published</small>
              </div>

              <div className="container text-center mb-4">
                <button type="submit" className="btn btn-primary new-book-submit">Submit</button>
              </div>
            </form>
        </div>
      </div>
    )
    //jshint ignore:end
  }
}

export default NewBookForm;