import React from 'react';
import { useEffect, useState } from 'react';

import Card from './Card';

const SeriesCard = () => {
  const [input, setInput] = useState('');
  console.log(input);

  useEffect(() => {
    (async () => {
      let data = await fetch(`http://localhost:3000/entries`).then((res) => res.json());
      const moviesSlice = data.slice(0, 21);
      setInput(moviesSlice);
    })();
  }, []);

  return (
    <>
      {[...input]
        .sort((a, b) => (a.title > b.title ? 1 : -1))
        .map((item) => {
          if (item.programType === 'movie' && item.releaseYear >= 2010) {
            return (
              <Card
                key={item.title}
                title={item.title}
                url={item.images['Poster Art'].url}
                description={item.description}
              />
            );
          }
        })}
    </>
  );
};

export default SeriesCard;
