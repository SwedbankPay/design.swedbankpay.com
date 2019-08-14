import { init } from "~/node_modules/@sentry/browser";
import "$/polyfills";

import actionList from "./action-list";
import alert from "./alert";
import datepicker from "./datepicker";
import dialog from "./dialog";
import expandable from "./expandable";
import nav from "./nav";
import rangeslider from "./rangeslider";
import sheet from "./sheet";
import script from "./script";
import tabs from "./tabs";
import toast from "./toast";
import topbar from "./topbar";
import utils from "./utils";
import validation from "./validation";

// Sentry reporter
if (process.env.sentry) {
    init({ dsn: "https://a80375d3150043fa85964c8d5eb24e0b@sentry.io/1481099" });
}

document.body.addEventListener("mousedown", () => { document.body.classList.add("using-mouse"); });
document.body.addEventListener("keydown", () => { document.body.classList.remove("using-mouse"); });

const px = {
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
    topbar,
    utils,
    validation
};

window.px = window.px ? Object.assign(px, window.px) : px;

if (!window.stopPx) {
    document.addEventListener("DOMContentLoaded", () => {
        px.script.initAll();
    });
}

export default px;

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
    topbar,
    utils,
    validation
};
