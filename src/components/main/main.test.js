import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import FilmCard from "../small-movie-card/small-movie-card";

const film = {
  name: `Film name`,
  genre: `Film genre`,
  releaseDate: 2020,
};

const movie = [
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
it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      film={film}
      filmList={movie}
      onMovieCardClick={() => {}}
      onMovieCardHover={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});


