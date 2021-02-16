import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import SearchBox from "../SearchBox/index";

import pkg from "~/package.json";

import LogotypeComponent from "@components/Logotype";

const basename = process.env.basename;
const brand = process.env.brand;

const { sidebar, topbar } = window.dg;

class NavGroup extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isActive: props.location.pathname.includes(props.route.path)
        };
    }

    componentDidMount () {
        const activeLeaf = this.props.route.routes.map((childRoute, i) => ({ i,
            childRoute: childRoute.path })).filter(childRouteObject => this.props.location.pathname.includes(childRouteObject.childRoute));

        this.state.isActive && activeLeaf[0] && sidebar.setActiveState(this.props.sidebarId, this.props.index, null, activeLeaf[0].i);
    }

    toggleActive () {
        this.setState({ isActive: !this.state.isActive });
    }

    shouldComponentUpdate (nextProps, nextState) {
        return this.state !== nextState;
    }

    render () {
        const { title, routes } = this.props.route;

        return (
            <li className="nav-group">
                <div className="nav-group-heading">
                    <i className="material-icons" aria-hidden="true"onClick={() => this.toggleActive()}>arrow_right</i>
                    <span>{title}</span>
                </div>
                <ul className="nav-ul">
                    {routes.map((childRoute, i) => (
                        <li key={`nav_leaf_${i}`} className="nav-leaf">
                            <NavLink activeClassName="active" to={childRoute.path}>{childRoute.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </li>
        );
    }
}

class SelectPanel extends Component {

    componentDidMount () {
        sidebar.init(this.props.id, this.props.newSidebar);

        if (this.props.location.pathname !== "/") {
            const sidebarElement = document.getElementById(this.props.id);

            sidebarElement && sidebarElement.classList.add("has-secondary-nav");
        }
    }

    componentDidUpdate () {
        sidebar.init(this.props.id);

        if (this.props.topbarId) {
            topbar.init(this.props.topbarId);
        }
    }

    _activeSecondaryNav (path) {
        const hasActiveSecondaryNav = this.props.location.pathname.includes(path);

        if (hasActiveSecondaryNav) {
            const sidebarElement = document.getElementById(this.props.id);

            sidebarElement && sidebarElement.classList.add("has-secondary-nav");
        }

        return hasActiveSecondaryNav;
    }

    _activeSecondaryLi (secondaryRoute) {
        return this.props.location.pathname.includes(secondaryRoute.path);
    }

    render () {
        return (
            <>
                {this.props.topbarId ?
                    <div id={this.props.id} className="sidebar dg-sidebar dg-only-style">
                        {/* A fully functional search box will be added later. */}
                        {/* <SearchBox routes={this.props.routes} /> */}
                        <nav className="sidebar-nav">
                            <a href="/" className="sidebar-top">{"\n"}
                                <img className="d-none d-lg-block logotype-vertical logotype-sm" src={`${basename}img/${brand}-logo-v.svg`} alt={`${brand}-logo`} />{"\n"}
                                <div className="sidebar-version">
                                    <div className="sidebar-version-header">
                                        Design Guide
                                    </div>
                                    <small>
                                        Version {process.env.version || pkg.version}
                                    </small>
                                </div>
                            </a>
                            <ul className="main-nav-ul">
                                {this.props.routes.map((route, i) => {
                                    const NavGroupWithRouter = withRouter(NavGroup);

                                    return <NavGroupWithRouter sidebarId={this.props.id} key={`nav_group_${i}`} route={route} index={i} />;
                                })}
                            </ul>
                        </nav>
                    </div>
                    :
                    <div id={this.props.id} className="sidebar-2">
                        <nav className="sidebar-main-nav">
                            <div className="sidebar-logo">
                                <a href="/">
                                    <LogotypeComponent src={`${basename}img/swedbankpay-logo-v.svg`} size="md" alt="Swedbank Pay vertical logo" type="vertical" />
                                </a>
                            </div>
                            <ul className="main-nav-ul">
                                <li className={`main-nav-li${this.props.location.pathname === "/" ? " active" : ""}`}>
                                    <NavLink activeClassName="active" to={"/"}>
                                        <i className="material-icons-outlined">home</i>
                                        Welcome
                                    </NavLink>
                                </li>
                                {this.props.routes.map(route => <li key={route.title}
                                    className={`main-nav-li${this._activeSecondaryNav(route.path) ? " active" : ""}`}>
                                    <NavLink activeClassName="active" to={route.path}>
                                        <i className={`material-icons-outlined${route.icon.rotate ? " rotated" : ""}`}>{route.icon.name}</i>
                                        {route.title}
                                    </NavLink>

                                    {route.routes &&
                                        <nav className="sidebar-secondary-nav">
                                            <header className="secondary-nav-header">
                                                {route.title}
                                            </header>
                                            <ul className="secondary-nav-ul">
                                                {route.routes.map(secondaryRoute => <li key={secondaryRoute.title} className={`secondary-nav-li group${this._activeSecondaryLi(secondaryRoute) ? " active" : ""}`}>
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
                            </ul>
                        </nav>
                    </div>
                }
            </>
        );
    }
}

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
    })).isRequired
};

export default withRouter(SelectPanel);

/* For testing */
export { SearchBox };
