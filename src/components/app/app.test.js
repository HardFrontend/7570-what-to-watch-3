import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';

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


it(`Render App`, () => {
  const tree = renderer
    .create(<App
      film={film}
      filmList={movie}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

