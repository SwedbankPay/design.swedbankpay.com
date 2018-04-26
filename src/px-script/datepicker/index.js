import rome from "rome";

import formats from "./formats";

// 080989◢◤200418
const datepicker = (() => {
    window.moment = rome.moment;

    const _createDatepicker = datepicker => {
        const { datepickerFormat, datepickerTime, datepickerMin, datepickerMax, datepickerInitValue } = datepicker.dataset;
        const { weekStart, dateFormat, hourFormat } = formats[datepickerFormat] || formats.iso8601;

        if (datepickerFormat && !formats[datepickerFormat]) {
            console.warn(`${datepickerFormat} is not a recognised date format, using default date format instead.`);
        }

        const options = {
            weekStart,
            inputFormat: `${datepickerTime ? `${hourFormat} ` : ""}${dateFormat}`,
            time: !!datepickerTime || false,
            min: datepickerMin || null,
            max: datepickerMax || null,
            initialValue: datepickerInitValue || null,
            required: true
        };

        rome(datepicker, options);
    };

    const init = () => {
        const datepickers = document.querySelectorAll("[data-datepicker]");
        datepickers.forEach(picker => {
            _createDatepicker(picker);
        });
    };

    return { init };
})();

export default datepicker;
