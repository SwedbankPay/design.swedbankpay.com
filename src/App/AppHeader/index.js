import React from "react";
import { withRouter } from "react-router-dom";

import { SelectPanel } from "../utils";

import routes from "../routes/all";

import SearchBox from "../utils/SearchBox";

const basename = process.env.basename;
const brand = process.env.brand;

const AppHeader = () => (
    <header id="dg-topbar" className="topbar topbar-max-md-sticky d-md-flex d-lg-none designguide-header">
        <button type="button" className="topbar-btn" aria-label="Open menu" aria-haspopup="menu" aria-expanded="false" aria-controls="topbar-nav">
            <i className="material-icons topbar-btn-icon">menu</i>
        </button>
        <button type="button" className="topbar-close" aria-label="Close menu">
            <i className="material-icons topbar-btn-icon">close</i>
        </button>
        <a href="/" className="topbar-logo">{"\n"}
            <img src={`${basename}img/logo/${brand}-logo-v.svg`} alt={`${brand}-logo`} className="logotype-vertical logotype-md"/> {"\n"}
        </a>
        <SearchBox mobile classname={"search-expander"}/>
        <nav className="topbar-nav">
            <div className="topbar-link-container">
                <SelectPanel id="doc-topbar-sidebar" topbarId="dg-topbar" topbarSidebar={true} routes={routes} />
            </div>
        </nav>
    </header>
);

export default withRouter(AppHeader);
