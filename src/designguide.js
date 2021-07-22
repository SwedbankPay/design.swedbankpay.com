
import dg from "./scripts/main/index";

window.dg = window.dg ? Object.assign(dg, window.dg) : dg;

if (!window.stopDg) {
    document.addEventListener("DOMContentLoaded", () => {
        dg.script.initAll();
    });
}
