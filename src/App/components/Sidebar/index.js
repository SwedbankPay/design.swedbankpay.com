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
                        <a>
                            <i className="material-icons">{icon}</i>
                            <span>{name}</span>
                        </a>
                        { subItems ?
                            <ul>
                                {subItems.map((itemsname, j) => (
                                    <li key={`sidebar-subItems-${itemsname}-${j}`}>
                                        <span>{itemsname}</span>
                                    </li>
                                ))}
                            </ul>
                            : ""}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;

// {subItems.map((itemsname, j) => {
//     <li key={`sidebar-itemstwo-${itemsname}-${j}`}>
//         {console.log(itemsname)}
//         <span>{itemsname}</span>
//     </li>;
// })}
