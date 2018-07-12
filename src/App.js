import React, { Component } from 'react';
import './App.css';

const tempBooks =[
  {
    _id: "5b44068383a77200144a45d3",
    title: "Around the World in 80 Days",
    author: "Jules Verne",
    image: `https://m.media-amazon.com/images/M/MV5BNjRhNjVlYTgtODZiOS00OTVhLWE4ZTItZjc3MTFiYWY1YjI5L2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    releaseDate: "January 30, 1873"
  }, {
    _id: "5b44068383a77200144a45d4",
    title: "Fire Upon the Deep",
    author: "Vernor Vinge",
    image: `https://images-na.ssl-images-amazon.com/images/I/51OrT3Zz%2BfL._SX299_BO1,204,203,200_.jpg`,
    releaseDate: "August 5th , 1998"
  }, {
    _id: "5b44068383a77200144a45d5",
    title: "Lord of the Rings",
    author: "JRR Toliken",
    image: `https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    releaseDate: "July 55th , 1899"
  },
];

// TODO:
//    Single Truth / Controlled Components
//    componentDidMount()() {}
//    list keys

/*
- App
  - List
    - Card
      - Img
      - InfoTable
        - Title row
        - Author row
        - ReleaseDate row
      - Button Row
        - Edit
        - Delete
    - Card
    - Card
    - etc
  - Form
    - Title input
    - Author input
    - ReleaseDate input
    - Save Button
*/

function Button(props) {
  /* jshint ignore:start */
  return (
    <button className={props.className}>
      {props.value}
    </button>
  );
  /* jshint ignore:end */
}

function TitleRow(props) {
  /* jshint ignore:start */
  return (
    <h5 className="card-title mt-2">{props.title}</h5>
  );
  /* jshint ignore:end */
}

function AuthorRow(props) {
  /* jshint ignore:start */
  return (
    <h6 className="card-subtitle mb-2 text-muted">
      {props.author}
    </h6>
  );
  /* jshint ignore:end */
}

function ReleaseDateRow(props) {
  /* jshint ignore:start */
  return (
    <p className="card-text">
      {props.releaseDate}
    </p>
  );
  /* jshint ignore:end */
}

function CardImg(props) {
  /* jshint ignore:start */
  return(
    <img
      className="card-img-top"
      src={props.image}
      alt={props.alt}
    />
  )
  /* jshint ignore:end */
}

class Card extends Component {
 // constructor(props){
 //    super(props);
 //  }
  /* jshint ignore:start */
  render(){
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
  }
  /* jshint ignore:end */

}

class InfoTable extends Component {
  // constructor(props){
    // super(props);
  // }

  /* jshint ignore:start */
  render(){
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
  }
  /* jshint ignore:end */
}

class ButtonRow extends Component {
  /* jshint ignore:start */
  render(){
    return(
      <div className="container mb-4 mt-2">
        <Button className="btn-primary rounded mr-2" value="Edit"/>
        <Button className="btn-danger rounded  ml-2" value="Delete"/>
      </div>
    );
  }
  /* jshint ignore:end */
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      books: []
    };

    this.renderCard = this.renderCard.bind('this');
  }

  /* jshint ignore:start */
  renderCard(book){
    return (
      <Card
        image={book.image}
        title={book.title}
        author={book.author}
        releaseDate={book.releaseDate}
      />
    )
  }

  componentDidMount() {
    fetch(`https://quiet-ravine-87109.herokuapp.com/books`)
      .then( res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          books: result.books
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        })
    })
  }

  render() {
    const { error, isLoaded, books } = this.state;

    if (error) {
      return <div>Error {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {

      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Mute Books</h1>
          </header>

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
              )}
            )}
          </ul>
        </div>
      );
    }
  }
  /* jshint ignore:end */
}

export default App;
