import React, { Component } from 'react';
import Card from './Card';

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

export default BookList;
