import alert from "./alert";
import button from "./button";
import loader from "./loader";

const px = {
    alert,
    button,
    loader
};

const init = () => {
    for (const key in px) {
        if (typeof px[key].init === "function") {
            px[key].init();
        }
    }
};

document.addEventListener("DOMContentLoaded", init, false);

window.px = px;
export default px;
export { alert, button, loader };

if (module.hot) {
    module.hot.accept();
}
