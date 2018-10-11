import React from "react";
import classnames from "classnames";

const Sidebar = ({ items, mode }) => {
    const sidebarClassname = classnames("sidebar",
        mode ? `sidebar-vertical-${mode}` : ""
    );

    return (
        <nav className={sidebarClassname}>
            <ul>
                {items.map(({ name, icon, subItems }, i) => (
                    <li key={`sidebar-item-${name}-${i}`}>
                        { subItems ?
                            <>
                                <span>
                                    <i className="material-icons">{icon}</i>
                                    {name}
                                </span>
                                <ul>
                                    {subItems.map((itemsname, j) => (
                                        <li key={`sidebar-subItems-${itemsname}-${j}`}>
                                            <a href="#">{itemsname}</a>
                                        </li>
                                    ))}
                                </ul>
                            </>
                            :
                            <a href="#">
                                <i className="material-icons">{icon}</i>
                                <span>{name}</span>
                            </a>}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;
