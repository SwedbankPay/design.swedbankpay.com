import React, { Component } from "react";
import PropTypes from "prop-types";

import LogotypeComponent from "@components/Logotype";

const BASENAME = process.env.basename;

// const extractElements = (origin, index, subgroupLeaf) => (
//     origin.subList ?
//         <li key={index} className="nav-subgroup">
//             <div className="nav-subgroup-heading">
//                 <i className="material-icons" aria-hidden="true">arrow_right</i>
//                 <span>
//                     {origin.title}
//                 </span>
//             </div>
//             <ul className="nav-ul">
//                 {origin.subList.map((sub, i) => (extractElements(sub, i)))}
//             </ul>
//         </li>
//         :
//         <li key={index} className={`nav-leaf${subgroupLeaf ? " nav-subgroup-leaf" : ""}`}>
//             <a href="#" onClick={e => e.preventDefault()}>
//                 {origin.title}
//             </a>
//         </li>
// );

class Sidebar extends Component {
    render () {
        return (
            <div id={this.props.id} className={`sidebar-2${this.props.sticky ? " sidebar-topbar-sticky" : ""}`}>
                <nav className="sidebar-main-nav">
                    <div className="sidebar-logo">
                        <LogotypeComponent src={`${BASENAME}img/swedbankpay-logo-v.svg`} size="md" alt="Swedbank Pay vertical logo" type="vertical" />
                    </div>
                    <ul className="main-nav-ul">
                        {this.props.sidebarNavList.map((mainElement, i) => <li key={mainElement.title} className={`main-nav-li${i === 0 ? " active" : ""}`}>
                            <a href="#" onClick={e => e.preventDefault()}>
                                {mainElement.icon}
                                {mainElement.title}
                            </a>
                            {mainElement.children &&
                                <nav className="sidebar-secondary-nav">
                                    <header className="secondary-nav-header">
                                        {mainElement.title}
                                    </header>
                                    <ul className="secondary-nav-ul">
                                        {mainElement.children.map(secondaryElement => <li key={secondaryElement.title}
                                            className={`secondary-nav-li${secondaryElement.children ? " group" : " leaf"}`}>
                                            <a href="#" onClick={e => e.preventDefault()}>
                                                {secondaryElement.title}
                                            </a>
                                            {secondaryElement.children &&
                                                <ul className="secondary-nav-group">
                                                    {secondaryElement.children.map(secondaryElementChild => <li className="nav-leaf" key={secondaryElementChild.title}>
                                                        <a href="#" onClick={e => e.preventDefault()}>
                                                            {secondaryElementChild.title}
                                                        </a>
                                                    </li>)}
                                                </ul>
                                            }
                                        </li>)}
                                    </ul>
                                </nav>
                            }
                        </li>
                        )}
                    </ul>
                </nav>
            </div>
        );
    }
}

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
