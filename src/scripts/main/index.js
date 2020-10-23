import { init } from "~/node_modules/@sentry/browser";
import "@src/polyfills";

import accordion from "./accordion";
import actionList from "./action-list";
import alert from "./alert";
import datepicker from "./datepicker";
import dialog from "./dialog";
import expandable from "./expandable";
import nav from "./nav";
import rangeslider from "./rangeslider";
import sheet from "./sheet";
import sidebar from "./sidebar";
import script from "./script";
import tabs from "./tabs";
import toast from "./toast";
import tooltips from "./tooltips";
import topbar from "./topbar";
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

window.addEventListener("popstate", () => {
    if (document.body.className.includes("has-vscroll")) { document.body.classList.remove("has-vscroll"); }
});

const dg = {
    accordion,
    actionList,
    alert,
    datepicker,
    dialog,
    expandable,
    nav,
    rangeslider,
    sheet,
    sidebar,
    script,
    tabs,
    toast,
    tooltips,
    topbar,
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
    actionList,
    alert,
    datepicker,
    dialog,
    expandable,
    nav,
    rangeslider,
    sheet,
    script,
    tabs,
    toast,
    tooltips,
    topbar,
    utils,
    validation
};
