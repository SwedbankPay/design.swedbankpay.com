import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const DefaultItems = () => (
    <>
        <li className="step-bar-item-complete">
            <div className="material-icons step-bar-icon" >check</div>
            Step one
        </li>
        <li className="step-bar-item-active">
            Step two
        </li>
        <li>
            Step three
        </li>
        <li>
            Step four
        </li>
    </>
);

const StepBar = ({ items, horizontal }) => {
    const stepBarClasses = classnames(
        "step-bar",
        horizontal ? "step-bar--horizontal" : null
    );

    const _renderItems = items => items.map(({ title, subtitle, completed, active }, i) => (
        <li key={i} className={`${completed ? "step-bar-item-complete" : ""}${active ? " step-bar-item-active" : ""}`}>
            {completed ? <div className="material-icons step-bar-icon" >check</div> : null}
            {title}
            {subtitle ? <div className="step-bar-item-sub-title">{subtitle}</div> : null}
        </li>
    ));

    return (<ol className={stepBarClasses}>
        {items ? _renderItems(items) : <DefaultItems />}
    </ol>
    );
};

StepBar.propTypes = {
    items: PropTypes.array,
    horizontal: PropTypes.bool
};

export default StepBar;

// exporting for testing purposes
export { DefaultItems };
