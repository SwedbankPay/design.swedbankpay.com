import React from "react";
import { createRoot } from "react-dom/client";
import { init } from "@sentry/browser";
import "./scripts/main";
import App from "./App";

import "./less/swedbankpay.less";
import "./less/documentation-swedbankpay.less";

const importAll = r => r.keys().map(r);

importAll(require.context("./img/swedbankpay/logo/", false, /\.(png|jpe?g|svg)$/));

// Sentry reporter
if (process.env.sentry) {
    init({
        dsn: "https://a80375d3150043fa85964c8d5eb24e0b@sentry.io/1481099",
        whitelistUrls: [
            "https://design.swedbankpay.com/",
            "https://design.payex.com/",
            "https://swedbankpaydesignguide.z16.web.core.windows.net/",
            "https://payexdesignguide.z16.web.core.windows.net/"
        ]
    });
}

const root = createRoot(document.getElementById("designguide"));

root.render(
    <App />
);

if (module.hot) {
    module.hot.accept();
}
