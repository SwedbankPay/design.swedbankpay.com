import React from "react";
import PropTypes from "prop-types";

const Tabs = ({ mode, items }) => {
    return (
        <div className="tabs">
            <ul className={`tabs-${mode}`}>
                {items.map(({ name, active }, i) => (
                    <li key={`tab-item-${name}-${i}`} className={active ? "active" : ""}>{"\n"}
                        <a href="#">{name}</a>{"\n"}
                    </li>
                ))}
            </ul>
        </div>
    );
};

Tabs.propTypes = {
    mode: PropTypes.oneOf(["auto", "stacked", "collapsed"]).isRequired,
    items: PropTypes.array.isRequired
};

export default Tabs;
