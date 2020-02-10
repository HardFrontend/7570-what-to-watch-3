import React from 'react';
import Enzyme, {shallow} from 'enzyme';
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

const filmName = [
  `film-1`
];

it(`Should film-card title be pressed`, () => {

  const onFilmCardTitleClickA = jest.fn();

  const main = shallow(
      <Main
        film={film}
        filmList={filmName}
        onFilmCardTitleClick={onFilmCardTitleClickA}
      />);

  const filmCardLink = main.find(`.small-movie-card__title`).first();

  filmCardLink.forEach((title) => title.simulate(`click`));

  expect(onFilmCardTitleClickA.mock.calls.length).toBe(filmName.length);

});

