import React, { Component } from "react";
import PropTypes from "prop-types";

class SidebarComponent extends Component {

    shouldComponentUpdate () {
        return false;
    }

    render () {
        return (
            <div id="example-sidebar" className="sidebar">
                <nav className="sidebar-nav">
                    <ul className="main-nav-ul">
                        {this.props.sidebarNavList.map((group, groupIndex) => (
                            <li key={groupIndex} className="nav-group">
                                <div className="nav-group-heading">
                                    <i className="material-icons" aria-hidden="true">arrow_right</i>
                                    <span>
                                        {group.title}
                                    </span>
                                </div>
                                {
                                    group.lastParent ?
                                        <ul className="nav-ul">
                                            {group.subList.map((leaf, leafIndex) => (
                                                <li key={leafIndex} className="nav-leaf">
                                                    <a href="#" onClick={e => this.props.setActive(e, groupIndex, null, leafIndex, leaf)}>
                                                        {leaf.title}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                        :
                                        <ul className="nav-ul">
                                            {group.subList.map((sub, subIndex) => (
                                                <li key={subIndex} className="nav-subgroup">
                                                    <div className="nav-subgroup-heading">
                                                        <i className="material-icons" aria-hidden="true">arrow_right</i>
                                                        <span>
                                                            {sub.title}
                                                        </span>
                                                    </div>
                                                    <ul className="nav-ul">
                                                        {sub.subList.map((leaf, leafIndex) => (
                                                            <li key={leafIndex} className="nav-leaf">
                                                                <a href="#" onClick={e => this.props.setActive(e, groupIndex, subIndex, leafIndex, leaf)}>
                                                                    {leaf.title}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            ))}
                                        </ul>
                                }
                            </ li>
                        ))}
                    </ul>
                </nav>
            </div>
        );
    }
}

SidebarComponent.propTypes = {
    setActive: PropTypes.func.isRequired,
    sidebarNavList: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        lastParent: PropTypes.bool.isRequired,
        subList: PropTypes.arrayOf(PropTypes.object).isRequired
    })).isRequired
};

export default SidebarComponent;
