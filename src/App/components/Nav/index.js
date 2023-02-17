import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Nav = ({ items, vertsize, widesize }) => {

    const [activeClassname, setActiveClassname] = useState("main-0");
    const [activeParent, setActiveParent] = useState(null);

    const setActive = (e, id) => {
        e.preventDefault();

        const subParent = e.target.closest(".submenu");

        if (subParent) {
            if (activeParent) {
                activeParent.classList.remove("submenu-active-parent");
            }

            subParent.classList.add("submenu-active-parent");
            setActiveParent(subParent);
        } else if (activeParent) {
            activeParent.classList.remove("submenu-active-parent");
        }

        setActiveClassname(id);
    };

    const sidebarClassname = classnames("nav",
        vertsize ? `nav-${vertsize}-vertical` : "",
        widesize ? `nav-${widesize}-vertical-wide` : ""
    );

    return (
        <nav className={sidebarClassname}>
            <ul>
                {items.map(({ name, icon, subItems }, i) => (
                    <li key={`nav-item-${name}-${i}`}>{"\n"}
                        { subItems ?
                            <div className="submenu">{"\n"}
                                <a href="#" onClick={e => setActive(e, `sub-${i}-0`)}>
                                    <i className="material-icons" aria-hidden="true">{icon}</i>{"\n"}
                                    <span>{name}</span>{"\n"}
                                </a>
                                <ul>
                                    {subItems.map((itemsname, j) => (
                                        <li key={`nav-subItems-${itemsname}-${j}`} className={activeClassname === `sub-${i}-${j}` ? "active" : null}>
                                            <a href="#" onClick = {e => setActive(e, `sub-${i}-${j}`)}>
                                                <span>{itemsname}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            :
                            <a href="#" onClick = {e => setActive(e, `main-${i}`)} className={activeClassname === `main-${i}` ? "active" : null}>{"\n"}
                                <i className="material-icons" aria-hidden="true">{icon}</i>{"\n"}
                                <span>{name}</span>{"\n"}
                            </a>}{"\n"}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

const mediaQueries = ["xs", "sm", "md", "lg", "xl", "xxl"];

Nav.propTypes = {
    items: PropTypes.array.isRequired,
    vertsize: PropTypes.oneOf(mediaQueries),
    widesize: PropTypes.oneOf(mediaQueries)
};

export default Nav;
