import chart from "./chart";

const px = window.px || {};

px.chart = chart;

window.px = px;

export default px;

export {
    chart
};
