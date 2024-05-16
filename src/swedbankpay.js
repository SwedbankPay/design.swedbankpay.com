import React from "react";
import { createRoot } from "react-dom/client";
import "./scripts/main";
import App from "./App";

import "./less/swedbankpay.less";
import "./less/documentation-swedbankpay.less";

const importAll = (r) => r.keys().map(r);

importAll(
	require.context("./img/swedbankpay/logo/", false, /\.(png|jpe?g|svg)$/),
);

const root = createRoot(document.getElementById("designguide"));

root.render(<App />);

if (module.hot) {
	module.hot.accept();
}
