import React from "react";
import { render } from "react-dom";
import App from "./App";

import "prismjs";
import "prismjs/themes/prism.css";

import "./less/swedbankpay.less";
import "./less/documentation-swedbankpay.less";

import "@src/img/swedbankpay/logo/swedbankpay-logo-neg.svg";

const importAll = r => r.keys().map(r);

importAll(require.context("./img/swedbankpay/logo/", false, /\.(png|jpe?g|svg)$/));

render(
    <App />,
    document.getElementById("designguide")
);

if (module.hot) {
    module.hot.accept();
}
