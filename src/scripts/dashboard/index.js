import chart from "./chart";

const dg = window.dg || {};

dg.chart = chart;

window.dg = dg;

export default dg;

export {
    chart
};
