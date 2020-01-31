import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import SearchBox from "../SearchBox/index";

const { sidebar } = window.dg;

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

        this.state.isActive && activeLeaf[0] && sidebar.setActiveState("doc-sidebar", this.props.index, null, activeLeaf[0].i);
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
            <div className="nav-group">
                <div className="nav-group-heading">
                    <i className="material-icons" onClick={() => this.toggleActive()}>arrow_right</i>
                    <span>{title}</span>
                </div>
                <ul className="nav-ul">
                    {routes.map((childRoute, i) => (
                        <li key={`nav_leaf_${i}`} className="nav-leaf">
                            <NavLink activeClassName="active" to={childRoute.path}>{childRoute.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

class SelectPanel extends Component {

    componentDidMount () {
        sidebar.init("doc-sidebar");
    }

    componentDidUpdate () {
        sidebar.init("doc-sidebar");
    }

    render () {
        return (
            <div id="doc-sidebar" className="sidebar">
                <SearchBox routes={this.props.routes} />
                <nav className="sidebar-nav">
                    {this.props.routes.map((route, i) => {
                        const NavGroupWithRouter = withRouter(NavGroup);

                        return <NavGroupWithRouter key={`nav_group_${i}`} route={route} index={i} />;
                    })}
                </nav>
            </div>
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
