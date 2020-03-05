import {extend} from "./components/utils/utils";
import filmsMocks from "./mocks/films.js";
import {ALL_GENRES} from "./components/utils/genres.js";

const initialState = {
  currentGenre: `All genres`,
  filmsList: filmsMocks,
  filmsToRender: filmsMocks
};

const ActionType = {
  GENRE_CHANGE: `GENRE_CHANGE`,
  MOVIES_CHANGE: `MOVIES_CHANGE`
};

const ActionCreator = {
  changeGenre: (genre = ALL_GENRES) => ({
    type: ActionType.GENRE_CHANGE,
    payload: genre
  }),

  setNewFilmsList: () => ({
    type: ActionType.MOVIES_CHANGE,
  })
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GENRE_CHANGE:
      return extend(state, {
        currentGenre: action.payload
      });

    case ActionType.MOVIES_CHANGE:
      const {currentGenre, filmsList} = state;

      if (currentGenre === `All genres`) {
        return extend(state, {
          filmsToRender: filmsList
        });
      }

      const newFilmsList = filmsList.filter((film) => film.genre === currentGenre);

      console.log(currentGenre);

      return extend(state, {
        filmsToRender: newFilmsList
      });
  }

  return state;
};


export {reducer, ActionType, ActionCreator};
