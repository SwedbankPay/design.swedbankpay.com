import alert from "./alert";

const px = {
    alert
};

// for (const key in px) {
//     console.log(px[key]());
// }

if (!window.stopPx) {
    // document.addEventListener("DOMContentLoaded", () => { script.initAll(px); }, false);
    console.log("stopPX is false");
}

window.px = px;
export default px;
export { alert };

/* istanbul ignore if|else */
if (module.hot) {
    module.hot.accept();
}
