import React from "react";
import { render } from "react-dom";

import "./less/px.less";
import "./less/themes/documentation.less";
import "./less/designguide.less";
import App from "./App/App";

render(
    <App />,
    document.getElementById("root")
);

if (module.hot) {
    module.hot.accept();
}
