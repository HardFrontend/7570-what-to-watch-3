import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./small-movie-card.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const movie = {
  title: `Bohemian rhapsody`,
  img: `img/bohemian-rhapsody.jpg`
};

it(`Should pass data to handler on hover`, () => {
  const onMovieCardHover = jest.fn();

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onMovieCardClick={() => {}}
        onMovieCardHover={() => onMovieCardHover(movie)}
      />
  );

  movieCard.simulate(`mouseover`);

  expect(onMovieCardHover.mock.calls.length).toBe(1);
  expect(onMovieCardHover.mock.calls[0][0]).toMatchObject(movie);
});
