import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';

const filmPromo = {
  name: `Film name`,
  genre: `Film genre`,
  releaseDate: 2020,
};

const filmList = [
  {
    title: `Bohemian rhapsody`,
    imgPoster: `img/bohemian-rhapsody.jpg`,
    genre: `Comedy`,
    releaseDate: 2020,
    imgBg: `img/bg-the-grand-budapest-hotel.jpg`,
    runTime: `1h 50m`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`]
  },
  {
    title: `Bdardjeeling Limited`,
    imgPoster: `img/dardjeeling-limited.jpg`,
    genre: `Horror`,
    releaseDate: 2019,
    imgBg: `img/bg-the-grand-budapest-hotel.jpg`,
    runTime: `1h 50m`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`]
  },
  {
    title: `Fantastic beasts the crimes of grindelwald`,
    genre: `Horror`,
    releaseDate: 2019,
    imgPoster: `img/the-grand-budapest-hotel-poster.jpg`,
    imgBg: `img/bg-the-grand-budapest-hotel.jpg`,
    runTime: `1h 50m`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`]
  },
  {
    title: `Johnny english`,
    imgPoster: `img/johnny-english.jpg`,
    genre: `Horror`,
    releaseDate: 2019,
    imgBg: `img/bg-the-grand-budapest-hotel.jpg`,
    runTime: `1h 50m`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`]
  }
];


it(`Render App`, () => {
  const tree = renderer
    .create(<App
      filmPromo={filmPromo}
      filmList={filmList}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

