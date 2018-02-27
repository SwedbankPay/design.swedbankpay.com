import React, { Component } from "react";
import { Link } from "react-router-dom";

import routes from "./routes";

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
                        return (
                            <div key={i} className={`nav-group${this.titleActive(route.groupPath) ? " active" : ""}`}>
                                <div className="nav-heading">
                                    <i className="material-icons">keyboard_arrow_right</i>
                                    <Link to={route.groupPath}>{route.groupTitle}</Link>
                                </div>
                                <ul>
                                    {route.groupItems.map((item, i) => {
                                        return (
                                            <li key={i}>
                                                <Link className={this.subtitleActive(item.path) ? "active" : ""} to={item.path}>{item.title}</Link>
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
