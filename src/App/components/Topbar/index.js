import React, { Fragment } from "react";
import PropTypes from "prop-types";

const TopbarBtn = ({ align, icon, text, target }) => (
    <button type="button" className={`topbar-btn-${align}`} data-toggle-nav={target ? `#${target}` : null}>{"\n\t\t"}
        {icon ?
            <>
                <i className="material-icons topbar-btn-icon">{icon}</i>
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

const TopbarMenu = ({ menu }) => {
    const { id, items } = menu;

    return (
        <nav id={id} className={"topbar-nav"}>
            {items.map((item, i) => (
                <Fragment key={i}>
                    {"\n"}<a href="#" onClick={e => e.preventDefault()}>{item}</a>
                </Fragment>
            ))}{"\n"}
        </nav>
    );
};

const Topbar = ({ topbarContent, fixed, logout }) => (
    <header className={`topbar ${fixed ? "topbar-fixed" : ""}`}>{"\n"}
        {topbarContent ?
        <>
            {topbarContent.btnLeft ?
                <>
                    <TopbarBtn align="left" icon={topbarContent.btnLeft.icon} text={topbarContent.btnLeft.text} target={topbarContent.id} />{"\n"}
                    <TopbarMenu menu={topbarContent} />
                </> :
                null}
            {"\n"}<a href="#" className={"topbar-logo"} onClick={e => e.preventDefault()}></a>{"\n"}
            {logout ?
                <>
                    <TopbarBtn align="right" icon="exit_to_app" text="Log out" />{"\n"}
                </> :
                null}
        </>
            :
        <>
            <a href="#" className={"topbar-logo"} onClick={e => e.preventDefault()}></a>{"\n"}
        </>}
    </header>
);

Topbar.propTypes = {
    topbarContent: PropTypes.object,
    fixed: PropTypes.bool,
    logout: PropTypes.bool
};

export default Topbar;
