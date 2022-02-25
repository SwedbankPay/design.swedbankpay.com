import React from "react";
import { Link } from "react-router-dom";
import overviewList from "@src/App/routes/components";

import { DocContainer } from "@docutils";

const MenuOverview = () => (
    <section className="component-overview hide-arrow-icon">
        {overviewList[0].routes.slice(1).map(card => (
            card.icon &&
            <Link key={card.title} to={card.path} className="cards cards-primary cards-wide">
                <div className="cards-content flex-row align-items-center m-0 ">
                    <i className={`material-icons${card.outlined ? " material-icons-outlined" : ""}${card.icon === "call_to_action" ? " v-flip" : ""} mr-3`} aria-hidden="true">{card.icon}</i>
                    <span className="h3 m-0">{card.title}</span>
                </div>
                <i className="material-icons material-icons-outlined" aria-hidden="true">arrow_forward</i>
            </Link>
        ))}
    </section>
);

const Components = () => (
    <DocContainer>
        <p className="lead">
        This is our component library where we have listed all the components in our design system. Feel free to look around!
        </p>
        <MenuOverview />
    </DocContainer>
);

export default Components;

export { MenuOverview };
