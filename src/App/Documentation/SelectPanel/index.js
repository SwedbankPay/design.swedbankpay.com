import React, { Component } from "react";
import { Link } from "react-router-dom";

import routes from "../../routes/docs";

const SearchBox = () => (
    <div className="input-group doc-search">
        <input type="text" className="form-control doc-search-input" id="doc-search-input" name="designguide-search" placeholder="Search..." />
    </div>
);

class SelectPanel extends Component {
    constructor (props) {
        super(props);
    }

    titleActive (title) {
        return this.props.location.pathname.includes(title);
    }

    subtitleActive (title) {
        return this.props.location.pathname === title;
    }

    render () {
        return (
            <div className="doc-sidebar col-md-3 col-sm-12">
                <SearchBox />
                <nav>
                    {routes.map((route, i) => {
                        const { path, title, routes } = route;
                        return (
                            <div key={i} className={`nav-group${this.titleActive(path) ? " active" : ""}`}>
                                <div className="nav-heading">
                                    <i className="material-icons">keyboard_arrow_right</i>
                                    <Link to={path}>{title}</Link>
                                </div>
                                <ul>
                                    {routes.map((childRoute, i) => {
                                        const { title, path } = childRoute;
                                        return (
                                            <li key={i}>
                                                <Link className={this.subtitleActive(path) ? "active" : ""} to={path}>{title}</Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </nav>
            </div>
        );
    }
}

export default SelectPanel;
