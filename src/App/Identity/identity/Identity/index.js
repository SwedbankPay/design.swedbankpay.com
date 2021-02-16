import React from "react";
import { Link } from "react-router-dom";
import overviewList from "@src/App/routes/identity";
import { DocContainer } from "@docutils";

const OurBrand = () => (
    <section>
        <h2 id="our-brand">Our brand</h2>
        <p>Open, simple and caring. These are our values that we always strive to come back to when we design both internal and external experiences. </p>

        <blockquote className="blockquote">
            <p>We are warm and welcoming, we guide, we involve users, we ensure access for all, we are consistent and we design for trust.</p>
        </blockquote>

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
        <h2 id="read-more">Read more</h2>
        <div className="component-overview hide-arrow-icon">
            {overviewList[0].routes.slice(1).map((card, i) => (
                <Link key={card.title} to={card.path} className="cards cards-primary cards-wide">
                    <div className="cards-content m-0">
                        <span className="h3">{card.title}</span>
                        <span>{card.text}</span>
                    </div>
                    <i className="material-icons">arrow_forward</i>
                </Link>
            ))}
        </div>
    </section>
);

const Identity = () => (
    <DocContainer>
        <p className="lead">Our identity influences all aspects of the design guide, both in terms of how we approach the design and what we follow in order to create the best possible user experience.</p>
        <OurBrand />
        <MenuOverview />
    </DocContainer>
);

export default Identity;

export { OurBrand, MenuOverview };
