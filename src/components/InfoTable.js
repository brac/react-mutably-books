import React, { Component } from 'react';
import TitleRow from './TitleRow'
import AuthorRow from './AuthorRow'
import ReleaseDateRow from './ReleaseDateRow'

class InfoTable extends Component {


  render(){
    if (this.props.editSuccess) {console.log('true')}

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
export default InfoTable;
