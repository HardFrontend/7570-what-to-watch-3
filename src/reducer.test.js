import {reducer, ActionCreator, ActionType} from "./reducer.js";
import filmsMocks from "./mocks/films";

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

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: `All genres`,
    filmsList: filmsMocks
  });
});

it(`Reducer should change genre`, () => {
  expect(reducer({
    genre: `All genres`,
  }, {
    type: ActionType.GENRE_CHANGE,
    payload: `Comedy`,
  })).toEqual({
    genre: `Comedy`
  });

  expect(reducer({
    genre: `All genres`,
  }, {
    type: ActionType.GENRE_CHANGE,
    payload: `Horror`,
  })).toEqual({
    genre: `Horror`
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for incrementing step returns correct action`, () => {
    expect(ActionCreator.changeGenre(`Horror`)).toEqual({
      type: ActionType.GENRE_CHANGE,
      payload: `Horror`
    });
  });

  it(`Action creator for incrementing step returns correct action`, () => {
    expect(ActionCreator.changeGenre()).toEqual({
      type: ActionType.GENRE_CHANGE,
      payload: `All genres`
    });
  });
});

