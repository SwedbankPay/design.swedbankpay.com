import React from "react";
import classnames from "classnames";

const Sidebar = ({ items, vertsize, widesize }) => {
    const sidebarClassname = classnames("sidebar",
        vertsize ? `sidebar-${vertsize}-vertical` : "",
        widesize ? `sidebar-${widesize}-vertical-wide` : ""
    );

    return (
        <nav className={sidebarClassname}>
            <ul>
                {items.map(({ name, icon, subItems }, i) => (
                    <li key={`sidebar-item-${name}-${i}`}>{"\n"}
                        { subItems ?
                            <div className="submenu">{"\n"}
                                <i className="material-icons">{icon}</i>{"\n"}
                                <span>{name}</span>
                                <ul>
                                    {subItems.map((itemsname, j) => (
                                        <li key={`sidebar-subItems-${itemsname}-${j}`}>
                                            <a href="#" onClick = {e => e.preventDefault()}>{itemsname}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            :
                            <a href="#" onClick = {e => e.preventDefault()}>{"\n"}
                                <i className="material-icons">{icon}</i>{"\n"}
                                <span>{name}</span>{"\n"}
                            </a>}{"\n"}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;
