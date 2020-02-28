import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import Main from './main.jsx';

const mockStore = configureStore([]);

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
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`],
    videoUrl: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    title: `Bdardjeeling Limited`,
    imgPoster: `img/dardjeeling-limited.jpg`,
    genre: `Horror`,
    releaseDate: 2019,
    imgBg: `img/bg-the-grand-budapest-hotel.jpg`,
    runTime: `1h 50m`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`],
    videoUrl: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    title: `Fantastic beasts the crimes of grindelwald`,
    genre: `Horror`,
    releaseDate: 2019,
    imgPoster: `img/the-grand-budapest-hotel-poster.jpg`,
    imgBg: `img/bg-the-grand-budapest-hotel.jpg`,
    runTime: `1h 50m`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`],
    videoUrl: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    title: `Johnny english`,
    imgPoster: `img/johnny-english.jpg`,
    genre: `Horror`,
    releaseDate: 2019,
    imgBg: `img/bg-the-grand-budapest-hotel.jpg`,
    runTime: `1h 50m`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`],
    videoUrl: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  }
];

it(`Render Main`, () => {
  const store = mockStore({
    gender: `Horror`,
    filmList
  });

  const genre = `Horror`;

  const tree = renderer
    .create(
        <Provider store={store}>
          <Main
            filmPromo={filmPromo}
            genre={genre}
            filmList={filmList}
            onMovieCardClick={() => {}}
            onMovieCardHover={() => {}}
          />
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
