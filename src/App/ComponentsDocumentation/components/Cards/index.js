import React, { Component } from "react";

import { ComponentPreview, DocContainer } from "@docutils";

const Overview = () => (
    <>
        <h2 id="overview">Cards implementation</h2>
        <ComponentPreview language="html" showCasePanel>
            <h3>This is the initial implementation and icons</h3>
            <div className="row">
                <div className="col-6">
                    <div className="cards">
                        <div className="cards-content">
                            <h4>The title</h4>
                            <p>Description of the card goes here</p>
                        </div>
                    </div>
                </div>

            </div>
            <i className="material-icons">shopping_basket</i>
            <i className="material-icons">arrow_forward</i>

            {/* ----------------------HERE------------------------- */}
            <h3>This is the extended implementation</h3>
            <div className="row">
                <div className="col-6">
                    <div className="cards">
                        <div className="cards-content">
                            <h4>The title</h4>
                            <p>Improve me!</p>
                        </div>
                    </div>
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
                    Implement the extended cards according to the design from Carl
                </p>
                <Overview />
            </DocContainer>
        );
    }
}

export default Card;

