import React from "react";
import * as externalLinks from "./constants";

import { DocContainer } from "@docutils";

const basename = process.env.basename;

const Intro = () => (
    <section>
        <p className="lead">At Swedbank Pay we value accessibility. Our products are meant to be used by people no matter of their abilities and therefor we strive to be WCAG (Web Content Accessibility Guidelines) compliant. We’re currently working on our accessibility awareness and meeting the terms of the  accessibility laws in Norway and Sweden. </p>
        <h2>What is accessibility</h2>
        <p>Accessibility ties back to our values <span>simple</span> and <span>caring</span>.About 15 percent of the western world’s population is living with a disability of some kind. This translates to over 1 billion people, and includes visual, auditory, physical, speech, cognitive, and neurological disabilities. </p>

        <p>Microsoft defines it like this: <span>“Accessibility: 1. The qualities that make an experience open to all. 2. A professional discipline aimed at achieving No. 1”</span> So what do we mean when we talk about disabilities and impairments? Well, a disability is a limitation when interacting in society in accordance to how society is built. It can be permanent, temporary or situational –permanent could be someone with only one arm, temporary someone with a broken arm, and situational a new parent (often carrying the baby in one arm). So, when we design for permanent impairment and disabilities we automatically include people with both temporary and situational impairments as well.</p>

        <div className="d-flex flex-column align-items-center mb-4">
            <img src={`${basename}img/documentation/accessibility/impairments.png`} className="w-100" alt="Illustration of impairments"/>
            <span className="caption-text"><span className="font-weight-bold">Figure 1.</span> An illustration visualizing permanent, beneath temporary and situational impairment.</span>
        </div>

        <p>At Swedbank Pay we strive to give all customers with disabilities and impairments (permanent, temporary and/or situational) a better chance of using our services on the same terms as others. </p>
    </section>
);

const AccessibleService = () => (
    <section>
        <h2 id="accessible-service">Why we want an accessible service</h2>
        <p>There are three main reasons as to why we think making our service accessible makes sense. Firstly, it is the right thing to do. If that’s not enough to convince us, there are also real business implications to excluding a large group of your user base due to not making your service accessible to them. Thirdly there are both existing and future legal demands for accessibility, more on that later. We can profit on making our service accessible. Designing for accessibility enables us to meet our target group. Nobody needs to feel excluded from our services because of a disability.</p>
    </section>
);

const WcagStandard = () => (
    <section>
        <h2 id="wcag-standard">WCAG standards and support material</h2>
        <p>WCAG has almost become a buzzword, thrown around by designers, developers and  stakeholders on regular basis. But what does it mean? WCAG is short for Web Content   Accessibility Guidelines and is a collection of accessibility standards and support material developed and written by the W3C Web Accessibility Initiative (WAI). WCAG is    a work in progress with several different versions (see <a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer">https://w3.org/WAI</a>).</p>
        <p>The guidelines ties back to four core terms: A website should be perceivable,  operable, understandable and robust. In these four areas there are sets of criteria  that has to be met for a certain term to be considered achieved (see Figure 2). Each  criteria also has one or more sub-criteria which are graded on a scale from A to AAA where A is least acceptable and AAA is considered “very good”.</p>

        <div className="d-flex flex-column align-items-center">
            <img src={`${basename}img/documentation/accessibility/wcag.png`} className="mb-1 w-100" alt="WCAG 2.1 at a glance" />
            <span className="caption-text"><span className="font-weight-bold">Figure 1</span> This is the WCAG 2.1 at a glance from <a href="https://www.w3.org/WAI/standards-guidelines/wcag/glance/" target="_blank" rel="noopener noreferrer">www.w3.org/WAI/standards-guidelines/wcag/glance/ </a></span>
        </div>

        <h3>More than a checklist</h3>
        <p>Important to remember is that WCAG and accessibility is more than a checklist! It  sure can start with a checklist (such as this one) but it is a practice and mindset   that must be present amongst all product employees. To meet the whole target group these terms are necessary to meet. </p>
        <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer" className="icon-link d-flex">
            <i className="material-icons mr-2" aria-hidden="true">open_in_new</i>
            <span className="mr-2">What is WCAG?</span>
        </a>

        <a href="https://www.w3.org/WAI/standards-guidelines/wcag/glance/" target="_blank" rel="noopener noreferrer" className="icon-link">
            <i className="material-icons mr-2" aria-hidden="true">open_in_new</i>
            <span className="mr-2">W3C – WCAG 2.1    Recommendations </span>
        </a>
    </section>
);

const Inclusions = () => (
    <section>
        <h2 id="inclusions">Creating inclusion</h2>
        <p>Today we’re working with awareness. All designers and developers at Swedbank Pay should be aware of accessibility, what it is, how it’s implemented and, what precautions we have to take to actually follow the law in the countries we’re in. As mentioned, accessibility may start with design but the main part is making our service compatible with accessibility helping tools, and that part happens in the technical implementation. </p>
        <p>Accessibility and WCAG can seem overwhelming and just as with everything else we need to take it step by step. This is a list from a Funka webinar held 2020-11-06:</p>
        <ul className="list list-bullet">
            <li>Make sure that we know the current status of our products. Are we accessible enough?</li>
            <li>Planning and prioritizing what we need to do to get where we need to be.</li>
            <li>Set up requirements and take control. Make sure that all employees knows what being accessible means. </li>
            <li>Create internal processes to sustainably work with accessibility. What’s our plan?</li>
            <li>We need to build internal competence, not solely rely on external experts such as Funka.</li>
        </ul>
    </section>
);

const DiveDeeper = () => (
    <section>
        <h2 id="dive-deeper">Dive deeper into accessibility</h2>
        <p>Accessibility can be an ocean and we know it can be hard to navigate it – that’s at least what we in the design team think. We can always improve the user experience, and thereby our products, by making them accessible for more people. Here are some links where you can read more about accessibility and practices to achieve inclusiveness for as many users as possible. </p>
        <a href="https://material.io/design/usability/accessibility.html#understanding-accessibility" target="_blank" rel="noopener noreferrer" className="icon-link d-flex">
            <i className="material-icons mr-2" aria-hidden="true">open_in_new</i>
            <span className="mr-2">Material.io – Understanding Accessibility </span>
        </a>
        <a href="https://www.w3.org/WAI/standards-guidelines/wcag/glance/" target="_blank" rel="noopener noreferrer" className="icon-link d-flex">
            <i className="material-icons mr-2" aria-hidden="true">open_in_new</i>
            <span className="mr-2">W3C – WCAG 2.1 Recommendations</span>
        </a>

        <h3>Website accessibility and the law</h3>
        {externalLinks.accessibilityAndLaw.map(links => (
            <a key={links.url} href={links.url} target="_blank" rel="noopener noreferrer" className="icon-link d-flex">
                <i className="material-icons mr-2" aria-hidden="true">open_in_new</i>
                <span className="mr-2">{links.text}</span>
            </a>
        ))}

        <h3>Others about accessibility</h3>
        {externalLinks.othersAboutAccessibility.map(links => (
            <a key={links.url} href={links.url} target="_blank" rel="noopener noreferrer" className="icon-link d-flex">
                <i className="material-icons mr-2" aria-hidden="true">open_in_new</i>
                <span className="mr-2">{links.text}</span>
            </a>
        ))}
    </section>
);

const Accessibility = () => (
    <DocContainer>
        <Intro />
        <AccessibleService />
        <WcagStandard />
        <Inclusions />
        <DiveDeeper />
        <span className="font-italic">This text was last updated 2020-11-24</span>
    </DocContainer>
);

export default Accessibility;

export { Intro, AccessibleService, WcagStandard, Inclusions, DiveDeeper };
