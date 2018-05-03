import React from "react";
import PropTypes from "prop-types";

const TopbarBtn = ({ align, icon, text, target }) => (
    <button type="button" className={`topbar-btn-${align}`} data-toggle-nav={`#${target}`}>{"\n\t\t"}
        {icon ? <i className="material-icons topbar-btn-icon">{icon}</i> : null}{icon ? "\n\t\t" : null}
        {text ? <span className="topbar-btn-text">{text}</span> : null}{text ? "\n\t" : null}
    </button>
);

const TopbarMenu = () => (
    <nav className="topbar-nav topbar-nav-right" data-topbar-nav="true" id="topbar-nav-right">
        <ul className="topbar-nav-breadcrumbs" data-topbar-breadcrumbs="true">
            <li>
                <a href="#">Home</a>
            </li>
        </ul>
        <div className="topbar-nav-slider">
            <ul className="topbar-nav-items-container">
                <li className="topbar-nav-group">
                    <div className="topbar-nav-group-heading">group #1</div>
                    <ul>
                        <li className="topbar-nav-item" data-has-children="true">
                            <span>asd</span>
                            <ul className="topbar-nav-items-container">
                                <li className="topbar-nav-group">
                                    <div className="topbar-nav-group-heading">group #1</div>
                                    <ul>
                                        <li className="topbar-nav-item" data-has-children="false">
                                            <a href="#">asd</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
);

const Topbar = ({ logo, leftMenu, rightMenu }) => {
    return (
        <div className="topbar">{"\n"}
            {/* {leftMenu ? <TopbarBtn align="left" icon={leftMenu.btn.icon} text={leftMenu.btn.text} target={leftMenu.id} /> : null}{leftMenu ? "\n" : null} */}
            {logo ? <a href="#" className={`topbar-logo logo-${logo}`}></a> : null}{logo ? "\n" : null}
            {rightMenu ? <TopbarBtn align="right" icon={rightMenu.btn.icon} text={rightMenu.btn.text} target={rightMenu.id} /> : null}{rightMenu ? "\n" : null}
            {/* {leftMenu ? <TopbarMenu /> : null}{leftMenu ? "\n" : null} */}
            {rightMenu ? <TopbarMenu /> : null}{rightMenu ? "\n" : null}
        </div>
    );
};

Topbar.propTypes = {
    logo: PropTypes.oneOf(["default", "mypayex"]),
    leftMenu: PropTypes.object,
    rightMenu: PropTypes.object
};

export default Topbar;
