import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import routes from "../routes/docs";

const SearchBox = () => (
    <div className="input-group doc-search">
        <input type="text" className="form-control doc-search-input" id="doc-search-input" name="designguide-search" placeholder="Search..." />
    </div>
);

const NavLink = ({ childRoute, pathname }) => {
    const { title, path } = childRoute;

    return (
        <li>
            <Link className={pathname === path ? "active" : null} to={path}>{title}</Link>
        </li>
    );
};

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
        const { pathname } = this.props.location;

        return (
            <div className={`nav-group${this.state.isActive ? " active" : ""}`}>
                <div className="nav-heading">
                    <i className="material-icons">keyboard_arrow_right</i>
                    <span onClick={() => this.toggleActive()}>{title}</span>
                </div>
                <ul>
                    {routes.map((childRoute, i) => <NavLink key={i} childRoute={childRoute} pathname={pathname} />)}
                </ul>
            </div>
        );
    }
}

const SelectPanel = () => (
    <div className="doc-sidebar col-xxl-2 col-md-3 col-sm-12">
        {/* <SearchBox /> */}
        <nav className="documentation-nav">
            {routes.map((route, i) => {
                const NavGroupWithRouter = withRouter(NavGroup);

                return <NavGroupWithRouter key={i} route={route} />;
            })}
        </nav>
    </div>
);

export default withRouter(SelectPanel);

/* For testing */
export { SearchBox };
