// jshint asi:true

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewBookForm from './components/NewBookForm'
import BookList from './components/BookList'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      books: [],
      isLoaded: false,
      error: null,
    }
    this.handleReset = this.handleReset.bind(this)
    this.getAllBooks = this.getAllBooks.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  getAllBooks(){
    return fetch(`https://quiet-ravine-87109.herokuapp.com/books`)
      .then( res => res.json())
      .then(result => {
        return result
      }, (error) => {
        return error
    })
  }

  handleDelete(id){
    const url = `https://quiet-ravine-87109.herokuapp.com/books/${id}`

    fetch(url, {method: 'DELETE'})
      .then(() => {
        this.setState({
          isLoaded: false,
        });
      })
      .then(() => {
        const index = this.state.books.findIndex( book => {
          return book._id === id
        })

        this.state.books.splice(index, 1)

        this.setState({
          isLoaded: true,
          books: this.state.books
        })

      }, (error) => {
        this.setState({
          isLoaded: true,
          error: error,
        })
    })
  }

  handleReset(){
    const url = `https://quiet-ravine-87109.herokuapp.com/reset`
    fetch(url, {method: 'POST'})
      .then(() => {
        this.setState({
          isLoaded: false,
        });
      })
      .then(() => {
        this.getAllBooks()
          .then(books => {
            this.setState({
              isLoaded: true,
              books: books.books,
              error: books.error,
            })
          })
      }, (error) => {
        this.setState({
          isLoaded: true,
          error: error,
        })
    })
  }

  componentDidMount(){
    this.getAllBooks()
      .then(books => {
        this.setState({
          isLoaded: true,
          books: books.books,
          error: books.error,
        })
      })
  }

  render() {
    //jshint ignore:start
    return (
          <div className="App">
            <header className="App-header">
              <h1 className="App-title text-center mt-3">Welcome to The Book Bank</h1>
              <div className='d-flex justify-content-center '>
                <button
                  type="button"
                  className="resetBtn btn btn-primary mt-3"
                  onClick={this.handleReset}
                >Reset DB
                </button>
              </div>
            </header>
            <div className="container ">
              <div className="row">

                <BookList
                  books={this.state.books}
                  isLoaded={this.state.isLoaded}
                  error={this.state.error}
                  handleDelete={this.handleDelete}
                />
                <NewBookForm />

              </div>
            </div>
            <footer className="App-footer">
              <h1 className="App-title text-center">Created with React</h1>
              <img src={logo} className="App-logo" alt="logo" />
            </footer>
          </div>
        );
    //jshint ignore:end

  } // end render()
} // end class App

export default App;