import React from "react";
import { render } from "react-dom";
import App from "./App";

import "./less/payex.less";
import "./less/documentation-payex.less";

const importAll = r => r.keys().map(r);

importAll(require.context("./img/payex/logo/", false, /\.(png|jpe?g|svg)$/));

render(
    <App />,
    document.getElementById("designguide")
);

if (module.hot) {
    module.hot.accept();
}
