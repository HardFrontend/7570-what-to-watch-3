import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from './movie-list.jsx';

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
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
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
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
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
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
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
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
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
