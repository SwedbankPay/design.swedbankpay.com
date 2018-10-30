import React, { Component } from "react";

import { ComponentPreview, Property, DocToc, ExperimentalComponentAlert } from "#";
import CardComponent from "@/Card";
import MediaObject from "@/MediaObject";

const Overview = () => (
    <>
        <h2 id="overview">Cards horizontal</h2>
        <p>Use the <Property value=".card" /> class and <Property value=".card-default" /> class on a container object to style it as a card.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="cards cards-md-horizontal">
                <CardComponent
                    type="default"
                    title="Card default"
                    imgSrc="https://picsum.photos/300"
                    text="This is the cards text"
                    smallText="And the small text"
                    btnTxt="Button"
                    footerTxt="This is some text that goes in the footer."
                    footerLinkTxt="You wanna click this link?"
                >
                    <MediaObject size="sm" icon="account_balance" heading="725 NOK" textsm="Outstanding balance" />
                </CardComponent>

                <CardComponent
                    type="default"
                    title="Card default"
                    imgSrc="https://picsum.photos/300"
                    text="This is the cards text"
                    smallText="And the small text"
                    btnTxt="Button"
                    footerTxt="This is some text that goes in the footer."
                    footerLinkTxt="You wanna click this link?"
                >
                    <MediaObject size="sm" icon="account_circle" heading="Bob Corlsan" textsm="bob.corlsan@payex.com" />
                </CardComponent>

                <CardComponent
                    type="default"
                    title="Card default"
                    imgSrc="https://picsum.photos/300"
                    text="This is the cards text"
                    smallText="And the small text"
                    btnTxt="Button"
                    footerTxt="This is some text that goes in the footer."
                    footerLinkTxt="You wanna click this link?"
                >
                    <MediaObject size="sm" icon="verified_user" heading="75%" textsm="Complete" />
                </CardComponent>
            </div>
        </ComponentPreview>
    </>
);

const CardTypes = () => (
    <>
        <h2 id="card-types">Card Types</h2>
        <p>CardTypes... <Property value=".card" /></p>
        <p>... <Property value=".card-default" /></p>
        <p>... <Property value=".card-brand" /></p>
        <p>... <Property value=".card-light" /></p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="cards cards-md-horizontal">
                <CardComponent
                    type="brand"
                    title="Card brand"
                    imgSrc="https://picsum.photos/300"
                    text="This is the cards text"
                    smallText="And the small text"
                    btnTxt="Button"
                    footerTxt="This is some text that goes in the footer."
                    footerLinkTxt="You wanna click this link?"
                >
                    <MediaObject size="sm" icon="account_balance" heading="725 NOK" textsm="Outstanding balance" />
                </CardComponent>

                <CardComponent
                    type="default"
                    title="Card default"
                    imgSrc="https://picsum.photos/300"
                    text="This is the cards text"
                    smallText="And the small text"
                    btnTxt="Button"
                    footerTxt="This is some text that goes in the footer."
                    footerLinkTxt="You wanna click this link?"
                >
                    <MediaObject size="sm" icon="account_circle" heading="Bob Corlsan" textsm="bob.corlsan@payex.com" />
                </CardComponent>

                <CardComponent
                    type="light"
                    title="Card light"
                    imgSrc="https://picsum.photos/300"
                    text="This is the cards text"
                    smallText="And the small text"
                    btnTxt="Button"
                    footerTxt="This is some text that goes in the footer."
                    footerLinkTxt="You wanna click this link?"
                >
                    <MediaObject size="sm" icon="verified_user" heading="75%" textsm="Complete" />
                </CardComponent>
            </div>
        </ComponentPreview>
    </>
);

const CardText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <ExperimentalComponentAlert />
        <p className="lead">Card...</p>
        <Overview />
        <CardTypes />
    </div>
);

class Card extends Component {
    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <CardText />
                    <DocToc component={CardText} />
                </div>
            </div>
        );
    }
}

export default Card;

/* For testing */
export { Overview, CardTypes, CardText };
