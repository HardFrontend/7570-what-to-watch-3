import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './film-сard.jsx';

it(`Render FilmCard`, () => {
  const tree = renderer
    .create(<FilmCard
      filmName={`Film Name`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});


