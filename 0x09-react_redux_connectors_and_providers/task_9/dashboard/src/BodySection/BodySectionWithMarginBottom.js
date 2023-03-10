import React, { Component } from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";

class BodySectionWithMarginBottom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.defaultProps = {
  title: "",
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
};

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: "40px",
    width: "100%",
    [screenSize.small]: {
      marginBottom: "10px",
    },
  },
});

export default BodySectionWithMarginBottom;
