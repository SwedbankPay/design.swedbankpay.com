import React, { Component } from "react";
import PropTypes from "prop-types";

import LogotypeComponent from "@components/Logotype";

const basename = process.env.basename;

class Sidebar extends Component {
    render () {
        return (
            <div id={this.props.id} className={`sidebar-2${this.props.sticky ? " sidebar-topbar-sticky" : ""}`}>
                <nav className="sidebar-main-nav">
                    <div className="sidebar-logo">
                        <LogotypeComponent src={`${basename}designguide/assets/swedbankpay-logo-v.svg`} size="md" alt="Swedbank Pay vertical logo" type="vertical" />
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
                                    <ul className={`secondary-nav-ul ${this.props.extendedSidebar ? "extended-sidebar" : ""}`}>
                                        {mainElement.children.map(secondaryElement => <li key={secondaryElement.title}
                                            className={`secondary-nav-li${secondaryElement.children ? " group" : " leaf"}`}>
                                            <a href="#" onClick={e => e.preventDefault()}>
                                                {secondaryElement.icon}
                                                {secondaryElement.title}
                                            </a>
                                            {secondaryElement.children &&
                                                <ul className="tertiary-nav-ul">
                                                    {this.props.extendedSidebar &&
                                                        <>
                                                            <a href="#" onClick={e => e.preventDefault()} className="icon-link text-decoration-none previous-nav">
                                                                <i className="material-icons" aria-hidden="true">arrow_back_ios</i>
                                                                <span className="ml-2">Back to {mainElement.title}</span>
                                                            </a>
                                                            <header className="tertiary-nav-header mt-2">
                                                                {secondaryElement.icon}
                                                                {secondaryElement.title}
                                                            </header>
                                                        </>
                                                    }
                                                    {secondaryElement.children.map(tertiaryElement => <li className={`${this.props.extendedSidebar
                                                        ? "tertiary-nav-li"
                                                        : "nav-leaf"} ${tertiaryElement.children ? "group" : "leaf"}`} key={tertiaryElement.title}>
                                                        <a href="#" onClick={e => e.preventDefault()}>
                                                            {tertiaryElement.title}
                                                        </a>
                                                        {tertiaryElement.children &&
                                                            <ul className="quaternary-nav-ul">
                                                                {tertiaryElement.children.map(quaternaryElement => <li className="nav-leaf"
                                                                    key={quaternaryElement.title}>
                                                                    <a href="#" onClick={e => e.preventDefault()}>
                                                                        {quaternaryElement.title}
                                                                    </a>
                                                                </li>)}
                                                            </ul>
                                                        }
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
        title: PropTypes.string.isRequired
    })).isRequired,
    sticky: PropTypes.bool,
    extendedSidebar: PropTypes.bool
};

export default Sidebar;
