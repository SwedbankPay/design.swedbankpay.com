import alert from "./alert";
import button from "./button";
import loader from "./loader";
import modal from "./modal";
import rangeslider from "./rangeslider";
import script from "./script";
import tabs from "./tabs";

const px = {
    alert,
    button,
    loader,
    modal,
    rangeslider,
    script,
    tabs
};

window.px = px;

if (!window.stopPx) {
    document.addEventListener("DOMContentLoaded", () => {
        px.script.initAll();
    });
}

export default px;
export { alert, button, loader, modal, rangeslider, script, tabs };

/* istanbul ignore if|else */
if (module.hot) {
    module.hot.accept();
}
