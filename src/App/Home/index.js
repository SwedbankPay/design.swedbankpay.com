import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { setTitle, RemoveVscroll } from "../utils";

const BASENAME = process.env.basename;

const Home = () => {

    useEffect(() => {
        RemoveVscroll();
        setTitle("Home");
    });

    const FrontPage = () => (
        <section className="dg-front-page-container m-auto d-flex flex-column">
            <div className="my-auto">
                <img src={`${BASENAME}img/background/cluster-bubbles.svg`} className="bg-img cluster-bubble d-none d-xl-block mt-n5"/>
                <header>
                    <span className="dg-title-small d-block m-0">Welcome to the</span>
                    <span className="dg-title-big my-0">Swedbank Pay Design Guide</span>
                </header>

                <div className="dg-version-indicator">
                    <span className="dg-version-indicator-text p-2">Ver. 5.0.0</span>
                </div>

                <p className="front-page-ingress">Here you can find components and guidelines to help you  and your team work more efficiently and create a cohesive user experience through all our products and touch points.</p>

                <div className="row dg-cards-container mt-4">
                    <div className="col-12 col-sm-6 col-lg-3 d-flex">
                        <Link to="/getting-started/introduction" className="cards cards-primary">
                            <div className="cards-icon">
                                <i className="material-icons-outlined" style={{ transform: "rotate(180deg)" }}>wb_incandescent</i>
                            </div>
                            <div className="cards-content">
                                <span className="h4">Get started</span>
                                <span>Learn more about how to setup and use our system</span>
                            </div>
                            <i className="material-icons">arrow_forward</i>
                        </Link>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 d-flex">
                        <Link to="/core/identity" className="cards cards-primary">
                            <div className="cards-icon">
                                <i className="material-icons-outlined">palette</i>
                            </div>
                            <div className="cards-content">
                                <span className="h4">Identity</span>
                                <span>Learn about our fundamental principles</span>
                            </div>
                            <i className="material-icons">arrow_forward</i>
                        </Link>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 d-flex">
                        <Link to="/components/components" className="cards cards-primary">
                            <div className="cards-icon">
                                <i className="material-icons-outlined">category</i>
                            </div>
                            <div className="cards-content">
                                <span className="h4">Components</span>
                                <span>Find all currently available components here</span>
                            </div>
                            <i className="material-icons">arrow_forward</i>
                        </Link>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 d-flex">
                        <Link to="/utilities/utilities" className="cards cards-primary">
                            <div className="cards-icon">
                                <i className="material-icons-outlined">build</i>
                            </div>
                            <div className="cards-content">
                                <span className="h4">Utility</span>
                                <span>See all available CSS classes</span>
                            </div>
                            <i className="material-icons">arrow_forward</i>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-auto d-none d-md-inline-flex mb-3">
                <a className="dg-next-page-content mx-auto"
                    onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
                    <span className="next-page-text text-uppercase">Click here to see changelog</span>
                    <i className="material-icons">expand_more</i>
                </a>
            </div>
            <img src={`${BASENAME}img/background/large-bubble.svg`} className="bg-img large-bubble d-none d-xl-block"/>

        </section>
    );

    const Changelog = () => (
        <section className="dg-changelog-container d-flex flex-column">

            <a className="dg-next-page-content mt-5 d-none d-lg-flex"
                onClick={() => window.scrollTo(0, 0)}>
                <i className="material-icons ">expand_less</i>
            </a>

            <div className="container dg-changelog-content my-auto pb-5">
                <div className="row mt-3">
                    <span className="dg-changlelog-title">What’s new in the design guide
                        <div className="dg-changelog-divider my-2"></div>
                    </span>
                </div>

                <div className="row border-bottom pb-2 mt-4">
                    <div className="dg-version-title px-0 pb-2">V 5.0.0</div>
                    <div className="dg-changelog-description px-0">
                        <span className="h4">Major overhaul of the Developer Portal’s design ♥️</span>
                        <p className="mt-2">
                        Happy New Year everyone! We have a brand new look for the Design Guide landing page, a new left side menu updated to suit the branding of Swedbank Pay. We have finally added both “Get started” and “Identity” and re-written all the related pages.
                        </p>
                    </div>
                </div>
                <div className="row border-bottom pb-2 mt-4">
                    <div className="dg-version-title px-0 pb-2">V 4.8.1</div>
                    <div className="dg-changelog-description px-0">
                        <span className="h4">Update the actual logotype and guidelines.</span>
                        <p className="mt-2">
                        The journey has finally begun! We’re reconsidering the structure of the Design Guide, starting off with updating and moving ‘Logotype guidelines’ under ‘Resources’ to ‘Core’. We’ve also added the new logotype and guidelines on how to use it.
                        </p>
                    </div>
                </div>
                <div className="row border-bottom pb-2 mt-4">
                    <div className="dg-version-title px-0 pb-2">V 4.8.0</div>
                    <div className="dg-changelog-description px-0">
                        <span className="h4">Major component updates</span>
                        <p className="mt-2">
                        Is it Christmas already, you might wonder? No, we’ve just worked really hard and are excited to show you all new component updates. New Cards, Slabs, Status, Tooltips, destructive buttons for everyone. But we’ve also updated and fixed some stuff that was already there. Check out the repository for full overview!
                        </p>
                    </div>
                </div>
                <div className="row border-bottom pb-2 mt-4">
                    <div className="dg-version-title px-0 pb-2">V 4.7.0</div>
                    <div className="dg-changelog-description px-0">
                        <span className="h4">Introducing the the new codeview component</span>
                        <p className="mt-2">
                        We would like to introduce a new way to interact with our components in Design Guide through codeview. Developers can now dynamically adjust the component to fit their needs and generate code based on the adjustments. Besides that we have also fixed many bugs and made adjustment according to feedback!
                        </p>
                    </div>
                </div>
                <div className="row">
                    <a href="https://github.com/SwedbankPay/design.swedbankpay.com" target="_blank" rel="noopener noreferrer"className="icon-link mt-4 px-0">
                        <span>See the Github repository</span>
                        <i className="material-icons" aria-hidden="true">open_in_new</i>
                    </a>
                </div>
            </div>
        </section>
    );

    return (
        <div className="doc-container dg-front-page py-0">
            <FrontPage />
            <Changelog />
            <img src={`${BASENAME}img/background/two-bubbles.svg`} className="bg-img two-bubbles d-none d-xl-block"/>
            <img src={`${BASENAME}img/background/single-bubble.svg`} className="bg-img single-bubble d-none d-xl-block"/>
        </div>
    );
};

export default Home;
