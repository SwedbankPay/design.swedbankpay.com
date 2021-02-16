import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { changeLogs } from "./constants";
import { setTitle, RemoveVscroll } from "../utils";
import routes from "@src/App/routes/all";
import packageJson from "~/package";

const BASENAME = process.env.basename;

const Home = () => {
    useEffect(() => {
        RemoveVscroll();
        setTitle("Home");
    });

    const FrontPage = () => (
        <section className="dg-front-page-container m-auto d-flex flex-column">
            <div className="my-auto">
                <img src={`${BASENAME}img/background/cluster-bubbles.svg`} className="background-img cluster-bubble d-none d-xl-block mt-n5"/>
                <header>
                    <span className="dg-title-small d-block m-0">Welcome to the</span>
                    <span className="dg-title-big my-0">Swedbank Pay Design Guide</span>
                </header>

                <div className="dg-version-indicator">
                    <span>Ver. {packageJson.version}</span>
                </div>

                <p className="front-page-lead">Here you can find components and guidelines to help you  and your team work more efficiently and create a cohesive user experience through all our products and touch points.</p>

                <div className="row dg-cards-container mt-4">
                    {routes.map(route => (
                        <div key={route.title} className="col-12 col-sm-6 col-lg-3 d-flex">
                            <Link to={route.path} className="cards cards-primary">
                                <div className="cards-icon">
                                    <i className={`material-icons-outlined ${route.icon.rotate && "rotate-icon"}`}>{route.icon.name}</i>
                                </div>
                                <div className="cards-content">
                                    <span className="h4">{route.title === "Utilities" ? "Utility" : route.title }</span>
                                    <span>{route.entryCardText}</span>
                                </div>
                                <i className="material-icons">arrow_forward</i>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-auto d-none d-md-inline-flex mb-3">
                <a className="dg-next-page-content mx-auto"
                    onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
                    <span>Click here to see changelog</span>
                    <i className="material-icons">expand_more</i>
                </a>
            </div>
            <img src={`${BASENAME}img/background/large-bubble.svg`} className="background-img large-bubble d-none d-xl-block"/>

        </section>
    );

    const Changelog = () => (
        <section className="dg-changelog-container d-flex flex-column mb-0">
            <div className="container dg-changelog-content my-auto">
                <div className="row mt-3">
                    <span className="dg-changlelog-title">What’s new in the design guide
                        <div className="dg-changelog-divider my-2"></div>
                    </span>
                </div>

                {changeLogs.map(log => (
                    <div key={log.version} className="row border-bottom pb-2 mt-4">
                        <div className="px-0 pb-2">Version {log.version}</div>
                        <div className="dg-changelog-description px-0">
                            <span className="h4">{log.title}</span>
                            <p className="mt-2">{log.text}</p>
                        </div>
                    </div>
                ))}

                <div className="row">
                    <a href="https://github.com/SwedbankPay/design.swedbankpay.com/releases" target="_blank" rel="noopener noreferrer"className="icon-link mt-4 px-0">
                        <i className="material-icons mr-2" aria-hidden="true">open_in_new</i>
                        <span>Github - Detailed changelog</span>
                    </a>
                </div>
            </div>
        </section>
    );

    return (
        <div className="doc-container dg-front-page py-0">
            <FrontPage />
            <Changelog />
            <img src={`${BASENAME}img/background/two-bubbles.svg`} className="background-img two-bubbles d-none d-xl-block"/>
            <img src={`${BASENAME}img/background/single-bubble.svg`} className="background-img single-bubble d-none d-xl-block"/>
        </div>
    );
};

export default Home;
