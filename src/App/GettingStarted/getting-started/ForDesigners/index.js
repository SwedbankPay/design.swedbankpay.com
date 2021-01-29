import React from "react";
import { Link } from "react-router-dom";

import Lightbox from "@components/Lightbox";

import { DocContainer } from "@docutils";

const basename = process.env.basename;

const NeedToHave = () => (
    <section>
        <h2 id="need-to-have">What you need to have</h2>
        <p>Here are some things you need to have access to in order to get up to speed – our Figma project and the Swedbank Pay fonts.</p>

        <h3>Design tools</h3>
        <p>At Swedbank Pay Design we use Figma for all our design needs, it is an online design and prototyping tool but we recommend that you download the application for the full experience. Everything you need to know about how we work in Figma is documented in our project and can be accessed through the Onboarding file. Please contact one of our design guide team members if you need any help.</p>
        <p>If you need access to the project contact you manager or write in the Slack channel <strong>#design-guide-general.</strong></p>
        <a href="https://www.figma.com/downloads/" className="icon-link d-block" target="_blank" rel="noopener noreferrer">
            <i className="material-icons" aria-hidden="true">launch</i>
            <span className="ml-2">Download the Figma application</span>
        </a>
        <a href="https://www.figma.com/" className="icon-link" target="_blank" rel="noopener noreferrer">
            <i className="material-icons" aria-hidden="true">launch</i>
            <span className="ml-2">Read more about Figma</span>
        </a>

        <h3>Typefaces & fonts</h3>
        <p>We use our own customized typefaces & fonts. To access the these, please, head over to the <Link to="/identity/typography">Typography section</Link>. There you can also find guidelines on how to use all the different typefaces.  </p>
    </section>
);
const NeedToKnow = () => (
    <section>
        <h2 id="need-to-know">What you need to know</h2>
        <p>When you have the right tools to get started there are some things that define the Swedbank Pay Design that are good to be familiar with. We try our best to always design with our brand and identity in the back of our heads. </p>

        <h3>Brand and identity</h3>
        <p>Open, simple and caring. These are our values that we always strive to come back to when we design both internal and external experiences. All information about our core values and things that make us who we are can be found in <Link to="/identity/identity">Identity</Link>. </p>
        <a href="https://brand-manager.swedbank.com/start/guidelines/swedbank-pay.html" className="icon-link" target="_blank" rel="noopener noreferrer">
            <i className="material-icons" aria-hidden="true">launch</i>
            <span className="ml-2">Read more about the Swedbank Pay Brand (Swedbank Brand Manager) </span>
        </a>

        <h3>Grid and breakpoints</h3>
        <p>In order to align design and development as close as possible with each other we have pre-defined grids in Figma using the same size and breakpoints as in development. These grids are available in Figma and you can read more about how it is setup in the <Link to="/identity/grid">Grid section</Link>.</p>

        <h3>8-point spacing system</h3>
        <p>Additionally, while designing we also incorporates a flexible 8-point spacing system for spacing between our components and layouts. A flexible 8-point spacing system means we use multiples of 8 most of the times. This not only creates consistency across all our digital products but also makes it easier for developers to know what values they should use. You can learn more about how it works under the <Link to="/identity/spacing">Spacing section</Link>. </p>
    </section>
);
const Contributing = () => (
    <section>
        <h2 id="contributing">Contributing</h2>
        <p>When working on the different products across our brand it is important for you as a designer to understand how you can contribute to the Design Guide. It is equally important to understand which types of components can be added to the design guide and which ones are designed specific for your product. In general, the best practice is to keep a close dialogue with the design guide team and its designers and they will guide you through the process.</p>

        <p>As we all know, sometimes you face niche problems which requires specific solutions, this is normal and something that we have accounted for. This is where snowflake comes in and in order to learn about when you should create a snowflake and how, check out our guidelines here in the <a href="https://www.figma.com/file/sRWbYlMbR0c4T3vT8DBHIU/Snowflakes?node-id=1%3A4" target="_blank" rel="noopener noreferrer" className="icon-link"><span className="mr-2">Snowflake Figma file</span><i className="material-icons" aria-hidden="true">open_in_new</i></a></p>

        <div className="d-flex flex-column align-items-center">
            <Lightbox imgSrc={`${basename}img/documentation/forDesigners/vanilla-pattern.png`} alt="Our modified Vanilla pattern design intake process"/>
            <span className="caption-text"><span className="font-weight-bold">Figure 1.</span> Our modified Vanilla pattern design intake process(Click to view)</span>
        </div>
    </section>
);
const Feedback = () => (
    <section>
        <h2 id="feedback">Feedback</h2>
        <p>We want to do our best to provide top quality components for you to use, but this is only possible with the help from you! If you have any suggestions for how we could potentially improve a component please don’t hesitate to reach out, you can report it directly to one of the designers working on the design guide or reach us at #design-guide-feedback on Slack.</p>
    </section>
);
const DiscoverMore = () => (
    <section>
        <h2 id="discover-more">Discover more</h2>
        <div className="component-overview hide-arrow-icon">
            <Link to="/identity/identity" className="cards cards-primary cards-wide">
                <div className="cards-content m-0">
                    <span className="h3">Identity</span><span>The philosophy behind our designs </span>
                </div>
                <i className="material-icons">arrow_forward</i>
            </Link>
            <Link to="/components/components" className="cards cards-primary cards-wide">
                <div className="cards-content m-0">
                    <span className="h3">Component</span><span>See all available components</span>
                </div>
                <i className="material-icons">arrow_forward</i>
            </Link>
        </div>
    </section>
);

const ForDevelopers = () => (
    <DocContainer>
        <p className="lead mb-5">We are thrilled to have you onboard in the Swedbank Pay Design team. In order to get started designing with us we have prepared a get started guide to help you understand the way our design system and this Design Guide works. Enjoy!</p>
        <NeedToHave />
        <NeedToKnow />
        <Contributing />
        <Feedback />
        <DiscoverMore />
    </DocContainer>
);

export default ForDevelopers;

export { NeedToHave, NeedToKnow, Contributing, Feedback, DiscoverMore };
