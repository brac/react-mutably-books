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
      newBook: {
        title: '',
        author: '',
        image: '',
        releaseDate: '',
      },
      isLoaded: false,
      error: null,
    }

    this.url = `https://quiet-ravine-87109.herokuapp.com/books`

    this.handleReset = this.handleReset.bind(this)
    this.getAllBooks = this.getAllBooks.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getAllBooks(){
    return fetch(this.url)
      .then( res => res.json())
      .then(result => {
        return result
      }, (error) => {
        return error
    })
  }

  handleChange(event) {
    const name = event.target.name;
    const newBook = this.state.newBook
    newBook[name] = event.target.value

    this.setState({
      newBook
    });
  }

  handleSubmit(event){
    event.preventDefault()

    fetch(this.url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.newBook)
    })
      .then((res) => {
        this.setState({ isLoaded: false, })
        this.getAllBooks()
          .then((res) => {
            this.setState({
              isLoaded: true,
              books: res.books
          })
        })
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error
        })
      })
  }

  handleDelete(id){
    const url = `${this.url}/${id}`

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
          error,
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
          .then(res => {
            this.setState({
              isLoaded: true,
              books: res.books,
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
      .then(res => {
        this.setState({
          isLoaded: true,
          books: res.books,
          error: res.error,
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
            <div className="container mt-4">
              <div className="row">

                <BookList
                  books={this.state.books}
                  isLoaded={this.state.isLoaded}
                  error={this.state.error}
                  handleDelete={this.handleDelete}
                />
                <NewBookForm
                  book={this.state.newBook}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                />

              </div>
            </div>
            <footer className="App-footer">
              <h1 className="App-title text-center">Built with React</h1>
              <img src={logo} className="App-logo" alt="logo" />
            </footer>
          </div>
        );
    //jshint ignore:end

  } // end render()
} // end class App

export default App;