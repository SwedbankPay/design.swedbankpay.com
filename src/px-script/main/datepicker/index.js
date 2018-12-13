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
            datepickerAltinput,
            datepickerMode,
            required
        } = datepicker.dataset;

        console.log(datepicker.dataset);

        // A type of format check to see if the value is valid [AW]

        const format = datepickerFormat ? formats[datepickerFormat] : null;

        const options = {
            defaultDate: datepickerValue || null,
            minDate: datepickerMin || null,
            maxDate: datepickerMax || null,
            dateFormat: format ? format.dateFormat : "Y-m-d",
            locale: format,
            enableTime: !!datepickerTime || "",
            showMonths: datepickerMonths || 1,
            altInput: !!datepickerAltinput,
            altFormat: datepickerAltinput ? datepickerAltinput : "",
            mode: datepickerMode || "single",
            time_24hr: true
        };

        if (format && options.enableTime) {
            options.dateFormat = format.dateFormat.concat(" ", format.hourFormat);
        }

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
