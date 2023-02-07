import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import SearchBox from "../SearchBox/index";

import LogotypeComponent from "@components/Logotype";

const basename = process.env.basename;
const brand = process.env.brand;

import { sidebar } from "@src/scripts/main";

const MobileNavGroup = ({ route, index, sidebarId }) => {

    const location = useLocation();

    const [isActive, setIsActive] = useState(location.pathname.includes(route.path));

    useEffect(() => {
        const activeLeaf = route.routes
            .map((childRoute, i) => ({
                i,
                childRoute: childRoute.path
            }))
            .filter(childRouteObject => location.pathname.includes(childRouteObject.childRoute));

        isActive && activeLeaf[0] && sidebar.setActiveState(sidebarId, index, null, activeLeaf[0].i);
    }, []);

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    const { title, routes } = route;

    return (
        <li className="nav-group">
            <button className="nav-group-heading" onClick={() => toggleActive()}>
                <i className="material-icons" aria-hidden="true">arrow_right</i>
                {title}
            </button>
            <ul className="nav-ul">
                {routes.map((childRoute, i) => (
                    <li key={`nav_leaf_${i}`} className="nav-leaf">
                        <NavLink activeClassName="active" to={childRoute.path}>{childRoute.title}</NavLink>
                    </li>
                ))}
            </ul>
        </li>
    );
};

// topbarId & topbarSidebar => only used for mobile/tablet view
const SelectPanel = ({ id, routes, topbarId, topbarSidebar }) => {

    let location = useLocation(); // eslint-disable-line prefer-const

    useEffect(() => {
        sidebar.init(id, topbarSidebar);

        if (location.pathname !== "/" && location.pathname !== "/utilities") {
            const sidebarElement = document.getElementById(id);

            sidebarElement && sidebarElement.classList.add("has-secondary-nav");
        }
    });

    const _activeSecondaryNav = path => {
        const hasActiveSecondaryNav = location.pathname.includes(path);

        if (hasActiveSecondaryNav) {
            const sidebarElement = document.getElementById(id);

            sidebarElement && sidebarElement.classList.add("has-secondary-nav");
        }

        return hasActiveSecondaryNav;
    };

    const _activeSecondaryLi = secondaryRoute => location.pathname.includes(secondaryRoute.path);

    return (
        <>
            {topbarId ?
            // mobile & tablet hamburger menu sidebar
                <div id={id} className="sidebar dg-sidebar">
                    <nav className="sidebar-nav">
                        <ul className="main-nav-ul">
                            {routes.map((route, i) => <MobileNavGroup sidebarId={id} key={`nav_group_${i}`} route={route} index={i} />)}
                        </ul>
                    </nav>
                </div>
                :
            // desktop
                <div id={id} className="sidebar">
                    <nav className="sidebar-main-nav">
                        <div className="sidebar-logo">
                            <a href="/" aria-label="To homepage">
                                <LogotypeComponent src={`${basename}img/logo/${brand}-logo-v.svg`} size="md" alt={`${brand} vertical logo`} type="vertical" />
                            </a>
                        </div>
                        <ul className="main-nav-ul">
                            <li className={`main-nav-li${location.pathname === "/" ? " active" : ""}`}>
                                <NavLink activeClassName="active" to={"/"}>
                                    <i className="material-icons-outlined" aria-hidden="true">home</i>
                                        Welcome
                                </NavLink>
                            </li>
                            {routes.map(route => <li key={route.title}
                                className={`main-nav-li${_activeSecondaryNav(route.path) ? " active" : ""}`}>
                                <NavLink activeClassName="active" to={route.path}>
                                    <i className={`material-icons-outlined${route.icon.rotate ? " rotated" : ""}`} aria-hidden="true">{route.icon.name}</i>
                                    {route.title}
                                </NavLink>

                                {route.routes &&
                                        <nav className="sidebar-secondary-nav">
                                            <header className="secondary-nav-header">
                                                {route.title}
                                            </header>
                                            <ul className="secondary-nav-ul">
                                                {route.routes.map(secondaryRoute => <li key={secondaryRoute.title} className={`secondary-nav-li group${_activeSecondaryLi(secondaryRoute) ? " active" : ""}`}>
                                                    <NavLink activeClassName="active" to={secondaryRoute.path}>
                                                        {secondaryRoute.title}
                                                    </NavLink>
                                                    <ul className="tertiary-nav-ul">

                                                    </ul>
                                                </li>)}
                                            </ul>
                                        </nav>
                                }
                            </li>)}
                            <li className={"main-nav-li"}>
                                <NavLink activeClassName="active" to={"/utilities"}>
                                    <i className="material-icons-outlined" aria-hidden="true">build</i>
                                        Utilities
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            }
        </>
    );
};

SelectPanel.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        redirect: PropTypes.string.isRequired,
        routes: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
            componentPath: PropTypes.string.isRequired
        })).isRequired
    })).isRequired,
    id: PropTypes.string.isRequired,
    topbarId: PropTypes.string,
    topbarSidebar: PropTypes.bool,
};

export default SelectPanel;

/* For testing */
export { SearchBox };
