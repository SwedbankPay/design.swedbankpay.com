import alert from "./alert";
import button from "./button";
import loader from "./loader";
import script from "./script";

const px = {
    alert,
    button,
    loader,
    script
};

document.addEventListener("DOMContentLoaded", () => { script.initAll(px); }, false);

window.px = px;
export default px;
export { alert, button, loader, script };

/* istanbul ignore if|else */
if (module.hot) {
    module.hot.accept();
}
