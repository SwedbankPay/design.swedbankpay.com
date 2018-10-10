import React, { Component } from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocToc, Attribute } from "#";
import { validation } from "$/px-script";

const ValidationOverview = () => (
    <>
        <h2 id="validation-overview">Validation overview</h2>
        <p>To use our validation, start by adding the attribute <Attribute name="novalidate" /> to your <PrismCode className="language-html">{"<form>"}</PrismCode> element. If you wish to validate your entire form, add the <Attribute data name="validate" /> attribute to the <PrismCode className="language-html">{"<form>"}</PrismCode> tag, if not add it to the desired <PrismCode className="language-html">{"<input>"}</PrismCode> tags.</p>
        <p>Validates against <Attribute name="required" /> and <Attribute name="pattern" />. Using <Attribute name="pattern" /> overrides default patterns.</p>
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

        <h3>Feedback</h3>
        <p>To give users validation feedback on each input insert the message in the attributes <Attribute data name="success" /> and <Attribute data name="error" /> in the <Attribute value=".help-block" /> element.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <form action="#" noValidate data-validate="">
                <div className="form-group">{"\n"}
                    <label htmlFor="email-2">Email</label>
                    <div className="input-group">{"\n"}
                        <span className="input-group-addon"><i className="material-icons">email</i></span>{"\n"}
                        <input type="email" className="form-control" id="email-2" placeholder="bob.corlsan@example.com" required />{"\n"}
                    </div>
                    <div className="help-block" data-error="Wrong!" data-success="Right!">This one might be a little tricky</div>
                </div>{"\n"}
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </ComponentPreview>

        <h3>Dynamically disabled submit button</h3>
        <p>You can also dynamically disable the submit button by adding <Attribute data name="disable-invalid" /> to the <PrismCode className="language-html">{"<button type=\"submit\">"}</PrismCode> element.</p>
        <p><b>NOTE:</b> For this to work you also need the <Attribute data name="validate" /> attribute to be present in the <PrismCode className="language-html">{"<form>"}</PrismCode> tag.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <form action="#" noValidate data-validate="">
                <div className="form-group">{"\n"}
                    <label htmlFor="email-2">Email</label>
                    <div className="input-group">{"\n"}
                        <span className="input-group-addon"><i className="material-icons">email</i></span>{"\n"}
                        <input type="email" className="form-control" id="email-2" placeholder="bob.corlsan@example.com" required />{"\n"}
                    </div>
                    <div className="help-block" data-error="Wrong!" data-success="Right!">This one might be a little tricky</div>
                </div>{"\n"}
                <button className="btn btn-primary" type="submit" data-disable-invalid="">Submit</button>
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
