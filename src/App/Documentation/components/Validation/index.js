import React, { Component } from "react";

import { ComponentPreview, DocToc } from "#";
import { validation } from "$/px-script";

const ValidationOverview = () => (
    <>
        <h2 id="validation-overview">Validation overview</h2>
        <p><code className="token attr-name">data-validate</code>..</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <form action="#">
                validation
            </form>
        </ComponentPreview>
    </>
);

const ValidationText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Validation...</p>
        <ValidationOverview />
    </div>
);

class Validation extends Component {
    componentDidMount () {
        validation.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <ValidationText />
                    <DocToc component={ValidationText} />
                </div>
            </div>
        );
    }
}

export default Validation;

/* For testing */
export { ValidationOverview, ValidationText };
