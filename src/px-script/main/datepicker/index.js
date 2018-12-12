import rome from "rome";

import formats from "./formats";
import flatpickr from "flatpickr";

// 080989◢◤200418
const datepicker = (() => {
    window.moment = window.moment || rome.moment;

    const _createDatepicker = datepicker => {
        const {
            datepickerFormat,
            datepickerTime,
            datepickerMin,
            datepickerMax,
            datepickerValue,
            datepickerMonths,
            required
        } = datepicker.dataset;

        // Some format check to see if it's valid [AW]

        const options = {
            defaultDate: datepickerValue || null
        };

        flatpickr(datepicker, options);
    };

    const init = () => {
        const datepickers = document.querySelectorAll("[data-datepicker]");

        if (datepickers) {
            datepickers.forEach(picker => {
                _createDatepicker(picker);
            });
        }
    };

    return { init };
})();

export default datepicker;
