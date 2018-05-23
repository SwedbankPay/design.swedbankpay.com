import React, { Fragment } from "react";
import PropTypes from "prop-types";

const TopbarBtn = ({ align, icon, text, target }) => (
    <button type="button" className={`topbar-btn-${align}`} data-toggle-nav={`#${target}`}>{"\n\t\t"}
        {icon ? <i className="material-icons topbar-btn-icon">{icon}</i> : null}{icon ? "\n\t\t" : null}
        {text ? <span className="topbar-btn-text">{text}</span> : null}{text ? "\n\t" : null}
    </button>
);

const TopbarMenu = ({ align, menu }) => {
    const { id, hierarchy } = menu;

    const Slide = ({ slide }) => {
        const { id, items } = slide;

        const MenuItem = ({ item, last }) => {
            const { title, target, href } = item;

            return (
                <Fragment>
                    {href ? <a href={href}>{title}</a> : <span data-target={`#nav-${align}-slide-${target}`}>{title}</span>}{!href || last ? "\n" : null}
                </Fragment>
            );
        };

        const GroupItem = ({ groupItem }) => {
            const { groupTitle, items } = groupItem;
            return (
                <div className="topbar-nav-group">
                    <div className="topbar-nav-group-heading">{groupTitle}</div>{"\n"}
                    {items.map((item, i) => <MenuItem key={i} item={item} last={i === items.length - 1} />)}
                </div>
            );
        };

        return (
            <div id={`nav-${align}-slide-${id}`} className={"topbar-nav-slide"}>
                <div className="slides-container">
                    {items.map((item, i) => (
                        <Fragment key={i}>{"\n"}
                            {item.groupTitle ? <GroupItem groupItem={item} /> : <MenuItem item={item} last={i === items.length - 1} />}
                        </Fragment>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <nav id={id} className={`topbar-nav topbar-nav-${align}`}>
            {hierarchy.map(slide => <Slide key={slide.id} slide={slide}></Slide>)}
        </nav>
    );
};

const Topbar = ({ logo, leftMenu, rightMenu }) => {
    return (
        <div className="topbar">{"\n"}
            {leftMenu ? <TopbarBtn align="left" icon={leftMenu.btn.icon} text={leftMenu.btn.text} target={leftMenu.id} /> : null}{leftMenu ? "\n" : null}
            {logo ? <a href="#" className={`topbar-logo logo-${logo}`}></a> : null}{logo ? "\n" : null}
            {rightMenu ? <TopbarBtn align="right" icon={rightMenu.btn.icon} text={rightMenu.btn.text} target={rightMenu.id} /> : null}{rightMenu ? "\n" : null}
            {leftMenu ? <TopbarMenu align="left" menu={leftMenu} /> : null}{leftMenu ? "\n" : null}
            {/* {rightMenu ? <TopbarMenu align="right" menu={rightMenu} /> : null}{rightMenu ? "\n" : null} */}
        </div>
    );
};

Topbar.propTypes = {
    logo: PropTypes.oneOf(["default", "mypayex"]),
    leftMenu: PropTypes.object,
    rightMenu: PropTypes.object
};

export default Topbar;
