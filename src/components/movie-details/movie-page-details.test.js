import React from 'react';
import renderer from 'react-test-renderer';

import MovieDetails from "../movie-details/movie-page-details.jsx";

const movie = {
  title: `Bohemian rhapsody`,
  imgPoster: `img/bohemian-rhapsody.jpg`,
  genre: `Comedy`,
  releaseDate: 2020,
  imgBg: `img/bg-the-grand-budapest-hotel.jpg`,
  runTime: `1h 50m`,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`],
  videoUrl: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};


it(`Render MovieDetails`, () => {
  const tree = renderer
    .create(<MovieDetails
      movie={movie}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
