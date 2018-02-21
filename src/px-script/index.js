import alert from "./alert/alert";

const px = {
    alert
};

window.px = px;
for (const key in px) {
    px[key].init();
}

export default px;
export { alert };
