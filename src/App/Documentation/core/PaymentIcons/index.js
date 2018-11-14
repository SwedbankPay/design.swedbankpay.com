import React, { Component } from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocToc, Property, Icon } from "#";
import PaymentIcon from "@/PaymentIcon";
import actionList from "$/px-script/action-list";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>To use an icon, provide the following markup: <PrismCode className="language-html">{"<i class=\"payment-icon {icon_name}\"></i>"}</PrismCode>.</p>
        <ComponentPreview language="html" showCasePanel>
            <div className="row justify-content-evenly mb-2">
                <PaymentIcon preview name="amex" />{"\n"}
                <PaymentIcon preview name="diners" />{"\n"}
                <PaymentIcon preview name="mastercard" />{"\n"}
                <PaymentIcon preview name="visa" />
            </div>
            <div className="row justify-content-evenly">
                <PaymentIcon preview name="mobilepay" />{"\n"}
                <PaymentIcon preview name="paypal" />{"\n"}
                <PaymentIcon preview name="swish" />{"\n"}
                <PaymentIcon preview name="vipps" />{"\n"}
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
    </>
);

const Sizes = () => (
    <>
        <h2 id="sizes">Sizes</h2>
        <p>Sizes... <Property value=".small" />, <Property value=".medium" />, <Property value=".large" /> and <Property value=".huge" />. If no size is provided <Property value=".medium" /> is defaulted.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="row justify-content-evenly align-items-center">
                <PaymentIcon name="visa" size="small" />{"\n"}
                <PaymentIcon name="visa" size="medium" />{"\n"}
                <PaymentIcon name="visa" size="large" />{"\n"}
                <PaymentIcon name="visa" size="huge" />
            </div>
        </ComponentPreview>
    </>
);

const Usage = () => (
    <>
        <h2 id="usage">Usage</h2>
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

const PaymentIconsText = () => (
    <div className="col-lg-10 doc-body">
        <p className="lead">Payment icons...</p>
        <Overview />
        <Sizes />
        <Usage />
    </div>
);

class PaymentIcons extends Component {
    componentDidMount () {
        actionList.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <PaymentIconsText />
                    <DocToc component={PaymentIconsText} />
                </div>
            </div>
        );
    }
}

export default PaymentIcons;

/* For testing */
export { Overview, Sizes, Usage, PaymentIconsText };
