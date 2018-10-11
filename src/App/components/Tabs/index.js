import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Tabs = ({ mode, items }) => {
    const tabsClassnames = classnames(
        "tabs",
        mode ? `tabs-horizontal-${mode}` : null
    );

    return (
        <div className={tabsClassnames}>{"\n"}
            <i className="material-icons">keyboard_arrow_right</i>
            <ul>
                {items.map(({ name, active }, i) => (
                    <li key={`tab-item-${name}-${i}`} className = {active ? "active" : null}>{"\n"}
                        <a href="#">{name}</a>{"\n"}
                    </li>
                ))}
            </ul>
        </div>
    );
};

Tabs.propTypes = {
    mode: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
    items: PropTypes.array.isRequired
};

export default Tabs;
