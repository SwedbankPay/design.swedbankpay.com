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
                    : null}
                {text ?
                    <>
                        <span className="topbar-btn-text">{text}</span>
                        {"\n\t"}
                    </>
                    : null}
            </button>
        );
    } else {
        return null;
    }
};

const TopbarMenu = ({ menu }) => {
    const { items } = menu;

    return (
        <nav className="topbar-nav">
            {items.map((item, i) => (
                <Fragment key={i}>
                    {"\n"}<a href="#" onClick={e => e.preventDefault()}>{item}</a>
                </Fragment>
            ))}{"\n"}
        </nav>
    );
};

const Topbar = ({ topbarContent, fixed, logout }) => (
    <header className={`topbar${fixed ? " topbar-fixed" : ""}`}>{"\n"}
        <>
            {topbarContent ?
            <>
                <TopbarBtn icon={topbarContent.btn.icon} text={topbarContent.btn.text} target={topbarContent.id} />{"\n"}
                <TopbarMenu menu={topbarContent} />
            </> : null}
            {"\n"}<a href="#" className="topbar-logo" onClick={e => e.preventDefault()}></a>{"\n"}
            {logout ?
                <>
                    <TopbarBtn icon="exit_to_app" text="Log out" />{"\n"}
                </> :
                null}
        </>
    </header>
);

Topbar.propTypes = {
    topbarContent: PropTypes.object,
    fixed: PropTypes.bool,
    logout: PropTypes.bool
};

export default Topbar;
