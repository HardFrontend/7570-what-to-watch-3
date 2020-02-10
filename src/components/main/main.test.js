import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const film = {
  name: `Film name`,
  genre: `Film genre`,
  releaseDate: 2020,
};

const filmName = [
  `film-1`,
  `film-2`,
  `film-3`,
  `film-4`,
];

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      film={film}
      filmList={filmName}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});


