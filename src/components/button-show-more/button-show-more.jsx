import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";

const ButtonShowMore = ({filmsToRender, filmsToShowCount, onMoreFilmsButtonClick}) => {

  return <React.Fragment>
    <div className="catalog__more" style={filmsToShowCount >= filmsToRender.length ? {display:`none`} : null}>
      <button className="catalog__button" type="button" onClick={onMoreFilmsButtonClick}>Show more</button>
    </div>
  </React.Fragment>;
};

const mapStateToProps = (state) => ({
  filmsToRender: state.filmsToRender,
  filmsToShowCount: state.filmsToShowCount
});


const mapDispatchToProps = (dispatch) => ({
  onMoreFilmsButtonClick: () => {
    dispatch(ActionCreator.showMoreFilms());
  }
});

export {ButtonShowMore};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonShowMore);
