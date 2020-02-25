import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './small-movie-card.jsx';

const movie = {
  title: `Bohemian rhapsody`,
  imgPoster: `img/bohemian-rhapsody.jpg`,
  genre: `Comedy`,
  releaseDate: 2020,
  imgBg: `img/bg-the-grand-budapest-hotel.jpg`,
  runTime: `1h 50m`,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`],
  videoUrl: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

it(`Render FilmCard`, () => {
  const tree = renderer
    .create(<FilmCard
      movie={movie}
      onMovieCardClick={() => {}}
      onMovieCardHover={() => {}}
      onMovieCardMouseOut={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});


