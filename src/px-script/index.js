import alert from "./alert";
import button from "./button";
import rangeslider from "./rangeslider";
import modal from "./modal";

const px = {
    alert,
    button,
    rangeslider,
    modal
};

// for (const key in px) {
//     console.log(px[key]());
// }

if (!window.stopPx) {
    // document.addEventListener("DOMContentLoaded", () => { script.initAll(px); }, false);
}

window.px = px;
export default px;
export { alert, button, rangeslider, modal };

/* istanbul ignore if|else */
if (module.hot) {
    module.hot.accept();
}
