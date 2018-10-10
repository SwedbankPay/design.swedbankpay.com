import React from "react";
import classnames from "classnames";

const Sidebar = ({ items, mode }) => {
    const sidebarClassname = classnames(
        "sidebar",
        mode ? `sidebar-vertical-${mode}` : null
    );

    return (
        <nav className={sidebarClassname}>
            <ul>
                {items.map(({ name, icon }, i) => (
                    <li key={`sidebar-item-${name}-${i}`}>
                        <a>
                            <i className="material-icons">{icon}</i>
                            <span>{name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;
