import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import CardComponent from "@components/Card";
import MediaObject from "@components/MediaObject";
import CodeTags from "@components/CodeTags";

const textArr = ["This is a lot of text", "With some more text", "And then even some more", "Is it really possible to have this much text in one card?", "Yes!"];

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>
            Cards support a wide variety of content, including images, text, list groups, links, and more.
            Make sure to restrain the width of your card unless you wish for it to fill the wrapping component.
        </p>
        <ComponentPreview language="html" showCasePanel showCasePanelSm codeFigure>
            <CardComponent
                titleTxt="Card title"
                type="primary"
                imgSrc="https://picsum.photos/300/?random"
                text="This paragraph contains some text related to this card."
                footerTxt="Footer text"
            />
        </ComponentPreview>
    </>
);

const GridCard = () => (
    <>
        <h2 id="card-with-grid">Card with grid</h2>
        <p>
            Use our <Link to="/docs/core/grid">grid</Link> along with cards to control their size and how they are displayed on different screen resolutions.
            Make sure to add <CodeTags type="secondary" code=".d-flex" /> to the wrapper if you want the cards to be of equal height when next to each other.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="row">
                <div className="col-12 col-lg-6 col-xl-4 d-flex">
                    <CardComponent
                        type="primary"
                        titleTxt="My grid card"
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
                        titleTxt="My grid card"
                        textSection={textArr}
                        smallText="This is some small text"
                        btn
                        btnClass="btn-block mt-auto"
                        bodyClass="d-flex flex-column"
                    />
                </div>

                <div className="col-12 col-lg-6 col-xl-4 d-flex">
                    <CardComponent
                        type="primary"
                        titleTxt="My grid card"
                        imgSrc="https://picsum.photos/300/?random"
                        text="This is a card with an image and body"
                        footerLinkTxt="Footer link"
                    />
                </div>
            </div>
        </ComponentPreview>
    </>
);

const CardTypes = () => (
    <>
        <h2 id="card-types">Card Types</h2>
        <p>
            We offer three different card types; <CodeTags type="secondary" code=".card-primary" />, <CodeTags type="secondary" code=".card-secondary" /> and <CodeTags type="secondary" code=".card-plain" />.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="row">
                <div className="col-12 col-lg-6 col-xl-4 d-flex">
                    <CardComponent
                        type="primary"
                        titleTxt="Card Primary"
                        imgSrc="https://picsum.photos/300/?random"
                        text="This paragraph contains some text about the person displayed above."
                    >
                        <ul className="list">
                            <li><span className="font-weight-bold">Card number:</span> 4563 5648 5642</li>
                            <li><span className="font-weight-bold">Balance:</span> 2500,- </li>
                        </ul>
                    </CardComponent>
                </div>
                <div className="col-12 col-lg-6 col-xl-4 d-flex">
                    <CardComponent
                        type="secondary"
                        titleTxt="Card Secondary"
                        text="Descriptive text to put inside the card, could contain a lot."
                        footerLinkTxt="Footer link"
                    >
                        <MediaObject size="sm" icon="account_balance" heading="725 NOK" text="Outstanding balance" textSmall muted />
                    </CardComponent>
                </div>
                <div className="col-12 col-lg-6 col-xl-4 d-flex">
                    <CardComponent
                        type="plain"
                        titleTxt="Card Plain"
                        imgSrc="https://picsum.photos/300/?random"
                        text="Descriptive text to put inside the card, could contain a lot."
                        footerLinkTxt="Footer link"
                    >
                        <MediaObject size="sm" icon="verified_user" heading="75%" text="Complete" textSmall muted />
                    </CardComponent>
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
                    Card is a flexible colored box which fills the width of its parent element.
                </p>
                <Overview />
                <GridCard />
                <CardTypes />
            </DocContainer>
        );
    }
}

export default Card;

/* For testing */
export { Overview, GridCard };
