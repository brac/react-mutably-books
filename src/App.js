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
      reload: false,
    }
    this.handleReset = this.handleReset.bind(this)
  }

  handleReset(){
    const url = `https://quiet-ravine-87109.herokuapp.com/reset`

    fetch(url, {method: 'POST'})
      .then(() => {
        this.setState(prevState => ({
          reload: !prevState.reload
        }));
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

                <BookList />
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