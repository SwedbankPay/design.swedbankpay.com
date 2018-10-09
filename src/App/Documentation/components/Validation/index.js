import React, { Component } from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocToc, Attribute } from "#";
import { validation } from "$/px-script";

const ValidationOverview = () => (
    <>
        <h2 id="validation-overview">Validation overview</h2>
        <p>To use our validation, start by adding the attribute <Attribute name="novalidate" /> to your <PrismCode className="language-html">{"<form>"}</PrismCode> element. If you wish to validate your entire form, add the <code className="token attr-name">data-validate</code> attribute to the <PrismCode className="language-html">{"<form>"}</PrismCode> tag, if not add it to the desired <PrismCode className="language-html">{"<input>"}</PrismCode> tags.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <form action="#" noValidate data-validate="">
                <div className="form-group">{"\n"}
                    <label htmlFor="name-1">Name</label>{"\n"}
                    <input type="text" className="form-control" id="name-1" placeholder="Enter your name" />{"\n"}
                    <div className="help-block">This one should be easy</div>
                </div>{"\n"}
                <div className="form-group">{"\n"}
                    <label htmlFor="email-1">Email</label>{"\n"}
                    <input type="email" className="form-control" id="email-1" placeholder="Enter your email" />{"\n"}
                    <div className="help-block">This one should be pretty easy too</div>
                </div>{"\n"}
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </ComponentPreview>

        {/* <ComponentPreview language="html" showCasePanel codeFigure>
            <form action="#" noValidate data-validate="">
                <div className="form-group">{"\n"}
                    <label htmlFor="name">Name</label>
                    <div className="input-group">{"\n"}
                        <span className="input-group-addon">Mr.</span>{"\n"}
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" autoComplete="given-name" pattern="erik" required />{"\n"}
                    </div>
                    <div className="help-block" data-error="Wrong!" data-success="Right!">This one should be easy</div>
                </div>{"\n"}
                <button className="btn btn-primary" type="submit" data-disable-invalid="">Submit</button>
            </form>
        </ComponentPreview> */}
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
