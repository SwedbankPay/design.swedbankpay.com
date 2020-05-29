import React from "react";
import PropTypes from "prop-types";

const extractElements = (origin, index, subgroupLeaf) => (
    origin.subList ?
        <li key={index} className="nav-subgroup">
            <div className="nav-subgroup-heading">
                <i className="material-icons">arrow_right</i>
                <span>
                    {origin.title}
                </span>
            </div>
            <ul className="nav-ul">
                {origin.subList.map((sub, i) => (extractElements(sub, i)))}
            </ul>
        </li>
        :
        <li key={index} className={`nav-leaf${subgroupLeaf ? " nav-subgroup-leaf" : ""}`}>
            <a href="#" onClick={e => e.preventDefault()}>
                {origin.title}
            </a>
        </li>
);

const Sidebar = ({ id, sidebarNavList, sticky }) => (
    <div id={id} className={`sidebar${sticky ? " sidebar-topbar-sticky" : ""}`}>
        <nav className="sidebar-nav">
            <ul className="main-nav-ul">
                {sidebarNavList.map((group, i) => {
                    const hasSubgroupLeaf = group.subList.filter(sub => sub.subList).length && group.subList.filter(sub => !sub.subList).length;

                    return (
                        <li key={i} className="nav-group">
                            <div className="nav-group-heading">
                                <i className="material-icons">arrow_right</i>
                                <span>
                                    {group.title}
                                </span>
                            </div>
                            <ul className="nav-ul">
                                {group.subList.map((sub, i) => (extractElements(sub, i, hasSubgroupLeaf)))}
                            </ul>
                        </ li>
                    );
                })}
            </ul>
        </nav>
    </div>
);

Sidebar.propTypes = {
    id: PropTypes.string.isRequired,
    sidebarNavList: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        lastParent: PropTypes.bool.isRequired,
        subList: PropTypes.arrayOf(PropTypes.object).isRequired
    })).isRequired,
    sticky: PropTypes.bool
};

export default Sidebar;
