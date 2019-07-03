import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, Property, DocContainer } from "#";
import CardComponent from "@/Card";
import MediaObject from "@/MediaObject";

const textArr = ["This is a lot of text", "With some more text", "And then even some more", "Is it really possible to have this much text in one card?", "Yes!"];

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>
            We offer three different card variants; <Property value=".card-primary" />, <Property value=".card-secondary" /> and <Property value=".card-plain" />.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="row">
                <CardComponent
                    title={<MediaObject size="sm" icon="account_circle" heading="Bob Corlsan" text="bob.corlsan@payex.com" textSmall />}
                    type="primary"
                    imgSrc="https://picsum.photos/300/?random"
                    text="This paragraph contains some text about the person displayed above."
                >
                    <ul className="list">
                        <li><span className="font-weight-bold">Card number:</span> 4563 5648 5642</li>
                        <li><span className="font-weight-bold">Balance:</span> 2500,- </li>
                    </ul>
                </CardComponent>
                <CardComponent
                    type="secondary"
                    title={<h3>Card secondary</h3>}
                    text="Descriptive text to put inside the card, could contain a lot."
                    footerLinkTxt="Footer link"
                >
                    <MediaObject size="sm" icon="account_balance" heading="725 NOK" text="Outstanding balance" textSmall muted />
                </CardComponent>
                <CardComponent
                    type="plain"
                    title={<h3>Card plain</h3>}
                    imgSrc="https://picsum.photos/300/?random"
                    text="Descriptive text to put inside the card, could contain a lot."
                    footerLinkTxt="Footer link"
                >
                    <MediaObject size="sm" icon="verified_user" heading="75%" text="Complete" textSmall muted />
                </CardComponent>
            </div>
        </ComponentPreview>
    </>
);

const GridCard = () => (
    <>
        <h2 id="card-with-grid">Card with grid</h2>
        <p>
            Use our <Link to="/docs/core/grid"/> along with cards to control their size and how they are displayed on different screen resolutions.
            Make sure to add <Property value=".d-flex" /> to the wrapping container if you want the cards to be of equal height when next to each other.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="row">
                <div className="col-12 col-lg-6 col-xl-4 d-flex">
                    <CardComponent
                        type="primary"
                        title={<h3>My Custom card</h3>}
                        text="Card text"
                        smallText="Small card text"
                        btn
                        btnClass="btn-block mt-auto"
                        bodyClass="d-flex flex-column"
                    >
                        <MediaObject size="sm" icon="verified_user" heading="75%" text="Complete" textSmall muted />
                    </CardComponent>
                </div>

                <div className="col-12 col-lg-6 col-xl-4 d-flex">
                    <CardComponent
                        type="primary"
                        title={<h3>Text card</h3>}
                        textSection={textArr}
                        smallText="This is some small text"
                        btn
                        btnClass="btn-block mt-auto"
                        bodyClass="d-flex flex-column"
                    />
                </div>

                <div className="col-12 col-lg-6 col-xl-4 d-flex">
                    <CardComponent
                        type="secondary"
                        title={<h3>Image card</h3>}
                        imgSrc="https://picsum.photos/300/?random"
                        text="This is a card with an image and body"
                        footerLinkTxt="Footer link"
                    />
                </div>
            </div>
        </ComponentPreview>
    </>
);

class Card extends Component {
    render () {
        return (
            <DocContainer docToc>
                <p className="lead">
                    Card is a flexible container taking up the entire width of its parent element. It contains different sections like headers, footers, images and more.
                </p>
                <Overview />
                <GridCard />
            </DocContainer>
        );
    }
}

export default Card;

/* For testing */
export { Overview, GridCard };
