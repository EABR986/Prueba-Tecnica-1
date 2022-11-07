import React from 'react';

import MovieCard from '../../components/movieCard';

const Movies = () => {
  return (
    <>
      <div className=" m-32 grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
        <MovieCard />
      </div>
    </>
  );
};

export default Movies;
