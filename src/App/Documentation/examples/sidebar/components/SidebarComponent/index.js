import React from "react";

import InputGroupComponent from "@components/InputGroup";

const SidebarComponent = ({ setActive, sidebarNavList }) => (

    <div id="example-sidebar" className="sidebar">
        <InputGroupComponent
            id="sidebar-search"
            type="text"
            placeholder="Search..."
            prefixType="icon"
            prefixValue="search"
        /> {"\n\n"}
        <nav className="sidebar-nav">
            {sidebarNavList.map((group, groupIndex) => (
                <div key={groupIndex} className="nav-group">
                    <div className="nav-group-heading">
                        <i className="material-icons">arrow_right</i>
                        <span>
                            {group.title}
                        </span>
                    </div>
                    {
                        group.lastParent ?
                            <ul className="nav-ul">
                                {group.subList.map((leaf, leafIndex) => (
                                    <li key={leafIndex} className="nav-leaf">
                                        <a href="#" onClick={e => setActive(e, groupIndex, null, leafIndex, leaf)}>
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
                                            <i className="material-icons">arrow_right</i>
                                            <span>
                                                {sub.title}
                                            </span>
                                        </div>
                                        <ul className="nav-ul">
                                            {sub.subList.map((leaf, leafIndex) => (
                                                <li key={leafIndex} className="nav-leaf">
                                                    <a href="#" onClick={e => setActive(e, groupIndex, subIndex, leafIndex, leaf)}>
                                                        {leaf.title}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                    }
                </ div>
            ))}
        </nav>
    </div>
);

export default SidebarComponent;
