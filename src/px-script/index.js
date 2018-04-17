import alert from "./alert";
import button from "./button";
import rangeslider from "./rangeslider";
import modal from "./modal";
import tabs from "./tabs";

const px = {
    alert,
    button,
    rangeslider,
    modal,
    tabs
};

// for (const key in px) {
//     console.log(px[key]());
// }

if (!window.stopPx) {
    // document.addEventListener("DOMContentLoaded", () => { script.initAll(px); }, false);
}

window.px = px;
export default px;
export { alert, button, rangeslider, modal, tabs };

/* istanbul ignore if|else */
if (module.hot) {
    module.hot.accept();
}
