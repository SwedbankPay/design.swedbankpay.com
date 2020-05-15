import React from "react";
import PropTypes from "prop-types";

const Icon = ({ type, classNames }) => <i className={`material-icons${classNames ? ` ${classNames}` : ""}`}>{type}</i>;

Icon.propTypes = { type: PropTypes.string.isRequired };

export default Icon;
