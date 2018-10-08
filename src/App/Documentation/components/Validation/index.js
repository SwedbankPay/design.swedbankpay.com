import React, { Component } from "react";

import { ComponentPreview, DocToc } from "#";
import { validation } from "$/px-script";

const ValidationOverview = () => (
    <>
        <h2 id="validation-overview">Validation overview</h2>
        <p><code className="token attr-name">data-validate</code>..</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <form action="#" noValidate>
                <div className="form-group has-error">
                    <label htmlFor="name">Name</label>
                    <div className="input-group">
                        <span className="input-group-addon">Mr.</span>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" autoComplete="given-name" data-validate="" required />
                    </div>
                    <div className="help-block" data-error="Wrong!" data-success="Right!">This one should be easy</div>
                </div>
                <button className="btn btn-primary" type="submit" disabled>Submit</button>
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
