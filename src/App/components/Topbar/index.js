import React, { Fragment } from "react";
import PropTypes from "prop-types";
import swedbankpayLogo from "@src/img/swedbankpay/logo/swedbankpay-logo-v.svg";
import payexLogo from "@src/img/payex/logo/payex-logo.svg";

import SidebarComponent from "@components/Sidebar";
import { SidebarNavList } from "../../ComponentsDocumentation/components/Sidebar/constants";

const brand = process.env.brand;

const devLogo = brand === "swedbankpay" ? swedbankpayLogo : payexLogo;

const isDev = process.env.version === "LOCAL_DEV";

const TopbarBtn = () => (
    <>
        <button type="button" className="topbar-btn">{"\n\t\t"}
            <i className="material-icons topbar-btn-icon" aria-hidden="true">menu</i>
            {"\n\t\t"}
        </button>
        <button type="button" className="topbar-close">{"\n"}
            <i className="material-icons topbar-btn-icon" aria-hidden="true">close</i>{"\n"}
            {"\n\t\t"}
        </button>
    </>
);

const TopbarMenu = ({ menu, logout, sidebar }) => {
    const { items } = menu;

    return (
        <nav className="topbar-nav">
            <div className="topbar-link-container">{"\n"}
                {items.map((item, i) => (
                    <Fragment key={i}>
                        {"\n"}
                        <a href="#" className={item.name === "Home" ? "active" : null} onClick={e => e.preventDefault()}>
                            {"\n"}
                            {item.icon ? <i className="material-icons" aria-hidden="true">{item.icon}</i> : null}
                            {"\n"}
                            <span>{item.name}</span>
                            {"\n"}
                        </a>
                        {i === 0 && sidebar && <SidebarComponent id="topbar-sidebar" sidebarNavList={SidebarNavList} />}
                    </Fragment>
                ))}{"\n"}
                {logout ? <TopbarLogout /> : null}
            </div>
        </nav>
    );
};

const TopbarLogout = () => (
    <>
        <a className="topbar-link-right" href="#" onClick={e => e.preventDefault()}>{"\n"}
            <i className="material-icons" aria-hidden="true">exit_to_app</i>{"\n"}
            <span>Log out</span>{"\n"}
        </a>{"\n"}
    </>
);

const TopbarLogo = ({ png }) => (
    <>
        <a className={`topbar-logo${png ? " topbar-logo-png" : ""}`} href="/" onClick={e => e.preventDefault()}>{"\n"}
            {(brand === "swedbankpay" && png)
                ? <img src={`${process.env.basename}img/${brand}-logo${brand === "swedbankpay"
                    ? "-v"
                    : ""}.png`} alt={`${brand}-logo`} className="logotype-vertical logotype-md"/>
                : <img src={isDev
                    ? devLogo
                    : `${process.env.basename}img/${brand}-logo${brand === "swedbankpay"
                        ? "-v"
                        : ""}.svg`} alt={`${brand}-logo`} className="logotype-vertical logotype-md"/>
            }{"\n"}
        </a>{"\n"}
    </>
);

const Topbar = ({ topbarContent, wide, logout, id, png, sticky, sidebar }) => (
    <header className={`topbar${wide ? ` topbar-${wide}-wide` : ""}${sticky ? " topbar-sticky" : ""}`} id={id}>{"\n"}
        {topbarContent ?
        <>
            <TopbarBtn />{"\n"}
            <TopbarLogo png={png}/>
            <TopbarMenu menu={topbarContent} logout={!!logout} sidebar={sidebar} />
        </> :
        <>
            <TopbarLogo png={png} />
            {logout ? <TopbarLogout /> : null}
        </>}
    </header>
);

Topbar.propTypes = {
    topbarContent: PropTypes.object,
    fixed: PropTypes.bool,
    logout: PropTypes.bool,
    png: PropTypes.bool,
    sticky: PropTypes.bool,
    sidebar: PropTypes.bool
};

export default Topbar;
