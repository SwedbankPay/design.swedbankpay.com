import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TopbarBtn = ({ icon, text }) => {
    const iconClass = classnames("material-icons", icon === "menu" ? "topbar-menu-icon" : "");

    if (icon || text) {
        return (
            <button type="button" className="topbar-menu">{"\n\t\t"}
                    <>
                        <i className={iconClass}>{icon}</i>
                        {"\n\t\t"}
                    </>
            </button>
        );
    } else {
        return null;
    }
};

const TopbarMenu = ({ menu, logout }) => {
    const { items } = menu;

    return (
        <nav className="topbar-nav">
            {items.map((item, i) => (
                <Fragment key={i}>
                    {"\n"}<a href="#" onClick={e => e.preventDefault()}>{item}</a>
                </Fragment>
            ))}{"\n"}
            {logout ?
                <>
                    <a href="#" onClick={e => e.preventDefault()}>Log out <i className="material-icons">exit_to_app</i></a>{"\n"}
                </> : null}
        </nav>
    );
};

const Topbar = ({ topbarContent, fixed, logout }) => (
    <header className={`topbar${fixed ? " topbar-fixed" : ""}`}>{"\n"}
        <>
            {topbarContent ?
            <>
                <TopbarBtn icon={topbarContent.btn.icon} text={topbarContent.btn.text} target={topbarContent.id} />{"\n"}
                {"\n"}<a href="#" className="topbar-logo" onClick={e => e.preventDefault()}></a>{"\n"}
                <TopbarMenu menu={topbarContent} logout={!!logout} />
            </> :
            <>
                {"\n"} <a href="#" className="topbar-logo" onClick={e => e.preventDefault()}></a>{"\n"}
            </>}
        </>
    </header>
);

Topbar.propTypes = {
    topbarContent: PropTypes.object,
    fixed: PropTypes.bool,
    logout: PropTypes.bool
};

export default Topbar;
