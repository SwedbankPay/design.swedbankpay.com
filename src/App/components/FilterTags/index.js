import React from "react";
import PropTypes from "prop-types";

const FilterTags = ({ filterText }) => (
    <span className="filter-tag">{filterText}<i className="material-icons close-tag" aria-hidden="true">close</i></span>
);

FilterTags.propTypes = {
    filterText: PropTypes.string.isRequired
};

export default FilterTags;
