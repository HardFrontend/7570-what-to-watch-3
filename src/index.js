import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import filmsMocks from "./mocks/films.js";

const film = {
  name: `The Grand Budapest Hotel`,
  genre: `Horor`,
  releaseDate: 2014,
};

const FILMS_NAME = [
  `Fantastic Beasts`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `The Grand Budapest Hotel`
];

ReactDOM.render(
    <App
      film={film}
      filmList={filmsMocks}
    />,
    document.querySelector(`#root`)
);
