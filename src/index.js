import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const film = {
  name: `The Grand Budapest Hotel`,
  genre: `Horor`,
  releaseDate: 2014,
};

ReactDOM.render(
    <App film={film}/>,
    document.querySelector(`#root`)
);
