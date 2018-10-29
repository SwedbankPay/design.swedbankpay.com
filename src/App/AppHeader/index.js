import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import { GithubLogo, SlackLogo } from "./HeaderIcons";

import pkg from "~/package.json";

const AppHeader = () => (
    <header className="topbar topbar-fixed designguide-header">
        <a className="topbar-logo" href="#"></a>
        <nav className="header-links">
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/docs" activeClassName="active">Documentation</NavLink>
            {/* <NavLink to="/examples" activeClassName="active">Examples</NavLink> */}
            {/* <NavLink to="/templates" activeClassName="active">Templates</NavLink> */}
        </nav>
        <div className="topbar-info">
            <div className="topbar-info-contact">
                <a href="https://github.com/PayEx/design.payex.com" target="b_blank" rel="noopener">
                    <GithubLogo />
                </a>
                <a href="https://payex.slack.com/messages/C0L3W8B2S/" target="b_blank" rel="noopener">
                    <SlackLogo />
                </a>
            </div>
            <div className="topbar-info-version">
                <a href={`https://github.com/PayEx/design.payex.com/releases/tag/${pkg.version}`} target="b_blank" rel="noopener">v.{process.env.version || pkg.version}</a>
            </div>
        </div>
    </header>
);

export default withRouter(AppHeader);
