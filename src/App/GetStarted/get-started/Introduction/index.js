import React from "react";
import { Link } from "react-router-dom";
import { designGuideUsers } from "./constants";
import Lightbox from "@components/Lightbox";

import { DocContainer } from "@docutils";
import ContributionVideo from "./contributionVideo";

const basename = process.env.basename;
const brandTitle = process.env.brandTitle;

const GetStarted = () => (
    <section>
        <p>Below we have compiled a list of things you need to have and know in order to get started with our design guide.</p>

        <div className="component-overview">
            <Link to="/get-started/for-developers" className="cards cards-primary">
                <div className="cards-icon">
                    <i className="material-icons">code</i>
                </div>
                <div className="cards-content">
                    <span className="h4">For developers</span><span>Learn more about how to setup and use our system.</span>
                </div>
                <i className="material-icons">arrow_forward</i>
            </Link>
            <Link to="/get-started/for-designers" className="cards cards-primary">
                <div className="cards-icon">
                    <i className="material-icons">brush</i>
                </div>
                <div className="cards-content">
                    <span className="h4">For designers</span><span>Get ready to use the Design Guide when designing in {brandTitle}.</span>
                </div>
                <i className="material-icons">arrow_forward</i>
            </Link>
        </div>
    </section>
);

const WhatIsDG = () => (
    <section id="what-design-guide">
        <h2 id="what-is-dg">What is the Design Guide?</h2>
        <p>The {brandTitle} design system consists of two parts; the Figma designs and the web Design Guide (where you are right now). The Design Guide is the ready-to-use part of the design system and the Figma design library is for designing and prototyping.</p>
        <p>The Design Guide consists of more than design. It contains all the parts of the design system that actually can be used and implemented by developers working with {brandTitle} products.</p>

        <section>
            <h2>Working with the Design Guide</h2>
            <p>The Design Guide is an organically growing system that evolves with the products. Product teams can use the Design Guide for brand identity, components, guidelines, and documentation regarding accessibility, copywriting, and more. Product teams also contribute to the system by suggesting changes and improvements to already existing components and guidelines, as well as by adding completely new ones.</p>
            <Lightbox imgSrc={`${basename}img/documentation/introduction/working-dg.png`} className="img-fluid" alt="Illustation of how product teams can use the design system and how to contribute."/>
        </section>
        <section>
            <h3>Contributing to the system</h3>
            <p>Components and assets that can be reused in other products should be added to the system for others to use. However, some components that fulfill an isolated need for a specific product will remain local for that product only. This informational video explains the design workflow and snowflake process, and how your product team can contribute to the Design Guide:</p>
            <ContributionVideo/>
            <a className="icon-link mt-3" target="_blank" rel="noopener noreferrer" href={"http://www.figma.com/proto/p1QcsYCJ3T466As9xQQGBM/Design-Guide-Mantra?page-id=11%3A4123&node-id=233%3A4515&viewport=306%2C372%2C0.1&scaling=min-zoom&starting-point-node-id=233%3A4515"}><i className="material-icons mr-2" aria-hidden="true">launch</i>View the contribution process prototype</a>
        </section>
        <section>
            <h3>Products using the Design Guide</h3>
            <p>An interface may look right according to the Design Guide, our brand, and the design system in general, but that does not mean that it, per definition, “uses the Design Guide“. The definition of using our Design Guide is the technical implementation and using the components taken straight from the Design Guide.</p>
            <p>When an adjustment or change occurs with one of the Design Guide components, all the projects using said component will have the changes applied to their product automatically. This way, the Design Guide enables a cohesive and unified design across the organization, which saves time for everyone involved.</p>
            {brandTitle === "Swedbank Pay" && <section>
                <h3>Products using the Design Guide</h3>
                <p>Because there’s a difference of following the design guidelines and using the Design Guide, not all {brandTitle} products per definition uses the Design Guide. </p>
                <table className="table table-plain">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Using Design Guide</th>
                        </tr>
                    </thead>
                    <tbody>
                        {designGuideUsers.map(product => (
                            <tr key={product.name}>
                                <td>{product.name}</td>
                                <td><i className="material-icons mr-3">{product.icon}</i>{product.text}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>}
        </section>
    </section>
);

const Feedback = () => (
    <section>
        <h2 id="feedback">Feedback</h2>
        <p>We want to do our best to provide top-quality components for you to use, but this is only possible with your help. If you have any suggestions for how we could potentially improve a component, please don´t hesitate to reach out. If you have questions, feedback, or want to know what’s new in the Design Guide, feel free to join us in the #design-guide-general channel on Slack.</p>
    </section>
);

const Introduction = () => (
    <DocContainer>
        <p className="lead">We are so glad to see that you are interested in learning more about the {brandTitle} Design Guide. We know that it can be daunting to start with something new and complex. But don’t worry, we have got what you need!</p>
        <GetStarted />
        <WhatIsDG />
        <Feedback/>
    </DocContainer>
);

export default Introduction;

export { GetStarted, WhatIsDG, Feedback };
