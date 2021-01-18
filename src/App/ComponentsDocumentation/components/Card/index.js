import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer, StatusBadge } from "@docutils";
import CardComponent from "@components/Card";
import MediaObject from "@components/MediaObject";
import CodeTags from "@components/CodeTags";
import { overviewCards } from "./constants";

const textArr = ["This is a lot of text", "With some more text", "And then even some more", "Is it really possible to have this much text in one card?", "Yes!"];
const BASENAME = process.env.basename;
const brand = process.env.brand;

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={overviewCards} codeFigure />

        <h3>{"Dos and dont's"}</h3>
        <div className="row">
            <div className="col-xl-6 mb-4">
                <div className="slab slab-plain slab-border-success h-100">
                    <h4>Do</h4>
                    When presenting a group of cards, make sure their color match and have the same size and text length
                    <img src={`${BASENAME}img/documentation/cards/do-cards.png`} className="w-100 mt-4 mb-4"/>
                </div>
            </div>
            <div className="col-xl-6 mb-4">
                <div className="slab slab-plain slab-border-error h-100">
                    <h4>{"Don't"}</h4>
                    Avoid miss-match colors, different sizes and length on text in order to present a clean view
                    <img src={`${BASENAME}img/documentation/cards/dont-cards.png`} className="w-100 mt-4 mb-4"/>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-6 mb-4">
                <div className="slab slab-plain slab-border-success h-100">
                    <h4>Do</h4>
                    When presenting a group of cards, make sure they match visually. Try keeping it the same text length and to one row when possible.
                    <img src={`${BASENAME}img/documentation/cards/do-wide-cards.png`} className="w-100 mt-4 mb-4"/>
                </div>
            </div>
            <div className="col-xl-6 mb-4">
                <div className="slab slab-plain slab-border-error h-100">
                    <h4>{"Don't"}</h4>
                    Avoid miss-match colors, different sizes and length on text in order to present a clean view.
                    When using numbers make sure the numbering is sequenced and follows the correct order.
                    <img src={`${BASENAME}img/documentation/cards/dont-wide-cards.png`} className="w-100 mt-4 mb-4"/>
                </div>
            </div>
        </div>
    </>
);

const OldCard = () => (
    <>
        <h2 id="old-card">Old card</h2>
        <StatusBadge type="remove" />
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
        <h3>Card with grid</h3>
        <p>
            Use our grid along with cards to control their size and how they are displayed on different screen resolutions.
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
                        btnText="Button"
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
                        btnText="Button"
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
        <h3>Card Types</h3>
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
                <p>
                    The card component is a flexible container that groups and informs about the content and action.
                    The information presented should be concise, to the point and easy to understand. The card
                    component should be used to direct to pages on our site and not to external sites, in that case
                    use <Link to="/components/links">Links</Link> instead.
                </p>
                {brand === "swedbankpay" && <Overview />}
                <OldCard />
            </DocContainer>
        );
    }
}

export default Card;

/* For testing */
export { Overview, OldCard };
