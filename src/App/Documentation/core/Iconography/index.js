import React, { Component } from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocToc, Property, Icon } from "#";
import PaymentIcon from "@/PaymentIcon";
import actionList from "$/px-script/main/action-list";

const MaterialIcons = () => (
    <>
        <h2 id="material-icons">Material Icons</h2>
        <p>To use an icon, provide the following markup: <PrismCode className="language-html">{"<i class=\"material-icons\">{icon_name}</i>"}</PrismCode>.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <i className="material-icons">android</i>{"\n"}
            <i className="material-icons">contact_support</i>{"\n"}
            <i className="material-icons">face</i>{"\n"}
            <i className="material-icons">star</i>{"\n"}
            <i className="material-icons">warning</i>{"\n"}
        </ComponentPreview>
        <h3>Sizes</h3>
        <p>Material icons also come in different sizes, the available ones are <code className="token property">.tiny</code>, <code className="token property">.small</code>, <code className="token property">.medium</code> and <code className="token property">.large</code>.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <i className="material-icons tiny">android</i>{"\n"}
            <i className="material-icons small">android</i>{"\n"}
            <i className="material-icons">android</i>{"\n"}
            <i className="material-icons medium">android</i>{"\n"}
            <i className="material-icons large">android</i>{"\n"}
        </ComponentPreview>
    </>
);

const PaymentIcons = () => (
    <>
        <h2 id="payment-icons">Payment Icons</h2>
        <p>To use an icon, provide the following markup: <PrismCode className="language-html">{"<i class=\"payment-icon {icon_name}\"></i>"}</PrismCode>.</p>
        <ComponentPreview language="html" showCasePanel>
            <div className="row justify-content-evenly mb-2">
                <PaymentIcon preview name="amex" size="large" />{"\n"}
                <PaymentIcon preview name="diners" size="large" />{"\n"}
                <PaymentIcon preview name="mastercard" size="large" />{"\n"}
                <PaymentIcon preview name="visa" size="large" />
            </div>
            <div className="row justify-content-evenly">
                <PaymentIcon preview name="mobilepay" size="large" />{"\n"}
                <PaymentIcon preview name="paypal" size="large" />{"\n"}
                <PaymentIcon preview name="swish" size="large" />{"\n"}
                <PaymentIcon preview name="vipps" size="large" />{"\n"}
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" codeFigure>
            <PaymentIcon name="amex" />{"\n"}
            <PaymentIcon name="diners" />{"\n"}
            <PaymentIcon name="mastercard" />{"\n"}
            <PaymentIcon name="visa" />{"\n"}
            <PaymentIcon name="mobilepay" />{"\n"}
            <PaymentIcon name="paypal" />{"\n"}
            <PaymentIcon name="swish" />{"\n"}
            <PaymentIcon name="vipps" />
        </ComponentPreview>

        <h3>Sizes</h3>
        <p>
            Different sizes are available by adding <Property value=".small" />, <Property value=".medium" />, <Property value=".large" /> and
            <Property value=".huge" />. If no size is provided <Property value=".medium" /> is defaulted.
        </p>
        <ComponentPreview language="html" showCasePanel>
            <div className="row justify-content-evenly align-items-center">
                <PaymentIcon previewSize name="visa" size="small" />{"\n"}
                <PaymentIcon previewSize name="visa" size="medium" />{"\n"}
                <PaymentIcon previewSize name="visa" size="large" />{"\n"}
                <PaymentIcon previewSize name="visa" size="huge" />
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" codeFigure>
            <PaymentIcon name="visa" size="small" />{"\n"}
            <PaymentIcon name="visa" size="medium" />{"\n"}
            <PaymentIcon name="visa" size="large" />{"\n"}
            <PaymentIcon name="visa" size="huge" />{"\n"}
        </ComponentPreview>

        <h3>Usage</h3>
        <p>Typical usage would be in for instance an <Property value=".item-list" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ul className="item-list item-list-striped">
                <li>
                    <div className="d-flex align-items-center">{"\n"}
                        <PaymentIcon name="visa" className="mr-2" />{"\n"}
                        <span>4925*********004</span>{"\n"}
                    </div>
                    <div className="action-list">{"\n"}
                        <Icon icon="more_vert" />{"\n"}
                        <div className="action-menu">{"\n"}
                            <a href="#" onClick={e => e.preventDefault()}><Icon icon="bookmark"/>Add bookmark</a>{"\n"}
                            <a href="#" onClick={e => e.preventDefault()}><Icon icon="business_center"/>Add client</a>{"\n"}
                            <a href="#" onClick={e => e.preventDefault()}><Icon icon="add_circle"/>Add document</a>{"\n"}
                            <a href="#" onClick={e => e.preventDefault()}><Icon icon="person_add"/>Add user</a>{"\n"}
                        </div>
                    </div>
                </li>
                <li>
                    <div className="d-flex align-items-center">{"\n"}
                        <PaymentIcon name="mastercard" className="mr-2" />{"\n"}
                        <span>5792*********138</span>{"\n"}
                        <span className="badge badge-blue ml-2">new</span>{"\n"}
                    </div>{"\n"}
                    <a href="https://developer.payex.com">developer.payex.com</a>{"\n"}
                </li>
                <li>
                    <div className="d-flex align-items-center">{"\n"}
                        <PaymentIcon name="amex" className="mr-2" />{"\n"}
                        <span>3651*********701</span>{"\n"}
                    </div>
                    <i className="material-icons">star</i>{"\n"}
                </li>
                <li>
                    <div className="d-flex align-items-center">{"\n"}
                        <PaymentIcon name="visa" className="mr-2" />{"\n"}
                        <span>4925*********007</span>{"\n"}
                    </div>
                    <span className="status status-success">Active</span>{"\n"}
                    <button type="button" className="btn btn-danger btn-xs"><i className="material-icons">delete</i></button>{"\n"}
                </li>
            </ul>
        </ComponentPreview>
    </>
);

const IconsText = () => (
    <div className="col-lg-10 doc-body">
        <p className="lead">The PayEx DesignGuide includes Google{"'"}s material icons. For a full overview of the available icons please visit <a href="https://material.io/tools/icons/">this site</a>.</p>
        <MaterialIcons />
        <PaymentIcons />
    </div>
);

class Icons extends Component {
    componentDidMount () {
        actionList.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <IconsText />
                    <DocToc component={IconsText} />
                </div>
            </div>
        );
    }
}

export default Icons;

/* For testing */
export { MaterialIcons, PaymentIcons, IconsText };
