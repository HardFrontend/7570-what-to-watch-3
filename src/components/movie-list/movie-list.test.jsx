import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from './movie-list.jsx';

const filmList = [
  {
    title: `Bohemian rhapsody`,
    img: `img/bohemian-rhapsody.jpg`,
  },
  {
    title: `Bdardjeeling Limited`,
    img: `img/dardjeeling-limited.jpg`,
  },
  {
    title: `Fantastic beasts the crimes of grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  },
  {
    title: `Johnny english`,
    img: `img/johnny-english.jpg`,
  }
];

it(`Render list of films`, () => {
  const tree = renderer
    .create(<MovieList
      filmList={filmList}
      onMovieCardClick={() => {}}
      onMovieCardHover={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
