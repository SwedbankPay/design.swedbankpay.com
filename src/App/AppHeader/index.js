import React from "react";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faSlack, faGithub } from "@fortawesome/fontawesome-free-brands";

import pkg from "../../../package.json";

const AppHeader = ({ location }) => {
    const route = location.pathname;

    return (
        <header className="topbar designguide-header">
            <a className="topbar-logo logo-default" href="#"></a>
            <nav className="header-links">
                <Link className={(route === "/") ? "active" : ""} to="/">Home</Link>
                <Link className={(route.startsWith("/docs")) ? "active" : ""} to="/docs">Documentation</Link>
                <Link className={(route.startsWith("/examples")) ? "active" : ""} to="/examples">Examples</Link>
                <Link className={(route.startsWith("/templates")) ? "active" : ""} to="/templates">Templates</Link>
            </nav>
            <div className="topbar-info">
                <div className="topbar-info-contact">
                    <a href="https://github.com/PayEx/design.payex.com" target="b_blank" rel="noopener">
                        <FontAwesomeIcon icon={faGithub} size="2x"/>
                    </a>
                    <a href="https://payex.slack.com/messages/C0L3W8B2S/" target="b_blank" rel="noopener">
                        <FontAwesomeIcon icon={faSlack} size="2x"/>
                    </a>
                </div>
                <div className="topbar-info-version">
                    <a href="https://github.com/PayEx/design.payex.com/blob/master/CHANGELOG.md" target="b_blank" rel="noopener">v.{pkg.version}</a>
                </div>
            </div>
        </header>
    );
};

export default AppHeader;
