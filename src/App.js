import React, { Component } from 'react';
import './App.css';
import NewBookForm from './components/NewBookForm'
import BookList from './components/BookList'

// TODO:
//    Edit Book
//    Single Truth / Controlled Components
//    Delete Book
//    Create Book
//    Code Review
//    Deploy to Heroku

class App extends Component {
  render() {
    //jshint ignore:start
    return (
          <div className="App">
            <header className="App-header">
              <h1 className="App-title text-center mt-3">Welcome to The Book Bank</h1>
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