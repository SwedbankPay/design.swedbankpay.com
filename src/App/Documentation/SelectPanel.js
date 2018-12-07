import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import SearchBox from "./SearchBox";
import routes from "../routes/docs";

class NavGroup extends Component {
    constructor (props) {
        super(props);
        this.state = { isActive: props.location.pathname.includes(props.route.path) };
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
            <div className={`nav-group${this.state.isActive ? " active" : ""}`}>
                <div className="nav-heading">
                    <i className="material-icons" onClick={() => this.toggleActive()}>keyboard_arrow_right</i>
                    <span onClick={() => this.toggleActive()}>{title}</span>
                </div>
                <ul>
                    {routes.map((childRoute, i) => (
                        <li key={`nav_link_${i}`}>
                            <NavLink activeClassName="active" to={childRoute.path}>{childRoute.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const SelectPanel = () => (
    <div className="doc-sidebar col-xxl-2 col-md-3">
        <SearchBox routes={routes} />
        <nav className="documentation-nav">
            {routes.map((route, i) => {
                const NavGroupWithRouter = withRouter(NavGroup);

                return <NavGroupWithRouter key={`nav_group_${i}`} route={route} />;
            })}
        </nav>
    </div>
);

export default withRouter(SelectPanel);

/* For testing */
export { SearchBox };
