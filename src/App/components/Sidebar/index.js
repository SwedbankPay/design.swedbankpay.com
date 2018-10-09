import React from "react";

const Sidebar = ({ items }) => {
    return (
        <>
            <ul className="sidebar">
                {items.map(({ name, icon }, i) => (
                    <li key={`sidebar-item-${name}-${i}`}>
                        <a>
                            <i className="material-icons">{icon}</i>
                            <span>{name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Sidebar;
