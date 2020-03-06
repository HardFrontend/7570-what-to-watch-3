import {extend} from "./components/utils/utils";
import filmsMocks from "./mocks/films.js";
import {ALL_GENRES} from "./components/utils/genres.js";

const initialState = {
  currentGenre: `All genres`,
  filmsList: filmsMocks,
  filmsToRender: filmsMocks,
  filmsToShowCount: 8,
  chosenFilm: null
};

const ActionType = {
  GENRE_CHANGE: `GENRE_CHANGE`,
  MOVIES_CHANGE: `MOVIES_CHANGE`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`,
  SET_CHOSEN_FILM: `SET_CHOSEN_FILM`,
};

const ActionCreator = {
  changeGenre: (genre = ALL_GENRES) => ({
    type: ActionType.GENRE_CHANGE,
    payload: genre
  }),

  setNewFilmsList: () => ({
    type: ActionType.MOVIES_CHANGE,
  }),

  showMoreFilms: () => ({
    type: ActionType.SHOW_MORE_MOVIES,
  }),

  setChosenFilm: (chosenFilm) => ({
    type: ActionType.SET_CHOSEN_FILM,
    payload: chosenFilm
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

      return extend(state, {
        filmsToRender: newFilmsList
      });

    case ActionType.SHOW_MORE_MOVIES:
      const {filmsToShowCount} = state;

      return extend(state, {
        filmsToShowCount: filmsToShowCount + 8
      });

    case ActionType.SET_CHOSEN_FILM:
      return extend(state, {
        chosenFilm: action.payload
      });
  }

  return state;
};


export {reducer, ActionType, ActionCreator};
