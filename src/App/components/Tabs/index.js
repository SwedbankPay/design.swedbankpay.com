import React from "react";
import PropTypes from "prop-types";

const Tabs = ({ mode, items, test }) => {
    return (
        <nav className={test ? "tabs" : "nav"}>
            <ul className={`nav-tabs nav-${mode}`}>
                {items.map(({ name, active }, i) => (
                    <li key={`tab-item-${name}-${i}`} className={active ? "active" : ""}>{"\n"}
                        <a href="#">{name}</a>{"\n"}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Tabs.propTypes = {
    mode: PropTypes.oneOf(["auto", "stacked", "collapsed"]).isRequired,
    items: PropTypes.array.isRequired
};

export default Tabs;
