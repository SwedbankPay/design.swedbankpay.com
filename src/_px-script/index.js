// import alert from "./alert";
// import button from "./button";
// import loader from "./loader";
// import modal from "./modal";
// import rangeslider from "./rangeslider";
// import utils from "./utils";
// import script from "./script";

const px = {
    // alert,
    // button,
    // loader,
    // modal,
    // rangeslider,
    // utils,
    // script
};

if (!window.stopPx) {
    // document.addEventListener("DOMContentLoaded", () => { script.initAll(px); }, false);
}

window.px = px;
export default px;
// export {
//     alert,
//     button,
//     loader,
//     modal,
//     rangeslider,
//     utils,
//     script
// };

/* istanbul ignore if|else */
if (module.hot) {
    module.hot.accept();
}
