import alert from "./alert";
import button from "./button";
import rangeslider from "./rangeslider";
import modal from "./modal";
import tabs from "./tabs";
import script from "./script";

const px = {
    alert,
    button,
    rangeslider,
    modal,
    tabs,
    script
};

window.px = px;

if (!window.stopPx) {
    document.addEventListener("DOMContentLoaded", () => {
        px.script.initAll();
    });
}

export default px;
export { alert, button, rangeslider, modal, tabs, script };

/* istanbul ignore if|else */
if (module.hot) {
    module.hot.accept();
}
