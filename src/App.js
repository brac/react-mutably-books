import React, { Component } from 'react';
import './App.css';

// TODO:
//    Save Button
//    Button Switch
//    Edit Book Form
//    Edit Book
//    Single Truth / Controlled Components
//    Delete Book
//    Create Book
//    Refactor to seperate files
//    Code Review
//    Deploy to Heroku

function Button(props) {
  // jshint ignore:start
  return (
    <button className={props.className}>
      {props.value}
    </button>
  );
  // jshint ignore:end
}

function TitleRow(props) {
 //jshint ignore:start
  return (
     <h5 className="card-title mt-2">{props.title}</h5>
   );
 //jshint ignore:end
}

function AuthorRow(props) {
  //jshint ignore:start
  return (
      <h6 className="card-subtitle mb-2 text-muted">
        {props.author}
      </h6>
    );
  //jshint ignore:end
}

function ReleaseDateRow(props) {
  //jshint ignore:start
  return (
      <p className="card-text">
        {props.releaseDate}
      </p>
    );
  //jshint ignore:end
}

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

class Card extends Component {
 // constructor(props){
 //    super(props);
 //  }

  render(){
    //jshint ignore:start
    return (
          <div className="card mb-5" style={{width:"18rem"}}>
            <CardImg
              image={this.props.image}
              alt={this.props.title}
            />
            <InfoTable
              title={this.props.title}
              author={this.props.author}
              releaseDate={this.props.releaseDate}
            />
            <ButtonRow />
          </div>
        );
    //jshint ignore:end
  }

}

class InfoTable extends Component {
  // constructor(props){
    // super(props);
  // }

  render(){
    //jshint ignore:start
    return (
          <div className="container" data-cardtext-id="123">
            <TitleRow
              title={this.props.title}
            />
            <AuthorRow
              author={this.props.author}
            />
            <ReleaseDateRow
              releaseDate={this.props.releaseDate}
            />
          </div>
        );
    //jshint ignore:end
  }
}

class ButtonRow extends Component {
  render(){
    //jshint ignore:start
    return(
          <div className="container mb-4 mt-2">
            <Button className="btn-primary rounded mr-2" value="Edit"/>
            <Button className="btn-danger rounded  ml-2" value="Delete"/>
          </div>
        );
    //jshint ignore:end
  }
}

class NewBookForm extends Component {

  render(){
    //jshint ignore:start
    return(
          <div className="container col">
            <div className="conatiner border rounded">
                <h4>Add a Book</h4>
                <form id="new-book-form">
                  <div className="form-group">
                    <label for="newBookTitle">Book Title</label>
                    <input name="title" type="text" className="form-control" id="newBookTitle" placeholder="The name of the wind" aria-describedby="newBookHelp"/>
                    <small id="newBookHelp" className="form-text text-muted">Enter the title of a new book</small>
                  </div>

                  <div className="form-group">
                    <label for="newBookAuthor">Author</label>
                    <input name="author" type="text" class="form-control" id="newBookAuthor" placeholder="Ex: Patrick Rothfuss" aria-describedby="newBookAuthorHelp" />
                    <small id="newBookAuthorHelp" class="form-text text-muted">Full name of the Author(s)</small>
                  </div>

                  <div className="form-group">
                    <label for="newBookImg">Image</label>
                    <input name="image" type="text" class="form-control" id="newBookImg" placeholder="Ex: https://images-na.ssl-images-amazon.com/images/I/51MUF7bj-lL._SY346_.jpg" aria-describedby="newBookImgHelp" />
                    <small id="newBookImgHelp" class="form-text text-muted">Link to book graphic</small>
                  </div>

                  <div className="form-group">
                    <label for="newBookReleaseDate">Image</label>
                    <input name="releaseDate" type="text" class="form-control" id="newBookReleaseDate" placeholder="Ex: April 1st 2008" aria-describedby="newBookReleaseDateHelp" />
                    <small id="newBookReleaseDateHelp" class="form-text text-muted">Date Originally Published</small>
                  </div>

                  <div class="container text-center mb-4">
                    <button type="submit" class="btn btn-primary new-book-submit">Submit</button>
                  </div>

                </form>
            </div>
          </div>
        )
    //jshint ignore:end
  }
}

class BookList extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      books: []
    };

    this.renderCard = this.renderCard.bind('this');
  }

  renderCard(book){
    //jshint ignore:start
    return (
          <Card
            image={book.image}
            title={book.title}
            author={book.author}
            releaseDate={book.releaseDate}
          />
        )
    //jshint ignore:end
  }

  componentDidMount() {
    fetch(`https://quiet-ravine-87109.herokuapp.com/books`)
      .then( res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          books: result.books
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
      });
    });
  }


  render(){
    const { error, isLoaded, books } = this.state;

    if (error) {
      //jshint ignore:start
      return(
        <div>Error {error.message}</div>
      );
      //jshint ignore:end
    } else if (!isLoaded) {
      //jshint ignore:start
      return <div style={{width:"18rem"}}>Loading...</div>
      //jshint ignore:end
    } else {

      //jshint ignore:start
      return(
              <ul className="list-unstyled text-center list-group col">
                {
                  books.map(book => {
                  return (
                    <li key={book._id}>
                      {this.renderCard({
                        image: book.image,
                        title: book.title,
                        author: book.author,
                        releaseDate: book.releaseDate,
                      })}
                    </li>
                )})}
              </ul>
            )
      //jshint ignore:end
    }
  }
}

class App extends Component {
  render() {
    //jshint ignore:start
    return (
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Welcome to Mute Books</h1>
            </header>
            <div className="container ">

              <div className="row">

                <BookList />
                <NewBookForm />

              </div>
            </div>
          </div>
        );
    //jshint ignore:end

  } // end render()
} // end class App

export default App;
