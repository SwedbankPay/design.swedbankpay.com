import alert from "./alert";

const px = {
    alert
};

window.px = px;

const init = () => {
    for (const key in px) {
        px[key].init();
    }
};

document.addEventListener("DOMContentLoaded", init, false);

export default px;
export { alert };
