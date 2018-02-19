import React from 'react';

const Adoption = ({movie}) =>
  <div>
    <Link to={`/${movie.id}`}>
      <h3>{movie.title}</h3>
      <img src={`${POSTER_PATH}${movie.poster_path}`} />
    </Link>
  </div>

export default Adoption
