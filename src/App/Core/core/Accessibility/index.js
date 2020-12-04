import React from "react";

const basename = process.env.basename;


const Intro = () => (
    <section id="intro">
        <p className="ingress font-weight-bold">At Swedbank Pay we value accessibility. Ourproducts are ment to be used by people no matter of their abilities and therefor westrive to be WCAG (Web Content Accessibility Guidelines) complient. We’re currentlyworking on our accessibility awareness and meeting the terms of the  accessibilitylaws in Norway and Sweden. </p>
        <p>Accessibility ties back to our values <span>simple</span> and <span>caring</span>.About 15 percent of the western world’s population is living with a disability of somekind. This translates to over 1 billion people, and includes visual, auditory,physical, speech, cognitive, and neurological disabilities. </p>

        <p>What is accessibility? Microsoft defines it like this: <span>“Accessibility: 1. Thequalities that make an experience open to all. 2. A professional discipline aimed atachieving No. 1”</span> So what do we meen when we talk about disabilities andimpairments? Well, a disability is a limitation when interacting in society inaccordance to how society is built. It can be permanent, temporary or situational –permanent could be someone with only one arm, temporary someone with a broken arm, andsituational a new parent (often carrying the baby in one arm). So, when we design forpermanent impairment and disabilities we automatically include people with bothtemporary and situational impairments as well.</p>

        <div className="img-container pb-4">
            <img src={`${basename}img/documentation/accessibility/impairments.svg`} alt="Illustration of impairments"/>
            <span><span className="font-weight-bold">Figure 1.</span> An illustration visualising permanent, temporary and situational impairment.</span>
        </div>

        <p className="mb-5">At Swedbank Pay we strive to give all customers with disabiliesand impairments (permanent, temporary and/or situaltional) a better chance of usingour services on the same terms as others. </p>
    </section>
);

const AccessibleService = () => (
    <section id="accessible-service">
        <h2>Why we want an accessible service</h2>
        <p className="mb-5">There are three main reasons as to why we think making our serviceaccessible makes sense. Firstly, it is the right thing to do. If that’s not enough toconvince us, there are also real business implications to excluding a large group ofyour user base due to not making your service accessible to them. Thirdly there areboth existing and future legal demands for accessibility, more on that later. We canprofit on making our service accessible. Designing for accessibility enables us tomeet our target group. Nobody needs to feel excluded from our services because of adisability.</p>
    </section>
);

const WcagStandard = () => (
    <section id="wcag-standard">
        <h2>WCAG standards and support material</h2>
        <p>WCAG has almost become a buzzword, thrown around by designers, developers and  stakeholders on regular basis. But what does it mean? WCAG is short for Web Content   Accessibility Guidelines and is a colletion of accessibility standards and support material developed and written by the W3C Web Accessibility Initiative (WAI). WCAG is    a work in progress with several different versions (see <a href="https://w3.org WAI">https://w3.org/WAI</a>).</p>
        <p>The guidelines ties back to four core terms: A website should be perceivable,  operable, understandable and robust. In these four areas there are sets of criterias  that has to be met for a certain term to be considered achieved (see Figure 2). Each  criteria also has one or more sub-criterias which are graded on a scale from A to AAA where A is least acceptable and AAA is considered “very good”.</p>

        <div className="img-container pb-4">
            <img src={`${basename}img/documentation/accessibility/wcag.svg`} className="mb-1" alt="WCAG 2.1 at a glance" />
            <span><span className="font-weight-bold">Figure 2.</span> This is the WCAG 2.1 at a glance from <a href="https://www.w3.org/WAI/standards-guidelines/wcag/glance/ ">www.w3.org/WAI/standards-guidelines/wcag/glance/ </a></span>
        </div>

        <h3 className="mt-0">More than a checklist</h3>
        <p>Important to remember is that WCAG and accessibility is more than a checklist! It  sure can start with a checklist (such as this one) but it is a practice and mindset   that must be present amongst all product employees. To meet the whole target group these terms are nessessary to meet. </p>
        <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" className="icon-link  d-block"><i className="material-icons mr-2" aria-hidden="true">open_in_new</i><span className="mr-2">What is WCAG?</span></a>

        <a href="https://www.w3.org/WAI/standards-guidelines/wcag/glance/" className="icon-link mb-5"><i className="material-icons mr-2" aria-hidden="true">open_in_new</i><span className="mr-2">W3C – WCAG 2.1    Recommendations </span></a>
    </section>
);

const Inclusions = () => (
    <section id="inclusions">
        <h2>Creating inclusion</h2>
        <p>Today we’re working with awareness. All designers and developers at Swedbank Pay should be aware of accessibility, what it is, how it’s implemented and, what procations we have to take to acctually follow the law in the countries we’re in. As mentioned, accessibility may start with design but the main part is making our service compatible with accessibility helping tools, and that part happens in the technical implementation. </p>
        <p className="mb-2">Accessibility and WCAG can seem overwhelming and just as with everything else we need to take it step by step. This is a list from a Funka webinar held 2020-11-06:</p>
        <ul className="pl-3 mb-5">
            <li>Make sure that we know the current status of our products. Are we accessible enough?</li>
            <li>Planning and prioritising what we need to do to get where we need to be.</li>
            <li>Set up requirements and take control. Make sure that all employees knows what being accessible means. </li>
            <li>Create internal processes to sustainably work with accessibility. What’s our plan?</li>
            <li>We need to build internal compentence, not soly rely on external experts such as Funka.</li>
        </ul>
    </section>
);

const DiveDeeper = () => (
    <section id="dive-deeper" className="mb-5">
        <h2>Dive deeper into accessibility</h2>
        <p>Accessibility can be an ocean and we know it can be hard to navigate it – that’s at least what we in the design team think. We can always improve the user experience, and thereby our products, by making them accessible for more people. Here are some links where you can read more about accessibility and practices to achieve inclusivness for as many users as possible. </p>
        <a href="https://material.io/design/usability/accessibility.html#understanding-accessibility" className="icon-link d-block"><i className="material-icons mr-2" aria-hidden="true">open_in_new</i><span className="mr-2">Material.io – Understandinig Accessibility </span></a>
        <a href="https://www.w3.org/WAI/standards-guidelines/wcag/glance/" className="icon-link d-block"><i className="material-icons mr-2" aria-hidden="true">open_in_new</i><span className="mr-2">W3C – WCAG 2.1 Recommendations</span></a>

        <h3 className="my-3">Website accessibility and the law</h3>
        <a href="https://www.funka.com/design-for-alla/lagar-och-regler/" className="icon-link d-block"><i className="material-icons mr-2" aria-hidden="true">open_in_new</i><span className="mr-2">Funka.com – Lagar och regler</span></a>
        <a href="https://www.funka.com/en/design-for-all/accessibility/web-accessibility-directive-norway-is-facing-a-choice/" className="icon-link d-block"><i className="material-icons mr-2" aria-hidden="true">open_in_new</i><span className="mr-2"> Funka.com – Web accessibility directive: Norway is facing a choice</span></a>
        <a href="https://medium.com/confrere/its-illegal-to-have-an-inaccessible-website-in-norway-and-that-s-good-news-for-all-of-us-b59a9e929d54" className="icon-link d-block"><i className="material-icons mr-2" aria-hidden="true">open_in_new</i><span className="mr-2">Medium.com – It’s illegal to have an inaccessible website in Norway and that’s good for all of us</span></a>

        <h3 className="my-3">Others about accessibility</h3>
        <a href="https://www.swedbank.com/sv/hallbarhet/ansvarsfulla-affarer/betala.html" className="icon-link d-block"><i className="material-icons mr-2" aria-hidden="true">open_in_new</i><span className="mr-2">Swedbank – Ansvarsfulla affärer </span></a>
        <a href="https://polaris.shopify.com/foundations/accessibility" className="icon-link d-block"><i className="material-icons mr-2" aria-hidden="true">open_in_new</i><span className="mr-2">Shopify – Accessibility</span></a>
        <a href="https://material.io/design/usability/accessibility.html" className="icon-link d-block"><i className="material-icons mr-2" aria-hidden="true">open_in_new</i><span className="mr-2">Google Material – Accessibility</span></a>
        <a href="http://www.lightningdesignsystem.com/accessibility/overview/" className="icon-link d-block"><i className="material-icons mr-2" aria-hidden="true">open_in_new</i><span className="mr-2">Salesforce Lightning – Accessibility</span></a>
        <a href="https://spotify.design/article/spotify-inclusive-design-global-accessibility-awareness-day-round-up" className="icon-link d-block"><i className="material-icons mr-2" aria-hidden="true">open_in_new</i><span className="mr-2">Spotify – Inclusive design global accessibility awareness day round up </span></a>
    </section>
);

const Accessibility = () => (

    <div className="doc-body accessibility mx-auto p-0">
        <Intro />
        <AccessibleService />
        <WcagStandard />
        <Inclusions />
        <DiveDeeper />
        <span className="font-italic">This text was last updated 2020-11-24</span>
    </div>
);

export default Accessibility;

export { Intro, AccessibleService, WcagStandard, Inclusions, DiveDeeper };
