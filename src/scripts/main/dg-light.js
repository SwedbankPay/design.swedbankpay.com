import { init } from "~/node_modules/@sentry/browser";
import "@src/polyfills";

import alert from "./alert";
import script from "./script";
import tooltips from "./tooltips";
import utils from "./utils";
import validation from "./validation";

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

document.addEventListener("mousedown", () => { document.body.classList.add("intent-mouse"); });
document.addEventListener("keydown", () => { document.body.classList.remove("intent-mouse"); });

const dg = {
    alert,
    script,
    tooltips,
    utils,
    validation
};

window.dg = window.dg ? Object.assign(dg, window.dg) : dg;

if (!window.stopDg) {
    document.addEventListener("DOMContentLoaded", () => {
        dg.script.initAll();
    });
}

export default dg;

export {
    alert,
    script,
    tooltips,
    utils,
    validation
};
