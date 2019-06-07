import React from "react";
import PropTypes from "prop-types";

const Icon = ({ icon, classNames }) => <i className={`material-icons${classNames ? ` ${classNames}` : ""}`}>{icon}</i>;

Icon.propTypes = { icon: PropTypes.string.isRequired };

export default Icon;
