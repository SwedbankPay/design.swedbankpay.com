import React, { useState } from "react";
import PropTypes from "prop-types";

const Tabs = ({ id, scroll, items, ulId }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const setActive = (e, i) => {
        e.preventDefault();
        setActiveIndex(i);
    };

    return (
        <div id={id} className={`tabs${scroll ? " tabs-scroll" : ""}`}>{"\n"}
            <ul id={ulId}>
                {items.map((name, i) => (
                    <li key={`tab-item-${name}-${i}`} className={activeIndex === i ? "active" : null}>{"\n"}
                        <a href="#" onClick={e => setActive(e, i)}>{name}</a>{"\n"}
                    </li>
                ))}
            </ul>
        </div>
    );
};

Tabs.propTypes = {
    id: PropTypes.string,
    items: PropTypes.array.isRequired,
    scroll: PropTypes.bool,
    ulId: PropTypes.string
};

export default Tabs;
