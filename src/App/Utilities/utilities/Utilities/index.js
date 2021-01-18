import React from "react";
import { Link } from "react-router-dom";

import { DocContainer } from "@docutils";

const MenuOverview = () => (
    <section className="component-overview hide-arrow-icon">
        <Link to="/utilities/borders" className="cards cards-primary cards-wide">
            <div className="cards-content m-0">
                <span className="h3">Borders</span>
                <span>Set borders that suit your needs</span>
            </div>
            <i className="material-icons">arrow_forward</i>
        </Link>
        <Link to="/utilities/breakpoints" className="cards cards-primary cards-wide">
            <div className="cards-content m-0">
                <span className="h3">Breakpoints</span>
                <span>See our display breakpoints</span>
            </div>
            <i className="material-icons">arrow_forward</i>
        </Link>
        <Link to="/utilities/colors" className="cards cards-primary cards-wide">
            <div className="cards-content m-0">
                <span className="h3">Colors</span>
                <span>See our color utility classes</span>
            </div>
            <i className="material-icons">arrow_forward</i>
        </Link>
        <Link to="/utilities/display" className="cards cards-primary cards-wide">
            <div className="cards-content m-0">
                <span className="h3">Display</span>
                <span>See our display properties</span>
            </div>
            <i className="material-icons">arrow_forward</i>
        </Link>
        <Link to="/utilities/flex" className="cards cards-primary cards-wide">
            <div className="cards-content m-0">
                <span className="h3">Flex</span>
                <span>Layout, alignment and grid</span>
            </div>
            <i className="material-icons">arrow_forward</i>
        </Link>
        <Link to="/utilities/images" className="cards cards-primary cards-wide">
            <div className="cards-content m-0">
                <span className="h3">Images</span>
                <span>Modify how images are displayed</span>
            </div>
            <i className="material-icons">arrow_forward</i>
        </Link>
        <Link to="/utilities/sizing" className="cards cards-primary cards-wide">
            <div className="cards-content m-0">
                <span className="h3">Sizing</span>
                <span>Size according to your needs</span>
            </div>
            <i className="material-icons">arrow_forward</i>
        </Link>
        <Link to="/utilities/spacing" className="cards cards-primary cards-wide">
            <div className="cards-content m-0">
                <span className="h3">Spacing</span>
                <span>Responsive margin and padding</span>
            </div>
            <i className="material-icons">arrow_forward</i>
        </Link>
        <Link to="/utilities/text" className="cards cards-primary cards-wide">
            <div className="cards-content m-0">
                <span className="h3">Text</span>
                <span>Control wrapping, weight and more</span>
            </div>
            <i className="material-icons">arrow_forward</i>
        </Link>
        <Link to="/utilities/visibility" className="cards cards-primary cards-wide">
            <div className="cards-content m-0">
                <span className="h3">Visibility</span>
                <span>Control visibilities of display</span>
            </div>
            <i className="material-icons">arrow_forward</i>
        </Link>
    </section>
);

const Utilities = () => (
    <DocContainer>
        <p className="lead">
        Utilities are simple CSS classes that can be used to streamline the process of applying general styling and to override a style already defined in the component CSS.
        </p>
        <MenuOverview />
    </DocContainer>
);

export default Utilities;

export { MenuOverview };
