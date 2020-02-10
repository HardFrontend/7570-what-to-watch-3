import React from "react";
import PropTypes from 'prop-types';

import Main from "../main/main.jsx";

const App = (props) => {
  const {film, filmList} = props;

  return <React.Fragment>
    <Main
      film={film}
      filmList={filmList}
    />;
  </React.Fragment>;
};

App.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string,
    genre: PropTypes.string,
    releaseDate: PropTypes.number,
  }),
  filmList: PropTypes.arrayOf(PropTypes.string),
};

export default App;
