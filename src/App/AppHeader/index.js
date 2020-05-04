import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import { GithubLogo, SlackLogo } from "./HeaderIcons";
import { SelectPanel } from "../utils";

import docRoutes from "../routes/docs";
import resRoutes from "../routes/resources";

import pkg from "~/package.json";

const basename = process.env.basename;
const brand = process.env.brand;

const AppHeader = () => (
    <header id="dg-topbar" className="topbar topbar-md-wide topbar-max-md-sticky designguide-header">
        <button type="button" className="topbar-btn">
            <i className="material-icons topbar-btn-icon">menu</i>
        </button>
        <button type="button" className="topbar-close">
            <i className="material-icons topbar-btn-icon">close</i>
        </button>
        <a href="/" className="topbar-logo">{"\n"}
            <img src={`${basename}img/${brand}-logo.svg`} alt="logo" />{"\n"}
        </a>
        <nav className="topbar-nav">
            <div className="topbar-link-container">
                <NavLink exact to="/" activeClassName="active"><span>Home</span></NavLink>
                <NavLink to="/docs" activeClassName="active"><span>Documentation</span></NavLink>
                {location.pathname.includes("/docs") && <SelectPanel id="doc-topbar-sidebar" topbarId="dg-topbar" routes={docRoutes} />}
                {/* <SelectPanel id="docs-topbar-sidebar" topbarId="dg-topbar" routes={docRoutes} /> */}
                <NavLink to="/res" activeClassName="active"><span>Resources</span></NavLink>
                {location.pathname.includes("/res") && <SelectPanel id="doc-topbar-sidebar" topbarId="dg-topbar" routes={resRoutes} />}
                {/* <SelectPanel id="res-topbar-sidebar" topbarId="dg-topbar" routes={resRoutes} /> */}
                <div className="topbar-info topbar-link-right">
                    <div className="topbar-info-contact">
                        <a href={`https://github.com/${brand}/design.${brand}.com`} target="_blank" rel="noopener noreferrer">
                            <GithubLogo />
                        </a>
                        <a href="https://payex.slack.com/messages/C0L3W8B2S/" target="_blank" rel="noopener noreferrer">
                            <SlackLogo />
                        </a>
                    </div>
                    <div className="topbar-info-version">
                        <a href={`https://github.com/${brand}/design.${brand}.com/releases/tag/${pkg.version}`} target="_blank" rel="noopener noreferrer">v.{process.env.version || pkg.version}</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
);

export default withRouter(AppHeader);
