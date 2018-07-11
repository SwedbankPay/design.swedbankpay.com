import React, { Component } from "react";

import ComponentPreview from "#/ComponentPreview";
import DocToc from "#/DocToc";
import CardComponent from "@/Card";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Overview... <code className="token property">.card</code>...</p>
        <p>... <code className="token property">.card-default</code>...</p>
        <p>... <code className="token property">.card-brand</code>...</p>
        <p>... <code className="token property">.card-light</code>...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <div className="cards">
                <ul>
                    <CardComponent
                        type="default"
                        title="Card default"
                        imgSrc="https://picsum.photos/300"
                        icon="account_balance"
                        highlightTitle="725 NOK"
                        highlightSubTitle="Outstanding balance"
                        text="This is the cards text"
                        smallText="And the small text"
                        btnTxt="Button"
                        footerTxt="This is some text that goes in the footer."
                        footerLinkTxt="You wanna click this link?"
                    />
                    <CardComponent
                        type="brand"
                        title="Card brand"
                        imgSrc="https://picsum.photos/300"
                        icon="face"
                        highlightTitle="Bob Corlsan"
                        highlightSubTitle="bob.corlsan@payex.com"
                        text="This is the cards text"
                        smallText="And the small text"
                        btnTxt="Button"
                        footerTxt="This is some text that goes in the footer."
                        footerLinkTxt="You wanna click this link?"
                    />
                    <CardComponent
                        type="light"
                        title="Card light"
                        imgSrc="https://picsum.photos/300"
                        icon="verified_user"
                        highlightTitle="75%"
                        highlightSubTitle="Complete"
                        text="This is the cards text"
                        smallText="And the small text"
                        btnTxt="Button"
                        footerTxt="This is some text that goes in the footer."
                        footerLinkTxt="You wanna click this link?"
                    />
                </ul>
            </div>
        </ComponentPreview>
    </>
);

const CardText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <div className="alert alert-danger in">
            This component is under development and will probably change.
        </div>
        <p className="lead">Card...</p>
        <Overview />
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

/* for testing */
export { Overview, CardText };
