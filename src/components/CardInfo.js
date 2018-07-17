import React from 'react';
import InfoTable from './InfoTable'
import EditForm from './EditForm'

function CardInfo(props){
    //jshint ignore:start
    return(

      <div>
        <InfoTable
          title={props.title}
          author={props.author}
          releaseDate={props.releaseDate}
        />

        <EditForm
          title={props.title}
          author={props.author}
          releaseDate={props.releaseDate}
        />
      </div>
    )
    //jshint ignore:end
}

export default CardInfo;
