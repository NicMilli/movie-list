import React from 'react';

const MovieInfo = (props) => {

    return (
      props.info ?
      <p>
        {`Released: ${props.info.released}`} <br/>
        {`Overview: ${props.info.overview}`} <br/>
        {`Runtime: ${props.info.runtime} minutes`} <br/>
        {`Average rating: ${props.info.vote_average}`} <br/>
        {`Watched? `}
        <button onClick={props.toggleMovie}>{props.info.watched
        ? 'Unwatch' : 'Watch'}</button>
      </p>
    : <p>We are unable to find this movie, please check for typos!</p>
    )

};

export default MovieInfo;