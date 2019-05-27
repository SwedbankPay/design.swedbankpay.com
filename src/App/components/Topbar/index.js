import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TopbarBtn = ({ icon, text }) => {
    const iconClass = classnames("material-icons", icon === "menu" ? "topbar-btn-icon" : "");

    if (icon || text) {
        return (
            <button type="button" className="topbar-btn">{"\n\t\t"}
                {icon ?
                    <>
                        <i className={iconClass}>{icon}</i>
                        {"\n\t\t"}
                    </>
            </button>
        );
    }

    return null;
};

const TopbarMenu = ({ menu, logout }) => {
    const { items } = menu;

    return (
        <nav className="topbar-nav">
            <div className="topbar-link-container">{"\n"}
                <i className="material-icons close-topbar-nav">close</i>
                {items.map((item, i) => (
                    <Fragment key={i}>
                        {"\n"}
                        <a href="#" className={item.name === "Home" ? "active" : null} onClick={e => e.preventDefault()}>
                            {"\n"}
                            {item.icon ? <i className="material-icons">{item.icon}</i> : null}
                            {"\n"}
                            <span>{item.name}</span>
                            {"\n"}
                        </a>
                    </Fragment>
                ))}{"\n"}
                {logout ?
                    <>
                        <a className="topbar-link-right" href="#" onClick={e => e.preventDefault()}>
                            {"\n"}
                            <i className="material-icons">exit_to_app</i>
                            {"\n"}
                            <span>Log out</span>
                            {"\n"}
                        </a>
                        {"\n"}
                    </> : null}
            </div>
        </nav>
    );
};

const Topbar = ({ topbarContent, wide, logout }) => (
    <header className={`topbar${wide ? ` topbar-${wide}-wide` : ""}`}>{"\n"}
        {topbarContent ?
        <>
            <TopbarBtn icon={topbarContent.btn.icon} text={topbarContent.btn.name} target={topbarContent.id} />{"\n"}
            {"\n"}<a href="#" className="topbar-logo" onClick={e => e.preventDefault()}></a>{"\n"}
            <TopbarMenu menu={topbarContent} logout={!!logout} />
        </> :
        <>
            {"\n"} <a href="#" className="topbar-logo" onClick={e => e.preventDefault()}></a>{"\n"}
            {logout ?
                    <>
                        <a className="topbar-link-right" href="#" onClick={e => e.preventDefault()}>
                            {"\n"}
                            <i className="material-icons">exit_to_app</i>
                            {"\n"}
                            <span>Log out</span>
                            {"\n"}
                        </a>
                        {"\n"}
                    </> : null}
        </>}
    </header>
);

Topbar.propTypes = {
    topbarContent: PropTypes.object,
    fixed: PropTypes.bool,
    logout: PropTypes.bool
};

export default Topbar;
