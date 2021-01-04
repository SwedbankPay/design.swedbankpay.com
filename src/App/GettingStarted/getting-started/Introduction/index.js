import React from "react";
import { Link } from "react-router-dom";

import { DocContainer } from "@docutils";

const basename = process.env.basename;

const GetStarted = () => (
    <section>
        <p>Below we have compiled a list of things you need to have and know in order to get started with our design guide.</p>

        <div className="component-overview">
            <Link to="/getting-started/for-developers" className="cards cards-primary">
                <div className="cards-icon">
                    <i className="material-icons">code</i>
                </div>
                <div className="cards-content">
                    <span className="h4">For developers</span><span>Learn more about how to setup and use our system.</span>
                </div>
                <i className="material-icons">arrow_forward</i>
            </Link>
            <Link to="/getting-started/for-designers" className="cards cards-primary">
                <div className="cards-icon">
                    <i className="material-icons">brush</i>
                </div>
                <div className="cards-content">
                    <span className="h4">For designers</span><span>Get ready to use the Design Guide when designing in Swedbank Pay.</span>
                </div>
                <i className="material-icons">arrow_forward</i>
            </Link>
        </div>
    </section>
);

const WhatIsDG = () => (
    <section>
        <h2 id="what-is-dg">What is the Design Guide?</h2>
        <p>The Swedbank Pay design system consists of two parts; the Figma designs and the web Design Guide (where you are right now). The Design Guide is the ready-to-use part of the design system and the Figma design library is for designing and prototyping.</p>
        <p>The Design Guide consists of more than design. It contains all the parts of the design system that actually can be used and implemented by developers working with Swedbank Pay products.</p>
        <div className="quote">
            <span>“</span>
            <p>A design system is the single source of truth which groups all the elements that will allow the teams to design, realize and develop a product.</p>
        </div>
    </section>
);

const UsingDG = () => (
    <section>
        <h2 id="using-dg">Using the Design Guide</h2>
        <p>Let’s clarify the definition of using the Design Guide. Just because an interface looks right according to the Design Guide, our brand and the design system in general it still doesn’t mean that it per definition “uses the Design Guide”. The definition of using our Design Guide is the technical implementation. </p>
        <div className="quote">
            <span>“</span>
            <p>The idea of the Design Guide is to have official place where general and/or major updates happens.</p>
        </div>
        <p>From a branding perspective we could easily settle with making everything look and feel cohesive. That is the ultimate goal! But what happens when we want to change and/or update a component, logotype, typeface e.t.c? The idea of the Design Guide is to have official place where general and/or major updates happens. If it just looks the same, the product won’t be updated when the Design Guide release new updates. </p>
        <h3>Products using the Design Guide</h3>
        <p>Because there’s a difference of following the design guidelines and using the Design Guide, not all Swedbank Pay products per definition uses the Design Guide. </p>
        <table className="table table-plain">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Using Design Guide</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Checkout</td>
                    <td><i className="material-icons mr-3">close</i> No, but are following the design guide</td>
                </tr>
                <tr>
                    <td>Swedbankpay.se</td>
                    <td><i className="material-icons mr-3">close</i> No</td>
                </tr>
                <tr>
                    <td>Consumer Portal</td>
                    <td><i className="material-icons mr-3">check</i> Yes</td>
                </tr>
                <tr>
                    <td>Developer Portal</td>
                    <td><i className="material-icons mr-3">check</i> Yes</td>
                </tr>
                <tr>
                    <td>Card terminals</td>
                    <td><i className="material-icons mr-3">close</i> No, but are following the design guide</td>
                </tr>
                <tr>
                    <td>Ecom Merchant Admin</td>
                    <td><i className="material-icons mr-3">check</i> Yes</td>
                </tr>
                <tr>
                    <td>Ecom Owner Admin</td>
                    <td><i className="material-icons mr-3">check</i> Yes</td>
                </tr>
                <tr>
                    <td>Onboarding Signup</td>
                    <td><i className="material-icons mr-3">check</i> Yes, is currently implementing the Design Guide</td>
                </tr>
            </tbody>
        </table>
    </section>
);

const OpenSimpleCaring = () => (
    <section>
        <h2 id="open-simple-caring">Open, simple, caring</h2>
        <p>Swedbank Pay is a sub-brand to Swedbank and a part of the “Coin family”. That means that Swedbank Pay is built on the same foundation as Swedbank and shares the same brand platform and overall guidelines. Swedbank Pay express its own identity through the logotype, yellow color, images and tonality.</p>
        <p>To build awareness we display Swedbank Pay’s name and logotype with impact. We express a distinguishing attitude through the logotype, yellow color, images and tonality – always as simple and uncomplicated as possible. Read more about the brand in the <Link to="/core/identity">Identity overview</Link>.</p>
        <img src={`${basename}img/documentation/introduction/pyramid.png`} className="img-fluid" alt="Illustration of our vision, values and purpose"/>
    </section>
);

const Introduction = () => (
    <DocContainer>
        <p className="lead">We are so glad to see that you are interested in learning more about the Swedbank Pay Design Guide. We know that it can be daunting to start with something new and complex. But don’t worry, we have got what you need!</p>
        <GetStarted />
        <WhatIsDG />
        <UsingDG />
        <OpenSimpleCaring />
    </DocContainer>
);

export default Introduction;

export { GetStarted, WhatIsDG, UsingDG, OpenSimpleCaring };
