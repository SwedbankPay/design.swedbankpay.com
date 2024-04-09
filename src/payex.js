import React from "react";
import { createRoot } from "react-dom/client";
import "./scripts/main";
import App from "./App";

import "./less/payex.less";
import "./less/documentation-payex.less";

const importAll = (r) => r.keys().map(r);

importAll(require.context("./img/payex/logo/", false, /\.(png|jpe?g|svg)$/));

const root = createRoot(document.getElementById("designguide"));

root.render(<App />);

if (module.hot) {
	module.hot.accept();
}
