import {extend} from "./components/utils/utils";
import filmsMocks from "./mocks/films.js";
import {ALL_GENRES} from "./components/utils/genres.js";

const initialState = {
  genre: `All genres`,
  filmsList: filmsMocks
};

const ActionType = {
  GENRE_CHANGE: `GENRE_CHANGE`,
  MOVIES_CHANGE: `MOVIES_CHANGE`
};

const ActionCreator = {
  changeGenre: (genre = ALL_GENRES) => ({
    type: ActionType.GENRE_CHANGE,
    payload: genre
  })
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GENRE_CHANGE:
      return extend(state, {
        genre: action.payload,
      });
  }

  return state;
};


export {reducer, ActionType, ActionCreator};
