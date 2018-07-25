import React from 'react';

function EditForm(props) {
  return(
  //jshint ignore:start
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
          placeholder={props.title}
          onChange={props.handleChange}
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
          placeholder={props.author}
          onChange={props.handleChange}
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
          placeholder={props.releaseDate}
          onChange={props.handleChange}
        />
      </div>
    </form>
//jshint ignore:end
  )
}

export default EditForm;