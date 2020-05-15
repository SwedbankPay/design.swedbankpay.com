import React, { Component } from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import IconPreview from "@components/IconPreview";
import ActionListComponent from "@components/ActionList";
import CodeTags from "@components/CodeTags";

const { actionList } = window.dg;
const items = [
    {
        name: "Add bookmark",
        icon: "bookmark"
    },
    {
        name: "Add client",
        icon: "business_center"
    },
    {
        name: "Add document",
        icon: "add_circle"
    },
    {
        name: "Add user",
        icon: "person_add"
    }
];

const MaterialIcons = () => (
    <>
        <h2 id="material-icons">Material Icons</h2>
        <p className="lead">DesignGuide includes Google{"'"}s material icons. For a full overview of the available icons please visit <a href="https://material.io/tools/icons/">this site</a>.</p>
        <p>To use an icon, provide the following markup: <CodeTags type="primary" code={"<i class=\"material-icons\">{icon_name}</i>"} />.</p>
        <ComponentPreview language="html" showCasePanel>
            <div className="row justify-content-evenly align-items-end">
                <IconPreview preview type="material-icons" name="android" />
                <IconPreview preview type="material-icons" name="contact_support" />
                <IconPreview preview type="material-icons" name="face" />
                <IconPreview preview type="material-icons" name="star" />
                <IconPreview preview type="material-icons" name="warning" />
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" codeFigure>
            <i className="material-icons">android</i>{"\n"}
            <i className="material-icons">contact_support</i>{"\n"}
            <i className="material-icons">face</i>{"\n"}
            <i className="material-icons">star</i>{"\n"}
            <i className="material-icons">warning</i>
        </ComponentPreview>

        <h3>Sizes</h3>
        <p>You can modify the size of the material icons by adding one of the size
            classes: <CodeTags type="secondary" code="material-icons-tiny" />, <CodeTags type="secondary" code="material-icons-small" />, <CodeTags type="secondary" code="material-icons-medium" /> or <CodeTags type="secondary" code="material-icons-large" />.</p>
        <ComponentPreview language="html" showCasePanel>
            <div className="row justify-content-evenly align-items-end">
                <IconPreview previewSize type="material-icons" name="android" size="tiny" />
                <IconPreview previewSize type="material-icons" name="android" size="small" />
                <IconPreview previewSize type="material-icons" name="android" size="medium" />
                <IconPreview previewSize type="material-icons" name="android" size="large" />
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" codeFigure>
            <i className="material-icons material-icons-tiny">android</i>{"\n"}
            <i className="material-icons material-icons-small">android</i>{"\n"}
            <i className="material-icons material-icons-medium">android</i>{"\n"}
            <i className="material-icons material-icons-large">android</i>
        </ComponentPreview>
    </>
);

const PaymentIcons = () => (
    <>
        <h2 id="payment-icons">Payment Icons</h2>
        <p>To use an icon, provide the following markup: <CodeTags type="primary" code={"<i class=\"payment-icon payment-icon-{icon_name}\"></i>"} />.</p>
        <ComponentPreview language="html" showCasePanel>
            <div className="row justify-content-evenly mb-2">
                <IconPreview preview type="payment-icon" name="amex" size="large" />{"\n"}
                <IconPreview preview type="payment-icon" name="diners" size="large" />{"\n"}
                <IconPreview preview type="payment-icon" name="mastercard" size="large" />{"\n"}
                <IconPreview preview type="payment-icon" name="visa" size="large" />
            </div>
            <div className="row justify-content-evenly">
                <IconPreview preview type="payment-icon" name="mobilepay" size="large" />{"\n"}
                <IconPreview preview type="payment-icon" name="paypal" size="large" />{"\n"}
                <IconPreview preview type="payment-icon" name="swish" size="large" />{"\n"}
                <IconPreview preview type="payment-icon" name="vipps" size="large" />{"\n"}
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" codeFigure>
            <IconPreview type="payment-icon" name="amex" />{"\n"}
            <IconPreview type="payment-icon" name="diners" />{"\n"}
            <IconPreview type="payment-icon" name="mastercard" />{"\n"}
            <IconPreview type="payment-icon" name="visa" />{"\n"}
            <IconPreview type="payment-icon" name="mobilepay" />{"\n"}
            <IconPreview type="payment-icon" name="paypal" />{"\n"}
            <IconPreview type="payment-icon" name="swish" />{"\n"}
            <IconPreview type="payment-icon" name="vipps" />
        </ComponentPreview>

        <h3>Sizes</h3>
        <p>
            Different sizes are available by
            adding <CodeTags type="secondary" code=".payment-icon-small" />, <CodeTags type="secondary" code=".payment-icon-medium" />, <CodeTags type="secondary" code=".payment-icon-large" /> and <CodeTags type="secondary" code=".payment-icon-huge" />.
            If no size is provided <CodeTags type="secondary" code=".payment-icon-medium" /> is defaulted.
        </p>
        <ComponentPreview language="html" showCasePanel>
            <div className="row justify-content-evenly align-items-end">
                <IconPreview type="payment-icon" previewSize name="visa" size="small" />{"\n"}
                <IconPreview type="payment-icon" previewSize name="visa" size="medium" />{"\n"}
                <IconPreview type="payment-icon" previewSize name="visa" size="large" />{"\n"}
                <IconPreview type="payment-icon" previewSize name="visa" size="huge" />
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" codeFigure>
            <IconPreview type="payment-icon" name="visa" size="small" />{"\n"}
            <IconPreview type="payment-icon" name="visa" size="medium" />{"\n"}
            <IconPreview type="payment-icon" name="visa" size="large" />{"\n"}
            <IconPreview type="payment-icon" name="visa" size="huge" />{"\n"}
        </ComponentPreview>

        <h3>Usage</h3>
        <p>Typical usage would be in for instance an <CodeTags type="secondary" code=".item-list" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ul className="item-list item-list-striped">
                <li>
                    <div className="d-flex align-items-center">{"\n"}
                        <IconPreview type="payment-icon" name="visa" className="mr-2" />{"\n"}
                        <span>4925*********004</span>{"\n"}
                    </div>
                    <ActionListComponent items={items} />
                </li>
                <li>
                    <div className="d-flex align-items-center">{"\n"}
                        <IconPreview type="payment-icon" name="mastercard" className="mr-2" />{"\n"}
                        <span>5792*********138</span>{"\n"}
                        <span className="badge badge-blue ml-2">new</span>{"\n"}
                    </div>{"\n"}
                    <a href="https://payex.com">www.payex.com</a>{"\n"}
                </li>
                <li>
                    <div className="d-flex align-items-center">{"\n"}
                        <IconPreview type="payment-icon" name="amex" className="mr-2" />{"\n"}
                        <span>3651*********701</span>{"\n"}
                    </div>
                    <i className="material-icons">star</i>{"\n"}
                </li>
                <li>
                    <div className="d-flex align-items-center">{"\n"}
                        <IconPreview type="payment-icon" name="visa" className="mr-2" />{"\n"}
                        <span>4925*********007</span>{"\n"}
                    </div>{"\n"}
                    <span className="status status-success">Active</span>{"\n"}
                    <button type="button" className="btn btn-executive btn-xs ml-2"><i className="material-icons">delete</i></button>{"\n"}
                </li>
            </ul>
        </ComponentPreview>
    </>
);

const Flags = () => (
    <>
        <h2 id="flags">Flags</h2>
        <p>To use the flag icons add the classes <CodeTags type="secondary" code=".flag-icon" /> and <CodeTags type="secondary" code=".flag-icon-xx" /> (where
        xx is the <a href="https://www.iso.org/obp/ui/#search">ISO 3166-1-alpha-2 code</a> of a country) to an empty <CodeTags type="primary" code={"<i>"} />.</p>
        <ComponentPreview language="html" showCasePanel>
            <div className="row justify-content-evenly align-items-end">
                <IconPreview preview type="flag-icon" name="se" />
                <IconPreview preview type="flag-icon" name="no" />
                <IconPreview preview type="flag-icon" name="dk" />
                <IconPreview preview type="flag-icon" name="fi" />
                <IconPreview preview type="flag-icon" name="eu" />
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" codeFigure>
            <i className="flag-icon flag-icon-no"></i>{"\n"}
            <i className="flag-icon flag-icon-sv"></i>{"\n"}
            <i className="flag-icon flag-icon-dk"></i>{"\n"}
            <i className="flag-icon flag-icon-fi"></i>{"\n"}
            <i className="flag-icon flag-icon-eu"></i>{"\n"}
        </ComponentPreview>
        <h3>Squared</h3>
        <p>To use a squared version of a flag add the class <CodeTags type="secondary" code=".flag-icon-squared" />.</p>
        <ComponentPreview language="html" showCasePanel>
            <div className="row justify-content-evenly align-items-end">
                <IconPreview preview type="flag-icon" squaredFlag name="se" />
                <IconPreview preview type="flag-icon" squaredFlag name="no" />
                <IconPreview preview type="flag-icon" squaredFlag name="dk" />
                <IconPreview preview type="flag-icon" squaredFlag name="fi" />
                <IconPreview preview type="flag-icon" squaredFlag name="eu" />
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" codeFigure>
            <i className="flag-icon flag-icon-squared flag-icon-no"></i>{"\n"}
            <i className="flag-icon flag-icon-squared flag-icon-sv"></i>{"\n"}
            <i className="flag-icon flag-icon-squared flag-icon-dk"></i>{"\n"}
            <i className="flag-icon flag-icon-squared flag-icon-fi"></i>{"\n"}
            <i className="flag-icon flag-icon-squared flag-icon-eu"></i>{"\n"}
        </ComponentPreview>
        <h3>Sizes</h3>
        <p>Flags support sizes <CodeTags type="secondary" code=".payment-icon-tiny" />, <CodeTags type="secondary" code=".payment-icon-small" />, <CodeTags type="secondary" code=".payment-icon-medium" />, <CodeTags type="secondary" code=".payment-icon-large" /> and <CodeTags type="secondary" code=".payment-icon-huge" />.
        If no size is provided <CodeTags type="secondary" code=".payment-icon-tiny" /> is defaulted.</p>
        <ComponentPreview language="html" showCasePanel>
            <div className="row justify-content-evenly align-items-end">
                <IconPreview previewSize type="flag-icon" name="se" size="tiny" />
                <IconPreview previewSize type="flag-icon" name="no" size="small" />
                <IconPreview previewSize type="flag-icon" name="dk" size="medium" />
                <IconPreview previewSize type="flag-icon" name="fi" size="large" />
                <IconPreview previewSize type="flag-icon" name="eu" size="huge" />
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" codeFigure>
            <i className="flag-icon flag-icon-no flag-icon-tiny"></i>{"\n"}
            <i className="flag-icon flag-icon-sv flag-icon-small"></i>{"\n"}
            <i className="flag-icon flag-icon-dk flag-icon-medium"></i>{"\n"}
            <i className="flag-icon flag-icon-fi flag-icon-large"></i>{"\n"}
            <i className="flag-icon flag-icon-eu flag-icon-huge"></i>{"\n"}
        </ComponentPreview>
        <h3>Squared Sizes</h3>
        <ComponentPreview language="html" showCasePanel>
            <div className="row justify-content-evenly align-items-end">
                <IconPreview previewSize type="flag-icon" squaredFlag name="se" size="tiny" />
                <IconPreview previewSize type="flag-icon" squaredFlag name="no" size="small" />
                <IconPreview previewSize type="flag-icon" squaredFlag name="dk" size="medium" />
                <IconPreview previewSize type="flag-icon" squaredFlag name="fi" size="large" />
                <IconPreview previewSize type="flag-icon" squaredFlag name="eu" size="huge" />
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" codeFigure>
            <i className="flag-icon flag-icon-squared flag-icon-no flag-icon-tiny"></i>{"\n"}
            <i className="flag-icon flag-icon-squared flag-icon-sv flag-icon-small"></i>{"\n"}
            <i className="flag-icon flag-icon-squared flag-icon-dk flag-icon-medium"></i>{"\n"}
            <i className="flag-icon flag-icon-squared flag-icon-fi flag-icon-large"></i>{"\n"}
            <i className="flag-icon flag-icon-squared flag-icon-eu flag-icon-huge"></i>{"\n"}
        </ComponentPreview>
    </>
);

class Icons extends Component {
    componentDidMount () {
        actionList.init();
    }

    render () {
        return (
            <DocContainer docToc>
                <p className="lead">The Swedbank Pay DesignGuide includes a variety of icons. Mainly we use the material icons, but we also include icons for known payment providers, and flags for most nations in the world.</p>
                <MaterialIcons />
                <PaymentIcons />
                <Flags />
            </DocContainer>
        );
    }
}

export default Icons;

/* For testing */
export { MaterialIcons, PaymentIcons, Flags };
