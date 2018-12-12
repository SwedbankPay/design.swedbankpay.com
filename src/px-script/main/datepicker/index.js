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

        // A type of format check to see if the value is valid [AW]

        const options = {
            defaultDate: datepickerValue || null,
            dateFormat: datepickerFormat ? formats[datepickerFormat].dateFormat : "Y-m-d",
            locale: datepickerFormat ? formats[datepickerFormat] : null,
            enableTime: !!datepickerTime || "",
            showMonths: datepickerMonths || 1,
            time_24hr: true
        };

        if (datepickerFormat && options.enableTime) {
            options.dateFormat = formats[datepickerFormat].dateFormat.concat(" ", formats[datepickerFormat].hourFormat);
            options.locale = formats[datepickerFormat];
        }
        // else if (datepickerFormat) {
        //     options.dateFormat = formats[datepickerFormat].dateFormat;
        //     options.locale = formats[datepickerFormat];
        // }

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
