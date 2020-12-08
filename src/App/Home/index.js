import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { removeVscroll } from "../../../tools/remove-vscroll.js";
import { setTitle } from "../utils";

const BASENAME = process.env.basename;

const Home = () => {

    useEffect(() => {
        removeVscroll();
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

                <p className="front-page-ingress">Here you can find components and guidelines to help you  and your team work more efficiently and create a cohesive user experience through all     our products and touch points.</p>

                <div className="row dg-cards-container mt-4">
                    <div className="col-12 col-sm-6 col-lg-3 d-flex">
                        <a href="#" className="cards cards-primary">
                            <div className="cards-icon">
                                <i className="material-icons-outlined" style={{ transform: "rotate(180deg)" }}>wb_incandescent</i>
                            </div>
                            <div className="cards-content">
                                <span className="h4">Get started</span>
                                <span>Learn more about how to setup and use our system</span>
                            </div>
                            <i className="material-icons">arrow_forward</i>
                        </a>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 d-flex">
                        <a href="#" className="cards cards-primary">
                            <div className="cards-icon">
                                <i className="material-icons-outlined">palette</i>
                            </div>
                            <div className="cards-content">
                                <span className="h4">Identity</span>
                                <span>Learn about our fundamental principles</span>
                            </div>
                            <i className="material-icons">arrow_forward</i>
                        </a>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 d-flex">
                        <a href="#" className="cards cards-primary">
                            <div className="cards-icon">
                                <i className="material-icons-outlined">category</i>
                            </div>
                            <div className="cards-content">
                                <span className="h4">Components</span>
                                <span>Find all currently available components here</span>
                            </div>
                            <i className="material-icons">arrow_forward</i>
                        </a>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 d-flex">
                        <a href="#" className="cards cards-primary">
                            <div className="cards-icon">
                                <i className="material-icons-outlined">build</i>
                            </div>
                            <div className="cards-content">
                                <span className="h4">Utility</span>
                                <span>See all available CSS classes</span>
                            </div>
                            <i className="material-icons">arrow_forward</i>
                        </a>
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
                    <div className="dg-version-title px-0 pb-2">V 1.11.0</div>
                    <div className="dg-changelog-description px-0">
                        <span className="h4">Major overhaul of the Developer Portal’s design ♥️</span>
                        <p className="mt-2">
                        We’re so proud to announce that after many months of hard work we have finally launched our first iteration of re-design of the Developer Portal. The focus of this big update has been focused on improving the user experience, visual presentation, navigation and page structure of the portal.
                        </p>
                    </div>
                </div>
                <div className="row border-bottom pb-2 mt-4">
                    <div className="dg-version-title px-0 pb-2">V 1.10.6</div>
                    <div className="dg-changelog-description px-0">
                        <span className="h4">New improvements to reducing 404 page sequence.</span>
                        <p className="mt-2">
                        We corrected some page frequencies in 404 pages, so that you hopefully will face this issue less from now on!
                        </p>
                    </div>
                </div>
                <div className="row border-bottom pb-2 mt-4">
                    <div className="dg-version-title px-0 pb-2">V 1.10.5</div>
                    <div className="dg-changelog-description px-0">
                        <span className="h4">Our Swift API and Android API is now live!</span>
                        <p className="mt-2">
                        We are thrilled to announce the long awaited release of our <a href="#">Swift</a> and <a href="#">Android</a> API document pages, now you can easily see how to integrate it into your desired systems.
                        </p>
                    </div>
                </div>
                <div className="row border-bottom pb-2 mt-4">
                    <div className="dg-version-title px-0 pb-2">V 1.10.3</div>
                    <div className="dg-changelog-description px-0">
                        <span className="h4">Small bugfixes for the card components has been released.</span>
                        <p className="mt-2">
                        We are thrilled to announce the long awaited release of our <a href="#">Swift</a> and <a href="#">Android</a> API document pages, now you can easily see how to integrate it into your desired systems.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <a href="#" className="icon-link mt-4 px-0">
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
