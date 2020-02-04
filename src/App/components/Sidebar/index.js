import React from "react";
import PropTypes from "prop-types";

import InputGroupComponent from "@components/InputGroup";

const Sidebar = ({ id, sidebarNavList }) => (
    <div id={id} className="sidebar">
        <InputGroupComponent
            id="sidebar-search"
            type="text"
            placeholder="Search..."
            prefixType="icon"
            prefixValue="search"
        /> {"\n\n"}
        <nav className="sidebar-nav">
            {sidebarNavList.map((group, i) => (
                <div key={i} className="nav-group">
                    <div className="nav-group-heading">
                        <i className="material-icons">arrow_right</i>
                        <span>
                            {group.title}
                        </span>
                    </div>
                    <ul className="nav-ul">
                        {
                            group.lastParent ?
                                group.subList.map((leaf, i) => (
                                    <li key={i} className="nav-leaf">
                                        <a href="#" onClick={e => e.preventDefault()}>
                                            {leaf.title}
                                        </a>
                                    </li>
                                ))
                                :
                                group.subList.map((sub, i) => (
                                    <li key={i} className="nav-subgroup">
                                        <div className="nav-subgroup-heading">
                                            <i className="material-icons">arrow_right</i>
                                            <span>
                                                {sub.title}
                                            </span>
                                        </div>
                                        <ul className="nav-ul">
                                            {
                                                sub.lastParent ?
                                                    sub.subList.map((leaf, i) => (
                                                        <li key={i} className="nav-leaf">
                                                            <a href="#" onClick={e => e.preventDefault()}>
                                                                {leaf.title}
                                                            </a>
                                                        </li>
                                                    ))
                                                    :
                                                    sub.subList.map((sub, i) => (
                                                        <li key={i} className="nav-subgroup">
                                                            <div className="nav-subgroup-heading">
                                                                <i className="material-icons">arrow_right</i>
                                                                <span>
                                                                    {sub.title}
                                                                </span>
                                                            </div>
                                                            <ul className="nav-ul">
                                                                {
                                                                    sub.subList.map((leaf, i) => (
                                                                        <li key={i} className="nav-leaf">
                                                                            <a href="#" onClick={e => e.preventDefault()}>
                                                                                {leaf.title}
                                                                            </a>
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        </li>
                                                    ))
                                            }
                                        </ul>
                                    </li>
                                ))
                        }
                    </ul>
                </ div>
            ))}
        </nav>
    </div>
);

Sidebar.propTypes = {
    id: PropTypes.string.isRequired,
    sidebarNavList: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        lastParent: PropTypes.bool.isRequired,
        subList: PropTypes.arrayOf(PropTypes.object).isRequired
    })).isRequired
};

export default Sidebar;
