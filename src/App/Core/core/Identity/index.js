import React from "react";
import { Link } from "react-router-dom";

import { DocContainer } from "@docutils";

const OurBrand = () => (
    <section>
        <h2 id="our-brand">Our Brand</h2>
        <p>Open, simple and caring. These are our values that we always strive to come back to when we design both internal and external experiences. </p>

        <div className="big-quotation">
            <p>We are warm and welcoming, we guide, we involve users, we ensure access for all, we are consistent and we design for trust.</p>
        </div>

        <h3>Swedbank Pay design principles</h3>
        <p className="m-0">We let our design principles reflect our brand values. When designing, we try to be warm and welcoming in our tonality. By being consistent with our interactions, involving our users, and ensuring access for all, we strive to create trust and guide our users to complete their tasks successfully.</p>
        <a href="https://brand-manager.swedbank.com/start/guidelines/swedbank-pay.html" target="_blank" rel="noopener noreferrer"className="icon-link">
            <i className="material-icons" aria-hidden="true">open_in_new</i>
            <span className="ml-2">Swedbank Brand Manager – read more about our brand</span>
        </a>
    </section>
);

const MenuOverview = () => (
    <section>
        <h2 id="read-more">Read More</h2>
        <div className="component-overview">
            <Link to="/core/accessibility" className="cards cards-wide">
                <div className="cards-content m-0">
                    <span className="h3">Accessibility</span>
                    <span>Principles & WCAG 2.1 guidelines</span>
                </div>
                <i className="material-icons">arrow_forward</i>
            </Link>
            <Link to="/core/color" className="cards cards-wide">
                <div className="cards-content m-0">
                    <span className="h3">Colors</span>
                    <span>Our color palette with HEX codes</span>
                </div>
                <i className="material-icons">arrow_forward</i>
            </Link>
            <Link to="/core/copywriting" className="cards cards-wide">
                <div className="cards-content m-0">
                    <span className="h3">Copywriting</span>
                    <span>Tonality & UX copy in our products</span>
                </div>
                <i className="material-icons">arrow_forward</i>
            </Link>
            <Link to="/core/imagery" className="cards cards-wide">
                <div className="cards-content m-0">
                    <span className="h3">Imagery</span>
                    <span>Guidelines and image library</span>
                </div>
                <i className="material-icons">arrow_forward</i>
            </Link>
            <Link to="/core/iconography" className="cards cards-wide">
                <div className="cards-content m-0">
                    <span className="h3">Iconography</span>
                    <span>Guidelines and icon library</span>
                </div>
                <i className="material-icons">arrow_forward</i>
            </Link>
            <Link to="/core/grid" className="cards cards-wide">
                <div className="cards-content m-0">
                    <span className="h3">Grid</span>
                    <span>Our grid and best practices</span>
                </div>
                <i className="material-icons">arrow_forward</i>
            </Link>
            <Link to="/core/logotype" className="cards cards-wide">
                <div className="cards-content m-0">
                    <span className="h3">Logotype</span>
                    <span>The Swedbank Pay logotype</span>
                </div>
                <i className="material-icons">arrow_forward</i>
            </Link>
            <Link to="/core/spacing" className="cards cards-wide">
                <div className="cards-content m-0">
                    <span className="h3">Spacing</span>
                    <span>8-point spacing system</span>
                </div>
                <i className="material-icons">arrow_forward</i>
            </Link>
            <Link to="/core/typography" className="cards cards-wide">
                <div className="cards-content m-0">
                    <span className="h3">Typography</span>
                    <span>See our fronts and sizing</span>
                </div>
                <i className="material-icons">arrow_forward</i>
            </Link>
        </div>
    </section>
);

const Identity = () => (
    <DocContainer>
        <p className="lead mb-3">Our identity influences all aspects of the design guide, both in terms of how we approach the design and what we follow in order to create the best possible user experience.</p>
        <OurBrand />
        <MenuOverview />
    </DocContainer>
);

export default Identity;

export { OurBrand, MenuOverview };
