import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {activeItem: this.props.activeItem};

      this.activeItemHandler = this.activeItemHandler.bind(this);
    }

    activeItemHandler(selectedMovieId) {
      this.setState({activeItem: selectedMovieId});
      console.log(selectedMovieId);
    }

    render() {
      const {activeItem} = this.state;
      console.log(activeItem);

      return (
        <Component {...this.props} activeItem={activeItem} activeItemHandler={this.activeItemHandler}>

        </Component>
      );
    }
  }
  WithActiveItem.propTypes = {
    activeItem: PropTypes.any,
  };

  return WithActiveItem;
};

export default withActiveItem;
