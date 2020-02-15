import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './small-movie-card.jsx';

const movie = {
  title: `Bohemian rhapsody`,
  img: `img/bohemian-rhapsody.jpg`,
};

it(`Render FilmCard`, () => {
  const tree = renderer
    .create(<FilmCard
      movie={movie}
      onMovieCardClick={() => {}}
      onMovieCardHover={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});


