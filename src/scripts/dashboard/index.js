import chart from "./chart";

const currentScript = document.currentScript;

if (currentScript) {
    if (currentScript.getAttribute("global")) {
        const dg = window.dg || {};

        dg.chart = chart;

        window.dg = dg;
    }
}

export default { chart };

export {
    chart
};
