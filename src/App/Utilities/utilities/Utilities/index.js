import React from "react";
import { Link } from "react-router-dom";
import overviewList from "@src/App/routes/utilities";

import { DocContainer } from "@docutils";

const MenuOverview = () => (
    <section className="component-overview hide-arrow-icon">
        {overviewList[0].routes.slice(1).map(card => (
            <Link key={card.title} to={card.path} className="cards cards-primary cards-wide">
                <div className="cards-content m-0">
                    <span className="h3">{card.title}</span>
                    <span>{card.text}</span>
                </div>
                <i className="material-icons">arrow_forward</i>
            </Link>
        ))}
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
