import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./small-movie-card.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

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

it(`Should pass data to handler on hover`, () => {
  const onMovieCardHover = jest.fn();
  const onMovieCardMouseOut = jest.fn();

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onMovieCardClick={() => {}}
        onMovieCardHover={() => onMovieCardHover(movie)}
        onMovieCardMouseOut={() => onMovieCardMouseOut()}
        isPlaying={true}
      />
  );

  const filmCard = movieCard
    .find(`article.small-movie-card.catalog__movies-card`)
    .first();

  filmCard.simulate(`mouseover`);

  expect(onMovieCardHover.mock.calls.length).toBe(1);
  expect(onMovieCardHover.mock.calls[0][0]).toMatchObject(movie);
});
