// jshint asi:true
import React, { Component } from 'react'
import Card from './Card'

class BookList extends Component {
  constructor(props){
    super(props)

    this.renderCard = this.renderCard.bind('this')
  }

  renderCard(book){
//jshint ignore:start
    return (
      <Card
        _id={book._id}
        image={book.image}
        title={book.title}
        author={book.author}
        releaseDate={book.releaseDate}
        handleDelete={book.handleDelete}
      />
    )
//jshint ignore:end
  }

  render(){
    const { error, isLoaded, books } = this.props
    //jshint ignore:start
    if (error) {
      return( <div>Error {error.message}</div> )

      } else if (!isLoaded) {
        return <div style={{width:"18rem"}}>Loading...</div>

      } else {
        return(
          <ul className="list-unstyled text-center list-group col">
            {
              books.map(book => {
              return (
                <li key={book._id}>
                  {this.renderCard({
                    _id: book._id,
                    title: book.title,
                    author: book.author,
                    image: book.image,
                    releaseDate: book.releaseDate,
                    handleDelete: this.props.handleDelete
                  })}
                </li>
            )})}
          </ul>
        )
      }
    //jshint ignore:end
  }
}

export default BookList