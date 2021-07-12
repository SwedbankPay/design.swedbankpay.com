import React from "react";
import { render } from "react-dom";
import App from "./App";

import "./less/swedbankpay.less";
import "./less/documentation-swedbankpay.less";

const importAll = r => r.keys().map(r);

importAll(require.context("./img/swedbankpay/logo/", false, /\.(png|jpe?g|svg)$/));

render(
    <App />,
    document.getElementById("designguide")
);

if (module.hot) {
    module.hot.accept();
}
