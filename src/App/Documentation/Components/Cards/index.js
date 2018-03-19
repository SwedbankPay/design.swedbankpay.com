import React, { Component } from "react";

import ComponentPreview from "../../utils/ComponentPreview";
import DocToc from "../../utils/DocToc";
import CardComponent from "../../../components/Card";

const Overview = () => (
    <div>
        <h2 id="overview">Overview</h2>
        <p>Cards...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={false}>
            <CardComponent />
        </ComponentPreview>
    </div>
);

const CardsText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Cards...</p>
        <Overview />
    </div>
);

class Cards extends Component {
    componentDidMount () {
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <CardsText />
                    <DocToc component={CardsText} />
                </div>
            </div>
        );
    }
}

export default Cards;

/* for testing */
export { Overview, CardsText };
