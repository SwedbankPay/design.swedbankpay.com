import React, { Fragment } from "react";
import PropTypes from "prop-types";

const TopbarBtn = ({ align, icon, text, target }) => (
    <button type="button" className={`topbar-btn-${align}`} data-toggle-nav={`#${target}`}>{"\n\t\t"}
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
                    {"\n"}<a href={item.href} onClick={e => e.preventDefault()}>{item.title}</a>
                </Fragment>
            ))}{"\n"}
        </nav>
    );
};

const Topbar = ({ menuInfo, fixed }) => (
    <header className={`topbar ${fixed ? "topbar-fixed" : ""}`}>{"\n"}
        <TopbarBtn align="left" icon={menuInfo.btn.icon} text={menuInfo.btn.text} target={menuInfo.id} />{"\n"}
        <a href="#" className={"topbar-logo"} onClick={e => e.preventDefault()}></a>{"\n"}
        <TopbarMenu menu={menuInfo} />
    </header>
);

Topbar.propTypes = {
    menuInfo: PropTypes.object
};

export default Topbar;
