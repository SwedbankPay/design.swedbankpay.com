import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import { GithubLogo, SlackLogo } from "./HeaderIcons";
import { SelectPanel } from "../utils";

import resRoutes from "../routes/resources";
import componentsRoutes from "../routes/components";
import coreRoutes from "../routes/core";
import gettingStartedRoutes from "../routes/getting-started";
import utilitiesRoutes from "../routes/utilities";

import pkg from "~/package.json";

const basename = process.env.basename;
const brand = process.env.brand;

const AppHeader = () => (
    <header id="dg-topbar" className="topbar topbar-md-wide topbar-max-sm-sticky designguide-header">
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
                <NavLink to="/getting-started" activeClassName="active"><span>Getting Started</span></NavLink>
                {location.pathname.includes("/getting-started") && <SelectPanel id="doc-topbar-sidebar" topbarId="dg-topbar" routes={gettingStartedRoutes} />}

                <NavLink to="/components" activeClassName="active"><span>Components</span></NavLink>
                {location.pathname.includes("/components") && <SelectPanel id="doc-topbar-sidebar" topbarId="dg-topbar" routes={componentsRoutes} />}

                <NavLink to="/core" activeClassName="active"><span>Core</span></NavLink>
                {location.pathname.includes("/core") && <SelectPanel id="doc-topbar-sidebar" topbarId="dg-topbar" routes={coreRoutes} />}

                <NavLink to="/utilities" activeClassName="active"><span>Utilities</span></NavLink>
                {location.pathname.includes("/utilities") && <SelectPanel id="doc-topbar-sidebar" topbarId="dg-topbar" routes={utilitiesRoutes} />}

                <NavLink to="/resources" activeClassName="active"><span>Resources</span></NavLink>
                {location.pathname.includes("/resources") && <SelectPanel id="doc-topbar-sidebar" topbarId="dg-topbar" routes={resRoutes} />}

                <div className="topbar-info topbar-link-right">
                    <div className="topbar-info-version">
                        <a href={`https://github.com/${brand}/design.${brand}.com/releases/tag/${pkg.version}`} target="_blank" rel="noopener noreferrer">v.{process.env.version || pkg.version}</a>
                    </div>
                    <div className="topbar-info-contact">
                        <a href={`https://github.com/${brand}/design.${brand}.com`} target="_blank" rel="noopener noreferrer">
                            <GithubLogo />
                        </a>
                        <a href="https://payex.slack.com/messages/C0L3W8B2S/" target="_blank" rel="noopener noreferrer">
                            <SlackLogo />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
);

export default withRouter(AppHeader);
