import React from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocToc } from "#";
import PaymentIcon from "@/PaymentIcon";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>To use an icon, provide the following markup: <PrismCode className="language-html">{"<i class=\"payment-icon {icon_name}\"></i>"}</PrismCode>.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <PaymentIcon name="amex" />{"\n"}
            <PaymentIcon name="diners" />{"\n"}
            <PaymentIcon name="mastercard" />{"\n"}
            <PaymentIcon name="mobilepay" />{"\n"}
            <PaymentIcon name="paypal" />{"\n"}
            <PaymentIcon name="swish" />{"\n"}
            <PaymentIcon name="vipps" />{"\n"}
            <PaymentIcon name="visa" />
        </ComponentPreview>
    </>
);

const PaymentIconsText = () => (
    <div className="col-lg-10 doc-body">
        <p className="lead">Payment icons...</p>
        <Overview />
    </div>
);

const PaymentIcons = () => (
    <div className="doc-container">
        <div className="row">
            <PaymentIconsText />
            <DocToc component={PaymentIconsText} />
        </div>
    </div>
);

export default PaymentIcons;

/* For testing */
export { Overview, PaymentIconsText };
