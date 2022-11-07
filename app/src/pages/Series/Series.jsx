import React from 'react';

import SeriesCard from '../../components/SeriesCard';

const Series = () => {
  // eslint-disable-next-line no-undef

  return (
    <>
      <div className=" m-32 grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
        <SeriesCard input="input" />
      </div>
    </>
  );
};

export default Series;
