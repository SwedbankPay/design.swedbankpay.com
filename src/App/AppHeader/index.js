import React from "react";
import { withRouter } from "react-router-dom";

import { SelectPanel } from "../utils";

import routes from "../routes/all";

const basename = process.env.basename;
const brand = process.env.brand;

const AppHeader = () => (
    <header id="dg-topbar" className="topbar topbar-max-md-sticky d-md-flex d-lg-none designguide-header">
        <button type="button" className="topbar-btn">
            <i className="material-icons topbar-btn-icon" aria-hidden="true">menu</i>
        </button>
        <button type="button" className="topbar-close">
            <i className="material-icons topbar-btn-icon" aria-hidden="true">close</i>
        </button>
        <a href="/" className="topbar-logo">{"\n"}
            <img src={`${basename}img/${brand}-logo-h.svg`} alt={`${brand}-logo`} className="logotype-horizontal logotype-md"/> {"\n"}
        </a>
        <nav className="topbar-nav">
            <div className="topbar-link-container">
                <SelectPanel id="doc-topbar-sidebar" topbarId="dg-topbar" newSidebar={false} routes={routes} />
            </div>
        </nav>
    </header>
);

export default withRouter(AppHeader);
