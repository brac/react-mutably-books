import React, { Component } from 'react';
import './App.css';

const books =[
  {
    _id: "5b44068383a77200144a45d3",
    title: "Around the World in 80 Days",
    author: "Jules Verne",
    image: `http://cloud.githubusercontent.com/assets/7833470/10892118/865bee3e-8156-11e5-9634-cd7bcd3d6d4f.jpg`,
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
//    componentDidMount()
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
    <h5 className="card-title mt-2">Around the world in 80 days</h5>
  );
  /* jshint ignore:end */
}

function AuthorRow(props) {
  /* jshint ignore:start */
  return (
    <h6 className="card-subtitle mb-2 text-muted">
      Jules Verne
    </h6>
  );
  /* jshint ignore:end */
}

function ReleaseDateRow(props) {
  /* jshint ignore:start */
  return (
    <p className="card-text">
      Janurary 30, 1873
    </p>
  );
  /* jshint ignore:end */
}

function CardImg(props) {
  /* jshint ignore:start */
  return(
    <img
      className="card-img-top"
      src='https://cloud.githubusercontent.com/assets/7833470/10892118/865bee3e-8156-11e5-9634-cd7bcd3d6d4f.jpg'
      alt="Image of Around the World in 80 Days"
    />
  )
  /* jshint ignore:end */
}

class Card extends Component {
  /* jshint ignore:start */
  render(){
    return (
      <div className="card mb-5" style={{width:"18rem"}}>
        <CardImg />
        <InfoTable />
        <ButtonRow />
      </div>
    );
  }
  /* jshint ignore:end */

}

class InfoTable extends Component {
  /* jshint ignore:start */
  render(){
    return (
      <div className="container" data-cardtext-id="123">
        <TitleRow />
        <AuthorRow />
        <ReleaseDateRow />
      </div>
    );
  }
  /* jshint ignore:end */
}

class ButtonRow extends Component {
  /* jshint ignore:start */
  render(){
    return(
      <div className="container">
        <Button className="btn-primary rounded" value="Edit"/>
        <Button className="btn-danger rounded" value="Delete"/>
      </div>
    );
  }
  /* jshint ignore:end */
}



class App extends Component {
  /* jshint ignore:start */
  renderCard(i){
    return (
      <Card

      />
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Mute Books</h1>
        </header>

        <ul className="list-unstyled text-center list-group col">
          {books.map(book => {
            return (
              <li>
                <Card />
              </li>
            )})}
        </ul>

      </div>
    );
  }
  /* jshint ignore:end */
}

export default App;
