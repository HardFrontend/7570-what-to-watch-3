import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const film = {
  name: `Film name`,
  genre: `Film genre`,
  releaseDate: 2020
};

const filmList = [
  {
    title: `Bohemian rhapsody`,
    img: `img/bohemian-rhapsody.jpg`,
  },
  {
    title: `Bdardjeeling Limited`,
    img: `img/dardjeeling-limited.jpg`,
  }
];

it(`Should film-card title be pressed`, () => {

  const movieCardClickHandler = jest.fn();

  const main = mount(
      <Main
        film={film}
        filmList={filmList}
        onMovieCardClick={movieCardClickHandler}
      />);

  const filmCardLink = main
    .find(`article.small-movie-card.catalog__movies-card`)
    .first();

  filmCardLink.simulate(`click`);

  expect(movieCardClickHandler.mock.calls.length).toBe(1);

});

