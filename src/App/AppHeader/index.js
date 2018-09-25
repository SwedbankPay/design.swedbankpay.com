import React from "react";
import { Link, withRouter } from "react-router-dom";

import { GithubLogo, SlackLogo } from "./HeaderIcons";

import pkg from "~/package.json";
import routes from "../routes/root.js";

const AppHeader = ({ location }) => {
    const { pathname } = location;
    const { version } = pkg;

    return (
        <header className="topbar topbar-fixed designguide-header">
            <a className="topbar-logo" href="#"></a>
            <nav className="header-links">
                {routes.map((route, i) => {
                    const { title, path, exact } = route;
                    const active = exact ? (pathname === path) : (pathname.startsWith(path));

                    return <Link key={i} to={path} className={active ? "active" : ""}>{title}</Link>;
                })}
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
                    <a href={`https://github.com/PayEx/design.payex.com/releases/tag/${version}`} target="b_blank" rel="noopener">v.{version}</a>
                </div>
            </div>
        </header>
    );
};

export default withRouter(AppHeader);
