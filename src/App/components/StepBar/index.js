import React from "react";
import PropTypes from "prop-types";

const _renderItems = items => items.map(({ title, active }, i) => (
    <li key={i} className={active ? "active" : null}>
        {title}
        test
    </li>
));

const DefaultItems = () => (
    <div>
        <li>
            <div className="material-icons step-bar-icon" >check</div>
            Some title
            <div className="step-bar-item-sub-title">Some subtitle</div>
        </li>
        <li>
            Some title
            <div className="step-bar-item-sub-title">Some subtitle</div>
        </li>
        <li>
            Some title
        </li>
        <li>
            Some title
        </li>
    </div>
);

const StepBar = ({ items, horizontal }) => (
    <ol className={`step-bar${horizontal ? " step-bar-horizontal" : ""}`}>
        {items ? _renderItems(items) : <DefaultItems />}
    </ol>
);

StepBar.propTypes = {
    items: PropTypes.array,
    horizontal: PropTypes.bool
};

export default StepBar;

// exporting for testing purposes
export { DefaultItems };
