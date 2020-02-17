import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import filmsMocks from "./mocks/films.js";

const filmPromo = {
  name: `The Grand Budapest Hotel`,
  genre: `Horor`,
  releaseDate: 2020,
  imgPoster: `img/the-grand-budapest-hotel-poster.jpg`,
  imgBg: `img/bg-the-grand-budapest-hotel.jpg`,
  runTime: `1h 30m`,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`]
};

ReactDOM.render(
    <App
      filmPromo={filmPromo}
      filmList={filmsMocks}
    />,
    document.querySelector(`#root`)
);
