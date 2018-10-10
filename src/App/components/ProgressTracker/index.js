import React from "react";
import PropTypes from "prop-types";

const _renderItems = items => items.map(({ href, title, active }, i) => (
    <li key={i} className={active ? "active" : null}>
        {href ? <a href={href}>{title}</a> : <span>{title}</span>}
    </li>
));

const DefaultItems = () => (
    <div>
        <li><a href="#">Registration</a></li>
        <li><a href="#">Confirmation</a></li>
        <li><a href="#">Payment</a></li>
        <li><a href="#">Receipt</a></li>
    </div>
);

const ProgressTracker = ({ items, small }) => (
    <ol className={`progress-tracker${small ? " progress-tracker-sm" : ""}`}>
        {items ? _renderItems(items) : <DefaultItems />}
    </ol>
);

ProgressTracker.propTypes = {
    items: PropTypes.array,
    small: PropTypes.bool
};

export default ProgressTracker;

// Exporting for testing purposes
export { DefaultItems };
